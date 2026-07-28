/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  GestureResponderEvent,
  ImageProps,
  StyleProp,
  StyleSheet,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {
  EvaInputSize,
  EvaStatus,
  FalsyFC,
  FalsyText,
  RenderProp,
  TouchableWithoutFeedback,
} from '../../devsupport';
import {
  Interaction,
  StyledComponentProps,
  StyleType,
} from '../../theme';
import { BaseCalendarProps } from '../calendar/baseCalendar.component';
import { CalendarElement } from '../calendar/calendar.component';
import { RangeCalendarElement } from '../calendar/rangeCalendar.component';
import { NativeDateService } from '../calendar/service/nativeDate.service';
import { Popover } from '../popover/popover.component';
import {
  PopoverPlacement,
  PopoverPlacements,
} from '../popover/type';
import { TextProps } from '../text/text.component';

export interface BaseDatepickerProps<D = Date> extends StyledComponentProps,
  TouchableOpacityProps,
  BaseCalendarProps<D> {

  controlStyle?: StyleProp<ViewStyle>;
  label?: RenderProp<TextProps> | React.ReactText;
  caption?: RenderProp<TextProps> | React.ReactText;
  accessoryLeft?: RenderProp<Partial<ImageProps>>;
  accessoryRight?: RenderProp<Partial<ImageProps>>;
  status?: EvaStatus;
  size?: EvaInputSize;
  placeholder?: RenderProp<TextProps> | React.ReactText;
  placement?: PopoverPlacement | string;
  backdropStyle?: StyleProp<ViewStyle>;
  onFocus?: () => void;
  onBlur?: () => void;
}

interface State {
  visible: boolean;
}

export abstract class BaseDatepickerComponent<P, D = Date> extends React.Component<BaseDatepickerProps<D> & P, State> {

  static defaultProps: Partial<BaseDatepickerProps> = {
    dateService: new NativeDateService(),
    placeholder: 'dd/mm/yyyy',
    placement: PopoverPlacements.BOTTOM_START,
  };

  public state: State = {
    visible: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected calendarRef = React.createRef<any>();

  public scrollToToday = (): void => {
      throw new Error("STUB");
  };

  public scrollToDate = (date: Date): void => {
      throw new Error("STUB");
  };

  public focus = (): void => {
      throw new Error("STUB");
  };

  public blur = (): void => {
      throw new Error("STUB");
  };

  public isFocused = (): boolean => {
      throw new Error("STUB");
  };

  public abstract clear(): void;

  protected abstract getComponentTitle(): RenderProp<TextProps> | React.ReactText;

  protected abstract renderCalendar(): CalendarElement<D> | RangeCalendarElement<D>;

  private getComponentStyle = (style: StyleType): StyleType => {
      throw new Error("STUB");
  };

  private onPress = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private onPressIn = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private onPressOut = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private onPickerVisible = (): void => {
      throw new Error("STUB");
  };

  private onPickerInvisible = (): void => {
      throw new Error("STUB");
  };

  private setPickerVisible = (): void => {
      throw new Error("STUB");
  };

  private setPickerInvisible = (): void => {
      throw new Error("STUB");
  };

  private renderInputElement = (props, evaStyle): React.ReactElement => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  popover: {
    borderWidth: 0,
  },
  control: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    textAlign: 'left',
  },
  captionLabel: {
    textAlign: 'left',
  },
});
