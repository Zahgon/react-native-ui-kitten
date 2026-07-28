/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { StyleType } from '@ui-kitten/components';

export type PopoverIndicatorProps = ViewProps;
export type PopoverIndicatorElement = React.ReactElement<PopoverIndicatorProps>;

export class PopoverIndicator extends React.Component<PopoverIndicatorProps> {

  private getComponentStyle = (source: StyleProp<ViewStyle>): StyleType => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  container: {},
});
