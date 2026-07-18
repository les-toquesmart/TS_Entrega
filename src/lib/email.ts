import type { DeliveryProject } from '../types/delivery'

const endpoint = import.meta.env.VITE_EMAIL_ENDPOINT as string | undefined

export async function sendDeliveryEmail(delivery: DeliveryProject, pdf: Blob) {
  if (!endpoint) throw new Error('Configura VITE_EMAIL_ENDPOINT para habilitar el envío.')
  const pdfBase64 = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result).split(',')[1] || '')
    reader.onerror = () => reject(new Error('No se pudo preparar el PDF.'))
    reader.readAsDataURL(pdf)
  })
  const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ clientEmail: delivery.project.clientEmail, projectName: delivery.project.name, pdfBase64 }) })
  if (!response.ok) throw new Error('El servicio de correo rechazó el envío.')
}
