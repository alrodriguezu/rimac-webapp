export class StorageService {
  static set = (name: string, value: any, persist: boolean = false): Promise<void> =>
    Promise.resolve().then(() => {
      if (persist) localStorage.setItem(name, JSON.stringify(value));
      else sessionStorage.setItem(name, JSON.stringify(value));
    });

  static get = (name: string): Promise<any> =>
    Promise.resolve().then(() => {
      const local = localStorage.getItem(name);

      if (local) return JSON.parse(local);
      return JSON.parse(sessionStorage.getItem(name));
    });

  static clear = () => {
    localStorage.clear();
    sessionStorage.clear();
  };
}
