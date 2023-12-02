"use strict";

class UserStorage {
  static #users = {
    id: ["abcd", "한동찬", "pillow12360"],
    psword: ["1234", "1234", "1256"],
    name: ["하나둘", "가나다", "abc"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
