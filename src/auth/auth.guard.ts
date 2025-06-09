import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGurad implements CanActivate {
  constructor(private JWTService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.getToken(request.headers);
    console.log(token);
    if (!token) throw new UnauthorizedException();

    try {
      const payLoad = await this.JWTService.verify(token);
      console.log(payLoad,"paylaod")
      console.log(request.userId)
      request.userId = payLoad.userId
    } catch (error) {
      console.log('JWT Error:', error.message);
      throw new UnauthorizedException('Invalid token');
    }

    return true;
  }

  getToken(headers) {
    if (!headers['authorization']) return null;
    const [type, token] = headers['authorization'].split(' ');
    return type === 'Bearer' ? token : null;
  }
}
