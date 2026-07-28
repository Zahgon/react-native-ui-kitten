import React from 'react';
import { ChildrenWithProps } from '../../devsupport';
import {
  CheckBox,
  CheckBoxElement,
  CheckBoxProps,
} from '../checkbox/checkbox.component';
import {
  SelectItem,
  SelectItemElement,
  SelectItemProps,
} from './selectItem.component';

export interface SelectGroupProps extends SelectItemProps {
  children?: ChildrenWithProps<SelectItemProps>;
}

export type SelectGroupElement = React.ReactElement<SelectItemProps>;

/**
 * A group of items displayed in Select.
 * Groups should be rendered within Select and contain SelectItem components to provide a useful component.
 *
 * @extends React.Component
 *
 * @property {ReactElement<SelectItemProps> | ReactElement<SelectItemProps>[]} children -
 * Items to be rendered within group.
 *
 * @property {ReactElement | ReactText | (TextProps) => ReactElement} title - String, number or a function component
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
 * @property {TouchableOpacityProps} ...TouchableOpacityProps - Any props applied to TouchableOpacity component.
 *
 * @overview-example SelectWithGroups
 */
export class SelectGroup extends React.Component<SelectGroupProps> {

  private get isMultiSelect(): boolean {
      throw new Error("STUB");
  }

  private get groupAccessoryState(): CheckBoxProps {
      throw new Error("STUB");
  }

  private get groupAccessoryProps(): CheckBoxProps {
      throw new Error("STUB");
  }

  private createAccessoryProps = (props: SelectItemProps): CheckBoxProps => {
      throw new Error("STUB");
  };

  private createGroupedItemProps = (props: SelectItemProps): SelectItemProps => {
      throw new Error("STUB");
  };

  private renderAccessory = (props: CheckBoxProps): CheckBoxElement => {
      throw new Error("STUB");
  };

  private renderGroupedItems = (source: ChildrenWithProps<SelectItemProps>): SelectItemElement[] => {
      throw new Error("STUB");
  };

  public render(): React.ReactElement {
      throw new Error("STUB");
  }
}
