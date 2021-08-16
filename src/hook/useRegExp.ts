export const RegExp = {
  username: /^[0-9a-zA-Z_]{6,20}$/,
  account: /^[a-zA-Z0-9]{6,20}$/,
  phone: /^1[0-9]{10}$/,
  img_code: /^[0-9a-zA-Z]{4}$/,
  phone_code: /^[0-9]{6}$/,
  email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
  id_card:
    /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
  invitation_code: /^[\s\S]{6}$/,
  file_name: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
  password: /^(?![A-Za-z]+$)(?![A-Z\d]+$)(?![A-Z\W]+$)(?![a-z\d]+$)(?![a-z\W]+$)(?![\d\W]+$)\S{8,16}$/,
  credit_code: /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/,
  capitalized_amount: /^(([1-9]{1}\d*)|(0{1}))(\.\d{1,2})?$/,
  num: /^\d+$|^\d*\.\d+$/g,
  date: /^([0-9]|10)$/,
  rate: /^(\d{0,2})$|^([1][0][0])$/,
  regexps_product_num: /^0\.([0-9]|\d[0-9])$|^[0-9]\d{0,8}\.\d{0,4}$|^[1-9]\d{0,8}$/,
  regexps_product_zero: /^([1-9]\d*(\.\d*)?)|(0\.\d*[1-9][0-9])|(0\.\d*[1-9])$/,
  regexps_product_rate: /^0\.([1-9]|\d[1-9])$|^[1-9]\d{0,8}\.\d{0,2}$|^[1-9]\d{0,8}$/,
  regexps_product_date: /^[1-9]\d*$/
};

export const useRegexpsValidator = (function <T extends { [key: string]: RegExp }>(regExps: T) {
  return function (key: keyof T, value: string): boolean {
    return regExps[key].test(value);
  };
})(RegExp);
