/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { SvgProps } from 'react-native-svg';
import {
  GestureResponderEvent,
  NativeSyntheticEvent,
  StyleSheet,
  TargetedEvent,
  View,
} from 'react-native';
import {
  EvaStatus,
  FalsyText,
  RenderProp,
  TouchableWeb,
  TouchableWebElement,
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
import {
  CheckMark,
  CheckMarkProps,
} from '../shared/checkmark.component';
import {
  Minus,
  MinusProps,
} from '../shared/minus.component';

type CheckBoxStyledProps = Overwrite<StyledComponentProps, {
  appearance?: LiteralUnion<'default' | string>;
}>;

type TouchableWebPropsWithoutChildren = Omit<TouchableWebProps, 'children'>;

export interface CheckBoxProps extends TouchableWebPropsWithoutChildren, CheckBoxStyledProps {
  children?: RenderProp<TextProps> | React.ReactText;
  checked?: boolean;
  onChange?: (checked: boolean, indeterminate: boolean) => void;
  indeterminate?: boolean;
  status?: EvaStatus;
}

export type CheckBoxElement = React.ReactElement<CheckBoxProps>;

/**
 * Checkboxes allow the user to select one or more items from a set.
 *
 * @extends React.Component
 *
 * @property {boolean} checked - Whether component is checked.
 * Defaults to *false*.
 *
 * @property {(checked: boolean, indeterminate: boolean) => void} onChange - Called when checkbox
 * should switch it's value.
 * Called with *checked* and *indeterminate* values.
 * If *indeterminate* was provided, it should be changed to the value passed in this function.
 *
 * @property {boolean} indeterminate - Whether checked status is indeterminate.
 * Will set indeterminate to false when the checked property is changed.
 * Defaults to *false*.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} children - String, number or a function component
 * to render near the checkbox.
 * If it is a function, expected to return a Text.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example CheckboxSimpleUsage
 *
 * @overview-example CheckboxStates
 * CheckBoxes can be checked or disabled.
 *
 * @overview-example CheckboxIndeterminate
 * An extra state is `indeterminate`, which may be useful for grouping inner checkboxes.
 * Indeterminate will be set to `false` when the checked state is changed.
 *
 * @overview-example CheckboxStatus
 * Checkboxes may also be marked with `status` property, which is useful within forms validation.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example CheckboxStyling
 * CheckBox and it's inner views can be styled by passing them as function components.
 * ```
 * import { CheckBox, Text } from '@ui-kitten/components';
 *
 * <CheckBox>
 *   {evaProps => <Text {...evaProps}>Place your Text</Text>}
 * </CheckBox>
 * ```
 *
 * @overview-example CheckboxTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */
@styled('CheckBox')
export class CheckBox extends React.Component<CheckBoxProps> {

  private onMouseEnter = (event: NativeSyntheticEvent<TargetedEvent>): void => {
      throw new Error("STUB");
  };

  private onMouseLeave = (event: NativeSyntheticEvent<TargetedEvent>): void => {
      throw new Error("STUB");
  };

  private onFocus = (event: NativeSyntheticEvent<TargetedEvent>): void => {
      throw new Error("STUB");
  };

  private onBlur = (event: NativeSyntheticEvent<TargetedEvent>): void => {
      throw new Error("STUB");
  };

  private onPress = (): void => {
      throw new Error("STUB");
  };

  private onPressIn = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private onPressOut = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private getComponentStyle = (source: StyleType): StyleType => {
      throw new Error("STUB");
  };

  private renderIconElement = (style: SvgProps): React.ReactElement<SvgProps> => {
      throw new Error("STUB");
  };

  public render(): TouchableWebElement {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  highlightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    position: 'absolute',
  },
});
