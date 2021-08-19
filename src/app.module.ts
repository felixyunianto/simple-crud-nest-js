import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Employee } from './Employee/employee.entity';
import { EmployeeModule } from './Employee/employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'postgres',
      host : 'chunee.db.elephantsql.com',
      port : 5432,
      username: 'swdpvovl',
      password : 'kLan_iAc80PUTb05Lom6fvjCf0knvXNm',
      database : 'swdpvovl',
      entities: [Employee]
    }),
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
