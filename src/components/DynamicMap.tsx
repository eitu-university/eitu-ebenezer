'use client'
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
})

const DynamicMap = () => {
  return (
    <Map />
  )
}

export default DynamicMap