import { NextPage } from 'next'
import { McDonaldsMenu } from '@/db'
import axios from 'axios'

const Home: NextPage = async () => {
  const { data: menu }: { data: McDonaldsMenu } = await axios.get(
    'http://localhost:3000/api/menu'
  )
  console.log(menu)

  return (
    <main className="container mx-auto p-4">
      <div>McDonald</div>
    </main>
  )
}

export default Home
