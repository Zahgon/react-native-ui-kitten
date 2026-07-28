/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  StyleProp,
  TransformsStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {
  FalsyFC,
  RTLService,
} from '../../devsupport';
import {
  styled,
  StyledComponentProps,
  StyleType,
} from '../../theme';
import {
  FlexPlacement,
} from './type';

type AnimatedViewStyle = ViewStyle;

export interface PopoverViewProps extends ViewProps, StyledComponentProps {
  contentContainerStyle?: StyleProp<AnimatedViewStyle>;
  layoutDirection?: FlexPlacement;
  indicator?: (props: ViewProps) => React.ReactElement;
}

export type PopoverViewElement = React.ReactElement<PopoverViewProps>;

const INDICATOR_OFFSET = 8;
const INDICATOR_WIDTH = 6;

@styled('Popover')
export class PopoverView extends React.Component<PopoverViewProps> {
  private getComponentStyle = (source: StyleType): StyleType => {
      throw new Error("STUB");
  };

  private getDirectionStyle = (): StyleType => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}
