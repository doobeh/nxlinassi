import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 pb-0 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto fill-indigo-600 opacity-50" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              Coming Soon
            </p>
            &mdash;
            <p>Turks and Caicos Islands</p>
          </div>
        </div>
      </Container>
    </header>
  )
}
