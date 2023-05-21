/**
 * thousand separator by ,
 * @param {string} value
 * @returns number
 */

export const delimiter = (value) => {
  return Number(value).toLocaleString("ja-JP");
};

export const counterFollow = (quntity, isFolow) => {
  let quntytiFollow = Number(quntity);

  if (!isFolow) {
    quntytiFollow += 1;
  } else {
    quntytiFollow -= 1;
  }

  return quntytiFollow;
};
