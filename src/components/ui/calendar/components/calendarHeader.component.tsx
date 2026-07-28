/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewProps,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { RTLService } from '../../../devsupport';
import { Button } from '../../button/button.component';
import {
  Text,
  TextProps,
} from '../../text/text.component';
import {
  ChevronDown,
  ChevronDownElement,
} from '../../shared/chevronDown.component';
import {
  ChevronLeft,
  ChevronLeftElement,
} from '../../shared/chevronLeft.component';
import {
  ChevronRight,
  ChevronRightElement,
} from '../../shared/chevronRight.component';
import {
  CalendarViewModeId,
  CalendarViewModes,
} from '@ui-kitten/components/ui/calendar/type';

interface IconStyle extends ImageStyle {
  tintColor?: string;
}

export interface CalendarHeaderProps extends ViewProps {
  viewModeId: CalendarViewModeId;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  iconStyle?: IconStyle;
  lateralNavigationAllowed: boolean;
  onTitlePress?: () => void;
  onNavigationLeftPress?: () => void;
  onNavigationRightPress?: () => void;
  arrowLeftComponent?: React.ComponentType<{ onPress: () => void }> | null;
  arrowRightComponent?: React.ComponentType<{ onPress: () => void }> | null;
}

export type CalendarHeaderElement = React.ReactElement<CalendarHeaderProps>;

export class CalendarHeader extends React.Component<CalendarHeaderProps> {

  private renderTitleIcon = (): ChevronDownElement => {
      throw new Error("STUB");
  };

  private renderLeftIcon = (): ChevronLeftElement => {
      throw new Error("STUB");
  };

  private renderRightIcon = (): ChevronRightElement => {
      throw new Error("STUB");
  };

  private renderLeftArrow = (): React.ReactElement => {
      throw new Error("STUB");
  };

  private renderRightArrow = (): React.ReactElement => {
      throw new Error("STUB");
  };

  private renderLateralNavigationControls = (): React.ReactElement<ViewProps> => {
      throw new Error("STUB");
  };

  private renderTitleElement = (props: TextProps): React.ReactElement => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerButtonText: {
    marginHorizontal: 0,
  },
  headerButtonIcon: {
    marginHorizontal: 0,
  },
  lateralIcon: {
    marginHorizontal: 0,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
