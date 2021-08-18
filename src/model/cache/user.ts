import { Models } from 'kurimudb';
import { LocalStorageDriver } from 'kurimudb-driver-localstorage';
import { CookieDriver } from 'kurimudb-driver-cookie';

export class UserLocalStorage extends Models.keyValue {
  constructor() {
    super({
      name: 'user',
      driver: LocalStorageDriver
    });
  }
}

export class UserCookie extends Models.keyValue {
  constructor() {
    super({
      name: 'user',
      driver: CookieDriver
    });
  }
}
