/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {
  Animated,
  Easing,
  EasingFunction,
  Platform,
  ViewStyle,
} from 'react-native';
import {
  Animation,
  AnimationConfig,
} from '../animation/animation';

const PI = 180;
const PI2 = 360;
const OFFSET_MIN: number = PI / 12;
const OFFSET_MAX: number = PI / 6;

const BaseBezierEasing: EasingFunction = Easing.bezier(0.4, 0.0, 0.7, 1.0);

const StartArcEasing: EasingFunction = (progress: number): number => {
    throw new Error("STUB");
};

const EndArcEasing: EasingFunction = (progress: number): number => {
    throw new Error("STUB");
};

const DEFAULT_CONFIG: SpinnerAnimationConfig = {
  duration: 2400,
  easing: Easing.linear,
  cycles: -1,
  useNativeDriver: Platform.OS !== 'web',
};

type TimingAnimationConfig = Omit<Animated.TimingAnimationConfig, 'toValue'>;

export interface SpinnerAnimationStyle {
  container: ViewStyle;
  start: ViewStyle;
  end: ViewStyle;
}

export type SpinnerAnimationConfig = AnimationConfig & TimingAnimationConfig;

/**
 * Animates a Spinner in a Material Design way.
 *
 * Thanks these guys for open sourcing the algorithm: https://github.com/n4kz/react-native-indicators
 */
export class SpinnerAnimation extends Animation<SpinnerAnimationConfig, SpinnerAnimationStyle> {

  private animationValue: Animated.Value;
  private animationFrames: number[];
  private arcSize: number;

  constructor(arcSize: number, config?: SpinnerAnimationConfig) {
    super({ ...DEFAULT_CONFIG, ...config });
    this.arcSize = arcSize;
    this.animationValue = new Animated.Value(0);
    this.animationFrames = this.createFrameRange(this.config.duration);
  }

  protected get animation(): Animated.CompositeAnimation {
    return Animated.timing(this.animationValue, { toValue: 1.0, ...this.config });
  }

  public start(callback?: Animated.EndCallback): void {
    // reset animation value before the next animation cycle
    this.animationValue.setValue(0);
    super.start(callback);
  }

  public stop(): void {
      throw new Error("STUB");
  }

  /**
   * @returns {SpinnerAnimationStyle} - an object that contains container, start and end arcs transform styles.
   */
  public toProps(): SpinnerAnimationStyle {
      throw new Error("STUB");
  }

  /**
   * @param {number} duration - animation duration.
   * @returns an array of frames fitted into animation.
   */
  private createFrameRange = (duration: number): number[] => {
      throw new Error("STUB");
  };

  private createContainerInterpolation = (): Animated.AnimatedInterpolation<number> => {
      throw new Error("STUB");
  };

  private createArcInterpolation = (easing: EasingFunction): Animated.AnimatedInterpolation<number> => {
      throw new Error("STUB");
  };

  /**
   * Maps the animation frames into initial animation values specific for each frame.
   *
   * @returns a container interpolation input range in a numeric format.
   */
  private createArcInterpolationInputRange = (): number[] => {
      throw new Error("STUB");
  };

  /**
   * Maps the animation frames into a final animation values specific for each frame.
   *
   * @param {(progress: number) => number} easing - Easing function specific for the arc.
   * @returns an arc interpolation end values eased with an `easing` function in a StyleSheet degree format.
   */
  private createArcInterpolationOutputRange = (easing: EasingFunction): string[] => {
      throw new Error("STUB");
  };

  /**
   * @param {Animated.AnimatedInterpolation} rotate - animated rotation animationValue.
   * @param {ViewStyle} source - initial StyleSheet object.
   * @returns a final StyleSheet object with a `rotate` animation value.
   */
  private toStyleTransformProp = (rotate: Animated.AnimatedInterpolation<number | string>,
    source: ViewStyle = {}): ViewStyle => {
      throw new Error("STUB");
  };

  /**
   * @param {number} source - degrees in a numeric format.
   * @returns degrees in a StyleSheet format.
   */
  private toDegValue = (source: number): string => {
      throw new Error("STUB");
  };
}
