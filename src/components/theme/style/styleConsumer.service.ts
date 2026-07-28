/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import {
  ControlMetaType,
  ControlThemedStyleType,
  ThemedStyleType,
} from '@eva-design/dss';
import { StyledComponentProps } from './styled';
import {
  Interaction,
  StyleService,
  StyleType,
} from './style.service';
import { ThemeType } from '../theme/theme.service';

const SEPARATOR_MAPPING_ENTRY = '.';
const DOC_ROOT = 'https://akveo.github.io/react-native-ui-kitten/docs';

interface StyleInfo {
  appearance: string;
  variants: string[];
  states: string[];
}

interface DefaultVariants {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

export class StyleConsumerService {

  private readonly name: string;
  private readonly meta: ControlMetaType;

  constructor(name: string, style: StyleType) {
      throw new Error("STUB");
  }

  public createDefaultProps(): StyledComponentProps {
    const appearance: string = this.getDefaultAppearance();
    const variants: { [key: string]: string } = this.getDefaultVariants();
    const states: { [key: string]: boolean } = this.getDefaultStates();

    return { appearance, ...variants, ...states };
  }

  public createStyleProp<P extends object>(source: P,
    style: StyleType,
    theme: ThemeType,
    interaction: Interaction[]): StyleType {

    const styleInfo: StyleInfo = this.getStyleInfo(source, this.withValidInteraction(interaction));
    const generatedMapping: StyleType = this.getGeneratedStyleMapping(style, styleInfo);

    if (!generatedMapping) {
      const message: string = [
        `${this.name}: unsupported configuration.`,
        `Check one of the following prop values: ${JSON.stringify(styleInfo, null, 2)}`,
        `📖 Documentation: ${DOC_ROOT}/components/${this.name.toLowerCase()}/api`,
      ].join('\n');

      console.warn(message);

      return this.createStyleProp({ ...source, ...this.createDefaultProps() }, style, theme, interaction);
    }

    const mapping: StyleType = this.withValidParameters(generatedMapping);

    return StyleService.createThemedEntry(mapping, theme);
  }

  private getGeneratedStyleMapping(style: StyleType, info: StyleInfo): StyleType {

    return this.safe(style[this.name], (componentStyles: ControlThemedStyleType): ThemedStyleType => {
        throw new Error("STUB");
    });
  }

  private withValidInteraction(interaction: Interaction[]): Interaction[] {
    const validInteractions: Interaction[] = interaction.filter((key: Interaction) => {
        throw new Error("STUB");
    });

    if (validInteractions.length < interaction.length) {
      const message: string = [
        `${this.name}: unsupported configuration.`,
        `Check one of the following dispatched interactions: ${interaction}`,
        `📖 Documentation: ${DOC_ROOT}/design-system/custom-component-mapping`,
      ].join('\n');

      console.warn(message);
    }

    return validInteractions;
  }

  private withValidParameters(mapping: StyleType): StyleType {
    const invalidParameters: string[] = [];

    Object.keys(mapping).forEach((key: string) => {
        throw new Error("STUB");
    });

    if (invalidParameters.length !== 0) {
      const message: string = [
        `${this.name}: unsupported configuration.`,
        `Unable to apply ${invalidParameters}`,
        'There might be an incorrect usage of mapping',
        `📖 Documentation: ${DOC_ROOT}/design-system/custom-component-mapping`,
      ].join('\n');

      console.warn(message);
    }

    return mapping;
  }

  private getStyleInfo<P extends StyledComponentProps>(props: P,
    interaction: Interaction[]): StyleInfo {
    const variantProps: Partial<P> = this.getDerivedVariants(this.meta, props);
    const stateProps: Partial<P> = this.getDerivedStates(this.meta, props);

    const variants: string[] = Object.keys(variantProps).map((variant: string): string => {
        throw new Error("STUB");
    });

    const states: string[] = Object.keys(stateProps);

    return {
      appearance: props.appearance,
      variants: variants,
      states: [...states, ...interaction],
    };
  }

  private getDefaultAppearance(): string {
    const matches: string[] = Object.keys(this.meta.appearances).filter((appearance: string): boolean => {
        throw new Error("STUB");
    });

    return matches[matches.length - 1];
  }

  private getDefaultVariants(): DefaultVariants {
    return this.transformObject(this.meta.variantGroups, (variants, group: string): string | undefined => {
        throw new Error("STUB");
    });
  }

  private getDefaultStates(): DefaultVariants {
    return this.transformObject(this.meta.states, (states, state: string): boolean | undefined => {
        throw new Error("STUB");
    });
  }

  private getDerivedVariants<P extends StyledComponentProps>(meta: ControlMetaType, props: P): Partial<P> {
    return this.transformObject(props, (p: P, prop: string): string | undefined => {
        throw new Error("STUB");
    });
  }

  private getDerivedStates<P extends StyledComponentProps>(meta: ControlMetaType, props: P): Partial<P> {
    return this.transformObject(props, (p: P, prop: string): boolean => {
        throw new Error("STUB");
    });
  }

  /**
   * Iterates throw `value` object keys and fills it values with values provided by `transform` callback
   * If `transform` returns `undefined`, then appends nothing
   *
   * @param value (V extends object) - object to transform
   * @param transform - object key transformation callback
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private transformObject<V extends object>(value: V, transform: (value: V, key: string) => any): Partial<V> {
    return Object.keys(value).reduce((acc: Partial<V>, key: string) => {
        throw new Error("STUB");
    }, {});
  }

  /**
   * Finds identical keys across `source` keys array
   *
   * Example:
   *
   * source = ['default.error.small.checked', ...]
   * info = { appearance: 'default', variants: ['small', 'error'], states: ['checked'] }
   *
   * will return ['default', 'error', 'small', 'checked']
   *
   * @param info (StyleInfo) - component style info
   * @param source (string[]) - array of style keys
   *
   * @return (string | undefined) - key identical to some of `source` keys if presents
   */
  private findGeneratedQuery(info: StyleInfo, source: string[]): string | undefined {
    const query: string[] = [
      info.appearance,
      ...info.variants,
      ...info.states,
    ];

    return source.find((value) => { throw new Error("STUB"); });
  }

  /**
   * @param lhs (string[]) - comparable array
   * @param rhs (string[]) - comparing array
   *
   * @return true if all of lhs keys are included in rhs
   */
  private compareArrays(lhs: string[], rhs: string[]): boolean {
    if (lhs.length !== rhs.length) {
      return false;
    }

    return lhs.reduce((acc: boolean, current: string): boolean => { throw new Error("STUB"); }, true);
  }

  /**
   * Safely retrieves R value of T object with reducer
   *
   * @param value (T | undefined) - unsafe object which should be processed
   * @param reducer ((T) => R) - `value` processing lambda. Called if `value` is not `undefined`
   * @param fallback (R) - fallback value to return. Optional
   *
   * @return (R | undefined) - object returned by `reducer` if `value` is not `undefined`, `fallback` otherwise
   **/
  private safe<T, R>(value: T | undefined, reducer: (value: T) => R, fallback?: R): R | undefined {
    if (value) {
      return reducer(value);
    }

    return fallback;
  }
}
