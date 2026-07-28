/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

export enum RangeRole {
  none = 0,
  member = 1,
  start = 2,
  end = 4,
  complete = 6,
}

export interface CalendarDateOptions {
  bounding: boolean;
  holiday: boolean;
  range?: RangeRole;
}

export interface CalendarRange<D> {
  startDate?: D;
  endDate?: D;
}

export interface CalendarDateInfo<D> extends CalendarDateOptions {
  date: D;
}

const VIEW_MODE_DATE: CalendarViewMode = {
  id: 'DATE',
  navigationNext: (): CalendarViewMode => {
      throw new Error("STUB");
  },
  pickNext: (): CalendarViewMode => {
      throw new Error("STUB");
  },
};

const VIEW_MODE_MONTH: CalendarViewMode = {
  id: 'MONTH',
  navigationNext: (): CalendarViewMode => {
      throw new Error("STUB");
  },
  pickNext: (): CalendarViewMode => {
      throw new Error("STUB");
  },
};

const VIEW_MODE_YEAR: CalendarViewMode = {
  id: 'YEAR',
  navigationNext: (): CalendarViewMode => {
      throw new Error("STUB");
  },
  pickNext: (): CalendarViewMode => {
      throw new Error("STUB");
  },
};

export type CalendarViewModeId = 'DATE' | 'MONTH' | 'YEAR';

export interface CalendarViewMode {
  id: CalendarViewModeId;
  navigationNext: () => CalendarViewMode;
  pickNext: () => CalendarViewMode;
}

interface ICalendarViewModes {
  DATE: CalendarViewMode;
  MONTH: CalendarViewMode;
  YEAR: CalendarViewMode;
}

export const CalendarViewModes: ICalendarViewModes = {
  DATE: VIEW_MODE_DATE,
  MONTH: VIEW_MODE_MONTH,
  YEAR: VIEW_MODE_YEAR,
};

