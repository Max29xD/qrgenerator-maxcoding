import { QRCode, IProps } from 'react-qrcode-logo'
import Download from '$/components/download'

export default function QRPreview({ ...props }: IProps) {
  return (
    <div className="grid gap-2 bg-black border rounded-3xl p-2">
      <QRCode
        id="qr"
        size={400}
        {...props}
      />
      <Download id="qr" />
    </div>
  )
}
