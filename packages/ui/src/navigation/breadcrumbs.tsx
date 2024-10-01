import { ChevronRightIcon } from 'lucide-react'
import { Fragment } from 'react'

import { HStack, type HstackProps } from '@turbopandaforge/styled-system/jsx'

import { Icon } from '../core/icon'
import { Text } from '../core/text'

interface BreadcrumbsProps extends HstackProps {
  pathname: string
}

export const Breadcrumbs = ({ pathname, ...props }: BreadcrumbsProps) => {
  const crumbs = pathname
    .split('/')
    .filter(Boolean)
    .filter((path) => !['docs'].includes(path))
    .map((path) => path.replace(/-/g, ' '))
  return (
    <HStack gap="1" {...props}>
      {crumbs.map((crumb, index, arr) => (
        <Fragment key={index}>
          <Text
            _last={{ color: 'fg.emphasized' }}
            as="span"
            color="fg.subtle"
            fontWeight="medium"
            textStyle="sm"
            textTransform="capitalize"
          >
            {crumb}
          </Text>
          {arr.length - 1 !== index && (
            <Icon alignSelf="center" color="fg.subtle" size="sm">
              <ChevronRightIcon />
            </Icon>
          )}
        </Fragment>
      ))}
    </HStack>
  )
}
