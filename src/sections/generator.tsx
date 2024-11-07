'use client'

import { SetStateAction, useState } from 'react'
import ColorPicker from 'react-pick-color'
import Footer from '$/components/footer'
import UploadImage from '$/components/upload-image'
import QRPreview from '$/components/qr-preview'
import Input from '$/components/ui/input'
import { cn } from '$/lib/utils'

export default function Generator() {
  const [textInput, setTextInput] = useState<string>('')
  const [logoImage, setLogoImage] = useState<string>('logo.png')
  const [style, setStyle] = useState<'dots' | 'squares'>('dots')
  const [correction, setCorrection] = useState<'M' | 'L' | 'Q' | 'H'>('M')
  const [logoSize, setLogoSize] = useState<number>(80)
  const [colorQr, setColorQr] = useState<string>('#5720ff')
  const [colorBg, setColorBg] = useState<string>('#ffffff')
  const [colorCheck, setColorCheck] = useState<string>('qr')

  const textDefault = 'https://maxcoding.pro'

  const handleLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = ({ target }) => {
      if (target?.result) {
        setLogoImage(target.result.toString())
      }
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="max-w-md border rounded-3xl w-full grid gap-4 place-items-center p-8">
      <h1 className="uppercase font-semibold text-4xl text-white">qr logo</h1>
      <div className="grid bg-black justify-items-center gap-2 border rounded-3xl p-2">
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTextInput(e.target.value)
          }
          placeholder="Escribe Tu Link"
          className="rounded-3xl text-black outline-none py-1 px-4 w-full font-medium"
        />
        <UploadImage onChange={handleLogo} />
        <div className="w-full grid border border-white rounded-2xl">
          <ColorPicker
            theme={{
              background: 'transparent',
              borderColor: 'transparent',
              borderRadius: '1rem',
              width: '100%',
              boxShadow: 'none'
            }}
            hideInputs
            color={colorCheck === 'qr' ? colorQr : colorBg}
            onChange={(color: { hex: SetStateAction<string> }) => {
              const newColor = color.hex
              if (colorCheck === 'qr') {
                setColorQr(newColor)
              } else {
                setColorBg(newColor)
              }
            }}
          />
          <div className="grid gap-2 justify-center p-2">
            <span className="text-white text-sm text-center font-medium">
              Se recomienda utilizar colores claros para el fondo, para una
              mejor legibilidad del QR
            </span>
            <div className="flex gap-4 justify-center">
              <div className="flex flex-col items-center">
                <label htmlFor="color-qr" className="text-white cursor-pointer">
                  QR
                </label>
                <input
                  id="color-qr"
                  type="radio"
                  value="qr"
                  checked={colorCheck === 'qr'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setColorCheck(e.target.value)
                  }
                  className="accent-maxpurple-500"
                />
              </div>
              <div className="flex flex-col items-center">
                <label htmlFor="color-background" className="text-white cursor-pointer">
                  Fondo
                </label>
                <input
                  id="color-background" 
                  type="radio"
                  value="background"
                  checked={colorCheck === 'background'}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setColorCheck(e.target.value)
                  }
                  className="accent-maxpurple-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-2 border border-white rounded-2xl w-full p-2">
          <div className="grid grid-cols-[1fr_auto] item-center gap-4 w-full">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="correction"
                className="text-white text-center font-medium"
              >
                Corrección
              </label>
              <select
                id="correction"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCorrection(e.target.value as 'M' | 'L' | 'Q' | 'H')
                }
                value={correction}
                className="text-white flex gap-2 bg-black border-2 border-white px-4 py-2 rounded-3xl outline-none hover:bg-white hover:text-black transition-colors duration-300"
              >
                <option value="L">Bajo</option>
                <option value="M">Medio</option>
                <option value="Q">Moderado</option>
                <option value="H">Alto</option>
              </select>
              <span className="text-neutral-300 text-xs text-center">
                A mayor nivel de corrección, mejor será la capacidad de lectura
                del código QR
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white text-center">Estilo</span>
              <div className="flex gap-2">
                <button
                  className={cn(
                    'flex gap-2 border-2 cursor-pointer border-white px-4 py-2 rounded-3xl text-2xl transition-colors duration-300 bg-black text-white',
                    { 'bg-white text-black': style === 'squares' }
                  )}
                  onClick={() => setStyle('squares')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M3 11V3h8v8H3Zm0 10v-8h8v8H3Zm10-10V3h8v8h-8Zm0 10v-8h8v8h-8Z"
                    />
                  </svg>
                </button>
                <button
                  className={cn(
                    'flex gap-2 border-2 cursor-pointer border-white px-4 py-2 rounded-3xl text-2xl transition-colors duration-300 bg-black text-white',
                    { 'bg-white text-black': style === 'dots' }
                  )}
                  onClick={() => setStyle('dots')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 28 28"
                  >
                    <path
                      fill="currentColor"
                      d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10Zm12 0a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm-7 7a5 5 0 1 1-10 0a5 5 0 0 1 10 0Zm7 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <Input
            id="logoSize"
            label="Tamaño"
            className="w-full accent-maxpurple-500"
            type="range"
            min={25}
            max={125}
            step="25"
            value={logoSize}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLogoSize(Number(e.target.value))
            }
          />
        </div>
      </div>
      <QRPreview
        id="qr"
        value={textInput === '' ? textDefault : textInput}
        size={400}
        ecLevel={correction}
        bgColor={colorBg}
        fgColor={colorQr}
        logoImage={logoImage}
        logoWidth={logoSize}
        qrStyle={style}
        eyeRadius={style === 'dots' ? 8 : 0}
      />
      <Footer />
    </div>
  )
}
