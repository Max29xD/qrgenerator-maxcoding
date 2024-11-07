export type QRStyleType = 'dots' | 'squares'
export type QRCorrectionType = 'M' | 'L' | 'Q' | 'H'

export interface QRConfigType {
  textInput: string
  logoImage: string | null
  style: QRStyleType
  correction: QRCorrectionType
  logoSize: number
  colorQr: string
  colorBg: string
}

export interface ColorPickerProps {
  label: string
  color: string
  onChange: (color: string) => void
}

export interface QRPreviewProps {
  nameFile?: string
  config: QRConfigType
}
