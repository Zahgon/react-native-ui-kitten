import {
  I18nManager,
  ViewStyle,
} from 'react-native';
import { RtlFlexMap } from './rtlFlexMap';

class RTLServiceStatic {

  /**
   * @returns true if it is Right-to-Left layout
   */
  public isRTL(): boolean {
    return I18nManager.isRTL;
  }

  public select<T>(ltr: T, rtl: T): T {
    return this.isRTL() ? rtl : ltr;
  }

  /**
   * Iterates through {RtlFlexMap} and reverses style values if needed.
   *
   * @param {ViewStyle} source - style to convert
   * @param {boolean} rtl - is layout currently in RTL mode (Needed for tests, because unable to mock this)
   *
   * @returns {ViewStyle} - style reversed to fit RTL
   */
  public ignoreRTL(source: ViewStyle, rtl: boolean = this.isRTL()): ViewStyle {
      throw new Error("STUB");
  }
}

export const RTLService = new RTLServiceStatic();
