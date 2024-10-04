import { HStack } from '@turbopandaforge/styled-system/jsx'
import { Select } from '@turbopandaforge/ui/core/select'

import { createListCollection } from '@ark-ui/react/select'
import { ChevronsUpDownIcon, Languages } from 'lucide-react'

export type LocaleOption = {
  label: string
  value: string
}

type LocaleSelectProps = {
  locale: string
  label: string
  locales: LocaleOption[]
  // biome-ignore lint/suspicious/noExplicitAny: should be ListCollection<LocaleOption>
  onValueChange?: (details: any) => void
  disabled?: boolean
}

export default function LocaleSelect({
  locales,
  disabled,
  label,
  locale,
  onValueChange,
}: LocaleSelectProps) {
  const collection = createListCollection<LocaleOption>({
    items: locales,
  })

  return (
    <Select.Root
      variant="ghost"
      pt="1"
      disabled={disabled}
      aria-label={label}
      positioning={{ sameWidth: true }}
      collection={collection}
      defaultValue={[locale]}
      onValueChange={onValueChange}
      closeOnSelect
      size="sm"
    >
      <HStack>
        <Select.Label>
          <Languages />
        </Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText />
            <ChevronsUpDownIcon />
          </Select.Trigger>
        </Select.Control>
      </HStack>
      <Select.Positioner>
        <Select.Content>
          <Select.ItemGroup>
            {collection.items.map((item) => (
              <Select.Item key={item.value} item={item}>
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator>✓</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}
