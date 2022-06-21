
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "2b0c12756921c891fec4f68d9444e18c7d5d4a6a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.InvoiceScalarFieldEnum = makeEnum({
  id: 'id',
  lifetime: 'lifetime',
  amount: 'amount',
  status: 'status',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  coinbaseId: 'coinbaseId'
});

exports.Prisma.TariffScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  price: 'price',
  maxDailyCountRequests: 'maxDailyCountRequests',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TokenScalarFieldEnum = makeEnum({
  id: 'id',
  publicKey: 'publicKey',
  countRequests: 'countRequests',
  countAllRequests: 'countAllRequests',
  userId: 'userId',
  tariffId: 'tariffId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  username: 'username',
  password: 'password',
  balance: 'balance',
  role: 'role',
  tokenId: 'tokenId',
  tariffId: 'tariffId',
  tariffUpdateDate: 'tariffUpdateDate',
  tariffExpirationDays: 'tariffExpirationDays',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.InvoiceStatus = makeEnum({
  PAID: 'PAID',
  UNRESOLVED: 'UNRESOLVED',
  PAYMENT_PENDING: 'PAYMENT_PENDING',
  VOID: 'VOID',
  CREATED: 'CREATED',
  OPEN: 'OPEN',
  VIEWED: 'VIEWED'
});

exports.Role = makeEnum({
  USER: 'USER',
  ADMIN: 'ADMIN'
});

exports.Prisma.ModelName = makeEnum({
  Invoice: 'Invoice',
  Tariff: 'Tariff',
  Token: 'Token',
  User: 'User'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
