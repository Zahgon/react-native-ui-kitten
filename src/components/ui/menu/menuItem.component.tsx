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
  View,
} from 'react-native';
import {
  FalsyFC,
  FalsyText,
  PropsService,
  RenderProp,
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
import { MenuItemDescriptor } from './menu.service';

type MenuItemStyledProps = Overwrite<StyledComponentProps, {
  appearance?: LiteralUnion<'default' | 'grouped'>;
}>;

type TouchableMenuItemProps = Overwrite<TouchableWebProps, {
  onPress?: (descriptor: MenuItemDescriptor, event?: GestureResponderEvent) => void;
}>;

export interface MenuItemProps extends TouchableMenuItemProps, MenuItemStyledProps {
  title?: RenderProp<TextProps> | React.ReactText;
  accessoryLeft?: RenderProp<Partial<ImageProps>>;
  accessoryRight?: RenderProp<Partial<ImageProps>>;
  selected?: boolean;
  descriptor?: MenuItemDescriptor;
}

export type MenuItemElement = React.ReactElement<MenuItemProps>;

/**
 * A single item in Menu.
 * Items should be rendered within Menu or MenuGroup to provide a usable navigation component.
 *
 * @extends React.Component
 *
 * @property {ReactElement | ReactText | (TextProps) => ReactElement} title - String, number or a function component
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
 * @overview-example MenuItemSimpleUsage
 */
@styled('MenuItem')
export class MenuItem extends React.Component<MenuItemProps> {

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

  private getComponentStyle = (style: StyleType): StyleType => {
      throw new Error("STUB");
  };

  public render(): React.ReactNode {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
    textAlign: 'left',
  },
});
