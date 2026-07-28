/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  Platform,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { RTLService } from '../../devsupport';

export interface TabIndicatorProps extends ViewProps {
  positions: number;
  selectedPosition?: number;
  indicatorStyle: StyleProp<ViewStyle>;
}

export type TabIndicatorElement = React.ReactElement<TabIndicatorProps>;

export class TabIndicator extends React.Component<TabIndicatorProps> {

  static defaultProps: Partial<TabIndicatorProps> = {
    selectedPosition: 0,
  };
  private indicatorWidth = 0;
  private contentOffset: Animated.Value = new Animated.Value(0);

  public componentDidUpdate(): void {
      throw new Error("STUB");
  }

  /**
   * scrolls indicator to passed index
   *
   * @param params (object) - {
   *  index: number,
   *  animated: boolean | undefined
   * }
   */
  public scrollToIndex(params: { index: number; animated?: boolean }): void {
      throw new Error("STUB");
  }

  /**
   * scrolls indicator to passed offset
   *
   * @param params (object) - {
   *  offset: number,
   *  animated: boolean | undefined
   * }
   */
  public scrollToOffset(params: { offset: number; animated?: boolean }): void {
      throw new Error("STUB");
  }

  private createOffsetAnimation = (params: { offset: number; animated?: boolean }): Animated.CompositeAnimation => {
      throw new Error("STUB");
  };

  private onLayout = (event: LayoutChangeEvent): void => {
      throw new Error("STUB");
  };

  private getComponentStyle = (): ViewStyle => {
      throw new Error("STUB");
  };

  private renderIndicatorLine = (style: StyleProp<ViewStyle>): React.ReactElement => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}
