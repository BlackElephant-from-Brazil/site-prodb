'use client'

import { useState, useMemo } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Modal } from '@/components/ui/Modal'
import { ContactForm } from '@/components/forms/ContactForm'
import { trackEvent } from '@/lib/analytics'
import {
  type ConfiguratorState,
  type CloudRegion,
  type CloudOS,
  type ManagedLevel,
  vcpuOptions,
  ramOptions,
  ssdOptions,
  bandwidthOptions,
  regionLabels,
  osLabels,
  managedLevelLabels,
  PRICE_VCPU,
  PRICE_RAM,
  PRICE_SSD,
  PRICE_BW,
  PRICE_DR,
  PRICE_MANAGED,
} from '@/content/cloud-plans'

const DEFAULT_CONFIG: ConfiguratorState = {
  vcpu: 4,
  ramGb: 16,
  ssdGb: 200,
  bandwidthGbps: 1,
  region: 'SP',
  os: 'ubuntu-22',
  managedLevel: 'managed',
}

function SliderRow<T extends number>({
  label,
  options,
  value,
  onChange,
  format,
}: {
  label: string
  options: T[]
  value: T
  onChange: (v: T) => void
  format: (v: T) => string
}) {
  const idx = options.indexOf(value)
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="mono-stat text-base font-bold text-navy-900">{format(value)}</span>
      </div>
      <input
        type="range"
        min={0}
        max={options.length - 1}
        step={1}
        value={idx}
        onChange={e => onChange(options[Number(e.target.value)])}
        className="w-full h-2 rounded-full appearance-none bg-slate-200 accent-cyan-400 cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2"
        aria-label={label}
      />
      <div className="flex justify-between text-[10px] text-slate-400 select-none">
        <span>{format(options[0])}</span>
        <span>{format(options[options.length - 1])}</span>
      </div>
    </div>
  )
}

function SegmentedControl<T extends string>({
  label,
  options,
  value,
  onChange,
  renderOption,
}: {
  label: string
  options: T[]
  value: T
  onChange: (v: T) => void
  renderOption: (v: T) => string
}) {
  return (
    <div className="space-y-2">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={cn(
              'rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400',
              value === opt
                ? 'border-cyan-400 bg-cyan-400/10 text-navy-900'
                : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
            )}
          >
            {renderOption(opt)}
          </button>
        ))}
      </div>
    </div>
  )
}

function NativeSelect<T extends string>({
  label,
  options,
  value,
  onChange,
  renderOption,
}: {
  label: string
  options: T[]
  value: T
  onChange: (v: T) => void
  renderOption: (v: T) => string
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value as T)}
          className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-3 pr-10 text-sm text-slate-900 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none cursor-pointer"
        >
          {options.map(opt => (
            <option key={opt} value={opt}>{renderOption(opt)}</option>
          ))}
        </select>
        <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
      </div>
    </div>
  )
}

function estimatePrice(config: ConfiguratorState): number {
  const base =
    config.vcpu * PRICE_VCPU +
    config.ramGb * PRICE_RAM +
    config.ssdGb * PRICE_SSD +
    config.bandwidthGbps * PRICE_BW

  const drMultiplier = config.region.includes('DR') ? 1 + PRICE_DR : 1
  const managed = PRICE_MANAGED[config.managedLevel]

  return Math.round((base * drMultiplier + managed) / 10) * 10
}

function buildConfigSummary(config: ConfiguratorState): string {
  return [
    `Configuração: ${config.vcpu} vCPU, ${config.ramGb} GB RAM, ${config.ssdGb} GB SSD NVMe`,
    `Largura de banda: ${config.bandwidthGbps} Gbps`,
    `Região: ${regionLabels[config.region]}`,
    `SO: ${osLabels[config.os]}`,
    `Nível de gerenciamento: ${managedLevelLabels[config.managedLevel].label}`,
    `Estimativa de preço: R$ ${estimatePrice(config).toLocaleString('pt-BR')}/mês`,
  ].join('\n')
}

