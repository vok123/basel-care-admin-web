export function slotToTime(timeSlot?: number): string {
  if (timeSlot === undefined || timeSlot < 0) {
    return '';
  }
  const minutes = timeSlot * 30;
  const hh = Math.floor(minutes / 60);
  const mm = minutes % 60;
  return `${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}`;
}

export function timeToSlot(time?: string): number {
  if (!time || !/^\d{2}:\d{2}$/.test(time)) {
    return -1; // Invalid time format
  }
  const [hh, mm] = time.split(':').map(Number);
  return Math.floor((hh * 60 + mm) / 30);
}
