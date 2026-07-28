import React from 'react';
import { ThemeStyleType } from '@eva-design/dss';
import { MappingContext } from './mappingContext';

export interface MappingProviderProps {
  styles: ThemeStyleType;
  children?: React.ReactNode;
}

export class MappingProvider extends React.PureComponent<MappingProviderProps> {

  public render(): React.ReactNode {
      throw new Error("STUB");
  }
}
