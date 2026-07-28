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

type ViewPropsWithoutChildren = Omit<ViewProps, 'children'>;

export interface CalendarMonthHeaderProps extends ViewPropsWithoutChildren {
  data: string[];
  children: (data: string, index: number) => React.ReactElement;
}

export type CalendarMonthHeaderElement = React.ReactElement<CalendarMonthHeaderProps>;

export class CalendarMonthHeader extends React.Component<CalendarMonthHeaderProps> {

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
