import { forwardRef, Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { TokenModule } from '../token/token.module'
import { SecurityService } from './security.service'
import { SecurityController } from './security.controller'
import { UsersModule } from '../users/users.module'
import { AuthModule } from '../auth/auth.module'
import { KeysModule } from '../keys/keys.module'

@Module({
  imports: [UsersModule, TokenModule, JwtModule, forwardRef(() => AuthModule), KeysModule],
  providers: [SecurityService],
  controllers: [SecurityController],
})
export class SecurityModule {}
