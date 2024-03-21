export class StorageService {
  static clear = () => {
    localStorage.clear();
    sessionStorage.clear();
  };
}
