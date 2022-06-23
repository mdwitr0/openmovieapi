import {BullModuleOptions} from '@nestjs/bull';
import {ConfigService} from '@nestjs/config';

export const bullConfig = async (
  configService: ConfigService
): Promise<BullModuleOptions> => ({
  redis: {
    host: configService.get('OMS_REDIS_HOST'),
    port: configService.get('OMS_REDIS_PORT'),
    password: configService.get('OMS_REDIS_PASSWORD'),
  },
  limiter: {
    max: 5,
    duration: 1000,
  },
  defaultJobOptions: {
    removeOnComplete: true,
    attempts: 10,
  },
  settings: {
    stalledInterval: 5000,
    maxStalledCount: 5,
  },
});
