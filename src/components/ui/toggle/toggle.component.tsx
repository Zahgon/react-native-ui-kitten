/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  Animated,
  Easing,
  GestureResponderEvent,
  NativeSyntheticEvent,
  PanResponder,
  PanResponderCallbacks,
  PanResponderGestureState,
  PanResponderInstance,
  StyleSheet,
  TargetedEvent,
  View,
  ViewProps,
} from 'react-native';
import {
  EvaStatus,
  FalsyText,
  RenderProp,
  RTLService,
  TouchableWeb,
  TouchableWebProps,
  Overwrite,
  LiteralUnion,
} from '../../devsupport';
import {
  Interaction,
  styled,
  StyledComponentProps,
  StyleType,
} from '../../theme';
import { TextProps } from '../text/text.component';
import { CheckMark } from '../shared/checkmark.component';

type ToggleStyledProps = Overwrite<StyledComponentProps, {
  appearance?: LiteralUnion<'default'>;
}>;

type TouchableWebPropsWithoutChildren = Omit<TouchableWebProps, 'children'>;

export interface ToggleProps extends TouchableWebPropsWithoutChildren, ToggleStyledProps {
  children?: RenderProp<TextProps> | React.ReactText;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  status?: EvaStatus;
}

export type ToggleElement = React.ReactElement<ToggleProps>;

/**
 * Switches toggle the state of a single setting on or off.
 *
 * @extends React.Component
 *
 * @property {boolean} checked - Whether component is checked.
 * Defaults to *false*.
 *
 * @property {(boolean) => void} onChange - Called when toggle
 * should switch it's value.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} children - String, number or a function component
 * to render near the toggle.
 * If it is a function, expected to return a Text.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example ToggleSimpleUsage
 *
 * @overview-example ToggleStates
 * Toggle can be checked or disabled.
 *
 * @overview-example ToggleStatus
 * Toggle may marked with `status` property, which is useful within forms validation.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example ToggleStyling
 * Toggle and it's inner views can be styled by passing them as function components.
 * ```
 * import { Toggle, Text } from '@ui-kitten/components';
 *
 * <Toggle>
 *   {evaProps => <Text {...evaProps}>Place your Text</Text>}
 * </Toggle>
 * ```
 *
 * @overview-example ToggleTheming
 * In most cases this is redundant, if [custom theme is configured](docs/guides/branding).
 */
@styled('Toggle')
export class Toggle extends React.Component<ToggleProps> implements PanResponderCallbacks {

  private panResponder: PanResponderInstance;
  private thumbWidthAnimation: Animated.Value;
  private thumbTranslateAnimation: Animated.Value;
  private ellipseScaleAnimation: Animated.Value;
  private thumbTranslateAnimationActive: boolean;

  constructor(props: ToggleProps) {
      throw new Error("STUB");
  }

  // PanResponderCallbacks

  public onStartShouldSetPanResponder = (): boolean => {
      throw new Error("STUB");
  };

  public onStartShouldSetPanResponderCapture = (): boolean => {
      throw new Error("STUB");
  };

  public onMoveShouldSetPanResponder = (): boolean => {
      throw new Error("STUB");
  };

  public onMoveShouldSetPanResponderCapture = (): boolean => {
      throw new Error("STUB");
  };

  public onPanResponderTerminationRequest = (): boolean => {
      throw new Error("STUB");
  };

  public onPanResponderGrant = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  public onPanResponderMove: () => boolean = (): boolean => {
      throw new Error("STUB");
  };

  public onPanResponderRelease = (event: GestureResponderEvent, gestureState: PanResponderGestureState): void => {
      throw new Error("STUB");
  };

  public onMouseLeave = (event: NativeSyntheticEvent<TargetedEvent>): void => {
      throw new Error("STUB");
  };

  private onMouseEnter = (event: NativeSyntheticEvent<TargetedEvent>): void => {
      throw new Error("STUB");
  };

  private onFocus = (event: NativeSyntheticEvent<TargetedEvent>): void => {
      throw new Error("STUB");
  };

  private onBlur = (event: NativeSyntheticEvent<TargetedEvent>): void => {
      throw new Error("STUB");
  };

  private onPressIn = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private onPressOut = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private onPress = (): void => {
      throw new Error("STUB");
  };

  private getComponentStyle = (source: StyleType): StyleType => {
      throw new Error("STUB");
  };

  private animateThumbTranslate = (value: number, callback: () => void = () => { throw new Error("STUB"); }): void => {
      throw new Error("STUB");
  };

  private animateThumbWidth = (value: number, callback: () => void = () => { throw new Error("STUB"); }): void => {
      throw new Error("STUB");
  };

  private animateEllipseScale = (value: number, callback: () => void = () => { throw new Error("STUB"); }): void => {
      throw new Error("STUB");
  };

  private stopAnimations = (): void => {
      throw new Error("STUB");
  };

  private toggle = (callback: (nextValue: boolean) => void): void => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ellipseContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  ellipse: {
    alignSelf: 'center',
    position: 'absolute',
  },
  highlight: {
    alignSelf: 'center',
    position: 'absolute',
  },
  thumb: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
