import { Injectable } from '@angular/core';
import { User } from '../entities/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /* mock user service */
  public getUser(): User {
    return {
      name: 'Serenity Jones',
      userName: '@serenity',
      avatar: 'assets/image/avatar.jpg',
    };
  }
}
