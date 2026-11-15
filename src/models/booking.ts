export type BookingStatus = 'new' | 'confirmed'
export type WorkshopId = 'typescript' | 'build'

export interface Booking {
  id: string
  name: string
  seats: number
  workshop: WorkshopId
  status: BookingStatus
  source: 'web'
}
