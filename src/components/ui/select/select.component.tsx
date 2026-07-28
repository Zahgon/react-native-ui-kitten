/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React, { ReactNode } from 'react';
import {
  Animated,
  GestureResponderEvent,
  ImageProps,
  ListRenderItemInfo,
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  TargetedEvent,
  TextProps,
  TextStyle,
  View,
  ViewProps,
} from 'react-native';
import {
  ChildrenWithProps,
  EvaInputSize,
  EvaStatus,
  FalsyFC,
  FalsyText,
  IndexPath,
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
import { List } from '../list/list.component';
import { Popover } from '../popover/popover.component';
import { ChevronDown } from '../shared/chevronDown.component';
import { SelectGroupProps } from './selectGroup.component';
import {
  SelectItemElement,
  SelectItemProps,
} from './selectItem.component';
import {
  SelectItemDescriptor,
  SelectService,
} from './select.service';

type SelectStyledProps = Overwrite<StyledComponentProps, {
  appearance?: LiteralUnion<'default'>;
}>;

export interface SelectProps extends TouchableWebProps, SelectStyledProps {
  children?: ChildrenWithProps<SelectItemProps | SelectGroupProps>;
  selectedIndex?: IndexPath | IndexPath[];
  onSelect?: (index: IndexPath | IndexPath[]) => void;
  value?: RenderProp<TextProps> | React.ReactText;
  multiSelect?: boolean;
  placeholder?: RenderProp<TextProps> | React.ReactText;
  label?: RenderProp<TextProps> | React.ReactText;
  caption?: RenderProp<TextProps> | React.ReactText;
  accessoryLeft?: RenderProp<Partial<ImageProps>>;
  accessoryRight?: RenderProp<Partial<ImageProps>>;
  status?: EvaStatus;
  size?: EvaInputSize;
}

export type SelectElement = React.ReactElement<SelectProps>;

interface State {
  listVisible: boolean;
}

const CHEVRON_DEG_COLLAPSED = -180;
const CHEVRON_DEG_EXPANDED = 0;
const CHEVRON_ANIM_DURATION = 200;

/**
 * A dropdown menu for displaying selectable options.
 * Select should contain SelectItem or SelectGroup components to provide a useful component.
 *
 * @extends React.Component
 *
 * @method {() => void} focus - Focuses input field and sets options list visible.
 *
 * @method {() => void} blur - Removes focus from input field and sets options list invisible.
 *
 * @method {() => boolean} isFocused - Whether input field is currently focused and options list is visible.
 *
 * @method {() => void} clear - Removes all text from the Select.
 *
 * @property {ReactElement<SelectItemProps> | ReactElement<SelectItemProps>[]} children -
 * Items to be rendered within options list.
 *
 * @property {IndexPath | IndexPath[]} selectedIndex - Index or array of indices of selected options.
 * IndexPath `row: number, section?: number` - position of element in sectioned list.
 * Select becomes sectioned when SelectGroup is rendered within children.
 *
 * @property {(IndexPath | IndexPath[]) => void} onSelect - Called when option is pressed.
 * Called with `row: number` for non-grouped items.
 * Called with `row: number, section: number` for items rendered within group,
 * where row - index of item in group, section - index of group in list.
 * Called with array if *multiSelect* was set to true.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} value - String, number or a function component
 * to render for the selected options.
 * By default, calls *toString()* for each index in selectedIndex property.
 * If it is a function, expected to return a Text.
 *
 * @property {boolean} multiSelect - Whether multiple options can be selected.
 * If true, calls onSelect with IndexPath[] in arguments.
 * Otherwise, with IndexPath in arguments.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} placeholder - String, number or a function
 * component to render when there is no selected option.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} label - String, number or a function component
 * to render above input field.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactText | ReactElement | (TextProps) => ReactElement} caption - String, number or a function component
 * to render below the input field.
 * If it is a function, expected to return a Text.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryLeft - Function component
 * to render to start of the text.
 * Expected to return an Image.
 *
 * @property {ReactElement | (ImageProps) => ReactElement} accessoryRight - Function component
 * to render to end of the text.
 * Expected to return an Image.
 *
 * @property {string} status - Status of the component.
 * Can be `basic`, `primary`, `success`, `info`, `warning`, `danger` or `control`.
 * Defaults to *basic*.
 * Use *control* status when needed to display within a contrast container.
 *
 * @property {string} size - Size of the component.
 * Can be `small`, `medium` or `large`.
 * Defaults to *medium*.
 *
 * @property {() => void} onFocus - Called when options list becomes visible.
 *
 * @property {() => void} onBlur - Called when options list becomes invisible.
 *
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example SelectSimpleUsage
 *
 * @overview-example SelectIndexType
 * Select works with special index object - IndexPath.
 * For non-grouped items in select, there is only a `row` property.
 * Otherwise, `row` is an index of option within the group, section - index of group in options list.
 * ```
 * interface IndexPath {
 *   row: number;
 *   section?: number;
 * }
 * ```
 *
 * @overview-example SelectMultiSelect
 * Multiple options can be selected if `multiSelect` property is configured.
 * For multiple options, `onSelect` function is called with array if indices.
 *
 * @overview-example SelectWithGroups
 * Options may be grouped within `SelectGroup` component.
 *
 * @overview-example SelectDisplayValue
 * By default, Select displays a value by building strings for selected indices.
 * For a real-word examples, a `value` property should be configured.
 *
 * @overview-example SelectStates
 * Select can be disabled with `disabled` property.
 *
 * @overview-example SelectDisabledOptions
 * Same for options.
 *
 * @overview-example SelectStatus
 * It also may be marked with `status` property, which is useful within forms validation.
 * An extra status is `control`, which is designed to be used on high-contrast backgrounds.
 *
 * @overview-example SelectAccessories
 * Select may contain labels, captions and inner views by configuring `accessoryLeft` or `accessoryRight` properties.
 * Within Eva, Select accessories are expected to be images or [svg icons](guides/icon-packages).
 *
 * @overview-example SelectSize
 * To resize Select, a `size` property may be used.
 *
 * @overview-example SelectStyling
 * Select and it's inner views can be styled by passing them as function components.
 * ```
 * import { Select, SelectItem, Text } from '@ui-kitten/components';
 *
 * <Select
 *   label={evaProps => <Text {...evaProps}>Label</Text>}
 *   caption={evaProps => <Text {...evaProps}>Caption</Text>}>
 *   <SelectItem title={evaProps => <Text {...evaProps}>Option 1</Text>} />
 * </Select>
 * ```
 *
 * @overview-example SelectTheming
 * In most cases this is redundant, if [custom theme is configured](guides/branding).
 */

@styled('Select')
export class Select extends React.Component<SelectProps, State> {

  static defaultProps = {
    placeholder: 'Select Option',
    selectedIndex: [],
  };

  public state: State = {
    listVisible: false,
  };

  private service: SelectService = new SelectService();
  private expandAnimation: Animated.Value = new Animated.Value(0);

  private get isMultiSelect(): boolean {
      throw new Error("STUB");
  }

  private get data(): Array<Exclude<ReactNode, boolean | null | undefined>> {
      throw new Error("STUB");
  }

  private get selectedIndices(): IndexPath[] {
      throw new Error("STUB");
  }

  private get expandToRotateInterpolation(): Animated.AnimatedInterpolation<string> {
      throw new Error("STUB");
  }

  public focus = (): void => {
      throw new Error("STUB");
  };

  public blur = (): void => {
      throw new Error("STUB");
  };

  public isFocused = (): boolean => {
      throw new Error("STUB");
  };

  public clear = (): void => {
      throw new Error("STUB");
  };

  private onMouseEnter = (event: NativeSyntheticEvent<TargetedEvent>): void => {
      throw new Error("STUB");
  };

  private onMouseLeave = (event: NativeSyntheticEvent<TargetedEvent>): void => {
      throw new Error("STUB");
  };

  private onPress = (): void => {
      throw new Error("STUB");
  };

  private onPressIn = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private onPressOut = (event: GestureResponderEvent): void => {
      throw new Error("STUB");
  };

  private onItemPress = (descriptor: SelectItemDescriptor): void => {
      throw new Error("STUB");
  };

  private onBackdropPress = (): void => {
      throw new Error("STUB");
  };

  private onListVisible = (): void => {
      throw new Error("STUB");
  };

  private onListInvisible = (): void => {
      throw new Error("STUB");
  };

  private getComponentStyle = (style: StyleType): StyleType => {
      throw new Error("STUB");
  };

  private setOptionsListVisible = (): void => {
      throw new Error("STUB");
  };

  private setOptionsListInvisible = (): void => {
      throw new Error("STUB");
  };

  private createExpandAnimation = (toValue: number): Animated.CompositeAnimation => {
      throw new Error("STUB");
  };

  private cloneItemWithProps = (el: SelectItemElement, props: SelectItemProps): SelectItemElement => {
      throw new Error("STUB");
  };

  private renderItem = (info: ListRenderItemInfo<SelectItemElement>): SelectItemElement => {
      throw new Error("STUB");
  };

  private renderDefaultIconElement = (evaStyle): React.ReactElement => {
      throw new Error("STUB");
  };

  private renderInputElement = (props: SelectProps, evaStyle): TouchableWebElement => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement<ViewProps> {
      throw new Error("STUB");
  }
}

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  popover: {
    overflow: 'hidden',
  },
  list: {
    flexGrow: 0,
  },
  text: {
    flex: 1,
    textAlign: 'left',
  },
  label: {
    textAlign: 'left',
  },
  caption: {
    textAlign: 'left',
  },
});
