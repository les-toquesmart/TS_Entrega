import type { DeliveryProject } from '../types/delivery'

export function validateDelivery(delivery: DeliveryProject): string[] {
  const missing: string[] = []
  if (!delivery.project.name.trim()) missing.push('nombre del proyecto')
  if (!delivery.project.clientName.trim()) missing.push('cliente')
  if (!delivery.project.clientEmail.trim()) missing.push('correo del cliente')
  if (!delivery.termsAccepted) missing.push('aceptación de términos')
  if (!delivery.signatures.client) missing.push('firma del cliente')
  if (!delivery.signatures.representative) missing.push('firma de Toque Smart')
  return missing
}
