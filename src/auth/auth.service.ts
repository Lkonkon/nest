import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthService {
    private readonly validToken = '123456';

    validateToken(token: string):void{
        if (token !== this.validToken){
            throw new UnauthorizedException('Token inválido');
        }
    }
}
