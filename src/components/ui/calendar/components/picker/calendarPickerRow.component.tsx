/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import { CalendarPickerCellElement } from './calendarPickerCell.component';
import { CalendarDateInfo } from '../../type';

type ViewPropsWithoutChildren = Omit<ViewProps, 'children'>;

export interface CalendarPickerRowProps<D> extends ViewPropsWithoutChildren {
  data: CalendarDateInfo<D>[];
  children: (item: CalendarDateInfo<D>, index: number) => CalendarPickerCellElement<D>;
}

export type CalendarPickerRowElement<D> = React.ReactElement<CalendarPickerRowProps<D>>;

export class CalendarPickerRow<D> extends React.Component<CalendarPickerRowProps<D>> {

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
