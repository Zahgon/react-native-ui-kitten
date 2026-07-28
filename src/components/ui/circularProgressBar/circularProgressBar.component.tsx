/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  Animated,
  StyleSheet,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {
  EvaSize,
  LiteralUnion,
  Overwrite,
  Size,
  EvaStatus,
  RenderProp,
  FalsyFC,
} from '@ui-kitten/components/devsupport';
import {
  IconProps,
  styled,
  StyledComponentProps,
  StyleType,
  Text,
} from '@ui-kitten/components';
import { CircularProgressBarAnimation, CircularProgressBarAnimationConfig } from './animation';

type CircularProgressBarStyledProps = Overwrite<StyledComponentProps, {
  appearance?: LiteralUnion<'default'>;
}>;

interface IndicatorStyle {
  width: number;
  color: string;
}

interface IconStyle {
  width: number;
  height: number;
  tintColor: string;
}

interface ComponentStyles {
  radius: number;
  track: IndicatorStyle;
  indicator: IndicatorStyle;
  container: ViewStyle;
  icon: IconStyle;
  text: TextStyle;
}

type LoadingStates = LiteralUnion<'success' | 'error' | 'progress'>;

export interface CircularProgressBarProps extends ViewProps, CircularProgressBarStyledProps {
  progress?: number;
  animating?: boolean;
  renderIcon?: RenderProp<Partial<IconProps>>;
  size?: EvaSize;
  status?: EvaStatus;
  textStyle?: TextStyle;
  iconStyle?: IconStyle;
  animationConfig?: Partial<CircularProgressBarAnimationConfig>;
}

export type CircularProgressBarElement = React.ReactElement<CircularProgressBarProps>;

/**
 * Displays the length of a process.
 *
 * @extends React.Component
 *
 * @property {number} progress - Current progress value of the process.
 * Can be from 0 to 1.

 * @property {boolean} animating - Whether component is animating.
 * Default is *true*.
 *
 * @property {string} size - Size of the component.
 * Can be `tiny`, `small`, `medium`, `large`, or `giant`.
 * Defaults to *medium*.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *primary*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {ReactElement | (IconProps) => ReactElement} renderIcon - Function component
 * to render inside circular progress bar.
 * Expected to return an Icon.
 *
 * @property {Partial<CircularProgressBarAnimationConfig>} animationConfig - Animation configuration.
 * Optional. Can define duration, easing function and etc.
 *
 * @overview-example CircularProgressBarSimpleUsage
 * Default CircularProgressBar status is `primary`, size is `medium` and animating is `true`.
 *
 * @overview-example CircularProgressBarSizes
 * To resize CircularProgressBar, a `size` property may be used.
 *
 * @overview-example CircularProgressBarStates
 * To show the specific status of the process, a `status` property may be used.
 *
 * @overview-example CircularProgressBarTheming
 * Styling of CircularProgressBar is possible with [configuring a custom theme](guides/branding).
 *
 */

@styled('CircularProgressBar')
export class CircularProgressBar extends React.PureComponent<CircularProgressBarProps> {

  static defaultProps: Partial<CircularProgressBarProps> = {
    animating: true,
    progress: 0,
  };

  private animation: CircularProgressBarAnimation;

  constructor(props: CircularProgressBarProps) {
    super(props);

    this.animation = new CircularProgressBarAnimation(props.animationConfig);
  }

  private get containerSize(): Size {
      throw new Error("STUB");
  }

  public componentDidMount(): void {
      throw new Error("STUB");
  }

  public componentDidUpdate(prevProps: CircularProgressBarProps): void {
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

  private getComponentStyle = (source: StyleType): ComponentStyles => {
      throw new Error("STUB");
  };

  private renderHalfCircle = (radius: number, style: IndicatorStyle): React.ReactElement<ViewProps> => {
      throw new Error("STUB");
  };

  private renderHalf = (
    evaStyle: ComponentStyles,
    viewStyle: ViewStyle,
    rotate: string,
    opacity?: number,
  ): React.ReactElement<ViewProps> => {
      throw new Error("STUB");
  };

  private renderCircularProgress = (
    progress: number,
    animating: boolean,
    evaStyle: ComponentStyles
  ): React.ReactElement<ViewProps> => {
      throw new Error("STUB");
  };

  private renderText = (progress: number, style: TextStyle): React.ReactElement<TextProps> => {
      throw new Error("STUB");
  };

  private renderIcon = (state: LoadingStates, style: IconStyle): React.ReactElement<IconProps> => {
      throw new Error("STUB");
  };

  private renderAccessory = (
    progress: number,
    status: EvaStatus,
    evaStyle: ComponentStyles
  ): React.ReactElement<ViewProps> => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  absoluteFill: {
    ...StyleSheet.absoluteFillObject,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  zIndex: {
    zIndex: 1,
    overflow: 'hidden',
  },
  rotate90: {
    transform: [
      { rotate: '90deg' },
    ],
  },
  rotate180: {
    transform: [
      { rotate: '180deg' },
    ],
    overflow: 'hidden',
  },
  circle: {
    overflow: 'hidden',
  },
});


