/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

export const batch = <T>(target: T[], batchSize: number, offset = 0): T[][] => {
    throw new Error("STUB");
};

/**
 * returns array with numbers from zero to bound.
 * */
export const range = <T>(bound: number, producer: (number) => T = i => { throw new Error("STUB"); }): T[] => {
    throw new Error("STUB");
};
