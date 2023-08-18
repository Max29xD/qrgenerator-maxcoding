'use client'

import { useState } from 'react'
import { QRCode } from 'react-qrcode-logo'
import { Colorful } from '@uiw/react-color'

export default function Generator() {
  const [textInput, setTextInput] = useState('')
  const [logoImage, setLogoImage] = useState('logo.png')
  const [hex, setHex] = useState('#5720ff')

  const textDefault = 'www.marcosbonilla.ml'

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value)
  }

  const onChangeLogoImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader()
      reader.onload = event => {
        if (event.target && event.target.result) {
          setLogoImage(event.target.result.toString())
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const downloadQR = () => {
    const qr = document.getElementById('qr') as HTMLCanvasElement
    const pngUrl = qr
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')

    const currentDate = new Date()
    const day = currentDate.getDate().toString().padStart(2, '0')
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
    const year = currentDate.getFullYear().toString().slice(-2)
    const hours = currentDate.getHours().toString().padStart(2, '0')
    const minutes = currentDate.getMinutes().toString().padStart(2, '0')
    const seconds = currentDate.getSeconds().toString().padStart(2, '0')

    const fileName = `QRMAXCODING • ${day}${month}${year}${hours}${minutes}${seconds}.png`

    let downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = fileName
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <div className='max-w-md border rounded-3xl w-full grid gap-4 place-items-center p-8'>
      <h1 className='uppercase font-semibold text-4xl text-white'>qr logo</h1>
      <div className='grid bg-black justify-items-center gap-2 border rounded-3xl p-2'>
        <input
          type='text'
          onChange={onChangeText}
          placeholder='Escribe Tu Link'
          className='rounded-3xl text-black outline-none py-1 px-4 w-full'
        />
        <div className='relative border-2 border-dotted px-4 py-8 border-white text-white hover:text-max hover:border-max rounded-2xl m-auto grid place-items-center text-center transition-colors duration-300 cursor-pointer'>
          <input
            className='absolute w-full h-full opacity-0 cursor-pointer'
            type='file'
            onChange={onChangeLogoImage}
          />
          <p className='hyphens-none font-semibold'>
            Arrastra o haz click para seleccionar un foto
          </p>
        </div>
        <Colorful
          style={{ width: '100%' }}
          className='border-2 border-dotted border-white p-6 rounded-3xl'
          color={hex}
          disableAlpha
          onChange={color => {
            setHex(color.hex)
          }}
        />
      </div>
      <div className='grid bg-black border rounded-3xl p-2'>
        {/* <QRCode
          id='qr'
          value={textInput === '' ? textDefault : textInput}
          size={357}
          ecLevel='H'
          bgColor='#000000'
          fgColor={hex}
          logoImage={logoImage}
          logoWidth={80}
          qrStyle='dots'
          eyeRadius={5}
        /> */}
        <button
          onClick={downloadQR}
          className='border-2 border-dotted text-white border-white  hover:text-max hover:border-max font-bold py-2 px-4 rounded-3xl transition-colors duration-300'
        >
          Descargar
        </button>
      </div>
      <span className='capitalize text-white'>
        created with ❤️ by{' '}
        <a
          className='font-semibold transition-colors duration-300 hover:text-max'
          href='www.marcosbonilla.ml'
        >
          MaxCoding
        </a>
      </span>
    </div>
  )
}
