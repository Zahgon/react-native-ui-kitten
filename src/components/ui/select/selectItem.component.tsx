/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  GestureResponderEvent,
  ImageProps,
  NativeSyntheticEvent,
  StyleSheet,
  TargetedEvent,
} from 'react-native';
import {
  FalsyFC,
  FalsyText,
  PropsService,
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
import {
  CheckBox,
  CheckBoxElement,
} from '../checkbox/checkbox.component';
import { TextProps } from '../text/text.component';
import { SelectItemDescriptor } from './select.service';

type SelectItemStyledProps = Overwrite<StyledComponentProps, {
  appearance?: LiteralUnion<'default' | 'grouped'>;
}>;

type TouchableSelectProps = Overwrite<TouchableWebProps, {
  onPress?: (descriptor: SelectItemDescriptor, event?: GestureResponderEvent) => void;
}>;

export interface SelectItemProps extends TouchableSelectProps, SelectItemStyledProps {
  title?: RenderProp<TextProps> | React.ReactText;
  accessoryLeft?: RenderProp<Partial<ImageProps>>;
  accessoryRight?: RenderProp<Partial<ImageProps>>;
  selected?: boolean;
  descriptor?: SelectItemDescriptor;
}

export type SelectItemElement = React.ReactElement<SelectItemProps>;

/**
 * A single item in Select.
 * Items should be rendered within Select or SelectGroup children to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the item.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the *title*.
 * Expected to return an Image.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the *title*.
 * Expected to return an Image.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example SelectItemSimpleUsage
 */
@styled('SelectOption')
export class SelectItem extends React.Component<SelectItemProps> {

  private get isMultiSelect(): boolean {
      throw new Error("STUB");
  }

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

  private onPress = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private onPressIn = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private onPressOut = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private onAccessoryCheckedChange = (): void => {
      throw new Error("STUB");
  };

  private getComponentStyle = (style: StyleType): StyleType => {
      throw new Error("STUB");
  };

  private renderAccessory = (evaStyle): CheckBoxElement => {
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
    justifyContent: 'space-between',
  },
  text: {
    flex: 1,
    textAlign: 'left',
  },
});
