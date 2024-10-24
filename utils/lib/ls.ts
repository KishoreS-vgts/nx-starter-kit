// create functions to all the local storage actions and export it as object

export const ls = {
  set: (key: string, value: any) => localStorage.setItem(key, value),
  get: (key: string) => localStorage.getItem(key),
  remove: (key: string) => localStorage.removeItem(key),
  isloggedIn: () => (localStorage.getItem('auth') ? true : false),
}

export default ls
