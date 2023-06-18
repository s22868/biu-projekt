import Nav from '@/components/nav/Nav'

export const metadata = {
  title: 'McDonald - Menu',
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex overflow-hidden">
      <Nav />
      <section className='w-full'>{children}</section>
    </main>
  )
}
