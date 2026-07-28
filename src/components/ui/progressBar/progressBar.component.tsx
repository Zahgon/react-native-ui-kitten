/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  Animated,
  LayoutChangeEvent,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {
  EvaSize,
  EvaStatus,
  LiteralUnion,
  Overwrite,
} from '@ui-kitten/components/devsupport';
import {
  styled,
  StyledComponentProps,
  StyleType,
} from '@ui-kitten/components';
import { ProgressBarAnimation, ProgressBarAnimationConfig } from './animation';

type ProgressBarStyledProps = Overwrite<StyledComponentProps, {
  appearance?: LiteralUnion<'default'>;
}>;

interface ComponentStyles {
  track: ViewStyle;
  indicator: ViewStyle;
}

export interface ProgressBarProps extends ViewProps, ProgressBarStyledProps {
  progress?: number;
  animating?: boolean;
  animationConfig?: Partial<ProgressBarAnimationConfig>;
  status?: EvaStatus;
  size?: EvaSize;
}

export type ProgressBarElement = React.ReactElement<ProgressBarProps>;

interface State {
  trackWidth: number;
}

/**
 * Displays the length of a process.
 *
 * @extends React.Component
 *
 * @property {boolean} animating - Whether component is animating.
 * Default is *true*.
 *
 * @property {number} progress - Current state of a process.
 * Can be from 0 to 1.
 *
 * @property {string} size - Size of the component.
 * Can be `tiny`, `small`, `medium`, `large`, or `giant`.
 * Defaults to *small*.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *primary*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {Partial<ProgressBarAnimationConfig>} animationConfig - Animation configuration.
 * Optional. Can define duration, easing function and etc.
 *
 * @overview-example ProgressBarSimpleUsage
 * Default ProgressBar animating is `true`.
 *
 * @overview-example ProgressBarTheming
 * Styling of ProgressBar is possible with [configuring a custom theme](guides/branding).
 *
 */

@styled('ProgressBar')
export class ProgressBar extends React.PureComponent<ProgressBarProps> {

  static defaultProps: Partial<ProgressBarProps> = {
    animating: true,
    progress: 0,
  };

  public state: State = {
    trackWidth: 0,
  };

  private animation: ProgressBarAnimation;

  constructor(props: ProgressBarProps) {
    super(props);

    this.animation = new ProgressBarAnimation(props.animationConfig);
  }

  public componentDidMount(): void {
      throw new Error("STUB");
  }

  public componentDidUpdate(prevProps: ProgressBarProps): void {
      throw new Error("STUB");
  }

  public componentWillUnmount(): void {
      throw new Error("STUB");
  }

  private startAnimation = (): void => {
      throw new Error("STUB");
  };

  private stopAnimation = (): void => {
      throw new Error("STUB");
  };

  private clamp = (progress: number): number => {
      throw new Error("STUB");
  };

  private onLayout = (event: LayoutChangeEvent): void => {
      throw new Error("STUB");
  };

  private getComponentStyle = (source: StyleType): ComponentStyles => {
      throw new Error("STUB");
  };

  private renderIndicator = (
    style: ViewStyle, progress: number, animating: boolean,
  ): React.ReactElement<Animated.AnimatedProps<ViewStyle>> => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  noOverflow: {
    overflow: 'hidden',
  },
});


