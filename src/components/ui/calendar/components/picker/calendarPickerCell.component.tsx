/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { TouchableWithoutFeedback } from '../../../../devsupport';
import {
  styled,
  StyledComponentProps,
  StyleType,
} from '../../../../theme';
import { CalendarDateInfo } from '../../type';

type ChildrenProp<D> = (date: CalendarDateInfo<D>, style: StyleType) => React.ReactElement;

export interface CalendarPickerCellProps<D> extends StyledComponentProps {
  date: CalendarDateInfo<D>;
  selected?: boolean;
  bounding?: boolean;
  today?: boolean;
  range?: boolean;
  firstRangeItem?: boolean;
  lastRangeItem?: boolean;
  onSelect?: (date: CalendarDateInfo<D>) => void;
  children: ChildrenProp<D>;
  shouldComponentUpdate?: (props: CalendarPickerCellProps<D>, nextProps: CalendarPickerCellProps<D>) => boolean;
  style?: StyleProp<TextStyle>;
  disabled?: boolean;
}

export type CalendarPickerCellElement<D> = React.ReactElement<CalendarPickerCellProps<D>>;

@styled('CalendarCell')
export class CalendarPickerCell<D> extends React.Component<CalendarPickerCellProps<D>> {

  public shouldComponentUpdate(nextProps: CalendarPickerCellProps<D>): boolean {
      throw new Error("STUB");
  }

  private onPress = (): void => {
      throw new Error("STUB");
  };

  private getContainerBorderRadius = (borderRadius: number): StyleType => {
      throw new Error("STUB");
  };

  private getComponentStyle = (source: StyleType): StyleType => {
      throw new Error("STUB");
  };

  private renderContentElement = (source: ChildrenProp<D>, evaStyle): React.ReactElement => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<TouchableOpacityProps> {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
