import type { Booking } from '../models/booking'

export const initialBookings: Booking[] = [
  { id: 'b1', name: 'Анна', seats: 2, workshop: 'typescript', status: 'confirmed', source: 'web' },
  { id: 'b2', name: 'Илья', seats: 1, workshop: 'build', status: 'new', source: 'web' },
]
