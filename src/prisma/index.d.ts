
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Update
 * 
 */
export type Update = $Result.DefaultSelection<Prisma.$UpdatePayload>
/**
 * Model UpdateContent
 * 
 */
export type UpdateContent = $Result.DefaultSelection<Prisma.$UpdateContentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UPDATE_STATUS: {
  IN_PROGRESS: 'IN_PROGRESS',
  SHIPPED: 'SHIPPED',
  DEPRECATED: 'DEPRECATED'
};

export type UPDATE_STATUS = (typeof UPDATE_STATUS)[keyof typeof UPDATE_STATUS]

}

export type UPDATE_STATUS = $Enums.UPDATE_STATUS

export const UPDATE_STATUS: typeof $Enums.UPDATE_STATUS

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.update`: Exposes CRUD operations for the **Update** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Updates
    * const updates = await prisma.update.findMany()
    * ```
    */
  get update(): Prisma.UpdateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.updateContent`: Exposes CRUD operations for the **UpdateContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UpdateContents
    * const updateContents = await prisma.updateContent.findMany()
    * ```
    */
  get updateContent(): Prisma.UpdateContentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Product: 'Product',
    Update: 'Update',
    UpdateContent: 'UpdateContent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "product" | "update" | "updateContent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Update: {
        payload: Prisma.$UpdatePayload<ExtArgs>
        fields: Prisma.UpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>
          }
          findFirst: {
            args: Prisma.UpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>
          }
          findMany: {
            args: Prisma.UpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>[]
          }
          create: {
            args: Prisma.UpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>
          }
          createMany: {
            args: Prisma.UpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UpdateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>[]
          }
          delete: {
            args: Prisma.UpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>
          }
          update: {
            args: Prisma.UpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>
          }
          deleteMany: {
            args: Prisma.UpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UpdateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>[]
          }
          upsert: {
            args: Prisma.UpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdatePayload>
          }
          aggregate: {
            args: Prisma.UpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpdate>
          }
          groupBy: {
            args: Prisma.UpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpdateCountArgs<ExtArgs>
            result: $Utils.Optional<UpdateCountAggregateOutputType> | number
          }
        }
      }
      UpdateContent: {
        payload: Prisma.$UpdateContentPayload<ExtArgs>
        fields: Prisma.UpdateContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UpdateContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdateContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UpdateContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdateContentPayload>
          }
          findFirst: {
            args: Prisma.UpdateContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdateContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UpdateContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdateContentPayload>
          }
          findMany: {
            args: Prisma.UpdateContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdateContentPayload>[]
          }
          create: {
            args: Prisma.UpdateContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdateContentPayload>
          }
          createMany: {
            args: Prisma.UpdateContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UpdateContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdateContentPayload>[]
          }
          delete: {
            args: Prisma.UpdateContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdateContentPayload>
          }
          update: {
            args: Prisma.UpdateContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdateContentPayload>
          }
          deleteMany: {
            args: Prisma.UpdateContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UpdateContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UpdateContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdateContentPayload>[]
          }
          upsert: {
            args: Prisma.UpdateContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UpdateContentPayload>
          }
          aggregate: {
            args: Prisma.UpdateContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUpdateContent>
          }
          groupBy: {
            args: Prisma.UpdateContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<UpdateContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.UpdateContentCountArgs<ExtArgs>
            result: $Utils.Optional<UpdateContentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    product?: ProductOmit
    update?: UpdateOmit
    updateContent?: UpdateContentOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    products: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | UserCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    updates: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updates?: boolean | ProductCountOutputTypeCountUpdatesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountUpdatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpdateWhereInput
  }


  /**
   * Count Type UpdateCountOutputType
   */

  export type UpdateCountOutputType = {
    updateContent: number
  }

  export type UpdateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updateContent?: boolean | UpdateCountOutputTypeCountUpdateContentArgs
  }

  // Custom InputTypes
  /**
   * UpdateCountOutputType without action
   */
  export type UpdateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateCountOutputType
     */
    select?: UpdateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UpdateCountOutputType without action
   */
  export type UpdateCountOutputTypeCountUpdateContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpdateContentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    username: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    username: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
    products?: boolean | User$productsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "username" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | User$productsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      username: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends User$productsArgs<ExtArgs> = {}>(args?: Subset<T, User$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.products
   */
  export type User$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    belongsToId: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    belongsToId: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    belongsToId: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    belongsToId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    belongsToId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    belongsToId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    createdAt: Date
    name: string
    belongsToId: string
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    belongsToId?: boolean
    belongsTo?: boolean | UserDefaultArgs<ExtArgs>
    updates?: boolean | Product$updatesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    belongsToId?: boolean
    belongsTo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    belongsToId?: boolean
    belongsTo?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    belongsToId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "belongsToId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    belongsTo?: boolean | UserDefaultArgs<ExtArgs>
    updates?: boolean | Product$updatesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    belongsTo?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    belongsTo?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      belongsTo: Prisma.$UserPayload<ExtArgs>
      updates: Prisma.$UpdatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      name: string
      belongsToId: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    belongsTo<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updates<T extends Product$updatesArgs<ExtArgs> = {}>(args?: Subset<T, Product$updatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly name: FieldRef<"Product", 'String'>
    readonly belongsToId: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.updates
   */
  export type Product$updatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    where?: UpdateWhereInput
    orderBy?: UpdateOrderByWithRelationInput | UpdateOrderByWithRelationInput[]
    cursor?: UpdateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpdateScalarFieldEnum | UpdateScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Update
   */

  export type AggregateUpdate = {
    _count: UpdateCountAggregateOutputType | null
    _min: UpdateMinAggregateOutputType | null
    _max: UpdateMaxAggregateOutputType | null
  }

  export type UpdateMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    body: string | null
    status: $Enums.UPDATE_STATUS | null
    version: string | null
    asset: string | null
    productId: string | null
  }

  export type UpdateMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    body: string | null
    status: $Enums.UPDATE_STATUS | null
    version: string | null
    asset: string | null
    productId: string | null
  }

  export type UpdateCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    body: number
    status: number
    version: number
    asset: number
    productId: number
    _all: number
  }


  export type UpdateMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    body?: true
    status?: true
    version?: true
    asset?: true
    productId?: true
  }

  export type UpdateMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    body?: true
    status?: true
    version?: true
    asset?: true
    productId?: true
  }

  export type UpdateCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    body?: true
    status?: true
    version?: true
    asset?: true
    productId?: true
    _all?: true
  }

  export type UpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Update to aggregate.
     */
    where?: UpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Updates to fetch.
     */
    orderBy?: UpdateOrderByWithRelationInput | UpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Updates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Updates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Updates
    **/
    _count?: true | UpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpdateMaxAggregateInputType
  }

  export type GetUpdateAggregateType<T extends UpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpdate[P]>
      : GetScalarType<T[P], AggregateUpdate[P]>
  }




  export type UpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpdateWhereInput
    orderBy?: UpdateOrderByWithAggregationInput | UpdateOrderByWithAggregationInput[]
    by: UpdateScalarFieldEnum[] | UpdateScalarFieldEnum
    having?: UpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpdateCountAggregateInputType | true
    _min?: UpdateMinAggregateInputType
    _max?: UpdateMaxAggregateInputType
  }

  export type UpdateGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    body: string
    status: $Enums.UPDATE_STATUS
    version: string | null
    asset: string | null
    productId: string
    _count: UpdateCountAggregateOutputType | null
    _min: UpdateMinAggregateOutputType | null
    _max: UpdateMaxAggregateOutputType | null
  }

  type GetUpdateGroupByPayload<T extends UpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpdateGroupByOutputType[P]>
            : GetScalarType<T[P], UpdateGroupByOutputType[P]>
        }
      >
    >


  export type UpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    body?: boolean
    status?: boolean
    version?: boolean
    asset?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    updateContent?: boolean | Update$updateContentArgs<ExtArgs>
    _count?: boolean | UpdateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["update"]>

  export type UpdateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    body?: boolean
    status?: boolean
    version?: boolean
    asset?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["update"]>

  export type UpdateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    body?: boolean
    status?: boolean
    version?: boolean
    asset?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["update"]>

  export type UpdateSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    body?: boolean
    status?: boolean
    version?: boolean
    asset?: boolean
    productId?: boolean
  }

  export type UpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "body" | "status" | "version" | "asset" | "productId", ExtArgs["result"]["update"]>
  export type UpdateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    updateContent?: boolean | Update$updateContentArgs<ExtArgs>
    _count?: boolean | UpdateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UpdateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type UpdateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $UpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Update"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      updateContent: Prisma.$UpdateContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      body: string
      status: $Enums.UPDATE_STATUS
      version: string | null
      asset: string | null
      productId: string
    }, ExtArgs["result"]["update"]>
    composites: {}
  }

  type UpdateGetPayload<S extends boolean | null | undefined | UpdateDefaultArgs> = $Result.GetResult<Prisma.$UpdatePayload, S>

  type UpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UpdateCountAggregateInputType | true
    }

  export interface UpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Update'], meta: { name: 'Update' } }
    /**
     * Find zero or one Update that matches the filter.
     * @param {UpdateFindUniqueArgs} args - Arguments to find a Update
     * @example
     * // Get one Update
     * const update = await prisma.update.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpdateFindUniqueArgs>(args: SelectSubset<T, UpdateFindUniqueArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Update that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UpdateFindUniqueOrThrowArgs} args - Arguments to find a Update
     * @example
     * // Get one Update
     * const update = await prisma.update.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, UpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Update that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateFindFirstArgs} args - Arguments to find a Update
     * @example
     * // Get one Update
     * const update = await prisma.update.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpdateFindFirstArgs>(args?: SelectSubset<T, UpdateFindFirstArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Update that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateFindFirstOrThrowArgs} args - Arguments to find a Update
     * @example
     * // Get one Update
     * const update = await prisma.update.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, UpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Updates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Updates
     * const updates = await prisma.update.findMany()
     * 
     * // Get first 10 Updates
     * const updates = await prisma.update.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const updateWithIdOnly = await prisma.update.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpdateFindManyArgs>(args?: SelectSubset<T, UpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Update.
     * @param {UpdateCreateArgs} args - Arguments to create a Update.
     * @example
     * // Create one Update
     * const Update = await prisma.update.create({
     *   data: {
     *     // ... data to create a Update
     *   }
     * })
     * 
     */
    create<T extends UpdateCreateArgs>(args: SelectSubset<T, UpdateCreateArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Updates.
     * @param {UpdateCreateManyArgs} args - Arguments to create many Updates.
     * @example
     * // Create many Updates
     * const update = await prisma.update.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpdateCreateManyArgs>(args?: SelectSubset<T, UpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Updates and returns the data saved in the database.
     * @param {UpdateCreateManyAndReturnArgs} args - Arguments to create many Updates.
     * @example
     * // Create many Updates
     * const update = await prisma.update.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Updates and only return the `id`
     * const updateWithIdOnly = await prisma.update.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UpdateCreateManyAndReturnArgs>(args?: SelectSubset<T, UpdateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Update.
     * @param {UpdateDeleteArgs} args - Arguments to delete one Update.
     * @example
     * // Delete one Update
     * const Update = await prisma.update.delete({
     *   where: {
     *     // ... filter to delete one Update
     *   }
     * })
     * 
     */
    delete<T extends UpdateDeleteArgs>(args: SelectSubset<T, UpdateDeleteArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Update.
     * @param {UpdateUpdateArgs} args - Arguments to update one Update.
     * @example
     * // Update one Update
     * const update = await prisma.update.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpdateUpdateArgs>(args: SelectSubset<T, UpdateUpdateArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Updates.
     * @param {UpdateDeleteManyArgs} args - Arguments to filter Updates to delete.
     * @example
     * // Delete a few Updates
     * const { count } = await prisma.update.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpdateDeleteManyArgs>(args?: SelectSubset<T, UpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Updates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Updates
     * const update = await prisma.update.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpdateUpdateManyArgs>(args: SelectSubset<T, UpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Updates and returns the data updated in the database.
     * @param {UpdateUpdateManyAndReturnArgs} args - Arguments to update many Updates.
     * @example
     * // Update many Updates
     * const update = await prisma.update.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Updates and only return the `id`
     * const updateWithIdOnly = await prisma.update.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UpdateUpdateManyAndReturnArgs>(args: SelectSubset<T, UpdateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Update.
     * @param {UpdateUpsertArgs} args - Arguments to update or create a Update.
     * @example
     * // Update or create a Update
     * const update = await prisma.update.upsert({
     *   create: {
     *     // ... data to create a Update
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Update we want to update
     *   }
     * })
     */
    upsert<T extends UpdateUpsertArgs>(args: SelectSubset<T, UpdateUpsertArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Updates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateCountArgs} args - Arguments to filter Updates to count.
     * @example
     * // Count the number of Updates
     * const count = await prisma.update.count({
     *   where: {
     *     // ... the filter for the Updates we want to count
     *   }
     * })
    **/
    count<T extends UpdateCountArgs>(
      args?: Subset<T, UpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Update.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UpdateAggregateArgs>(args: Subset<T, UpdateAggregateArgs>): Prisma.PrismaPromise<GetUpdateAggregateType<T>>

    /**
     * Group by Update.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateGroupByArgs} args - Group by arguments.
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
      T extends UpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpdateGroupByArgs['orderBy'] }
        : { orderBy?: UpdateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Update model
   */
  readonly fields: UpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Update.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    updateContent<T extends Update$updateContentArgs<ExtArgs> = {}>(args?: Subset<T, Update$updateContentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdateContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Update model
   */
  interface UpdateFieldRefs {
    readonly id: FieldRef<"Update", 'String'>
    readonly createdAt: FieldRef<"Update", 'DateTime'>
    readonly updatedAt: FieldRef<"Update", 'DateTime'>
    readonly title: FieldRef<"Update", 'String'>
    readonly body: FieldRef<"Update", 'String'>
    readonly status: FieldRef<"Update", 'UPDATE_STATUS'>
    readonly version: FieldRef<"Update", 'String'>
    readonly asset: FieldRef<"Update", 'String'>
    readonly productId: FieldRef<"Update", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Update findUnique
   */
  export type UpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * Filter, which Update to fetch.
     */
    where: UpdateWhereUniqueInput
  }

  /**
   * Update findUniqueOrThrow
   */
  export type UpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * Filter, which Update to fetch.
     */
    where: UpdateWhereUniqueInput
  }

  /**
   * Update findFirst
   */
  export type UpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * Filter, which Update to fetch.
     */
    where?: UpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Updates to fetch.
     */
    orderBy?: UpdateOrderByWithRelationInput | UpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Updates.
     */
    cursor?: UpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Updates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Updates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Updates.
     */
    distinct?: UpdateScalarFieldEnum | UpdateScalarFieldEnum[]
  }

  /**
   * Update findFirstOrThrow
   */
  export type UpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * Filter, which Update to fetch.
     */
    where?: UpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Updates to fetch.
     */
    orderBy?: UpdateOrderByWithRelationInput | UpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Updates.
     */
    cursor?: UpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Updates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Updates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Updates.
     */
    distinct?: UpdateScalarFieldEnum | UpdateScalarFieldEnum[]
  }

  /**
   * Update findMany
   */
  export type UpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * Filter, which Updates to fetch.
     */
    where?: UpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Updates to fetch.
     */
    orderBy?: UpdateOrderByWithRelationInput | UpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Updates.
     */
    cursor?: UpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Updates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Updates.
     */
    skip?: number
    distinct?: UpdateScalarFieldEnum | UpdateScalarFieldEnum[]
  }

  /**
   * Update create
   */
  export type UpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * The data needed to create a Update.
     */
    data: XOR<UpdateCreateInput, UpdateUncheckedCreateInput>
  }

  /**
   * Update createMany
   */
  export type UpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Updates.
     */
    data: UpdateCreateManyInput | UpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Update createManyAndReturn
   */
  export type UpdateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * The data used to create many Updates.
     */
    data: UpdateCreateManyInput | UpdateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Update update
   */
  export type UpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * The data needed to update a Update.
     */
    data: XOR<UpdateUpdateInput, UpdateUncheckedUpdateInput>
    /**
     * Choose, which Update to update.
     */
    where: UpdateWhereUniqueInput
  }

  /**
   * Update updateMany
   */
  export type UpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Updates.
     */
    data: XOR<UpdateUpdateManyMutationInput, UpdateUncheckedUpdateManyInput>
    /**
     * Filter which Updates to update
     */
    where?: UpdateWhereInput
    /**
     * Limit how many Updates to update.
     */
    limit?: number
  }

  /**
   * Update updateManyAndReturn
   */
  export type UpdateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * The data used to update Updates.
     */
    data: XOR<UpdateUpdateManyMutationInput, UpdateUncheckedUpdateManyInput>
    /**
     * Filter which Updates to update
     */
    where?: UpdateWhereInput
    /**
     * Limit how many Updates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Update upsert
   */
  export type UpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * The filter to search for the Update to update in case it exists.
     */
    where: UpdateWhereUniqueInput
    /**
     * In case the Update found by the `where` argument doesn't exist, create a new Update with this data.
     */
    create: XOR<UpdateCreateInput, UpdateUncheckedCreateInput>
    /**
     * In case the Update was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpdateUpdateInput, UpdateUncheckedUpdateInput>
  }

  /**
   * Update delete
   */
  export type UpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
    /**
     * Filter which Update to delete.
     */
    where: UpdateWhereUniqueInput
  }

  /**
   * Update deleteMany
   */
  export type UpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Updates to delete
     */
    where?: UpdateWhereInput
    /**
     * Limit how many Updates to delete.
     */
    limit?: number
  }

  /**
   * Update.updateContent
   */
  export type Update$updateContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateContent
     */
    select?: UpdateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdateContent
     */
    omit?: UpdateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateContentInclude<ExtArgs> | null
    where?: UpdateContentWhereInput
    orderBy?: UpdateContentOrderByWithRelationInput | UpdateContentOrderByWithRelationInput[]
    cursor?: UpdateContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UpdateContentScalarFieldEnum | UpdateContentScalarFieldEnum[]
  }

  /**
   * Update without action
   */
  export type UpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Update
     */
    select?: UpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Update
     */
    omit?: UpdateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateInclude<ExtArgs> | null
  }


  /**
   * Model UpdateContent
   */

  export type AggregateUpdateContent = {
    _count: UpdateContentCountAggregateOutputType | null
    _min: UpdateContentMinAggregateOutputType | null
    _max: UpdateContentMaxAggregateOutputType | null
  }

  export type UpdateContentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    updateId: string | null
  }

  export type UpdateContentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    updateId: string | null
  }

  export type UpdateContentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    description: number
    updateId: number
    _all: number
  }


  export type UpdateContentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    updateId?: true
  }

  export type UpdateContentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    updateId?: true
  }

  export type UpdateContentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    updateId?: true
    _all?: true
  }

  export type UpdateContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpdateContent to aggregate.
     */
    where?: UpdateContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpdateContents to fetch.
     */
    orderBy?: UpdateContentOrderByWithRelationInput | UpdateContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UpdateContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpdateContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpdateContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UpdateContents
    **/
    _count?: true | UpdateContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UpdateContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UpdateContentMaxAggregateInputType
  }

  export type GetUpdateContentAggregateType<T extends UpdateContentAggregateArgs> = {
        [P in keyof T & keyof AggregateUpdateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUpdateContent[P]>
      : GetScalarType<T[P], AggregateUpdateContent[P]>
  }




  export type UpdateContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UpdateContentWhereInput
    orderBy?: UpdateContentOrderByWithAggregationInput | UpdateContentOrderByWithAggregationInput[]
    by: UpdateContentScalarFieldEnum[] | UpdateContentScalarFieldEnum
    having?: UpdateContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UpdateContentCountAggregateInputType | true
    _min?: UpdateContentMinAggregateInputType
    _max?: UpdateContentMaxAggregateInputType
  }

  export type UpdateContentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    description: string
    updateId: string
    _count: UpdateContentCountAggregateOutputType | null
    _min: UpdateContentMinAggregateOutputType | null
    _max: UpdateContentMaxAggregateOutputType | null
  }

  type GetUpdateContentGroupByPayload<T extends UpdateContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UpdateContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UpdateContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UpdateContentGroupByOutputType[P]>
            : GetScalarType<T[P], UpdateContentGroupByOutputType[P]>
        }
      >
    >


  export type UpdateContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    updateId?: boolean
    update?: boolean | UpdateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["updateContent"]>

  export type UpdateContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    updateId?: boolean
    update?: boolean | UpdateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["updateContent"]>

  export type UpdateContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    updateId?: boolean
    update?: boolean | UpdateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["updateContent"]>

  export type UpdateContentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    updateId?: boolean
  }

  export type UpdateContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "description" | "updateId", ExtArgs["result"]["updateContent"]>
  export type UpdateContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    update?: boolean | UpdateDefaultArgs<ExtArgs>
  }
  export type UpdateContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    update?: boolean | UpdateDefaultArgs<ExtArgs>
  }
  export type UpdateContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    update?: boolean | UpdateDefaultArgs<ExtArgs>
  }

  export type $UpdateContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UpdateContent"
    objects: {
      update: Prisma.$UpdatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      description: string
      updateId: string
    }, ExtArgs["result"]["updateContent"]>
    composites: {}
  }

  type UpdateContentGetPayload<S extends boolean | null | undefined | UpdateContentDefaultArgs> = $Result.GetResult<Prisma.$UpdateContentPayload, S>

  type UpdateContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UpdateContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UpdateContentCountAggregateInputType | true
    }

  export interface UpdateContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UpdateContent'], meta: { name: 'UpdateContent' } }
    /**
     * Find zero or one UpdateContent that matches the filter.
     * @param {UpdateContentFindUniqueArgs} args - Arguments to find a UpdateContent
     * @example
     * // Get one UpdateContent
     * const updateContent = await prisma.updateContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UpdateContentFindUniqueArgs>(args: SelectSubset<T, UpdateContentFindUniqueArgs<ExtArgs>>): Prisma__UpdateContentClient<$Result.GetResult<Prisma.$UpdateContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UpdateContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UpdateContentFindUniqueOrThrowArgs} args - Arguments to find a UpdateContent
     * @example
     * // Get one UpdateContent
     * const updateContent = await prisma.updateContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UpdateContentFindUniqueOrThrowArgs>(args: SelectSubset<T, UpdateContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UpdateContentClient<$Result.GetResult<Prisma.$UpdateContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpdateContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateContentFindFirstArgs} args - Arguments to find a UpdateContent
     * @example
     * // Get one UpdateContent
     * const updateContent = await prisma.updateContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UpdateContentFindFirstArgs>(args?: SelectSubset<T, UpdateContentFindFirstArgs<ExtArgs>>): Prisma__UpdateContentClient<$Result.GetResult<Prisma.$UpdateContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UpdateContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateContentFindFirstOrThrowArgs} args - Arguments to find a UpdateContent
     * @example
     * // Get one UpdateContent
     * const updateContent = await prisma.updateContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UpdateContentFindFirstOrThrowArgs>(args?: SelectSubset<T, UpdateContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__UpdateContentClient<$Result.GetResult<Prisma.$UpdateContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UpdateContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UpdateContents
     * const updateContents = await prisma.updateContent.findMany()
     * 
     * // Get first 10 UpdateContents
     * const updateContents = await prisma.updateContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const updateContentWithIdOnly = await prisma.updateContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UpdateContentFindManyArgs>(args?: SelectSubset<T, UpdateContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdateContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UpdateContent.
     * @param {UpdateContentCreateArgs} args - Arguments to create a UpdateContent.
     * @example
     * // Create one UpdateContent
     * const UpdateContent = await prisma.updateContent.create({
     *   data: {
     *     // ... data to create a UpdateContent
     *   }
     * })
     * 
     */
    create<T extends UpdateContentCreateArgs>(args: SelectSubset<T, UpdateContentCreateArgs<ExtArgs>>): Prisma__UpdateContentClient<$Result.GetResult<Prisma.$UpdateContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UpdateContents.
     * @param {UpdateContentCreateManyArgs} args - Arguments to create many UpdateContents.
     * @example
     * // Create many UpdateContents
     * const updateContent = await prisma.updateContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UpdateContentCreateManyArgs>(args?: SelectSubset<T, UpdateContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UpdateContents and returns the data saved in the database.
     * @param {UpdateContentCreateManyAndReturnArgs} args - Arguments to create many UpdateContents.
     * @example
     * // Create many UpdateContents
     * const updateContent = await prisma.updateContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UpdateContents and only return the `id`
     * const updateContentWithIdOnly = await prisma.updateContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UpdateContentCreateManyAndReturnArgs>(args?: SelectSubset<T, UpdateContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdateContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UpdateContent.
     * @param {UpdateContentDeleteArgs} args - Arguments to delete one UpdateContent.
     * @example
     * // Delete one UpdateContent
     * const UpdateContent = await prisma.updateContent.delete({
     *   where: {
     *     // ... filter to delete one UpdateContent
     *   }
     * })
     * 
     */
    delete<T extends UpdateContentDeleteArgs>(args: SelectSubset<T, UpdateContentDeleteArgs<ExtArgs>>): Prisma__UpdateContentClient<$Result.GetResult<Prisma.$UpdateContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UpdateContent.
     * @param {UpdateContentUpdateArgs} args - Arguments to update one UpdateContent.
     * @example
     * // Update one UpdateContent
     * const updateContent = await prisma.updateContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UpdateContentUpdateArgs>(args: SelectSubset<T, UpdateContentUpdateArgs<ExtArgs>>): Prisma__UpdateContentClient<$Result.GetResult<Prisma.$UpdateContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UpdateContents.
     * @param {UpdateContentDeleteManyArgs} args - Arguments to filter UpdateContents to delete.
     * @example
     * // Delete a few UpdateContents
     * const { count } = await prisma.updateContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UpdateContentDeleteManyArgs>(args?: SelectSubset<T, UpdateContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpdateContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UpdateContents
     * const updateContent = await prisma.updateContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UpdateContentUpdateManyArgs>(args: SelectSubset<T, UpdateContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UpdateContents and returns the data updated in the database.
     * @param {UpdateContentUpdateManyAndReturnArgs} args - Arguments to update many UpdateContents.
     * @example
     * // Update many UpdateContents
     * const updateContent = await prisma.updateContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UpdateContents and only return the `id`
     * const updateContentWithIdOnly = await prisma.updateContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UpdateContentUpdateManyAndReturnArgs>(args: SelectSubset<T, UpdateContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UpdateContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UpdateContent.
     * @param {UpdateContentUpsertArgs} args - Arguments to update or create a UpdateContent.
     * @example
     * // Update or create a UpdateContent
     * const updateContent = await prisma.updateContent.upsert({
     *   create: {
     *     // ... data to create a UpdateContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UpdateContent we want to update
     *   }
     * })
     */
    upsert<T extends UpdateContentUpsertArgs>(args: SelectSubset<T, UpdateContentUpsertArgs<ExtArgs>>): Prisma__UpdateContentClient<$Result.GetResult<Prisma.$UpdateContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UpdateContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateContentCountArgs} args - Arguments to filter UpdateContents to count.
     * @example
     * // Count the number of UpdateContents
     * const count = await prisma.updateContent.count({
     *   where: {
     *     // ... the filter for the UpdateContents we want to count
     *   }
     * })
    **/
    count<T extends UpdateContentCountArgs>(
      args?: Subset<T, UpdateContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UpdateContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UpdateContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UpdateContentAggregateArgs>(args: Subset<T, UpdateContentAggregateArgs>): Prisma.PrismaPromise<GetUpdateContentAggregateType<T>>

    /**
     * Group by UpdateContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UpdateContentGroupByArgs} args - Group by arguments.
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
      T extends UpdateContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UpdateContentGroupByArgs['orderBy'] }
        : { orderBy?: UpdateContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UpdateContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUpdateContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UpdateContent model
   */
  readonly fields: UpdateContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UpdateContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UpdateContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    update<T extends UpdateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UpdateDefaultArgs<ExtArgs>>): Prisma__UpdateClient<$Result.GetResult<Prisma.$UpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UpdateContent model
   */
  interface UpdateContentFieldRefs {
    readonly id: FieldRef<"UpdateContent", 'String'>
    readonly createdAt: FieldRef<"UpdateContent", 'DateTime'>
    readonly updatedAt: FieldRef<"UpdateContent", 'DateTime'>
    readonly name: FieldRef<"UpdateContent", 'String'>
    readonly description: FieldRef<"UpdateContent", 'String'>
    readonly updateId: FieldRef<"UpdateContent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UpdateContent findUnique
   */
  export type UpdateContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateContent
     */
    select?: UpdateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdateContent
     */
    omit?: UpdateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateContentInclude<ExtArgs> | null
    /**
     * Filter, which UpdateContent to fetch.
     */
    where: UpdateContentWhereUniqueInput
  }

  /**
   * UpdateContent findUniqueOrThrow
   */
  export type UpdateContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateContent
     */
    select?: UpdateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdateContent
     */
    omit?: UpdateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateContentInclude<ExtArgs> | null
    /**
     * Filter, which UpdateContent to fetch.
     */
    where: UpdateContentWhereUniqueInput
  }

  /**
   * UpdateContent findFirst
   */
  export type UpdateContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateContent
     */
    select?: UpdateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdateContent
     */
    omit?: UpdateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateContentInclude<ExtArgs> | null
    /**
     * Filter, which UpdateContent to fetch.
     */
    where?: UpdateContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpdateContents to fetch.
     */
    orderBy?: UpdateContentOrderByWithRelationInput | UpdateContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpdateContents.
     */
    cursor?: UpdateContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpdateContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpdateContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpdateContents.
     */
    distinct?: UpdateContentScalarFieldEnum | UpdateContentScalarFieldEnum[]
  }

  /**
   * UpdateContent findFirstOrThrow
   */
  export type UpdateContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateContent
     */
    select?: UpdateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdateContent
     */
    omit?: UpdateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateContentInclude<ExtArgs> | null
    /**
     * Filter, which UpdateContent to fetch.
     */
    where?: UpdateContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpdateContents to fetch.
     */
    orderBy?: UpdateContentOrderByWithRelationInput | UpdateContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UpdateContents.
     */
    cursor?: UpdateContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpdateContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpdateContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UpdateContents.
     */
    distinct?: UpdateContentScalarFieldEnum | UpdateContentScalarFieldEnum[]
  }

  /**
   * UpdateContent findMany
   */
  export type UpdateContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateContent
     */
    select?: UpdateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdateContent
     */
    omit?: UpdateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateContentInclude<ExtArgs> | null
    /**
     * Filter, which UpdateContents to fetch.
     */
    where?: UpdateContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UpdateContents to fetch.
     */
    orderBy?: UpdateContentOrderByWithRelationInput | UpdateContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UpdateContents.
     */
    cursor?: UpdateContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UpdateContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UpdateContents.
     */
    skip?: number
    distinct?: UpdateContentScalarFieldEnum | UpdateContentScalarFieldEnum[]
  }

  /**
   * UpdateContent create
   */
  export type UpdateContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateContent
     */
    select?: UpdateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdateContent
     */
    omit?: UpdateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateContentInclude<ExtArgs> | null
    /**
     * The data needed to create a UpdateContent.
     */
    data: XOR<UpdateContentCreateInput, UpdateContentUncheckedCreateInput>
  }

  /**
   * UpdateContent createMany
   */
  export type UpdateContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UpdateContents.
     */
    data: UpdateContentCreateManyInput | UpdateContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UpdateContent createManyAndReturn
   */
  export type UpdateContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateContent
     */
    select?: UpdateContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpdateContent
     */
    omit?: UpdateContentOmit<ExtArgs> | null
    /**
     * The data used to create many UpdateContents.
     */
    data: UpdateContentCreateManyInput | UpdateContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UpdateContent update
   */
  export type UpdateContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateContent
     */
    select?: UpdateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdateContent
     */
    omit?: UpdateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateContentInclude<ExtArgs> | null
    /**
     * The data needed to update a UpdateContent.
     */
    data: XOR<UpdateContentUpdateInput, UpdateContentUncheckedUpdateInput>
    /**
     * Choose, which UpdateContent to update.
     */
    where: UpdateContentWhereUniqueInput
  }

  /**
   * UpdateContent updateMany
   */
  export type UpdateContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UpdateContents.
     */
    data: XOR<UpdateContentUpdateManyMutationInput, UpdateContentUncheckedUpdateManyInput>
    /**
     * Filter which UpdateContents to update
     */
    where?: UpdateContentWhereInput
    /**
     * Limit how many UpdateContents to update.
     */
    limit?: number
  }

  /**
   * UpdateContent updateManyAndReturn
   */
  export type UpdateContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateContent
     */
    select?: UpdateContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UpdateContent
     */
    omit?: UpdateContentOmit<ExtArgs> | null
    /**
     * The data used to update UpdateContents.
     */
    data: XOR<UpdateContentUpdateManyMutationInput, UpdateContentUncheckedUpdateManyInput>
    /**
     * Filter which UpdateContents to update
     */
    where?: UpdateContentWhereInput
    /**
     * Limit how many UpdateContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UpdateContent upsert
   */
  export type UpdateContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateContent
     */
    select?: UpdateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdateContent
     */
    omit?: UpdateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateContentInclude<ExtArgs> | null
    /**
     * The filter to search for the UpdateContent to update in case it exists.
     */
    where: UpdateContentWhereUniqueInput
    /**
     * In case the UpdateContent found by the `where` argument doesn't exist, create a new UpdateContent with this data.
     */
    create: XOR<UpdateContentCreateInput, UpdateContentUncheckedCreateInput>
    /**
     * In case the UpdateContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UpdateContentUpdateInput, UpdateContentUncheckedUpdateInput>
  }

  /**
   * UpdateContent delete
   */
  export type UpdateContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateContent
     */
    select?: UpdateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdateContent
     */
    omit?: UpdateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateContentInclude<ExtArgs> | null
    /**
     * Filter which UpdateContent to delete.
     */
    where: UpdateContentWhereUniqueInput
  }

  /**
   * UpdateContent deleteMany
   */
  export type UpdateContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UpdateContents to delete
     */
    where?: UpdateContentWhereInput
    /**
     * Limit how many UpdateContents to delete.
     */
    limit?: number
  }

  /**
   * UpdateContent without action
   */
  export type UpdateContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UpdateContent
     */
    select?: UpdateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UpdateContent
     */
    omit?: UpdateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UpdateContentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    belongsToId: 'belongsToId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const UpdateScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    body: 'body',
    status: 'status',
    version: 'version',
    asset: 'asset',
    productId: 'productId'
  };

  export type UpdateScalarFieldEnum = (typeof UpdateScalarFieldEnum)[keyof typeof UpdateScalarFieldEnum]


  export const UpdateContentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description',
    updateId: 'updateId'
  };

  export type UpdateContentScalarFieldEnum = (typeof UpdateContentScalarFieldEnum)[keyof typeof UpdateContentScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UPDATE_STATUS'
   */
  export type EnumUPDATE_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UPDATE_STATUS'>
    


  /**
   * Reference to a field of type 'UPDATE_STATUS[]'
   */
  export type ListEnumUPDATE_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UPDATE_STATUS[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    products?: ProductListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    products?: ProductListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    name?: StringFilter<"Product"> | string
    belongsToId?: StringFilter<"Product"> | string
    belongsTo?: XOR<UserScalarRelationFilter, UserWhereInput>
    updates?: UpdateListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    belongsToId?: SortOrder
    belongsTo?: UserOrderByWithRelationInput
    updates?: UpdateOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    id_belongsToId?: ProductIdBelongsToIdCompoundUniqueInput
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    createdAt?: DateTimeFilter<"Product"> | Date | string
    name?: StringFilter<"Product"> | string
    belongsToId?: StringFilter<"Product"> | string
    belongsTo?: XOR<UserScalarRelationFilter, UserWhereInput>
    updates?: UpdateListRelationFilter
  }, "id" | "id_belongsToId">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    belongsToId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    name?: StringWithAggregatesFilter<"Product"> | string
    belongsToId?: StringWithAggregatesFilter<"Product"> | string
  }

  export type UpdateWhereInput = {
    AND?: UpdateWhereInput | UpdateWhereInput[]
    OR?: UpdateWhereInput[]
    NOT?: UpdateWhereInput | UpdateWhereInput[]
    id?: StringFilter<"Update"> | string
    createdAt?: DateTimeFilter<"Update"> | Date | string
    updatedAt?: DateTimeFilter<"Update"> | Date | string
    title?: StringFilter<"Update"> | string
    body?: StringFilter<"Update"> | string
    status?: EnumUPDATE_STATUSFilter<"Update"> | $Enums.UPDATE_STATUS
    version?: StringNullableFilter<"Update"> | string | null
    asset?: StringNullableFilter<"Update"> | string | null
    productId?: StringFilter<"Update"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    updateContent?: UpdateContentListRelationFilter
  }

  export type UpdateOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    body?: SortOrder
    status?: SortOrder
    version?: SortOrderInput | SortOrder
    asset?: SortOrderInput | SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
    updateContent?: UpdateContentOrderByRelationAggregateInput
  }

  export type UpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UpdateWhereInput | UpdateWhereInput[]
    OR?: UpdateWhereInput[]
    NOT?: UpdateWhereInput | UpdateWhereInput[]
    createdAt?: DateTimeFilter<"Update"> | Date | string
    updatedAt?: DateTimeFilter<"Update"> | Date | string
    title?: StringFilter<"Update"> | string
    body?: StringFilter<"Update"> | string
    status?: EnumUPDATE_STATUSFilter<"Update"> | $Enums.UPDATE_STATUS
    version?: StringNullableFilter<"Update"> | string | null
    asset?: StringNullableFilter<"Update"> | string | null
    productId?: StringFilter<"Update"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    updateContent?: UpdateContentListRelationFilter
  }, "id">

  export type UpdateOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    body?: SortOrder
    status?: SortOrder
    version?: SortOrderInput | SortOrder
    asset?: SortOrderInput | SortOrder
    productId?: SortOrder
    _count?: UpdateCountOrderByAggregateInput
    _max?: UpdateMaxOrderByAggregateInput
    _min?: UpdateMinOrderByAggregateInput
  }

  export type UpdateScalarWhereWithAggregatesInput = {
    AND?: UpdateScalarWhereWithAggregatesInput | UpdateScalarWhereWithAggregatesInput[]
    OR?: UpdateScalarWhereWithAggregatesInput[]
    NOT?: UpdateScalarWhereWithAggregatesInput | UpdateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Update"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Update"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Update"> | Date | string
    title?: StringWithAggregatesFilter<"Update"> | string
    body?: StringWithAggregatesFilter<"Update"> | string
    status?: EnumUPDATE_STATUSWithAggregatesFilter<"Update"> | $Enums.UPDATE_STATUS
    version?: StringNullableWithAggregatesFilter<"Update"> | string | null
    asset?: StringNullableWithAggregatesFilter<"Update"> | string | null
    productId?: StringWithAggregatesFilter<"Update"> | string
  }

  export type UpdateContentWhereInput = {
    AND?: UpdateContentWhereInput | UpdateContentWhereInput[]
    OR?: UpdateContentWhereInput[]
    NOT?: UpdateContentWhereInput | UpdateContentWhereInput[]
    id?: StringFilter<"UpdateContent"> | string
    createdAt?: DateTimeFilter<"UpdateContent"> | Date | string
    updatedAt?: DateTimeFilter<"UpdateContent"> | Date | string
    name?: StringFilter<"UpdateContent"> | string
    description?: StringFilter<"UpdateContent"> | string
    updateId?: StringFilter<"UpdateContent"> | string
    update?: XOR<UpdateScalarRelationFilter, UpdateWhereInput>
  }

  export type UpdateContentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    updateId?: SortOrder
    update?: UpdateOrderByWithRelationInput
  }

  export type UpdateContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UpdateContentWhereInput | UpdateContentWhereInput[]
    OR?: UpdateContentWhereInput[]
    NOT?: UpdateContentWhereInput | UpdateContentWhereInput[]
    createdAt?: DateTimeFilter<"UpdateContent"> | Date | string
    updatedAt?: DateTimeFilter<"UpdateContent"> | Date | string
    name?: StringFilter<"UpdateContent"> | string
    description?: StringFilter<"UpdateContent"> | string
    updateId?: StringFilter<"UpdateContent"> | string
    update?: XOR<UpdateScalarRelationFilter, UpdateWhereInput>
  }, "id">

  export type UpdateContentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    updateId?: SortOrder
    _count?: UpdateContentCountOrderByAggregateInput
    _max?: UpdateContentMaxOrderByAggregateInput
    _min?: UpdateContentMinOrderByAggregateInput
  }

  export type UpdateContentScalarWhereWithAggregatesInput = {
    AND?: UpdateContentScalarWhereWithAggregatesInput | UpdateContentScalarWhereWithAggregatesInput[]
    OR?: UpdateContentScalarWhereWithAggregatesInput[]
    NOT?: UpdateContentScalarWhereWithAggregatesInput | UpdateContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UpdateContent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UpdateContent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UpdateContent"> | Date | string
    name?: StringWithAggregatesFilter<"UpdateContent"> | string
    description?: StringWithAggregatesFilter<"UpdateContent"> | string
    updateId?: StringWithAggregatesFilter<"UpdateContent"> | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    username: string
    password: string
    products?: ProductCreateNestedManyWithoutBelongsToInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    username: string
    password: string
    products?: ProductUncheckedCreateNestedManyWithoutBelongsToInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutBelongsToNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutBelongsToNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    belongsTo: UserCreateNestedOneWithoutProductsInput
    updates?: UpdateCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    belongsToId: string
    updates?: UpdateUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    belongsTo?: UserUpdateOneRequiredWithoutProductsNestedInput
    updates?: UpdateUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    belongsToId?: StringFieldUpdateOperationsInput | string
    updates?: UpdateUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    createdAt?: Date | string
    name: string
    belongsToId: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    belongsToId?: StringFieldUpdateOperationsInput | string
  }

  export type UpdateCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    body: string
    status?: $Enums.UPDATE_STATUS
    version?: string | null
    asset?: string | null
    product: ProductCreateNestedOneWithoutUpdatesInput
    updateContent?: UpdateContentCreateNestedManyWithoutUpdateInput
  }

  export type UpdateUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    body: string
    status?: $Enums.UPDATE_STATUS
    version?: string | null
    asset?: string | null
    productId: string
    updateContent?: UpdateContentUncheckedCreateNestedManyWithoutUpdateInput
  }

  export type UpdateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumUPDATE_STATUSFieldUpdateOperationsInput | $Enums.UPDATE_STATUS
    version?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutUpdatesNestedInput
    updateContent?: UpdateContentUpdateManyWithoutUpdateNestedInput
  }

  export type UpdateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumUPDATE_STATUSFieldUpdateOperationsInput | $Enums.UPDATE_STATUS
    version?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
    updateContent?: UpdateContentUncheckedUpdateManyWithoutUpdateNestedInput
  }

  export type UpdateCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    body: string
    status?: $Enums.UPDATE_STATUS
    version?: string | null
    asset?: string | null
    productId: string
  }

  export type UpdateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumUPDATE_STATUSFieldUpdateOperationsInput | $Enums.UPDATE_STATUS
    version?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UpdateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumUPDATE_STATUSFieldUpdateOperationsInput | $Enums.UPDATE_STATUS
    version?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type UpdateContentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    update: UpdateCreateNestedOneWithoutUpdateContentInput
  }

  export type UpdateContentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    updateId: string
  }

  export type UpdateContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    update?: UpdateUpdateOneRequiredWithoutUpdateContentNestedInput
  }

  export type UpdateContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updateId?: StringFieldUpdateOperationsInput | string
  }

  export type UpdateContentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    updateId: string
  }

  export type UpdateContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UpdateContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    updateId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UpdateListRelationFilter = {
    every?: UpdateWhereInput
    some?: UpdateWhereInput
    none?: UpdateWhereInput
  }

  export type UpdateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductIdBelongsToIdCompoundUniqueInput = {
    id: string
    belongsToId: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    belongsToId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    belongsToId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    belongsToId?: SortOrder
  }

  export type EnumUPDATE_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.UPDATE_STATUS | EnumUPDATE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.UPDATE_STATUS[] | ListEnumUPDATE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.UPDATE_STATUS[] | ListEnumUPDATE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumUPDATE_STATUSFilter<$PrismaModel> | $Enums.UPDATE_STATUS
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type UpdateContentListRelationFilter = {
    every?: UpdateContentWhereInput
    some?: UpdateContentWhereInput
    none?: UpdateContentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UpdateContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UpdateCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    body?: SortOrder
    status?: SortOrder
    version?: SortOrder
    asset?: SortOrder
    productId?: SortOrder
  }

  export type UpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    body?: SortOrder
    status?: SortOrder
    version?: SortOrder
    asset?: SortOrder
    productId?: SortOrder
  }

  export type UpdateMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    body?: SortOrder
    status?: SortOrder
    version?: SortOrder
    asset?: SortOrder
    productId?: SortOrder
  }

  export type EnumUPDATE_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UPDATE_STATUS | EnumUPDATE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.UPDATE_STATUS[] | ListEnumUPDATE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.UPDATE_STATUS[] | ListEnumUPDATE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumUPDATE_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.UPDATE_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUPDATE_STATUSFilter<$PrismaModel>
    _max?: NestedEnumUPDATE_STATUSFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UpdateScalarRelationFilter = {
    is?: UpdateWhereInput
    isNot?: UpdateWhereInput
  }

  export type UpdateContentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    updateId?: SortOrder
  }

  export type UpdateContentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    updateId?: SortOrder
  }

  export type UpdateContentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    updateId?: SortOrder
  }

  export type ProductCreateNestedManyWithoutBelongsToInput = {
    create?: XOR<ProductCreateWithoutBelongsToInput, ProductUncheckedCreateWithoutBelongsToInput> | ProductCreateWithoutBelongsToInput[] | ProductUncheckedCreateWithoutBelongsToInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBelongsToInput | ProductCreateOrConnectWithoutBelongsToInput[]
    createMany?: ProductCreateManyBelongsToInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBelongsToInput = {
    create?: XOR<ProductCreateWithoutBelongsToInput, ProductUncheckedCreateWithoutBelongsToInput> | ProductCreateWithoutBelongsToInput[] | ProductUncheckedCreateWithoutBelongsToInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBelongsToInput | ProductCreateOrConnectWithoutBelongsToInput[]
    createMany?: ProductCreateManyBelongsToInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateManyWithoutBelongsToNestedInput = {
    create?: XOR<ProductCreateWithoutBelongsToInput, ProductUncheckedCreateWithoutBelongsToInput> | ProductCreateWithoutBelongsToInput[] | ProductUncheckedCreateWithoutBelongsToInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBelongsToInput | ProductCreateOrConnectWithoutBelongsToInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBelongsToInput | ProductUpsertWithWhereUniqueWithoutBelongsToInput[]
    createMany?: ProductCreateManyBelongsToInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBelongsToInput | ProductUpdateWithWhereUniqueWithoutBelongsToInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBelongsToInput | ProductUpdateManyWithWhereWithoutBelongsToInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBelongsToNestedInput = {
    create?: XOR<ProductCreateWithoutBelongsToInput, ProductUncheckedCreateWithoutBelongsToInput> | ProductCreateWithoutBelongsToInput[] | ProductUncheckedCreateWithoutBelongsToInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBelongsToInput | ProductCreateOrConnectWithoutBelongsToInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBelongsToInput | ProductUpsertWithWhereUniqueWithoutBelongsToInput[]
    createMany?: ProductCreateManyBelongsToInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBelongsToInput | ProductUpdateWithWhereUniqueWithoutBelongsToInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBelongsToInput | ProductUpdateManyWithWhereWithoutBelongsToInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProductsInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    connect?: UserWhereUniqueInput
  }

  export type UpdateCreateNestedManyWithoutProductInput = {
    create?: XOR<UpdateCreateWithoutProductInput, UpdateUncheckedCreateWithoutProductInput> | UpdateCreateWithoutProductInput[] | UpdateUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UpdateCreateOrConnectWithoutProductInput | UpdateCreateOrConnectWithoutProductInput[]
    createMany?: UpdateCreateManyProductInputEnvelope
    connect?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
  }

  export type UpdateUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UpdateCreateWithoutProductInput, UpdateUncheckedCreateWithoutProductInput> | UpdateCreateWithoutProductInput[] | UpdateUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UpdateCreateOrConnectWithoutProductInput | UpdateCreateOrConnectWithoutProductInput[]
    createMany?: UpdateCreateManyProductInputEnvelope
    connect?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    upsert?: UserUpsertWithoutProductsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductsInput, UserUpdateWithoutProductsInput>, UserUncheckedUpdateWithoutProductsInput>
  }

  export type UpdateUpdateManyWithoutProductNestedInput = {
    create?: XOR<UpdateCreateWithoutProductInput, UpdateUncheckedCreateWithoutProductInput> | UpdateCreateWithoutProductInput[] | UpdateUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UpdateCreateOrConnectWithoutProductInput | UpdateCreateOrConnectWithoutProductInput[]
    upsert?: UpdateUpsertWithWhereUniqueWithoutProductInput | UpdateUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UpdateCreateManyProductInputEnvelope
    set?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    disconnect?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    delete?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    connect?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    update?: UpdateUpdateWithWhereUniqueWithoutProductInput | UpdateUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UpdateUpdateManyWithWhereWithoutProductInput | UpdateUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UpdateScalarWhereInput | UpdateScalarWhereInput[]
  }

  export type UpdateUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UpdateCreateWithoutProductInput, UpdateUncheckedCreateWithoutProductInput> | UpdateCreateWithoutProductInput[] | UpdateUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UpdateCreateOrConnectWithoutProductInput | UpdateCreateOrConnectWithoutProductInput[]
    upsert?: UpdateUpsertWithWhereUniqueWithoutProductInput | UpdateUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UpdateCreateManyProductInputEnvelope
    set?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    disconnect?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    delete?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    connect?: UpdateWhereUniqueInput | UpdateWhereUniqueInput[]
    update?: UpdateUpdateWithWhereUniqueWithoutProductInput | UpdateUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UpdateUpdateManyWithWhereWithoutProductInput | UpdateUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UpdateScalarWhereInput | UpdateScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutUpdatesInput = {
    create?: XOR<ProductCreateWithoutUpdatesInput, ProductUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatesInput
    connect?: ProductWhereUniqueInput
  }

  export type UpdateContentCreateNestedManyWithoutUpdateInput = {
    create?: XOR<UpdateContentCreateWithoutUpdateInput, UpdateContentUncheckedCreateWithoutUpdateInput> | UpdateContentCreateWithoutUpdateInput[] | UpdateContentUncheckedCreateWithoutUpdateInput[]
    connectOrCreate?: UpdateContentCreateOrConnectWithoutUpdateInput | UpdateContentCreateOrConnectWithoutUpdateInput[]
    createMany?: UpdateContentCreateManyUpdateInputEnvelope
    connect?: UpdateContentWhereUniqueInput | UpdateContentWhereUniqueInput[]
  }

  export type UpdateContentUncheckedCreateNestedManyWithoutUpdateInput = {
    create?: XOR<UpdateContentCreateWithoutUpdateInput, UpdateContentUncheckedCreateWithoutUpdateInput> | UpdateContentCreateWithoutUpdateInput[] | UpdateContentUncheckedCreateWithoutUpdateInput[]
    connectOrCreate?: UpdateContentCreateOrConnectWithoutUpdateInput | UpdateContentCreateOrConnectWithoutUpdateInput[]
    createMany?: UpdateContentCreateManyUpdateInputEnvelope
    connect?: UpdateContentWhereUniqueInput | UpdateContentWhereUniqueInput[]
  }

  export type EnumUPDATE_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.UPDATE_STATUS
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProductUpdateOneRequiredWithoutUpdatesNestedInput = {
    create?: XOR<ProductCreateWithoutUpdatesInput, ProductUncheckedCreateWithoutUpdatesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUpdatesInput
    upsert?: ProductUpsertWithoutUpdatesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutUpdatesInput, ProductUpdateWithoutUpdatesInput>, ProductUncheckedUpdateWithoutUpdatesInput>
  }

  export type UpdateContentUpdateManyWithoutUpdateNestedInput = {
    create?: XOR<UpdateContentCreateWithoutUpdateInput, UpdateContentUncheckedCreateWithoutUpdateInput> | UpdateContentCreateWithoutUpdateInput[] | UpdateContentUncheckedCreateWithoutUpdateInput[]
    connectOrCreate?: UpdateContentCreateOrConnectWithoutUpdateInput | UpdateContentCreateOrConnectWithoutUpdateInput[]
    upsert?: UpdateContentUpsertWithWhereUniqueWithoutUpdateInput | UpdateContentUpsertWithWhereUniqueWithoutUpdateInput[]
    createMany?: UpdateContentCreateManyUpdateInputEnvelope
    set?: UpdateContentWhereUniqueInput | UpdateContentWhereUniqueInput[]
    disconnect?: UpdateContentWhereUniqueInput | UpdateContentWhereUniqueInput[]
    delete?: UpdateContentWhereUniqueInput | UpdateContentWhereUniqueInput[]
    connect?: UpdateContentWhereUniqueInput | UpdateContentWhereUniqueInput[]
    update?: UpdateContentUpdateWithWhereUniqueWithoutUpdateInput | UpdateContentUpdateWithWhereUniqueWithoutUpdateInput[]
    updateMany?: UpdateContentUpdateManyWithWhereWithoutUpdateInput | UpdateContentUpdateManyWithWhereWithoutUpdateInput[]
    deleteMany?: UpdateContentScalarWhereInput | UpdateContentScalarWhereInput[]
  }

  export type UpdateContentUncheckedUpdateManyWithoutUpdateNestedInput = {
    create?: XOR<UpdateContentCreateWithoutUpdateInput, UpdateContentUncheckedCreateWithoutUpdateInput> | UpdateContentCreateWithoutUpdateInput[] | UpdateContentUncheckedCreateWithoutUpdateInput[]
    connectOrCreate?: UpdateContentCreateOrConnectWithoutUpdateInput | UpdateContentCreateOrConnectWithoutUpdateInput[]
    upsert?: UpdateContentUpsertWithWhereUniqueWithoutUpdateInput | UpdateContentUpsertWithWhereUniqueWithoutUpdateInput[]
    createMany?: UpdateContentCreateManyUpdateInputEnvelope
    set?: UpdateContentWhereUniqueInput | UpdateContentWhereUniqueInput[]
    disconnect?: UpdateContentWhereUniqueInput | UpdateContentWhereUniqueInput[]
    delete?: UpdateContentWhereUniqueInput | UpdateContentWhereUniqueInput[]
    connect?: UpdateContentWhereUniqueInput | UpdateContentWhereUniqueInput[]
    update?: UpdateContentUpdateWithWhereUniqueWithoutUpdateInput | UpdateContentUpdateWithWhereUniqueWithoutUpdateInput[]
    updateMany?: UpdateContentUpdateManyWithWhereWithoutUpdateInput | UpdateContentUpdateManyWithWhereWithoutUpdateInput[]
    deleteMany?: UpdateContentScalarWhereInput | UpdateContentScalarWhereInput[]
  }

  export type UpdateCreateNestedOneWithoutUpdateContentInput = {
    create?: XOR<UpdateCreateWithoutUpdateContentInput, UpdateUncheckedCreateWithoutUpdateContentInput>
    connectOrCreate?: UpdateCreateOrConnectWithoutUpdateContentInput
    connect?: UpdateWhereUniqueInput
  }

  export type UpdateUpdateOneRequiredWithoutUpdateContentNestedInput = {
    create?: XOR<UpdateCreateWithoutUpdateContentInput, UpdateUncheckedCreateWithoutUpdateContentInput>
    connectOrCreate?: UpdateCreateOrConnectWithoutUpdateContentInput
    upsert?: UpdateUpsertWithoutUpdateContentInput
    connect?: UpdateWhereUniqueInput
    update?: XOR<XOR<UpdateUpdateToOneWithWhereWithoutUpdateContentInput, UpdateUpdateWithoutUpdateContentInput>, UpdateUncheckedUpdateWithoutUpdateContentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUPDATE_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.UPDATE_STATUS | EnumUPDATE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.UPDATE_STATUS[] | ListEnumUPDATE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.UPDATE_STATUS[] | ListEnumUPDATE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumUPDATE_STATUSFilter<$PrismaModel> | $Enums.UPDATE_STATUS
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUPDATE_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UPDATE_STATUS | EnumUPDATE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.UPDATE_STATUS[] | ListEnumUPDATE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.UPDATE_STATUS[] | ListEnumUPDATE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumUPDATE_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.UPDATE_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUPDATE_STATUSFilter<$PrismaModel>
    _max?: NestedEnumUPDATE_STATUSFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductCreateWithoutBelongsToInput = {
    id?: string
    createdAt?: Date | string
    name: string
    updates?: UpdateCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBelongsToInput = {
    id?: string
    createdAt?: Date | string
    name: string
    updates?: UpdateUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBelongsToInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBelongsToInput, ProductUncheckedCreateWithoutBelongsToInput>
  }

  export type ProductCreateManyBelongsToInputEnvelope = {
    data: ProductCreateManyBelongsToInput | ProductCreateManyBelongsToInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBelongsToInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBelongsToInput, ProductUncheckedUpdateWithoutBelongsToInput>
    create: XOR<ProductCreateWithoutBelongsToInput, ProductUncheckedCreateWithoutBelongsToInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBelongsToInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBelongsToInput, ProductUncheckedUpdateWithoutBelongsToInput>
  }

  export type ProductUpdateManyWithWhereWithoutBelongsToInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBelongsToInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    name?: StringFilter<"Product"> | string
    belongsToId?: StringFilter<"Product"> | string
  }

  export type UserCreateWithoutProductsInput = {
    id?: string
    createdAt?: Date | string
    username: string
    password: string
  }

  export type UserUncheckedCreateWithoutProductsInput = {
    id?: string
    createdAt?: Date | string
    username: string
    password: string
  }

  export type UserCreateOrConnectWithoutProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
  }

  export type UpdateCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    body: string
    status?: $Enums.UPDATE_STATUS
    version?: string | null
    asset?: string | null
    updateContent?: UpdateContentCreateNestedManyWithoutUpdateInput
  }

  export type UpdateUncheckedCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    body: string
    status?: $Enums.UPDATE_STATUS
    version?: string | null
    asset?: string | null
    updateContent?: UpdateContentUncheckedCreateNestedManyWithoutUpdateInput
  }

  export type UpdateCreateOrConnectWithoutProductInput = {
    where: UpdateWhereUniqueInput
    create: XOR<UpdateCreateWithoutProductInput, UpdateUncheckedCreateWithoutProductInput>
  }

  export type UpdateCreateManyProductInputEnvelope = {
    data: UpdateCreateManyProductInput | UpdateCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProductsInput = {
    update: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UpdateUpsertWithWhereUniqueWithoutProductInput = {
    where: UpdateWhereUniqueInput
    update: XOR<UpdateUpdateWithoutProductInput, UpdateUncheckedUpdateWithoutProductInput>
    create: XOR<UpdateCreateWithoutProductInput, UpdateUncheckedCreateWithoutProductInput>
  }

  export type UpdateUpdateWithWhereUniqueWithoutProductInput = {
    where: UpdateWhereUniqueInput
    data: XOR<UpdateUpdateWithoutProductInput, UpdateUncheckedUpdateWithoutProductInput>
  }

  export type UpdateUpdateManyWithWhereWithoutProductInput = {
    where: UpdateScalarWhereInput
    data: XOR<UpdateUpdateManyMutationInput, UpdateUncheckedUpdateManyWithoutProductInput>
  }

  export type UpdateScalarWhereInput = {
    AND?: UpdateScalarWhereInput | UpdateScalarWhereInput[]
    OR?: UpdateScalarWhereInput[]
    NOT?: UpdateScalarWhereInput | UpdateScalarWhereInput[]
    id?: StringFilter<"Update"> | string
    createdAt?: DateTimeFilter<"Update"> | Date | string
    updatedAt?: DateTimeFilter<"Update"> | Date | string
    title?: StringFilter<"Update"> | string
    body?: StringFilter<"Update"> | string
    status?: EnumUPDATE_STATUSFilter<"Update"> | $Enums.UPDATE_STATUS
    version?: StringNullableFilter<"Update"> | string | null
    asset?: StringNullableFilter<"Update"> | string | null
    productId?: StringFilter<"Update"> | string
  }

  export type ProductCreateWithoutUpdatesInput = {
    id?: string
    createdAt?: Date | string
    name: string
    belongsTo: UserCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutUpdatesInput = {
    id?: string
    createdAt?: Date | string
    name: string
    belongsToId: string
  }

  export type ProductCreateOrConnectWithoutUpdatesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUpdatesInput, ProductUncheckedCreateWithoutUpdatesInput>
  }

  export type UpdateContentCreateWithoutUpdateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
  }

  export type UpdateContentUncheckedCreateWithoutUpdateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
  }

  export type UpdateContentCreateOrConnectWithoutUpdateInput = {
    where: UpdateContentWhereUniqueInput
    create: XOR<UpdateContentCreateWithoutUpdateInput, UpdateContentUncheckedCreateWithoutUpdateInput>
  }

  export type UpdateContentCreateManyUpdateInputEnvelope = {
    data: UpdateContentCreateManyUpdateInput | UpdateContentCreateManyUpdateInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutUpdatesInput = {
    update: XOR<ProductUpdateWithoutUpdatesInput, ProductUncheckedUpdateWithoutUpdatesInput>
    create: XOR<ProductCreateWithoutUpdatesInput, ProductUncheckedCreateWithoutUpdatesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutUpdatesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutUpdatesInput, ProductUncheckedUpdateWithoutUpdatesInput>
  }

  export type ProductUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    belongsTo?: UserUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutUpdatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    belongsToId?: StringFieldUpdateOperationsInput | string
  }

  export type UpdateContentUpsertWithWhereUniqueWithoutUpdateInput = {
    where: UpdateContentWhereUniqueInput
    update: XOR<UpdateContentUpdateWithoutUpdateInput, UpdateContentUncheckedUpdateWithoutUpdateInput>
    create: XOR<UpdateContentCreateWithoutUpdateInput, UpdateContentUncheckedCreateWithoutUpdateInput>
  }

  export type UpdateContentUpdateWithWhereUniqueWithoutUpdateInput = {
    where: UpdateContentWhereUniqueInput
    data: XOR<UpdateContentUpdateWithoutUpdateInput, UpdateContentUncheckedUpdateWithoutUpdateInput>
  }

  export type UpdateContentUpdateManyWithWhereWithoutUpdateInput = {
    where: UpdateContentScalarWhereInput
    data: XOR<UpdateContentUpdateManyMutationInput, UpdateContentUncheckedUpdateManyWithoutUpdateInput>
  }

  export type UpdateContentScalarWhereInput = {
    AND?: UpdateContentScalarWhereInput | UpdateContentScalarWhereInput[]
    OR?: UpdateContentScalarWhereInput[]
    NOT?: UpdateContentScalarWhereInput | UpdateContentScalarWhereInput[]
    id?: StringFilter<"UpdateContent"> | string
    createdAt?: DateTimeFilter<"UpdateContent"> | Date | string
    updatedAt?: DateTimeFilter<"UpdateContent"> | Date | string
    name?: StringFilter<"UpdateContent"> | string
    description?: StringFilter<"UpdateContent"> | string
    updateId?: StringFilter<"UpdateContent"> | string
  }

  export type UpdateCreateWithoutUpdateContentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    body: string
    status?: $Enums.UPDATE_STATUS
    version?: string | null
    asset?: string | null
    product: ProductCreateNestedOneWithoutUpdatesInput
  }

  export type UpdateUncheckedCreateWithoutUpdateContentInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    body: string
    status?: $Enums.UPDATE_STATUS
    version?: string | null
    asset?: string | null
    productId: string
  }

  export type UpdateCreateOrConnectWithoutUpdateContentInput = {
    where: UpdateWhereUniqueInput
    create: XOR<UpdateCreateWithoutUpdateContentInput, UpdateUncheckedCreateWithoutUpdateContentInput>
  }

  export type UpdateUpsertWithoutUpdateContentInput = {
    update: XOR<UpdateUpdateWithoutUpdateContentInput, UpdateUncheckedUpdateWithoutUpdateContentInput>
    create: XOR<UpdateCreateWithoutUpdateContentInput, UpdateUncheckedCreateWithoutUpdateContentInput>
    where?: UpdateWhereInput
  }

  export type UpdateUpdateToOneWithWhereWithoutUpdateContentInput = {
    where?: UpdateWhereInput
    data: XOR<UpdateUpdateWithoutUpdateContentInput, UpdateUncheckedUpdateWithoutUpdateContentInput>
  }

  export type UpdateUpdateWithoutUpdateContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumUPDATE_STATUSFieldUpdateOperationsInput | $Enums.UPDATE_STATUS
    version?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutUpdatesNestedInput
  }

  export type UpdateUncheckedUpdateWithoutUpdateContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumUPDATE_STATUSFieldUpdateOperationsInput | $Enums.UPDATE_STATUS
    version?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: NullableStringFieldUpdateOperationsInput | string | null
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyBelongsToInput = {
    id?: string
    createdAt?: Date | string
    name: string
  }

  export type ProductUpdateWithoutBelongsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    updates?: UpdateUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBelongsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    updates?: UpdateUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBelongsToInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UpdateCreateManyProductInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    body: string
    status?: $Enums.UPDATE_STATUS
    version?: string | null
    asset?: string | null
  }

  export type UpdateUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumUPDATE_STATUSFieldUpdateOperationsInput | $Enums.UPDATE_STATUS
    version?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: NullableStringFieldUpdateOperationsInput | string | null
    updateContent?: UpdateContentUpdateManyWithoutUpdateNestedInput
  }

  export type UpdateUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumUPDATE_STATUSFieldUpdateOperationsInput | $Enums.UPDATE_STATUS
    version?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: NullableStringFieldUpdateOperationsInput | string | null
    updateContent?: UpdateContentUncheckedUpdateManyWithoutUpdateNestedInput
  }

  export type UpdateUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumUPDATE_STATUSFieldUpdateOperationsInput | $Enums.UPDATE_STATUS
    version?: NullableStringFieldUpdateOperationsInput | string | null
    asset?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UpdateContentCreateManyUpdateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
  }

  export type UpdateContentUpdateWithoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UpdateContentUncheckedUpdateWithoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UpdateContentUncheckedUpdateManyWithoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
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
  export const dmmf: runtime.BaseDMMF
}