/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { DateService } from './date.service';
import { CalendarRange } from '../type';

export class RangeDateService<D> {

  private dateService: DateService<D>;

  constructor(dateService: DateService<D>) {
    this.dateService = dateService;
  }

  public createRange(range: CalendarRange<D>, date: D): CalendarRange<D> {
      throw new Error("STUB");
  }

  private createRangeForStart(range: CalendarRange<D>, date: D): CalendarRange<D> {
      throw new Error("STUB");
  }

  private createRangeForStartEnd(date: D): CalendarRange<D> {
      throw new Error("STUB");
  }
}
