import { Code } from '@turbopandaforge/ui/core/code'
import { Kbd } from '@turbopandaforge/ui/core/kbd'
import { Link } from '@turbopandaforge/ui/core/link'
import { Pre } from '@turbopandaforge/ui/core/pre'
import Image from 'next/image'
import * as runtime from 'react/jsx-runtime'

const sharedComponents = {
  a: Link,
  code: Code,
  Image,
  kbd: Kbd,
  pre: Pre,
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
  // biome-ignore lint/suspicious/noExplicitAny: ask velite
  [key: string]: any
}

export const MDXContent = ({ code, components, ...props }: MDXProps) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...sharedComponents, ...components }} {...props} />
}
