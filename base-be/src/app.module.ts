import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
// eslint-disable-next-line
import { DatabaseModule } from './database/database.module';
import { CatsModule } from './cats/cats.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [TodoModule, UsersModule, AuthModule, DatabaseModule, CatsModule, HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
