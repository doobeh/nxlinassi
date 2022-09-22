import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={1000}
          height={1500}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-6xl">
            Deploy.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">

          {/* Some placeholder text... */}
          {[
            ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'],
            ['Cursus vitae congue mauris rhoncus. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Dolor sit amet consectetur adipiscing elit duis. Amet mauris commodo quis imperdiet.'],
            ['Dictumst quisque sagittis purus sit amet volutpat.']
          ].map(([name]) => (
              <p>{name}</p>

          ))}

          <Button href="#">Action Button</Button>
          </div>
      
        </div>
      </Container>
    </div>
  )
}
