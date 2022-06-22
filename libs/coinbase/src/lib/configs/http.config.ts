import { ConfigService } from '@nestjs/config';

export const httpConfig = async (configService: ConfigService) => ({
  baseURL: 'https://api.commerce.coinbase.com',
  headers: {
    'X-CC-Api-Key': configService.get('COINBASE_API_KEY'),
    'X-CC-Version': '2018-03-22',
  },
});
