import { HttpService } from '@nestjs/axios';
import { HttpServer, Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';
import { CreateCoinbaseInvoiceDto } from './dto/create-coinbase-invoice.dto';
import { ICoinbaseInvoiceResponse } from './interfaces/coinbase-invoice.interface';

@Injectable()
export class CoinbaseInvoiceService {
  constructor(private readonly httpService: HttpService) {
    this.httpService.axiosRef.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        return Promise.reject(error);
      },
    );
  }

  async create(
    createInvoiceDto: CreateCoinbaseInvoiceDto,
  ): Promise<ICoinbaseInvoiceResponse> {
    return firstValueFrom(
      this.httpService
        .post('/invoices', createInvoiceDto)
        .pipe(map((response) => response.data.data)),
    );
  }

  async findOne(code: string): Promise<ICoinbaseInvoiceResponse> {
    return firstValueFrom(
      this.httpService
        .get(`/invoices/${code}`)
        .pipe(map((response) => response.data.data)),
    );
  }
}
