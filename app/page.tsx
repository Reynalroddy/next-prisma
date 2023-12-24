import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
  <h1>guy</h1>
  <Link href="/about" className='text-xl bg-red-500 text-white'>About</Link>

  <Link href="/about/aboutinfo" className='text-xl bg-blue-500 text-white'>AboutInfo</Link>

  </>
  )
}
