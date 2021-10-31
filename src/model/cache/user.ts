import { SyncModels } from 'kurimudb'
import { localStorageDriverFactory } from 'kurimudb-driver-localstorage'
import { cookieDriverFactory } from 'kurimudb-driver-cookie'
export class UserLocalStorage extends SyncModels.keyValue {
  constructor() {
    super({
      name: 'user',
      driver: localStorageDriverFactory
    })
  }
}
export class UserCookie extends SyncModels.keyValue {
  constructor() {
    super({
      name: 'user',
      driver: cookieDriverFactory
    })
  }
}
