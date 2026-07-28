import React from 'react';
import { IndexPath } from '../../devsupport';
import { SelectItemElement } from './selectItem.component';

export interface SelectItemDescriptor {
  multiSelect: boolean;
  index: IndexPath;
  groupIndices?: IndexPath[];
}

const SEPARATOR = ', ';

export class SelectService {

  public selectItem = (multiSelect: boolean,
    descriptor: SelectItemDescriptor,
    selected: IndexPath[]): IndexPath | IndexPath[] => {
      throw new Error("STUB");
  };

  public toStringSelected = (selected: IndexPath[]): string => {
      throw new Error("STUB");
  };

  public isSelected = (descriptor: SelectItemDescriptor, selected: IndexPath[]): boolean => {
      throw new Error("STUB");
  };

  public isDisabled = (descriptor: SelectItemDescriptor): boolean => {
      throw new Error("STUB");
  };

  public createDescriptorForElement = (element: SelectItemElement,
    multiSelect: boolean,
    index: number): SelectItemDescriptor => {
      throw new Error("STUB");
  };

  public createDescriptorForNestedElement = (element: SelectItemElement,
    descriptor: SelectItemDescriptor,
    index: number): SelectItemDescriptor => {
      throw new Error("STUB");
  };

  private createMultiSelectIndices = (descriptor: SelectItemDescriptor, selected: IndexPath[]): IndexPath[] => {
      throw new Error("STUB");
  };

  private isGroup = (descriptor: SelectItemDescriptor): boolean => {
      throw new Error("STUB");
  };

  private createGroupIndices = (descriptor: SelectItemDescriptor): IndexPath[] => {
      throw new Error("STUB");
  };

  private addIndex = (descriptor: SelectItemDescriptor, selected: IndexPath[]): IndexPath[] => {
      throw new Error("STUB");
  };

  private removeIndex = (descriptor: SelectItemDescriptor, selected: IndexPath[]): IndexPath[] => {
      throw new Error("STUB");
  };

  private contains = (index: IndexPath, selected: IndexPath[]): boolean => {
      throw new Error("STUB");
  };

  private containsSomeFromGroup = (index: IndexPath, selected: IndexPath[]): boolean => {
      throw new Error("STUB");
  };
}
