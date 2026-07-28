/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  StyleProp,
  View,
  ViewProps,
} from 'react-native';
import { StyleType } from '../../../../theme';
import {
  CalendarPickerRow,
  CalendarPickerRowElement,
} from './calendarPickerRow.component';
import {
  CalendarPickerCell,
  CalendarPickerCellElement,
  CalendarPickerCellProps,
} from './calendarPickerCell.component';
import {
  CalendarDateInfo,
  RangeRole,
} from '../../type';

type ViewPropsWithoutChildren = Omit<ViewProps, 'children'>;

export interface CalendarPickerProps<D> extends ViewPropsWithoutChildren {
  data: CalendarDateInfo<D>[][];
  isItemSelected: (item: CalendarDateInfo<D>) => boolean;
  isItemDisabled: (item: CalendarDateInfo<D>) => boolean;
  isItemToday: (item: CalendarDateInfo<D>) => boolean;
  onSelect?: (item: CalendarDateInfo<D>) => void;
  children: (item: CalendarDateInfo<D>, style: StyleType) => React.ReactElement;
  shouldItemUpdate?: (props: CalendarPickerCellProps<D>, nextProps: CalendarPickerCellProps<D>) => boolean;
  rowStyle?: StyleProp<ViewProps>;
}

export type CalendarPickerElement<D> = React.ReactElement<CalendarPickerProps<D>>;

export class CalendarPicker<D> extends React.Component<CalendarPickerProps<D>> {

  private renderCellElement = (item: CalendarDateInfo<D>, index: number): CalendarPickerCellElement<D> => {
      throw new Error("STUB");
  };

  private renderRowElement = (item: CalendarDateInfo<D>[], index: number): CalendarPickerRowElement<D> => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}
