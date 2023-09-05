import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return 'i have signed in';
  }

  signup() {
    return { name: 'manick' };
  }
}
