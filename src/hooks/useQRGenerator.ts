'use client'
import { useState, useCallback } from 'react'
import type { QRConfigType } from '$/types'

export const useQRGenerator = () => {
  const [config, setConfig] = useState<QRConfigType>({
    textInput: '',
    logoImage: null,
    style: 'dots',
    correction: 'M',
    logoSize: 80,
    colorQr: '#5720ff',
    colorBg: '#ffffff'
  })

  const updateConfig = useCallback(
    <K extends keyof QRConfigType>(key: K, value: QRConfigType[K]): void => {
      setConfig(prev => ({ ...prev, [key]: value }))
    },
    []
  )

  const resetConfig = useCallback((): void => {
    setConfig({
      textInput: '',
      logoImage: null,
      style: 'dots',
      correction: 'M',
      logoSize: 80,
      colorQr: '#5720ff',
      colorBg: '#ffffff'
    })
  }, [])

  return { config, updateConfig, resetConfig }
}
