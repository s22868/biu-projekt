import { NextIntlClientProvider } from 'next-intl'
import { CartProvider } from '@/context/CartContext'
import './globals.css'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return [{ locale: 'pl' }, { locale: 'en' }]
}

export const metadata = {
  title: 'McDonald - Kiosk',
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages
  try {
    messages = (await import(`../../../locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <CartProvider>
          <body className={inter.className}>
            {children}
            <div id="modal-root" />
          </body>
        </CartProvider>
      </NextIntlClientProvider>
    </html>
  )
}
