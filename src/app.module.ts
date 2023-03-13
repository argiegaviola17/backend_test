import { Module } from '@nestjs/common';

import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';

@Module({
  imports: [MainModule, CoreModule],
})
export class AppModule {}
