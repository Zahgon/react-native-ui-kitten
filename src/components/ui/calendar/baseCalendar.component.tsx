/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  EvaProp,
  StyleType,
} from '../../theme';
import { Divider } from '../divider/divider.component';
import {
  CalendarHeader,
  CalendarHeaderElement,
} from './components/calendarHeader.component';
import { CalendarMonthHeader } from './components/calendarMonthHeader.component';
import {
  CalendarPicker,
  CalendarPickerElement,
} from './components/picker/calendarPicker.component';
import { CalendarPickerCellProps } from './components/picker/calendarPickerCell.component';
import {
  CalendarDateContent,
  CalendarDateContentElement,
} from './components/calendarDateContent.component';
import {
  CalendarDateInfo,
  CalendarViewMode,
  CalendarViewModes,
  CalendarViewModeId,
} from './type';
import { TranslationWidth } from './i18n/type';
import { DateService } from './service/date.service';
import { NativeDateService } from './service/nativeDate.service';
import {
  CalendarDataService,
  DateBatch,
} from './service/calendarData.service';

export interface BaseCalendarProps<D = Date> extends ViewProps {
  min?: D;
  max?: D;
  initialVisibleDate?: D;
  dateService?: DateService<D>;
  boundingMonth?: boolean;
  startView?: CalendarViewMode;
  title?: (datePickerDate: D, monthYearPickerDate: D, viewMode: CalendarViewMode) => string;
  filter?: (date: D) => boolean;
  renderFooter?: () => React.ReactElement;
  renderDay?: (info: CalendarDateInfo<D>, style: StyleType) => React.ReactElement;
  renderMonth?: (info: CalendarDateInfo<D>, style: StyleType) => React.ReactElement;
  renderYear?: (info: CalendarDateInfo<D>, style: StyleType) => React.ReactElement;
  renderArrowLeft?: React.ComponentType<{ onPress: () => void }> | null;
  renderArrowRight?: React.ComponentType<{ onPress: () => void }> | null;
  onVisibleDateChange?: (date: D, viewModeId: CalendarViewModeId) => void;
  eva?: EvaProp;
}

export type BaseCalendarElement<D> = React.ReactElement<BaseCalendarProps<D>>;

interface State<D> {
  viewMode: CalendarViewMode;
  visibleDate: D; // is used in date view mode
  pickerDate: D; // is used in month/year view mode, goal - not to change visibleDate until month has changed
  // pickerDate equals to visibleDate from start
  // is auto synchronised with visibleDate on onPickerNavigationPress (open/close month/year picker)
  // visibleDate is set to pickerDate on onMonthSelect
}

const PICKER_ROWS = 4;
const PICKER_COLUMNS = 3;
const VIEWS_IN_PICKER: number = PICKER_ROWS * PICKER_COLUMNS;

export abstract class BaseCalendarComponent<P, D = Date> extends React.Component<BaseCalendarProps<D> & P, State<D>> {

  static defaultProps: Partial<BaseCalendarProps> = {
    dateService: new NativeDateService(),
    boundingMonth: true,
    startView: CalendarViewModes.DATE,
  };

  public state: State<D> = {
    viewMode: this.props.startView,
    visibleDate: this.dateService.getMonthStart(this.initialVisibleDate()),
    pickerDate: this.dateService.getMonthStart(this.initialVisibleDate()),
  };

  protected dataService: CalendarDataService<D> = new CalendarDataService(this.dateService);

  protected get dateService(): DateService<D> {
      throw new Error("STUB");
  }

  private get min(): D {
      throw new Error("STUB");
  }

  private get max(): D {
      throw new Error("STUB");
  }

  public scrollToToday = (): void => {
      throw new Error("STUB");
  };

  public scrollToDate = (date: D): void => {
      throw new Error("STUB");
  };

  public getCalendarStyle = (source: StyleType): StyleType => {
      throw new Error("STUB");
  };

  public isDayDisabled = ({ date }: CalendarDateInfo<D>): boolean => {
      throw new Error("STUB");
  };

