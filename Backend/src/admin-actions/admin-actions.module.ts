import { Module } from '@nestjs/common';
import { AdminActionsService } from './admin-actions.service';
import { AdminActionsController } from './admin-actions.controller';

@Module({
  controllers: [AdminActionsController],
  providers: [AdminActionsService]
})
export class AdminActionsModule {}
