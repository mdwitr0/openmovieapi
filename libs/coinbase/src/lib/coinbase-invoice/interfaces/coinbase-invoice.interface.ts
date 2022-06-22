import { CreateCoinbaseInvoiceDto } from '../dto/create-coinbase-invoice.dto';

export const COINBASE_INVOICE_SERVICE = 'COINBASE_INVOICE_SERVICE';

export interface ICoinbaseInvoice {
  create(
    createInvoiceDto: CreateCoinbaseInvoiceDto,
  ): Promise<ICoinbaseInvoiceResponse>;

  findOne(code: string): Promise<ICoinbaseInvoiceResponse>;
}

export interface ICoinbaseInvoiceResponse {
  id: string;
  business_name: string;
  resource: string;
  code: string;
  status: string;
  customer_name: string;
  customer_email: string;
  local_price: { amount: string; currency: string };
  memo: string;
  hosted_url: string;
  created_at: string;
  updated_at: string;
}

export interface ICoinbaseInvoiceRequest {
  business_name: string;
  customer_email: string;
  customer_name: string;
  local_price: {
    amount: string;
    currency: string;
  };
  memo: string;
}
