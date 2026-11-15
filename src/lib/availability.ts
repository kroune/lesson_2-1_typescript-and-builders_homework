import type { Booking, WorkshopId } from '../models/booking'
import { BUILD_CAPACITY, TYPESCRIPT_CAPACITY } from '../data/capacities'

const capacities: Record<WorkshopId, number> = {
  typescript: TYPESCRIPT_CAPACITY,
  build: BUILD_CAPACITY,
}

export function countWorkshopSeats(items: Booking[], workshop: WorkshopId): number {
  return items.reduce((total, booking) => (
    booking.workshop === workshop ? total + booking.seats : total
  ), 0)
}

export function getRemainingSeats(items: Booking[], workshop: WorkshopId): number {
  return capacities[workshop] - countWorkshopSeats(items, workshop)
}
