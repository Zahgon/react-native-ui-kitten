/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { DateService } from './date.service';
import {
  batch,
  range,
} from './helpers';
import {
  CalendarDateInfo,
  CalendarDateOptions,
  CalendarRange,
  RangeRole,
} from '../type';

const DEFAULT_DATE_OPTIONS: CalendarDateOptions = {
  bounding: false,
  holiday: false,
  range: RangeRole.none,
};

export type DateRange<D> = CalendarDateInfo<D>[];
export type DateBatch<D> = DateRange<D>[];

export class CalendarDataService<D> {

  constructor(protected dateService: DateService<D>) {
  }

  public createDayPickerData = (date: D, dateRange?: CalendarRange<D>): DateBatch<D> => {
      throw new Error("STUB");
  };

  public createMonthPickerData = (date: D, rows: number, columns: number): DateBatch<D> => {
      throw new Error("STUB");
  };

  public createYearPickerData = (date: D, rows: number, columns: number): DateBatch<D> => {
      throw new Error("STUB");
  };

  public createDayPickerPagerData = (startDate: D, endDate: D): DateRange<D> => {
      throw new Error("STUB");
  };

  public createYearPickerPagerData = (startDate: D, endDate: D, rows: number, columns: number): DateRange<D> => {
      throw new Error("STUB");
  };

  public getNumberOfMonths = (lhs: D, rhs: D): number => {
      throw new Error("STUB");
  };

  public getNumberOfYears = (lhs: D, rhs: D): number => {
      throw new Error("STUB");
  };

  private createDates(activeMonth: D, options: CalendarDateOptions, dateRange?: CalendarRange<D>): DateBatch<D> {
      throw new Error("STUB");
  }

  private withRangedDates(days: DateRange<D>, calendarRange: CalendarRange<D>): DateRange<D> {
      throw new Error("STUB");
  }

  private withRangedStartDates(days: DateRange<D>, startDate): DateRange<D> {
      throw new Error("STUB");
  }

  private withRangedStartEndDates(days: DateRange<D>, startDate: D, endDate: D): DateRange<D> {
      throw new Error("STUB");
  }

  private withBoundingMonths(weeks: DateBatch<D>, activeMonth: D): DateBatch<D> {
      throw new Error("STUB");
  }

  private addPrevBoundingMonth(weeks: DateBatch<D>, activeMonth: D): DateBatch<D> {
      throw new Error("STUB");
  }

  private addNextBoundingMonth(weeks: DateBatch<D>, activeMonth: D): DateBatch<D> {
      throw new Error("STUB");
  }

  private createPrevBoundingDays(activeMonth: D, numberOfBoundingDates: number): DateRange<D> {
      throw new Error("STUB");
  }

  private createNextBoundingDays(activeMonth: D, numberOfBoundingDates: number): DateRange<D> {
      throw new Error("STUB");
  }

  private getStartOfWeekDayDiff(date: D): number {
      throw new Error("STUB");
  }

  private getWeekStartDiff(date: D): number {
      throw new Error("STUB");
  }

  private isShouldAddPrevBoundingMonth(weeks: DateBatch<D>): boolean {
      throw new Error("STUB");
  }

  private isShouldAddNextBoundingMonth(weeks: DateBatch<D>): boolean {
      throw new Error("STUB");
  }

  private createDateRangeForMonth(monthDate: D, options: CalendarDateOptions): DateRange<D> {
      throw new Error("STUB");
  }
}
