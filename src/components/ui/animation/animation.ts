/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {
  Animated,
  Platform,
} from 'react-native';

export const DEFAULT_CONFIG: AnimationConfig = {
  cycles: 1,
  useNativeDriver: Platform.OS !== 'web',
};

/**
 * @property {number} cycles - number of animation cycles. -1 for infinite
 */
export interface AnimationConfig extends Animated.AnimationConfig {
  cycles?: number;
}

export abstract class Animation<C extends AnimationConfig, R> {

  protected abstract animation: Animated.CompositeAnimation;
  protected counter = 0;
  protected endCallback: Animated.EndCallback;
  protected running = false;
  protected config: C;

  protected constructor(config?: C) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    };
  }

  public abstract toProps(): R;

  public start(callback?: Animated.EndCallback): void {
    this.endCallback = callback;
    this.running = true;

    this.animation.start(this.onAnimationEnd);
  }

  public stop(): void {
      throw new Error("STUB");
  }

  public release(): void {
      throw new Error("STUB");
  }

  protected onAnimationEnd = (result: Animated.EndResult): void => {
      throw new Error("STUB");
  };
}
