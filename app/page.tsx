import Image from 'next/image'
import {components} from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <components.inDev />
    </main>
  )
}
