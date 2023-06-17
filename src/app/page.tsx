import { NextPage } from 'next'
import { McDonaldsMenu } from '@/db'
import axios from 'axios'
import Home from '@/components/home/Home'

const Page: NextPage = async () => {
  const { data: menu }: { data: McDonaldsMenu } = await axios.get(
    'http://localhost:3000/api/menu'
  )
  return <Home menu={menu}></Home>
}

export default Page
