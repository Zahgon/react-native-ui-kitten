/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {
  IconPack,
  IconProvider,
} from './type';

function throwPackNotFoundError(name: string): void {
    throw new Error("STUB");
}

function throwIconNotFoundError(name: string, pack: string): void {
    throw new Error("STUB");
}

export interface RegisteredIcon<T> {
  name: string;
  pack: string;
  icon: IconProvider<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconProps = any;

/**
 * This service allows to register multiple icon packs to use them later within
 * `<Icon/>` component.
 */
class RegistryService {

  protected packs: Map<string, IconPack<IconProps>> = new Map();
  protected defaultPack: string;

  /**
   * Registers multiple icon packs and sets the first one as default if there is no default packs
   *
   * @param {IconPack[]} packs - array of icon packs
   */
  public register<T>(...packs: IconPack<T>[]): void {
      throw new Error("STUB");
  }

  /**
   * Sets pack as default
   *
   * @param {string} name
   * @throws {Error} if pack is nor registered
   */
  public setDefaultIconPack(name: string): void {
      throw new Error("STUB");
  }

  /**
   * @param {string} name
   * @returns {IconPack} pack by name
   */
  public getIconPack<T>(name: string): IconPack<T> {
      throw new Error("STUB");
  }

  /**
   * @param {string} name - icon name
   * @param {string} pack - pack name
   * @throws {Error} if requested icon pack is not registered
   * @returns {RegisteredIcon} - registered icon of a requested/default pack
   */
  public getIcon<T>(name: string, pack?: string): RegisteredIcon<T> {
      throw new Error("STUB");
  }

  /**
   * Registers single icon pack
   *
   * @param {IconPack} pack - icon pack to register
   */
  protected registerIconPack<T>(pack: IconPack<T>): void {
      throw new Error("STUB");
  }

  protected getPackOrThrow<T>(name: string): IconPack<T> {
      throw new Error("STUB");
  }

  protected getDefaultPack<T>(): IconPack<T> {
      throw new Error("STUB");
  }

  protected getIconFromPack<T>(name: string, pack: IconPack<T>, shouldThrow = true): IconProvider<T> {
      throw new Error("STUB");
  }
}

export const IconRegistryService = new RegistryService();
