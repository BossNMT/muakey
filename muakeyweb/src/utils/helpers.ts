import { KEY } from 'store/common/constants';
import { APP_CONFIG } from './env';
import { BaseApi } from './baseApi';

export const getCookie = (cname: string | undefined) => {
  if (!cname) {
    return;
  }
  const name = cname + '';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length + 1, c.length);
    }
  }
  return '';
};

/**
 * Set cookie
 **/
export const saveCookie = (cookieData: { name: string; value: string; exdays: number }): void => {
  if (!cookieData?.name) {
    return;
  }
  const date = new Date();
  date.setTime(date.getTime() + cookieData.exdays * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieData.name}=${cookieData.value}; expires=${date.toUTCString()}`;
};

/**
 * Del Cookie by name
 **/
export const delCookie = (name: string) => {
  if (!name) {
    return;
  }
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

/**
 * Check Empty data
 **/
export const isEmpty = (value: any): boolean => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};
export const formatNumber = (value: string | number) => {
  const phoneNumber = value + '';
  const list = phoneNumber.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
};

export const validationPhone = (value: string, callback: any) => {
  if (/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value)) {
    return callback();
  }
  return callback('S??? ??i???n tho???i ch??a ????ng ?????nh d???ng');
};

export const stringToSlug = (str: string): string => {
  // Chuy???n h???t sang ch??? th?????ng
  str = str.toLowerCase();

  // x??a d???u
  str = str
    .normalize('NFD') // chuy???n chu???i sang unicode t??? h???p
    .replace(/[\u0300-\u036f]/g, ''); // x??a c??c k?? t??? d???u sau khi t??ch t??? h???p

  // Thay k?? t??? ????
  str = str.replace(/[????]/g, 'd');

  // X??a k?? t??? ?????c bi???t
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // X??a kho???ng tr???ng thay b???ng k?? t??? -
  str = str.replace(/(\s+)/g, '-');

  // X??a k?? t??? - li??n ti???p
  str = str.replace(/-+/g, '-');

  // x??a ph???n d?? - ??? ?????u & cu???i
  str = str.replace(/^-+|-+$/g, '');

  // return
  return str;
};

export const getUrlImage = (url = '') => {
  return url && url !== '' ? APP_CONFIG.apiUrl + url : null;
};

export const getExpirationDate = (jwtToken: string) => {
  if (!jwtToken) {
    return null;
  }

  const jwt = JSON.parse(atob(jwtToken.split('.')[1]));

  // multiply by 1000 to convert seconds into milliseconds
  return (jwt && jwt.exp && jwt.exp * 1000) || null;
};

export const formatPrice = (value: number | undefined) => {
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatPriceVND = (value: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);

export const checkImageFile = (data: File[]): boolean => {
  for (const key in data) {
    const file = data[key];
    if (file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpeg') {
      return false;
    }
  }
  return true;
};

export const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const deleteEmptyPropertiesObj = (obj: any) => {
  Object.keys(obj).forEach((k) => obj[k] === '' && delete obj[k]);
};
