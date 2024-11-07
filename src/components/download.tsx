export default function Download({ id }: { id: string }) {
  const downloadQR = () => {
    const qr = document.getElementById(id) as HTMLCanvasElement
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
    <button
      onClick={downloadQR}
      className='border-2 border-dotted text-white border-white  hover:text-max hover:border-max font-bold py-2 px-4 rounded-3xl transition-colors duration-300'
    >
      Descargar
    </button>
  )
}
