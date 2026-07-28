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
  LayoutChangeEvent,
  PanResponder,
  PanResponderCallbacks,
  PanResponderGestureState,
  PanResponderInstance,
  Platform,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {
  ChildrenWithProps,
  RTLService,
} from '../../devsupport';

// eslint-disable-next-line @typescript-eslint/ban-types
export interface ViewPagerProps<ChildrenProps = {}> extends ViewProps {
  children?: ChildrenWithProps<ChildrenProps>;
  selectedIndex?: number;
  swipeEnabled?: boolean;
  onSelect?: (index: number) => void;
  shouldLoadComponent?: (index: number) => boolean;
  onOffsetChange?: (offset: number) => void;
  animationDuration?: number;
}

const DEFAULT_DURATION = 300;

export type ViewPagerElement = React.ReactElement<ViewPagerProps>;

/**
 * A view with a set of swipeable pages.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Page components to render within the view.
 *
 * @property {number} selectedIndex - Index of currently selected view.
 *
 * @property {boolean} swipeEnabled - Disable swipe gesture, but keeping animations.
 *
 * @property {(number) => void} onSelect - Called when view becomes visible.
 *
 * @property {(number) => boolean} shouldLoadComponent - A function to determine
 * whether particular view should be rendered.
 * Useful when providing "lazy" loading behavior.
 *
 * @property {(number) => void} onOffsetChange - Called when scroll offset changes.
 *
 * @property {number} animationDuration - Duration of animated transition.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example ViewPagerSimpleUsage
 * Simple usage.
 *
 * @overview-example ViewPagerLazyLoading
 * Each view can be loaded lazily by using `shouldLoadComponent` property.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export class ViewPager<ChildrenProps = {}> extends React.Component<ViewPagerProps<ChildrenProps>>
  implements PanResponderCallbacks {

  static defaultProps: Partial<ViewPagerProps> = {
    selectedIndex: 0,
    animationDuration: DEFAULT_DURATION,
    swipeEnabled: true,
    shouldLoadComponent: (): boolean => { throw new Error("STUB"); },
  };

  private containerRef = React.createRef<View>();
  private contentWidth = 0;
  private contentOffsetValue = 0;
  private contentOffsetAnimatedValue: Animated.Value = new Animated.Value(this.contentOffsetValue);
  private panResponder: PanResponderInstance = PanResponder.create(this);

  private get children(): React.ReactElement<ChildrenProps>[] {
      throw new Error("STUB");
  }

  public componentDidMount(): void {
      throw new Error("STUB");
  }

  public componentDidUpdate(prevProps: ViewPagerProps): void {
      throw new Error("STUB");
  }

  public componentWillUnmount(): void {
      throw new Error("STUB");
  }

  public onMoveShouldSetPanResponder = (_event: GestureResponderEvent, state: PanResponderGestureState): boolean => {
      throw new Error("STUB");
  };

  public onPanResponderMove = (_event: GestureResponderEvent, state: PanResponderGestureState): void => {
      throw new Error("STUB");
  };

  public onPanResponderRelease = (event: GestureResponderEvent, state: PanResponderGestureState): void => {
      throw new Error("STUB");
  };

  public scrollToIndex(params: { index: number; animated?: boolean }): void {
      throw new Error("STUB");
  }

  public scrollToOffset = (params: { offset: number; animated?: boolean }): void => {
      throw new Error("STUB");
  };

  private onLayout = (event: LayoutChangeEvent): void => {
      throw new Error("STUB");
  };

  private onContentOffsetAnimationStateChanged = (state: { value: number }): void => {
      throw new Error("STUB");
  };

  private onContentOffsetAnimationStateEnd = (_result: { finished: boolean }): void => {
      throw new Error("STUB");
  };

  private createOffsetAnimation = (params: { offset: number; animated?: boolean }): Animated.CompositeAnimation => {
      throw new Error("STUB");
  };

  private getContainerStyle = (): ViewStyle => {
      throw new Error("STUB");
  };

  private renderComponentChild = (source: React.ReactElement<ChildrenProps>, index: number): React.ReactElement => {
      throw new Error("STUB");
  };

  private renderComponentChildren = (): React.ReactElement[] => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
  },
});