export function CloudConfigurator() {
  const [config, setConfig] = useState<ConfiguratorState>(DEFAULT_CONFIG)
  const [modalOpen, setModalOpen] = useState(false)

  const price = useMemo(() => estimatePrice(config), [config])
  const configSummary = useMemo(() => buildConfigSummary(config), [config])

  function set<K extends keyof ConfiguratorState>(key: K) {
    return (value: ConfiguratorState[K]) => {
      setConfig(prev => ({ ...prev, [key]: value }))
      trackEvent('configurator_change', { field: key, value: String(value) })
    }
  }

  function handleGetQuote() {
    trackEvent('configurator_quote_click', { estimated_price: price })
    setModalOpen(true)
  }

  return (
    <>
      <section id="configurador" className="bg-slate-50 py-16 md:py-24" aria-labelledby="configurator-heading">
        <div className="mx-auto max-w-[1184px] px-4 md:px-6 xl:px-8">
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-600">
              Configurador interativo
            </p>
            <h2 id="configurator-heading" className="text-2xl font-bold text-slate-900 md:text-3xl text-balance">
              Monte sua configuração ideal
            </h2>
            <p className="mt-2 text-slate-600 max-w-xl">
              Estimativa em tempo real. O valor final é confirmado por nosso time — sem surpresas.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            {/* Controls */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 space-y-8 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <SliderRow
                  label="vCPU"
                  options={vcpuOptions}
                  value={config.vcpu}
                  onChange={set('vcpu')}
                  format={v => `${v} vCPU`}
                />
                <SliderRow
                  label="Memória RAM"
                  options={ramOptions}
                  value={config.ramGb}
                  onChange={set('ramGb')}
                  format={v => v >= 1024 ? `${v / 1024} TB` : `${v} GB`}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <SliderRow
                  label="SSD NVMe"
                  options={ssdOptions}
                  value={config.ssdGb}
                  onChange={set('ssdGb')}
                  format={v => v >= 1000 ? `${v / 1000} TB` : `${v} GB`}
                />
                <SliderRow
                  label="Largura de banda"
                  options={bandwidthOptions}
                  value={config.bandwidthGbps}
                  onChange={set('bandwidthGbps')}
                  format={v => `${v} Gbps`}
                />
              </div>

              <SegmentedControl
                label="Região"
                options={['SP', 'RJ', 'SP+DR', 'RJ+DR'] as CloudRegion[]}
                value={config.region}
                onChange={set('region')}
                renderOption={v => regionLabels[v as CloudRegion]}
              />

              <NativeSelect
                label="Sistema Operacional"
                options={['ubuntu-22', 'ubuntu-20', 'debian-12', 'windows-2022', 'windows-2019', 'bring-your-own'] as CloudOS[]}
                value={config.os}
                onChange={set('os')}
                renderOption={v => osLabels[v as CloudOS]}
              />

              {/* Managed level */}
              <div className="space-y-3">
                <span className="text-sm font-medium text-slate-700">Nível de gerenciamento</span>
                <div className="grid gap-3 sm:grid-cols-3">
                  {(['iaas', 'managed', 'fully-managed'] as ManagedLevel[]).map(level => {
                    const info = managedLevelLabels[level]
                    return (
                      <button
                        key={level}
                        type="button"
                        onClick={() => set('managedLevel')(level)}
                        className={cn(
                          'rounded-xl border p-4 text-left transition-all focus-visible:ring-2 focus-visible:ring-cyan-400',
                          config.managedLevel === level
                            ? 'border-cyan-400 bg-cyan-400/5 ring-1 ring-cyan-400'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        )}
                      >
                        <p className="text-xs font-semibold text-slate-900">{info.label}</p>
                        <p className="mt-1 text-[11px] text-slate-500 leading-snug">{info.description}</p>
                        <p className={cn(
                          'mt-2 text-xs font-bold',
                          config.managedLevel === level ? 'text-cyan-600' : 'text-slate-600'
                        )}>
                          {info.price}
                        </p>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Price summary sticky panel */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="rounded-2xl border-2 border-cyan-400 bg-navy-900 p-6 text-white shadow-[0_0_32px_rgba(34,211,238,0.15)]">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-1">
                  Estimativa mensal
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-black mono-stat text-white">
                    R$ {price.toLocaleString('pt-BR')}
                  </span>
                  <span className="text-sm text-slate-400">/mês</span>
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  Preço estimado. Proposta formal confirmada por nosso time em até 2h úteis.
                </p>

                <div className="space-y-2 mb-6 text-xs">
                  <SummaryLine label="vCPU" value={`${config.vcpu} vCPU`} />
                  <SummaryLine label="RAM" value={`${config.ramGb} GB`} />
                  <SummaryLine label="SSD NVMe" value={config.ssdGb >= 1000 ? `${config.ssdGb / 1000} TB` : `${config.ssdGb} GB`} />
                  <SummaryLine label="Banda" value={`${config.bandwidthGbps} Gbps`} />
                  <SummaryLine label="Região" value={regionLabels[config.region]} />
                  <SummaryLine label="Gerenciamento" value={managedLevelLabels[config.managedLevel].label} />
                </div>

                <button
                  type="button"
                  onClick={handleGetQuote}
                  className="w-full rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-navy-950 transition-all hover:bg-cyan-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
                >
                  Solicitar proposta com esta configuração
                </button>

                <p className="mt-3 text-center text-[10px] text-slate-500">
                  Sem compromisso · Resposta em até 2h úteis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Solicitar proposta para servidor cloud"
        description={`Nossa equipe receberá esta configuração e enviará uma proposta formal em até 2h úteis:\n\n${configSummary}`}
      >
        <input type="hidden" name="assunto" value="Servidores Cloud" />
        <ContactForm
          prefilledSubject="Servidores Cloud"
          onSuccess={() => setModalOpen(false)}
          compact
        />
      </Modal>
    </>
  )
}

function SummaryLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-baseline">
      <span className="text-slate-400">{label}</span>
      <span className="font-medium text-slate-200 mono-stat">{value}</span>
    </div>
  )
}
