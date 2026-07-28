import React from 'react';
import {
  Animated,
  GestureResponderEvent,
  ImageProps,
  StyleSheet,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {
  ChildrenWithProps,
  Frame,
  MeasureElement,
  MeasuringElement,
  Point,
} from '../../devsupport';
import { ChevronDown } from '../shared/chevronDown.component';
import {
  MenuItem,
  MenuItemElement,
  MenuItemProps,
} from './menuItem.component';
import { MenuItemDescriptor } from './menu.service';

export interface MenuGroupProps extends MenuItemProps {
  children?: ChildrenWithProps<MenuItemProps>;
  initiallyExpanded?: boolean;
}

export type MenuGroupElement = React.ReactElement<MenuGroupProps>;

interface State {
  submenuHeight: number;
}

const CHEVRON_DEG_COLLAPSED = -180;
const CHEVRON_DEG_EXPANDED = 0;
const CHEVRON_ANIM_DURATION = 200;
const POSITION_OUTSCREEN: Point = Point.outscreen();

/**
 * A group of items displayed in Menu.
 * Groups should be rendered within Menu and contain MenuItem components to provide a useful navigation component.
 *
 * @extends React.Component
 *
 * @property {ReactElement<MenuItemProps> | ReactElement<MenuItemProps>[]} children -
 * Items to be rendered within group.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} title - String, number or a function component
 * to render within the group.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the *title*.
 * Expected to return an Image.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the *title*.
 * Expected to return an Image.
 *
 * @property {boolean} initiallyExpanded - Boolean value which defines whether group should be initially expanded.
 * If true - menu group will be expanded by default.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example MenuGroups
 */
export class MenuGroup extends React.Component<MenuGroupProps, State> {

  public state: State = {
    submenuHeight: 1,
  };

  private initiallyExpanded: boolean;

  private expandAnimation: Animated.Value = new Animated.Value(0);

  constructor(props) {
    super(props);
    this.initiallyExpanded = props.initiallyExpanded;
  }

  public componentDidUpdate(prevProps: Readonly<MenuGroupProps>, prevState: Readonly<State>): void {
      throw new Error("STUB");
  }

  private get hasSubmenu(): boolean {
      throw new Error("STUB");
  }

  private get shouldMeasureSubmenu(): boolean {
      throw new Error("STUB");
  }

  private get expandAnimationValue(): number {
      throw new Error("STUB");
  }

  private get expandToRotateInterpolation(): Animated.AnimatedInterpolation<string> {
      throw new Error("STUB");
  }

  private get submenuStyle(): ViewStyle {
      throw new Error("STUB");
  }

  private get defaultItemProps(): MenuItemProps {
      throw new Error("STUB");
  }

  private onPress = (descriptor: MenuItemDescriptor, event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private onSubmenuMeasure = (frame: Frame): void => {
      throw new Error("STUB");
  };

  private createExpandAnimation = (toValue: number): Animated.CompositeAnimation => {
      throw new Error("STUB");
  };

  private renderAccessoryIfNeeded = (evaProps: Partial<ImageProps>): React.ReactElement => {
      throw new Error("STUB");
  };

  private renderItemsWithDefaultProps = (): React.ReactNode => {
      throw new Error("STUB");
  };

  private renderGroupedItems = (evaStyle): React.ReactElement<ViewProps> => {
      throw new Error("STUB");
  };

  private renderMeasuringGroupedItems = (evaStyle): MeasuringElement => {
      throw new Error("STUB");
  };

  private renderGroupedItemsIfNeeded = (evaStyle): React.ReactNode => {
      throw new Error("STUB");
  };

  public render(): React.ReactNode {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  outscreen: {
    position: 'absolute',
    left: POSITION_OUTSCREEN.x,
    top: POSITION_OUTSCREEN.y,
  },
  submenu: {
    overflow: 'hidden',
  },
});
