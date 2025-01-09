import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalsModule } from './Zoomodule/animals/animals.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [AnimalsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}