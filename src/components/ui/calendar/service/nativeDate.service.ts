/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import fecha from 'fecha';
import { DateService } from './date.service';
import {
  I18nConfig,
  TranslationWidth,
} from '../i18n/type';
import { EN } from '../i18n/en';

export const LOCALE_DEFAULT = 'en';

export interface NativeDateServiceOptions {
  // 0 for Sunday, 1 for Monday, etc
  startDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  format?: string;
  i18n?: I18nConfig;
}

const DEFAULT_OPTIONS: NativeDateServiceOptions = {
  format: 'DD/MM/YYYY',
  startDayOfWeek: 0,
};

/**
 * The `NativeDateService` is basic implementation of `DateService` using
 * native js date objects.
 */
export class NativeDateService extends DateService<Date> {

  protected options: NativeDateServiceOptions;
  protected i18nSettings = fecha.i18n;

  constructor(locale: string = LOCALE_DEFAULT, options?: NativeDateServiceOptions) {
      throw new Error("STUB");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public setLocale(locale: string): void {
      throw new Error("STUB");
  }

  public isValidDateString(date: string, format: string): boolean {
      throw new Error("STUB");
  }

  public today(): Date {
      throw new Error("STUB");
  }

  public getDate(date: Date): number {
      throw new Error("STUB");
  }

  public getMonth(date: Date): number {
      throw new Error("STUB");
  }

  public getYear(date: Date): number {
      throw new Error("STUB");
  }

  public getDayOfWeek(date: Date): number {
      throw new Error("STUB");
  }

  /**
   * returns first day of the week, it can be 1 if week starts from monday
   * and 0 if from sunday and so on.
   * */
  public getFirstDayOfWeek(): number {
      throw new Error("STUB");
  }

  public getMonthName(date: Date, style: TranslationWidth = TranslationWidth.SHORT): string {
      throw new Error("STUB");
  }

  public getMonthNameByIndex(index: number, style: TranslationWidth = TranslationWidth.SHORT): string {
      throw new Error("STUB");
  }

  public getDayOfWeekNames(style: TranslationWidth = TranslationWidth.SHORT): string[] {
      throw new Error("STUB");
  }

  public format(date: Date, format: string): string {
      throw new Error("STUB");
  }

  /**
   * We haven't got capability to parse date using formatting without third party libraries.
   * */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public parse(date: string, format: string): Date {
    return new Date(Date.parse(date));
  }

  public addDay(date: Date, num: number): Date {
      throw new Error("STUB");
  }

  public addMonth(date: Date, num: number): Date {
      throw new Error("STUB");
  }

  public addYear(date: Date, num: number): Date {
      throw new Error("STUB");
  }

  public clone(date: Date): Date {
      throw new Error("STUB");
  }

  public compareDates(date1: Date, date2: Date): number {
      throw new Error("STUB");
  }

  public compareDatesSafe(date1: Date, date2: Date): number {
      throw new Error("STUB");
  }

  public createDate(year: number, month: number, date: number): Date {
      throw new Error("STUB");
  }

  public getMonthEnd(date: Date): Date {
      throw new Error("STUB");
  }

  public getMonthStart(date: Date): Date {
      throw new Error("STUB");
  }

  public getNumberOfDaysInMonth(date: Date): number {
      throw new Error("STUB");
  }

  public getYearEnd(date: Date): Date {
      throw new Error("STUB");
  }

  public getYearStart(date: Date): Date {
      throw new Error("STUB");
  }

  public isSameDay(date1: Date, date2: Date): boolean {
      throw new Error("STUB");
  }

  public isSameMonth(date1: Date, date2: Date): boolean {
      throw new Error("STUB");
  }

  public isSameYear(date1: Date, date2: Date): boolean {
      throw new Error("STUB");
  }

  public getId(): string {
      throw new Error("STUB");
  }

  protected shiftDayOfWeekNames<T>(value: T[], offset: number): T[] {
      throw new Error("STUB");
  }

  private getFechaDayNames(style: TranslationWidth): string[] {
      throw new Error("STUB");
  }

  private getFechaMonthNames(style: TranslationWidth): string[] {
      throw new Error("STUB");
  }

  private setFechaLocaleData(config: I18nConfig): void {
      throw new Error("STUB");
  }
}
