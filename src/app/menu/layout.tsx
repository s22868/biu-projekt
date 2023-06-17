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
    <main className="container flex p-4 mx-auto">
      <Nav />
      <section>{children}</section>
    </main>
  )
}
