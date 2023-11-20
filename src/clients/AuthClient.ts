import axios from 'axios';
import {IUserDTO} from '../data-structures/dto/IUserDTO';

const url = 'http://localhost:3000';

export class AuthClient {
  static async signIn(user: IUserDTO): Promise<IUserDTO> {
    const response = await axios.post(url + '/Auth/SignIn', user);

    return response.data;
  }
}
