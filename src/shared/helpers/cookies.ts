export const getCookie = (name: string) => {
    const cookies = document.cookie.split('; ').find((row) => row.startsWith(name + '='));
    return cookies ? cookies.split('=')[1] : null;
  };
  export const writeCookies = (cookieName: string, cookieData: string) => {
    document.cookie = `${cookieName}=${cookieData}`;
  };