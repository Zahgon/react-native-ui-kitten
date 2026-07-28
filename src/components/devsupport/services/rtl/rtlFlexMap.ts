const FLEX_PREFIX = 'flex';
const FLEX_ROW_PREFIX = 'row';
const FLEX_WRAP_PREFIX = 'wrap';
const FLEX_START_PREFIX = 'start';
const FLEX_END_PREFIX = 'end';
const FLEX_REVERSE_PREFIX = 'reverse';

/**
 * Works with FlexBox style properties that starts with `flex` and ends with `-start` or `-end`
 *
 * E.g justifyContent: flex-start
 */
const FlexStartEndMapper: RTLFlexMapper<string> = {
  toRTL(value: string, rtl: boolean): string {
        throw new Error("STUB");
    },
};

/**
 * Works with FlexBox style properties that starts with `row` and optionally ends with `-reverse`
 *
 * E.g flexDirection: row-reverse
 */
const FlexRowMapper: RTLFlexMapper<string> = {
  toRTL(value: string, rtl: boolean): string {
        throw new Error("STUB");
    },
};

/**
 * Works with FlexBox style properties that starts with `wrap` and optionally ends with `-reverse`
 *
 * E.g flexWrap: wrap-reverse
 */
const FlexWrapMapper: RTLFlexMapper<string> = {
  toRTL(value: string, rtl: boolean): string {
        throw new Error("STUB");
    },
};

/**
 * Matches FlexBox style properties that can affect on Layout depending on LTR/RTL mode corresponding Mappers
 */
export const RtlFlexMap: Record<string, RTLFlexMapper<string>> = {
  alignContent: FlexStartEndMapper,
  alignItems: FlexStartEndMapper,
  alignSelf: FlexStartEndMapper,
  justifyContent: FlexStartEndMapper,
  flexDirection: FlexRowMapper,
  flexWrap: FlexWrapMapper,
};

interface RTLFlexMapper<T> {
  toRTL(value: T, rtl: boolean): T;
}
