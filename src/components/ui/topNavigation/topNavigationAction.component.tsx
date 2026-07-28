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
  TargetedEvent,
} from 'react-native';
import {
  FalsyFC,
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

type TopNavigationActionStyledProps = Overwrite<StyledComponentProps, {
  appearance?: LiteralUnion<'default' | 'control'>;
}>;

export interface TopNavigationActionProps extends TouchableWebProps, TopNavigationActionStyledProps {
  icon?: RenderProp<Partial<ImageProps>>;
}

export type TopNavigationActionElement = React.ReactElement<TopNavigationActionProps>;

/**
 * A single action within the TopNavigation.
 * Actions should be rendered within TopNavigation by providing them through `accessory` props
 * to provide a usable component.
 *
 * @extends React.Component
 *
 * @property {ReactElement | (ImageProps) => ReactElement} icon - Function component
 * to render within the action.
 * Expected to return an Image.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `default` and `control`.
 * Use *control* appearance when needed to display within a contrast container.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example TopNavigationActionSimpleUsage
 */
@styled('TopNavigationAction')
export class TopNavigationAction extends React.Component<TopNavigationActionProps> {

  public onBlur = (event: NativeSyntheticEvent<TargetedEvent>): void => {
      throw new Error("STUB");
  };

  private onMouseEnter = (event: NativeSyntheticEvent<TargetedEvent>): void => {
      throw new Error("STUB");
  };

  private onMouseLeave = (event: NativeSyntheticEvent<TargetedEvent>): void => {
      throw new Error("STUB");
  };

  private onFocus = (event: NativeSyntheticEvent<TargetedEvent>): void => {
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

  public render(): TouchableWebElement {
      throw new Error("STUB");
  }
}
