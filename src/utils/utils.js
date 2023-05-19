/**
 * thousand separator by ,
 * @param {string} value
 * @returns number
 */

export const delimiter = (value) => {
  return Number(value).toLocaleString("ja-JP");
};
