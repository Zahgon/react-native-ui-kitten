/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import {
  FlexStyle,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
  Modal as RNModal,
  ModalProps as ReactNativeModalProps,
} from 'react-native';
import {
  Frame,
  MeasureElement,
  MeasuringElement,
  Point,
} from '../../devsupport';
import { ModalService } from '../../theme';
import { Backdrop, BackdropPresentingConfig } from '@ui-kitten/components/theme/backdrop/backdrop.component';

export type RNModalProps =
  Pick<ReactNativeModalProps, 'animationType' | 'hardwareAccelerated' | 'supportedOrientations' | 'onShow'>;

export interface ModalProps extends ViewProps, BackdropPresentingConfig, RNModalProps {
  visible?: boolean;
  shouldUseContainer?: boolean;
  children?: React.ReactNode;
}

export type ModalElement = React.ReactElement<ModalProps>;

interface State {
  contentFrame: Frame;
  forceMeasure: boolean;
  contentPosition: Point;
}

/**
 * A wrapper that presents content above an enclosing view.
 *
 * @extends React.Component
 *
 * @property {ReactNode} children - Component to render within the modal.
 *
 * @property {boolean} visible - Whether component is visible.
 * Defaults to false.
 *
 * @property {boolean} shouldUseContainer - Whether children should be wrapped into absolute positioned container.
 * Defaults to true.
 *
 * @property {boolean} hardwareAccelerated - Controls whether to force hardware acceleration for the underlying window.
 * Defaults to false.
 *
 * @property {'none' | 'slide' | 'fade'} animationType - Controls how the modal animates.
 * Defaults to 'none'.
 *
 * @property {Array<'portrait' | 'portrait-upside-down' | 'landscape' | 'landscape-left' | 'landscape-right'>}
 * supportedOrientations -
 * Allows the modal to be rotated to any of the specified orientations.
 * On iOS, the modal is still restricted by what's specified
 * in your app's Info.plist's UISupportedInterfaceOrientations field
 *
 * @property {() => void} onBackdropPress - Called when the modal is visible and the view below it was touched.
 * Useful when needed to close the modal on outside touches.
 *
 * @property {(event: NativeSyntheticEvent<any>) => void} onShow -
 * Allows passing a function that will be called once the modal has been shown.
 *
 * @property {StyleProp<ViewStyle>} backdropStyle - Style of backdrop.
 *
 * @property {ViewProps} ...ViewProps - Any props applied to View component.
 *
 * @overview-example ModalSimpleUsage
 * Modals accept content views as child elements and are displayed in the screen center.
 * To display a modal, a `visible` property should be used.
 *
 * @overview-example ModalWithBackdrop
 * To configure underlying view, `backdropStyle` and `onBackdropPress` properties may be used.
 */
export class Modal extends React.PureComponent<ModalProps, State> {

  static defaultProps: Partial<ModalProps> = {
    shouldUseContainer: true,
  };

  public state: State = {
    contentFrame: Frame.zero(),
    forceMeasure: false,
    contentPosition: Point.outscreen(),
  };

  private get contentFlexPosition(): FlexStyle {
      throw new Error("STUB");
  }

  public componentDidUpdate(): void {
      throw new Error("STUB");
  }

  public static getDerivedStateFromProps(props: ModalProps, state: State): State {
      throw new Error("STUB");
  }

  private onContentMeasure = (contentFrame: Frame): void => {
      throw new Error("STUB");
  };

  private renderContentElement = (): React.ReactElement<ViewProps> => {
      throw new Error("STUB");
  };

  private renderMeasuringContentElement = (): MeasuringElement => {
      throw new Error("STUB");
  };

  public render(): React.ReactNode {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  modalView: {
    position: 'absolute',
  },
});
