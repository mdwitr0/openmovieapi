export class CreateCoinbaseInvoiceDto {
  business_name: string;
  customer_email: string;
  customer_name: string;
  local_price: {
    amount: string;
    currency: string;
  };
  memo: string;
}