  public isDayToday = ({ date }: CalendarDateInfo<D>): boolean => {
      throw new Error("STUB");
  };

  protected abstract createDates(date: D): DateBatch<D>;

  protected abstract selectedDate(): D | undefined;

  protected abstract onDateSelect(item: D): void;

  protected abstract isDateSelected(date: D): boolean;

  protected abstract shouldUpdateDate(props: CalendarPickerCellProps<D>,
    nextProps: CalendarPickerCellProps<D>): boolean;

  private initialVisibleDate(): D {
      throw new Error("STUB");
  }

  private onDaySelect = ({ date }: CalendarDateInfo<D>): void => {
      throw new Error("STUB");
  };

  private onMonthSelect = ({ date }: CalendarDateInfo<D>): void => {
      throw new Error("STUB");
  };

  private onYearSelect = ({ date }: CalendarDateInfo<D>): void => {
      throw new Error("STUB");
  };

  private onPickerNavigationPress = (): void => {
      throw new Error("STUB");
  };

  private onHeaderNavigationLeftPress = (): void => {
      throw new Error("STUB");
  };

  private onHeaderNavigationRightPress = (): void => {
      throw new Error("STUB");
  };

  private getWeekdayStyle = (source: StyleType): StyleType => {
      throw new Error("STUB");
  };

  private isDaySelected = ({ date }: CalendarDateInfo<D>): boolean => {
      throw new Error("STUB");
  };

  private isMonthSelected = ({ date }: CalendarDateInfo<D>): boolean => {
      throw new Error("STUB");
  };

  private isYearSelected = ({ date }: CalendarDateInfo<D>): boolean => {
      throw new Error("STUB");
  };

  private isMonthDisabled = ({ date }: CalendarDateInfo<D>): boolean => {
      throw new Error("STUB");
  };

  private isYearDisabled = ({ date }: CalendarDateInfo<D>): boolean => {
      throw new Error("STUB");
  };

  private isMonthToday = (date: CalendarDateInfo<D>): boolean => {
      throw new Error("STUB");
  };

  private isYearToday = ({ date }: CalendarDateInfo<D>): boolean => {
      throw new Error("STUB");
  };

  private isHeaderNavigationAllowed = (): boolean => {
      throw new Error("STUB");
  };

  private createViewModeVisibleDate = (page: number): D => {
      throw new Error("STUB");
  };

  private createViewModeHeaderTitle = (visibleDate: D, pickerDate: D, viewMode: CalendarViewMode): string => {
      throw new Error("STUB");
  };

  private renderDayIfNeeded = (item: CalendarDateInfo<D>, style: StyleType): CalendarDateContentElement => {
      throw new Error("STUB");
  };

  private renderWeekdayElement = (weekday: string, index: number): CalendarDateContentElement => {
      throw new Error("STUB");
  };

  private renderDayElement = ({ date }: CalendarDateInfo<D>, evaStyle): CalendarDateContentElement => {
      throw new Error("STUB");
  };

  private renderMonthElement = ({ date }: CalendarDateInfo<D>, evaStyle): CalendarDateContentElement => {
      throw new Error("STUB");
  };

  private renderYearElement = ({ date }: CalendarDateInfo<D>, evaStyle): CalendarDateContentElement => {
      throw new Error("STUB");
  };

  private renderDayPickerElement = (date: D, evaStyle): React.ReactElement => {
      throw new Error("STUB");
  };

  private renderMonthPickerElement = (date: D, evaStyle): CalendarPickerElement<D> => {
      throw new Error("STUB");
  };

  private renderYearPickerElement = (date: D, style: StyleType): CalendarPickerElement<D> => {
      throw new Error("STUB");
  };

  private renderPickerElement = (style: StyleType): React.ReactNode => {
      throw new Error("STUB");
  };

  private renderFooterElement = (): React.ReactElement => {
      throw new Error("STUB");
  };

  private renderHeaderElement = (evaStyle): CalendarHeaderElement => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}
