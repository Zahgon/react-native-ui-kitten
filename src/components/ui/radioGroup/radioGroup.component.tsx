/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  View,
  ViewProps,
} from 'react-native';
import {
  ChildrenWithProps,
  Overwrite,
  LiteralUnion,
} from '../../devsupport';
import {
  styled,
  StyledComponentProps,
  StyleType,
} from '../../theme';
import {
  RadioElement,
  RadioProps,
} from '../radio/radio.component';

type RadioGroupStyledProps = Overwrite<StyledComponentProps, {
  appearance?: LiteralUnion<'default'>;
}>;

export interface RadioGroupProps extends ViewProps, RadioGroupStyledProps {
  children?: ChildrenWithProps<RadioProps>;
  selectedIndex?: number;
  onChange?: (index: number) => void;
}

export type RadioGroupElement = React.ReactElement<RadioGroupProps>;

/**
 * Provides to select a single state from multiple options.
 * RadioGroup should contain Radio components to provide a useful component.
 *
 * @extends React.Component
 *
 * @property {number} selectedIndex - Index of currently checked radio.
 *
 * @property {(number) => void} onChange - Called when one of the radios is pressed.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example RadioGroupSimpleUsage
 */
@styled('RadioGroup')
export class RadioGroup extends React.Component<RadioGroupProps> {

  static defaultProps: Partial<RadioGroupProps> = {
    selectedIndex: -1,
  };

  private onRadioChange = (index: number): void => {
      throw new Error("STUB");
  };

  private getComponentStyle = (source: StyleType): StyleType => {
      throw new Error("STUB");
  };

  private renderRadioElements = (source: ChildrenWithProps<RadioProps>, style: StyleType): RadioElement[] => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}
