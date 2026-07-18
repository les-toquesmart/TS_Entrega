import { describe, expect, it } from 'vitest'
import { createDelivery } from './delivery'
import { validateDelivery } from './validation'

describe('delivery validation', () => {
  it('requires the fields needed to finalize', () => {
    expect(validateDelivery(createDelivery())).toEqual(['nombre del proyecto', 'cliente', 'correo del cliente', 'aceptación de términos', 'firma del cliente', 'firma de Toque Smart'])
  })
  it('accepts a completed delivery', () => {
    const delivery = createDelivery()
    delivery.project.name = 'Casa Demo'; delivery.project.clientName = 'Cliente Demo'; delivery.project.clientEmail = 'cliente@example.com'; delivery.termsAccepted = true; delivery.signatures.client = 'data:image/png;base64,client'; delivery.signatures.representative = 'data:image/png;base64,rep'
    expect(validateDelivery(delivery)).toEqual([])
  })
})
