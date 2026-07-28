import React from 'react';
import { IndexPath } from '../../devsupport';

export interface MenuItemDescriptor {
  index: IndexPath;
  groupIndices?: IndexPath[];
}

export class MenuService {

  public createDescriptorForElement = (element: React.ReactElement, index: number): MenuItemDescriptor => {
      throw new Error("STUB");
  };

  public createDescriptorForNestedElement =
  (groupDescriptor: MenuItemDescriptor, index: number): MenuItemDescriptor => {
      throw new Error("STUB");
  };
}
