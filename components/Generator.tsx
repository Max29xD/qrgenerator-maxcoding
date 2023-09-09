'use client'

import { SetStateAction, useState } from 'react'
import { QRCode } from 'react-qrcode-logo'
import ColorPicker from 'react-pick-color'
import Footer from './Footer'
import UploadImage from './UploadImage'
import Download from './Download'
import { twMerge } from 'tailwind-merge'

export default function Generator() {
  const [textInput, setTextInput] = useState<string>('')
  const [logoImage, setLogoImage] = useState<string>('logo.png')
  const [style, setStyle] = useState<'dots' | 'squares'>('dots')
  const [correction, setCorrection] = useState<'M' | 'L' | 'Q' | 'H'>('M')
  const [logoSize, setLogoSize] = useState<number>(80)
  const [colorQr, setColorQr] = useState<string>('#5720ff')
  const [colorBg, setColorBg] = useState<string>('#00000000')
  const [colorCheck, setColorCheck] = useState<string>('qr')

  const textDefault = 'https://maxcoding.vercel.app/'

  const handleLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <div className='max-w-md border rounded-3xl w-full grid gap-4 place-items-center p-8'>
      <h1 className='uppercase font-semibold text-4xl text-white'>qr logo</h1>
      <div className='grid bg-black justify-items-center gap-2 border rounded-3xl p-2'>
        <input
          type='text'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTextInput(e.target.value)
          }
          placeholder='Escribe Tu Link'
          className='rounded-3xl text-black outline-none py-1 px-4 w-full font-medium'
        />
        <UploadImage onChange={handleLogo} />
        <div className='w-full grid border border-white rounded-2xl'>
          <ColorPicker
            theme={{
              background: 'transparent',
              borderColor: '#ffffff00',
              borderRadius: '1rem',
              width: '100%'
            }}
            hideInputs
            color={colorCheck === 'qr' ? colorQr : colorBg}
            onChange={(color: { hex: SetStateAction<string> }) => {
              colorCheck === 'qr'
                ? setColorQr(color.hex)
                : setColorBg(color.hex)
            }}
          />
          <div className='flex gap-4 justify-center pb-2'>
            <label className='text-white flex gap-2'>
              <input
                type='radio'
                value='qr'
                className='accent-maxpurple-500'
                checked={colorCheck === 'qr'}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setColorCheck(e.target.value)
                }
              />
              QR
            </label>
            <label className='text-white flex gap-2'>
              <input
                type='radio'
                className='accent-maxpurple-500'
                value='background'
                checked={colorCheck === 'background'}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setColorCheck(e.target.value)
                }
              />
              Fondo
            </label>
          </div>
        </div>
        <div className='grid gap-2 border border-white rounded-2xl w-full p-2'>
          <div className='grid grid-cols-[1fr_auto] item-center gap-4 w-full'>
            <div className='w-full flex flex-col gap-2'>
              <span className='text-white text-center'>Calidad</span>
              <select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setCorrection(e.target.value as 'M' | 'L' | 'Q' | 'H')
                }
                value={correction}
                className='text-white flex gap-2 bg-black border-2 border-white px-4 py-2 rounded-3xl outline-none w-full'
              >
                <option value='L'>Bajo</option>
                <option value='M'>Medio</option>
                <option value='Q'>Moderado</option>
                <option value='H'>Alto</option>
              </select>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-white text-center'>Estilo</span>
              <div className='flex gap-2'>
                <label
                  className={twMerge(
                    'flex gap-2 border-2 cursor-pointer border-white px-4 py-2 rounded-3xl text-2xl transition-colors duration-300',
                    style === 'squares'
                      ? 'bg-white text-black'
                      : 'bg-black text-white'
                  )}
                >
                  <input
                    type='radio'
                    value='squares'
                    checked={style === 'squares'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setStyle(e.target.value as 'squares' | 'dots')
                    }
                    className='hidden peer'
                  />

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='1em'
                    height='1em'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='currentColor'
                      d='M3 11V3h8v8H3Zm0 10v-8h8v8H3Zm10-10V3h8v8h-8Zm0 10v-8h8v8h-8Z'
                    />
                  </svg>
                </label>
                <label
                  className={twMerge(
                    'flex gap-2 border-2 cursor-pointer border-white px-4 py-2 rounded-3xl text-2xl transition-colors duration-300',
                    style === 'dots'
                      ? 'bg-white text-black'
                      : 'bg-black text-white'
                  )}
                >
                  <input
                    type='radio'
                    value='dots'
                    checked={style === 'dots'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setStyle(e.target.value as 'squares' | 'dots')
                    }
                    className='hidden'
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='1em'
                    height='1em'
                    viewBox='0 0 28 28'
                  >
                    <path
                      fill='currentColor'
                      d='M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10Zm12 0a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm-7 7a5 5 0 1 1-10 0a5 5 0 0 1 10 0Zm7 5a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z'
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
          <label className='flex flex-col w-full gap-2'>
            <span className='text-white text-center'>Tamaño</span>
            <input
              className='w-full accent-maxpurple-500'
              type='range'
              min={25}
              max={125}
              step='25'
              value={logoSize}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLogoSize(Number(e.target.value))
              }
            />
          </label>
        </div>
      </div>
      <div className='grid gap-2 bg-black border rounded-3xl p-2'>
        <QRCode
          id='qr'
          value={textInput === '' ? textDefault : textInput}
          size={400}
          ecLevel={correction}
          bgColor={colorBg}
          fgColor={colorQr}
          logoImage={logoImage}
          logoWidth={logoSize}
          qrStyle={style}
          eyeRadius={style === "dots" ? 8 : 0}
        />
        <Download id='qr' />
      </div>
      <Footer />
    </div>
  )
}
