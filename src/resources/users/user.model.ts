import { v4 as uuidv4 } from 'uuid';


class User {
  id: string;
  name: string | undefined;
  login: string | undefined;
  password: string | undefined;
  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User):{
    id: string | undefined;
    name: string | undefined;
    login: string | undefined;
  } {
    const { id, name, login } = user;
    return { id, name, login };
  }

}

export default User;
