import { module1Days } from './module1Days';
import { module2Days } from './module2Days';
import { DayLesson } from '../types';

export const allDaysData: DayLesson[] = [...module1Days, ...module2Days];

export function getDayData(dayNumber: number): DayLesson | undefined {
  return allDaysData.find((d) => d.day === dayNumber);
}
