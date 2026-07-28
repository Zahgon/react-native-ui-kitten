/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native';
import {
  EvaStatus,
  FalsyFC,
  RenderProp,
  TouchableWeb,
  TouchableWebElement,
  TouchableWebProps,
  Overwrite,
  LiteralUnion,
} from '../../devsupport';
import {
  Interaction,
  styled,
  StyledComponentProps,
  StyleType,
} from '../../theme';
import { Divider } from '../divider/divider.component';

type CardStyledProps = Overwrite<StyledComponentProps, {
  appearance?: LiteralUnion<'filled' | 'outline'>;
}>;

export interface CardProps extends TouchableWebProps, CardStyledProps {
  children?: React.ReactNode;
  header?: RenderProp<ViewProps>;
  footer?: RenderProp<ViewProps>;
  accent?: RenderProp<ViewProps>;
  status?: EvaStatus;
}

export type CardElement = React.ReactElement<CardProps>;

/**
 * Cards contain content and actions about a single subject.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the card.
 *
 * @property {ReactElement | (ViewProps) => ReactElement} header - Function component
 * to render above the content.
 *
 * @property {ReactElement | (ViewProps) => ReactElement} footer - Function component
 * to render below the content.
 *
 * @property {ReactElement | (ViewProps) => ReactElement} accent - Function component
 * to render above the card.
 * Accents may change it's color depending on *status* property.
 *
 * @property {string} appearance - Appearance of the component.
 * Can be `filled` or `outline`.
 * Defaults to *outline*.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example CardSimpleUsage
 * In basic example, card accepts content view as child element.
 *
 * @overview-example CardAccessories
 * It also may have header and footer by configuring `header` and `footer` properties.
 *
 * @overview-example CardStatuses
 */
@styled('Card')
export class Card extends React.Component<CardProps> {

  private onPressIn = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private onPressOut = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private getComponentStyle = (source: StyleType): StyleType => {
      throw new Error("STUB");
  };

  private renderStatusAccent = (evaStyle): React.ReactElement => {
      throw new Error("STUB");
  };

  public render(): TouchableWebElement {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  content: {
    flexShrink: 1,
  },
});
