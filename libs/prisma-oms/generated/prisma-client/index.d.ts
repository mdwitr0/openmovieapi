
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Invoice
 * 
 */
export type Invoice = {
  id: string
  lifetime: number
  amount: number
  status: InvoiceStatus
  userId: string
  createdAt: Date
  updatedAt: Date
  coinbaseId: string
}

/**
 * Model Tariff
 * 
 */
export type Tariff = {
  id: string
  name: string
  price: number
  maxDailyCountRequests: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Token
 * 
 */
export type Token = {
  id: string
  publicKey: string
  countRequests: number
  countAllRequests: number
  userId: string | null
  tariffId: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  email: string
  username: string
  password: string
  balance: number
  role: Role
  tokenId: string | null
  tariffId: string | null
  tariffUpdateDate: Date
  tariffExpirationDays: Date
  createdAt: Date
  updatedAt: Date
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const InvoiceStatus: {
  PAID: 'PAID',
  UNRESOLVED: 'UNRESOLVED',
  PAYMENT_PENDING: 'PAYMENT_PENDING',
  VOID: 'VOID',
  CREATED: 'CREATED',
  OPEN: 'OPEN',
  VIEWED: 'VIEWED'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Invoices
 * const invoices = await prisma.invoice.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Invoices
   * const invoices = await prisma.invoice.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<GlobalReject>;

  /**
   * `prisma.tariff`: Exposes CRUD operations for the **Tariff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tariffs
    * const tariffs = await prisma.tariff.findMany()
    * ```
    */
  get tariff(): Prisma.TariffDelegate<GlobalReject>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Invoice: 'Invoice',
    Tariff: 'Tariff',
    Token: 'Token',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TariffCountOutputType
   */


  export type TariffCountOutputType = {
    users: number
    tokens: number
  }

  export type TariffCountOutputTypeSelect = {
    users?: boolean
    tokens?: boolean
  }

  export type TariffCountOutputTypeGetPayload<
    S extends boolean | null | undefined | TariffCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? TariffCountOutputType
    : S extends undefined
    ? never
    : S extends TariffCountOutputTypeArgs
    ?'include' extends U
    ? TariffCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof TariffCountOutputType ? TariffCountOutputType[P] : never
  } 
    : TariffCountOutputType
  : TariffCountOutputType




  // Custom InputTypes

  /**
   * TariffCountOutputType without action
   */
  export type TariffCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TariffCountOutputType
     * 
    **/
    select?: TariffCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    invoices: number
  }

  export type UserCountOutputTypeSelect = {
    invoices?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Invoice
   */


  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    lifetime: number | null
    amount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    lifetime: number | null
    amount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    lifetime: number | null
    amount: number | null
    status: InvoiceStatus | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    coinbaseId: string | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    lifetime: number | null
    amount: number | null
    status: InvoiceStatus | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    coinbaseId: string | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    lifetime: number
    amount: number
    status: number
    userId: number
    createdAt: number
    updatedAt: number
    coinbaseId: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    lifetime?: true
    amount?: true
  }

  export type InvoiceSumAggregateInputType = {
    lifetime?: true
    amount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    lifetime?: true
    amount?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    coinbaseId?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    lifetime?: true
    amount?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    coinbaseId?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    lifetime?: true
    amount?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    coinbaseId?: true
    _all?: true
  }

  export type InvoiceAggregateArgs = {
    /**
     * Filter which Invoice to aggregate.
     * 
    **/
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     * 
    **/
    orderBy?: Enumerable<InvoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs = {
    where?: InvoiceWhereInput
    orderBy?: Enumerable<InvoiceOrderByWithAggregationInput>
    by: Array<InvoiceScalarFieldEnum>
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }


  export type InvoiceGroupByOutputType = {
    id: string
    lifetime: number
    amount: number
    status: InvoiceStatus
    userId: string
    createdAt: Date
    updatedAt: Date
    coinbaseId: string
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = PrismaPromise<
    Array<
      PickArray<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect = {
    id?: boolean
    user?: boolean | UserArgs
    lifetime?: boolean
    amount?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    coinbaseId?: boolean
  }

  export type InvoiceInclude = {
    user?: boolean | UserArgs
  }

  export type InvoiceGetPayload<
    S extends boolean | null | undefined | InvoiceArgs,
    U = keyof S
      > = S extends true
        ? Invoice
    : S extends undefined
    ? never
    : S extends InvoiceArgs | InvoiceFindManyArgs
    ?'include' extends U
    ? Invoice  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Invoice ? Invoice[P] : never
  } 
    : Invoice
  : Invoice


  type InvoiceCountArgs = Merge<
    Omit<InvoiceFindManyArgs, 'select' | 'include'> & {
      select?: InvoiceCountAggregateInputType | true
    }
  >

  export interface InvoiceDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InvoiceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, InvoiceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Invoice'> extends True ? CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>> : CheckSelect<T, Prisma__InvoiceClient<Invoice | null >, Prisma__InvoiceClient<InvoiceGetPayload<T> | null >>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InvoiceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, InvoiceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Invoice'> extends True ? CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>> : CheckSelect<T, Prisma__InvoiceClient<Invoice | null >, Prisma__InvoiceClient<InvoiceGetPayload<T> | null >>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InvoiceFindManyArgs>(
      args?: SelectSubset<T, InvoiceFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Invoice>>, PrismaPromise<Array<InvoiceGetPayload<T>>>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
    **/
    create<T extends InvoiceCreateArgs>(
      args: SelectSubset<T, InvoiceCreateArgs>
    ): CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>>

    /**
     * Create many Invoices.
     *     @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     *     @example
     *     // Create many Invoices
     *     const invoice = await prisma.invoice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InvoiceCreateManyArgs>(
      args?: SelectSubset<T, InvoiceCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
    **/
    delete<T extends InvoiceDeleteArgs>(
      args: SelectSubset<T, InvoiceDeleteArgs>
    ): CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InvoiceUpdateArgs>(
      args: SelectSubset<T, InvoiceUpdateArgs>
    ): CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InvoiceDeleteManyArgs>(
      args?: SelectSubset<T, InvoiceDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InvoiceUpdateManyArgs>(
      args: SelectSubset<T, InvoiceUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
    **/
    upsert<T extends InvoiceUpsertArgs>(
      args: SelectSubset<T, InvoiceUpsertArgs>
    ): CheckSelect<T, Prisma__InvoiceClient<Invoice>, Prisma__InvoiceClient<InvoiceGetPayload<T>>>

    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__InvoiceClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * Throw an Error if a Invoice can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Invoice to fetch.
     * 
    **/
    where: InvoiceWhereUniqueInput
  }


  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * Throw an Error if a Invoice can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Invoice to fetch.
     * 
    **/
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     * 
    **/
    orderBy?: Enumerable<InvoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     * 
    **/
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     * 
    **/
    distinct?: Enumerable<InvoiceScalarFieldEnum>
  }


  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * Filter, which Invoices to fetch.
     * 
    **/
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     * 
    **/
    orderBy?: Enumerable<InvoiceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     * 
    **/
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     * 
    **/
    skip?: number
    distinct?: Enumerable<InvoiceScalarFieldEnum>
  }


  /**
   * Invoice create
   */
  export type InvoiceCreateArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * The data needed to create a Invoice.
     * 
    **/
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }


  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs = {
    /**
     * The data used to create many Invoices.
     * 
    **/
    data: Enumerable<InvoiceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * The data needed to update a Invoice.
     * 
    **/
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     * 
    **/
    where: InvoiceWhereUniqueInput
  }


  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs = {
    /**
     * The data used to update Invoices.
     * 
    **/
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     * 
    **/
    where?: InvoiceWhereInput
  }


  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     * 
    **/
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     * 
    **/
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }


  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
    /**
     * Filter which Invoice to delete.
     * 
    **/
    where: InvoiceWhereUniqueInput
  }


  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs = {
    /**
     * Filter which Invoices to delete
     * 
    **/
    where?: InvoiceWhereInput
  }


  /**
   * Invoice without action
   */
  export type InvoiceArgs = {
    /**
     * Select specific fields to fetch from the Invoice
     * 
    **/
    select?: InvoiceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: InvoiceInclude | null
  }



  /**
   * Model Tariff
   */


  export type AggregateTariff = {
    _count: TariffCountAggregateOutputType | null
    _avg: TariffAvgAggregateOutputType | null
    _sum: TariffSumAggregateOutputType | null
    _min: TariffMinAggregateOutputType | null
    _max: TariffMaxAggregateOutputType | null
  }

  export type TariffAvgAggregateOutputType = {
    price: number | null
    maxDailyCountRequests: number | null
  }

  export type TariffSumAggregateOutputType = {
    price: number | null
    maxDailyCountRequests: number | null
  }

  export type TariffMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    maxDailyCountRequests: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TariffMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    maxDailyCountRequests: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TariffCountAggregateOutputType = {
    id: number
    name: number
    price: number
    maxDailyCountRequests: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TariffAvgAggregateInputType = {
    price?: true
    maxDailyCountRequests?: true
  }

  export type TariffSumAggregateInputType = {
    price?: true
    maxDailyCountRequests?: true
  }

  export type TariffMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    maxDailyCountRequests?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TariffMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    maxDailyCountRequests?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TariffCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    maxDailyCountRequests?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TariffAggregateArgs = {
    /**
     * Filter which Tariff to aggregate.
     * 
    **/
    where?: TariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     * 
    **/
    orderBy?: Enumerable<TariffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tariffs
    **/
    _count?: true | TariffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TariffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TariffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TariffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TariffMaxAggregateInputType
  }

  export type GetTariffAggregateType<T extends TariffAggregateArgs> = {
        [P in keyof T & keyof AggregateTariff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTariff[P]>
      : GetScalarType<T[P], AggregateTariff[P]>
  }




  export type TariffGroupByArgs = {
    where?: TariffWhereInput
    orderBy?: Enumerable<TariffOrderByWithAggregationInput>
    by: Array<TariffScalarFieldEnum>
    having?: TariffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TariffCountAggregateInputType | true
    _avg?: TariffAvgAggregateInputType
    _sum?: TariffSumAggregateInputType
    _min?: TariffMinAggregateInputType
    _max?: TariffMaxAggregateInputType
  }


  export type TariffGroupByOutputType = {
    id: string
    name: string
    price: number
    maxDailyCountRequests: number
    createdAt: Date
    updatedAt: Date
    _count: TariffCountAggregateOutputType | null
    _avg: TariffAvgAggregateOutputType | null
    _sum: TariffSumAggregateOutputType | null
    _min: TariffMinAggregateOutputType | null
    _max: TariffMaxAggregateOutputType | null
  }

  type GetTariffGroupByPayload<T extends TariffGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TariffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TariffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TariffGroupByOutputType[P]>
            : GetScalarType<T[P], TariffGroupByOutputType[P]>
        }
      >
    >


  export type TariffSelect = {
    id?: boolean
    name?: boolean
    price?: boolean
    maxDailyCountRequests?: boolean
    users?: boolean | UserFindManyArgs
    tokens?: boolean | TokenFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | TariffCountOutputTypeArgs
  }

  export type TariffInclude = {
    users?: boolean | UserFindManyArgs
    tokens?: boolean | TokenFindManyArgs
    _count?: boolean | TariffCountOutputTypeArgs
  }

  export type TariffGetPayload<
    S extends boolean | null | undefined | TariffArgs,
    U = keyof S
      > = S extends true
        ? Tariff
    : S extends undefined
    ? never
    : S extends TariffArgs | TariffFindManyArgs
    ?'include' extends U
    ? Tariff  & {
    [P in TrueKeys<S['include']>]:
        P extends 'users' ? Array < UserGetPayload<S['include'][P]>>  :
        P extends 'tokens' ? Array < TokenGetPayload<S['include'][P]>>  :
        P extends '_count' ? TariffCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'users' ? Array < UserGetPayload<S['select'][P]>>  :
        P extends 'tokens' ? Array < TokenGetPayload<S['select'][P]>>  :
        P extends '_count' ? TariffCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Tariff ? Tariff[P] : never
  } 
    : Tariff
  : Tariff


  type TariffCountArgs = Merge<
    Omit<TariffFindManyArgs, 'select' | 'include'> & {
      select?: TariffCountAggregateInputType | true
    }
  >

  export interface TariffDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tariff that matches the filter.
     * @param {TariffFindUniqueArgs} args - Arguments to find a Tariff
     * @example
     * // Get one Tariff
     * const tariff = await prisma.tariff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TariffFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TariffFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tariff'> extends True ? CheckSelect<T, Prisma__TariffClient<Tariff>, Prisma__TariffClient<TariffGetPayload<T>>> : CheckSelect<T, Prisma__TariffClient<Tariff | null >, Prisma__TariffClient<TariffGetPayload<T> | null >>

    /**
     * Find the first Tariff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffFindFirstArgs} args - Arguments to find a Tariff
     * @example
     * // Get one Tariff
     * const tariff = await prisma.tariff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TariffFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TariffFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tariff'> extends True ? CheckSelect<T, Prisma__TariffClient<Tariff>, Prisma__TariffClient<TariffGetPayload<T>>> : CheckSelect<T, Prisma__TariffClient<Tariff | null >, Prisma__TariffClient<TariffGetPayload<T> | null >>

    /**
     * Find zero or more Tariffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tariffs
     * const tariffs = await prisma.tariff.findMany()
     * 
     * // Get first 10 Tariffs
     * const tariffs = await prisma.tariff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tariffWithIdOnly = await prisma.tariff.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TariffFindManyArgs>(
      args?: SelectSubset<T, TariffFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Tariff>>, PrismaPromise<Array<TariffGetPayload<T>>>>

    /**
     * Create a Tariff.
     * @param {TariffCreateArgs} args - Arguments to create a Tariff.
     * @example
     * // Create one Tariff
     * const Tariff = await prisma.tariff.create({
     *   data: {
     *     // ... data to create a Tariff
     *   }
     * })
     * 
    **/
    create<T extends TariffCreateArgs>(
      args: SelectSubset<T, TariffCreateArgs>
    ): CheckSelect<T, Prisma__TariffClient<Tariff>, Prisma__TariffClient<TariffGetPayload<T>>>

    /**
     * Create many Tariffs.
     *     @param {TariffCreateManyArgs} args - Arguments to create many Tariffs.
     *     @example
     *     // Create many Tariffs
     *     const tariff = await prisma.tariff.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TariffCreateManyArgs>(
      args?: SelectSubset<T, TariffCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tariff.
     * @param {TariffDeleteArgs} args - Arguments to delete one Tariff.
     * @example
     * // Delete one Tariff
     * const Tariff = await prisma.tariff.delete({
     *   where: {
     *     // ... filter to delete one Tariff
     *   }
     * })
     * 
    **/
    delete<T extends TariffDeleteArgs>(
      args: SelectSubset<T, TariffDeleteArgs>
    ): CheckSelect<T, Prisma__TariffClient<Tariff>, Prisma__TariffClient<TariffGetPayload<T>>>

    /**
     * Update one Tariff.
     * @param {TariffUpdateArgs} args - Arguments to update one Tariff.
     * @example
     * // Update one Tariff
     * const tariff = await prisma.tariff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TariffUpdateArgs>(
      args: SelectSubset<T, TariffUpdateArgs>
    ): CheckSelect<T, Prisma__TariffClient<Tariff>, Prisma__TariffClient<TariffGetPayload<T>>>

    /**
     * Delete zero or more Tariffs.
     * @param {TariffDeleteManyArgs} args - Arguments to filter Tariffs to delete.
     * @example
     * // Delete a few Tariffs
     * const { count } = await prisma.tariff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TariffDeleteManyArgs>(
      args?: SelectSubset<T, TariffDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tariffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tariffs
     * const tariff = await prisma.tariff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TariffUpdateManyArgs>(
      args: SelectSubset<T, TariffUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tariff.
     * @param {TariffUpsertArgs} args - Arguments to update or create a Tariff.
     * @example
     * // Update or create a Tariff
     * const tariff = await prisma.tariff.upsert({
     *   create: {
     *     // ... data to create a Tariff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tariff we want to update
     *   }
     * })
    **/
    upsert<T extends TariffUpsertArgs>(
      args: SelectSubset<T, TariffUpsertArgs>
    ): CheckSelect<T, Prisma__TariffClient<Tariff>, Prisma__TariffClient<TariffGetPayload<T>>>

    /**
     * Count the number of Tariffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffCountArgs} args - Arguments to filter Tariffs to count.
     * @example
     * // Count the number of Tariffs
     * const count = await prisma.tariff.count({
     *   where: {
     *     // ... the filter for the Tariffs we want to count
     *   }
     * })
    **/
    count<T extends TariffCountArgs>(
      args?: Subset<T, TariffCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TariffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tariff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TariffAggregateArgs>(args: Subset<T, TariffAggregateArgs>): PrismaPromise<GetTariffAggregateType<T>>

    /**
     * Group by Tariff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TariffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TariffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TariffGroupByArgs['orderBy'] }
        : { orderBy?: TariffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TariffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTariffGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tariff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TariffClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    tokens<T extends TokenFindManyArgs = {}>(args?: Subset<T, TokenFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Token>>, PrismaPromise<Array<TokenGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Tariff findUnique
   */
  export type TariffFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Tariff
     * 
    **/
    select?: TariffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TariffInclude | null
    /**
     * Throw an Error if a Tariff can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tariff to fetch.
     * 
    **/
    where: TariffWhereUniqueInput
  }


  /**
   * Tariff findFirst
   */
  export type TariffFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Tariff
     * 
    **/
    select?: TariffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TariffInclude | null
    /**
     * Throw an Error if a Tariff can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tariff to fetch.
     * 
    **/
    where?: TariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     * 
    **/
    orderBy?: Enumerable<TariffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tariffs.
     * 
    **/
    cursor?: TariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tariffs.
     * 
    **/
    distinct?: Enumerable<TariffScalarFieldEnum>
  }


  /**
   * Tariff findMany
   */
  export type TariffFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tariff
     * 
    **/
    select?: TariffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TariffInclude | null
    /**
     * Filter, which Tariffs to fetch.
     * 
    **/
    where?: TariffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tariffs to fetch.
     * 
    **/
    orderBy?: Enumerable<TariffOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tariffs.
     * 
    **/
    cursor?: TariffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tariffs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tariffs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TariffScalarFieldEnum>
  }


  /**
   * Tariff create
   */
  export type TariffCreateArgs = {
    /**
     * Select specific fields to fetch from the Tariff
     * 
    **/
    select?: TariffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TariffInclude | null
    /**
     * The data needed to create a Tariff.
     * 
    **/
    data: XOR<TariffCreateInput, TariffUncheckedCreateInput>
  }


  /**
   * Tariff createMany
   */
  export type TariffCreateManyArgs = {
    /**
     * The data used to create many Tariffs.
     * 
    **/
    data: Enumerable<TariffCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tariff update
   */
  export type TariffUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tariff
     * 
    **/
    select?: TariffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TariffInclude | null
    /**
     * The data needed to update a Tariff.
     * 
    **/
    data: XOR<TariffUpdateInput, TariffUncheckedUpdateInput>
    /**
     * Choose, which Tariff to update.
     * 
    **/
    where: TariffWhereUniqueInput
  }


  /**
   * Tariff updateMany
   */
  export type TariffUpdateManyArgs = {
    /**
     * The data used to update Tariffs.
     * 
    **/
    data: XOR<TariffUpdateManyMutationInput, TariffUncheckedUpdateManyInput>
    /**
     * Filter which Tariffs to update
     * 
    **/
    where?: TariffWhereInput
  }


  /**
   * Tariff upsert
   */
  export type TariffUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tariff
     * 
    **/
    select?: TariffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TariffInclude | null
    /**
     * The filter to search for the Tariff to update in case it exists.
     * 
    **/
    where: TariffWhereUniqueInput
    /**
     * In case the Tariff found by the `where` argument doesn't exist, create a new Tariff with this data.
     * 
    **/
    create: XOR<TariffCreateInput, TariffUncheckedCreateInput>
    /**
     * In case the Tariff was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TariffUpdateInput, TariffUncheckedUpdateInput>
  }


  /**
   * Tariff delete
   */
  export type TariffDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tariff
     * 
    **/
    select?: TariffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TariffInclude | null
    /**
     * Filter which Tariff to delete.
     * 
    **/
    where: TariffWhereUniqueInput
  }


  /**
   * Tariff deleteMany
   */
  export type TariffDeleteManyArgs = {
    /**
     * Filter which Tariffs to delete
     * 
    **/
    where?: TariffWhereInput
  }


  /**
   * Tariff without action
   */
  export type TariffArgs = {
    /**
     * Select specific fields to fetch from the Tariff
     * 
    **/
    select?: TariffSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TariffInclude | null
  }



  /**
   * Model Token
   */


  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenAvgAggregateOutputType = {
    countRequests: number | null
    countAllRequests: number | null
  }

  export type TokenSumAggregateOutputType = {
    countRequests: number | null
    countAllRequests: number | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    publicKey: string | null
    countRequests: number | null
    countAllRequests: number | null
    userId: string | null
    tariffId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    publicKey: string | null
    countRequests: number | null
    countAllRequests: number | null
    userId: string | null
    tariffId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    publicKey: number
    countRequests: number
    countAllRequests: number
    userId: number
    tariffId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TokenAvgAggregateInputType = {
    countRequests?: true
    countAllRequests?: true
  }

  export type TokenSumAggregateInputType = {
    countRequests?: true
    countAllRequests?: true
  }

  export type TokenMinAggregateInputType = {
    id?: true
    publicKey?: true
    countRequests?: true
    countAllRequests?: true
    userId?: true
    tariffId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    publicKey?: true
    countRequests?: true
    countAllRequests?: true
    userId?: true
    tariffId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    publicKey?: true
    countRequests?: true
    countAllRequests?: true
    userId?: true
    tariffId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TokenAggregateArgs = {
    /**
     * Filter which Token to aggregate.
     * 
    **/
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs = {
    where?: TokenWhereInput
    orderBy?: Enumerable<TokenOrderByWithAggregationInput>
    by: Array<TokenScalarFieldEnum>
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _avg?: TokenAvgAggregateInputType
    _sum?: TokenSumAggregateInputType
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }


  export type TokenGroupByOutputType = {
    id: string
    publicKey: string
    countRequests: number
    countAllRequests: number
    userId: string | null
    tariffId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TokenCountAggregateOutputType | null
    _avg: TokenAvgAggregateOutputType | null
    _sum: TokenSumAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect = {
    id?: boolean
    publicKey?: boolean
    countRequests?: boolean
    countAllRequests?: boolean
    userId?: boolean
    user?: boolean | UserArgs
    tariff?: boolean | TariffArgs
    tariffId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TokenInclude = {
    user?: boolean | UserArgs
    tariff?: boolean | TariffArgs
  }

  export type TokenGetPayload<
    S extends boolean | null | undefined | TokenArgs,
    U = keyof S
      > = S extends true
        ? Token
    : S extends undefined
    ? never
    : S extends TokenArgs | TokenFindManyArgs
    ?'include' extends U
    ? Token  & {
    [P in TrueKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> | null :
        P extends 'tariff' ? TariffGetPayload<S['include'][P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> | null :
        P extends 'tariff' ? TariffGetPayload<S['select'][P]> | null :  P extends keyof Token ? Token[P] : never
  } 
    : Token
  : Token


  type TokenCountArgs = Merge<
    Omit<TokenFindManyArgs, 'select' | 'include'> & {
      select?: TokenCountAggregateInputType | true
    }
  >

  export interface TokenDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Token'> extends True ? CheckSelect<T, Prisma__TokenClient<Token>, Prisma__TokenClient<TokenGetPayload<T>>> : CheckSelect<T, Prisma__TokenClient<Token | null >, Prisma__TokenClient<TokenGetPayload<T> | null >>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Token'> extends True ? CheckSelect<T, Prisma__TokenClient<Token>, Prisma__TokenClient<TokenGetPayload<T>>> : CheckSelect<T, Prisma__TokenClient<Token | null >, Prisma__TokenClient<TokenGetPayload<T> | null >>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TokenFindManyArgs>(
      args?: SelectSubset<T, TokenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Token>>, PrismaPromise<Array<TokenGetPayload<T>>>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
    **/
    create<T extends TokenCreateArgs>(
      args: SelectSubset<T, TokenCreateArgs>
    ): CheckSelect<T, Prisma__TokenClient<Token>, Prisma__TokenClient<TokenGetPayload<T>>>

    /**
     * Create many Tokens.
     *     @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     *     @example
     *     // Create many Tokens
     *     const token = await prisma.token.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TokenCreateManyArgs>(
      args?: SelectSubset<T, TokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
    **/
    delete<T extends TokenDeleteArgs>(
      args: SelectSubset<T, TokenDeleteArgs>
    ): CheckSelect<T, Prisma__TokenClient<Token>, Prisma__TokenClient<TokenGetPayload<T>>>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TokenUpdateArgs>(
      args: SelectSubset<T, TokenUpdateArgs>
    ): CheckSelect<T, Prisma__TokenClient<Token>, Prisma__TokenClient<TokenGetPayload<T>>>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TokenDeleteManyArgs>(
      args?: SelectSubset<T, TokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TokenUpdateManyArgs>(
      args: SelectSubset<T, TokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
    **/
    upsert<T extends TokenUpsertArgs>(
      args: SelectSubset<T, TokenUpsertArgs>
    ): CheckSelect<T, Prisma__TokenClient<Token>, Prisma__TokenClient<TokenGetPayload<T>>>

    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TokenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    tariff<T extends TariffArgs = {}>(args?: Subset<T, TariffArgs>): CheckSelect<T, Prisma__TariffClient<Tariff | null >, Prisma__TariffClient<TariffGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Throw an Error if a Token can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Token to fetch.
     * 
    **/
    where: TokenWhereUniqueInput
  }


  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Throw an Error if a Token can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Token to fetch.
     * 
    **/
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     * 
    **/
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     * 
    **/
    distinct?: Enumerable<TokenScalarFieldEnum>
  }


  /**
   * Token findMany
   */
  export type TokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Filter, which Tokens to fetch.
     * 
    **/
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     * 
    **/
    orderBy?: Enumerable<TokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     * 
    **/
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TokenScalarFieldEnum>
  }


  /**
   * Token create
   */
  export type TokenCreateArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * The data needed to create a Token.
     * 
    **/
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }


  /**
   * Token createMany
   */
  export type TokenCreateManyArgs = {
    /**
     * The data used to create many Tokens.
     * 
    **/
    data: Enumerable<TokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Token update
   */
  export type TokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * The data needed to update a Token.
     * 
    **/
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     * 
    **/
    where: TokenWhereUniqueInput
  }


  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs = {
    /**
     * The data used to update Tokens.
     * 
    **/
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     * 
    **/
    where?: TokenWhereInput
  }


  /**
   * Token upsert
   */
  export type TokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * The filter to search for the Token to update in case it exists.
     * 
    **/
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     * 
    **/
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }


  /**
   * Token delete
   */
  export type TokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
    /**
     * Filter which Token to delete.
     * 
    **/
    where: TokenWhereUniqueInput
  }


  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs = {
    /**
     * Filter which Tokens to delete
     * 
    **/
    where?: TokenWhereInput
  }


  /**
   * Token without action
   */
  export type TokenArgs = {
    /**
     * Select specific fields to fetch from the Token
     * 
    **/
    select?: TokenSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TokenInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    balance: number | null
  }

  export type UserSumAggregateOutputType = {
    balance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    balance: number | null
    role: Role | null
    tokenId: string | null
    tariffId: string | null
    tariffUpdateDate: Date | null
    tariffExpirationDays: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    balance: number | null
    role: Role | null
    tokenId: string | null
    tariffId: string | null
    tariffUpdateDate: Date | null
    tariffExpirationDays: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    balance: number
    role: number
    tokenId: number
    tariffId: number
    tariffUpdateDate: number
    tariffExpirationDays: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    balance?: true
  }

  export type UserSumAggregateInputType = {
    balance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    balance?: true
    role?: true
    tokenId?: true
    tariffId?: true
    tariffUpdateDate?: true
    tariffExpirationDays?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    balance?: true
    role?: true
    tokenId?: true
    tariffId?: true
    tariffUpdateDate?: true
    tariffExpirationDays?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    balance?: true
    role?: true
    tokenId?: true
    tariffId?: true
    tariffUpdateDate?: true
    tariffExpirationDays?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    balance: number
    role: Role
    tokenId: string | null
    tariffId: string | null
    tariffUpdateDate: Date
    tariffExpirationDays: Date
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    balance?: boolean
    role?: boolean
    tokenId?: boolean
    token?: boolean | TokenArgs
    tariff?: boolean | TariffArgs
    tariffId?: boolean
    tariffUpdateDate?: boolean
    tariffExpirationDays?: boolean
    invoices?: boolean | InvoiceFindManyArgs
    createdAt?: boolean
    updatedAt?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    token?: boolean | TokenArgs
    tariff?: boolean | TariffArgs
    invoices?: boolean | InvoiceFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'token' ? TokenGetPayload<S['include'][P]> | null :
        P extends 'tariff' ? TariffGetPayload<S['include'][P]> | null :
        P extends 'invoices' ? Array < InvoiceGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'token' ? TokenGetPayload<S['select'][P]> | null :
        P extends 'tariff' ? TariffGetPayload<S['select'][P]> | null :
        P extends 'invoices' ? Array < InvoiceGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    token<T extends TokenArgs = {}>(args?: Subset<T, TokenArgs>): CheckSelect<T, Prisma__TokenClient<Token | null >, Prisma__TokenClient<TokenGetPayload<T> | null >>;

    tariff<T extends TariffArgs = {}>(args?: Subset<T, TariffArgs>): CheckSelect<T, Prisma__TariffClient<Tariff | null >, Prisma__TariffClient<TariffGetPayload<T> | null >>;

    invoices<T extends InvoiceFindManyArgs = {}>(args?: Subset<T, InvoiceFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Invoice>>, PrismaPromise<Array<InvoiceGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const InvoiceScalarFieldEnum: {
    id: 'id',
    lifetime: 'lifetime',
    amount: 'amount',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    coinbaseId: 'coinbaseId'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const TariffScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    maxDailyCountRequests: 'maxDailyCountRequests',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TariffScalarFieldEnum = (typeof TariffScalarFieldEnum)[keyof typeof TariffScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    publicKey: 'publicKey',
    countRequests: 'countRequests',
    countAllRequests: 'countAllRequests',
    userId: 'userId',
    tariffId: 'tariffId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
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
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type InvoiceWhereInput = {
    AND?: Enumerable<InvoiceWhereInput>
    OR?: Enumerable<InvoiceWhereInput>
    NOT?: Enumerable<InvoiceWhereInput>
    id?: StringFilter | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    lifetime?: IntFilter | number
    amount?: IntFilter | number
    status?: EnumInvoiceStatusFilter | InvoiceStatus
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    coinbaseId?: StringFilter | string
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    user?: UserOrderByWithRelationInput
    lifetime?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coinbaseId?: SortOrder
  }

  export type InvoiceWhereUniqueInput = {
    id?: string
  }

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    lifetime?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coinbaseId?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<InvoiceScalarWhereWithAggregatesInput>
    OR?: Enumerable<InvoiceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<InvoiceScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    lifetime?: IntWithAggregatesFilter | number
    amount?: IntWithAggregatesFilter | number
    status?: EnumInvoiceStatusWithAggregatesFilter | InvoiceStatus
    userId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    coinbaseId?: StringWithAggregatesFilter | string
  }

  export type TariffWhereInput = {
    AND?: Enumerable<TariffWhereInput>
    OR?: Enumerable<TariffWhereInput>
    NOT?: Enumerable<TariffWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    price?: IntFilter | number
    maxDailyCountRequests?: IntFilter | number
    users?: UserListRelationFilter
    tokens?: TokenListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TariffOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    maxDailyCountRequests?: SortOrder
    users?: UserOrderByRelationAggregateInput
    tokens?: TokenOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffWhereUniqueInput = {
    id?: string
  }

  export type TariffOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    maxDailyCountRequests?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TariffCountOrderByAggregateInput
    _avg?: TariffAvgOrderByAggregateInput
    _max?: TariffMaxOrderByAggregateInput
    _min?: TariffMinOrderByAggregateInput
    _sum?: TariffSumOrderByAggregateInput
  }

  export type TariffScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TariffScalarWhereWithAggregatesInput>
    OR?: Enumerable<TariffScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TariffScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    price?: IntWithAggregatesFilter | number
    maxDailyCountRequests?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TokenWhereInput = {
    AND?: Enumerable<TokenWhereInput>
    OR?: Enumerable<TokenWhereInput>
    NOT?: Enumerable<TokenWhereInput>
    id?: StringFilter | string
    publicKey?: StringFilter | string
    countRequests?: IntFilter | number
    countAllRequests?: IntFilter | number
    userId?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput> | null
    tariff?: XOR<TariffRelationFilter, TariffWhereInput> | null
    tariffId?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    countRequests?: SortOrder
    countAllRequests?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    tariff?: TariffOrderByWithRelationInput
    tariffId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenWhereUniqueInput = {
    id?: string
    userId?: string
  }

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    countRequests?: SortOrder
    countAllRequests?: SortOrder
    userId?: SortOrder
    tariffId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _avg?: TokenAvgOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
    _sum?: TokenSumOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<TokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TokenScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    publicKey?: StringWithAggregatesFilter | string
    countRequests?: IntWithAggregatesFilter | number
    countAllRequests?: IntWithAggregatesFilter | number
    userId?: StringNullableWithAggregatesFilter | string | null
    tariffId?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    balance?: IntFilter | number
    role?: EnumRoleFilter | Role
    tokenId?: StringNullableFilter | string | null
    token?: XOR<TokenRelationFilter, TokenWhereInput> | null
    tariff?: XOR<TariffRelationFilter, TariffWhereInput> | null
    tariffId?: StringNullableFilter | string | null
    tariffUpdateDate?: DateTimeFilter | Date | string
    tariffExpirationDays?: DateTimeFilter | Date | string
    invoices?: InvoiceListRelationFilter
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    role?: SortOrder
    tokenId?: SortOrder
    token?: TokenOrderByWithRelationInput
    tariff?: TariffOrderByWithRelationInput
    tariffId?: SortOrder
    tariffUpdateDate?: SortOrder
    tariffExpirationDays?: SortOrder
    invoices?: InvoiceOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
    username?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    role?: SortOrder
    tokenId?: SortOrder
    tariffId?: SortOrder
    tariffUpdateDate?: SortOrder
    tariffExpirationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    balance?: IntWithAggregatesFilter | number
    role?: EnumRoleWithAggregatesFilter | Role
    tokenId?: StringNullableWithAggregatesFilter | string | null
    tariffId?: StringNullableWithAggregatesFilter | string | null
    tariffUpdateDate?: DateTimeWithAggregatesFilter | Date | string
    tariffExpirationDays?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutInvoicesInput
    lifetime?: number
    amount?: number
    status?: InvoiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    coinbaseId?: string
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    lifetime?: number
    amount?: number
    status?: InvoiceStatus
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    coinbaseId?: string
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInvoicesInput
    lifetime?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinbaseId?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lifetime?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | InvoiceStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinbaseId?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceCreateManyInput = {
    id?: string
    lifetime?: number
    amount?: number
    status?: InvoiceStatus
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    coinbaseId?: string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lifetime?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinbaseId?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lifetime?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | InvoiceStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinbaseId?: StringFieldUpdateOperationsInput | string
  }

  export type TariffCreateInput = {
    id?: string
    name: string
    price?: number
    maxDailyCountRequests?: number
    users?: UserCreateNestedManyWithoutTariffInput
    tokens?: TokenCreateNestedManyWithoutTariffInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffUncheckedCreateInput = {
    id?: string
    name: string
    price?: number
    maxDailyCountRequests?: number
    users?: UserUncheckedCreateNestedManyWithoutTariffInput
    tokens?: TokenUncheckedCreateNestedManyWithoutTariffInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxDailyCountRequests?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateManyWithoutTariffInput
    tokens?: TokenUpdateManyWithoutTariffInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxDailyCountRequests?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutTariffInput
    tokens?: TokenUncheckedUpdateManyWithoutTariffInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffCreateManyInput = {
    id?: string
    name: string
    price?: number
    maxDailyCountRequests?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxDailyCountRequests?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxDailyCountRequests?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    publicKey?: string
    countRequests?: number
    countAllRequests?: number
    user?: UserCreateNestedOneWithoutTokenInput
    tariff?: TariffCreateNestedOneWithoutTokensInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    publicKey?: string
    countRequests?: number
    countAllRequests?: number
    userId?: string | null
    tariffId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    countRequests?: IntFieldUpdateOperationsInput | number
    countAllRequests?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutTokenInput
    tariff?: TariffUpdateOneWithoutTokensInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    countRequests?: IntFieldUpdateOperationsInput | number
    countAllRequests?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    tariffId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: string
    publicKey?: string
    countRequests?: number
    countAllRequests?: number
    userId?: string | null
    tariffId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    countRequests?: IntFieldUpdateOperationsInput | number
    countAllRequests?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    countRequests?: IntFieldUpdateOperationsInput | number
    countAllRequests?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    tariffId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    balance?: number
    role?: Role
    tokenId?: string | null
    token?: TokenCreateNestedOneWithoutUserInput
    tariff?: TariffCreateNestedOneWithoutUsersInput
    tariffUpdateDate?: Date | string
    tariffExpirationDays?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    balance?: number
    role?: Role
    tokenId?: string | null
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
    tariffId?: string | null
    tariffUpdateDate?: Date | string
    tariffExpirationDays?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: TokenUpdateOneWithoutUserInput
    tariff?: TariffUpdateOneWithoutUsersInput
    tariffUpdateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffExpirationDays?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutUserInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: TokenUncheckedUpdateOneWithoutUserInput
    tariffId?: NullableStringFieldUpdateOperationsInput | string | null
    tariffUpdateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffExpirationDays?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutUserInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    balance?: number
    role?: Role
    tokenId?: string | null
    tariffId?: string | null
    tariffUpdateDate?: Date | string
    tariffExpirationDays?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    tariffUpdateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffExpirationDays?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    tariffId?: NullableStringFieldUpdateOperationsInput | string | null
    tariffUpdateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffExpirationDays?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type EnumInvoiceStatusFilter = {
    equals?: InvoiceStatus
    in?: Enumerable<InvoiceStatus>
    notIn?: Enumerable<InvoiceStatus>
    not?: NestedEnumInvoiceStatusFilter | InvoiceStatus
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    lifetime?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coinbaseId?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    lifetime?: SortOrder
    amount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    lifetime?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coinbaseId?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    lifetime?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    coinbaseId?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    lifetime?: SortOrder
    amount?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type EnumInvoiceStatusWithAggregatesFilter = {
    equals?: InvoiceStatus
    in?: Enumerable<InvoiceStatus>
    notIn?: Enumerable<InvoiceStatus>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter | InvoiceStatus
    _count?: NestedIntFilter
    _min?: NestedEnumInvoiceStatusFilter
    _max?: NestedEnumInvoiceStatusFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TariffCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    maxDailyCountRequests?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffAvgOrderByAggregateInput = {
    price?: SortOrder
    maxDailyCountRequests?: SortOrder
  }

  export type TariffMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    maxDailyCountRequests?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    maxDailyCountRequests?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TariffSumOrderByAggregateInput = {
    price?: SortOrder
    maxDailyCountRequests?: SortOrder
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type TariffRelationFilter = {
    is?: TariffWhereInput | null
    isNot?: TariffWhereInput | null
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    countRequests?: SortOrder
    countAllRequests?: SortOrder
    userId?: SortOrder
    tariffId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenAvgOrderByAggregateInput = {
    countRequests?: SortOrder
    countAllRequests?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    countRequests?: SortOrder
    countAllRequests?: SortOrder
    userId?: SortOrder
    tariffId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    countRequests?: SortOrder
    countAllRequests?: SortOrder
    userId?: SortOrder
    tariffId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TokenSumOrderByAggregateInput = {
    countRequests?: SortOrder
    countAllRequests?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type TokenRelationFilter = {
    is?: TokenWhereInput | null
    isNot?: TokenWhereInput | null
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    role?: SortOrder
    tokenId?: SortOrder
    tariffId?: SortOrder
    tariffUpdateDate?: SortOrder
    tariffExpirationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    role?: SortOrder
    tokenId?: SortOrder
    tariffId?: SortOrder
    tariffUpdateDate?: SortOrder
    tariffExpirationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    role?: SortOrder
    tokenId?: SortOrder
    tariffId?: SortOrder
    tariffUpdateDate?: SortOrder
    tariffExpirationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type UserCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateOneRequiredWithoutInvoicesInput = {
    create?: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvoicesInput
    upsert?: UserUpsertWithoutInvoicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: InvoiceStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCreateNestedManyWithoutTariffInput = {
    create?: XOR<Enumerable<UserCreateWithoutTariffInput>, Enumerable<UserUncheckedCreateWithoutTariffInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutTariffInput>
    createMany?: UserCreateManyTariffInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type TokenCreateNestedManyWithoutTariffInput = {
    create?: XOR<Enumerable<TokenCreateWithoutTariffInput>, Enumerable<TokenUncheckedCreateWithoutTariffInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutTariffInput>
    createMany?: TokenCreateManyTariffInputEnvelope
    connect?: Enumerable<TokenWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutTariffInput = {
    create?: XOR<Enumerable<UserCreateWithoutTariffInput>, Enumerable<UserUncheckedCreateWithoutTariffInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutTariffInput>
    createMany?: UserCreateManyTariffInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type TokenUncheckedCreateNestedManyWithoutTariffInput = {
    create?: XOR<Enumerable<TokenCreateWithoutTariffInput>, Enumerable<TokenUncheckedCreateWithoutTariffInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutTariffInput>
    createMany?: TokenCreateManyTariffInputEnvelope
    connect?: Enumerable<TokenWhereUniqueInput>
  }

  export type UserUpdateManyWithoutTariffInput = {
    create?: XOR<Enumerable<UserCreateWithoutTariffInput>, Enumerable<UserUncheckedCreateWithoutTariffInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutTariffInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutTariffInput>
    createMany?: UserCreateManyTariffInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutTariffInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutTariffInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type TokenUpdateManyWithoutTariffInput = {
    create?: XOR<Enumerable<TokenCreateWithoutTariffInput>, Enumerable<TokenUncheckedCreateWithoutTariffInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutTariffInput>
    upsert?: Enumerable<TokenUpsertWithWhereUniqueWithoutTariffInput>
    createMany?: TokenCreateManyTariffInputEnvelope
    set?: Enumerable<TokenWhereUniqueInput>
    disconnect?: Enumerable<TokenWhereUniqueInput>
    delete?: Enumerable<TokenWhereUniqueInput>
    connect?: Enumerable<TokenWhereUniqueInput>
    update?: Enumerable<TokenUpdateWithWhereUniqueWithoutTariffInput>
    updateMany?: Enumerable<TokenUpdateManyWithWhereWithoutTariffInput>
    deleteMany?: Enumerable<TokenScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutTariffInput = {
    create?: XOR<Enumerable<UserCreateWithoutTariffInput>, Enumerable<UserUncheckedCreateWithoutTariffInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutTariffInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutTariffInput>
    createMany?: UserCreateManyTariffInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutTariffInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutTariffInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type TokenUncheckedUpdateManyWithoutTariffInput = {
    create?: XOR<Enumerable<TokenCreateWithoutTariffInput>, Enumerable<TokenUncheckedCreateWithoutTariffInput>>
    connectOrCreate?: Enumerable<TokenCreateOrConnectWithoutTariffInput>
    upsert?: Enumerable<TokenUpsertWithWhereUniqueWithoutTariffInput>
    createMany?: TokenCreateManyTariffInputEnvelope
    set?: Enumerable<TokenWhereUniqueInput>
    disconnect?: Enumerable<TokenWhereUniqueInput>
    delete?: Enumerable<TokenWhereUniqueInput>
    connect?: Enumerable<TokenWhereUniqueInput>
    update?: Enumerable<TokenUpdateWithWhereUniqueWithoutTariffInput>
    updateMany?: Enumerable<TokenUpdateManyWithWhereWithoutTariffInput>
    deleteMany?: Enumerable<TokenScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutTokenInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    connect?: UserWhereUniqueInput
  }

  export type TariffCreateNestedOneWithoutTokensInput = {
    create?: XOR<TariffCreateWithoutTokensInput, TariffUncheckedCreateWithoutTokensInput>
    connectOrCreate?: TariffCreateOrConnectWithoutTokensInput
    connect?: TariffWhereUniqueInput
  }

  export type UserUpdateOneWithoutTokenInput = {
    create?: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput
    upsert?: UserUpsertWithoutTokenInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
  }

  export type TariffUpdateOneWithoutTokensInput = {
    create?: XOR<TariffCreateWithoutTokensInput, TariffUncheckedCreateWithoutTokensInput>
    connectOrCreate?: TariffCreateOrConnectWithoutTokensInput
    upsert?: TariffUpsertWithoutTokensInput
    disconnect?: boolean
    delete?: boolean
    connect?: TariffWhereUniqueInput
    update?: XOR<TariffUpdateWithoutTokensInput, TariffUncheckedUpdateWithoutTokensInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TokenCreateNestedOneWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput
    connect?: TokenWhereUniqueInput
  }

  export type TariffCreateNestedOneWithoutUsersInput = {
    create?: XOR<TariffCreateWithoutUsersInput, TariffUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TariffCreateOrConnectWithoutUsersInput
    connect?: TariffWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<InvoiceCreateWithoutUserInput>, Enumerable<InvoiceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<InvoiceCreateOrConnectWithoutUserInput>
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: Enumerable<InvoiceWhereUniqueInput>
  }

  export type TokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput
    connect?: TokenWhereUniqueInput
  }

  export type InvoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<InvoiceCreateWithoutUserInput>, Enumerable<InvoiceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<InvoiceCreateOrConnectWithoutUserInput>
    createMany?: InvoiceCreateManyUserInputEnvelope
    connect?: Enumerable<InvoiceWhereUniqueInput>
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type TokenUpdateOneWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput
    upsert?: TokenUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: TokenWhereUniqueInput
    update?: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TariffUpdateOneWithoutUsersInput = {
    create?: XOR<TariffCreateWithoutUsersInput, TariffUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TariffCreateOrConnectWithoutUsersInput
    upsert?: TariffUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: TariffWhereUniqueInput
    update?: XOR<TariffUpdateWithoutUsersInput, TariffUncheckedUpdateWithoutUsersInput>
  }

  export type InvoiceUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<InvoiceCreateWithoutUserInput>, Enumerable<InvoiceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<InvoiceCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<InvoiceUpsertWithWhereUniqueWithoutUserInput>
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: Enumerable<InvoiceWhereUniqueInput>
    disconnect?: Enumerable<InvoiceWhereUniqueInput>
    delete?: Enumerable<InvoiceWhereUniqueInput>
    connect?: Enumerable<InvoiceWhereUniqueInput>
    update?: Enumerable<InvoiceUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<InvoiceUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<InvoiceScalarWhereInput>
  }

  export type TokenUncheckedUpdateOneWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput
    upsert?: TokenUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: TokenWhereUniqueInput
    update?: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type InvoiceUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<InvoiceCreateWithoutUserInput>, Enumerable<InvoiceUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<InvoiceCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<InvoiceUpsertWithWhereUniqueWithoutUserInput>
    createMany?: InvoiceCreateManyUserInputEnvelope
    set?: Enumerable<InvoiceWhereUniqueInput>
    disconnect?: Enumerable<InvoiceWhereUniqueInput>
    delete?: Enumerable<InvoiceWhereUniqueInput>
    connect?: Enumerable<InvoiceWhereUniqueInput>
    update?: Enumerable<InvoiceUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<InvoiceUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<InvoiceScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedEnumInvoiceStatusFilter = {
    equals?: InvoiceStatus
    in?: Enumerable<InvoiceStatus>
    notIn?: Enumerable<InvoiceStatus>
    not?: NestedEnumInvoiceStatusFilter | InvoiceStatus
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumInvoiceStatusWithAggregatesFilter = {
    equals?: InvoiceStatus
    in?: Enumerable<InvoiceStatus>
    notIn?: Enumerable<InvoiceStatus>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter | InvoiceStatus
    _count?: NestedIntFilter
    _min?: NestedEnumInvoiceStatusFilter
    _max?: NestedEnumInvoiceStatusFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type UserCreateWithoutInvoicesInput = {
    id?: string
    email: string
    username: string
    password: string
    balance?: number
    role?: Role
    tokenId?: string | null
    token?: TokenCreateNestedOneWithoutUserInput
    tariff?: TariffCreateNestedOneWithoutUsersInput
    tariffUpdateDate?: Date | string
    tariffExpirationDays?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutInvoicesInput = {
    id?: string
    email: string
    username: string
    password: string
    balance?: number
    role?: Role
    tokenId?: string | null
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
    tariffId?: string | null
    tariffUpdateDate?: Date | string
    tariffExpirationDays?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutInvoicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type UserUpsertWithoutInvoicesInput = {
    update: XOR<UserUpdateWithoutInvoicesInput, UserUncheckedUpdateWithoutInvoicesInput>
    create: XOR<UserCreateWithoutInvoicesInput, UserUncheckedCreateWithoutInvoicesInput>
  }

  export type UserUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: TokenUpdateOneWithoutUserInput
    tariff?: TariffUpdateOneWithoutUsersInput
    tariffUpdateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffExpirationDays?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: TokenUncheckedUpdateOneWithoutUserInput
    tariffId?: NullableStringFieldUpdateOperationsInput | string | null
    tariffUpdateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffExpirationDays?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTariffInput = {
    id?: string
    email: string
    username: string
    password: string
    balance?: number
    role?: Role
    tokenId?: string | null
    token?: TokenCreateNestedOneWithoutUserInput
    tariffUpdateDate?: Date | string
    tariffExpirationDays?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTariffInput = {
    id?: string
    email: string
    username: string
    password: string
    balance?: number
    role?: Role
    tokenId?: string | null
    token?: TokenUncheckedCreateNestedOneWithoutUserInput
    tariffUpdateDate?: Date | string
    tariffExpirationDays?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTariffInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTariffInput, UserUncheckedCreateWithoutTariffInput>
  }

  export type UserCreateManyTariffInputEnvelope = {
    data: Enumerable<UserCreateManyTariffInput>
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutTariffInput = {
    id?: string
    publicKey?: string
    countRequests?: number
    countAllRequests?: number
    user?: UserCreateNestedOneWithoutTokenInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutTariffInput = {
    id?: string
    publicKey?: string
    countRequests?: number
    countAllRequests?: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutTariffInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutTariffInput, TokenUncheckedCreateWithoutTariffInput>
  }

  export type TokenCreateManyTariffInputEnvelope = {
    data: Enumerable<TokenCreateManyTariffInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTariffInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTariffInput, UserUncheckedUpdateWithoutTariffInput>
    create: XOR<UserCreateWithoutTariffInput, UserUncheckedCreateWithoutTariffInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTariffInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTariffInput, UserUncheckedUpdateWithoutTariffInput>
  }

  export type UserUpdateManyWithWhereWithoutTariffInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    username?: StringFilter | string
    password?: StringFilter | string
    balance?: IntFilter | number
    role?: EnumRoleFilter | Role
    tokenId?: StringNullableFilter | string | null
    tariffId?: StringNullableFilter | string | null
    tariffUpdateDate?: DateTimeFilter | Date | string
    tariffExpirationDays?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type TokenUpsertWithWhereUniqueWithoutTariffInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutTariffInput, TokenUncheckedUpdateWithoutTariffInput>
    create: XOR<TokenCreateWithoutTariffInput, TokenUncheckedCreateWithoutTariffInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutTariffInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutTariffInput, TokenUncheckedUpdateWithoutTariffInput>
  }

  export type TokenUpdateManyWithWhereWithoutTariffInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutTokensInput>
  }

  export type TokenScalarWhereInput = {
    AND?: Enumerable<TokenScalarWhereInput>
    OR?: Enumerable<TokenScalarWhereInput>
    NOT?: Enumerable<TokenScalarWhereInput>
    id?: StringFilter | string
    publicKey?: StringFilter | string
    countRequests?: IntFilter | number
    countAllRequests?: IntFilter | number
    userId?: StringNullableFilter | string | null
    tariffId?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserCreateWithoutTokenInput = {
    id?: string
    email: string
    username: string
    password: string
    balance?: number
    role?: Role
    tokenId?: string | null
    tariff?: TariffCreateNestedOneWithoutUsersInput
    tariffUpdateDate?: Date | string
    tariffExpirationDays?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTokenInput = {
    id?: string
    email: string
    username: string
    password: string
    balance?: number
    role?: Role
    tokenId?: string | null
    tariffId?: string | null
    tariffUpdateDate?: Date | string
    tariffExpirationDays?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutUserInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type TariffCreateWithoutTokensInput = {
    id?: string
    name: string
    price?: number
    maxDailyCountRequests?: number
    users?: UserCreateNestedManyWithoutTariffInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffUncheckedCreateWithoutTokensInput = {
    id?: string
    name: string
    price?: number
    maxDailyCountRequests?: number
    users?: UserUncheckedCreateNestedManyWithoutTariffInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffCreateOrConnectWithoutTokensInput = {
    where: TariffWhereUniqueInput
    create: XOR<TariffCreateWithoutTokensInput, TariffUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokenInput = {
    update: XOR<UserUpdateWithoutTokenInput, UserUncheckedUpdateWithoutTokenInput>
    create: XOR<UserCreateWithoutTokenInput, UserUncheckedCreateWithoutTokenInput>
  }

  export type UserUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    tariff?: TariffUpdateOneWithoutUsersInput
    tariffUpdateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffExpirationDays?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutUserInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    tariffId?: NullableStringFieldUpdateOperationsInput | string | null
    tariffUpdateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffExpirationDays?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutUserInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffUpsertWithoutTokensInput = {
    update: XOR<TariffUpdateWithoutTokensInput, TariffUncheckedUpdateWithoutTokensInput>
    create: XOR<TariffCreateWithoutTokensInput, TariffUncheckedCreateWithoutTokensInput>
  }

  export type TariffUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxDailyCountRequests?: IntFieldUpdateOperationsInput | number
    users?: UserUpdateManyWithoutTariffInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxDailyCountRequests?: IntFieldUpdateOperationsInput | number
    users?: UserUncheckedUpdateManyWithoutTariffInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateWithoutUserInput = {
    id?: string
    publicKey?: string
    countRequests?: number
    countAllRequests?: number
    tariff?: TariffCreateNestedOneWithoutTokensInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: string
    publicKey?: string
    countRequests?: number
    countAllRequests?: number
    tariffId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TariffCreateWithoutUsersInput = {
    id?: string
    name: string
    price?: number
    maxDailyCountRequests?: number
    tokens?: TokenCreateNestedManyWithoutTariffInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    price?: number
    maxDailyCountRequests?: number
    tokens?: TokenUncheckedCreateNestedManyWithoutTariffInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TariffCreateOrConnectWithoutUsersInput = {
    where: TariffWhereUniqueInput
    create: XOR<TariffCreateWithoutUsersInput, TariffUncheckedCreateWithoutUsersInput>
  }

  export type InvoiceCreateWithoutUserInput = {
    id?: string
    lifetime?: number
    amount?: number
    status?: InvoiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    coinbaseId?: string
  }

  export type InvoiceUncheckedCreateWithoutUserInput = {
    id?: string
    lifetime?: number
    amount?: number
    status?: InvoiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    coinbaseId?: string
  }

  export type InvoiceCreateOrConnectWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceCreateManyUserInputEnvelope = {
    data: Enumerable<InvoiceCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type TokenUpsertWithoutUserInput = {
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    countRequests?: IntFieldUpdateOperationsInput | number
    countAllRequests?: IntFieldUpdateOperationsInput | number
    tariff?: TariffUpdateOneWithoutTokensInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    countRequests?: IntFieldUpdateOperationsInput | number
    countAllRequests?: IntFieldUpdateOperationsInput | number
    tariffId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffUpsertWithoutUsersInput = {
    update: XOR<TariffUpdateWithoutUsersInput, TariffUncheckedUpdateWithoutUsersInput>
    create: XOR<TariffCreateWithoutUsersInput, TariffUncheckedCreateWithoutUsersInput>
  }

  export type TariffUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxDailyCountRequests?: IntFieldUpdateOperationsInput | number
    tokens?: TokenUpdateManyWithoutTariffInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TariffUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    maxDailyCountRequests?: IntFieldUpdateOperationsInput | number
    tokens?: TokenUncheckedUpdateManyWithoutTariffInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
    create: XOR<InvoiceCreateWithoutUserInput, InvoiceUncheckedCreateWithoutUserInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutUserInput, InvoiceUncheckedUpdateWithoutUserInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutUserInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutInvoicesInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: Enumerable<InvoiceScalarWhereInput>
    OR?: Enumerable<InvoiceScalarWhereInput>
    NOT?: Enumerable<InvoiceScalarWhereInput>
    id?: StringFilter | string
    lifetime?: IntFilter | number
    amount?: IntFilter | number
    status?: EnumInvoiceStatusFilter | InvoiceStatus
    userId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    coinbaseId?: StringFilter | string
  }

  export type UserCreateManyTariffInput = {
    id?: string
    email: string
    username: string
    password: string
    balance?: number
    role?: Role
    tokenId?: string | null
    tariffUpdateDate?: Date | string
    tariffExpirationDays?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TokenCreateManyTariffInput = {
    id?: string
    publicKey?: string
    countRequests?: number
    countAllRequests?: number
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutTariffInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: TokenUpdateOneWithoutUserInput
    tariffUpdateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffExpirationDays?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutUserInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTariffInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: TokenUncheckedUpdateOneWithoutUserInput
    tariffUpdateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffExpirationDays?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutUserInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    tokenId?: NullableStringFieldUpdateOperationsInput | string | null
    tariffUpdateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    tariffExpirationDays?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUpdateWithoutTariffInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    countRequests?: IntFieldUpdateOperationsInput | number
    countAllRequests?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutTokenInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateWithoutTariffInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    countRequests?: IntFieldUpdateOperationsInput | number
    countAllRequests?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    countRequests?: IntFieldUpdateOperationsInput | number
    countAllRequests?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyUserInput = {
    id?: string
    lifetime?: number
    amount?: number
    status?: InvoiceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    coinbaseId?: string
  }

  export type InvoiceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lifetime?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinbaseId?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lifetime?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinbaseId?: StringFieldUpdateOperationsInput | string
  }

  export type InvoiceUncheckedUpdateManyWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    lifetime?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | InvoiceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coinbaseId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}