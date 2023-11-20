import axios from 'axios';
import {IUserDTO} from '../data-structures/dto/IUserDTO';

const url = 'http://localhost:3000';

export class UserClient {
  static async getAll(): Promise<IUserDTO[]> {
    const response = await axios.get(url + '/Users');

    return response.data;
  }

  static async signUp(user: IUserDTO): Promise<IUserDTO> {
    const response = await axios.post(url + '/Users/signup', user);

    return response.data;
  }
}
