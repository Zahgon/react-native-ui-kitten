/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  Animated,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {
  EvaSize,
  EvaStatus,
  Size,
  Overwrite,
  LiteralUnion,
} from '../../devsupport';
import {
  styled,
  StyledComponentProps,
} from '../../theme';
import {
  SpinnerAnimation,
  SpinnerAnimationStyle,
} from './animation';

type SpinnerStyledProps = Overwrite<StyledComponentProps, {
  appearance?: LiteralUnion<'default'>;
}>;

export interface SpinnerProps extends ViewProps, SpinnerStyledProps {
  animating?: boolean;
  status?: EvaStatus;
  size?: EvaSize;
}

export type SpinnerElement = React.ReactElement<SpinnerProps>;

interface ArcElementStyle {
  container: ViewStyle;
  arc: ViewStyle;
  overflow?: ViewStyle;
}

/**
 * Displays a loading state of a page or a section.
 *
 * @extends React.Component
 *
 * @property {boolean} animating - Whether component is animating.
 * Default is *true*.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *primary*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {string} size - Size of the component.
 * Can be `tiny`, `small`, `medium`, `large`, or `giant`.
 * Defaults to *medium*.
 *
 * @overview-example SpinnerSimpleUsage
 * Default Spinner status is `primary` and size is `medium`.
 *
 * @overview-example SpinnerSizes
 * To resize Spinner, a `size` property may be used.
 *
 * @overview-example SpinnerStatuses
 * A color can be changed with `status` property
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example SpinnerTheming
 * Styling of Spinner is possible with [configuring a custom theme](guides/branding).
 *
 * @example SpinnerDataLoading
 */
@styled('Spinner')
export class Spinner extends React.PureComponent<SpinnerProps> {

  static defaultProps: Partial<SpinnerProps> = {
    animating: true,
  };

  private animation: SpinnerAnimation = new SpinnerAnimation(this.containerSize.height);

  private get containerSize(): Size {
      throw new Error("STUB");
  }

  public componentDidMount(): void {
      throw new Error("STUB");
  }

  public componentDidUpdate(prevProps: SpinnerProps): void {
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

  private getComponentStyle = (source: SpinnerAnimationStyle): { start: ArcElementStyle; end: ArcElementStyle } => {
      throw new Error("STUB");
  };

  private renderArcElement = (style: ArcElementStyle, size: Size): React.ReactElement<ViewProps> => {
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
