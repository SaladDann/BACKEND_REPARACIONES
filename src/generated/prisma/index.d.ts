
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
 * Model tb_cliente
 * 
 */
export type tb_cliente = $Result.DefaultSelection<Prisma.$tb_clientePayload>
/**
 * Model tb_detalle_reparacion_repuesto
 * 
 */
export type tb_detalle_reparacion_repuesto = $Result.DefaultSelection<Prisma.$tb_detalle_reparacion_repuestoPayload>
/**
 * Model tb_equipo
 * 
 */
export type tb_equipo = $Result.DefaultSelection<Prisma.$tb_equipoPayload>
/**
 * Model tb_estado_reparacion
 * 
 */
export type tb_estado_reparacion = $Result.DefaultSelection<Prisma.$tb_estado_reparacionPayload>
/**
 * Model tb_factura
 * 
 */
export type tb_factura = $Result.DefaultSelection<Prisma.$tb_facturaPayload>
/**
 * Model tb_notificacion
 * 
 */
export type tb_notificacion = $Result.DefaultSelection<Prisma.$tb_notificacionPayload>
/**
 * Model tb_reparacion
 * 
 */
export type tb_reparacion = $Result.DefaultSelection<Prisma.$tb_reparacionPayload>
/**
 * Model tb_repuesto
 * 
 */
export type tb_repuesto = $Result.DefaultSelection<Prisma.$tb_repuestoPayload>
/**
 * Model tb_tecnico
 * 
 */
export type tb_tecnico = $Result.DefaultSelection<Prisma.$tb_tecnicoPayload>
/**
 * Model tb_usuario
 * 
 */
export type tb_usuario = $Result.DefaultSelection<Prisma.$tb_usuarioPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const tb_usuario_Usuario_nivel: {
  Cliente: 'Cliente',
  Tecnico: 'Tecnico',
  Admin: 'Admin'
};

export type tb_usuario_Usuario_nivel = (typeof tb_usuario_Usuario_nivel)[keyof typeof tb_usuario_Usuario_nivel]

}

export type tb_usuario_Usuario_nivel = $Enums.tb_usuario_Usuario_nivel

export const tb_usuario_Usuario_nivel: typeof $Enums.tb_usuario_Usuario_nivel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tb_clientes
 * const tb_clientes = await prisma.tb_cliente.findMany()
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
   * // Fetch zero or more Tb_clientes
   * const tb_clientes = await prisma.tb_cliente.findMany()
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
   * `prisma.tb_cliente`: Exposes CRUD operations for the **tb_cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_clientes
    * const tb_clientes = await prisma.tb_cliente.findMany()
    * ```
    */
  get tb_cliente(): Prisma.tb_clienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_detalle_reparacion_repuesto`: Exposes CRUD operations for the **tb_detalle_reparacion_repuesto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_detalle_reparacion_repuestos
    * const tb_detalle_reparacion_repuestos = await prisma.tb_detalle_reparacion_repuesto.findMany()
    * ```
    */
  get tb_detalle_reparacion_repuesto(): Prisma.tb_detalle_reparacion_repuestoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_equipo`: Exposes CRUD operations for the **tb_equipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_equipos
    * const tb_equipos = await prisma.tb_equipo.findMany()
    * ```
    */
  get tb_equipo(): Prisma.tb_equipoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_estado_reparacion`: Exposes CRUD operations for the **tb_estado_reparacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_estado_reparacions
    * const tb_estado_reparacions = await prisma.tb_estado_reparacion.findMany()
    * ```
    */
  get tb_estado_reparacion(): Prisma.tb_estado_reparacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_factura`: Exposes CRUD operations for the **tb_factura** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_facturas
    * const tb_facturas = await prisma.tb_factura.findMany()
    * ```
    */
  get tb_factura(): Prisma.tb_facturaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_notificacion`: Exposes CRUD operations for the **tb_notificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_notificacions
    * const tb_notificacions = await prisma.tb_notificacion.findMany()
    * ```
    */
  get tb_notificacion(): Prisma.tb_notificacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_reparacion`: Exposes CRUD operations for the **tb_reparacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_reparacions
    * const tb_reparacions = await prisma.tb_reparacion.findMany()
    * ```
    */
  get tb_reparacion(): Prisma.tb_reparacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_repuesto`: Exposes CRUD operations for the **tb_repuesto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_repuestos
    * const tb_repuestos = await prisma.tb_repuesto.findMany()
    * ```
    */
  get tb_repuesto(): Prisma.tb_repuestoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_tecnico`: Exposes CRUD operations for the **tb_tecnico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_tecnicos
    * const tb_tecnicos = await prisma.tb_tecnico.findMany()
    * ```
    */
  get tb_tecnico(): Prisma.tb_tecnicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tb_usuario`: Exposes CRUD operations for the **tb_usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_usuarios
    * const tb_usuarios = await prisma.tb_usuario.findMany()
    * ```
    */
  get tb_usuario(): Prisma.tb_usuarioDelegate<ExtArgs, ClientOptions>;
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
    tb_cliente: 'tb_cliente',
    tb_detalle_reparacion_repuesto: 'tb_detalle_reparacion_repuesto',
    tb_equipo: 'tb_equipo',
    tb_estado_reparacion: 'tb_estado_reparacion',
    tb_factura: 'tb_factura',
    tb_notificacion: 'tb_notificacion',
    tb_reparacion: 'tb_reparacion',
    tb_repuesto: 'tb_repuesto',
    tb_tecnico: 'tb_tecnico',
    tb_usuario: 'tb_usuario'
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
      modelProps: "tb_cliente" | "tb_detalle_reparacion_repuesto" | "tb_equipo" | "tb_estado_reparacion" | "tb_factura" | "tb_notificacion" | "tb_reparacion" | "tb_repuesto" | "tb_tecnico" | "tb_usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tb_cliente: {
        payload: Prisma.$tb_clientePayload<ExtArgs>
        fields: Prisma.tb_clienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_clienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_clientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_clienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_clientePayload>
          }
          findFirst: {
            args: Prisma.tb_clienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_clientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_clienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_clientePayload>
          }
          findMany: {
            args: Prisma.tb_clienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_clientePayload>[]
          }
          create: {
            args: Prisma.tb_clienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_clientePayload>
          }
          createMany: {
            args: Prisma.tb_clienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_clienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_clientePayload>
          }
          update: {
            args: Prisma.tb_clienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_clientePayload>
          }
          deleteMany: {
            args: Prisma.tb_clienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_clienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_clienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_clientePayload>
          }
          aggregate: {
            args: Prisma.Tb_clienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_cliente>
          }
          groupBy: {
            args: Prisma.tb_clienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_clienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_clienteCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_clienteCountAggregateOutputType> | number
          }
        }
      }
      tb_detalle_reparacion_repuesto: {
        payload: Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>
        fields: Prisma.tb_detalle_reparacion_repuestoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_detalle_reparacion_repuestoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_detalle_reparacion_repuestoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_detalle_reparacion_repuestoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_detalle_reparacion_repuestoPayload>
          }
          findFirst: {
            args: Prisma.tb_detalle_reparacion_repuestoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_detalle_reparacion_repuestoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_detalle_reparacion_repuestoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_detalle_reparacion_repuestoPayload>
          }
          findMany: {
            args: Prisma.tb_detalle_reparacion_repuestoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_detalle_reparacion_repuestoPayload>[]
          }
          create: {
            args: Prisma.tb_detalle_reparacion_repuestoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_detalle_reparacion_repuestoPayload>
          }
          createMany: {
            args: Prisma.tb_detalle_reparacion_repuestoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_detalle_reparacion_repuestoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_detalle_reparacion_repuestoPayload>
          }
          update: {
            args: Prisma.tb_detalle_reparacion_repuestoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_detalle_reparacion_repuestoPayload>
          }
          deleteMany: {
            args: Prisma.tb_detalle_reparacion_repuestoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_detalle_reparacion_repuestoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_detalle_reparacion_repuestoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_detalle_reparacion_repuestoPayload>
          }
          aggregate: {
            args: Prisma.Tb_detalle_reparacion_repuestoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_detalle_reparacion_repuesto>
          }
          groupBy: {
            args: Prisma.tb_detalle_reparacion_repuestoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_detalle_reparacion_repuestoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_detalle_reparacion_repuestoCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_detalle_reparacion_repuestoCountAggregateOutputType> | number
          }
        }
      }
      tb_equipo: {
        payload: Prisma.$tb_equipoPayload<ExtArgs>
        fields: Prisma.tb_equipoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_equipoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_equipoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_equipoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_equipoPayload>
          }
          findFirst: {
            args: Prisma.tb_equipoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_equipoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_equipoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_equipoPayload>
          }
          findMany: {
            args: Prisma.tb_equipoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_equipoPayload>[]
          }
          create: {
            args: Prisma.tb_equipoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_equipoPayload>
          }
          createMany: {
            args: Prisma.tb_equipoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_equipoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_equipoPayload>
          }
          update: {
            args: Prisma.tb_equipoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_equipoPayload>
          }
          deleteMany: {
            args: Prisma.tb_equipoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_equipoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_equipoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_equipoPayload>
          }
          aggregate: {
            args: Prisma.Tb_equipoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_equipo>
          }
          groupBy: {
            args: Prisma.tb_equipoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_equipoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_equipoCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_equipoCountAggregateOutputType> | number
          }
        }
      }
      tb_estado_reparacion: {
        payload: Prisma.$tb_estado_reparacionPayload<ExtArgs>
        fields: Prisma.tb_estado_reparacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_estado_reparacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_estado_reparacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_estado_reparacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_estado_reparacionPayload>
          }
          findFirst: {
            args: Prisma.tb_estado_reparacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_estado_reparacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_estado_reparacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_estado_reparacionPayload>
          }
          findMany: {
            args: Prisma.tb_estado_reparacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_estado_reparacionPayload>[]
          }
          create: {
            args: Prisma.tb_estado_reparacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_estado_reparacionPayload>
          }
          createMany: {
            args: Prisma.tb_estado_reparacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_estado_reparacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_estado_reparacionPayload>
          }
          update: {
            args: Prisma.tb_estado_reparacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_estado_reparacionPayload>
          }
          deleteMany: {
            args: Prisma.tb_estado_reparacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_estado_reparacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_estado_reparacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_estado_reparacionPayload>
          }
          aggregate: {
            args: Prisma.Tb_estado_reparacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_estado_reparacion>
          }
          groupBy: {
            args: Prisma.tb_estado_reparacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_estado_reparacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_estado_reparacionCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_estado_reparacionCountAggregateOutputType> | number
          }
        }
      }
      tb_factura: {
        payload: Prisma.$tb_facturaPayload<ExtArgs>
        fields: Prisma.tb_facturaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_facturaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_facturaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_facturaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_facturaPayload>
          }
          findFirst: {
            args: Prisma.tb_facturaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_facturaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_facturaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_facturaPayload>
          }
          findMany: {
            args: Prisma.tb_facturaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_facturaPayload>[]
          }
          create: {
            args: Prisma.tb_facturaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_facturaPayload>
          }
          createMany: {
            args: Prisma.tb_facturaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_facturaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_facturaPayload>
          }
          update: {
            args: Prisma.tb_facturaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_facturaPayload>
          }
          deleteMany: {
            args: Prisma.tb_facturaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_facturaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_facturaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_facturaPayload>
          }
          aggregate: {
            args: Prisma.Tb_facturaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_factura>
          }
          groupBy: {
            args: Prisma.tb_facturaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_facturaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_facturaCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_facturaCountAggregateOutputType> | number
          }
        }
      }
      tb_notificacion: {
        payload: Prisma.$tb_notificacionPayload<ExtArgs>
        fields: Prisma.tb_notificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_notificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_notificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_notificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_notificacionPayload>
          }
          findFirst: {
            args: Prisma.tb_notificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_notificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_notificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_notificacionPayload>
          }
          findMany: {
            args: Prisma.tb_notificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_notificacionPayload>[]
          }
          create: {
            args: Prisma.tb_notificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_notificacionPayload>
          }
          createMany: {
            args: Prisma.tb_notificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_notificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_notificacionPayload>
          }
          update: {
            args: Prisma.tb_notificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_notificacionPayload>
          }
          deleteMany: {
            args: Prisma.tb_notificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_notificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_notificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_notificacionPayload>
          }
          aggregate: {
            args: Prisma.Tb_notificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_notificacion>
          }
          groupBy: {
            args: Prisma.tb_notificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_notificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_notificacionCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_notificacionCountAggregateOutputType> | number
          }
        }
      }
      tb_reparacion: {
        payload: Prisma.$tb_reparacionPayload<ExtArgs>
        fields: Prisma.tb_reparacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_reparacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_reparacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_reparacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_reparacionPayload>
          }
          findFirst: {
            args: Prisma.tb_reparacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_reparacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_reparacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_reparacionPayload>
          }
          findMany: {
            args: Prisma.tb_reparacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_reparacionPayload>[]
          }
          create: {
            args: Prisma.tb_reparacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_reparacionPayload>
          }
          createMany: {
            args: Prisma.tb_reparacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_reparacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_reparacionPayload>
          }
          update: {
            args: Prisma.tb_reparacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_reparacionPayload>
          }
          deleteMany: {
            args: Prisma.tb_reparacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_reparacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_reparacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_reparacionPayload>
          }
          aggregate: {
            args: Prisma.Tb_reparacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_reparacion>
          }
          groupBy: {
            args: Prisma.tb_reparacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_reparacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_reparacionCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_reparacionCountAggregateOutputType> | number
          }
        }
      }
      tb_repuesto: {
        payload: Prisma.$tb_repuestoPayload<ExtArgs>
        fields: Prisma.tb_repuestoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_repuestoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_repuestoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_repuestoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_repuestoPayload>
          }
          findFirst: {
            args: Prisma.tb_repuestoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_repuestoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_repuestoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_repuestoPayload>
          }
          findMany: {
            args: Prisma.tb_repuestoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_repuestoPayload>[]
          }
          create: {
            args: Prisma.tb_repuestoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_repuestoPayload>
          }
          createMany: {
            args: Prisma.tb_repuestoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_repuestoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_repuestoPayload>
          }
          update: {
            args: Prisma.tb_repuestoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_repuestoPayload>
          }
          deleteMany: {
            args: Prisma.tb_repuestoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_repuestoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_repuestoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_repuestoPayload>
          }
          aggregate: {
            args: Prisma.Tb_repuestoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_repuesto>
          }
          groupBy: {
            args: Prisma.tb_repuestoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_repuestoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_repuestoCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_repuestoCountAggregateOutputType> | number
          }
        }
      }
      tb_tecnico: {
        payload: Prisma.$tb_tecnicoPayload<ExtArgs>
        fields: Prisma.tb_tecnicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_tecnicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tecnicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_tecnicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tecnicoPayload>
          }
          findFirst: {
            args: Prisma.tb_tecnicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tecnicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_tecnicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tecnicoPayload>
          }
          findMany: {
            args: Prisma.tb_tecnicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tecnicoPayload>[]
          }
          create: {
            args: Prisma.tb_tecnicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tecnicoPayload>
          }
          createMany: {
            args: Prisma.tb_tecnicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_tecnicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tecnicoPayload>
          }
          update: {
            args: Prisma.tb_tecnicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tecnicoPayload>
          }
          deleteMany: {
            args: Prisma.tb_tecnicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_tecnicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_tecnicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_tecnicoPayload>
          }
          aggregate: {
            args: Prisma.Tb_tecnicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_tecnico>
          }
          groupBy: {
            args: Prisma.tb_tecnicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_tecnicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_tecnicoCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_tecnicoCountAggregateOutputType> | number
          }
        }
      }
      tb_usuario: {
        payload: Prisma.$tb_usuarioPayload<ExtArgs>
        fields: Prisma.tb_usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuarioPayload>
          }
          findFirst: {
            args: Prisma.tb_usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuarioPayload>
          }
          findMany: {
            args: Prisma.tb_usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuarioPayload>[]
          }
          create: {
            args: Prisma.tb_usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuarioPayload>
          }
          createMany: {
            args: Prisma.tb_usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuarioPayload>
          }
          update: {
            args: Prisma.tb_usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuarioPayload>
          }
          deleteMany: {
            args: Prisma.tb_usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_usuarioPayload>
          }
          aggregate: {
            args: Prisma.Tb_usuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_usuario>
          }
          groupBy: {
            args: Prisma.tb_usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_usuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_usuarioCountAggregateOutputType> | number
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
    tb_cliente?: tb_clienteOmit
    tb_detalle_reparacion_repuesto?: tb_detalle_reparacion_repuestoOmit
    tb_equipo?: tb_equipoOmit
    tb_estado_reparacion?: tb_estado_reparacionOmit
    tb_factura?: tb_facturaOmit
    tb_notificacion?: tb_notificacionOmit
    tb_reparacion?: tb_reparacionOmit
    tb_repuesto?: tb_repuestoOmit
    tb_tecnico?: tb_tecnicoOmit
    tb_usuario?: tb_usuarioOmit
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
   * Count Type Tb_clienteCountOutputType
   */

  export type Tb_clienteCountOutputType = {
    equipos: number
    reparaciones: number
    usuarios: number
    tb_notificacion: number
  }

  export type Tb_clienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipos?: boolean | Tb_clienteCountOutputTypeCountEquiposArgs
    reparaciones?: boolean | Tb_clienteCountOutputTypeCountReparacionesArgs
    usuarios?: boolean | Tb_clienteCountOutputTypeCountUsuariosArgs
    tb_notificacion?: boolean | Tb_clienteCountOutputTypeCountTb_notificacionArgs
  }

  // Custom InputTypes
  /**
   * Tb_clienteCountOutputType without action
   */
  export type Tb_clienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_clienteCountOutputType
     */
    select?: Tb_clienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_clienteCountOutputType without action
   */
  export type Tb_clienteCountOutputTypeCountEquiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_equipoWhereInput
  }

  /**
   * Tb_clienteCountOutputType without action
   */
  export type Tb_clienteCountOutputTypeCountReparacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_reparacionWhereInput
  }

  /**
   * Tb_clienteCountOutputType without action
   */
  export type Tb_clienteCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_usuarioWhereInput
  }

  /**
   * Tb_clienteCountOutputType without action
   */
  export type Tb_clienteCountOutputTypeCountTb_notificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_notificacionWhereInput
  }


  /**
   * Count Type Tb_equipoCountOutputType
   */

  export type Tb_equipoCountOutputType = {
    reparaciones: number
  }

  export type Tb_equipoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparaciones?: boolean | Tb_equipoCountOutputTypeCountReparacionesArgs
  }

  // Custom InputTypes
  /**
   * Tb_equipoCountOutputType without action
   */
  export type Tb_equipoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_equipoCountOutputType
     */
    select?: Tb_equipoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_equipoCountOutputType without action
   */
  export type Tb_equipoCountOutputTypeCountReparacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_reparacionWhereInput
  }


  /**
   * Count Type Tb_reparacionCountOutputType
   */

  export type Tb_reparacionCountOutputType = {
    estados: number
    detalles: number
    tb_notificacion: number
  }

  export type Tb_reparacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estados?: boolean | Tb_reparacionCountOutputTypeCountEstadosArgs
    detalles?: boolean | Tb_reparacionCountOutputTypeCountDetallesArgs
    tb_notificacion?: boolean | Tb_reparacionCountOutputTypeCountTb_notificacionArgs
  }

  // Custom InputTypes
  /**
   * Tb_reparacionCountOutputType without action
   */
  export type Tb_reparacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_reparacionCountOutputType
     */
    select?: Tb_reparacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_reparacionCountOutputType without action
   */
  export type Tb_reparacionCountOutputTypeCountEstadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_estado_reparacionWhereInput
  }

  /**
   * Tb_reparacionCountOutputType without action
   */
  export type Tb_reparacionCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_detalle_reparacion_repuestoWhereInput
  }

  /**
   * Tb_reparacionCountOutputType without action
   */
  export type Tb_reparacionCountOutputTypeCountTb_notificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_notificacionWhereInput
  }


  /**
   * Count Type Tb_repuestoCountOutputType
   */

  export type Tb_repuestoCountOutputType = {
    detalles: number
  }

  export type Tb_repuestoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | Tb_repuestoCountOutputTypeCountDetallesArgs
  }

  // Custom InputTypes
  /**
   * Tb_repuestoCountOutputType without action
   */
  export type Tb_repuestoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_repuestoCountOutputType
     */
    select?: Tb_repuestoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_repuestoCountOutputType without action
   */
  export type Tb_repuestoCountOutputTypeCountDetallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_detalle_reparacion_repuestoWhereInput
  }


  /**
   * Count Type Tb_tecnicoCountOutputType
   */

  export type Tb_tecnicoCountOutputType = {
    reparaciones: number
    usuarios: number
  }

  export type Tb_tecnicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparaciones?: boolean | Tb_tecnicoCountOutputTypeCountReparacionesArgs
    usuarios?: boolean | Tb_tecnicoCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * Tb_tecnicoCountOutputType without action
   */
  export type Tb_tecnicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_tecnicoCountOutputType
     */
    select?: Tb_tecnicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_tecnicoCountOutputType without action
   */
  export type Tb_tecnicoCountOutputTypeCountReparacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_reparacionWhereInput
  }

  /**
   * Tb_tecnicoCountOutputType without action
   */
  export type Tb_tecnicoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_usuarioWhereInput
  }


  /**
   * Count Type Tb_usuarioCountOutputType
   */

  export type Tb_usuarioCountOutputType = {
    notificaciones: number
    estados_aprobados: number
  }

  export type Tb_usuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificaciones?: boolean | Tb_usuarioCountOutputTypeCountNotificacionesArgs
    estados_aprobados?: boolean | Tb_usuarioCountOutputTypeCountEstados_aprobadosArgs
  }

  // Custom InputTypes
  /**
   * Tb_usuarioCountOutputType without action
   */
  export type Tb_usuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tb_usuarioCountOutputType
     */
    select?: Tb_usuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tb_usuarioCountOutputType without action
   */
  export type Tb_usuarioCountOutputTypeCountNotificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_notificacionWhereInput
  }

  /**
   * Tb_usuarioCountOutputType without action
   */
  export type Tb_usuarioCountOutputTypeCountEstados_aprobadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_estado_reparacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tb_cliente
   */

  export type AggregateTb_cliente = {
    _count: Tb_clienteCountAggregateOutputType | null
    _avg: Tb_clienteAvgAggregateOutputType | null
    _sum: Tb_clienteSumAggregateOutputType | null
    _min: Tb_clienteMinAggregateOutputType | null
    _max: Tb_clienteMaxAggregateOutputType | null
  }

  export type Tb_clienteAvgAggregateOutputType = {
    ID_Cliente: number | null
  }

  export type Tb_clienteSumAggregateOutputType = {
    ID_Cliente: number | null
  }

  export type Tb_clienteMinAggregateOutputType = {
    ID_Cliente: number | null
    Cedula: string | null
    Nombres: string | null
    Apellidos: string | null
    Telefono: string | null
    Email: string | null
    Direccion: string | null
  }

  export type Tb_clienteMaxAggregateOutputType = {
    ID_Cliente: number | null
    Cedula: string | null
    Nombres: string | null
    Apellidos: string | null
    Telefono: string | null
    Email: string | null
    Direccion: string | null
  }

  export type Tb_clienteCountAggregateOutputType = {
    ID_Cliente: number
    Cedula: number
    Nombres: number
    Apellidos: number
    Telefono: number
    Email: number
    Direccion: number
    _all: number
  }


  export type Tb_clienteAvgAggregateInputType = {
    ID_Cliente?: true
  }

  export type Tb_clienteSumAggregateInputType = {
    ID_Cliente?: true
  }

  export type Tb_clienteMinAggregateInputType = {
    ID_Cliente?: true
    Cedula?: true
    Nombres?: true
    Apellidos?: true
    Telefono?: true
    Email?: true
    Direccion?: true
  }

  export type Tb_clienteMaxAggregateInputType = {
    ID_Cliente?: true
    Cedula?: true
    Nombres?: true
    Apellidos?: true
    Telefono?: true
    Email?: true
    Direccion?: true
  }

  export type Tb_clienteCountAggregateInputType = {
    ID_Cliente?: true
    Cedula?: true
    Nombres?: true
    Apellidos?: true
    Telefono?: true
    Email?: true
    Direccion?: true
    _all?: true
  }

  export type Tb_clienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_cliente to aggregate.
     */
    where?: tb_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_clientes to fetch.
     */
    orderBy?: tb_clienteOrderByWithRelationInput | tb_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_clientes
    **/
    _count?: true | Tb_clienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_clienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_clienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_clienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_clienteMaxAggregateInputType
  }

  export type GetTb_clienteAggregateType<T extends Tb_clienteAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_cliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_cliente[P]>
      : GetScalarType<T[P], AggregateTb_cliente[P]>
  }




  export type tb_clienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_clienteWhereInput
    orderBy?: tb_clienteOrderByWithAggregationInput | tb_clienteOrderByWithAggregationInput[]
    by: Tb_clienteScalarFieldEnum[] | Tb_clienteScalarFieldEnum
    having?: tb_clienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_clienteCountAggregateInputType | true
    _avg?: Tb_clienteAvgAggregateInputType
    _sum?: Tb_clienteSumAggregateInputType
    _min?: Tb_clienteMinAggregateInputType
    _max?: Tb_clienteMaxAggregateInputType
  }

  export type Tb_clienteGroupByOutputType = {
    ID_Cliente: number
    Cedula: string | null
    Nombres: string | null
    Apellidos: string | null
    Telefono: string | null
    Email: string | null
    Direccion: string | null
    _count: Tb_clienteCountAggregateOutputType | null
    _avg: Tb_clienteAvgAggregateOutputType | null
    _sum: Tb_clienteSumAggregateOutputType | null
    _min: Tb_clienteMinAggregateOutputType | null
    _max: Tb_clienteMaxAggregateOutputType | null
  }

  type GetTb_clienteGroupByPayload<T extends tb_clienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_clienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_clienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_clienteGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_clienteGroupByOutputType[P]>
        }
      >
    >


  export type tb_clienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Cliente?: boolean
    Cedula?: boolean
    Nombres?: boolean
    Apellidos?: boolean
    Telefono?: boolean
    Email?: boolean
    Direccion?: boolean
    equipos?: boolean | tb_cliente$equiposArgs<ExtArgs>
    reparaciones?: boolean | tb_cliente$reparacionesArgs<ExtArgs>
    usuarios?: boolean | tb_cliente$usuariosArgs<ExtArgs>
    tb_notificacion?: boolean | tb_cliente$tb_notificacionArgs<ExtArgs>
    _count?: boolean | Tb_clienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_cliente"]>



  export type tb_clienteSelectScalar = {
    ID_Cliente?: boolean
    Cedula?: boolean
    Nombres?: boolean
    Apellidos?: boolean
    Telefono?: boolean
    Email?: boolean
    Direccion?: boolean
  }

  export type tb_clienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Cliente" | "Cedula" | "Nombres" | "Apellidos" | "Telefono" | "Email" | "Direccion", ExtArgs["result"]["tb_cliente"]>
  export type tb_clienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipos?: boolean | tb_cliente$equiposArgs<ExtArgs>
    reparaciones?: boolean | tb_cliente$reparacionesArgs<ExtArgs>
    usuarios?: boolean | tb_cliente$usuariosArgs<ExtArgs>
    tb_notificacion?: boolean | tb_cliente$tb_notificacionArgs<ExtArgs>
    _count?: boolean | Tb_clienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tb_clientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_cliente"
    objects: {
      equipos: Prisma.$tb_equipoPayload<ExtArgs>[]
      reparaciones: Prisma.$tb_reparacionPayload<ExtArgs>[]
      usuarios: Prisma.$tb_usuarioPayload<ExtArgs>[]
      tb_notificacion: Prisma.$tb_notificacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Cliente: number
      Cedula: string | null
      Nombres: string | null
      Apellidos: string | null
      Telefono: string | null
      Email: string | null
      Direccion: string | null
    }, ExtArgs["result"]["tb_cliente"]>
    composites: {}
  }

  type tb_clienteGetPayload<S extends boolean | null | undefined | tb_clienteDefaultArgs> = $Result.GetResult<Prisma.$tb_clientePayload, S>

  type tb_clienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_clienteCountAggregateInputType | true
    }

  export interface tb_clienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_cliente'], meta: { name: 'tb_cliente' } }
    /**
     * Find zero or one Tb_cliente that matches the filter.
     * @param {tb_clienteFindUniqueArgs} args - Arguments to find a Tb_cliente
     * @example
     * // Get one Tb_cliente
     * const tb_cliente = await prisma.tb_cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_clienteFindUniqueArgs>(args: SelectSubset<T, tb_clienteFindUniqueArgs<ExtArgs>>): Prisma__tb_clienteClient<$Result.GetResult<Prisma.$tb_clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_clienteFindUniqueOrThrowArgs} args - Arguments to find a Tb_cliente
     * @example
     * // Get one Tb_cliente
     * const tb_cliente = await prisma.tb_cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_clienteFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_clienteClient<$Result.GetResult<Prisma.$tb_clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_clienteFindFirstArgs} args - Arguments to find a Tb_cliente
     * @example
     * // Get one Tb_cliente
     * const tb_cliente = await prisma.tb_cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_clienteFindFirstArgs>(args?: SelectSubset<T, tb_clienteFindFirstArgs<ExtArgs>>): Prisma__tb_clienteClient<$Result.GetResult<Prisma.$tb_clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_clienteFindFirstOrThrowArgs} args - Arguments to find a Tb_cliente
     * @example
     * // Get one Tb_cliente
     * const tb_cliente = await prisma.tb_cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_clienteFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_clienteClient<$Result.GetResult<Prisma.$tb_clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_clientes
     * const tb_clientes = await prisma.tb_cliente.findMany()
     * 
     * // Get first 10 Tb_clientes
     * const tb_clientes = await prisma.tb_cliente.findMany({ take: 10 })
     * 
     * // Only select the `ID_Cliente`
     * const tb_clienteWithID_ClienteOnly = await prisma.tb_cliente.findMany({ select: { ID_Cliente: true } })
     * 
     */
    findMany<T extends tb_clienteFindManyArgs>(args?: SelectSubset<T, tb_clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_cliente.
     * @param {tb_clienteCreateArgs} args - Arguments to create a Tb_cliente.
     * @example
     * // Create one Tb_cliente
     * const Tb_cliente = await prisma.tb_cliente.create({
     *   data: {
     *     // ... data to create a Tb_cliente
     *   }
     * })
     * 
     */
    create<T extends tb_clienteCreateArgs>(args: SelectSubset<T, tb_clienteCreateArgs<ExtArgs>>): Prisma__tb_clienteClient<$Result.GetResult<Prisma.$tb_clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_clientes.
     * @param {tb_clienteCreateManyArgs} args - Arguments to create many Tb_clientes.
     * @example
     * // Create many Tb_clientes
     * const tb_cliente = await prisma.tb_cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_clienteCreateManyArgs>(args?: SelectSubset<T, tb_clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_cliente.
     * @param {tb_clienteDeleteArgs} args - Arguments to delete one Tb_cliente.
     * @example
     * // Delete one Tb_cliente
     * const Tb_cliente = await prisma.tb_cliente.delete({
     *   where: {
     *     // ... filter to delete one Tb_cliente
     *   }
     * })
     * 
     */
    delete<T extends tb_clienteDeleteArgs>(args: SelectSubset<T, tb_clienteDeleteArgs<ExtArgs>>): Prisma__tb_clienteClient<$Result.GetResult<Prisma.$tb_clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_cliente.
     * @param {tb_clienteUpdateArgs} args - Arguments to update one Tb_cliente.
     * @example
     * // Update one Tb_cliente
     * const tb_cliente = await prisma.tb_cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_clienteUpdateArgs>(args: SelectSubset<T, tb_clienteUpdateArgs<ExtArgs>>): Prisma__tb_clienteClient<$Result.GetResult<Prisma.$tb_clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_clientes.
     * @param {tb_clienteDeleteManyArgs} args - Arguments to filter Tb_clientes to delete.
     * @example
     * // Delete a few Tb_clientes
     * const { count } = await prisma.tb_cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_clienteDeleteManyArgs>(args?: SelectSubset<T, tb_clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_clientes
     * const tb_cliente = await prisma.tb_cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_clienteUpdateManyArgs>(args: SelectSubset<T, tb_clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_cliente.
     * @param {tb_clienteUpsertArgs} args - Arguments to update or create a Tb_cliente.
     * @example
     * // Update or create a Tb_cliente
     * const tb_cliente = await prisma.tb_cliente.upsert({
     *   create: {
     *     // ... data to create a Tb_cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_cliente we want to update
     *   }
     * })
     */
    upsert<T extends tb_clienteUpsertArgs>(args: SelectSubset<T, tb_clienteUpsertArgs<ExtArgs>>): Prisma__tb_clienteClient<$Result.GetResult<Prisma.$tb_clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_clienteCountArgs} args - Arguments to filter Tb_clientes to count.
     * @example
     * // Count the number of Tb_clientes
     * const count = await prisma.tb_cliente.count({
     *   where: {
     *     // ... the filter for the Tb_clientes we want to count
     *   }
     * })
    **/
    count<T extends tb_clienteCountArgs>(
      args?: Subset<T, tb_clienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_clienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_clienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_clienteAggregateArgs>(args: Subset<T, Tb_clienteAggregateArgs>): Prisma.PrismaPromise<GetTb_clienteAggregateType<T>>

    /**
     * Group by Tb_cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_clienteGroupByArgs} args - Group by arguments.
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
      T extends tb_clienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_clienteGroupByArgs['orderBy'] }
        : { orderBy?: tb_clienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_clienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_cliente model
   */
  readonly fields: tb_clienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_clienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipos<T extends tb_cliente$equiposArgs<ExtArgs> = {}>(args?: Subset<T, tb_cliente$equiposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_equipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reparaciones<T extends tb_cliente$reparacionesArgs<ExtArgs> = {}>(args?: Subset<T, tb_cliente$reparacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends tb_cliente$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, tb_cliente$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tb_notificacion<T extends tb_cliente$tb_notificacionArgs<ExtArgs> = {}>(args?: Subset<T, tb_cliente$tb_notificacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tb_cliente model
   */
  interface tb_clienteFieldRefs {
    readonly ID_Cliente: FieldRef<"tb_cliente", 'Int'>
    readonly Cedula: FieldRef<"tb_cliente", 'String'>
    readonly Nombres: FieldRef<"tb_cliente", 'String'>
    readonly Apellidos: FieldRef<"tb_cliente", 'String'>
    readonly Telefono: FieldRef<"tb_cliente", 'String'>
    readonly Email: FieldRef<"tb_cliente", 'String'>
    readonly Direccion: FieldRef<"tb_cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_cliente findUnique
   */
  export type tb_clienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
    /**
     * Filter, which tb_cliente to fetch.
     */
    where: tb_clienteWhereUniqueInput
  }

  /**
   * tb_cliente findUniqueOrThrow
   */
  export type tb_clienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
    /**
     * Filter, which tb_cliente to fetch.
     */
    where: tb_clienteWhereUniqueInput
  }

  /**
   * tb_cliente findFirst
   */
  export type tb_clienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
    /**
     * Filter, which tb_cliente to fetch.
     */
    where?: tb_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_clientes to fetch.
     */
    orderBy?: tb_clienteOrderByWithRelationInput | tb_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_clientes.
     */
    cursor?: tb_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_clientes.
     */
    distinct?: Tb_clienteScalarFieldEnum | Tb_clienteScalarFieldEnum[]
  }

  /**
   * tb_cliente findFirstOrThrow
   */
  export type tb_clienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
    /**
     * Filter, which tb_cliente to fetch.
     */
    where?: tb_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_clientes to fetch.
     */
    orderBy?: tb_clienteOrderByWithRelationInput | tb_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_clientes.
     */
    cursor?: tb_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_clientes.
     */
    distinct?: Tb_clienteScalarFieldEnum | Tb_clienteScalarFieldEnum[]
  }

  /**
   * tb_cliente findMany
   */
  export type tb_clienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
    /**
     * Filter, which tb_clientes to fetch.
     */
    where?: tb_clienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_clientes to fetch.
     */
    orderBy?: tb_clienteOrderByWithRelationInput | tb_clienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_clientes.
     */
    cursor?: tb_clienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_clientes.
     */
    skip?: number
    distinct?: Tb_clienteScalarFieldEnum | Tb_clienteScalarFieldEnum[]
  }

  /**
   * tb_cliente create
   */
  export type tb_clienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_cliente.
     */
    data?: XOR<tb_clienteCreateInput, tb_clienteUncheckedCreateInput>
  }

  /**
   * tb_cliente createMany
   */
  export type tb_clienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_clientes.
     */
    data: tb_clienteCreateManyInput | tb_clienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_cliente update
   */
  export type tb_clienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_cliente.
     */
    data: XOR<tb_clienteUpdateInput, tb_clienteUncheckedUpdateInput>
    /**
     * Choose, which tb_cliente to update.
     */
    where: tb_clienteWhereUniqueInput
  }

  /**
   * tb_cliente updateMany
   */
  export type tb_clienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_clientes.
     */
    data: XOR<tb_clienteUpdateManyMutationInput, tb_clienteUncheckedUpdateManyInput>
    /**
     * Filter which tb_clientes to update
     */
    where?: tb_clienteWhereInput
    /**
     * Limit how many tb_clientes to update.
     */
    limit?: number
  }

  /**
   * tb_cliente upsert
   */
  export type tb_clienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_cliente to update in case it exists.
     */
    where: tb_clienteWhereUniqueInput
    /**
     * In case the tb_cliente found by the `where` argument doesn't exist, create a new tb_cliente with this data.
     */
    create: XOR<tb_clienteCreateInput, tb_clienteUncheckedCreateInput>
    /**
     * In case the tb_cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_clienteUpdateInput, tb_clienteUncheckedUpdateInput>
  }

  /**
   * tb_cliente delete
   */
  export type tb_clienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
    /**
     * Filter which tb_cliente to delete.
     */
    where: tb_clienteWhereUniqueInput
  }

  /**
   * tb_cliente deleteMany
   */
  export type tb_clienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_clientes to delete
     */
    where?: tb_clienteWhereInput
    /**
     * Limit how many tb_clientes to delete.
     */
    limit?: number
  }

  /**
   * tb_cliente.equipos
   */
  export type tb_cliente$equiposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_equipo
     */
    select?: tb_equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_equipo
     */
    omit?: tb_equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_equipoInclude<ExtArgs> | null
    where?: tb_equipoWhereInput
    orderBy?: tb_equipoOrderByWithRelationInput | tb_equipoOrderByWithRelationInput[]
    cursor?: tb_equipoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_equipoScalarFieldEnum | Tb_equipoScalarFieldEnum[]
  }

  /**
   * tb_cliente.reparaciones
   */
  export type tb_cliente$reparacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    where?: tb_reparacionWhereInput
    orderBy?: tb_reparacionOrderByWithRelationInput | tb_reparacionOrderByWithRelationInput[]
    cursor?: tb_reparacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_reparacionScalarFieldEnum | Tb_reparacionScalarFieldEnum[]
  }

  /**
   * tb_cliente.usuarios
   */
  export type tb_cliente$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
    where?: tb_usuarioWhereInput
    orderBy?: tb_usuarioOrderByWithRelationInput | tb_usuarioOrderByWithRelationInput[]
    cursor?: tb_usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_usuarioScalarFieldEnum | Tb_usuarioScalarFieldEnum[]
  }

  /**
   * tb_cliente.tb_notificacion
   */
  export type tb_cliente$tb_notificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_notificacion
     */
    select?: tb_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_notificacion
     */
    omit?: tb_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_notificacionInclude<ExtArgs> | null
    where?: tb_notificacionWhereInput
    orderBy?: tb_notificacionOrderByWithRelationInput | tb_notificacionOrderByWithRelationInput[]
    cursor?: tb_notificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_notificacionScalarFieldEnum | Tb_notificacionScalarFieldEnum[]
  }

  /**
   * tb_cliente without action
   */
  export type tb_clienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
  }


  /**
   * Model tb_detalle_reparacion_repuesto
   */

  export type AggregateTb_detalle_reparacion_repuesto = {
    _count: Tb_detalle_reparacion_repuestoCountAggregateOutputType | null
    _avg: Tb_detalle_reparacion_repuestoAvgAggregateOutputType | null
    _sum: Tb_detalle_reparacion_repuestoSumAggregateOutputType | null
    _min: Tb_detalle_reparacion_repuestoMinAggregateOutputType | null
    _max: Tb_detalle_reparacion_repuestoMaxAggregateOutputType | null
  }

  export type Tb_detalle_reparacion_repuestoAvgAggregateOutputType = {
    ID_Detalle: number | null
    ID_Reparacion: number | null
    ID_Repuesto: number | null
    Cantidad: number | null
    Subtotal: Decimal | null
  }

  export type Tb_detalle_reparacion_repuestoSumAggregateOutputType = {
    ID_Detalle: number | null
    ID_Reparacion: number | null
    ID_Repuesto: number | null
    Cantidad: number | null
    Subtotal: Decimal | null
  }

  export type Tb_detalle_reparacion_repuestoMinAggregateOutputType = {
    ID_Detalle: number | null
    ID_Reparacion: number | null
    ID_Repuesto: number | null
    Cantidad: number | null
    Subtotal: Decimal | null
  }

  export type Tb_detalle_reparacion_repuestoMaxAggregateOutputType = {
    ID_Detalle: number | null
    ID_Reparacion: number | null
    ID_Repuesto: number | null
    Cantidad: number | null
    Subtotal: Decimal | null
  }

  export type Tb_detalle_reparacion_repuestoCountAggregateOutputType = {
    ID_Detalle: number
    ID_Reparacion: number
    ID_Repuesto: number
    Cantidad: number
    Subtotal: number
    _all: number
  }


  export type Tb_detalle_reparacion_repuestoAvgAggregateInputType = {
    ID_Detalle?: true
    ID_Reparacion?: true
    ID_Repuesto?: true
    Cantidad?: true
    Subtotal?: true
  }

  export type Tb_detalle_reparacion_repuestoSumAggregateInputType = {
    ID_Detalle?: true
    ID_Reparacion?: true
    ID_Repuesto?: true
    Cantidad?: true
    Subtotal?: true
  }

  export type Tb_detalle_reparacion_repuestoMinAggregateInputType = {
    ID_Detalle?: true
    ID_Reparacion?: true
    ID_Repuesto?: true
    Cantidad?: true
    Subtotal?: true
  }

  export type Tb_detalle_reparacion_repuestoMaxAggregateInputType = {
    ID_Detalle?: true
    ID_Reparacion?: true
    ID_Repuesto?: true
    Cantidad?: true
    Subtotal?: true
  }

  export type Tb_detalle_reparacion_repuestoCountAggregateInputType = {
    ID_Detalle?: true
    ID_Reparacion?: true
    ID_Repuesto?: true
    Cantidad?: true
    Subtotal?: true
    _all?: true
  }

  export type Tb_detalle_reparacion_repuestoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_detalle_reparacion_repuesto to aggregate.
     */
    where?: tb_detalle_reparacion_repuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_detalle_reparacion_repuestos to fetch.
     */
    orderBy?: tb_detalle_reparacion_repuestoOrderByWithRelationInput | tb_detalle_reparacion_repuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_detalle_reparacion_repuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_detalle_reparacion_repuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_detalle_reparacion_repuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_detalle_reparacion_repuestos
    **/
    _count?: true | Tb_detalle_reparacion_repuestoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_detalle_reparacion_repuestoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_detalle_reparacion_repuestoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_detalle_reparacion_repuestoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_detalle_reparacion_repuestoMaxAggregateInputType
  }

  export type GetTb_detalle_reparacion_repuestoAggregateType<T extends Tb_detalle_reparacion_repuestoAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_detalle_reparacion_repuesto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_detalle_reparacion_repuesto[P]>
      : GetScalarType<T[P], AggregateTb_detalle_reparacion_repuesto[P]>
  }




  export type tb_detalle_reparacion_repuestoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_detalle_reparacion_repuestoWhereInput
    orderBy?: tb_detalle_reparacion_repuestoOrderByWithAggregationInput | tb_detalle_reparacion_repuestoOrderByWithAggregationInput[]
    by: Tb_detalle_reparacion_repuestoScalarFieldEnum[] | Tb_detalle_reparacion_repuestoScalarFieldEnum
    having?: tb_detalle_reparacion_repuestoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_detalle_reparacion_repuestoCountAggregateInputType | true
    _avg?: Tb_detalle_reparacion_repuestoAvgAggregateInputType
    _sum?: Tb_detalle_reparacion_repuestoSumAggregateInputType
    _min?: Tb_detalle_reparacion_repuestoMinAggregateInputType
    _max?: Tb_detalle_reparacion_repuestoMaxAggregateInputType
  }

  export type Tb_detalle_reparacion_repuestoGroupByOutputType = {
    ID_Detalle: number
    ID_Reparacion: number | null
    ID_Repuesto: number | null
    Cantidad: number | null
    Subtotal: Decimal | null
    _count: Tb_detalle_reparacion_repuestoCountAggregateOutputType | null
    _avg: Tb_detalle_reparacion_repuestoAvgAggregateOutputType | null
    _sum: Tb_detalle_reparacion_repuestoSumAggregateOutputType | null
    _min: Tb_detalle_reparacion_repuestoMinAggregateOutputType | null
    _max: Tb_detalle_reparacion_repuestoMaxAggregateOutputType | null
  }

  type GetTb_detalle_reparacion_repuestoGroupByPayload<T extends tb_detalle_reparacion_repuestoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_detalle_reparacion_repuestoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_detalle_reparacion_repuestoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_detalle_reparacion_repuestoGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_detalle_reparacion_repuestoGroupByOutputType[P]>
        }
      >
    >


  export type tb_detalle_reparacion_repuestoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Detalle?: boolean
    ID_Reparacion?: boolean
    ID_Repuesto?: boolean
    Cantidad?: boolean
    Subtotal?: boolean
    reparacion?: boolean | tb_detalle_reparacion_repuesto$reparacionArgs<ExtArgs>
    repuesto?: boolean | tb_detalle_reparacion_repuesto$repuestoArgs<ExtArgs>
  }, ExtArgs["result"]["tb_detalle_reparacion_repuesto"]>



  export type tb_detalle_reparacion_repuestoSelectScalar = {
    ID_Detalle?: boolean
    ID_Reparacion?: boolean
    ID_Repuesto?: boolean
    Cantidad?: boolean
    Subtotal?: boolean
  }

  export type tb_detalle_reparacion_repuestoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Detalle" | "ID_Reparacion" | "ID_Repuesto" | "Cantidad" | "Subtotal", ExtArgs["result"]["tb_detalle_reparacion_repuesto"]>
  export type tb_detalle_reparacion_repuestoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparacion?: boolean | tb_detalle_reparacion_repuesto$reparacionArgs<ExtArgs>
    repuesto?: boolean | tb_detalle_reparacion_repuesto$repuestoArgs<ExtArgs>
  }

  export type $tb_detalle_reparacion_repuestoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_detalle_reparacion_repuesto"
    objects: {
      reparacion: Prisma.$tb_reparacionPayload<ExtArgs> | null
      repuesto: Prisma.$tb_repuestoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Detalle: number
      ID_Reparacion: number | null
      ID_Repuesto: number | null
      Cantidad: number | null
      Subtotal: Prisma.Decimal | null
    }, ExtArgs["result"]["tb_detalle_reparacion_repuesto"]>
    composites: {}
  }

  type tb_detalle_reparacion_repuestoGetPayload<S extends boolean | null | undefined | tb_detalle_reparacion_repuestoDefaultArgs> = $Result.GetResult<Prisma.$tb_detalle_reparacion_repuestoPayload, S>

  type tb_detalle_reparacion_repuestoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_detalle_reparacion_repuestoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_detalle_reparacion_repuestoCountAggregateInputType | true
    }

  export interface tb_detalle_reparacion_repuestoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_detalle_reparacion_repuesto'], meta: { name: 'tb_detalle_reparacion_repuesto' } }
    /**
     * Find zero or one Tb_detalle_reparacion_repuesto that matches the filter.
     * @param {tb_detalle_reparacion_repuestoFindUniqueArgs} args - Arguments to find a Tb_detalle_reparacion_repuesto
     * @example
     * // Get one Tb_detalle_reparacion_repuesto
     * const tb_detalle_reparacion_repuesto = await prisma.tb_detalle_reparacion_repuesto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_detalle_reparacion_repuestoFindUniqueArgs>(args: SelectSubset<T, tb_detalle_reparacion_repuestoFindUniqueArgs<ExtArgs>>): Prisma__tb_detalle_reparacion_repuestoClient<$Result.GetResult<Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_detalle_reparacion_repuesto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_detalle_reparacion_repuestoFindUniqueOrThrowArgs} args - Arguments to find a Tb_detalle_reparacion_repuesto
     * @example
     * // Get one Tb_detalle_reparacion_repuesto
     * const tb_detalle_reparacion_repuesto = await prisma.tb_detalle_reparacion_repuesto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_detalle_reparacion_repuestoFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_detalle_reparacion_repuestoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_detalle_reparacion_repuestoClient<$Result.GetResult<Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_detalle_reparacion_repuesto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_detalle_reparacion_repuestoFindFirstArgs} args - Arguments to find a Tb_detalle_reparacion_repuesto
     * @example
     * // Get one Tb_detalle_reparacion_repuesto
     * const tb_detalle_reparacion_repuesto = await prisma.tb_detalle_reparacion_repuesto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_detalle_reparacion_repuestoFindFirstArgs>(args?: SelectSubset<T, tb_detalle_reparacion_repuestoFindFirstArgs<ExtArgs>>): Prisma__tb_detalle_reparacion_repuestoClient<$Result.GetResult<Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_detalle_reparacion_repuesto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_detalle_reparacion_repuestoFindFirstOrThrowArgs} args - Arguments to find a Tb_detalle_reparacion_repuesto
     * @example
     * // Get one Tb_detalle_reparacion_repuesto
     * const tb_detalle_reparacion_repuesto = await prisma.tb_detalle_reparacion_repuesto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_detalle_reparacion_repuestoFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_detalle_reparacion_repuestoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_detalle_reparacion_repuestoClient<$Result.GetResult<Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_detalle_reparacion_repuestos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_detalle_reparacion_repuestoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_detalle_reparacion_repuestos
     * const tb_detalle_reparacion_repuestos = await prisma.tb_detalle_reparacion_repuesto.findMany()
     * 
     * // Get first 10 Tb_detalle_reparacion_repuestos
     * const tb_detalle_reparacion_repuestos = await prisma.tb_detalle_reparacion_repuesto.findMany({ take: 10 })
     * 
     * // Only select the `ID_Detalle`
     * const tb_detalle_reparacion_repuestoWithID_DetalleOnly = await prisma.tb_detalle_reparacion_repuesto.findMany({ select: { ID_Detalle: true } })
     * 
     */
    findMany<T extends tb_detalle_reparacion_repuestoFindManyArgs>(args?: SelectSubset<T, tb_detalle_reparacion_repuestoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_detalle_reparacion_repuesto.
     * @param {tb_detalle_reparacion_repuestoCreateArgs} args - Arguments to create a Tb_detalle_reparacion_repuesto.
     * @example
     * // Create one Tb_detalle_reparacion_repuesto
     * const Tb_detalle_reparacion_repuesto = await prisma.tb_detalle_reparacion_repuesto.create({
     *   data: {
     *     // ... data to create a Tb_detalle_reparacion_repuesto
     *   }
     * })
     * 
     */
    create<T extends tb_detalle_reparacion_repuestoCreateArgs>(args: SelectSubset<T, tb_detalle_reparacion_repuestoCreateArgs<ExtArgs>>): Prisma__tb_detalle_reparacion_repuestoClient<$Result.GetResult<Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_detalle_reparacion_repuestos.
     * @param {tb_detalle_reparacion_repuestoCreateManyArgs} args - Arguments to create many Tb_detalle_reparacion_repuestos.
     * @example
     * // Create many Tb_detalle_reparacion_repuestos
     * const tb_detalle_reparacion_repuesto = await prisma.tb_detalle_reparacion_repuesto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_detalle_reparacion_repuestoCreateManyArgs>(args?: SelectSubset<T, tb_detalle_reparacion_repuestoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_detalle_reparacion_repuesto.
     * @param {tb_detalle_reparacion_repuestoDeleteArgs} args - Arguments to delete one Tb_detalle_reparacion_repuesto.
     * @example
     * // Delete one Tb_detalle_reparacion_repuesto
     * const Tb_detalle_reparacion_repuesto = await prisma.tb_detalle_reparacion_repuesto.delete({
     *   where: {
     *     // ... filter to delete one Tb_detalle_reparacion_repuesto
     *   }
     * })
     * 
     */
    delete<T extends tb_detalle_reparacion_repuestoDeleteArgs>(args: SelectSubset<T, tb_detalle_reparacion_repuestoDeleteArgs<ExtArgs>>): Prisma__tb_detalle_reparacion_repuestoClient<$Result.GetResult<Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_detalle_reparacion_repuesto.
     * @param {tb_detalle_reparacion_repuestoUpdateArgs} args - Arguments to update one Tb_detalle_reparacion_repuesto.
     * @example
     * // Update one Tb_detalle_reparacion_repuesto
     * const tb_detalle_reparacion_repuesto = await prisma.tb_detalle_reparacion_repuesto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_detalle_reparacion_repuestoUpdateArgs>(args: SelectSubset<T, tb_detalle_reparacion_repuestoUpdateArgs<ExtArgs>>): Prisma__tb_detalle_reparacion_repuestoClient<$Result.GetResult<Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_detalle_reparacion_repuestos.
     * @param {tb_detalle_reparacion_repuestoDeleteManyArgs} args - Arguments to filter Tb_detalle_reparacion_repuestos to delete.
     * @example
     * // Delete a few Tb_detalle_reparacion_repuestos
     * const { count } = await prisma.tb_detalle_reparacion_repuesto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_detalle_reparacion_repuestoDeleteManyArgs>(args?: SelectSubset<T, tb_detalle_reparacion_repuestoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_detalle_reparacion_repuestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_detalle_reparacion_repuestoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_detalle_reparacion_repuestos
     * const tb_detalle_reparacion_repuesto = await prisma.tb_detalle_reparacion_repuesto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_detalle_reparacion_repuestoUpdateManyArgs>(args: SelectSubset<T, tb_detalle_reparacion_repuestoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_detalle_reparacion_repuesto.
     * @param {tb_detalle_reparacion_repuestoUpsertArgs} args - Arguments to update or create a Tb_detalle_reparacion_repuesto.
     * @example
     * // Update or create a Tb_detalle_reparacion_repuesto
     * const tb_detalle_reparacion_repuesto = await prisma.tb_detalle_reparacion_repuesto.upsert({
     *   create: {
     *     // ... data to create a Tb_detalle_reparacion_repuesto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_detalle_reparacion_repuesto we want to update
     *   }
     * })
     */
    upsert<T extends tb_detalle_reparacion_repuestoUpsertArgs>(args: SelectSubset<T, tb_detalle_reparacion_repuestoUpsertArgs<ExtArgs>>): Prisma__tb_detalle_reparacion_repuestoClient<$Result.GetResult<Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_detalle_reparacion_repuestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_detalle_reparacion_repuestoCountArgs} args - Arguments to filter Tb_detalle_reparacion_repuestos to count.
     * @example
     * // Count the number of Tb_detalle_reparacion_repuestos
     * const count = await prisma.tb_detalle_reparacion_repuesto.count({
     *   where: {
     *     // ... the filter for the Tb_detalle_reparacion_repuestos we want to count
     *   }
     * })
    **/
    count<T extends tb_detalle_reparacion_repuestoCountArgs>(
      args?: Subset<T, tb_detalle_reparacion_repuestoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_detalle_reparacion_repuestoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_detalle_reparacion_repuesto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_detalle_reparacion_repuestoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_detalle_reparacion_repuestoAggregateArgs>(args: Subset<T, Tb_detalle_reparacion_repuestoAggregateArgs>): Prisma.PrismaPromise<GetTb_detalle_reparacion_repuestoAggregateType<T>>

    /**
     * Group by Tb_detalle_reparacion_repuesto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_detalle_reparacion_repuestoGroupByArgs} args - Group by arguments.
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
      T extends tb_detalle_reparacion_repuestoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_detalle_reparacion_repuestoGroupByArgs['orderBy'] }
        : { orderBy?: tb_detalle_reparacion_repuestoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_detalle_reparacion_repuestoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_detalle_reparacion_repuestoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_detalle_reparacion_repuesto model
   */
  readonly fields: tb_detalle_reparacion_repuestoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_detalle_reparacion_repuesto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_detalle_reparacion_repuestoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reparacion<T extends tb_detalle_reparacion_repuesto$reparacionArgs<ExtArgs> = {}>(args?: Subset<T, tb_detalle_reparacion_repuesto$reparacionArgs<ExtArgs>>): Prisma__tb_reparacionClient<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    repuesto<T extends tb_detalle_reparacion_repuesto$repuestoArgs<ExtArgs> = {}>(args?: Subset<T, tb_detalle_reparacion_repuesto$repuestoArgs<ExtArgs>>): Prisma__tb_repuestoClient<$Result.GetResult<Prisma.$tb_repuestoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tb_detalle_reparacion_repuesto model
   */
  interface tb_detalle_reparacion_repuestoFieldRefs {
    readonly ID_Detalle: FieldRef<"tb_detalle_reparacion_repuesto", 'Int'>
    readonly ID_Reparacion: FieldRef<"tb_detalle_reparacion_repuesto", 'Int'>
    readonly ID_Repuesto: FieldRef<"tb_detalle_reparacion_repuesto", 'Int'>
    readonly Cantidad: FieldRef<"tb_detalle_reparacion_repuesto", 'Int'>
    readonly Subtotal: FieldRef<"tb_detalle_reparacion_repuesto", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * tb_detalle_reparacion_repuesto findUnique
   */
  export type tb_detalle_reparacion_repuestoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_detalle_reparacion_repuesto
     */
    select?: tb_detalle_reparacion_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_detalle_reparacion_repuesto
     */
    omit?: tb_detalle_reparacion_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_detalle_reparacion_repuestoInclude<ExtArgs> | null
    /**
     * Filter, which tb_detalle_reparacion_repuesto to fetch.
     */
    where: tb_detalle_reparacion_repuestoWhereUniqueInput
  }

  /**
   * tb_detalle_reparacion_repuesto findUniqueOrThrow
   */
  export type tb_detalle_reparacion_repuestoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_detalle_reparacion_repuesto
     */
    select?: tb_detalle_reparacion_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_detalle_reparacion_repuesto
     */
    omit?: tb_detalle_reparacion_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_detalle_reparacion_repuestoInclude<ExtArgs> | null
    /**
     * Filter, which tb_detalle_reparacion_repuesto to fetch.
     */
    where: tb_detalle_reparacion_repuestoWhereUniqueInput
  }

  /**
   * tb_detalle_reparacion_repuesto findFirst
   */
  export type tb_detalle_reparacion_repuestoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_detalle_reparacion_repuesto
     */
    select?: tb_detalle_reparacion_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_detalle_reparacion_repuesto
     */
    omit?: tb_detalle_reparacion_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_detalle_reparacion_repuestoInclude<ExtArgs> | null
    /**
     * Filter, which tb_detalle_reparacion_repuesto to fetch.
     */
    where?: tb_detalle_reparacion_repuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_detalle_reparacion_repuestos to fetch.
     */
    orderBy?: tb_detalle_reparacion_repuestoOrderByWithRelationInput | tb_detalle_reparacion_repuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_detalle_reparacion_repuestos.
     */
    cursor?: tb_detalle_reparacion_repuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_detalle_reparacion_repuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_detalle_reparacion_repuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_detalle_reparacion_repuestos.
     */
    distinct?: Tb_detalle_reparacion_repuestoScalarFieldEnum | Tb_detalle_reparacion_repuestoScalarFieldEnum[]
  }

  /**
   * tb_detalle_reparacion_repuesto findFirstOrThrow
   */
  export type tb_detalle_reparacion_repuestoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_detalle_reparacion_repuesto
     */
    select?: tb_detalle_reparacion_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_detalle_reparacion_repuesto
     */
    omit?: tb_detalle_reparacion_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_detalle_reparacion_repuestoInclude<ExtArgs> | null
    /**
     * Filter, which tb_detalle_reparacion_repuesto to fetch.
     */
    where?: tb_detalle_reparacion_repuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_detalle_reparacion_repuestos to fetch.
     */
    orderBy?: tb_detalle_reparacion_repuestoOrderByWithRelationInput | tb_detalle_reparacion_repuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_detalle_reparacion_repuestos.
     */
    cursor?: tb_detalle_reparacion_repuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_detalle_reparacion_repuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_detalle_reparacion_repuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_detalle_reparacion_repuestos.
     */
    distinct?: Tb_detalle_reparacion_repuestoScalarFieldEnum | Tb_detalle_reparacion_repuestoScalarFieldEnum[]
  }

  /**
   * tb_detalle_reparacion_repuesto findMany
   */
  export type tb_detalle_reparacion_repuestoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_detalle_reparacion_repuesto
     */
    select?: tb_detalle_reparacion_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_detalle_reparacion_repuesto
     */
    omit?: tb_detalle_reparacion_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_detalle_reparacion_repuestoInclude<ExtArgs> | null
    /**
     * Filter, which tb_detalle_reparacion_repuestos to fetch.
     */
    where?: tb_detalle_reparacion_repuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_detalle_reparacion_repuestos to fetch.
     */
    orderBy?: tb_detalle_reparacion_repuestoOrderByWithRelationInput | tb_detalle_reparacion_repuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_detalle_reparacion_repuestos.
     */
    cursor?: tb_detalle_reparacion_repuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_detalle_reparacion_repuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_detalle_reparacion_repuestos.
     */
    skip?: number
    distinct?: Tb_detalle_reparacion_repuestoScalarFieldEnum | Tb_detalle_reparacion_repuestoScalarFieldEnum[]
  }

  /**
   * tb_detalle_reparacion_repuesto create
   */
  export type tb_detalle_reparacion_repuestoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_detalle_reparacion_repuesto
     */
    select?: tb_detalle_reparacion_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_detalle_reparacion_repuesto
     */
    omit?: tb_detalle_reparacion_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_detalle_reparacion_repuestoInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_detalle_reparacion_repuesto.
     */
    data?: XOR<tb_detalle_reparacion_repuestoCreateInput, tb_detalle_reparacion_repuestoUncheckedCreateInput>
  }

  /**
   * tb_detalle_reparacion_repuesto createMany
   */
  export type tb_detalle_reparacion_repuestoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_detalle_reparacion_repuestos.
     */
    data: tb_detalle_reparacion_repuestoCreateManyInput | tb_detalle_reparacion_repuestoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_detalle_reparacion_repuesto update
   */
  export type tb_detalle_reparacion_repuestoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_detalle_reparacion_repuesto
     */
    select?: tb_detalle_reparacion_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_detalle_reparacion_repuesto
     */
    omit?: tb_detalle_reparacion_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_detalle_reparacion_repuestoInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_detalle_reparacion_repuesto.
     */
    data: XOR<tb_detalle_reparacion_repuestoUpdateInput, tb_detalle_reparacion_repuestoUncheckedUpdateInput>
    /**
     * Choose, which tb_detalle_reparacion_repuesto to update.
     */
    where: tb_detalle_reparacion_repuestoWhereUniqueInput
  }

  /**
   * tb_detalle_reparacion_repuesto updateMany
   */
  export type tb_detalle_reparacion_repuestoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_detalle_reparacion_repuestos.
     */
    data: XOR<tb_detalle_reparacion_repuestoUpdateManyMutationInput, tb_detalle_reparacion_repuestoUncheckedUpdateManyInput>
    /**
     * Filter which tb_detalle_reparacion_repuestos to update
     */
    where?: tb_detalle_reparacion_repuestoWhereInput
    /**
     * Limit how many tb_detalle_reparacion_repuestos to update.
     */
    limit?: number
  }

  /**
   * tb_detalle_reparacion_repuesto upsert
   */
  export type tb_detalle_reparacion_repuestoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_detalle_reparacion_repuesto
     */
    select?: tb_detalle_reparacion_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_detalle_reparacion_repuesto
     */
    omit?: tb_detalle_reparacion_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_detalle_reparacion_repuestoInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_detalle_reparacion_repuesto to update in case it exists.
     */
    where: tb_detalle_reparacion_repuestoWhereUniqueInput
    /**
     * In case the tb_detalle_reparacion_repuesto found by the `where` argument doesn't exist, create a new tb_detalle_reparacion_repuesto with this data.
     */
    create: XOR<tb_detalle_reparacion_repuestoCreateInput, tb_detalle_reparacion_repuestoUncheckedCreateInput>
    /**
     * In case the tb_detalle_reparacion_repuesto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_detalle_reparacion_repuestoUpdateInput, tb_detalle_reparacion_repuestoUncheckedUpdateInput>
  }

  /**
   * tb_detalle_reparacion_repuesto delete
   */
  export type tb_detalle_reparacion_repuestoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_detalle_reparacion_repuesto
     */
    select?: tb_detalle_reparacion_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_detalle_reparacion_repuesto
     */
    omit?: tb_detalle_reparacion_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_detalle_reparacion_repuestoInclude<ExtArgs> | null
    /**
     * Filter which tb_detalle_reparacion_repuesto to delete.
     */
    where: tb_detalle_reparacion_repuestoWhereUniqueInput
  }

  /**
   * tb_detalle_reparacion_repuesto deleteMany
   */
  export type tb_detalle_reparacion_repuestoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_detalle_reparacion_repuestos to delete
     */
    where?: tb_detalle_reparacion_repuestoWhereInput
    /**
     * Limit how many tb_detalle_reparacion_repuestos to delete.
     */
    limit?: number
  }

  /**
   * tb_detalle_reparacion_repuesto.reparacion
   */
  export type tb_detalle_reparacion_repuesto$reparacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    where?: tb_reparacionWhereInput
  }

  /**
   * tb_detalle_reparacion_repuesto.repuesto
   */
  export type tb_detalle_reparacion_repuesto$repuestoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_repuesto
     */
    select?: tb_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_repuesto
     */
    omit?: tb_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_repuestoInclude<ExtArgs> | null
    where?: tb_repuestoWhereInput
  }

  /**
   * tb_detalle_reparacion_repuesto without action
   */
  export type tb_detalle_reparacion_repuestoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_detalle_reparacion_repuesto
     */
    select?: tb_detalle_reparacion_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_detalle_reparacion_repuesto
     */
    omit?: tb_detalle_reparacion_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_detalle_reparacion_repuestoInclude<ExtArgs> | null
  }


  /**
   * Model tb_equipo
   */

  export type AggregateTb_equipo = {
    _count: Tb_equipoCountAggregateOutputType | null
    _avg: Tb_equipoAvgAggregateOutputType | null
    _sum: Tb_equipoSumAggregateOutputType | null
    _min: Tb_equipoMinAggregateOutputType | null
    _max: Tb_equipoMaxAggregateOutputType | null
  }

  export type Tb_equipoAvgAggregateOutputType = {
    ID_Equipo: number | null
    ID_Cliente: number | null
  }

  export type Tb_equipoSumAggregateOutputType = {
    ID_Equipo: number | null
    ID_Cliente: number | null
  }

  export type Tb_equipoMinAggregateOutputType = {
    ID_Equipo: number | null
    ID_Cliente: number | null
    Nombre: string | null
    Marca: string | null
    Modelo: string | null
    Descripcion_problema: string | null
    Estado: string | null
  }

  export type Tb_equipoMaxAggregateOutputType = {
    ID_Equipo: number | null
    ID_Cliente: number | null
    Nombre: string | null
    Marca: string | null
    Modelo: string | null
    Descripcion_problema: string | null
    Estado: string | null
  }

  export type Tb_equipoCountAggregateOutputType = {
    ID_Equipo: number
    ID_Cliente: number
    Nombre: number
    Marca: number
    Modelo: number
    Descripcion_problema: number
    Estado: number
    _all: number
  }


  export type Tb_equipoAvgAggregateInputType = {
    ID_Equipo?: true
    ID_Cliente?: true
  }

  export type Tb_equipoSumAggregateInputType = {
    ID_Equipo?: true
    ID_Cliente?: true
  }

  export type Tb_equipoMinAggregateInputType = {
    ID_Equipo?: true
    ID_Cliente?: true
    Nombre?: true
    Marca?: true
    Modelo?: true
    Descripcion_problema?: true
    Estado?: true
  }

  export type Tb_equipoMaxAggregateInputType = {
    ID_Equipo?: true
    ID_Cliente?: true
    Nombre?: true
    Marca?: true
    Modelo?: true
    Descripcion_problema?: true
    Estado?: true
  }

  export type Tb_equipoCountAggregateInputType = {
    ID_Equipo?: true
    ID_Cliente?: true
    Nombre?: true
    Marca?: true
    Modelo?: true
    Descripcion_problema?: true
    Estado?: true
    _all?: true
  }

  export type Tb_equipoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_equipo to aggregate.
     */
    where?: tb_equipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_equipos to fetch.
     */
    orderBy?: tb_equipoOrderByWithRelationInput | tb_equipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_equipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_equipos
    **/
    _count?: true | Tb_equipoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_equipoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_equipoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_equipoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_equipoMaxAggregateInputType
  }

  export type GetTb_equipoAggregateType<T extends Tb_equipoAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_equipo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_equipo[P]>
      : GetScalarType<T[P], AggregateTb_equipo[P]>
  }




  export type tb_equipoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_equipoWhereInput
    orderBy?: tb_equipoOrderByWithAggregationInput | tb_equipoOrderByWithAggregationInput[]
    by: Tb_equipoScalarFieldEnum[] | Tb_equipoScalarFieldEnum
    having?: tb_equipoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_equipoCountAggregateInputType | true
    _avg?: Tb_equipoAvgAggregateInputType
    _sum?: Tb_equipoSumAggregateInputType
    _min?: Tb_equipoMinAggregateInputType
    _max?: Tb_equipoMaxAggregateInputType
  }

  export type Tb_equipoGroupByOutputType = {
    ID_Equipo: number
    ID_Cliente: number | null
    Nombre: string | null
    Marca: string | null
    Modelo: string | null
    Descripcion_problema: string | null
    Estado: string | null
    _count: Tb_equipoCountAggregateOutputType | null
    _avg: Tb_equipoAvgAggregateOutputType | null
    _sum: Tb_equipoSumAggregateOutputType | null
    _min: Tb_equipoMinAggregateOutputType | null
    _max: Tb_equipoMaxAggregateOutputType | null
  }

  type GetTb_equipoGroupByPayload<T extends tb_equipoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_equipoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_equipoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_equipoGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_equipoGroupByOutputType[P]>
        }
      >
    >


  export type tb_equipoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Equipo?: boolean
    ID_Cliente?: boolean
    Nombre?: boolean
    Marca?: boolean
    Modelo?: boolean
    Descripcion_problema?: boolean
    Estado?: boolean
    cliente?: boolean | tb_equipo$clienteArgs<ExtArgs>
    reparaciones?: boolean | tb_equipo$reparacionesArgs<ExtArgs>
    _count?: boolean | Tb_equipoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_equipo"]>



  export type tb_equipoSelectScalar = {
    ID_Equipo?: boolean
    ID_Cliente?: boolean
    Nombre?: boolean
    Marca?: boolean
    Modelo?: boolean
    Descripcion_problema?: boolean
    Estado?: boolean
  }

  export type tb_equipoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Equipo" | "ID_Cliente" | "Nombre" | "Marca" | "Modelo" | "Descripcion_problema" | "Estado", ExtArgs["result"]["tb_equipo"]>
  export type tb_equipoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | tb_equipo$clienteArgs<ExtArgs>
    reparaciones?: boolean | tb_equipo$reparacionesArgs<ExtArgs>
    _count?: boolean | Tb_equipoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tb_equipoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_equipo"
    objects: {
      cliente: Prisma.$tb_clientePayload<ExtArgs> | null
      reparaciones: Prisma.$tb_reparacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Equipo: number
      ID_Cliente: number | null
      Nombre: string | null
      Marca: string | null
      Modelo: string | null
      Descripcion_problema: string | null
      Estado: string | null
    }, ExtArgs["result"]["tb_equipo"]>
    composites: {}
  }

  type tb_equipoGetPayload<S extends boolean | null | undefined | tb_equipoDefaultArgs> = $Result.GetResult<Prisma.$tb_equipoPayload, S>

  type tb_equipoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_equipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_equipoCountAggregateInputType | true
    }

  export interface tb_equipoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_equipo'], meta: { name: 'tb_equipo' } }
    /**
     * Find zero or one Tb_equipo that matches the filter.
     * @param {tb_equipoFindUniqueArgs} args - Arguments to find a Tb_equipo
     * @example
     * // Get one Tb_equipo
     * const tb_equipo = await prisma.tb_equipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_equipoFindUniqueArgs>(args: SelectSubset<T, tb_equipoFindUniqueArgs<ExtArgs>>): Prisma__tb_equipoClient<$Result.GetResult<Prisma.$tb_equipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_equipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_equipoFindUniqueOrThrowArgs} args - Arguments to find a Tb_equipo
     * @example
     * // Get one Tb_equipo
     * const tb_equipo = await prisma.tb_equipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_equipoFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_equipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_equipoClient<$Result.GetResult<Prisma.$tb_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_equipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_equipoFindFirstArgs} args - Arguments to find a Tb_equipo
     * @example
     * // Get one Tb_equipo
     * const tb_equipo = await prisma.tb_equipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_equipoFindFirstArgs>(args?: SelectSubset<T, tb_equipoFindFirstArgs<ExtArgs>>): Prisma__tb_equipoClient<$Result.GetResult<Prisma.$tb_equipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_equipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_equipoFindFirstOrThrowArgs} args - Arguments to find a Tb_equipo
     * @example
     * // Get one Tb_equipo
     * const tb_equipo = await prisma.tb_equipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_equipoFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_equipoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_equipoClient<$Result.GetResult<Prisma.$tb_equipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_equipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_equipoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_equipos
     * const tb_equipos = await prisma.tb_equipo.findMany()
     * 
     * // Get first 10 Tb_equipos
     * const tb_equipos = await prisma.tb_equipo.findMany({ take: 10 })
     * 
     * // Only select the `ID_Equipo`
     * const tb_equipoWithID_EquipoOnly = await prisma.tb_equipo.findMany({ select: { ID_Equipo: true } })
     * 
     */
    findMany<T extends tb_equipoFindManyArgs>(args?: SelectSubset<T, tb_equipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_equipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_equipo.
     * @param {tb_equipoCreateArgs} args - Arguments to create a Tb_equipo.
     * @example
     * // Create one Tb_equipo
     * const Tb_equipo = await prisma.tb_equipo.create({
     *   data: {
     *     // ... data to create a Tb_equipo
     *   }
     * })
     * 
     */
    create<T extends tb_equipoCreateArgs>(args: SelectSubset<T, tb_equipoCreateArgs<ExtArgs>>): Prisma__tb_equipoClient<$Result.GetResult<Prisma.$tb_equipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_equipos.
     * @param {tb_equipoCreateManyArgs} args - Arguments to create many Tb_equipos.
     * @example
     * // Create many Tb_equipos
     * const tb_equipo = await prisma.tb_equipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_equipoCreateManyArgs>(args?: SelectSubset<T, tb_equipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_equipo.
     * @param {tb_equipoDeleteArgs} args - Arguments to delete one Tb_equipo.
     * @example
     * // Delete one Tb_equipo
     * const Tb_equipo = await prisma.tb_equipo.delete({
     *   where: {
     *     // ... filter to delete one Tb_equipo
     *   }
     * })
     * 
     */
    delete<T extends tb_equipoDeleteArgs>(args: SelectSubset<T, tb_equipoDeleteArgs<ExtArgs>>): Prisma__tb_equipoClient<$Result.GetResult<Prisma.$tb_equipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_equipo.
     * @param {tb_equipoUpdateArgs} args - Arguments to update one Tb_equipo.
     * @example
     * // Update one Tb_equipo
     * const tb_equipo = await prisma.tb_equipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_equipoUpdateArgs>(args: SelectSubset<T, tb_equipoUpdateArgs<ExtArgs>>): Prisma__tb_equipoClient<$Result.GetResult<Prisma.$tb_equipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_equipos.
     * @param {tb_equipoDeleteManyArgs} args - Arguments to filter Tb_equipos to delete.
     * @example
     * // Delete a few Tb_equipos
     * const { count } = await prisma.tb_equipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_equipoDeleteManyArgs>(args?: SelectSubset<T, tb_equipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_equipoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_equipos
     * const tb_equipo = await prisma.tb_equipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_equipoUpdateManyArgs>(args: SelectSubset<T, tb_equipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_equipo.
     * @param {tb_equipoUpsertArgs} args - Arguments to update or create a Tb_equipo.
     * @example
     * // Update or create a Tb_equipo
     * const tb_equipo = await prisma.tb_equipo.upsert({
     *   create: {
     *     // ... data to create a Tb_equipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_equipo we want to update
     *   }
     * })
     */
    upsert<T extends tb_equipoUpsertArgs>(args: SelectSubset<T, tb_equipoUpsertArgs<ExtArgs>>): Prisma__tb_equipoClient<$Result.GetResult<Prisma.$tb_equipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_equipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_equipoCountArgs} args - Arguments to filter Tb_equipos to count.
     * @example
     * // Count the number of Tb_equipos
     * const count = await prisma.tb_equipo.count({
     *   where: {
     *     // ... the filter for the Tb_equipos we want to count
     *   }
     * })
    **/
    count<T extends tb_equipoCountArgs>(
      args?: Subset<T, tb_equipoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_equipoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_equipoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_equipoAggregateArgs>(args: Subset<T, Tb_equipoAggregateArgs>): Prisma.PrismaPromise<GetTb_equipoAggregateType<T>>

    /**
     * Group by Tb_equipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_equipoGroupByArgs} args - Group by arguments.
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
      T extends tb_equipoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_equipoGroupByArgs['orderBy'] }
        : { orderBy?: tb_equipoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_equipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_equipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_equipo model
   */
  readonly fields: tb_equipoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_equipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_equipoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends tb_equipo$clienteArgs<ExtArgs> = {}>(args?: Subset<T, tb_equipo$clienteArgs<ExtArgs>>): Prisma__tb_clienteClient<$Result.GetResult<Prisma.$tb_clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reparaciones<T extends tb_equipo$reparacionesArgs<ExtArgs> = {}>(args?: Subset<T, tb_equipo$reparacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tb_equipo model
   */
  interface tb_equipoFieldRefs {
    readonly ID_Equipo: FieldRef<"tb_equipo", 'Int'>
    readonly ID_Cliente: FieldRef<"tb_equipo", 'Int'>
    readonly Nombre: FieldRef<"tb_equipo", 'String'>
    readonly Marca: FieldRef<"tb_equipo", 'String'>
    readonly Modelo: FieldRef<"tb_equipo", 'String'>
    readonly Descripcion_problema: FieldRef<"tb_equipo", 'String'>
    readonly Estado: FieldRef<"tb_equipo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_equipo findUnique
   */
  export type tb_equipoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_equipo
     */
    select?: tb_equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_equipo
     */
    omit?: tb_equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_equipoInclude<ExtArgs> | null
    /**
     * Filter, which tb_equipo to fetch.
     */
    where: tb_equipoWhereUniqueInput
  }

  /**
   * tb_equipo findUniqueOrThrow
   */
  export type tb_equipoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_equipo
     */
    select?: tb_equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_equipo
     */
    omit?: tb_equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_equipoInclude<ExtArgs> | null
    /**
     * Filter, which tb_equipo to fetch.
     */
    where: tb_equipoWhereUniqueInput
  }

  /**
   * tb_equipo findFirst
   */
  export type tb_equipoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_equipo
     */
    select?: tb_equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_equipo
     */
    omit?: tb_equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_equipoInclude<ExtArgs> | null
    /**
     * Filter, which tb_equipo to fetch.
     */
    where?: tb_equipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_equipos to fetch.
     */
    orderBy?: tb_equipoOrderByWithRelationInput | tb_equipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_equipos.
     */
    cursor?: tb_equipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_equipos.
     */
    distinct?: Tb_equipoScalarFieldEnum | Tb_equipoScalarFieldEnum[]
  }

  /**
   * tb_equipo findFirstOrThrow
   */
  export type tb_equipoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_equipo
     */
    select?: tb_equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_equipo
     */
    omit?: tb_equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_equipoInclude<ExtArgs> | null
    /**
     * Filter, which tb_equipo to fetch.
     */
    where?: tb_equipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_equipos to fetch.
     */
    orderBy?: tb_equipoOrderByWithRelationInput | tb_equipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_equipos.
     */
    cursor?: tb_equipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_equipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_equipos.
     */
    distinct?: Tb_equipoScalarFieldEnum | Tb_equipoScalarFieldEnum[]
  }

  /**
   * tb_equipo findMany
   */
  export type tb_equipoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_equipo
     */
    select?: tb_equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_equipo
     */
    omit?: tb_equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_equipoInclude<ExtArgs> | null
    /**
     * Filter, which tb_equipos to fetch.
     */
    where?: tb_equipoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_equipos to fetch.
     */
    orderBy?: tb_equipoOrderByWithRelationInput | tb_equipoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_equipos.
     */
    cursor?: tb_equipoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_equipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_equipos.
     */
    skip?: number
    distinct?: Tb_equipoScalarFieldEnum | Tb_equipoScalarFieldEnum[]
  }

  /**
   * tb_equipo create
   */
  export type tb_equipoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_equipo
     */
    select?: tb_equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_equipo
     */
    omit?: tb_equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_equipoInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_equipo.
     */
    data?: XOR<tb_equipoCreateInput, tb_equipoUncheckedCreateInput>
  }

  /**
   * tb_equipo createMany
   */
  export type tb_equipoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_equipos.
     */
    data: tb_equipoCreateManyInput | tb_equipoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_equipo update
   */
  export type tb_equipoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_equipo
     */
    select?: tb_equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_equipo
     */
    omit?: tb_equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_equipoInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_equipo.
     */
    data: XOR<tb_equipoUpdateInput, tb_equipoUncheckedUpdateInput>
    /**
     * Choose, which tb_equipo to update.
     */
    where: tb_equipoWhereUniqueInput
  }

  /**
   * tb_equipo updateMany
   */
  export type tb_equipoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_equipos.
     */
    data: XOR<tb_equipoUpdateManyMutationInput, tb_equipoUncheckedUpdateManyInput>
    /**
     * Filter which tb_equipos to update
     */
    where?: tb_equipoWhereInput
    /**
     * Limit how many tb_equipos to update.
     */
    limit?: number
  }

  /**
   * tb_equipo upsert
   */
  export type tb_equipoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_equipo
     */
    select?: tb_equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_equipo
     */
    omit?: tb_equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_equipoInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_equipo to update in case it exists.
     */
    where: tb_equipoWhereUniqueInput
    /**
     * In case the tb_equipo found by the `where` argument doesn't exist, create a new tb_equipo with this data.
     */
    create: XOR<tb_equipoCreateInput, tb_equipoUncheckedCreateInput>
    /**
     * In case the tb_equipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_equipoUpdateInput, tb_equipoUncheckedUpdateInput>
  }

  /**
   * tb_equipo delete
   */
  export type tb_equipoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_equipo
     */
    select?: tb_equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_equipo
     */
    omit?: tb_equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_equipoInclude<ExtArgs> | null
    /**
     * Filter which tb_equipo to delete.
     */
    where: tb_equipoWhereUniqueInput
  }

  /**
   * tb_equipo deleteMany
   */
  export type tb_equipoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_equipos to delete
     */
    where?: tb_equipoWhereInput
    /**
     * Limit how many tb_equipos to delete.
     */
    limit?: number
  }

  /**
   * tb_equipo.cliente
   */
  export type tb_equipo$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
    where?: tb_clienteWhereInput
  }

  /**
   * tb_equipo.reparaciones
   */
  export type tb_equipo$reparacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    where?: tb_reparacionWhereInput
    orderBy?: tb_reparacionOrderByWithRelationInput | tb_reparacionOrderByWithRelationInput[]
    cursor?: tb_reparacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_reparacionScalarFieldEnum | Tb_reparacionScalarFieldEnum[]
  }

  /**
   * tb_equipo without action
   */
  export type tb_equipoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_equipo
     */
    select?: tb_equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_equipo
     */
    omit?: tb_equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_equipoInclude<ExtArgs> | null
  }


  /**
   * Model tb_estado_reparacion
   */

  export type AggregateTb_estado_reparacion = {
    _count: Tb_estado_reparacionCountAggregateOutputType | null
    _avg: Tb_estado_reparacionAvgAggregateOutputType | null
    _sum: Tb_estado_reparacionSumAggregateOutputType | null
    _min: Tb_estado_reparacionMinAggregateOutputType | null
    _max: Tb_estado_reparacionMaxAggregateOutputType | null
  }

  export type Tb_estado_reparacionAvgAggregateOutputType = {
    ID_Estado: number | null
    ID_Reparacion: number | null
    ID_Usuario_Aprobado: number | null
  }

  export type Tb_estado_reparacionSumAggregateOutputType = {
    ID_Estado: number | null
    ID_Reparacion: number | null
    ID_Usuario_Aprobado: number | null
  }

  export type Tb_estado_reparacionMinAggregateOutputType = {
    ID_Estado: number | null
    ID_Reparacion: number | null
    FechaHora: Date | null
    Estado: string | null
    Descripcion: string | null
    Requiere_Aprobacion: boolean | null
    Aprobado: boolean | null
    ID_Usuario_Aprobado: number | null
    Fecha_Aprobacion: Date | null
  }

  export type Tb_estado_reparacionMaxAggregateOutputType = {
    ID_Estado: number | null
    ID_Reparacion: number | null
    FechaHora: Date | null
    Estado: string | null
    Descripcion: string | null
    Requiere_Aprobacion: boolean | null
    Aprobado: boolean | null
    ID_Usuario_Aprobado: number | null
    Fecha_Aprobacion: Date | null
  }

  export type Tb_estado_reparacionCountAggregateOutputType = {
    ID_Estado: number
    ID_Reparacion: number
    FechaHora: number
    Estado: number
    Descripcion: number
    Requiere_Aprobacion: number
    Aprobado: number
    ID_Usuario_Aprobado: number
    Fecha_Aprobacion: number
    _all: number
  }


  export type Tb_estado_reparacionAvgAggregateInputType = {
    ID_Estado?: true
    ID_Reparacion?: true
    ID_Usuario_Aprobado?: true
  }

  export type Tb_estado_reparacionSumAggregateInputType = {
    ID_Estado?: true
    ID_Reparacion?: true
    ID_Usuario_Aprobado?: true
  }

  export type Tb_estado_reparacionMinAggregateInputType = {
    ID_Estado?: true
    ID_Reparacion?: true
    FechaHora?: true
    Estado?: true
    Descripcion?: true
    Requiere_Aprobacion?: true
    Aprobado?: true
    ID_Usuario_Aprobado?: true
    Fecha_Aprobacion?: true
  }

  export type Tb_estado_reparacionMaxAggregateInputType = {
    ID_Estado?: true
    ID_Reparacion?: true
    FechaHora?: true
    Estado?: true
    Descripcion?: true
    Requiere_Aprobacion?: true
    Aprobado?: true
    ID_Usuario_Aprobado?: true
    Fecha_Aprobacion?: true
  }

  export type Tb_estado_reparacionCountAggregateInputType = {
    ID_Estado?: true
    ID_Reparacion?: true
    FechaHora?: true
    Estado?: true
    Descripcion?: true
    Requiere_Aprobacion?: true
    Aprobado?: true
    ID_Usuario_Aprobado?: true
    Fecha_Aprobacion?: true
    _all?: true
  }

  export type Tb_estado_reparacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_estado_reparacion to aggregate.
     */
    where?: tb_estado_reparacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_estado_reparacions to fetch.
     */
    orderBy?: tb_estado_reparacionOrderByWithRelationInput | tb_estado_reparacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_estado_reparacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_estado_reparacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_estado_reparacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_estado_reparacions
    **/
    _count?: true | Tb_estado_reparacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_estado_reparacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_estado_reparacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_estado_reparacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_estado_reparacionMaxAggregateInputType
  }

  export type GetTb_estado_reparacionAggregateType<T extends Tb_estado_reparacionAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_estado_reparacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_estado_reparacion[P]>
      : GetScalarType<T[P], AggregateTb_estado_reparacion[P]>
  }




  export type tb_estado_reparacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_estado_reparacionWhereInput
    orderBy?: tb_estado_reparacionOrderByWithAggregationInput | tb_estado_reparacionOrderByWithAggregationInput[]
    by: Tb_estado_reparacionScalarFieldEnum[] | Tb_estado_reparacionScalarFieldEnum
    having?: tb_estado_reparacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_estado_reparacionCountAggregateInputType | true
    _avg?: Tb_estado_reparacionAvgAggregateInputType
    _sum?: Tb_estado_reparacionSumAggregateInputType
    _min?: Tb_estado_reparacionMinAggregateInputType
    _max?: Tb_estado_reparacionMaxAggregateInputType
  }

  export type Tb_estado_reparacionGroupByOutputType = {
    ID_Estado: number
    ID_Reparacion: number | null
    FechaHora: Date | null
    Estado: string | null
    Descripcion: string | null
    Requiere_Aprobacion: boolean | null
    Aprobado: boolean | null
    ID_Usuario_Aprobado: number | null
    Fecha_Aprobacion: Date | null
    _count: Tb_estado_reparacionCountAggregateOutputType | null
    _avg: Tb_estado_reparacionAvgAggregateOutputType | null
    _sum: Tb_estado_reparacionSumAggregateOutputType | null
    _min: Tb_estado_reparacionMinAggregateOutputType | null
    _max: Tb_estado_reparacionMaxAggregateOutputType | null
  }

  type GetTb_estado_reparacionGroupByPayload<T extends tb_estado_reparacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_estado_reparacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_estado_reparacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_estado_reparacionGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_estado_reparacionGroupByOutputType[P]>
        }
      >
    >


  export type tb_estado_reparacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Estado?: boolean
    ID_Reparacion?: boolean
    FechaHora?: boolean
    Estado?: boolean
    Descripcion?: boolean
    Requiere_Aprobacion?: boolean
    Aprobado?: boolean
    ID_Usuario_Aprobado?: boolean
    Fecha_Aprobacion?: boolean
    reparacion?: boolean | tb_estado_reparacion$reparacionArgs<ExtArgs>
    usuario_aprobador?: boolean | tb_estado_reparacion$usuario_aprobadorArgs<ExtArgs>
  }, ExtArgs["result"]["tb_estado_reparacion"]>



  export type tb_estado_reparacionSelectScalar = {
    ID_Estado?: boolean
    ID_Reparacion?: boolean
    FechaHora?: boolean
    Estado?: boolean
    Descripcion?: boolean
    Requiere_Aprobacion?: boolean
    Aprobado?: boolean
    ID_Usuario_Aprobado?: boolean
    Fecha_Aprobacion?: boolean
  }

  export type tb_estado_reparacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Estado" | "ID_Reparacion" | "FechaHora" | "Estado" | "Descripcion" | "Requiere_Aprobacion" | "Aprobado" | "ID_Usuario_Aprobado" | "Fecha_Aprobacion", ExtArgs["result"]["tb_estado_reparacion"]>
  export type tb_estado_reparacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparacion?: boolean | tb_estado_reparacion$reparacionArgs<ExtArgs>
    usuario_aprobador?: boolean | tb_estado_reparacion$usuario_aprobadorArgs<ExtArgs>
  }

  export type $tb_estado_reparacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_estado_reparacion"
    objects: {
      reparacion: Prisma.$tb_reparacionPayload<ExtArgs> | null
      usuario_aprobador: Prisma.$tb_usuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Estado: number
      ID_Reparacion: number | null
      FechaHora: Date | null
      Estado: string | null
      Descripcion: string | null
      Requiere_Aprobacion: boolean | null
      Aprobado: boolean | null
      ID_Usuario_Aprobado: number | null
      Fecha_Aprobacion: Date | null
    }, ExtArgs["result"]["tb_estado_reparacion"]>
    composites: {}
  }

  type tb_estado_reparacionGetPayload<S extends boolean | null | undefined | tb_estado_reparacionDefaultArgs> = $Result.GetResult<Prisma.$tb_estado_reparacionPayload, S>

  type tb_estado_reparacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_estado_reparacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_estado_reparacionCountAggregateInputType | true
    }

  export interface tb_estado_reparacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_estado_reparacion'], meta: { name: 'tb_estado_reparacion' } }
    /**
     * Find zero or one Tb_estado_reparacion that matches the filter.
     * @param {tb_estado_reparacionFindUniqueArgs} args - Arguments to find a Tb_estado_reparacion
     * @example
     * // Get one Tb_estado_reparacion
     * const tb_estado_reparacion = await prisma.tb_estado_reparacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_estado_reparacionFindUniqueArgs>(args: SelectSubset<T, tb_estado_reparacionFindUniqueArgs<ExtArgs>>): Prisma__tb_estado_reparacionClient<$Result.GetResult<Prisma.$tb_estado_reparacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_estado_reparacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_estado_reparacionFindUniqueOrThrowArgs} args - Arguments to find a Tb_estado_reparacion
     * @example
     * // Get one Tb_estado_reparacion
     * const tb_estado_reparacion = await prisma.tb_estado_reparacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_estado_reparacionFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_estado_reparacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_estado_reparacionClient<$Result.GetResult<Prisma.$tb_estado_reparacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_estado_reparacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_estado_reparacionFindFirstArgs} args - Arguments to find a Tb_estado_reparacion
     * @example
     * // Get one Tb_estado_reparacion
     * const tb_estado_reparacion = await prisma.tb_estado_reparacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_estado_reparacionFindFirstArgs>(args?: SelectSubset<T, tb_estado_reparacionFindFirstArgs<ExtArgs>>): Prisma__tb_estado_reparacionClient<$Result.GetResult<Prisma.$tb_estado_reparacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_estado_reparacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_estado_reparacionFindFirstOrThrowArgs} args - Arguments to find a Tb_estado_reparacion
     * @example
     * // Get one Tb_estado_reparacion
     * const tb_estado_reparacion = await prisma.tb_estado_reparacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_estado_reparacionFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_estado_reparacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_estado_reparacionClient<$Result.GetResult<Prisma.$tb_estado_reparacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_estado_reparacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_estado_reparacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_estado_reparacions
     * const tb_estado_reparacions = await prisma.tb_estado_reparacion.findMany()
     * 
     * // Get first 10 Tb_estado_reparacions
     * const tb_estado_reparacions = await prisma.tb_estado_reparacion.findMany({ take: 10 })
     * 
     * // Only select the `ID_Estado`
     * const tb_estado_reparacionWithID_EstadoOnly = await prisma.tb_estado_reparacion.findMany({ select: { ID_Estado: true } })
     * 
     */
    findMany<T extends tb_estado_reparacionFindManyArgs>(args?: SelectSubset<T, tb_estado_reparacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_estado_reparacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_estado_reparacion.
     * @param {tb_estado_reparacionCreateArgs} args - Arguments to create a Tb_estado_reparacion.
     * @example
     * // Create one Tb_estado_reparacion
     * const Tb_estado_reparacion = await prisma.tb_estado_reparacion.create({
     *   data: {
     *     // ... data to create a Tb_estado_reparacion
     *   }
     * })
     * 
     */
    create<T extends tb_estado_reparacionCreateArgs>(args: SelectSubset<T, tb_estado_reparacionCreateArgs<ExtArgs>>): Prisma__tb_estado_reparacionClient<$Result.GetResult<Prisma.$tb_estado_reparacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_estado_reparacions.
     * @param {tb_estado_reparacionCreateManyArgs} args - Arguments to create many Tb_estado_reparacions.
     * @example
     * // Create many Tb_estado_reparacions
     * const tb_estado_reparacion = await prisma.tb_estado_reparacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_estado_reparacionCreateManyArgs>(args?: SelectSubset<T, tb_estado_reparacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_estado_reparacion.
     * @param {tb_estado_reparacionDeleteArgs} args - Arguments to delete one Tb_estado_reparacion.
     * @example
     * // Delete one Tb_estado_reparacion
     * const Tb_estado_reparacion = await prisma.tb_estado_reparacion.delete({
     *   where: {
     *     // ... filter to delete one Tb_estado_reparacion
     *   }
     * })
     * 
     */
    delete<T extends tb_estado_reparacionDeleteArgs>(args: SelectSubset<T, tb_estado_reparacionDeleteArgs<ExtArgs>>): Prisma__tb_estado_reparacionClient<$Result.GetResult<Prisma.$tb_estado_reparacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_estado_reparacion.
     * @param {tb_estado_reparacionUpdateArgs} args - Arguments to update one Tb_estado_reparacion.
     * @example
     * // Update one Tb_estado_reparacion
     * const tb_estado_reparacion = await prisma.tb_estado_reparacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_estado_reparacionUpdateArgs>(args: SelectSubset<T, tb_estado_reparacionUpdateArgs<ExtArgs>>): Prisma__tb_estado_reparacionClient<$Result.GetResult<Prisma.$tb_estado_reparacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_estado_reparacions.
     * @param {tb_estado_reparacionDeleteManyArgs} args - Arguments to filter Tb_estado_reparacions to delete.
     * @example
     * // Delete a few Tb_estado_reparacions
     * const { count } = await prisma.tb_estado_reparacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_estado_reparacionDeleteManyArgs>(args?: SelectSubset<T, tb_estado_reparacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_estado_reparacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_estado_reparacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_estado_reparacions
     * const tb_estado_reparacion = await prisma.tb_estado_reparacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_estado_reparacionUpdateManyArgs>(args: SelectSubset<T, tb_estado_reparacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_estado_reparacion.
     * @param {tb_estado_reparacionUpsertArgs} args - Arguments to update or create a Tb_estado_reparacion.
     * @example
     * // Update or create a Tb_estado_reparacion
     * const tb_estado_reparacion = await prisma.tb_estado_reparacion.upsert({
     *   create: {
     *     // ... data to create a Tb_estado_reparacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_estado_reparacion we want to update
     *   }
     * })
     */
    upsert<T extends tb_estado_reparacionUpsertArgs>(args: SelectSubset<T, tb_estado_reparacionUpsertArgs<ExtArgs>>): Prisma__tb_estado_reparacionClient<$Result.GetResult<Prisma.$tb_estado_reparacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_estado_reparacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_estado_reparacionCountArgs} args - Arguments to filter Tb_estado_reparacions to count.
     * @example
     * // Count the number of Tb_estado_reparacions
     * const count = await prisma.tb_estado_reparacion.count({
     *   where: {
     *     // ... the filter for the Tb_estado_reparacions we want to count
     *   }
     * })
    **/
    count<T extends tb_estado_reparacionCountArgs>(
      args?: Subset<T, tb_estado_reparacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_estado_reparacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_estado_reparacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_estado_reparacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_estado_reparacionAggregateArgs>(args: Subset<T, Tb_estado_reparacionAggregateArgs>): Prisma.PrismaPromise<GetTb_estado_reparacionAggregateType<T>>

    /**
     * Group by Tb_estado_reparacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_estado_reparacionGroupByArgs} args - Group by arguments.
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
      T extends tb_estado_reparacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_estado_reparacionGroupByArgs['orderBy'] }
        : { orderBy?: tb_estado_reparacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_estado_reparacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_estado_reparacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_estado_reparacion model
   */
  readonly fields: tb_estado_reparacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_estado_reparacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_estado_reparacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reparacion<T extends tb_estado_reparacion$reparacionArgs<ExtArgs> = {}>(args?: Subset<T, tb_estado_reparacion$reparacionArgs<ExtArgs>>): Prisma__tb_reparacionClient<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario_aprobador<T extends tb_estado_reparacion$usuario_aprobadorArgs<ExtArgs> = {}>(args?: Subset<T, tb_estado_reparacion$usuario_aprobadorArgs<ExtArgs>>): Prisma__tb_usuarioClient<$Result.GetResult<Prisma.$tb_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tb_estado_reparacion model
   */
  interface tb_estado_reparacionFieldRefs {
    readonly ID_Estado: FieldRef<"tb_estado_reparacion", 'Int'>
    readonly ID_Reparacion: FieldRef<"tb_estado_reparacion", 'Int'>
    readonly FechaHora: FieldRef<"tb_estado_reparacion", 'DateTime'>
    readonly Estado: FieldRef<"tb_estado_reparacion", 'String'>
    readonly Descripcion: FieldRef<"tb_estado_reparacion", 'String'>
    readonly Requiere_Aprobacion: FieldRef<"tb_estado_reparacion", 'Boolean'>
    readonly Aprobado: FieldRef<"tb_estado_reparacion", 'Boolean'>
    readonly ID_Usuario_Aprobado: FieldRef<"tb_estado_reparacion", 'Int'>
    readonly Fecha_Aprobacion: FieldRef<"tb_estado_reparacion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tb_estado_reparacion findUnique
   */
  export type tb_estado_reparacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_estado_reparacion
     */
    select?: tb_estado_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_estado_reparacion
     */
    omit?: tb_estado_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_estado_reparacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_estado_reparacion to fetch.
     */
    where: tb_estado_reparacionWhereUniqueInput
  }

  /**
   * tb_estado_reparacion findUniqueOrThrow
   */
  export type tb_estado_reparacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_estado_reparacion
     */
    select?: tb_estado_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_estado_reparacion
     */
    omit?: tb_estado_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_estado_reparacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_estado_reparacion to fetch.
     */
    where: tb_estado_reparacionWhereUniqueInput
  }

  /**
   * tb_estado_reparacion findFirst
   */
  export type tb_estado_reparacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_estado_reparacion
     */
    select?: tb_estado_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_estado_reparacion
     */
    omit?: tb_estado_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_estado_reparacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_estado_reparacion to fetch.
     */
    where?: tb_estado_reparacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_estado_reparacions to fetch.
     */
    orderBy?: tb_estado_reparacionOrderByWithRelationInput | tb_estado_reparacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_estado_reparacions.
     */
    cursor?: tb_estado_reparacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_estado_reparacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_estado_reparacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_estado_reparacions.
     */
    distinct?: Tb_estado_reparacionScalarFieldEnum | Tb_estado_reparacionScalarFieldEnum[]
  }

  /**
   * tb_estado_reparacion findFirstOrThrow
   */
  export type tb_estado_reparacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_estado_reparacion
     */
    select?: tb_estado_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_estado_reparacion
     */
    omit?: tb_estado_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_estado_reparacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_estado_reparacion to fetch.
     */
    where?: tb_estado_reparacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_estado_reparacions to fetch.
     */
    orderBy?: tb_estado_reparacionOrderByWithRelationInput | tb_estado_reparacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_estado_reparacions.
     */
    cursor?: tb_estado_reparacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_estado_reparacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_estado_reparacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_estado_reparacions.
     */
    distinct?: Tb_estado_reparacionScalarFieldEnum | Tb_estado_reparacionScalarFieldEnum[]
  }

  /**
   * tb_estado_reparacion findMany
   */
  export type tb_estado_reparacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_estado_reparacion
     */
    select?: tb_estado_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_estado_reparacion
     */
    omit?: tb_estado_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_estado_reparacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_estado_reparacions to fetch.
     */
    where?: tb_estado_reparacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_estado_reparacions to fetch.
     */
    orderBy?: tb_estado_reparacionOrderByWithRelationInput | tb_estado_reparacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_estado_reparacions.
     */
    cursor?: tb_estado_reparacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_estado_reparacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_estado_reparacions.
     */
    skip?: number
    distinct?: Tb_estado_reparacionScalarFieldEnum | Tb_estado_reparacionScalarFieldEnum[]
  }

  /**
   * tb_estado_reparacion create
   */
  export type tb_estado_reparacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_estado_reparacion
     */
    select?: tb_estado_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_estado_reparacion
     */
    omit?: tb_estado_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_estado_reparacionInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_estado_reparacion.
     */
    data?: XOR<tb_estado_reparacionCreateInput, tb_estado_reparacionUncheckedCreateInput>
  }

  /**
   * tb_estado_reparacion createMany
   */
  export type tb_estado_reparacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_estado_reparacions.
     */
    data: tb_estado_reparacionCreateManyInput | tb_estado_reparacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_estado_reparacion update
   */
  export type tb_estado_reparacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_estado_reparacion
     */
    select?: tb_estado_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_estado_reparacion
     */
    omit?: tb_estado_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_estado_reparacionInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_estado_reparacion.
     */
    data: XOR<tb_estado_reparacionUpdateInput, tb_estado_reparacionUncheckedUpdateInput>
    /**
     * Choose, which tb_estado_reparacion to update.
     */
    where: tb_estado_reparacionWhereUniqueInput
  }

  /**
   * tb_estado_reparacion updateMany
   */
  export type tb_estado_reparacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_estado_reparacions.
     */
    data: XOR<tb_estado_reparacionUpdateManyMutationInput, tb_estado_reparacionUncheckedUpdateManyInput>
    /**
     * Filter which tb_estado_reparacions to update
     */
    where?: tb_estado_reparacionWhereInput
    /**
     * Limit how many tb_estado_reparacions to update.
     */
    limit?: number
  }

  /**
   * tb_estado_reparacion upsert
   */
  export type tb_estado_reparacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_estado_reparacion
     */
    select?: tb_estado_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_estado_reparacion
     */
    omit?: tb_estado_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_estado_reparacionInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_estado_reparacion to update in case it exists.
     */
    where: tb_estado_reparacionWhereUniqueInput
    /**
     * In case the tb_estado_reparacion found by the `where` argument doesn't exist, create a new tb_estado_reparacion with this data.
     */
    create: XOR<tb_estado_reparacionCreateInput, tb_estado_reparacionUncheckedCreateInput>
    /**
     * In case the tb_estado_reparacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_estado_reparacionUpdateInput, tb_estado_reparacionUncheckedUpdateInput>
  }

  /**
   * tb_estado_reparacion delete
   */
  export type tb_estado_reparacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_estado_reparacion
     */
    select?: tb_estado_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_estado_reparacion
     */
    omit?: tb_estado_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_estado_reparacionInclude<ExtArgs> | null
    /**
     * Filter which tb_estado_reparacion to delete.
     */
    where: tb_estado_reparacionWhereUniqueInput
  }

  /**
   * tb_estado_reparacion deleteMany
   */
  export type tb_estado_reparacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_estado_reparacions to delete
     */
    where?: tb_estado_reparacionWhereInput
    /**
     * Limit how many tb_estado_reparacions to delete.
     */
    limit?: number
  }

  /**
   * tb_estado_reparacion.reparacion
   */
  export type tb_estado_reparacion$reparacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    where?: tb_reparacionWhereInput
  }

  /**
   * tb_estado_reparacion.usuario_aprobador
   */
  export type tb_estado_reparacion$usuario_aprobadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
    where?: tb_usuarioWhereInput
  }

  /**
   * tb_estado_reparacion without action
   */
  export type tb_estado_reparacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_estado_reparacion
     */
    select?: tb_estado_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_estado_reparacion
     */
    omit?: tb_estado_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_estado_reparacionInclude<ExtArgs> | null
  }


  /**
   * Model tb_factura
   */

  export type AggregateTb_factura = {
    _count: Tb_facturaCountAggregateOutputType | null
    _avg: Tb_facturaAvgAggregateOutputType | null
    _sum: Tb_facturaSumAggregateOutputType | null
    _min: Tb_facturaMinAggregateOutputType | null
    _max: Tb_facturaMaxAggregateOutputType | null
  }

  export type Tb_facturaAvgAggregateOutputType = {
    ID_Factura: number | null
    ID_Reparacion: number | null
    Subtotal: Decimal | null
    IVA: Decimal | null
    Total: Decimal | null
  }

  export type Tb_facturaSumAggregateOutputType = {
    ID_Factura: number | null
    ID_Reparacion: number | null
    Subtotal: Decimal | null
    IVA: Decimal | null
    Total: Decimal | null
  }

  export type Tb_facturaMinAggregateOutputType = {
    ID_Factura: number | null
    ID_Reparacion: number | null
    Fecha_Emision: Date | null
    Subtotal: Decimal | null
    IVA: Decimal | null
    Total: Decimal | null
    Metodo_Pago: string | null
    Estado: string | null
  }

  export type Tb_facturaMaxAggregateOutputType = {
    ID_Factura: number | null
    ID_Reparacion: number | null
    Fecha_Emision: Date | null
    Subtotal: Decimal | null
    IVA: Decimal | null
    Total: Decimal | null
    Metodo_Pago: string | null
    Estado: string | null
  }

  export type Tb_facturaCountAggregateOutputType = {
    ID_Factura: number
    ID_Reparacion: number
    Fecha_Emision: number
    Subtotal: number
    IVA: number
    Total: number
    Metodo_Pago: number
    Estado: number
    _all: number
  }


  export type Tb_facturaAvgAggregateInputType = {
    ID_Factura?: true
    ID_Reparacion?: true
    Subtotal?: true
    IVA?: true
    Total?: true
  }

  export type Tb_facturaSumAggregateInputType = {
    ID_Factura?: true
    ID_Reparacion?: true
    Subtotal?: true
    IVA?: true
    Total?: true
  }

  export type Tb_facturaMinAggregateInputType = {
    ID_Factura?: true
    ID_Reparacion?: true
    Fecha_Emision?: true
    Subtotal?: true
    IVA?: true
    Total?: true
    Metodo_Pago?: true
    Estado?: true
  }

  export type Tb_facturaMaxAggregateInputType = {
    ID_Factura?: true
    ID_Reparacion?: true
    Fecha_Emision?: true
    Subtotal?: true
    IVA?: true
    Total?: true
    Metodo_Pago?: true
    Estado?: true
  }

  export type Tb_facturaCountAggregateInputType = {
    ID_Factura?: true
    ID_Reparacion?: true
    Fecha_Emision?: true
    Subtotal?: true
    IVA?: true
    Total?: true
    Metodo_Pago?: true
    Estado?: true
    _all?: true
  }

  export type Tb_facturaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_factura to aggregate.
     */
    where?: tb_facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_facturas to fetch.
     */
    orderBy?: tb_facturaOrderByWithRelationInput | tb_facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_facturas
    **/
    _count?: true | Tb_facturaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_facturaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_facturaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_facturaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_facturaMaxAggregateInputType
  }

  export type GetTb_facturaAggregateType<T extends Tb_facturaAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_factura]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_factura[P]>
      : GetScalarType<T[P], AggregateTb_factura[P]>
  }




  export type tb_facturaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_facturaWhereInput
    orderBy?: tb_facturaOrderByWithAggregationInput | tb_facturaOrderByWithAggregationInput[]
    by: Tb_facturaScalarFieldEnum[] | Tb_facturaScalarFieldEnum
    having?: tb_facturaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_facturaCountAggregateInputType | true
    _avg?: Tb_facturaAvgAggregateInputType
    _sum?: Tb_facturaSumAggregateInputType
    _min?: Tb_facturaMinAggregateInputType
    _max?: Tb_facturaMaxAggregateInputType
  }

  export type Tb_facturaGroupByOutputType = {
    ID_Factura: number
    ID_Reparacion: number | null
    Fecha_Emision: Date | null
    Subtotal: Decimal | null
    IVA: Decimal | null
    Total: Decimal | null
    Metodo_Pago: string | null
    Estado: string | null
    _count: Tb_facturaCountAggregateOutputType | null
    _avg: Tb_facturaAvgAggregateOutputType | null
    _sum: Tb_facturaSumAggregateOutputType | null
    _min: Tb_facturaMinAggregateOutputType | null
    _max: Tb_facturaMaxAggregateOutputType | null
  }

  type GetTb_facturaGroupByPayload<T extends tb_facturaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_facturaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_facturaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_facturaGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_facturaGroupByOutputType[P]>
        }
      >
    >


  export type tb_facturaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Factura?: boolean
    ID_Reparacion?: boolean
    Fecha_Emision?: boolean
    Subtotal?: boolean
    IVA?: boolean
    Total?: boolean
    Metodo_Pago?: boolean
    Estado?: boolean
    reparacion?: boolean | tb_factura$reparacionArgs<ExtArgs>
  }, ExtArgs["result"]["tb_factura"]>



  export type tb_facturaSelectScalar = {
    ID_Factura?: boolean
    ID_Reparacion?: boolean
    Fecha_Emision?: boolean
    Subtotal?: boolean
    IVA?: boolean
    Total?: boolean
    Metodo_Pago?: boolean
    Estado?: boolean
  }

  export type tb_facturaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Factura" | "ID_Reparacion" | "Fecha_Emision" | "Subtotal" | "IVA" | "Total" | "Metodo_Pago" | "Estado", ExtArgs["result"]["tb_factura"]>
  export type tb_facturaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparacion?: boolean | tb_factura$reparacionArgs<ExtArgs>
  }

  export type $tb_facturaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_factura"
    objects: {
      reparacion: Prisma.$tb_reparacionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Factura: number
      ID_Reparacion: number | null
      Fecha_Emision: Date | null
      Subtotal: Prisma.Decimal | null
      IVA: Prisma.Decimal | null
      Total: Prisma.Decimal | null
      Metodo_Pago: string | null
      Estado: string | null
    }, ExtArgs["result"]["tb_factura"]>
    composites: {}
  }

  type tb_facturaGetPayload<S extends boolean | null | undefined | tb_facturaDefaultArgs> = $Result.GetResult<Prisma.$tb_facturaPayload, S>

  type tb_facturaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_facturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_facturaCountAggregateInputType | true
    }

  export interface tb_facturaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_factura'], meta: { name: 'tb_factura' } }
    /**
     * Find zero or one Tb_factura that matches the filter.
     * @param {tb_facturaFindUniqueArgs} args - Arguments to find a Tb_factura
     * @example
     * // Get one Tb_factura
     * const tb_factura = await prisma.tb_factura.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_facturaFindUniqueArgs>(args: SelectSubset<T, tb_facturaFindUniqueArgs<ExtArgs>>): Prisma__tb_facturaClient<$Result.GetResult<Prisma.$tb_facturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_factura that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_facturaFindUniqueOrThrowArgs} args - Arguments to find a Tb_factura
     * @example
     * // Get one Tb_factura
     * const tb_factura = await prisma.tb_factura.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_facturaFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_facturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_facturaClient<$Result.GetResult<Prisma.$tb_facturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_factura that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_facturaFindFirstArgs} args - Arguments to find a Tb_factura
     * @example
     * // Get one Tb_factura
     * const tb_factura = await prisma.tb_factura.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_facturaFindFirstArgs>(args?: SelectSubset<T, tb_facturaFindFirstArgs<ExtArgs>>): Prisma__tb_facturaClient<$Result.GetResult<Prisma.$tb_facturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_factura that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_facturaFindFirstOrThrowArgs} args - Arguments to find a Tb_factura
     * @example
     * // Get one Tb_factura
     * const tb_factura = await prisma.tb_factura.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_facturaFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_facturaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_facturaClient<$Result.GetResult<Prisma.$tb_facturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_facturas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_facturaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_facturas
     * const tb_facturas = await prisma.tb_factura.findMany()
     * 
     * // Get first 10 Tb_facturas
     * const tb_facturas = await prisma.tb_factura.findMany({ take: 10 })
     * 
     * // Only select the `ID_Factura`
     * const tb_facturaWithID_FacturaOnly = await prisma.tb_factura.findMany({ select: { ID_Factura: true } })
     * 
     */
    findMany<T extends tb_facturaFindManyArgs>(args?: SelectSubset<T, tb_facturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_factura.
     * @param {tb_facturaCreateArgs} args - Arguments to create a Tb_factura.
     * @example
     * // Create one Tb_factura
     * const Tb_factura = await prisma.tb_factura.create({
     *   data: {
     *     // ... data to create a Tb_factura
     *   }
     * })
     * 
     */
    create<T extends tb_facturaCreateArgs>(args: SelectSubset<T, tb_facturaCreateArgs<ExtArgs>>): Prisma__tb_facturaClient<$Result.GetResult<Prisma.$tb_facturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_facturas.
     * @param {tb_facturaCreateManyArgs} args - Arguments to create many Tb_facturas.
     * @example
     * // Create many Tb_facturas
     * const tb_factura = await prisma.tb_factura.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_facturaCreateManyArgs>(args?: SelectSubset<T, tb_facturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_factura.
     * @param {tb_facturaDeleteArgs} args - Arguments to delete one Tb_factura.
     * @example
     * // Delete one Tb_factura
     * const Tb_factura = await prisma.tb_factura.delete({
     *   where: {
     *     // ... filter to delete one Tb_factura
     *   }
     * })
     * 
     */
    delete<T extends tb_facturaDeleteArgs>(args: SelectSubset<T, tb_facturaDeleteArgs<ExtArgs>>): Prisma__tb_facturaClient<$Result.GetResult<Prisma.$tb_facturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_factura.
     * @param {tb_facturaUpdateArgs} args - Arguments to update one Tb_factura.
     * @example
     * // Update one Tb_factura
     * const tb_factura = await prisma.tb_factura.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_facturaUpdateArgs>(args: SelectSubset<T, tb_facturaUpdateArgs<ExtArgs>>): Prisma__tb_facturaClient<$Result.GetResult<Prisma.$tb_facturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_facturas.
     * @param {tb_facturaDeleteManyArgs} args - Arguments to filter Tb_facturas to delete.
     * @example
     * // Delete a few Tb_facturas
     * const { count } = await prisma.tb_factura.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_facturaDeleteManyArgs>(args?: SelectSubset<T, tb_facturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_facturaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_facturas
     * const tb_factura = await prisma.tb_factura.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_facturaUpdateManyArgs>(args: SelectSubset<T, tb_facturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_factura.
     * @param {tb_facturaUpsertArgs} args - Arguments to update or create a Tb_factura.
     * @example
     * // Update or create a Tb_factura
     * const tb_factura = await prisma.tb_factura.upsert({
     *   create: {
     *     // ... data to create a Tb_factura
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_factura we want to update
     *   }
     * })
     */
    upsert<T extends tb_facturaUpsertArgs>(args: SelectSubset<T, tb_facturaUpsertArgs<ExtArgs>>): Prisma__tb_facturaClient<$Result.GetResult<Prisma.$tb_facturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_facturas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_facturaCountArgs} args - Arguments to filter Tb_facturas to count.
     * @example
     * // Count the number of Tb_facturas
     * const count = await prisma.tb_factura.count({
     *   where: {
     *     // ... the filter for the Tb_facturas we want to count
     *   }
     * })
    **/
    count<T extends tb_facturaCountArgs>(
      args?: Subset<T, tb_facturaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_facturaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_facturaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_facturaAggregateArgs>(args: Subset<T, Tb_facturaAggregateArgs>): Prisma.PrismaPromise<GetTb_facturaAggregateType<T>>

    /**
     * Group by Tb_factura.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_facturaGroupByArgs} args - Group by arguments.
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
      T extends tb_facturaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_facturaGroupByArgs['orderBy'] }
        : { orderBy?: tb_facturaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_facturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_facturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_factura model
   */
  readonly fields: tb_facturaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_factura.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_facturaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reparacion<T extends tb_factura$reparacionArgs<ExtArgs> = {}>(args?: Subset<T, tb_factura$reparacionArgs<ExtArgs>>): Prisma__tb_reparacionClient<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tb_factura model
   */
  interface tb_facturaFieldRefs {
    readonly ID_Factura: FieldRef<"tb_factura", 'Int'>
    readonly ID_Reparacion: FieldRef<"tb_factura", 'Int'>
    readonly Fecha_Emision: FieldRef<"tb_factura", 'DateTime'>
    readonly Subtotal: FieldRef<"tb_factura", 'Decimal'>
    readonly IVA: FieldRef<"tb_factura", 'Decimal'>
    readonly Total: FieldRef<"tb_factura", 'Decimal'>
    readonly Metodo_Pago: FieldRef<"tb_factura", 'String'>
    readonly Estado: FieldRef<"tb_factura", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_factura findUnique
   */
  export type tb_facturaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_factura
     */
    select?: tb_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_factura
     */
    omit?: tb_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_facturaInclude<ExtArgs> | null
    /**
     * Filter, which tb_factura to fetch.
     */
    where: tb_facturaWhereUniqueInput
  }

  /**
   * tb_factura findUniqueOrThrow
   */
  export type tb_facturaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_factura
     */
    select?: tb_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_factura
     */
    omit?: tb_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_facturaInclude<ExtArgs> | null
    /**
     * Filter, which tb_factura to fetch.
     */
    where: tb_facturaWhereUniqueInput
  }

  /**
   * tb_factura findFirst
   */
  export type tb_facturaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_factura
     */
    select?: tb_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_factura
     */
    omit?: tb_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_facturaInclude<ExtArgs> | null
    /**
     * Filter, which tb_factura to fetch.
     */
    where?: tb_facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_facturas to fetch.
     */
    orderBy?: tb_facturaOrderByWithRelationInput | tb_facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_facturas.
     */
    cursor?: tb_facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_facturas.
     */
    distinct?: Tb_facturaScalarFieldEnum | Tb_facturaScalarFieldEnum[]
  }

  /**
   * tb_factura findFirstOrThrow
   */
  export type tb_facturaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_factura
     */
    select?: tb_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_factura
     */
    omit?: tb_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_facturaInclude<ExtArgs> | null
    /**
     * Filter, which tb_factura to fetch.
     */
    where?: tb_facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_facturas to fetch.
     */
    orderBy?: tb_facturaOrderByWithRelationInput | tb_facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_facturas.
     */
    cursor?: tb_facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_facturas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_facturas.
     */
    distinct?: Tb_facturaScalarFieldEnum | Tb_facturaScalarFieldEnum[]
  }

  /**
   * tb_factura findMany
   */
  export type tb_facturaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_factura
     */
    select?: tb_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_factura
     */
    omit?: tb_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_facturaInclude<ExtArgs> | null
    /**
     * Filter, which tb_facturas to fetch.
     */
    where?: tb_facturaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_facturas to fetch.
     */
    orderBy?: tb_facturaOrderByWithRelationInput | tb_facturaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_facturas.
     */
    cursor?: tb_facturaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_facturas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_facturas.
     */
    skip?: number
    distinct?: Tb_facturaScalarFieldEnum | Tb_facturaScalarFieldEnum[]
  }

  /**
   * tb_factura create
   */
  export type tb_facturaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_factura
     */
    select?: tb_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_factura
     */
    omit?: tb_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_facturaInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_factura.
     */
    data?: XOR<tb_facturaCreateInput, tb_facturaUncheckedCreateInput>
  }

  /**
   * tb_factura createMany
   */
  export type tb_facturaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_facturas.
     */
    data: tb_facturaCreateManyInput | tb_facturaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_factura update
   */
  export type tb_facturaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_factura
     */
    select?: tb_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_factura
     */
    omit?: tb_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_facturaInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_factura.
     */
    data: XOR<tb_facturaUpdateInput, tb_facturaUncheckedUpdateInput>
    /**
     * Choose, which tb_factura to update.
     */
    where: tb_facturaWhereUniqueInput
  }

  /**
   * tb_factura updateMany
   */
  export type tb_facturaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_facturas.
     */
    data: XOR<tb_facturaUpdateManyMutationInput, tb_facturaUncheckedUpdateManyInput>
    /**
     * Filter which tb_facturas to update
     */
    where?: tb_facturaWhereInput
    /**
     * Limit how many tb_facturas to update.
     */
    limit?: number
  }

  /**
   * tb_factura upsert
   */
  export type tb_facturaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_factura
     */
    select?: tb_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_factura
     */
    omit?: tb_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_facturaInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_factura to update in case it exists.
     */
    where: tb_facturaWhereUniqueInput
    /**
     * In case the tb_factura found by the `where` argument doesn't exist, create a new tb_factura with this data.
     */
    create: XOR<tb_facturaCreateInput, tb_facturaUncheckedCreateInput>
    /**
     * In case the tb_factura was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_facturaUpdateInput, tb_facturaUncheckedUpdateInput>
  }

  /**
   * tb_factura delete
   */
  export type tb_facturaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_factura
     */
    select?: tb_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_factura
     */
    omit?: tb_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_facturaInclude<ExtArgs> | null
    /**
     * Filter which tb_factura to delete.
     */
    where: tb_facturaWhereUniqueInput
  }

  /**
   * tb_factura deleteMany
   */
  export type tb_facturaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_facturas to delete
     */
    where?: tb_facturaWhereInput
    /**
     * Limit how many tb_facturas to delete.
     */
    limit?: number
  }

  /**
   * tb_factura.reparacion
   */
  export type tb_factura$reparacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    where?: tb_reparacionWhereInput
  }

  /**
   * tb_factura without action
   */
  export type tb_facturaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_factura
     */
    select?: tb_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_factura
     */
    omit?: tb_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_facturaInclude<ExtArgs> | null
  }


  /**
   * Model tb_notificacion
   */

  export type AggregateTb_notificacion = {
    _count: Tb_notificacionCountAggregateOutputType | null
    _avg: Tb_notificacionAvgAggregateOutputType | null
    _sum: Tb_notificacionSumAggregateOutputType | null
    _min: Tb_notificacionMinAggregateOutputType | null
    _max: Tb_notificacionMaxAggregateOutputType | null
  }

  export type Tb_notificacionAvgAggregateOutputType = {
    ID_Notificacion: number | null
    ID_Cliente: number | null
    ID_Reparacion: number | null
    ID_Usuario: number | null
  }

  export type Tb_notificacionSumAggregateOutputType = {
    ID_Notificacion: number | null
    ID_Cliente: number | null
    ID_Reparacion: number | null
    ID_Usuario: number | null
  }

  export type Tb_notificacionMinAggregateOutputType = {
    ID_Notificacion: number | null
    ID_Cliente: number | null
    ID_Reparacion: number | null
    ID_Usuario: number | null
    Mensaje: string | null
    Fecha_Envio: Date | null
    Enviado: boolean | null
    Tipo: string | null
    Tipo_Cambio: string | null
    Aprobado: boolean | null
  }

  export type Tb_notificacionMaxAggregateOutputType = {
    ID_Notificacion: number | null
    ID_Cliente: number | null
    ID_Reparacion: number | null
    ID_Usuario: number | null
    Mensaje: string | null
    Fecha_Envio: Date | null
    Enviado: boolean | null
    Tipo: string | null
    Tipo_Cambio: string | null
    Aprobado: boolean | null
  }

  export type Tb_notificacionCountAggregateOutputType = {
    ID_Notificacion: number
    ID_Cliente: number
    ID_Reparacion: number
    ID_Usuario: number
    Mensaje: number
    Fecha_Envio: number
    Enviado: number
    Tipo: number
    Tipo_Cambio: number
    Aprobado: number
    Datos_Cambio: number
    _all: number
  }


  export type Tb_notificacionAvgAggregateInputType = {
    ID_Notificacion?: true
    ID_Cliente?: true
    ID_Reparacion?: true
    ID_Usuario?: true
  }

  export type Tb_notificacionSumAggregateInputType = {
    ID_Notificacion?: true
    ID_Cliente?: true
    ID_Reparacion?: true
    ID_Usuario?: true
  }

  export type Tb_notificacionMinAggregateInputType = {
    ID_Notificacion?: true
    ID_Cliente?: true
    ID_Reparacion?: true
    ID_Usuario?: true
    Mensaje?: true
    Fecha_Envio?: true
    Enviado?: true
    Tipo?: true
    Tipo_Cambio?: true
    Aprobado?: true
  }

  export type Tb_notificacionMaxAggregateInputType = {
    ID_Notificacion?: true
    ID_Cliente?: true
    ID_Reparacion?: true
    ID_Usuario?: true
    Mensaje?: true
    Fecha_Envio?: true
    Enviado?: true
    Tipo?: true
    Tipo_Cambio?: true
    Aprobado?: true
  }

  export type Tb_notificacionCountAggregateInputType = {
    ID_Notificacion?: true
    ID_Cliente?: true
    ID_Reparacion?: true
    ID_Usuario?: true
    Mensaje?: true
    Fecha_Envio?: true
    Enviado?: true
    Tipo?: true
    Tipo_Cambio?: true
    Aprobado?: true
    Datos_Cambio?: true
    _all?: true
  }

  export type Tb_notificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_notificacion to aggregate.
     */
    where?: tb_notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_notificacions to fetch.
     */
    orderBy?: tb_notificacionOrderByWithRelationInput | tb_notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_notificacions
    **/
    _count?: true | Tb_notificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_notificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_notificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_notificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_notificacionMaxAggregateInputType
  }

  export type GetTb_notificacionAggregateType<T extends Tb_notificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_notificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_notificacion[P]>
      : GetScalarType<T[P], AggregateTb_notificacion[P]>
  }




  export type tb_notificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_notificacionWhereInput
    orderBy?: tb_notificacionOrderByWithAggregationInput | tb_notificacionOrderByWithAggregationInput[]
    by: Tb_notificacionScalarFieldEnum[] | Tb_notificacionScalarFieldEnum
    having?: tb_notificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_notificacionCountAggregateInputType | true
    _avg?: Tb_notificacionAvgAggregateInputType
    _sum?: Tb_notificacionSumAggregateInputType
    _min?: Tb_notificacionMinAggregateInputType
    _max?: Tb_notificacionMaxAggregateInputType
  }

  export type Tb_notificacionGroupByOutputType = {
    ID_Notificacion: number
    ID_Cliente: number | null
    ID_Reparacion: number | null
    ID_Usuario: number | null
    Mensaje: string | null
    Fecha_Envio: Date | null
    Enviado: boolean | null
    Tipo: string | null
    Tipo_Cambio: string | null
    Aprobado: boolean | null
    Datos_Cambio: JsonValue | null
    _count: Tb_notificacionCountAggregateOutputType | null
    _avg: Tb_notificacionAvgAggregateOutputType | null
    _sum: Tb_notificacionSumAggregateOutputType | null
    _min: Tb_notificacionMinAggregateOutputType | null
    _max: Tb_notificacionMaxAggregateOutputType | null
  }

  type GetTb_notificacionGroupByPayload<T extends tb_notificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_notificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_notificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_notificacionGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_notificacionGroupByOutputType[P]>
        }
      >
    >


  export type tb_notificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Notificacion?: boolean
    ID_Cliente?: boolean
    ID_Reparacion?: boolean
    ID_Usuario?: boolean
    Mensaje?: boolean
    Fecha_Envio?: boolean
    Enviado?: boolean
    Tipo?: boolean
    Tipo_Cambio?: boolean
    Aprobado?: boolean
    Datos_Cambio?: boolean
    cliente?: boolean | tb_notificacion$clienteArgs<ExtArgs>
    reparacion?: boolean | tb_notificacion$reparacionArgs<ExtArgs>
    usuario?: boolean | tb_notificacion$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["tb_notificacion"]>



  export type tb_notificacionSelectScalar = {
    ID_Notificacion?: boolean
    ID_Cliente?: boolean
    ID_Reparacion?: boolean
    ID_Usuario?: boolean
    Mensaje?: boolean
    Fecha_Envio?: boolean
    Enviado?: boolean
    Tipo?: boolean
    Tipo_Cambio?: boolean
    Aprobado?: boolean
    Datos_Cambio?: boolean
  }

  export type tb_notificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Notificacion" | "ID_Cliente" | "ID_Reparacion" | "ID_Usuario" | "Mensaje" | "Fecha_Envio" | "Enviado" | "Tipo" | "Tipo_Cambio" | "Aprobado" | "Datos_Cambio", ExtArgs["result"]["tb_notificacion"]>
  export type tb_notificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | tb_notificacion$clienteArgs<ExtArgs>
    reparacion?: boolean | tb_notificacion$reparacionArgs<ExtArgs>
    usuario?: boolean | tb_notificacion$usuarioArgs<ExtArgs>
  }

  export type $tb_notificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_notificacion"
    objects: {
      cliente: Prisma.$tb_clientePayload<ExtArgs> | null
      reparacion: Prisma.$tb_reparacionPayload<ExtArgs> | null
      usuario: Prisma.$tb_usuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Notificacion: number
      ID_Cliente: number | null
      ID_Reparacion: number | null
      ID_Usuario: number | null
      Mensaje: string | null
      Fecha_Envio: Date | null
      Enviado: boolean | null
      Tipo: string | null
      Tipo_Cambio: string | null
      Aprobado: boolean | null
      Datos_Cambio: Prisma.JsonValue | null
    }, ExtArgs["result"]["tb_notificacion"]>
    composites: {}
  }

  type tb_notificacionGetPayload<S extends boolean | null | undefined | tb_notificacionDefaultArgs> = $Result.GetResult<Prisma.$tb_notificacionPayload, S>

  type tb_notificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_notificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_notificacionCountAggregateInputType | true
    }

  export interface tb_notificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_notificacion'], meta: { name: 'tb_notificacion' } }
    /**
     * Find zero or one Tb_notificacion that matches the filter.
     * @param {tb_notificacionFindUniqueArgs} args - Arguments to find a Tb_notificacion
     * @example
     * // Get one Tb_notificacion
     * const tb_notificacion = await prisma.tb_notificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_notificacionFindUniqueArgs>(args: SelectSubset<T, tb_notificacionFindUniqueArgs<ExtArgs>>): Prisma__tb_notificacionClient<$Result.GetResult<Prisma.$tb_notificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_notificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_notificacionFindUniqueOrThrowArgs} args - Arguments to find a Tb_notificacion
     * @example
     * // Get one Tb_notificacion
     * const tb_notificacion = await prisma.tb_notificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_notificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_notificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_notificacionClient<$Result.GetResult<Prisma.$tb_notificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_notificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_notificacionFindFirstArgs} args - Arguments to find a Tb_notificacion
     * @example
     * // Get one Tb_notificacion
     * const tb_notificacion = await prisma.tb_notificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_notificacionFindFirstArgs>(args?: SelectSubset<T, tb_notificacionFindFirstArgs<ExtArgs>>): Prisma__tb_notificacionClient<$Result.GetResult<Prisma.$tb_notificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_notificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_notificacionFindFirstOrThrowArgs} args - Arguments to find a Tb_notificacion
     * @example
     * // Get one Tb_notificacion
     * const tb_notificacion = await prisma.tb_notificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_notificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_notificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_notificacionClient<$Result.GetResult<Prisma.$tb_notificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_notificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_notificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_notificacions
     * const tb_notificacions = await prisma.tb_notificacion.findMany()
     * 
     * // Get first 10 Tb_notificacions
     * const tb_notificacions = await prisma.tb_notificacion.findMany({ take: 10 })
     * 
     * // Only select the `ID_Notificacion`
     * const tb_notificacionWithID_NotificacionOnly = await prisma.tb_notificacion.findMany({ select: { ID_Notificacion: true } })
     * 
     */
    findMany<T extends tb_notificacionFindManyArgs>(args?: SelectSubset<T, tb_notificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_notificacion.
     * @param {tb_notificacionCreateArgs} args - Arguments to create a Tb_notificacion.
     * @example
     * // Create one Tb_notificacion
     * const Tb_notificacion = await prisma.tb_notificacion.create({
     *   data: {
     *     // ... data to create a Tb_notificacion
     *   }
     * })
     * 
     */
    create<T extends tb_notificacionCreateArgs>(args: SelectSubset<T, tb_notificacionCreateArgs<ExtArgs>>): Prisma__tb_notificacionClient<$Result.GetResult<Prisma.$tb_notificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_notificacions.
     * @param {tb_notificacionCreateManyArgs} args - Arguments to create many Tb_notificacions.
     * @example
     * // Create many Tb_notificacions
     * const tb_notificacion = await prisma.tb_notificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_notificacionCreateManyArgs>(args?: SelectSubset<T, tb_notificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_notificacion.
     * @param {tb_notificacionDeleteArgs} args - Arguments to delete one Tb_notificacion.
     * @example
     * // Delete one Tb_notificacion
     * const Tb_notificacion = await prisma.tb_notificacion.delete({
     *   where: {
     *     // ... filter to delete one Tb_notificacion
     *   }
     * })
     * 
     */
    delete<T extends tb_notificacionDeleteArgs>(args: SelectSubset<T, tb_notificacionDeleteArgs<ExtArgs>>): Prisma__tb_notificacionClient<$Result.GetResult<Prisma.$tb_notificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_notificacion.
     * @param {tb_notificacionUpdateArgs} args - Arguments to update one Tb_notificacion.
     * @example
     * // Update one Tb_notificacion
     * const tb_notificacion = await prisma.tb_notificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_notificacionUpdateArgs>(args: SelectSubset<T, tb_notificacionUpdateArgs<ExtArgs>>): Prisma__tb_notificacionClient<$Result.GetResult<Prisma.$tb_notificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_notificacions.
     * @param {tb_notificacionDeleteManyArgs} args - Arguments to filter Tb_notificacions to delete.
     * @example
     * // Delete a few Tb_notificacions
     * const { count } = await prisma.tb_notificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_notificacionDeleteManyArgs>(args?: SelectSubset<T, tb_notificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_notificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_notificacions
     * const tb_notificacion = await prisma.tb_notificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_notificacionUpdateManyArgs>(args: SelectSubset<T, tb_notificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_notificacion.
     * @param {tb_notificacionUpsertArgs} args - Arguments to update or create a Tb_notificacion.
     * @example
     * // Update or create a Tb_notificacion
     * const tb_notificacion = await prisma.tb_notificacion.upsert({
     *   create: {
     *     // ... data to create a Tb_notificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_notificacion we want to update
     *   }
     * })
     */
    upsert<T extends tb_notificacionUpsertArgs>(args: SelectSubset<T, tb_notificacionUpsertArgs<ExtArgs>>): Prisma__tb_notificacionClient<$Result.GetResult<Prisma.$tb_notificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_notificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_notificacionCountArgs} args - Arguments to filter Tb_notificacions to count.
     * @example
     * // Count the number of Tb_notificacions
     * const count = await prisma.tb_notificacion.count({
     *   where: {
     *     // ... the filter for the Tb_notificacions we want to count
     *   }
     * })
    **/
    count<T extends tb_notificacionCountArgs>(
      args?: Subset<T, tb_notificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_notificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_notificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_notificacionAggregateArgs>(args: Subset<T, Tb_notificacionAggregateArgs>): Prisma.PrismaPromise<GetTb_notificacionAggregateType<T>>

    /**
     * Group by Tb_notificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_notificacionGroupByArgs} args - Group by arguments.
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
      T extends tb_notificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_notificacionGroupByArgs['orderBy'] }
        : { orderBy?: tb_notificacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_notificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_notificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_notificacion model
   */
  readonly fields: tb_notificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_notificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_notificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends tb_notificacion$clienteArgs<ExtArgs> = {}>(args?: Subset<T, tb_notificacion$clienteArgs<ExtArgs>>): Prisma__tb_clienteClient<$Result.GetResult<Prisma.$tb_clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reparacion<T extends tb_notificacion$reparacionArgs<ExtArgs> = {}>(args?: Subset<T, tb_notificacion$reparacionArgs<ExtArgs>>): Prisma__tb_reparacionClient<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends tb_notificacion$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, tb_notificacion$usuarioArgs<ExtArgs>>): Prisma__tb_usuarioClient<$Result.GetResult<Prisma.$tb_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tb_notificacion model
   */
  interface tb_notificacionFieldRefs {
    readonly ID_Notificacion: FieldRef<"tb_notificacion", 'Int'>
    readonly ID_Cliente: FieldRef<"tb_notificacion", 'Int'>
    readonly ID_Reparacion: FieldRef<"tb_notificacion", 'Int'>
    readonly ID_Usuario: FieldRef<"tb_notificacion", 'Int'>
    readonly Mensaje: FieldRef<"tb_notificacion", 'String'>
    readonly Fecha_Envio: FieldRef<"tb_notificacion", 'DateTime'>
    readonly Enviado: FieldRef<"tb_notificacion", 'Boolean'>
    readonly Tipo: FieldRef<"tb_notificacion", 'String'>
    readonly Tipo_Cambio: FieldRef<"tb_notificacion", 'String'>
    readonly Aprobado: FieldRef<"tb_notificacion", 'Boolean'>
    readonly Datos_Cambio: FieldRef<"tb_notificacion", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * tb_notificacion findUnique
   */
  export type tb_notificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_notificacion
     */
    select?: tb_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_notificacion
     */
    omit?: tb_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_notificacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_notificacion to fetch.
     */
    where: tb_notificacionWhereUniqueInput
  }

  /**
   * tb_notificacion findUniqueOrThrow
   */
  export type tb_notificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_notificacion
     */
    select?: tb_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_notificacion
     */
    omit?: tb_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_notificacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_notificacion to fetch.
     */
    where: tb_notificacionWhereUniqueInput
  }

  /**
   * tb_notificacion findFirst
   */
  export type tb_notificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_notificacion
     */
    select?: tb_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_notificacion
     */
    omit?: tb_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_notificacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_notificacion to fetch.
     */
    where?: tb_notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_notificacions to fetch.
     */
    orderBy?: tb_notificacionOrderByWithRelationInput | tb_notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_notificacions.
     */
    cursor?: tb_notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_notificacions.
     */
    distinct?: Tb_notificacionScalarFieldEnum | Tb_notificacionScalarFieldEnum[]
  }

  /**
   * tb_notificacion findFirstOrThrow
   */
  export type tb_notificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_notificacion
     */
    select?: tb_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_notificacion
     */
    omit?: tb_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_notificacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_notificacion to fetch.
     */
    where?: tb_notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_notificacions to fetch.
     */
    orderBy?: tb_notificacionOrderByWithRelationInput | tb_notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_notificacions.
     */
    cursor?: tb_notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_notificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_notificacions.
     */
    distinct?: Tb_notificacionScalarFieldEnum | Tb_notificacionScalarFieldEnum[]
  }

  /**
   * tb_notificacion findMany
   */
  export type tb_notificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_notificacion
     */
    select?: tb_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_notificacion
     */
    omit?: tb_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_notificacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_notificacions to fetch.
     */
    where?: tb_notificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_notificacions to fetch.
     */
    orderBy?: tb_notificacionOrderByWithRelationInput | tb_notificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_notificacions.
     */
    cursor?: tb_notificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_notificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_notificacions.
     */
    skip?: number
    distinct?: Tb_notificacionScalarFieldEnum | Tb_notificacionScalarFieldEnum[]
  }

  /**
   * tb_notificacion create
   */
  export type tb_notificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_notificacion
     */
    select?: tb_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_notificacion
     */
    omit?: tb_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_notificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_notificacion.
     */
    data?: XOR<tb_notificacionCreateInput, tb_notificacionUncheckedCreateInput>
  }

  /**
   * tb_notificacion createMany
   */
  export type tb_notificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_notificacions.
     */
    data: tb_notificacionCreateManyInput | tb_notificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_notificacion update
   */
  export type tb_notificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_notificacion
     */
    select?: tb_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_notificacion
     */
    omit?: tb_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_notificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_notificacion.
     */
    data: XOR<tb_notificacionUpdateInput, tb_notificacionUncheckedUpdateInput>
    /**
     * Choose, which tb_notificacion to update.
     */
    where: tb_notificacionWhereUniqueInput
  }

  /**
   * tb_notificacion updateMany
   */
  export type tb_notificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_notificacions.
     */
    data: XOR<tb_notificacionUpdateManyMutationInput, tb_notificacionUncheckedUpdateManyInput>
    /**
     * Filter which tb_notificacions to update
     */
    where?: tb_notificacionWhereInput
    /**
     * Limit how many tb_notificacions to update.
     */
    limit?: number
  }

  /**
   * tb_notificacion upsert
   */
  export type tb_notificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_notificacion
     */
    select?: tb_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_notificacion
     */
    omit?: tb_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_notificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_notificacion to update in case it exists.
     */
    where: tb_notificacionWhereUniqueInput
    /**
     * In case the tb_notificacion found by the `where` argument doesn't exist, create a new tb_notificacion with this data.
     */
    create: XOR<tb_notificacionCreateInput, tb_notificacionUncheckedCreateInput>
    /**
     * In case the tb_notificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_notificacionUpdateInput, tb_notificacionUncheckedUpdateInput>
  }

  /**
   * tb_notificacion delete
   */
  export type tb_notificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_notificacion
     */
    select?: tb_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_notificacion
     */
    omit?: tb_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_notificacionInclude<ExtArgs> | null
    /**
     * Filter which tb_notificacion to delete.
     */
    where: tb_notificacionWhereUniqueInput
  }

  /**
   * tb_notificacion deleteMany
   */
  export type tb_notificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_notificacions to delete
     */
    where?: tb_notificacionWhereInput
    /**
     * Limit how many tb_notificacions to delete.
     */
    limit?: number
  }

  /**
   * tb_notificacion.cliente
   */
  export type tb_notificacion$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
    where?: tb_clienteWhereInput
  }

  /**
   * tb_notificacion.reparacion
   */
  export type tb_notificacion$reparacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    where?: tb_reparacionWhereInput
  }

  /**
   * tb_notificacion.usuario
   */
  export type tb_notificacion$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
    where?: tb_usuarioWhereInput
  }

  /**
   * tb_notificacion without action
   */
  export type tb_notificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_notificacion
     */
    select?: tb_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_notificacion
     */
    omit?: tb_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_notificacionInclude<ExtArgs> | null
  }


  /**
   * Model tb_reparacion
   */

  export type AggregateTb_reparacion = {
    _count: Tb_reparacionCountAggregateOutputType | null
    _avg: Tb_reparacionAvgAggregateOutputType | null
    _sum: Tb_reparacionSumAggregateOutputType | null
    _min: Tb_reparacionMinAggregateOutputType | null
    _max: Tb_reparacionMaxAggregateOutputType | null
  }

  export type Tb_reparacionAvgAggregateOutputType = {
    ID_Reparacion: number | null
    ID_Cliente: number | null
    ID_Tecnico: number | null
    ID_Equipo: number | null
    CostoServicio: Decimal | null
    IVA: Decimal | null
    Total: Decimal | null
  }

  export type Tb_reparacionSumAggregateOutputType = {
    ID_Reparacion: number | null
    ID_Cliente: number | null
    ID_Tecnico: number | null
    ID_Equipo: number | null
    CostoServicio: Decimal | null
    IVA: Decimal | null
    Total: Decimal | null
  }

  export type Tb_reparacionMinAggregateOutputType = {
    ID_Reparacion: number | null
    ID_Cliente: number | null
    ID_Tecnico: number | null
    ID_Equipo: number | null
    Fecha_Ingreso: Date | null
    Fecha_Entrega: Date | null
    CostoServicio: Decimal | null
    IVA: Decimal | null
    Total: Decimal | null
  }

  export type Tb_reparacionMaxAggregateOutputType = {
    ID_Reparacion: number | null
    ID_Cliente: number | null
    ID_Tecnico: number | null
    ID_Equipo: number | null
    Fecha_Ingreso: Date | null
    Fecha_Entrega: Date | null
    CostoServicio: Decimal | null
    IVA: Decimal | null
    Total: Decimal | null
  }

  export type Tb_reparacionCountAggregateOutputType = {
    ID_Reparacion: number
    ID_Cliente: number
    ID_Tecnico: number
    ID_Equipo: number
    Fecha_Ingreso: number
    Fecha_Entrega: number
    CostoServicio: number
    IVA: number
    Total: number
    _all: number
  }


  export type Tb_reparacionAvgAggregateInputType = {
    ID_Reparacion?: true
    ID_Cliente?: true
    ID_Tecnico?: true
    ID_Equipo?: true
    CostoServicio?: true
    IVA?: true
    Total?: true
  }

  export type Tb_reparacionSumAggregateInputType = {
    ID_Reparacion?: true
    ID_Cliente?: true
    ID_Tecnico?: true
    ID_Equipo?: true
    CostoServicio?: true
    IVA?: true
    Total?: true
  }

  export type Tb_reparacionMinAggregateInputType = {
    ID_Reparacion?: true
    ID_Cliente?: true
    ID_Tecnico?: true
    ID_Equipo?: true
    Fecha_Ingreso?: true
    Fecha_Entrega?: true
    CostoServicio?: true
    IVA?: true
    Total?: true
  }

  export type Tb_reparacionMaxAggregateInputType = {
    ID_Reparacion?: true
    ID_Cliente?: true
    ID_Tecnico?: true
    ID_Equipo?: true
    Fecha_Ingreso?: true
    Fecha_Entrega?: true
    CostoServicio?: true
    IVA?: true
    Total?: true
  }

  export type Tb_reparacionCountAggregateInputType = {
    ID_Reparacion?: true
    ID_Cliente?: true
    ID_Tecnico?: true
    ID_Equipo?: true
    Fecha_Ingreso?: true
    Fecha_Entrega?: true
    CostoServicio?: true
    IVA?: true
    Total?: true
    _all?: true
  }

  export type Tb_reparacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_reparacion to aggregate.
     */
    where?: tb_reparacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_reparacions to fetch.
     */
    orderBy?: tb_reparacionOrderByWithRelationInput | tb_reparacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_reparacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_reparacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_reparacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_reparacions
    **/
    _count?: true | Tb_reparacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_reparacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_reparacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_reparacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_reparacionMaxAggregateInputType
  }

  export type GetTb_reparacionAggregateType<T extends Tb_reparacionAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_reparacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_reparacion[P]>
      : GetScalarType<T[P], AggregateTb_reparacion[P]>
  }




  export type tb_reparacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_reparacionWhereInput
    orderBy?: tb_reparacionOrderByWithAggregationInput | tb_reparacionOrderByWithAggregationInput[]
    by: Tb_reparacionScalarFieldEnum[] | Tb_reparacionScalarFieldEnum
    having?: tb_reparacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_reparacionCountAggregateInputType | true
    _avg?: Tb_reparacionAvgAggregateInputType
    _sum?: Tb_reparacionSumAggregateInputType
    _min?: Tb_reparacionMinAggregateInputType
    _max?: Tb_reparacionMaxAggregateInputType
  }

  export type Tb_reparacionGroupByOutputType = {
    ID_Reparacion: number
    ID_Cliente: number | null
    ID_Tecnico: number | null
    ID_Equipo: number | null
    Fecha_Ingreso: Date | null
    Fecha_Entrega: Date | null
    CostoServicio: Decimal | null
    IVA: Decimal | null
    Total: Decimal | null
    _count: Tb_reparacionCountAggregateOutputType | null
    _avg: Tb_reparacionAvgAggregateOutputType | null
    _sum: Tb_reparacionSumAggregateOutputType | null
    _min: Tb_reparacionMinAggregateOutputType | null
    _max: Tb_reparacionMaxAggregateOutputType | null
  }

  type GetTb_reparacionGroupByPayload<T extends tb_reparacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_reparacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_reparacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_reparacionGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_reparacionGroupByOutputType[P]>
        }
      >
    >


  export type tb_reparacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Reparacion?: boolean
    ID_Cliente?: boolean
    ID_Tecnico?: boolean
    ID_Equipo?: boolean
    Fecha_Ingreso?: boolean
    Fecha_Entrega?: boolean
    CostoServicio?: boolean
    IVA?: boolean
    Total?: boolean
    cliente?: boolean | tb_reparacion$clienteArgs<ExtArgs>
    tecnico?: boolean | tb_reparacion$tecnicoArgs<ExtArgs>
    equipo?: boolean | tb_reparacion$equipoArgs<ExtArgs>
    estados?: boolean | tb_reparacion$estadosArgs<ExtArgs>
    detalles?: boolean | tb_reparacion$detallesArgs<ExtArgs>
    factura?: boolean | tb_reparacion$facturaArgs<ExtArgs>
    tb_notificacion?: boolean | tb_reparacion$tb_notificacionArgs<ExtArgs>
    _count?: boolean | Tb_reparacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_reparacion"]>



  export type tb_reparacionSelectScalar = {
    ID_Reparacion?: boolean
    ID_Cliente?: boolean
    ID_Tecnico?: boolean
    ID_Equipo?: boolean
    Fecha_Ingreso?: boolean
    Fecha_Entrega?: boolean
    CostoServicio?: boolean
    IVA?: boolean
    Total?: boolean
  }

  export type tb_reparacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Reparacion" | "ID_Cliente" | "ID_Tecnico" | "ID_Equipo" | "Fecha_Ingreso" | "Fecha_Entrega" | "CostoServicio" | "IVA" | "Total", ExtArgs["result"]["tb_reparacion"]>
  export type tb_reparacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | tb_reparacion$clienteArgs<ExtArgs>
    tecnico?: boolean | tb_reparacion$tecnicoArgs<ExtArgs>
    equipo?: boolean | tb_reparacion$equipoArgs<ExtArgs>
    estados?: boolean | tb_reparacion$estadosArgs<ExtArgs>
    detalles?: boolean | tb_reparacion$detallesArgs<ExtArgs>
    factura?: boolean | tb_reparacion$facturaArgs<ExtArgs>
    tb_notificacion?: boolean | tb_reparacion$tb_notificacionArgs<ExtArgs>
    _count?: boolean | Tb_reparacionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tb_reparacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_reparacion"
    objects: {
      cliente: Prisma.$tb_clientePayload<ExtArgs> | null
      tecnico: Prisma.$tb_tecnicoPayload<ExtArgs> | null
      equipo: Prisma.$tb_equipoPayload<ExtArgs> | null
      estados: Prisma.$tb_estado_reparacionPayload<ExtArgs>[]
      detalles: Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>[]
      factura: Prisma.$tb_facturaPayload<ExtArgs> | null
      tb_notificacion: Prisma.$tb_notificacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Reparacion: number
      ID_Cliente: number | null
      ID_Tecnico: number | null
      ID_Equipo: number | null
      Fecha_Ingreso: Date | null
      Fecha_Entrega: Date | null
      CostoServicio: Prisma.Decimal | null
      IVA: Prisma.Decimal | null
      Total: Prisma.Decimal | null
    }, ExtArgs["result"]["tb_reparacion"]>
    composites: {}
  }

  type tb_reparacionGetPayload<S extends boolean | null | undefined | tb_reparacionDefaultArgs> = $Result.GetResult<Prisma.$tb_reparacionPayload, S>

  type tb_reparacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_reparacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_reparacionCountAggregateInputType | true
    }

  export interface tb_reparacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_reparacion'], meta: { name: 'tb_reparacion' } }
    /**
     * Find zero or one Tb_reparacion that matches the filter.
     * @param {tb_reparacionFindUniqueArgs} args - Arguments to find a Tb_reparacion
     * @example
     * // Get one Tb_reparacion
     * const tb_reparacion = await prisma.tb_reparacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_reparacionFindUniqueArgs>(args: SelectSubset<T, tb_reparacionFindUniqueArgs<ExtArgs>>): Prisma__tb_reparacionClient<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_reparacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_reparacionFindUniqueOrThrowArgs} args - Arguments to find a Tb_reparacion
     * @example
     * // Get one Tb_reparacion
     * const tb_reparacion = await prisma.tb_reparacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_reparacionFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_reparacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_reparacionClient<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_reparacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_reparacionFindFirstArgs} args - Arguments to find a Tb_reparacion
     * @example
     * // Get one Tb_reparacion
     * const tb_reparacion = await prisma.tb_reparacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_reparacionFindFirstArgs>(args?: SelectSubset<T, tb_reparacionFindFirstArgs<ExtArgs>>): Prisma__tb_reparacionClient<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_reparacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_reparacionFindFirstOrThrowArgs} args - Arguments to find a Tb_reparacion
     * @example
     * // Get one Tb_reparacion
     * const tb_reparacion = await prisma.tb_reparacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_reparacionFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_reparacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_reparacionClient<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_reparacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_reparacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_reparacions
     * const tb_reparacions = await prisma.tb_reparacion.findMany()
     * 
     * // Get first 10 Tb_reparacions
     * const tb_reparacions = await prisma.tb_reparacion.findMany({ take: 10 })
     * 
     * // Only select the `ID_Reparacion`
     * const tb_reparacionWithID_ReparacionOnly = await prisma.tb_reparacion.findMany({ select: { ID_Reparacion: true } })
     * 
     */
    findMany<T extends tb_reparacionFindManyArgs>(args?: SelectSubset<T, tb_reparacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_reparacion.
     * @param {tb_reparacionCreateArgs} args - Arguments to create a Tb_reparacion.
     * @example
     * // Create one Tb_reparacion
     * const Tb_reparacion = await prisma.tb_reparacion.create({
     *   data: {
     *     // ... data to create a Tb_reparacion
     *   }
     * })
     * 
     */
    create<T extends tb_reparacionCreateArgs>(args: SelectSubset<T, tb_reparacionCreateArgs<ExtArgs>>): Prisma__tb_reparacionClient<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_reparacions.
     * @param {tb_reparacionCreateManyArgs} args - Arguments to create many Tb_reparacions.
     * @example
     * // Create many Tb_reparacions
     * const tb_reparacion = await prisma.tb_reparacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_reparacionCreateManyArgs>(args?: SelectSubset<T, tb_reparacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_reparacion.
     * @param {tb_reparacionDeleteArgs} args - Arguments to delete one Tb_reparacion.
     * @example
     * // Delete one Tb_reparacion
     * const Tb_reparacion = await prisma.tb_reparacion.delete({
     *   where: {
     *     // ... filter to delete one Tb_reparacion
     *   }
     * })
     * 
     */
    delete<T extends tb_reparacionDeleteArgs>(args: SelectSubset<T, tb_reparacionDeleteArgs<ExtArgs>>): Prisma__tb_reparacionClient<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_reparacion.
     * @param {tb_reparacionUpdateArgs} args - Arguments to update one Tb_reparacion.
     * @example
     * // Update one Tb_reparacion
     * const tb_reparacion = await prisma.tb_reparacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_reparacionUpdateArgs>(args: SelectSubset<T, tb_reparacionUpdateArgs<ExtArgs>>): Prisma__tb_reparacionClient<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_reparacions.
     * @param {tb_reparacionDeleteManyArgs} args - Arguments to filter Tb_reparacions to delete.
     * @example
     * // Delete a few Tb_reparacions
     * const { count } = await prisma.tb_reparacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_reparacionDeleteManyArgs>(args?: SelectSubset<T, tb_reparacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_reparacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_reparacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_reparacions
     * const tb_reparacion = await prisma.tb_reparacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_reparacionUpdateManyArgs>(args: SelectSubset<T, tb_reparacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_reparacion.
     * @param {tb_reparacionUpsertArgs} args - Arguments to update or create a Tb_reparacion.
     * @example
     * // Update or create a Tb_reparacion
     * const tb_reparacion = await prisma.tb_reparacion.upsert({
     *   create: {
     *     // ... data to create a Tb_reparacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_reparacion we want to update
     *   }
     * })
     */
    upsert<T extends tb_reparacionUpsertArgs>(args: SelectSubset<T, tb_reparacionUpsertArgs<ExtArgs>>): Prisma__tb_reparacionClient<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_reparacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_reparacionCountArgs} args - Arguments to filter Tb_reparacions to count.
     * @example
     * // Count the number of Tb_reparacions
     * const count = await prisma.tb_reparacion.count({
     *   where: {
     *     // ... the filter for the Tb_reparacions we want to count
     *   }
     * })
    **/
    count<T extends tb_reparacionCountArgs>(
      args?: Subset<T, tb_reparacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_reparacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_reparacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_reparacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_reparacionAggregateArgs>(args: Subset<T, Tb_reparacionAggregateArgs>): Prisma.PrismaPromise<GetTb_reparacionAggregateType<T>>

    /**
     * Group by Tb_reparacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_reparacionGroupByArgs} args - Group by arguments.
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
      T extends tb_reparacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_reparacionGroupByArgs['orderBy'] }
        : { orderBy?: tb_reparacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_reparacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_reparacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_reparacion model
   */
  readonly fields: tb_reparacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_reparacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_reparacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends tb_reparacion$clienteArgs<ExtArgs> = {}>(args?: Subset<T, tb_reparacion$clienteArgs<ExtArgs>>): Prisma__tb_clienteClient<$Result.GetResult<Prisma.$tb_clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tecnico<T extends tb_reparacion$tecnicoArgs<ExtArgs> = {}>(args?: Subset<T, tb_reparacion$tecnicoArgs<ExtArgs>>): Prisma__tb_tecnicoClient<$Result.GetResult<Prisma.$tb_tecnicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    equipo<T extends tb_reparacion$equipoArgs<ExtArgs> = {}>(args?: Subset<T, tb_reparacion$equipoArgs<ExtArgs>>): Prisma__tb_equipoClient<$Result.GetResult<Prisma.$tb_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    estados<T extends tb_reparacion$estadosArgs<ExtArgs> = {}>(args?: Subset<T, tb_reparacion$estadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_estado_reparacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    detalles<T extends tb_reparacion$detallesArgs<ExtArgs> = {}>(args?: Subset<T, tb_reparacion$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    factura<T extends tb_reparacion$facturaArgs<ExtArgs> = {}>(args?: Subset<T, tb_reparacion$facturaArgs<ExtArgs>>): Prisma__tb_facturaClient<$Result.GetResult<Prisma.$tb_facturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tb_notificacion<T extends tb_reparacion$tb_notificacionArgs<ExtArgs> = {}>(args?: Subset<T, tb_reparacion$tb_notificacionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tb_reparacion model
   */
  interface tb_reparacionFieldRefs {
    readonly ID_Reparacion: FieldRef<"tb_reparacion", 'Int'>
    readonly ID_Cliente: FieldRef<"tb_reparacion", 'Int'>
    readonly ID_Tecnico: FieldRef<"tb_reparacion", 'Int'>
    readonly ID_Equipo: FieldRef<"tb_reparacion", 'Int'>
    readonly Fecha_Ingreso: FieldRef<"tb_reparacion", 'DateTime'>
    readonly Fecha_Entrega: FieldRef<"tb_reparacion", 'DateTime'>
    readonly CostoServicio: FieldRef<"tb_reparacion", 'Decimal'>
    readonly IVA: FieldRef<"tb_reparacion", 'Decimal'>
    readonly Total: FieldRef<"tb_reparacion", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * tb_reparacion findUnique
   */
  export type tb_reparacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_reparacion to fetch.
     */
    where: tb_reparacionWhereUniqueInput
  }

  /**
   * tb_reparacion findUniqueOrThrow
   */
  export type tb_reparacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_reparacion to fetch.
     */
    where: tb_reparacionWhereUniqueInput
  }

  /**
   * tb_reparacion findFirst
   */
  export type tb_reparacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_reparacion to fetch.
     */
    where?: tb_reparacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_reparacions to fetch.
     */
    orderBy?: tb_reparacionOrderByWithRelationInput | tb_reparacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_reparacions.
     */
    cursor?: tb_reparacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_reparacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_reparacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_reparacions.
     */
    distinct?: Tb_reparacionScalarFieldEnum | Tb_reparacionScalarFieldEnum[]
  }

  /**
   * tb_reparacion findFirstOrThrow
   */
  export type tb_reparacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_reparacion to fetch.
     */
    where?: tb_reparacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_reparacions to fetch.
     */
    orderBy?: tb_reparacionOrderByWithRelationInput | tb_reparacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_reparacions.
     */
    cursor?: tb_reparacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_reparacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_reparacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_reparacions.
     */
    distinct?: Tb_reparacionScalarFieldEnum | Tb_reparacionScalarFieldEnum[]
  }

  /**
   * tb_reparacion findMany
   */
  export type tb_reparacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    /**
     * Filter, which tb_reparacions to fetch.
     */
    where?: tb_reparacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_reparacions to fetch.
     */
    orderBy?: tb_reparacionOrderByWithRelationInput | tb_reparacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_reparacions.
     */
    cursor?: tb_reparacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_reparacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_reparacions.
     */
    skip?: number
    distinct?: Tb_reparacionScalarFieldEnum | Tb_reparacionScalarFieldEnum[]
  }

  /**
   * tb_reparacion create
   */
  export type tb_reparacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_reparacion.
     */
    data?: XOR<tb_reparacionCreateInput, tb_reparacionUncheckedCreateInput>
  }

  /**
   * tb_reparacion createMany
   */
  export type tb_reparacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_reparacions.
     */
    data: tb_reparacionCreateManyInput | tb_reparacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_reparacion update
   */
  export type tb_reparacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_reparacion.
     */
    data: XOR<tb_reparacionUpdateInput, tb_reparacionUncheckedUpdateInput>
    /**
     * Choose, which tb_reparacion to update.
     */
    where: tb_reparacionWhereUniqueInput
  }

  /**
   * tb_reparacion updateMany
   */
  export type tb_reparacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_reparacions.
     */
    data: XOR<tb_reparacionUpdateManyMutationInput, tb_reparacionUncheckedUpdateManyInput>
    /**
     * Filter which tb_reparacions to update
     */
    where?: tb_reparacionWhereInput
    /**
     * Limit how many tb_reparacions to update.
     */
    limit?: number
  }

  /**
   * tb_reparacion upsert
   */
  export type tb_reparacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_reparacion to update in case it exists.
     */
    where: tb_reparacionWhereUniqueInput
    /**
     * In case the tb_reparacion found by the `where` argument doesn't exist, create a new tb_reparacion with this data.
     */
    create: XOR<tb_reparacionCreateInput, tb_reparacionUncheckedCreateInput>
    /**
     * In case the tb_reparacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_reparacionUpdateInput, tb_reparacionUncheckedUpdateInput>
  }

  /**
   * tb_reparacion delete
   */
  export type tb_reparacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    /**
     * Filter which tb_reparacion to delete.
     */
    where: tb_reparacionWhereUniqueInput
  }

  /**
   * tb_reparacion deleteMany
   */
  export type tb_reparacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_reparacions to delete
     */
    where?: tb_reparacionWhereInput
    /**
     * Limit how many tb_reparacions to delete.
     */
    limit?: number
  }

  /**
   * tb_reparacion.cliente
   */
  export type tb_reparacion$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
    where?: tb_clienteWhereInput
  }

  /**
   * tb_reparacion.tecnico
   */
  export type tb_reparacion$tecnicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tecnico
     */
    select?: tb_tecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tecnico
     */
    omit?: tb_tecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_tecnicoInclude<ExtArgs> | null
    where?: tb_tecnicoWhereInput
  }

  /**
   * tb_reparacion.equipo
   */
  export type tb_reparacion$equipoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_equipo
     */
    select?: tb_equipoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_equipo
     */
    omit?: tb_equipoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_equipoInclude<ExtArgs> | null
    where?: tb_equipoWhereInput
  }

  /**
   * tb_reparacion.estados
   */
  export type tb_reparacion$estadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_estado_reparacion
     */
    select?: tb_estado_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_estado_reparacion
     */
    omit?: tb_estado_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_estado_reparacionInclude<ExtArgs> | null
    where?: tb_estado_reparacionWhereInput
    orderBy?: tb_estado_reparacionOrderByWithRelationInput | tb_estado_reparacionOrderByWithRelationInput[]
    cursor?: tb_estado_reparacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_estado_reparacionScalarFieldEnum | Tb_estado_reparacionScalarFieldEnum[]
  }

  /**
   * tb_reparacion.detalles
   */
  export type tb_reparacion$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_detalle_reparacion_repuesto
     */
    select?: tb_detalle_reparacion_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_detalle_reparacion_repuesto
     */
    omit?: tb_detalle_reparacion_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_detalle_reparacion_repuestoInclude<ExtArgs> | null
    where?: tb_detalle_reparacion_repuestoWhereInput
    orderBy?: tb_detalle_reparacion_repuestoOrderByWithRelationInput | tb_detalle_reparacion_repuestoOrderByWithRelationInput[]
    cursor?: tb_detalle_reparacion_repuestoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_detalle_reparacion_repuestoScalarFieldEnum | Tb_detalle_reparacion_repuestoScalarFieldEnum[]
  }

  /**
   * tb_reparacion.factura
   */
  export type tb_reparacion$facturaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_factura
     */
    select?: tb_facturaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_factura
     */
    omit?: tb_facturaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_facturaInclude<ExtArgs> | null
    where?: tb_facturaWhereInput
  }

  /**
   * tb_reparacion.tb_notificacion
   */
  export type tb_reparacion$tb_notificacionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_notificacion
     */
    select?: tb_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_notificacion
     */
    omit?: tb_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_notificacionInclude<ExtArgs> | null
    where?: tb_notificacionWhereInput
    orderBy?: tb_notificacionOrderByWithRelationInput | tb_notificacionOrderByWithRelationInput[]
    cursor?: tb_notificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_notificacionScalarFieldEnum | Tb_notificacionScalarFieldEnum[]
  }

  /**
   * tb_reparacion without action
   */
  export type tb_reparacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
  }


  /**
   * Model tb_repuesto
   */

  export type AggregateTb_repuesto = {
    _count: Tb_repuestoCountAggregateOutputType | null
    _avg: Tb_repuestoAvgAggregateOutputType | null
    _sum: Tb_repuestoSumAggregateOutputType | null
    _min: Tb_repuestoMinAggregateOutputType | null
    _max: Tb_repuestoMaxAggregateOutputType | null
  }

  export type Tb_repuestoAvgAggregateOutputType = {
    ID_Repuesto: number | null
    Precio: Decimal | null
  }

  export type Tb_repuestoSumAggregateOutputType = {
    ID_Repuesto: number | null
    Precio: Decimal | null
  }

  export type Tb_repuestoMinAggregateOutputType = {
    ID_Repuesto: number | null
    Nombre: string | null
    Precio: Decimal | null
  }

  export type Tb_repuestoMaxAggregateOutputType = {
    ID_Repuesto: number | null
    Nombre: string | null
    Precio: Decimal | null
  }

  export type Tb_repuestoCountAggregateOutputType = {
    ID_Repuesto: number
    Nombre: number
    Precio: number
    _all: number
  }


  export type Tb_repuestoAvgAggregateInputType = {
    ID_Repuesto?: true
    Precio?: true
  }

  export type Tb_repuestoSumAggregateInputType = {
    ID_Repuesto?: true
    Precio?: true
  }

  export type Tb_repuestoMinAggregateInputType = {
    ID_Repuesto?: true
    Nombre?: true
    Precio?: true
  }

  export type Tb_repuestoMaxAggregateInputType = {
    ID_Repuesto?: true
    Nombre?: true
    Precio?: true
  }

  export type Tb_repuestoCountAggregateInputType = {
    ID_Repuesto?: true
    Nombre?: true
    Precio?: true
    _all?: true
  }

  export type Tb_repuestoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_repuesto to aggregate.
     */
    where?: tb_repuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_repuestos to fetch.
     */
    orderBy?: tb_repuestoOrderByWithRelationInput | tb_repuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_repuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_repuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_repuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_repuestos
    **/
    _count?: true | Tb_repuestoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_repuestoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_repuestoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_repuestoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_repuestoMaxAggregateInputType
  }

  export type GetTb_repuestoAggregateType<T extends Tb_repuestoAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_repuesto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_repuesto[P]>
      : GetScalarType<T[P], AggregateTb_repuesto[P]>
  }




  export type tb_repuestoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_repuestoWhereInput
    orderBy?: tb_repuestoOrderByWithAggregationInput | tb_repuestoOrderByWithAggregationInput[]
    by: Tb_repuestoScalarFieldEnum[] | Tb_repuestoScalarFieldEnum
    having?: tb_repuestoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_repuestoCountAggregateInputType | true
    _avg?: Tb_repuestoAvgAggregateInputType
    _sum?: Tb_repuestoSumAggregateInputType
    _min?: Tb_repuestoMinAggregateInputType
    _max?: Tb_repuestoMaxAggregateInputType
  }

  export type Tb_repuestoGroupByOutputType = {
    ID_Repuesto: number
    Nombre: string | null
    Precio: Decimal | null
    _count: Tb_repuestoCountAggregateOutputType | null
    _avg: Tb_repuestoAvgAggregateOutputType | null
    _sum: Tb_repuestoSumAggregateOutputType | null
    _min: Tb_repuestoMinAggregateOutputType | null
    _max: Tb_repuestoMaxAggregateOutputType | null
  }

  type GetTb_repuestoGroupByPayload<T extends tb_repuestoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_repuestoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_repuestoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_repuestoGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_repuestoGroupByOutputType[P]>
        }
      >
    >


  export type tb_repuestoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Repuesto?: boolean
    Nombre?: boolean
    Precio?: boolean
    detalles?: boolean | tb_repuesto$detallesArgs<ExtArgs>
    _count?: boolean | Tb_repuestoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_repuesto"]>



  export type tb_repuestoSelectScalar = {
    ID_Repuesto?: boolean
    Nombre?: boolean
    Precio?: boolean
  }

  export type tb_repuestoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Repuesto" | "Nombre" | "Precio", ExtArgs["result"]["tb_repuesto"]>
  export type tb_repuestoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | tb_repuesto$detallesArgs<ExtArgs>
    _count?: boolean | Tb_repuestoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tb_repuestoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_repuesto"
    objects: {
      detalles: Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Repuesto: number
      Nombre: string | null
      Precio: Prisma.Decimal | null
    }, ExtArgs["result"]["tb_repuesto"]>
    composites: {}
  }

  type tb_repuestoGetPayload<S extends boolean | null | undefined | tb_repuestoDefaultArgs> = $Result.GetResult<Prisma.$tb_repuestoPayload, S>

  type tb_repuestoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_repuestoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_repuestoCountAggregateInputType | true
    }

  export interface tb_repuestoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_repuesto'], meta: { name: 'tb_repuesto' } }
    /**
     * Find zero or one Tb_repuesto that matches the filter.
     * @param {tb_repuestoFindUniqueArgs} args - Arguments to find a Tb_repuesto
     * @example
     * // Get one Tb_repuesto
     * const tb_repuesto = await prisma.tb_repuesto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_repuestoFindUniqueArgs>(args: SelectSubset<T, tb_repuestoFindUniqueArgs<ExtArgs>>): Prisma__tb_repuestoClient<$Result.GetResult<Prisma.$tb_repuestoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_repuesto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_repuestoFindUniqueOrThrowArgs} args - Arguments to find a Tb_repuesto
     * @example
     * // Get one Tb_repuesto
     * const tb_repuesto = await prisma.tb_repuesto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_repuestoFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_repuestoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_repuestoClient<$Result.GetResult<Prisma.$tb_repuestoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_repuesto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_repuestoFindFirstArgs} args - Arguments to find a Tb_repuesto
     * @example
     * // Get one Tb_repuesto
     * const tb_repuesto = await prisma.tb_repuesto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_repuestoFindFirstArgs>(args?: SelectSubset<T, tb_repuestoFindFirstArgs<ExtArgs>>): Prisma__tb_repuestoClient<$Result.GetResult<Prisma.$tb_repuestoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_repuesto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_repuestoFindFirstOrThrowArgs} args - Arguments to find a Tb_repuesto
     * @example
     * // Get one Tb_repuesto
     * const tb_repuesto = await prisma.tb_repuesto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_repuestoFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_repuestoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_repuestoClient<$Result.GetResult<Prisma.$tb_repuestoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_repuestos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_repuestoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_repuestos
     * const tb_repuestos = await prisma.tb_repuesto.findMany()
     * 
     * // Get first 10 Tb_repuestos
     * const tb_repuestos = await prisma.tb_repuesto.findMany({ take: 10 })
     * 
     * // Only select the `ID_Repuesto`
     * const tb_repuestoWithID_RepuestoOnly = await prisma.tb_repuesto.findMany({ select: { ID_Repuesto: true } })
     * 
     */
    findMany<T extends tb_repuestoFindManyArgs>(args?: SelectSubset<T, tb_repuestoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_repuestoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_repuesto.
     * @param {tb_repuestoCreateArgs} args - Arguments to create a Tb_repuesto.
     * @example
     * // Create one Tb_repuesto
     * const Tb_repuesto = await prisma.tb_repuesto.create({
     *   data: {
     *     // ... data to create a Tb_repuesto
     *   }
     * })
     * 
     */
    create<T extends tb_repuestoCreateArgs>(args: SelectSubset<T, tb_repuestoCreateArgs<ExtArgs>>): Prisma__tb_repuestoClient<$Result.GetResult<Prisma.$tb_repuestoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_repuestos.
     * @param {tb_repuestoCreateManyArgs} args - Arguments to create many Tb_repuestos.
     * @example
     * // Create many Tb_repuestos
     * const tb_repuesto = await prisma.tb_repuesto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_repuestoCreateManyArgs>(args?: SelectSubset<T, tb_repuestoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_repuesto.
     * @param {tb_repuestoDeleteArgs} args - Arguments to delete one Tb_repuesto.
     * @example
     * // Delete one Tb_repuesto
     * const Tb_repuesto = await prisma.tb_repuesto.delete({
     *   where: {
     *     // ... filter to delete one Tb_repuesto
     *   }
     * })
     * 
     */
    delete<T extends tb_repuestoDeleteArgs>(args: SelectSubset<T, tb_repuestoDeleteArgs<ExtArgs>>): Prisma__tb_repuestoClient<$Result.GetResult<Prisma.$tb_repuestoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_repuesto.
     * @param {tb_repuestoUpdateArgs} args - Arguments to update one Tb_repuesto.
     * @example
     * // Update one Tb_repuesto
     * const tb_repuesto = await prisma.tb_repuesto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_repuestoUpdateArgs>(args: SelectSubset<T, tb_repuestoUpdateArgs<ExtArgs>>): Prisma__tb_repuestoClient<$Result.GetResult<Prisma.$tb_repuestoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_repuestos.
     * @param {tb_repuestoDeleteManyArgs} args - Arguments to filter Tb_repuestos to delete.
     * @example
     * // Delete a few Tb_repuestos
     * const { count } = await prisma.tb_repuesto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_repuestoDeleteManyArgs>(args?: SelectSubset<T, tb_repuestoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_repuestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_repuestoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_repuestos
     * const tb_repuesto = await prisma.tb_repuesto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_repuestoUpdateManyArgs>(args: SelectSubset<T, tb_repuestoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_repuesto.
     * @param {tb_repuestoUpsertArgs} args - Arguments to update or create a Tb_repuesto.
     * @example
     * // Update or create a Tb_repuesto
     * const tb_repuesto = await prisma.tb_repuesto.upsert({
     *   create: {
     *     // ... data to create a Tb_repuesto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_repuesto we want to update
     *   }
     * })
     */
    upsert<T extends tb_repuestoUpsertArgs>(args: SelectSubset<T, tb_repuestoUpsertArgs<ExtArgs>>): Prisma__tb_repuestoClient<$Result.GetResult<Prisma.$tb_repuestoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_repuestos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_repuestoCountArgs} args - Arguments to filter Tb_repuestos to count.
     * @example
     * // Count the number of Tb_repuestos
     * const count = await prisma.tb_repuesto.count({
     *   where: {
     *     // ... the filter for the Tb_repuestos we want to count
     *   }
     * })
    **/
    count<T extends tb_repuestoCountArgs>(
      args?: Subset<T, tb_repuestoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_repuestoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_repuesto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_repuestoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_repuestoAggregateArgs>(args: Subset<T, Tb_repuestoAggregateArgs>): Prisma.PrismaPromise<GetTb_repuestoAggregateType<T>>

    /**
     * Group by Tb_repuesto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_repuestoGroupByArgs} args - Group by arguments.
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
      T extends tb_repuestoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_repuestoGroupByArgs['orderBy'] }
        : { orderBy?: tb_repuestoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_repuestoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_repuestoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_repuesto model
   */
  readonly fields: tb_repuestoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_repuesto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_repuestoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalles<T extends tb_repuesto$detallesArgs<ExtArgs> = {}>(args?: Subset<T, tb_repuesto$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_detalle_reparacion_repuestoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tb_repuesto model
   */
  interface tb_repuestoFieldRefs {
    readonly ID_Repuesto: FieldRef<"tb_repuesto", 'Int'>
    readonly Nombre: FieldRef<"tb_repuesto", 'String'>
    readonly Precio: FieldRef<"tb_repuesto", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * tb_repuesto findUnique
   */
  export type tb_repuestoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_repuesto
     */
    select?: tb_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_repuesto
     */
    omit?: tb_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_repuestoInclude<ExtArgs> | null
    /**
     * Filter, which tb_repuesto to fetch.
     */
    where: tb_repuestoWhereUniqueInput
  }

  /**
   * tb_repuesto findUniqueOrThrow
   */
  export type tb_repuestoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_repuesto
     */
    select?: tb_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_repuesto
     */
    omit?: tb_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_repuestoInclude<ExtArgs> | null
    /**
     * Filter, which tb_repuesto to fetch.
     */
    where: tb_repuestoWhereUniqueInput
  }

  /**
   * tb_repuesto findFirst
   */
  export type tb_repuestoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_repuesto
     */
    select?: tb_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_repuesto
     */
    omit?: tb_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_repuestoInclude<ExtArgs> | null
    /**
     * Filter, which tb_repuesto to fetch.
     */
    where?: tb_repuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_repuestos to fetch.
     */
    orderBy?: tb_repuestoOrderByWithRelationInput | tb_repuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_repuestos.
     */
    cursor?: tb_repuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_repuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_repuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_repuestos.
     */
    distinct?: Tb_repuestoScalarFieldEnum | Tb_repuestoScalarFieldEnum[]
  }

  /**
   * tb_repuesto findFirstOrThrow
   */
  export type tb_repuestoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_repuesto
     */
    select?: tb_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_repuesto
     */
    omit?: tb_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_repuestoInclude<ExtArgs> | null
    /**
     * Filter, which tb_repuesto to fetch.
     */
    where?: tb_repuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_repuestos to fetch.
     */
    orderBy?: tb_repuestoOrderByWithRelationInput | tb_repuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_repuestos.
     */
    cursor?: tb_repuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_repuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_repuestos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_repuestos.
     */
    distinct?: Tb_repuestoScalarFieldEnum | Tb_repuestoScalarFieldEnum[]
  }

  /**
   * tb_repuesto findMany
   */
  export type tb_repuestoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_repuesto
     */
    select?: tb_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_repuesto
     */
    omit?: tb_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_repuestoInclude<ExtArgs> | null
    /**
     * Filter, which tb_repuestos to fetch.
     */
    where?: tb_repuestoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_repuestos to fetch.
     */
    orderBy?: tb_repuestoOrderByWithRelationInput | tb_repuestoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_repuestos.
     */
    cursor?: tb_repuestoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_repuestos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_repuestos.
     */
    skip?: number
    distinct?: Tb_repuestoScalarFieldEnum | Tb_repuestoScalarFieldEnum[]
  }

  /**
   * tb_repuesto create
   */
  export type tb_repuestoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_repuesto
     */
    select?: tb_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_repuesto
     */
    omit?: tb_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_repuestoInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_repuesto.
     */
    data?: XOR<tb_repuestoCreateInput, tb_repuestoUncheckedCreateInput>
  }

  /**
   * tb_repuesto createMany
   */
  export type tb_repuestoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_repuestos.
     */
    data: tb_repuestoCreateManyInput | tb_repuestoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_repuesto update
   */
  export type tb_repuestoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_repuesto
     */
    select?: tb_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_repuesto
     */
    omit?: tb_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_repuestoInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_repuesto.
     */
    data: XOR<tb_repuestoUpdateInput, tb_repuestoUncheckedUpdateInput>
    /**
     * Choose, which tb_repuesto to update.
     */
    where: tb_repuestoWhereUniqueInput
  }

  /**
   * tb_repuesto updateMany
   */
  export type tb_repuestoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_repuestos.
     */
    data: XOR<tb_repuestoUpdateManyMutationInput, tb_repuestoUncheckedUpdateManyInput>
    /**
     * Filter which tb_repuestos to update
     */
    where?: tb_repuestoWhereInput
    /**
     * Limit how many tb_repuestos to update.
     */
    limit?: number
  }

  /**
   * tb_repuesto upsert
   */
  export type tb_repuestoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_repuesto
     */
    select?: tb_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_repuesto
     */
    omit?: tb_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_repuestoInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_repuesto to update in case it exists.
     */
    where: tb_repuestoWhereUniqueInput
    /**
     * In case the tb_repuesto found by the `where` argument doesn't exist, create a new tb_repuesto with this data.
     */
    create: XOR<tb_repuestoCreateInput, tb_repuestoUncheckedCreateInput>
    /**
     * In case the tb_repuesto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_repuestoUpdateInput, tb_repuestoUncheckedUpdateInput>
  }

  /**
   * tb_repuesto delete
   */
  export type tb_repuestoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_repuesto
     */
    select?: tb_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_repuesto
     */
    omit?: tb_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_repuestoInclude<ExtArgs> | null
    /**
     * Filter which tb_repuesto to delete.
     */
    where: tb_repuestoWhereUniqueInput
  }

  /**
   * tb_repuesto deleteMany
   */
  export type tb_repuestoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_repuestos to delete
     */
    where?: tb_repuestoWhereInput
    /**
     * Limit how many tb_repuestos to delete.
     */
    limit?: number
  }

  /**
   * tb_repuesto.detalles
   */
  export type tb_repuesto$detallesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_detalle_reparacion_repuesto
     */
    select?: tb_detalle_reparacion_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_detalle_reparacion_repuesto
     */
    omit?: tb_detalle_reparacion_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_detalle_reparacion_repuestoInclude<ExtArgs> | null
    where?: tb_detalle_reparacion_repuestoWhereInput
    orderBy?: tb_detalle_reparacion_repuestoOrderByWithRelationInput | tb_detalle_reparacion_repuestoOrderByWithRelationInput[]
    cursor?: tb_detalle_reparacion_repuestoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_detalle_reparacion_repuestoScalarFieldEnum | Tb_detalle_reparacion_repuestoScalarFieldEnum[]
  }

  /**
   * tb_repuesto without action
   */
  export type tb_repuestoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_repuesto
     */
    select?: tb_repuestoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_repuesto
     */
    omit?: tb_repuestoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_repuestoInclude<ExtArgs> | null
  }


  /**
   * Model tb_tecnico
   */

  export type AggregateTb_tecnico = {
    _count: Tb_tecnicoCountAggregateOutputType | null
    _avg: Tb_tecnicoAvgAggregateOutputType | null
    _sum: Tb_tecnicoSumAggregateOutputType | null
    _min: Tb_tecnicoMinAggregateOutputType | null
    _max: Tb_tecnicoMaxAggregateOutputType | null
  }

  export type Tb_tecnicoAvgAggregateOutputType = {
    ID_Tecnico: number | null
  }

  export type Tb_tecnicoSumAggregateOutputType = {
    ID_Tecnico: number | null
  }

  export type Tb_tecnicoMinAggregateOutputType = {
    ID_Tecnico: number | null
    Cedula: string | null
    Nombres: string | null
    Apellidos: string | null
    Telefono: string | null
    Email: string | null
    Especialidad: string | null
  }

  export type Tb_tecnicoMaxAggregateOutputType = {
    ID_Tecnico: number | null
    Cedula: string | null
    Nombres: string | null
    Apellidos: string | null
    Telefono: string | null
    Email: string | null
    Especialidad: string | null
  }

  export type Tb_tecnicoCountAggregateOutputType = {
    ID_Tecnico: number
    Cedula: number
    Nombres: number
    Apellidos: number
    Telefono: number
    Email: number
    Especialidad: number
    _all: number
  }


  export type Tb_tecnicoAvgAggregateInputType = {
    ID_Tecnico?: true
  }

  export type Tb_tecnicoSumAggregateInputType = {
    ID_Tecnico?: true
  }

  export type Tb_tecnicoMinAggregateInputType = {
    ID_Tecnico?: true
    Cedula?: true
    Nombres?: true
    Apellidos?: true
    Telefono?: true
    Email?: true
    Especialidad?: true
  }

  export type Tb_tecnicoMaxAggregateInputType = {
    ID_Tecnico?: true
    Cedula?: true
    Nombres?: true
    Apellidos?: true
    Telefono?: true
    Email?: true
    Especialidad?: true
  }

  export type Tb_tecnicoCountAggregateInputType = {
    ID_Tecnico?: true
    Cedula?: true
    Nombres?: true
    Apellidos?: true
    Telefono?: true
    Email?: true
    Especialidad?: true
    _all?: true
  }

  export type Tb_tecnicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_tecnico to aggregate.
     */
    where?: tb_tecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_tecnicos to fetch.
     */
    orderBy?: tb_tecnicoOrderByWithRelationInput | tb_tecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_tecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_tecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_tecnicos
    **/
    _count?: true | Tb_tecnicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_tecnicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_tecnicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_tecnicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_tecnicoMaxAggregateInputType
  }

  export type GetTb_tecnicoAggregateType<T extends Tb_tecnicoAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_tecnico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_tecnico[P]>
      : GetScalarType<T[P], AggregateTb_tecnico[P]>
  }




  export type tb_tecnicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_tecnicoWhereInput
    orderBy?: tb_tecnicoOrderByWithAggregationInput | tb_tecnicoOrderByWithAggregationInput[]
    by: Tb_tecnicoScalarFieldEnum[] | Tb_tecnicoScalarFieldEnum
    having?: tb_tecnicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_tecnicoCountAggregateInputType | true
    _avg?: Tb_tecnicoAvgAggregateInputType
    _sum?: Tb_tecnicoSumAggregateInputType
    _min?: Tb_tecnicoMinAggregateInputType
    _max?: Tb_tecnicoMaxAggregateInputType
  }

  export type Tb_tecnicoGroupByOutputType = {
    ID_Tecnico: number
    Cedula: string | null
    Nombres: string | null
    Apellidos: string | null
    Telefono: string | null
    Email: string | null
    Especialidad: string | null
    _count: Tb_tecnicoCountAggregateOutputType | null
    _avg: Tb_tecnicoAvgAggregateOutputType | null
    _sum: Tb_tecnicoSumAggregateOutputType | null
    _min: Tb_tecnicoMinAggregateOutputType | null
    _max: Tb_tecnicoMaxAggregateOutputType | null
  }

  type GetTb_tecnicoGroupByPayload<T extends tb_tecnicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_tecnicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_tecnicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_tecnicoGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_tecnicoGroupByOutputType[P]>
        }
      >
    >


  export type tb_tecnicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Tecnico?: boolean
    Cedula?: boolean
    Nombres?: boolean
    Apellidos?: boolean
    Telefono?: boolean
    Email?: boolean
    Especialidad?: boolean
    reparaciones?: boolean | tb_tecnico$reparacionesArgs<ExtArgs>
    usuarios?: boolean | tb_tecnico$usuariosArgs<ExtArgs>
    _count?: boolean | Tb_tecnicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_tecnico"]>



  export type tb_tecnicoSelectScalar = {
    ID_Tecnico?: boolean
    Cedula?: boolean
    Nombres?: boolean
    Apellidos?: boolean
    Telefono?: boolean
    Email?: boolean
    Especialidad?: boolean
  }

  export type tb_tecnicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Tecnico" | "Cedula" | "Nombres" | "Apellidos" | "Telefono" | "Email" | "Especialidad", ExtArgs["result"]["tb_tecnico"]>
  export type tb_tecnicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reparaciones?: boolean | tb_tecnico$reparacionesArgs<ExtArgs>
    usuarios?: boolean | tb_tecnico$usuariosArgs<ExtArgs>
    _count?: boolean | Tb_tecnicoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tb_tecnicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_tecnico"
    objects: {
      reparaciones: Prisma.$tb_reparacionPayload<ExtArgs>[]
      usuarios: Prisma.$tb_usuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Tecnico: number
      Cedula: string | null
      Nombres: string | null
      Apellidos: string | null
      Telefono: string | null
      Email: string | null
      Especialidad: string | null
    }, ExtArgs["result"]["tb_tecnico"]>
    composites: {}
  }

  type tb_tecnicoGetPayload<S extends boolean | null | undefined | tb_tecnicoDefaultArgs> = $Result.GetResult<Prisma.$tb_tecnicoPayload, S>

  type tb_tecnicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_tecnicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_tecnicoCountAggregateInputType | true
    }

  export interface tb_tecnicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_tecnico'], meta: { name: 'tb_tecnico' } }
    /**
     * Find zero or one Tb_tecnico that matches the filter.
     * @param {tb_tecnicoFindUniqueArgs} args - Arguments to find a Tb_tecnico
     * @example
     * // Get one Tb_tecnico
     * const tb_tecnico = await prisma.tb_tecnico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_tecnicoFindUniqueArgs>(args: SelectSubset<T, tb_tecnicoFindUniqueArgs<ExtArgs>>): Prisma__tb_tecnicoClient<$Result.GetResult<Prisma.$tb_tecnicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_tecnico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_tecnicoFindUniqueOrThrowArgs} args - Arguments to find a Tb_tecnico
     * @example
     * // Get one Tb_tecnico
     * const tb_tecnico = await prisma.tb_tecnico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_tecnicoFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_tecnicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_tecnicoClient<$Result.GetResult<Prisma.$tb_tecnicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_tecnico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tecnicoFindFirstArgs} args - Arguments to find a Tb_tecnico
     * @example
     * // Get one Tb_tecnico
     * const tb_tecnico = await prisma.tb_tecnico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_tecnicoFindFirstArgs>(args?: SelectSubset<T, tb_tecnicoFindFirstArgs<ExtArgs>>): Prisma__tb_tecnicoClient<$Result.GetResult<Prisma.$tb_tecnicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_tecnico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tecnicoFindFirstOrThrowArgs} args - Arguments to find a Tb_tecnico
     * @example
     * // Get one Tb_tecnico
     * const tb_tecnico = await prisma.tb_tecnico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_tecnicoFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_tecnicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_tecnicoClient<$Result.GetResult<Prisma.$tb_tecnicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_tecnicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tecnicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_tecnicos
     * const tb_tecnicos = await prisma.tb_tecnico.findMany()
     * 
     * // Get first 10 Tb_tecnicos
     * const tb_tecnicos = await prisma.tb_tecnico.findMany({ take: 10 })
     * 
     * // Only select the `ID_Tecnico`
     * const tb_tecnicoWithID_TecnicoOnly = await prisma.tb_tecnico.findMany({ select: { ID_Tecnico: true } })
     * 
     */
    findMany<T extends tb_tecnicoFindManyArgs>(args?: SelectSubset<T, tb_tecnicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_tecnicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_tecnico.
     * @param {tb_tecnicoCreateArgs} args - Arguments to create a Tb_tecnico.
     * @example
     * // Create one Tb_tecnico
     * const Tb_tecnico = await prisma.tb_tecnico.create({
     *   data: {
     *     // ... data to create a Tb_tecnico
     *   }
     * })
     * 
     */
    create<T extends tb_tecnicoCreateArgs>(args: SelectSubset<T, tb_tecnicoCreateArgs<ExtArgs>>): Prisma__tb_tecnicoClient<$Result.GetResult<Prisma.$tb_tecnicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_tecnicos.
     * @param {tb_tecnicoCreateManyArgs} args - Arguments to create many Tb_tecnicos.
     * @example
     * // Create many Tb_tecnicos
     * const tb_tecnico = await prisma.tb_tecnico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_tecnicoCreateManyArgs>(args?: SelectSubset<T, tb_tecnicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_tecnico.
     * @param {tb_tecnicoDeleteArgs} args - Arguments to delete one Tb_tecnico.
     * @example
     * // Delete one Tb_tecnico
     * const Tb_tecnico = await prisma.tb_tecnico.delete({
     *   where: {
     *     // ... filter to delete one Tb_tecnico
     *   }
     * })
     * 
     */
    delete<T extends tb_tecnicoDeleteArgs>(args: SelectSubset<T, tb_tecnicoDeleteArgs<ExtArgs>>): Prisma__tb_tecnicoClient<$Result.GetResult<Prisma.$tb_tecnicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_tecnico.
     * @param {tb_tecnicoUpdateArgs} args - Arguments to update one Tb_tecnico.
     * @example
     * // Update one Tb_tecnico
     * const tb_tecnico = await prisma.tb_tecnico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_tecnicoUpdateArgs>(args: SelectSubset<T, tb_tecnicoUpdateArgs<ExtArgs>>): Prisma__tb_tecnicoClient<$Result.GetResult<Prisma.$tb_tecnicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_tecnicos.
     * @param {tb_tecnicoDeleteManyArgs} args - Arguments to filter Tb_tecnicos to delete.
     * @example
     * // Delete a few Tb_tecnicos
     * const { count } = await prisma.tb_tecnico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_tecnicoDeleteManyArgs>(args?: SelectSubset<T, tb_tecnicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_tecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tecnicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_tecnicos
     * const tb_tecnico = await prisma.tb_tecnico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_tecnicoUpdateManyArgs>(args: SelectSubset<T, tb_tecnicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_tecnico.
     * @param {tb_tecnicoUpsertArgs} args - Arguments to update or create a Tb_tecnico.
     * @example
     * // Update or create a Tb_tecnico
     * const tb_tecnico = await prisma.tb_tecnico.upsert({
     *   create: {
     *     // ... data to create a Tb_tecnico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_tecnico we want to update
     *   }
     * })
     */
    upsert<T extends tb_tecnicoUpsertArgs>(args: SelectSubset<T, tb_tecnicoUpsertArgs<ExtArgs>>): Prisma__tb_tecnicoClient<$Result.GetResult<Prisma.$tb_tecnicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_tecnicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tecnicoCountArgs} args - Arguments to filter Tb_tecnicos to count.
     * @example
     * // Count the number of Tb_tecnicos
     * const count = await prisma.tb_tecnico.count({
     *   where: {
     *     // ... the filter for the Tb_tecnicos we want to count
     *   }
     * })
    **/
    count<T extends tb_tecnicoCountArgs>(
      args?: Subset<T, tb_tecnicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_tecnicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_tecnico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_tecnicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_tecnicoAggregateArgs>(args: Subset<T, Tb_tecnicoAggregateArgs>): Prisma.PrismaPromise<GetTb_tecnicoAggregateType<T>>

    /**
     * Group by Tb_tecnico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_tecnicoGroupByArgs} args - Group by arguments.
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
      T extends tb_tecnicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_tecnicoGroupByArgs['orderBy'] }
        : { orderBy?: tb_tecnicoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_tecnicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_tecnicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_tecnico model
   */
  readonly fields: tb_tecnicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_tecnico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_tecnicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reparaciones<T extends tb_tecnico$reparacionesArgs<ExtArgs> = {}>(args?: Subset<T, tb_tecnico$reparacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_reparacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends tb_tecnico$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, tb_tecnico$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tb_tecnico model
   */
  interface tb_tecnicoFieldRefs {
    readonly ID_Tecnico: FieldRef<"tb_tecnico", 'Int'>
    readonly Cedula: FieldRef<"tb_tecnico", 'String'>
    readonly Nombres: FieldRef<"tb_tecnico", 'String'>
    readonly Apellidos: FieldRef<"tb_tecnico", 'String'>
    readonly Telefono: FieldRef<"tb_tecnico", 'String'>
    readonly Email: FieldRef<"tb_tecnico", 'String'>
    readonly Especialidad: FieldRef<"tb_tecnico", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_tecnico findUnique
   */
  export type tb_tecnicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tecnico
     */
    select?: tb_tecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tecnico
     */
    omit?: tb_tecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_tecnicoInclude<ExtArgs> | null
    /**
     * Filter, which tb_tecnico to fetch.
     */
    where: tb_tecnicoWhereUniqueInput
  }

  /**
   * tb_tecnico findUniqueOrThrow
   */
  export type tb_tecnicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tecnico
     */
    select?: tb_tecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tecnico
     */
    omit?: tb_tecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_tecnicoInclude<ExtArgs> | null
    /**
     * Filter, which tb_tecnico to fetch.
     */
    where: tb_tecnicoWhereUniqueInput
  }

  /**
   * tb_tecnico findFirst
   */
  export type tb_tecnicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tecnico
     */
    select?: tb_tecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tecnico
     */
    omit?: tb_tecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_tecnicoInclude<ExtArgs> | null
    /**
     * Filter, which tb_tecnico to fetch.
     */
    where?: tb_tecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_tecnicos to fetch.
     */
    orderBy?: tb_tecnicoOrderByWithRelationInput | tb_tecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_tecnicos.
     */
    cursor?: tb_tecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_tecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_tecnicos.
     */
    distinct?: Tb_tecnicoScalarFieldEnum | Tb_tecnicoScalarFieldEnum[]
  }

  /**
   * tb_tecnico findFirstOrThrow
   */
  export type tb_tecnicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tecnico
     */
    select?: tb_tecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tecnico
     */
    omit?: tb_tecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_tecnicoInclude<ExtArgs> | null
    /**
     * Filter, which tb_tecnico to fetch.
     */
    where?: tb_tecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_tecnicos to fetch.
     */
    orderBy?: tb_tecnicoOrderByWithRelationInput | tb_tecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_tecnicos.
     */
    cursor?: tb_tecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_tecnicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_tecnicos.
     */
    distinct?: Tb_tecnicoScalarFieldEnum | Tb_tecnicoScalarFieldEnum[]
  }

  /**
   * tb_tecnico findMany
   */
  export type tb_tecnicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tecnico
     */
    select?: tb_tecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tecnico
     */
    omit?: tb_tecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_tecnicoInclude<ExtArgs> | null
    /**
     * Filter, which tb_tecnicos to fetch.
     */
    where?: tb_tecnicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_tecnicos to fetch.
     */
    orderBy?: tb_tecnicoOrderByWithRelationInput | tb_tecnicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_tecnicos.
     */
    cursor?: tb_tecnicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_tecnicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_tecnicos.
     */
    skip?: number
    distinct?: Tb_tecnicoScalarFieldEnum | Tb_tecnicoScalarFieldEnum[]
  }

  /**
   * tb_tecnico create
   */
  export type tb_tecnicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tecnico
     */
    select?: tb_tecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tecnico
     */
    omit?: tb_tecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_tecnicoInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_tecnico.
     */
    data?: XOR<tb_tecnicoCreateInput, tb_tecnicoUncheckedCreateInput>
  }

  /**
   * tb_tecnico createMany
   */
  export type tb_tecnicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_tecnicos.
     */
    data: tb_tecnicoCreateManyInput | tb_tecnicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_tecnico update
   */
  export type tb_tecnicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tecnico
     */
    select?: tb_tecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tecnico
     */
    omit?: tb_tecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_tecnicoInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_tecnico.
     */
    data: XOR<tb_tecnicoUpdateInput, tb_tecnicoUncheckedUpdateInput>
    /**
     * Choose, which tb_tecnico to update.
     */
    where: tb_tecnicoWhereUniqueInput
  }

  /**
   * tb_tecnico updateMany
   */
  export type tb_tecnicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_tecnicos.
     */
    data: XOR<tb_tecnicoUpdateManyMutationInput, tb_tecnicoUncheckedUpdateManyInput>
    /**
     * Filter which tb_tecnicos to update
     */
    where?: tb_tecnicoWhereInput
    /**
     * Limit how many tb_tecnicos to update.
     */
    limit?: number
  }

  /**
   * tb_tecnico upsert
   */
  export type tb_tecnicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tecnico
     */
    select?: tb_tecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tecnico
     */
    omit?: tb_tecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_tecnicoInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_tecnico to update in case it exists.
     */
    where: tb_tecnicoWhereUniqueInput
    /**
     * In case the tb_tecnico found by the `where` argument doesn't exist, create a new tb_tecnico with this data.
     */
    create: XOR<tb_tecnicoCreateInput, tb_tecnicoUncheckedCreateInput>
    /**
     * In case the tb_tecnico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_tecnicoUpdateInput, tb_tecnicoUncheckedUpdateInput>
  }

  /**
   * tb_tecnico delete
   */
  export type tb_tecnicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tecnico
     */
    select?: tb_tecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tecnico
     */
    omit?: tb_tecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_tecnicoInclude<ExtArgs> | null
    /**
     * Filter which tb_tecnico to delete.
     */
    where: tb_tecnicoWhereUniqueInput
  }

  /**
   * tb_tecnico deleteMany
   */
  export type tb_tecnicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_tecnicos to delete
     */
    where?: tb_tecnicoWhereInput
    /**
     * Limit how many tb_tecnicos to delete.
     */
    limit?: number
  }

  /**
   * tb_tecnico.reparaciones
   */
  export type tb_tecnico$reparacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_reparacion
     */
    select?: tb_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_reparacion
     */
    omit?: tb_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_reparacionInclude<ExtArgs> | null
    where?: tb_reparacionWhereInput
    orderBy?: tb_reparacionOrderByWithRelationInput | tb_reparacionOrderByWithRelationInput[]
    cursor?: tb_reparacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_reparacionScalarFieldEnum | Tb_reparacionScalarFieldEnum[]
  }

  /**
   * tb_tecnico.usuarios
   */
  export type tb_tecnico$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
    where?: tb_usuarioWhereInput
    orderBy?: tb_usuarioOrderByWithRelationInput | tb_usuarioOrderByWithRelationInput[]
    cursor?: tb_usuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_usuarioScalarFieldEnum | Tb_usuarioScalarFieldEnum[]
  }

  /**
   * tb_tecnico without action
   */
  export type tb_tecnicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tecnico
     */
    select?: tb_tecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tecnico
     */
    omit?: tb_tecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_tecnicoInclude<ExtArgs> | null
  }


  /**
   * Model tb_usuario
   */

  export type AggregateTb_usuario = {
    _count: Tb_usuarioCountAggregateOutputType | null
    _avg: Tb_usuarioAvgAggregateOutputType | null
    _sum: Tb_usuarioSumAggregateOutputType | null
    _min: Tb_usuarioMinAggregateOutputType | null
    _max: Tb_usuarioMaxAggregateOutputType | null
  }

  export type Tb_usuarioAvgAggregateOutputType = {
    ID_Usuario: number | null
    ID_Cliente: number | null
    ID_Tecnico: number | null
  }

  export type Tb_usuarioSumAggregateOutputType = {
    ID_Usuario: number | null
    ID_Cliente: number | null
    ID_Tecnico: number | null
  }

  export type Tb_usuarioMinAggregateOutputType = {
    ID_Usuario: number | null
    Usuario_Name: string | null
    Usuario_Password: string | null
    Usuario_nivel: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo: boolean | null
    ID_Cliente: number | null
    ID_Tecnico: number | null
  }

  export type Tb_usuarioMaxAggregateOutputType = {
    ID_Usuario: number | null
    Usuario_Name: string | null
    Usuario_Password: string | null
    Usuario_nivel: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo: boolean | null
    ID_Cliente: number | null
    ID_Tecnico: number | null
  }

  export type Tb_usuarioCountAggregateOutputType = {
    ID_Usuario: number
    Usuario_Name: number
    Usuario_Password: number
    Usuario_nivel: number
    Usuario_activo: number
    ID_Cliente: number
    ID_Tecnico: number
    _all: number
  }


  export type Tb_usuarioAvgAggregateInputType = {
    ID_Usuario?: true
    ID_Cliente?: true
    ID_Tecnico?: true
  }

  export type Tb_usuarioSumAggregateInputType = {
    ID_Usuario?: true
    ID_Cliente?: true
    ID_Tecnico?: true
  }

  export type Tb_usuarioMinAggregateInputType = {
    ID_Usuario?: true
    Usuario_Name?: true
    Usuario_Password?: true
    Usuario_nivel?: true
    Usuario_activo?: true
    ID_Cliente?: true
    ID_Tecnico?: true
  }

  export type Tb_usuarioMaxAggregateInputType = {
    ID_Usuario?: true
    Usuario_Name?: true
    Usuario_Password?: true
    Usuario_nivel?: true
    Usuario_activo?: true
    ID_Cliente?: true
    ID_Tecnico?: true
  }

  export type Tb_usuarioCountAggregateInputType = {
    ID_Usuario?: true
    Usuario_Name?: true
    Usuario_Password?: true
    Usuario_nivel?: true
    Usuario_activo?: true
    ID_Cliente?: true
    ID_Tecnico?: true
    _all?: true
  }

  export type Tb_usuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_usuario to aggregate.
     */
    where?: tb_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_usuarios to fetch.
     */
    orderBy?: tb_usuarioOrderByWithRelationInput | tb_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_usuarios
    **/
    _count?: true | Tb_usuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_usuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_usuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_usuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_usuarioMaxAggregateInputType
  }

  export type GetTb_usuarioAggregateType<T extends Tb_usuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_usuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_usuario[P]>
      : GetScalarType<T[P], AggregateTb_usuario[P]>
  }




  export type tb_usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_usuarioWhereInput
    orderBy?: tb_usuarioOrderByWithAggregationInput | tb_usuarioOrderByWithAggregationInput[]
    by: Tb_usuarioScalarFieldEnum[] | Tb_usuarioScalarFieldEnum
    having?: tb_usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_usuarioCountAggregateInputType | true
    _avg?: Tb_usuarioAvgAggregateInputType
    _sum?: Tb_usuarioSumAggregateInputType
    _min?: Tb_usuarioMinAggregateInputType
    _max?: Tb_usuarioMaxAggregateInputType
  }

  export type Tb_usuarioGroupByOutputType = {
    ID_Usuario: number
    Usuario_Name: string | null
    Usuario_Password: string | null
    Usuario_nivel: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo: boolean | null
    ID_Cliente: number | null
    ID_Tecnico: number | null
    _count: Tb_usuarioCountAggregateOutputType | null
    _avg: Tb_usuarioAvgAggregateOutputType | null
    _sum: Tb_usuarioSumAggregateOutputType | null
    _min: Tb_usuarioMinAggregateOutputType | null
    _max: Tb_usuarioMaxAggregateOutputType | null
  }

  type GetTb_usuarioGroupByPayload<T extends tb_usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_usuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_usuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_usuarioGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_usuarioGroupByOutputType[P]>
        }
      >
    >


  export type tb_usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Usuario?: boolean
    Usuario_Name?: boolean
    Usuario_Password?: boolean
    Usuario_nivel?: boolean
    Usuario_activo?: boolean
    ID_Cliente?: boolean
    ID_Tecnico?: boolean
    cliente?: boolean | tb_usuario$clienteArgs<ExtArgs>
    tecnico?: boolean | tb_usuario$tecnicoArgs<ExtArgs>
    notificaciones?: boolean | tb_usuario$notificacionesArgs<ExtArgs>
    estados_aprobados?: boolean | tb_usuario$estados_aprobadosArgs<ExtArgs>
    _count?: boolean | Tb_usuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tb_usuario"]>



  export type tb_usuarioSelectScalar = {
    ID_Usuario?: boolean
    Usuario_Name?: boolean
    Usuario_Password?: boolean
    Usuario_nivel?: boolean
    Usuario_activo?: boolean
    ID_Cliente?: boolean
    ID_Tecnico?: boolean
  }

  export type tb_usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Usuario" | "Usuario_Name" | "Usuario_Password" | "Usuario_nivel" | "Usuario_activo" | "ID_Cliente" | "ID_Tecnico", ExtArgs["result"]["tb_usuario"]>
  export type tb_usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | tb_usuario$clienteArgs<ExtArgs>
    tecnico?: boolean | tb_usuario$tecnicoArgs<ExtArgs>
    notificaciones?: boolean | tb_usuario$notificacionesArgs<ExtArgs>
    estados_aprobados?: boolean | tb_usuario$estados_aprobadosArgs<ExtArgs>
    _count?: boolean | Tb_usuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tb_usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_usuario"
    objects: {
      cliente: Prisma.$tb_clientePayload<ExtArgs> | null
      tecnico: Prisma.$tb_tecnicoPayload<ExtArgs> | null
      notificaciones: Prisma.$tb_notificacionPayload<ExtArgs>[]
      estados_aprobados: Prisma.$tb_estado_reparacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Usuario: number
      Usuario_Name: string | null
      Usuario_Password: string | null
      Usuario_nivel: $Enums.tb_usuario_Usuario_nivel | null
      Usuario_activo: boolean | null
      ID_Cliente: number | null
      ID_Tecnico: number | null
    }, ExtArgs["result"]["tb_usuario"]>
    composites: {}
  }

  type tb_usuarioGetPayload<S extends boolean | null | undefined | tb_usuarioDefaultArgs> = $Result.GetResult<Prisma.$tb_usuarioPayload, S>

  type tb_usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_usuarioCountAggregateInputType | true
    }

  export interface tb_usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_usuario'], meta: { name: 'tb_usuario' } }
    /**
     * Find zero or one Tb_usuario that matches the filter.
     * @param {tb_usuarioFindUniqueArgs} args - Arguments to find a Tb_usuario
     * @example
     * // Get one Tb_usuario
     * const tb_usuario = await prisma.tb_usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_usuarioFindUniqueArgs>(args: SelectSubset<T, tb_usuarioFindUniqueArgs<ExtArgs>>): Prisma__tb_usuarioClient<$Result.GetResult<Prisma.$tb_usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_usuarioFindUniqueOrThrowArgs} args - Arguments to find a Tb_usuario
     * @example
     * // Get one Tb_usuario
     * const tb_usuario = await prisma.tb_usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_usuarioClient<$Result.GetResult<Prisma.$tb_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuarioFindFirstArgs} args - Arguments to find a Tb_usuario
     * @example
     * // Get one Tb_usuario
     * const tb_usuario = await prisma.tb_usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_usuarioFindFirstArgs>(args?: SelectSubset<T, tb_usuarioFindFirstArgs<ExtArgs>>): Prisma__tb_usuarioClient<$Result.GetResult<Prisma.$tb_usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuarioFindFirstOrThrowArgs} args - Arguments to find a Tb_usuario
     * @example
     * // Get one Tb_usuario
     * const tb_usuario = await prisma.tb_usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_usuarioClient<$Result.GetResult<Prisma.$tb_usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuario.findMany()
     * 
     * // Get first 10 Tb_usuarios
     * const tb_usuarios = await prisma.tb_usuario.findMany({ take: 10 })
     * 
     * // Only select the `ID_Usuario`
     * const tb_usuarioWithID_UsuarioOnly = await prisma.tb_usuario.findMany({ select: { ID_Usuario: true } })
     * 
     */
    findMany<T extends tb_usuarioFindManyArgs>(args?: SelectSubset<T, tb_usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_usuario.
     * @param {tb_usuarioCreateArgs} args - Arguments to create a Tb_usuario.
     * @example
     * // Create one Tb_usuario
     * const Tb_usuario = await prisma.tb_usuario.create({
     *   data: {
     *     // ... data to create a Tb_usuario
     *   }
     * })
     * 
     */
    create<T extends tb_usuarioCreateArgs>(args: SelectSubset<T, tb_usuarioCreateArgs<ExtArgs>>): Prisma__tb_usuarioClient<$Result.GetResult<Prisma.$tb_usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_usuarios.
     * @param {tb_usuarioCreateManyArgs} args - Arguments to create many Tb_usuarios.
     * @example
     * // Create many Tb_usuarios
     * const tb_usuario = await prisma.tb_usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_usuarioCreateManyArgs>(args?: SelectSubset<T, tb_usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_usuario.
     * @param {tb_usuarioDeleteArgs} args - Arguments to delete one Tb_usuario.
     * @example
     * // Delete one Tb_usuario
     * const Tb_usuario = await prisma.tb_usuario.delete({
     *   where: {
     *     // ... filter to delete one Tb_usuario
     *   }
     * })
     * 
     */
    delete<T extends tb_usuarioDeleteArgs>(args: SelectSubset<T, tb_usuarioDeleteArgs<ExtArgs>>): Prisma__tb_usuarioClient<$Result.GetResult<Prisma.$tb_usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_usuario.
     * @param {tb_usuarioUpdateArgs} args - Arguments to update one Tb_usuario.
     * @example
     * // Update one Tb_usuario
     * const tb_usuario = await prisma.tb_usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_usuarioUpdateArgs>(args: SelectSubset<T, tb_usuarioUpdateArgs<ExtArgs>>): Prisma__tb_usuarioClient<$Result.GetResult<Prisma.$tb_usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_usuarios.
     * @param {tb_usuarioDeleteManyArgs} args - Arguments to filter Tb_usuarios to delete.
     * @example
     * // Delete a few Tb_usuarios
     * const { count } = await prisma.tb_usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_usuarioDeleteManyArgs>(args?: SelectSubset<T, tb_usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_usuarios
     * const tb_usuario = await prisma.tb_usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_usuarioUpdateManyArgs>(args: SelectSubset<T, tb_usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_usuario.
     * @param {tb_usuarioUpsertArgs} args - Arguments to update or create a Tb_usuario.
     * @example
     * // Update or create a Tb_usuario
     * const tb_usuario = await prisma.tb_usuario.upsert({
     *   create: {
     *     // ... data to create a Tb_usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_usuario we want to update
     *   }
     * })
     */
    upsert<T extends tb_usuarioUpsertArgs>(args: SelectSubset<T, tb_usuarioUpsertArgs<ExtArgs>>): Prisma__tb_usuarioClient<$Result.GetResult<Prisma.$tb_usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuarioCountArgs} args - Arguments to filter Tb_usuarios to count.
     * @example
     * // Count the number of Tb_usuarios
     * const count = await prisma.tb_usuario.count({
     *   where: {
     *     // ... the filter for the Tb_usuarios we want to count
     *   }
     * })
    **/
    count<T extends tb_usuarioCountArgs>(
      args?: Subset<T, tb_usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_usuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_usuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_usuarioAggregateArgs>(args: Subset<T, Tb_usuarioAggregateArgs>): Prisma.PrismaPromise<GetTb_usuarioAggregateType<T>>

    /**
     * Group by Tb_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_usuarioGroupByArgs} args - Group by arguments.
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
      T extends tb_usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_usuarioGroupByArgs['orderBy'] }
        : { orderBy?: tb_usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_usuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_usuario model
   */
  readonly fields: tb_usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends tb_usuario$clienteArgs<ExtArgs> = {}>(args?: Subset<T, tb_usuario$clienteArgs<ExtArgs>>): Prisma__tb_clienteClient<$Result.GetResult<Prisma.$tb_clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tecnico<T extends tb_usuario$tecnicoArgs<ExtArgs> = {}>(args?: Subset<T, tb_usuario$tecnicoArgs<ExtArgs>>): Prisma__tb_tecnicoClient<$Result.GetResult<Prisma.$tb_tecnicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notificaciones<T extends tb_usuario$notificacionesArgs<ExtArgs> = {}>(args?: Subset<T, tb_usuario$notificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estados_aprobados<T extends tb_usuario$estados_aprobadosArgs<ExtArgs> = {}>(args?: Subset<T, tb_usuario$estados_aprobadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_estado_reparacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tb_usuario model
   */
  interface tb_usuarioFieldRefs {
    readonly ID_Usuario: FieldRef<"tb_usuario", 'Int'>
    readonly Usuario_Name: FieldRef<"tb_usuario", 'String'>
    readonly Usuario_Password: FieldRef<"tb_usuario", 'String'>
    readonly Usuario_nivel: FieldRef<"tb_usuario", 'tb_usuario_Usuario_nivel'>
    readonly Usuario_activo: FieldRef<"tb_usuario", 'Boolean'>
    readonly ID_Cliente: FieldRef<"tb_usuario", 'Int'>
    readonly ID_Tecnico: FieldRef<"tb_usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tb_usuario findUnique
   */
  export type tb_usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tb_usuario to fetch.
     */
    where: tb_usuarioWhereUniqueInput
  }

  /**
   * tb_usuario findUniqueOrThrow
   */
  export type tb_usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tb_usuario to fetch.
     */
    where: tb_usuarioWhereUniqueInput
  }

  /**
   * tb_usuario findFirst
   */
  export type tb_usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tb_usuario to fetch.
     */
    where?: tb_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_usuarios to fetch.
     */
    orderBy?: tb_usuarioOrderByWithRelationInput | tb_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_usuarios.
     */
    cursor?: tb_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_usuarios.
     */
    distinct?: Tb_usuarioScalarFieldEnum | Tb_usuarioScalarFieldEnum[]
  }

  /**
   * tb_usuario findFirstOrThrow
   */
  export type tb_usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tb_usuario to fetch.
     */
    where?: tb_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_usuarios to fetch.
     */
    orderBy?: tb_usuarioOrderByWithRelationInput | tb_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_usuarios.
     */
    cursor?: tb_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_usuarios.
     */
    distinct?: Tb_usuarioScalarFieldEnum | Tb_usuarioScalarFieldEnum[]
  }

  /**
   * tb_usuario findMany
   */
  export type tb_usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tb_usuarios to fetch.
     */
    where?: tb_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_usuarios to fetch.
     */
    orderBy?: tb_usuarioOrderByWithRelationInput | tb_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_usuarios.
     */
    cursor?: tb_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_usuarios.
     */
    skip?: number
    distinct?: Tb_usuarioScalarFieldEnum | Tb_usuarioScalarFieldEnum[]
  }

  /**
   * tb_usuario create
   */
  export type tb_usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a tb_usuario.
     */
    data?: XOR<tb_usuarioCreateInput, tb_usuarioUncheckedCreateInput>
  }

  /**
   * tb_usuario createMany
   */
  export type tb_usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_usuarios.
     */
    data: tb_usuarioCreateManyInput | tb_usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_usuario update
   */
  export type tb_usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a tb_usuario.
     */
    data: XOR<tb_usuarioUpdateInput, tb_usuarioUncheckedUpdateInput>
    /**
     * Choose, which tb_usuario to update.
     */
    where: tb_usuarioWhereUniqueInput
  }

  /**
   * tb_usuario updateMany
   */
  export type tb_usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_usuarios.
     */
    data: XOR<tb_usuarioUpdateManyMutationInput, tb_usuarioUncheckedUpdateManyInput>
    /**
     * Filter which tb_usuarios to update
     */
    where?: tb_usuarioWhereInput
    /**
     * Limit how many tb_usuarios to update.
     */
    limit?: number
  }

  /**
   * tb_usuario upsert
   */
  export type tb_usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the tb_usuario to update in case it exists.
     */
    where: tb_usuarioWhereUniqueInput
    /**
     * In case the tb_usuario found by the `where` argument doesn't exist, create a new tb_usuario with this data.
     */
    create: XOR<tb_usuarioCreateInput, tb_usuarioUncheckedCreateInput>
    /**
     * In case the tb_usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_usuarioUpdateInput, tb_usuarioUncheckedUpdateInput>
  }

  /**
   * tb_usuario delete
   */
  export type tb_usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
    /**
     * Filter which tb_usuario to delete.
     */
    where: tb_usuarioWhereUniqueInput
  }

  /**
   * tb_usuario deleteMany
   */
  export type tb_usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_usuarios to delete
     */
    where?: tb_usuarioWhereInput
    /**
     * Limit how many tb_usuarios to delete.
     */
    limit?: number
  }

  /**
   * tb_usuario.cliente
   */
  export type tb_usuario$clienteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_cliente
     */
    select?: tb_clienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_cliente
     */
    omit?: tb_clienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_clienteInclude<ExtArgs> | null
    where?: tb_clienteWhereInput
  }

  /**
   * tb_usuario.tecnico
   */
  export type tb_usuario$tecnicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_tecnico
     */
    select?: tb_tecnicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_tecnico
     */
    omit?: tb_tecnicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_tecnicoInclude<ExtArgs> | null
    where?: tb_tecnicoWhereInput
  }

  /**
   * tb_usuario.notificaciones
   */
  export type tb_usuario$notificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_notificacion
     */
    select?: tb_notificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_notificacion
     */
    omit?: tb_notificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_notificacionInclude<ExtArgs> | null
    where?: tb_notificacionWhereInput
    orderBy?: tb_notificacionOrderByWithRelationInput | tb_notificacionOrderByWithRelationInput[]
    cursor?: tb_notificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_notificacionScalarFieldEnum | Tb_notificacionScalarFieldEnum[]
  }

  /**
   * tb_usuario.estados_aprobados
   */
  export type tb_usuario$estados_aprobadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_estado_reparacion
     */
    select?: tb_estado_reparacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_estado_reparacion
     */
    omit?: tb_estado_reparacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_estado_reparacionInclude<ExtArgs> | null
    where?: tb_estado_reparacionWhereInput
    orderBy?: tb_estado_reparacionOrderByWithRelationInput | tb_estado_reparacionOrderByWithRelationInput[]
    cursor?: tb_estado_reparacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tb_estado_reparacionScalarFieldEnum | Tb_estado_reparacionScalarFieldEnum[]
  }

  /**
   * tb_usuario without action
   */
  export type tb_usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_usuario
     */
    select?: tb_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_usuario
     */
    omit?: tb_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tb_usuarioInclude<ExtArgs> | null
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


  export const Tb_clienteScalarFieldEnum: {
    ID_Cliente: 'ID_Cliente',
    Cedula: 'Cedula',
    Nombres: 'Nombres',
    Apellidos: 'Apellidos',
    Telefono: 'Telefono',
    Email: 'Email',
    Direccion: 'Direccion'
  };

  export type Tb_clienteScalarFieldEnum = (typeof Tb_clienteScalarFieldEnum)[keyof typeof Tb_clienteScalarFieldEnum]


  export const Tb_detalle_reparacion_repuestoScalarFieldEnum: {
    ID_Detalle: 'ID_Detalle',
    ID_Reparacion: 'ID_Reparacion',
    ID_Repuesto: 'ID_Repuesto',
    Cantidad: 'Cantidad',
    Subtotal: 'Subtotal'
  };

  export type Tb_detalle_reparacion_repuestoScalarFieldEnum = (typeof Tb_detalle_reparacion_repuestoScalarFieldEnum)[keyof typeof Tb_detalle_reparacion_repuestoScalarFieldEnum]


  export const Tb_equipoScalarFieldEnum: {
    ID_Equipo: 'ID_Equipo',
    ID_Cliente: 'ID_Cliente',
    Nombre: 'Nombre',
    Marca: 'Marca',
    Modelo: 'Modelo',
    Descripcion_problema: 'Descripcion_problema',
    Estado: 'Estado'
  };

  export type Tb_equipoScalarFieldEnum = (typeof Tb_equipoScalarFieldEnum)[keyof typeof Tb_equipoScalarFieldEnum]


  export const Tb_estado_reparacionScalarFieldEnum: {
    ID_Estado: 'ID_Estado',
    ID_Reparacion: 'ID_Reparacion',
    FechaHora: 'FechaHora',
    Estado: 'Estado',
    Descripcion: 'Descripcion',
    Requiere_Aprobacion: 'Requiere_Aprobacion',
    Aprobado: 'Aprobado',
    ID_Usuario_Aprobado: 'ID_Usuario_Aprobado',
    Fecha_Aprobacion: 'Fecha_Aprobacion'
  };

  export type Tb_estado_reparacionScalarFieldEnum = (typeof Tb_estado_reparacionScalarFieldEnum)[keyof typeof Tb_estado_reparacionScalarFieldEnum]


  export const Tb_facturaScalarFieldEnum: {
    ID_Factura: 'ID_Factura',
    ID_Reparacion: 'ID_Reparacion',
    Fecha_Emision: 'Fecha_Emision',
    Subtotal: 'Subtotal',
    IVA: 'IVA',
    Total: 'Total',
    Metodo_Pago: 'Metodo_Pago',
    Estado: 'Estado'
  };

  export type Tb_facturaScalarFieldEnum = (typeof Tb_facturaScalarFieldEnum)[keyof typeof Tb_facturaScalarFieldEnum]


  export const Tb_notificacionScalarFieldEnum: {
    ID_Notificacion: 'ID_Notificacion',
    ID_Cliente: 'ID_Cliente',
    ID_Reparacion: 'ID_Reparacion',
    ID_Usuario: 'ID_Usuario',
    Mensaje: 'Mensaje',
    Fecha_Envio: 'Fecha_Envio',
    Enviado: 'Enviado',
    Tipo: 'Tipo',
    Tipo_Cambio: 'Tipo_Cambio',
    Aprobado: 'Aprobado',
    Datos_Cambio: 'Datos_Cambio'
  };

  export type Tb_notificacionScalarFieldEnum = (typeof Tb_notificacionScalarFieldEnum)[keyof typeof Tb_notificacionScalarFieldEnum]


  export const Tb_reparacionScalarFieldEnum: {
    ID_Reparacion: 'ID_Reparacion',
    ID_Cliente: 'ID_Cliente',
    ID_Tecnico: 'ID_Tecnico',
    ID_Equipo: 'ID_Equipo',
    Fecha_Ingreso: 'Fecha_Ingreso',
    Fecha_Entrega: 'Fecha_Entrega',
    CostoServicio: 'CostoServicio',
    IVA: 'IVA',
    Total: 'Total'
  };

  export type Tb_reparacionScalarFieldEnum = (typeof Tb_reparacionScalarFieldEnum)[keyof typeof Tb_reparacionScalarFieldEnum]


  export const Tb_repuestoScalarFieldEnum: {
    ID_Repuesto: 'ID_Repuesto',
    Nombre: 'Nombre',
    Precio: 'Precio'
  };

  export type Tb_repuestoScalarFieldEnum = (typeof Tb_repuestoScalarFieldEnum)[keyof typeof Tb_repuestoScalarFieldEnum]


  export const Tb_tecnicoScalarFieldEnum: {
    ID_Tecnico: 'ID_Tecnico',
    Cedula: 'Cedula',
    Nombres: 'Nombres',
    Apellidos: 'Apellidos',
    Telefono: 'Telefono',
    Email: 'Email',
    Especialidad: 'Especialidad'
  };

  export type Tb_tecnicoScalarFieldEnum = (typeof Tb_tecnicoScalarFieldEnum)[keyof typeof Tb_tecnicoScalarFieldEnum]


  export const Tb_usuarioScalarFieldEnum: {
    ID_Usuario: 'ID_Usuario',
    Usuario_Name: 'Usuario_Name',
    Usuario_Password: 'Usuario_Password',
    Usuario_nivel: 'Usuario_nivel',
    Usuario_activo: 'Usuario_activo',
    ID_Cliente: 'ID_Cliente',
    ID_Tecnico: 'ID_Tecnico'
  };

  export type Tb_usuarioScalarFieldEnum = (typeof Tb_usuarioScalarFieldEnum)[keyof typeof Tb_usuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const tb_clienteOrderByRelevanceFieldEnum: {
    Cedula: 'Cedula',
    Nombres: 'Nombres',
    Apellidos: 'Apellidos',
    Telefono: 'Telefono',
    Email: 'Email',
    Direccion: 'Direccion'
  };

  export type tb_clienteOrderByRelevanceFieldEnum = (typeof tb_clienteOrderByRelevanceFieldEnum)[keyof typeof tb_clienteOrderByRelevanceFieldEnum]


  export const tb_equipoOrderByRelevanceFieldEnum: {
    Nombre: 'Nombre',
    Marca: 'Marca',
    Modelo: 'Modelo',
    Descripcion_problema: 'Descripcion_problema',
    Estado: 'Estado'
  };

  export type tb_equipoOrderByRelevanceFieldEnum = (typeof tb_equipoOrderByRelevanceFieldEnum)[keyof typeof tb_equipoOrderByRelevanceFieldEnum]


  export const tb_estado_reparacionOrderByRelevanceFieldEnum: {
    Estado: 'Estado',
    Descripcion: 'Descripcion'
  };

  export type tb_estado_reparacionOrderByRelevanceFieldEnum = (typeof tb_estado_reparacionOrderByRelevanceFieldEnum)[keyof typeof tb_estado_reparacionOrderByRelevanceFieldEnum]


  export const tb_facturaOrderByRelevanceFieldEnum: {
    Metodo_Pago: 'Metodo_Pago',
    Estado: 'Estado'
  };

  export type tb_facturaOrderByRelevanceFieldEnum = (typeof tb_facturaOrderByRelevanceFieldEnum)[keyof typeof tb_facturaOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const tb_notificacionOrderByRelevanceFieldEnum: {
    Mensaje: 'Mensaje',
    Tipo: 'Tipo',
    Tipo_Cambio: 'Tipo_Cambio'
  };

  export type tb_notificacionOrderByRelevanceFieldEnum = (typeof tb_notificacionOrderByRelevanceFieldEnum)[keyof typeof tb_notificacionOrderByRelevanceFieldEnum]


  export const tb_repuestoOrderByRelevanceFieldEnum: {
    Nombre: 'Nombre'
  };

  export type tb_repuestoOrderByRelevanceFieldEnum = (typeof tb_repuestoOrderByRelevanceFieldEnum)[keyof typeof tb_repuestoOrderByRelevanceFieldEnum]


  export const tb_tecnicoOrderByRelevanceFieldEnum: {
    Cedula: 'Cedula',
    Nombres: 'Nombres',
    Apellidos: 'Apellidos',
    Telefono: 'Telefono',
    Email: 'Email',
    Especialidad: 'Especialidad'
  };

  export type tb_tecnicoOrderByRelevanceFieldEnum = (typeof tb_tecnicoOrderByRelevanceFieldEnum)[keyof typeof tb_tecnicoOrderByRelevanceFieldEnum]


  export const tb_usuarioOrderByRelevanceFieldEnum: {
    Usuario_Name: 'Usuario_Name',
    Usuario_Password: 'Usuario_Password'
  };

  export type tb_usuarioOrderByRelevanceFieldEnum = (typeof tb_usuarioOrderByRelevanceFieldEnum)[keyof typeof tb_usuarioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'tb_usuario_Usuario_nivel'
   */
  export type Enumtb_usuario_Usuario_nivelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tb_usuario_Usuario_nivel'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tb_clienteWhereInput = {
    AND?: tb_clienteWhereInput | tb_clienteWhereInput[]
    OR?: tb_clienteWhereInput[]
    NOT?: tb_clienteWhereInput | tb_clienteWhereInput[]
    ID_Cliente?: IntFilter<"tb_cliente"> | number
    Cedula?: StringNullableFilter<"tb_cliente"> | string | null
    Nombres?: StringNullableFilter<"tb_cliente"> | string | null
    Apellidos?: StringNullableFilter<"tb_cliente"> | string | null
    Telefono?: StringNullableFilter<"tb_cliente"> | string | null
    Email?: StringNullableFilter<"tb_cliente"> | string | null
    Direccion?: StringNullableFilter<"tb_cliente"> | string | null
    equipos?: Tb_equipoListRelationFilter
    reparaciones?: Tb_reparacionListRelationFilter
    usuarios?: Tb_usuarioListRelationFilter
    tb_notificacion?: Tb_notificacionListRelationFilter
  }

  export type tb_clienteOrderByWithRelationInput = {
    ID_Cliente?: SortOrder
    Cedula?: SortOrderInput | SortOrder
    Nombres?: SortOrderInput | SortOrder
    Apellidos?: SortOrderInput | SortOrder
    Telefono?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Direccion?: SortOrderInput | SortOrder
    equipos?: tb_equipoOrderByRelationAggregateInput
    reparaciones?: tb_reparacionOrderByRelationAggregateInput
    usuarios?: tb_usuarioOrderByRelationAggregateInput
    tb_notificacion?: tb_notificacionOrderByRelationAggregateInput
    _relevance?: tb_clienteOrderByRelevanceInput
  }

  export type tb_clienteWhereUniqueInput = Prisma.AtLeast<{
    ID_Cliente?: number
    AND?: tb_clienteWhereInput | tb_clienteWhereInput[]
    OR?: tb_clienteWhereInput[]
    NOT?: tb_clienteWhereInput | tb_clienteWhereInput[]
    Cedula?: StringNullableFilter<"tb_cliente"> | string | null
    Nombres?: StringNullableFilter<"tb_cliente"> | string | null
    Apellidos?: StringNullableFilter<"tb_cliente"> | string | null
    Telefono?: StringNullableFilter<"tb_cliente"> | string | null
    Email?: StringNullableFilter<"tb_cliente"> | string | null
    Direccion?: StringNullableFilter<"tb_cliente"> | string | null
    equipos?: Tb_equipoListRelationFilter
    reparaciones?: Tb_reparacionListRelationFilter
    usuarios?: Tb_usuarioListRelationFilter
    tb_notificacion?: Tb_notificacionListRelationFilter
  }, "ID_Cliente">

  export type tb_clienteOrderByWithAggregationInput = {
    ID_Cliente?: SortOrder
    Cedula?: SortOrderInput | SortOrder
    Nombres?: SortOrderInput | SortOrder
    Apellidos?: SortOrderInput | SortOrder
    Telefono?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Direccion?: SortOrderInput | SortOrder
    _count?: tb_clienteCountOrderByAggregateInput
    _avg?: tb_clienteAvgOrderByAggregateInput
    _max?: tb_clienteMaxOrderByAggregateInput
    _min?: tb_clienteMinOrderByAggregateInput
    _sum?: tb_clienteSumOrderByAggregateInput
  }

  export type tb_clienteScalarWhereWithAggregatesInput = {
    AND?: tb_clienteScalarWhereWithAggregatesInput | tb_clienteScalarWhereWithAggregatesInput[]
    OR?: tb_clienteScalarWhereWithAggregatesInput[]
    NOT?: tb_clienteScalarWhereWithAggregatesInput | tb_clienteScalarWhereWithAggregatesInput[]
    ID_Cliente?: IntWithAggregatesFilter<"tb_cliente"> | number
    Cedula?: StringNullableWithAggregatesFilter<"tb_cliente"> | string | null
    Nombres?: StringNullableWithAggregatesFilter<"tb_cliente"> | string | null
    Apellidos?: StringNullableWithAggregatesFilter<"tb_cliente"> | string | null
    Telefono?: StringNullableWithAggregatesFilter<"tb_cliente"> | string | null
    Email?: StringNullableWithAggregatesFilter<"tb_cliente"> | string | null
    Direccion?: StringNullableWithAggregatesFilter<"tb_cliente"> | string | null
  }

  export type tb_detalle_reparacion_repuestoWhereInput = {
    AND?: tb_detalle_reparacion_repuestoWhereInput | tb_detalle_reparacion_repuestoWhereInput[]
    OR?: tb_detalle_reparacion_repuestoWhereInput[]
    NOT?: tb_detalle_reparacion_repuestoWhereInput | tb_detalle_reparacion_repuestoWhereInput[]
    ID_Detalle?: IntFilter<"tb_detalle_reparacion_repuesto"> | number
    ID_Reparacion?: IntNullableFilter<"tb_detalle_reparacion_repuesto"> | number | null
    ID_Repuesto?: IntNullableFilter<"tb_detalle_reparacion_repuesto"> | number | null
    Cantidad?: IntNullableFilter<"tb_detalle_reparacion_repuesto"> | number | null
    Subtotal?: DecimalNullableFilter<"tb_detalle_reparacion_repuesto"> | Decimal | DecimalJsLike | number | string | null
    reparacion?: XOR<Tb_reparacionNullableScalarRelationFilter, tb_reparacionWhereInput> | null
    repuesto?: XOR<Tb_repuestoNullableScalarRelationFilter, tb_repuestoWhereInput> | null
  }

  export type tb_detalle_reparacion_repuestoOrderByWithRelationInput = {
    ID_Detalle?: SortOrder
    ID_Reparacion?: SortOrderInput | SortOrder
    ID_Repuesto?: SortOrderInput | SortOrder
    Cantidad?: SortOrderInput | SortOrder
    Subtotal?: SortOrderInput | SortOrder
    reparacion?: tb_reparacionOrderByWithRelationInput
    repuesto?: tb_repuestoOrderByWithRelationInput
  }

  export type tb_detalle_reparacion_repuestoWhereUniqueInput = Prisma.AtLeast<{
    ID_Detalle?: number
    AND?: tb_detalle_reparacion_repuestoWhereInput | tb_detalle_reparacion_repuestoWhereInput[]
    OR?: tb_detalle_reparacion_repuestoWhereInput[]
    NOT?: tb_detalle_reparacion_repuestoWhereInput | tb_detalle_reparacion_repuestoWhereInput[]
    ID_Reparacion?: IntNullableFilter<"tb_detalle_reparacion_repuesto"> | number | null
    ID_Repuesto?: IntNullableFilter<"tb_detalle_reparacion_repuesto"> | number | null
    Cantidad?: IntNullableFilter<"tb_detalle_reparacion_repuesto"> | number | null
    Subtotal?: DecimalNullableFilter<"tb_detalle_reparacion_repuesto"> | Decimal | DecimalJsLike | number | string | null
    reparacion?: XOR<Tb_reparacionNullableScalarRelationFilter, tb_reparacionWhereInput> | null
    repuesto?: XOR<Tb_repuestoNullableScalarRelationFilter, tb_repuestoWhereInput> | null
  }, "ID_Detalle">

  export type tb_detalle_reparacion_repuestoOrderByWithAggregationInput = {
    ID_Detalle?: SortOrder
    ID_Reparacion?: SortOrderInput | SortOrder
    ID_Repuesto?: SortOrderInput | SortOrder
    Cantidad?: SortOrderInput | SortOrder
    Subtotal?: SortOrderInput | SortOrder
    _count?: tb_detalle_reparacion_repuestoCountOrderByAggregateInput
    _avg?: tb_detalle_reparacion_repuestoAvgOrderByAggregateInput
    _max?: tb_detalle_reparacion_repuestoMaxOrderByAggregateInput
    _min?: tb_detalle_reparacion_repuestoMinOrderByAggregateInput
    _sum?: tb_detalle_reparacion_repuestoSumOrderByAggregateInput
  }

  export type tb_detalle_reparacion_repuestoScalarWhereWithAggregatesInput = {
    AND?: tb_detalle_reparacion_repuestoScalarWhereWithAggregatesInput | tb_detalle_reparacion_repuestoScalarWhereWithAggregatesInput[]
    OR?: tb_detalle_reparacion_repuestoScalarWhereWithAggregatesInput[]
    NOT?: tb_detalle_reparacion_repuestoScalarWhereWithAggregatesInput | tb_detalle_reparacion_repuestoScalarWhereWithAggregatesInput[]
    ID_Detalle?: IntWithAggregatesFilter<"tb_detalle_reparacion_repuesto"> | number
    ID_Reparacion?: IntNullableWithAggregatesFilter<"tb_detalle_reparacion_repuesto"> | number | null
    ID_Repuesto?: IntNullableWithAggregatesFilter<"tb_detalle_reparacion_repuesto"> | number | null
    Cantidad?: IntNullableWithAggregatesFilter<"tb_detalle_reparacion_repuesto"> | number | null
    Subtotal?: DecimalNullableWithAggregatesFilter<"tb_detalle_reparacion_repuesto"> | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_equipoWhereInput = {
    AND?: tb_equipoWhereInput | tb_equipoWhereInput[]
    OR?: tb_equipoWhereInput[]
    NOT?: tb_equipoWhereInput | tb_equipoWhereInput[]
    ID_Equipo?: IntFilter<"tb_equipo"> | number
    ID_Cliente?: IntNullableFilter<"tb_equipo"> | number | null
    Nombre?: StringNullableFilter<"tb_equipo"> | string | null
    Marca?: StringNullableFilter<"tb_equipo"> | string | null
    Modelo?: StringNullableFilter<"tb_equipo"> | string | null
    Descripcion_problema?: StringNullableFilter<"tb_equipo"> | string | null
    Estado?: StringNullableFilter<"tb_equipo"> | string | null
    cliente?: XOR<Tb_clienteNullableScalarRelationFilter, tb_clienteWhereInput> | null
    reparaciones?: Tb_reparacionListRelationFilter
  }

  export type tb_equipoOrderByWithRelationInput = {
    ID_Equipo?: SortOrder
    ID_Cliente?: SortOrderInput | SortOrder
    Nombre?: SortOrderInput | SortOrder
    Marca?: SortOrderInput | SortOrder
    Modelo?: SortOrderInput | SortOrder
    Descripcion_problema?: SortOrderInput | SortOrder
    Estado?: SortOrderInput | SortOrder
    cliente?: tb_clienteOrderByWithRelationInput
    reparaciones?: tb_reparacionOrderByRelationAggregateInput
    _relevance?: tb_equipoOrderByRelevanceInput
  }

  export type tb_equipoWhereUniqueInput = Prisma.AtLeast<{
    ID_Equipo?: number
    AND?: tb_equipoWhereInput | tb_equipoWhereInput[]
    OR?: tb_equipoWhereInput[]
    NOT?: tb_equipoWhereInput | tb_equipoWhereInput[]
    ID_Cliente?: IntNullableFilter<"tb_equipo"> | number | null
    Nombre?: StringNullableFilter<"tb_equipo"> | string | null
    Marca?: StringNullableFilter<"tb_equipo"> | string | null
    Modelo?: StringNullableFilter<"tb_equipo"> | string | null
    Descripcion_problema?: StringNullableFilter<"tb_equipo"> | string | null
    Estado?: StringNullableFilter<"tb_equipo"> | string | null
    cliente?: XOR<Tb_clienteNullableScalarRelationFilter, tb_clienteWhereInput> | null
    reparaciones?: Tb_reparacionListRelationFilter
  }, "ID_Equipo">

  export type tb_equipoOrderByWithAggregationInput = {
    ID_Equipo?: SortOrder
    ID_Cliente?: SortOrderInput | SortOrder
    Nombre?: SortOrderInput | SortOrder
    Marca?: SortOrderInput | SortOrder
    Modelo?: SortOrderInput | SortOrder
    Descripcion_problema?: SortOrderInput | SortOrder
    Estado?: SortOrderInput | SortOrder
    _count?: tb_equipoCountOrderByAggregateInput
    _avg?: tb_equipoAvgOrderByAggregateInput
    _max?: tb_equipoMaxOrderByAggregateInput
    _min?: tb_equipoMinOrderByAggregateInput
    _sum?: tb_equipoSumOrderByAggregateInput
  }

  export type tb_equipoScalarWhereWithAggregatesInput = {
    AND?: tb_equipoScalarWhereWithAggregatesInput | tb_equipoScalarWhereWithAggregatesInput[]
    OR?: tb_equipoScalarWhereWithAggregatesInput[]
    NOT?: tb_equipoScalarWhereWithAggregatesInput | tb_equipoScalarWhereWithAggregatesInput[]
    ID_Equipo?: IntWithAggregatesFilter<"tb_equipo"> | number
    ID_Cliente?: IntNullableWithAggregatesFilter<"tb_equipo"> | number | null
    Nombre?: StringNullableWithAggregatesFilter<"tb_equipo"> | string | null
    Marca?: StringNullableWithAggregatesFilter<"tb_equipo"> | string | null
    Modelo?: StringNullableWithAggregatesFilter<"tb_equipo"> | string | null
    Descripcion_problema?: StringNullableWithAggregatesFilter<"tb_equipo"> | string | null
    Estado?: StringNullableWithAggregatesFilter<"tb_equipo"> | string | null
  }

  export type tb_estado_reparacionWhereInput = {
    AND?: tb_estado_reparacionWhereInput | tb_estado_reparacionWhereInput[]
    OR?: tb_estado_reparacionWhereInput[]
    NOT?: tb_estado_reparacionWhereInput | tb_estado_reparacionWhereInput[]
    ID_Estado?: IntFilter<"tb_estado_reparacion"> | number
    ID_Reparacion?: IntNullableFilter<"tb_estado_reparacion"> | number | null
    FechaHora?: DateTimeNullableFilter<"tb_estado_reparacion"> | Date | string | null
    Estado?: StringNullableFilter<"tb_estado_reparacion"> | string | null
    Descripcion?: StringNullableFilter<"tb_estado_reparacion"> | string | null
    Requiere_Aprobacion?: BoolNullableFilter<"tb_estado_reparacion"> | boolean | null
    Aprobado?: BoolNullableFilter<"tb_estado_reparacion"> | boolean | null
    ID_Usuario_Aprobado?: IntNullableFilter<"tb_estado_reparacion"> | number | null
    Fecha_Aprobacion?: DateTimeNullableFilter<"tb_estado_reparacion"> | Date | string | null
    reparacion?: XOR<Tb_reparacionNullableScalarRelationFilter, tb_reparacionWhereInput> | null
    usuario_aprobador?: XOR<Tb_usuarioNullableScalarRelationFilter, tb_usuarioWhereInput> | null
  }

  export type tb_estado_reparacionOrderByWithRelationInput = {
    ID_Estado?: SortOrder
    ID_Reparacion?: SortOrderInput | SortOrder
    FechaHora?: SortOrderInput | SortOrder
    Estado?: SortOrderInput | SortOrder
    Descripcion?: SortOrderInput | SortOrder
    Requiere_Aprobacion?: SortOrderInput | SortOrder
    Aprobado?: SortOrderInput | SortOrder
    ID_Usuario_Aprobado?: SortOrderInput | SortOrder
    Fecha_Aprobacion?: SortOrderInput | SortOrder
    reparacion?: tb_reparacionOrderByWithRelationInput
    usuario_aprobador?: tb_usuarioOrderByWithRelationInput
    _relevance?: tb_estado_reparacionOrderByRelevanceInput
  }

  export type tb_estado_reparacionWhereUniqueInput = Prisma.AtLeast<{
    ID_Estado?: number
    AND?: tb_estado_reparacionWhereInput | tb_estado_reparacionWhereInput[]
    OR?: tb_estado_reparacionWhereInput[]
    NOT?: tb_estado_reparacionWhereInput | tb_estado_reparacionWhereInput[]
    ID_Reparacion?: IntNullableFilter<"tb_estado_reparacion"> | number | null
    FechaHora?: DateTimeNullableFilter<"tb_estado_reparacion"> | Date | string | null
    Estado?: StringNullableFilter<"tb_estado_reparacion"> | string | null
    Descripcion?: StringNullableFilter<"tb_estado_reparacion"> | string | null
    Requiere_Aprobacion?: BoolNullableFilter<"tb_estado_reparacion"> | boolean | null
    Aprobado?: BoolNullableFilter<"tb_estado_reparacion"> | boolean | null
    ID_Usuario_Aprobado?: IntNullableFilter<"tb_estado_reparacion"> | number | null
    Fecha_Aprobacion?: DateTimeNullableFilter<"tb_estado_reparacion"> | Date | string | null
    reparacion?: XOR<Tb_reparacionNullableScalarRelationFilter, tb_reparacionWhereInput> | null
    usuario_aprobador?: XOR<Tb_usuarioNullableScalarRelationFilter, tb_usuarioWhereInput> | null
  }, "ID_Estado">

  export type tb_estado_reparacionOrderByWithAggregationInput = {
    ID_Estado?: SortOrder
    ID_Reparacion?: SortOrderInput | SortOrder
    FechaHora?: SortOrderInput | SortOrder
    Estado?: SortOrderInput | SortOrder
    Descripcion?: SortOrderInput | SortOrder
    Requiere_Aprobacion?: SortOrderInput | SortOrder
    Aprobado?: SortOrderInput | SortOrder
    ID_Usuario_Aprobado?: SortOrderInput | SortOrder
    Fecha_Aprobacion?: SortOrderInput | SortOrder
    _count?: tb_estado_reparacionCountOrderByAggregateInput
    _avg?: tb_estado_reparacionAvgOrderByAggregateInput
    _max?: tb_estado_reparacionMaxOrderByAggregateInput
    _min?: tb_estado_reparacionMinOrderByAggregateInput
    _sum?: tb_estado_reparacionSumOrderByAggregateInput
  }

  export type tb_estado_reparacionScalarWhereWithAggregatesInput = {
    AND?: tb_estado_reparacionScalarWhereWithAggregatesInput | tb_estado_reparacionScalarWhereWithAggregatesInput[]
    OR?: tb_estado_reparacionScalarWhereWithAggregatesInput[]
    NOT?: tb_estado_reparacionScalarWhereWithAggregatesInput | tb_estado_reparacionScalarWhereWithAggregatesInput[]
    ID_Estado?: IntWithAggregatesFilter<"tb_estado_reparacion"> | number
    ID_Reparacion?: IntNullableWithAggregatesFilter<"tb_estado_reparacion"> | number | null
    FechaHora?: DateTimeNullableWithAggregatesFilter<"tb_estado_reparacion"> | Date | string | null
    Estado?: StringNullableWithAggregatesFilter<"tb_estado_reparacion"> | string | null
    Descripcion?: StringNullableWithAggregatesFilter<"tb_estado_reparacion"> | string | null
    Requiere_Aprobacion?: BoolNullableWithAggregatesFilter<"tb_estado_reparacion"> | boolean | null
    Aprobado?: BoolNullableWithAggregatesFilter<"tb_estado_reparacion"> | boolean | null
    ID_Usuario_Aprobado?: IntNullableWithAggregatesFilter<"tb_estado_reparacion"> | number | null
    Fecha_Aprobacion?: DateTimeNullableWithAggregatesFilter<"tb_estado_reparacion"> | Date | string | null
  }

  export type tb_facturaWhereInput = {
    AND?: tb_facturaWhereInput | tb_facturaWhereInput[]
    OR?: tb_facturaWhereInput[]
    NOT?: tb_facturaWhereInput | tb_facturaWhereInput[]
    ID_Factura?: IntFilter<"tb_factura"> | number
    ID_Reparacion?: IntNullableFilter<"tb_factura"> | number | null
    Fecha_Emision?: DateTimeNullableFilter<"tb_factura"> | Date | string | null
    Subtotal?: DecimalNullableFilter<"tb_factura"> | Decimal | DecimalJsLike | number | string | null
    IVA?: DecimalNullableFilter<"tb_factura"> | Decimal | DecimalJsLike | number | string | null
    Total?: DecimalNullableFilter<"tb_factura"> | Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: StringNullableFilter<"tb_factura"> | string | null
    Estado?: StringNullableFilter<"tb_factura"> | string | null
    reparacion?: XOR<Tb_reparacionNullableScalarRelationFilter, tb_reparacionWhereInput> | null
  }

  export type tb_facturaOrderByWithRelationInput = {
    ID_Factura?: SortOrder
    ID_Reparacion?: SortOrderInput | SortOrder
    Fecha_Emision?: SortOrderInput | SortOrder
    Subtotal?: SortOrderInput | SortOrder
    IVA?: SortOrderInput | SortOrder
    Total?: SortOrderInput | SortOrder
    Metodo_Pago?: SortOrderInput | SortOrder
    Estado?: SortOrderInput | SortOrder
    reparacion?: tb_reparacionOrderByWithRelationInput
    _relevance?: tb_facturaOrderByRelevanceInput
  }

  export type tb_facturaWhereUniqueInput = Prisma.AtLeast<{
    ID_Factura?: number
    ID_Reparacion?: number
    AND?: tb_facturaWhereInput | tb_facturaWhereInput[]
    OR?: tb_facturaWhereInput[]
    NOT?: tb_facturaWhereInput | tb_facturaWhereInput[]
    Fecha_Emision?: DateTimeNullableFilter<"tb_factura"> | Date | string | null
    Subtotal?: DecimalNullableFilter<"tb_factura"> | Decimal | DecimalJsLike | number | string | null
    IVA?: DecimalNullableFilter<"tb_factura"> | Decimal | DecimalJsLike | number | string | null
    Total?: DecimalNullableFilter<"tb_factura"> | Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: StringNullableFilter<"tb_factura"> | string | null
    Estado?: StringNullableFilter<"tb_factura"> | string | null
    reparacion?: XOR<Tb_reparacionNullableScalarRelationFilter, tb_reparacionWhereInput> | null
  }, "ID_Factura" | "ID_Reparacion">

  export type tb_facturaOrderByWithAggregationInput = {
    ID_Factura?: SortOrder
    ID_Reparacion?: SortOrderInput | SortOrder
    Fecha_Emision?: SortOrderInput | SortOrder
    Subtotal?: SortOrderInput | SortOrder
    IVA?: SortOrderInput | SortOrder
    Total?: SortOrderInput | SortOrder
    Metodo_Pago?: SortOrderInput | SortOrder
    Estado?: SortOrderInput | SortOrder
    _count?: tb_facturaCountOrderByAggregateInput
    _avg?: tb_facturaAvgOrderByAggregateInput
    _max?: tb_facturaMaxOrderByAggregateInput
    _min?: tb_facturaMinOrderByAggregateInput
    _sum?: tb_facturaSumOrderByAggregateInput
  }

  export type tb_facturaScalarWhereWithAggregatesInput = {
    AND?: tb_facturaScalarWhereWithAggregatesInput | tb_facturaScalarWhereWithAggregatesInput[]
    OR?: tb_facturaScalarWhereWithAggregatesInput[]
    NOT?: tb_facturaScalarWhereWithAggregatesInput | tb_facturaScalarWhereWithAggregatesInput[]
    ID_Factura?: IntWithAggregatesFilter<"tb_factura"> | number
    ID_Reparacion?: IntNullableWithAggregatesFilter<"tb_factura"> | number | null
    Fecha_Emision?: DateTimeNullableWithAggregatesFilter<"tb_factura"> | Date | string | null
    Subtotal?: DecimalNullableWithAggregatesFilter<"tb_factura"> | Decimal | DecimalJsLike | number | string | null
    IVA?: DecimalNullableWithAggregatesFilter<"tb_factura"> | Decimal | DecimalJsLike | number | string | null
    Total?: DecimalNullableWithAggregatesFilter<"tb_factura"> | Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: StringNullableWithAggregatesFilter<"tb_factura"> | string | null
    Estado?: StringNullableWithAggregatesFilter<"tb_factura"> | string | null
  }

  export type tb_notificacionWhereInput = {
    AND?: tb_notificacionWhereInput | tb_notificacionWhereInput[]
    OR?: tb_notificacionWhereInput[]
    NOT?: tb_notificacionWhereInput | tb_notificacionWhereInput[]
    ID_Notificacion?: IntFilter<"tb_notificacion"> | number
    ID_Cliente?: IntNullableFilter<"tb_notificacion"> | number | null
    ID_Reparacion?: IntNullableFilter<"tb_notificacion"> | number | null
    ID_Usuario?: IntNullableFilter<"tb_notificacion"> | number | null
    Mensaje?: StringNullableFilter<"tb_notificacion"> | string | null
    Fecha_Envio?: DateTimeNullableFilter<"tb_notificacion"> | Date | string | null
    Enviado?: BoolNullableFilter<"tb_notificacion"> | boolean | null
    Tipo?: StringNullableFilter<"tb_notificacion"> | string | null
    Tipo_Cambio?: StringNullableFilter<"tb_notificacion"> | string | null
    Aprobado?: BoolNullableFilter<"tb_notificacion"> | boolean | null
    Datos_Cambio?: JsonNullableFilter<"tb_notificacion">
    cliente?: XOR<Tb_clienteNullableScalarRelationFilter, tb_clienteWhereInput> | null
    reparacion?: XOR<Tb_reparacionNullableScalarRelationFilter, tb_reparacionWhereInput> | null
    usuario?: XOR<Tb_usuarioNullableScalarRelationFilter, tb_usuarioWhereInput> | null
  }

  export type tb_notificacionOrderByWithRelationInput = {
    ID_Notificacion?: SortOrder
    ID_Cliente?: SortOrderInput | SortOrder
    ID_Reparacion?: SortOrderInput | SortOrder
    ID_Usuario?: SortOrderInput | SortOrder
    Mensaje?: SortOrderInput | SortOrder
    Fecha_Envio?: SortOrderInput | SortOrder
    Enviado?: SortOrderInput | SortOrder
    Tipo?: SortOrderInput | SortOrder
    Tipo_Cambio?: SortOrderInput | SortOrder
    Aprobado?: SortOrderInput | SortOrder
    Datos_Cambio?: SortOrderInput | SortOrder
    cliente?: tb_clienteOrderByWithRelationInput
    reparacion?: tb_reparacionOrderByWithRelationInput
    usuario?: tb_usuarioOrderByWithRelationInput
    _relevance?: tb_notificacionOrderByRelevanceInput
  }

  export type tb_notificacionWhereUniqueInput = Prisma.AtLeast<{
    ID_Notificacion?: number
    AND?: tb_notificacionWhereInput | tb_notificacionWhereInput[]
    OR?: tb_notificacionWhereInput[]
    NOT?: tb_notificacionWhereInput | tb_notificacionWhereInput[]
    ID_Cliente?: IntNullableFilter<"tb_notificacion"> | number | null
    ID_Reparacion?: IntNullableFilter<"tb_notificacion"> | number | null
    ID_Usuario?: IntNullableFilter<"tb_notificacion"> | number | null
    Mensaje?: StringNullableFilter<"tb_notificacion"> | string | null
    Fecha_Envio?: DateTimeNullableFilter<"tb_notificacion"> | Date | string | null
    Enviado?: BoolNullableFilter<"tb_notificacion"> | boolean | null
    Tipo?: StringNullableFilter<"tb_notificacion"> | string | null
    Tipo_Cambio?: StringNullableFilter<"tb_notificacion"> | string | null
    Aprobado?: BoolNullableFilter<"tb_notificacion"> | boolean | null
    Datos_Cambio?: JsonNullableFilter<"tb_notificacion">
    cliente?: XOR<Tb_clienteNullableScalarRelationFilter, tb_clienteWhereInput> | null
    reparacion?: XOR<Tb_reparacionNullableScalarRelationFilter, tb_reparacionWhereInput> | null
    usuario?: XOR<Tb_usuarioNullableScalarRelationFilter, tb_usuarioWhereInput> | null
  }, "ID_Notificacion">

  export type tb_notificacionOrderByWithAggregationInput = {
    ID_Notificacion?: SortOrder
    ID_Cliente?: SortOrderInput | SortOrder
    ID_Reparacion?: SortOrderInput | SortOrder
    ID_Usuario?: SortOrderInput | SortOrder
    Mensaje?: SortOrderInput | SortOrder
    Fecha_Envio?: SortOrderInput | SortOrder
    Enviado?: SortOrderInput | SortOrder
    Tipo?: SortOrderInput | SortOrder
    Tipo_Cambio?: SortOrderInput | SortOrder
    Aprobado?: SortOrderInput | SortOrder
    Datos_Cambio?: SortOrderInput | SortOrder
    _count?: tb_notificacionCountOrderByAggregateInput
    _avg?: tb_notificacionAvgOrderByAggregateInput
    _max?: tb_notificacionMaxOrderByAggregateInput
    _min?: tb_notificacionMinOrderByAggregateInput
    _sum?: tb_notificacionSumOrderByAggregateInput
  }

  export type tb_notificacionScalarWhereWithAggregatesInput = {
    AND?: tb_notificacionScalarWhereWithAggregatesInput | tb_notificacionScalarWhereWithAggregatesInput[]
    OR?: tb_notificacionScalarWhereWithAggregatesInput[]
    NOT?: tb_notificacionScalarWhereWithAggregatesInput | tb_notificacionScalarWhereWithAggregatesInput[]
    ID_Notificacion?: IntWithAggregatesFilter<"tb_notificacion"> | number
    ID_Cliente?: IntNullableWithAggregatesFilter<"tb_notificacion"> | number | null
    ID_Reparacion?: IntNullableWithAggregatesFilter<"tb_notificacion"> | number | null
    ID_Usuario?: IntNullableWithAggregatesFilter<"tb_notificacion"> | number | null
    Mensaje?: StringNullableWithAggregatesFilter<"tb_notificacion"> | string | null
    Fecha_Envio?: DateTimeNullableWithAggregatesFilter<"tb_notificacion"> | Date | string | null
    Enviado?: BoolNullableWithAggregatesFilter<"tb_notificacion"> | boolean | null
    Tipo?: StringNullableWithAggregatesFilter<"tb_notificacion"> | string | null
    Tipo_Cambio?: StringNullableWithAggregatesFilter<"tb_notificacion"> | string | null
    Aprobado?: BoolNullableWithAggregatesFilter<"tb_notificacion"> | boolean | null
    Datos_Cambio?: JsonNullableWithAggregatesFilter<"tb_notificacion">
  }

  export type tb_reparacionWhereInput = {
    AND?: tb_reparacionWhereInput | tb_reparacionWhereInput[]
    OR?: tb_reparacionWhereInput[]
    NOT?: tb_reparacionWhereInput | tb_reparacionWhereInput[]
    ID_Reparacion?: IntFilter<"tb_reparacion"> | number
    ID_Cliente?: IntNullableFilter<"tb_reparacion"> | number | null
    ID_Tecnico?: IntNullableFilter<"tb_reparacion"> | number | null
    ID_Equipo?: IntNullableFilter<"tb_reparacion"> | number | null
    Fecha_Ingreso?: DateTimeNullableFilter<"tb_reparacion"> | Date | string | null
    Fecha_Entrega?: DateTimeNullableFilter<"tb_reparacion"> | Date | string | null
    CostoServicio?: DecimalNullableFilter<"tb_reparacion"> | Decimal | DecimalJsLike | number | string | null
    IVA?: DecimalNullableFilter<"tb_reparacion"> | Decimal | DecimalJsLike | number | string | null
    Total?: DecimalNullableFilter<"tb_reparacion"> | Decimal | DecimalJsLike | number | string | null
    cliente?: XOR<Tb_clienteNullableScalarRelationFilter, tb_clienteWhereInput> | null
    tecnico?: XOR<Tb_tecnicoNullableScalarRelationFilter, tb_tecnicoWhereInput> | null
    equipo?: XOR<Tb_equipoNullableScalarRelationFilter, tb_equipoWhereInput> | null
    estados?: Tb_estado_reparacionListRelationFilter
    detalles?: Tb_detalle_reparacion_repuestoListRelationFilter
    factura?: XOR<Tb_facturaNullableScalarRelationFilter, tb_facturaWhereInput> | null
    tb_notificacion?: Tb_notificacionListRelationFilter
  }

  export type tb_reparacionOrderByWithRelationInput = {
    ID_Reparacion?: SortOrder
    ID_Cliente?: SortOrderInput | SortOrder
    ID_Tecnico?: SortOrderInput | SortOrder
    ID_Equipo?: SortOrderInput | SortOrder
    Fecha_Ingreso?: SortOrderInput | SortOrder
    Fecha_Entrega?: SortOrderInput | SortOrder
    CostoServicio?: SortOrderInput | SortOrder
    IVA?: SortOrderInput | SortOrder
    Total?: SortOrderInput | SortOrder
    cliente?: tb_clienteOrderByWithRelationInput
    tecnico?: tb_tecnicoOrderByWithRelationInput
    equipo?: tb_equipoOrderByWithRelationInput
    estados?: tb_estado_reparacionOrderByRelationAggregateInput
    detalles?: tb_detalle_reparacion_repuestoOrderByRelationAggregateInput
    factura?: tb_facturaOrderByWithRelationInput
    tb_notificacion?: tb_notificacionOrderByRelationAggregateInput
  }

  export type tb_reparacionWhereUniqueInput = Prisma.AtLeast<{
    ID_Reparacion?: number
    AND?: tb_reparacionWhereInput | tb_reparacionWhereInput[]
    OR?: tb_reparacionWhereInput[]
    NOT?: tb_reparacionWhereInput | tb_reparacionWhereInput[]
    ID_Cliente?: IntNullableFilter<"tb_reparacion"> | number | null
    ID_Tecnico?: IntNullableFilter<"tb_reparacion"> | number | null
    ID_Equipo?: IntNullableFilter<"tb_reparacion"> | number | null
    Fecha_Ingreso?: DateTimeNullableFilter<"tb_reparacion"> | Date | string | null
    Fecha_Entrega?: DateTimeNullableFilter<"tb_reparacion"> | Date | string | null
    CostoServicio?: DecimalNullableFilter<"tb_reparacion"> | Decimal | DecimalJsLike | number | string | null
    IVA?: DecimalNullableFilter<"tb_reparacion"> | Decimal | DecimalJsLike | number | string | null
    Total?: DecimalNullableFilter<"tb_reparacion"> | Decimal | DecimalJsLike | number | string | null
    cliente?: XOR<Tb_clienteNullableScalarRelationFilter, tb_clienteWhereInput> | null
    tecnico?: XOR<Tb_tecnicoNullableScalarRelationFilter, tb_tecnicoWhereInput> | null
    equipo?: XOR<Tb_equipoNullableScalarRelationFilter, tb_equipoWhereInput> | null
    estados?: Tb_estado_reparacionListRelationFilter
    detalles?: Tb_detalle_reparacion_repuestoListRelationFilter
    factura?: XOR<Tb_facturaNullableScalarRelationFilter, tb_facturaWhereInput> | null
    tb_notificacion?: Tb_notificacionListRelationFilter
  }, "ID_Reparacion">

  export type tb_reparacionOrderByWithAggregationInput = {
    ID_Reparacion?: SortOrder
    ID_Cliente?: SortOrderInput | SortOrder
    ID_Tecnico?: SortOrderInput | SortOrder
    ID_Equipo?: SortOrderInput | SortOrder
    Fecha_Ingreso?: SortOrderInput | SortOrder
    Fecha_Entrega?: SortOrderInput | SortOrder
    CostoServicio?: SortOrderInput | SortOrder
    IVA?: SortOrderInput | SortOrder
    Total?: SortOrderInput | SortOrder
    _count?: tb_reparacionCountOrderByAggregateInput
    _avg?: tb_reparacionAvgOrderByAggregateInput
    _max?: tb_reparacionMaxOrderByAggregateInput
    _min?: tb_reparacionMinOrderByAggregateInput
    _sum?: tb_reparacionSumOrderByAggregateInput
  }

  export type tb_reparacionScalarWhereWithAggregatesInput = {
    AND?: tb_reparacionScalarWhereWithAggregatesInput | tb_reparacionScalarWhereWithAggregatesInput[]
    OR?: tb_reparacionScalarWhereWithAggregatesInput[]
    NOT?: tb_reparacionScalarWhereWithAggregatesInput | tb_reparacionScalarWhereWithAggregatesInput[]
    ID_Reparacion?: IntWithAggregatesFilter<"tb_reparacion"> | number
    ID_Cliente?: IntNullableWithAggregatesFilter<"tb_reparacion"> | number | null
    ID_Tecnico?: IntNullableWithAggregatesFilter<"tb_reparacion"> | number | null
    ID_Equipo?: IntNullableWithAggregatesFilter<"tb_reparacion"> | number | null
    Fecha_Ingreso?: DateTimeNullableWithAggregatesFilter<"tb_reparacion"> | Date | string | null
    Fecha_Entrega?: DateTimeNullableWithAggregatesFilter<"tb_reparacion"> | Date | string | null
    CostoServicio?: DecimalNullableWithAggregatesFilter<"tb_reparacion"> | Decimal | DecimalJsLike | number | string | null
    IVA?: DecimalNullableWithAggregatesFilter<"tb_reparacion"> | Decimal | DecimalJsLike | number | string | null
    Total?: DecimalNullableWithAggregatesFilter<"tb_reparacion"> | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_repuestoWhereInput = {
    AND?: tb_repuestoWhereInput | tb_repuestoWhereInput[]
    OR?: tb_repuestoWhereInput[]
    NOT?: tb_repuestoWhereInput | tb_repuestoWhereInput[]
    ID_Repuesto?: IntFilter<"tb_repuesto"> | number
    Nombre?: StringNullableFilter<"tb_repuesto"> | string | null
    Precio?: DecimalNullableFilter<"tb_repuesto"> | Decimal | DecimalJsLike | number | string | null
    detalles?: Tb_detalle_reparacion_repuestoListRelationFilter
  }

  export type tb_repuestoOrderByWithRelationInput = {
    ID_Repuesto?: SortOrder
    Nombre?: SortOrderInput | SortOrder
    Precio?: SortOrderInput | SortOrder
    detalles?: tb_detalle_reparacion_repuestoOrderByRelationAggregateInput
    _relevance?: tb_repuestoOrderByRelevanceInput
  }

  export type tb_repuestoWhereUniqueInput = Prisma.AtLeast<{
    ID_Repuesto?: number
    AND?: tb_repuestoWhereInput | tb_repuestoWhereInput[]
    OR?: tb_repuestoWhereInput[]
    NOT?: tb_repuestoWhereInput | tb_repuestoWhereInput[]
    Nombre?: StringNullableFilter<"tb_repuesto"> | string | null
    Precio?: DecimalNullableFilter<"tb_repuesto"> | Decimal | DecimalJsLike | number | string | null
    detalles?: Tb_detalle_reparacion_repuestoListRelationFilter
  }, "ID_Repuesto">

  export type tb_repuestoOrderByWithAggregationInput = {
    ID_Repuesto?: SortOrder
    Nombre?: SortOrderInput | SortOrder
    Precio?: SortOrderInput | SortOrder
    _count?: tb_repuestoCountOrderByAggregateInput
    _avg?: tb_repuestoAvgOrderByAggregateInput
    _max?: tb_repuestoMaxOrderByAggregateInput
    _min?: tb_repuestoMinOrderByAggregateInput
    _sum?: tb_repuestoSumOrderByAggregateInput
  }

  export type tb_repuestoScalarWhereWithAggregatesInput = {
    AND?: tb_repuestoScalarWhereWithAggregatesInput | tb_repuestoScalarWhereWithAggregatesInput[]
    OR?: tb_repuestoScalarWhereWithAggregatesInput[]
    NOT?: tb_repuestoScalarWhereWithAggregatesInput | tb_repuestoScalarWhereWithAggregatesInput[]
    ID_Repuesto?: IntWithAggregatesFilter<"tb_repuesto"> | number
    Nombre?: StringNullableWithAggregatesFilter<"tb_repuesto"> | string | null
    Precio?: DecimalNullableWithAggregatesFilter<"tb_repuesto"> | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_tecnicoWhereInput = {
    AND?: tb_tecnicoWhereInput | tb_tecnicoWhereInput[]
    OR?: tb_tecnicoWhereInput[]
    NOT?: tb_tecnicoWhereInput | tb_tecnicoWhereInput[]
    ID_Tecnico?: IntFilter<"tb_tecnico"> | number
    Cedula?: StringNullableFilter<"tb_tecnico"> | string | null
    Nombres?: StringNullableFilter<"tb_tecnico"> | string | null
    Apellidos?: StringNullableFilter<"tb_tecnico"> | string | null
    Telefono?: StringNullableFilter<"tb_tecnico"> | string | null
    Email?: StringNullableFilter<"tb_tecnico"> | string | null
    Especialidad?: StringNullableFilter<"tb_tecnico"> | string | null
    reparaciones?: Tb_reparacionListRelationFilter
    usuarios?: Tb_usuarioListRelationFilter
  }

  export type tb_tecnicoOrderByWithRelationInput = {
    ID_Tecnico?: SortOrder
    Cedula?: SortOrderInput | SortOrder
    Nombres?: SortOrderInput | SortOrder
    Apellidos?: SortOrderInput | SortOrder
    Telefono?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Especialidad?: SortOrderInput | SortOrder
    reparaciones?: tb_reparacionOrderByRelationAggregateInput
    usuarios?: tb_usuarioOrderByRelationAggregateInput
    _relevance?: tb_tecnicoOrderByRelevanceInput
  }

  export type tb_tecnicoWhereUniqueInput = Prisma.AtLeast<{
    ID_Tecnico?: number
    AND?: tb_tecnicoWhereInput | tb_tecnicoWhereInput[]
    OR?: tb_tecnicoWhereInput[]
    NOT?: tb_tecnicoWhereInput | tb_tecnicoWhereInput[]
    Cedula?: StringNullableFilter<"tb_tecnico"> | string | null
    Nombres?: StringNullableFilter<"tb_tecnico"> | string | null
    Apellidos?: StringNullableFilter<"tb_tecnico"> | string | null
    Telefono?: StringNullableFilter<"tb_tecnico"> | string | null
    Email?: StringNullableFilter<"tb_tecnico"> | string | null
    Especialidad?: StringNullableFilter<"tb_tecnico"> | string | null
    reparaciones?: Tb_reparacionListRelationFilter
    usuarios?: Tb_usuarioListRelationFilter
  }, "ID_Tecnico">

  export type tb_tecnicoOrderByWithAggregationInput = {
    ID_Tecnico?: SortOrder
    Cedula?: SortOrderInput | SortOrder
    Nombres?: SortOrderInput | SortOrder
    Apellidos?: SortOrderInput | SortOrder
    Telefono?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Especialidad?: SortOrderInput | SortOrder
    _count?: tb_tecnicoCountOrderByAggregateInput
    _avg?: tb_tecnicoAvgOrderByAggregateInput
    _max?: tb_tecnicoMaxOrderByAggregateInput
    _min?: tb_tecnicoMinOrderByAggregateInput
    _sum?: tb_tecnicoSumOrderByAggregateInput
  }

  export type tb_tecnicoScalarWhereWithAggregatesInput = {
    AND?: tb_tecnicoScalarWhereWithAggregatesInput | tb_tecnicoScalarWhereWithAggregatesInput[]
    OR?: tb_tecnicoScalarWhereWithAggregatesInput[]
    NOT?: tb_tecnicoScalarWhereWithAggregatesInput | tb_tecnicoScalarWhereWithAggregatesInput[]
    ID_Tecnico?: IntWithAggregatesFilter<"tb_tecnico"> | number
    Cedula?: StringNullableWithAggregatesFilter<"tb_tecnico"> | string | null
    Nombres?: StringNullableWithAggregatesFilter<"tb_tecnico"> | string | null
    Apellidos?: StringNullableWithAggregatesFilter<"tb_tecnico"> | string | null
    Telefono?: StringNullableWithAggregatesFilter<"tb_tecnico"> | string | null
    Email?: StringNullableWithAggregatesFilter<"tb_tecnico"> | string | null
    Especialidad?: StringNullableWithAggregatesFilter<"tb_tecnico"> | string | null
  }

  export type tb_usuarioWhereInput = {
    AND?: tb_usuarioWhereInput | tb_usuarioWhereInput[]
    OR?: tb_usuarioWhereInput[]
    NOT?: tb_usuarioWhereInput | tb_usuarioWhereInput[]
    ID_Usuario?: IntFilter<"tb_usuario"> | number
    Usuario_Name?: StringNullableFilter<"tb_usuario"> | string | null
    Usuario_Password?: StringNullableFilter<"tb_usuario"> | string | null
    Usuario_nivel?: Enumtb_usuario_Usuario_nivelNullableFilter<"tb_usuario"> | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: BoolNullableFilter<"tb_usuario"> | boolean | null
    ID_Cliente?: IntNullableFilter<"tb_usuario"> | number | null
    ID_Tecnico?: IntNullableFilter<"tb_usuario"> | number | null
    cliente?: XOR<Tb_clienteNullableScalarRelationFilter, tb_clienteWhereInput> | null
    tecnico?: XOR<Tb_tecnicoNullableScalarRelationFilter, tb_tecnicoWhereInput> | null
    notificaciones?: Tb_notificacionListRelationFilter
    estados_aprobados?: Tb_estado_reparacionListRelationFilter
  }

  export type tb_usuarioOrderByWithRelationInput = {
    ID_Usuario?: SortOrder
    Usuario_Name?: SortOrderInput | SortOrder
    Usuario_Password?: SortOrderInput | SortOrder
    Usuario_nivel?: SortOrderInput | SortOrder
    Usuario_activo?: SortOrderInput | SortOrder
    ID_Cliente?: SortOrderInput | SortOrder
    ID_Tecnico?: SortOrderInput | SortOrder
    cliente?: tb_clienteOrderByWithRelationInput
    tecnico?: tb_tecnicoOrderByWithRelationInput
    notificaciones?: tb_notificacionOrderByRelationAggregateInput
    estados_aprobados?: tb_estado_reparacionOrderByRelationAggregateInput
    _relevance?: tb_usuarioOrderByRelevanceInput
  }

  export type tb_usuarioWhereUniqueInput = Prisma.AtLeast<{
    ID_Usuario?: number
    Usuario_Name?: string
    AND?: tb_usuarioWhereInput | tb_usuarioWhereInput[]
    OR?: tb_usuarioWhereInput[]
    NOT?: tb_usuarioWhereInput | tb_usuarioWhereInput[]
    Usuario_Password?: StringNullableFilter<"tb_usuario"> | string | null
    Usuario_nivel?: Enumtb_usuario_Usuario_nivelNullableFilter<"tb_usuario"> | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: BoolNullableFilter<"tb_usuario"> | boolean | null
    ID_Cliente?: IntNullableFilter<"tb_usuario"> | number | null
    ID_Tecnico?: IntNullableFilter<"tb_usuario"> | number | null
    cliente?: XOR<Tb_clienteNullableScalarRelationFilter, tb_clienteWhereInput> | null
    tecnico?: XOR<Tb_tecnicoNullableScalarRelationFilter, tb_tecnicoWhereInput> | null
    notificaciones?: Tb_notificacionListRelationFilter
    estados_aprobados?: Tb_estado_reparacionListRelationFilter
  }, "ID_Usuario" | "Usuario_Name">

  export type tb_usuarioOrderByWithAggregationInput = {
    ID_Usuario?: SortOrder
    Usuario_Name?: SortOrderInput | SortOrder
    Usuario_Password?: SortOrderInput | SortOrder
    Usuario_nivel?: SortOrderInput | SortOrder
    Usuario_activo?: SortOrderInput | SortOrder
    ID_Cliente?: SortOrderInput | SortOrder
    ID_Tecnico?: SortOrderInput | SortOrder
    _count?: tb_usuarioCountOrderByAggregateInput
    _avg?: tb_usuarioAvgOrderByAggregateInput
    _max?: tb_usuarioMaxOrderByAggregateInput
    _min?: tb_usuarioMinOrderByAggregateInput
    _sum?: tb_usuarioSumOrderByAggregateInput
  }

  export type tb_usuarioScalarWhereWithAggregatesInput = {
    AND?: tb_usuarioScalarWhereWithAggregatesInput | tb_usuarioScalarWhereWithAggregatesInput[]
    OR?: tb_usuarioScalarWhereWithAggregatesInput[]
    NOT?: tb_usuarioScalarWhereWithAggregatesInput | tb_usuarioScalarWhereWithAggregatesInput[]
    ID_Usuario?: IntWithAggregatesFilter<"tb_usuario"> | number
    Usuario_Name?: StringNullableWithAggregatesFilter<"tb_usuario"> | string | null
    Usuario_Password?: StringNullableWithAggregatesFilter<"tb_usuario"> | string | null
    Usuario_nivel?: Enumtb_usuario_Usuario_nivelNullableWithAggregatesFilter<"tb_usuario"> | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: BoolNullableWithAggregatesFilter<"tb_usuario"> | boolean | null
    ID_Cliente?: IntNullableWithAggregatesFilter<"tb_usuario"> | number | null
    ID_Tecnico?: IntNullableWithAggregatesFilter<"tb_usuario"> | number | null
  }

  export type tb_clienteCreateInput = {
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Direccion?: string | null
    equipos?: tb_equipoCreateNestedManyWithoutClienteInput
    reparaciones?: tb_reparacionCreateNestedManyWithoutClienteInput
    usuarios?: tb_usuarioCreateNestedManyWithoutClienteInput
    tb_notificacion?: tb_notificacionCreateNestedManyWithoutClienteInput
  }

  export type tb_clienteUncheckedCreateInput = {
    ID_Cliente?: number
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Direccion?: string | null
    equipos?: tb_equipoUncheckedCreateNestedManyWithoutClienteInput
    reparaciones?: tb_reparacionUncheckedCreateNestedManyWithoutClienteInput
    usuarios?: tb_usuarioUncheckedCreateNestedManyWithoutClienteInput
    tb_notificacion?: tb_notificacionUncheckedCreateNestedManyWithoutClienteInput
  }

  export type tb_clienteUpdateInput = {
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Direccion?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: tb_equipoUpdateManyWithoutClienteNestedInput
    reparaciones?: tb_reparacionUpdateManyWithoutClienteNestedInput
    usuarios?: tb_usuarioUpdateManyWithoutClienteNestedInput
    tb_notificacion?: tb_notificacionUpdateManyWithoutClienteNestedInput
  }

  export type tb_clienteUncheckedUpdateInput = {
    ID_Cliente?: IntFieldUpdateOperationsInput | number
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Direccion?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: tb_equipoUncheckedUpdateManyWithoutClienteNestedInput
    reparaciones?: tb_reparacionUncheckedUpdateManyWithoutClienteNestedInput
    usuarios?: tb_usuarioUncheckedUpdateManyWithoutClienteNestedInput
    tb_notificacion?: tb_notificacionUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type tb_clienteCreateManyInput = {
    ID_Cliente?: number
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Direccion?: string | null
  }

  export type tb_clienteUpdateManyMutationInput = {
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_clienteUncheckedUpdateManyInput = {
    ID_Cliente?: IntFieldUpdateOperationsInput | number
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Direccion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_detalle_reparacion_repuestoCreateInput = {
    Cantidad?: number | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
    reparacion?: tb_reparacionCreateNestedOneWithoutDetallesInput
    repuesto?: tb_repuestoCreateNestedOneWithoutDetallesInput
  }

  export type tb_detalle_reparacion_repuestoUncheckedCreateInput = {
    ID_Detalle?: number
    ID_Reparacion?: number | null
    ID_Repuesto?: number | null
    Cantidad?: number | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type tb_detalle_reparacion_repuestoUpdateInput = {
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reparacion?: tb_reparacionUpdateOneWithoutDetallesNestedInput
    repuesto?: tb_repuestoUpdateOneWithoutDetallesNestedInput
  }

  export type tb_detalle_reparacion_repuestoUncheckedUpdateInput = {
    ID_Detalle?: IntFieldUpdateOperationsInput | number
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Repuesto?: NullableIntFieldUpdateOperationsInput | number | null
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_detalle_reparacion_repuestoCreateManyInput = {
    ID_Detalle?: number
    ID_Reparacion?: number | null
    ID_Repuesto?: number | null
    Cantidad?: number | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type tb_detalle_reparacion_repuestoUpdateManyMutationInput = {
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_detalle_reparacion_repuestoUncheckedUpdateManyInput = {
    ID_Detalle?: IntFieldUpdateOperationsInput | number
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Repuesto?: NullableIntFieldUpdateOperationsInput | number | null
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_equipoCreateInput = {
    Nombre?: string | null
    Marca?: string | null
    Modelo?: string | null
    Descripcion_problema?: string | null
    Estado?: string | null
    cliente?: tb_clienteCreateNestedOneWithoutEquiposInput
    reparaciones?: tb_reparacionCreateNestedManyWithoutEquipoInput
  }

  export type tb_equipoUncheckedCreateInput = {
    ID_Equipo?: number
    ID_Cliente?: number | null
    Nombre?: string | null
    Marca?: string | null
    Modelo?: string | null
    Descripcion_problema?: string | null
    Estado?: string | null
    reparaciones?: tb_reparacionUncheckedCreateNestedManyWithoutEquipoInput
  }

  export type tb_equipoUpdateInput = {
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Marca?: NullableStringFieldUpdateOperationsInput | string | null
    Modelo?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion_problema?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: tb_clienteUpdateOneWithoutEquiposNestedInput
    reparaciones?: tb_reparacionUpdateManyWithoutEquipoNestedInput
  }

  export type tb_equipoUncheckedUpdateInput = {
    ID_Equipo?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Marca?: NullableStringFieldUpdateOperationsInput | string | null
    Modelo?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion_problema?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    reparaciones?: tb_reparacionUncheckedUpdateManyWithoutEquipoNestedInput
  }

  export type tb_equipoCreateManyInput = {
    ID_Equipo?: number
    ID_Cliente?: number | null
    Nombre?: string | null
    Marca?: string | null
    Modelo?: string | null
    Descripcion_problema?: string | null
    Estado?: string | null
  }

  export type tb_equipoUpdateManyMutationInput = {
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Marca?: NullableStringFieldUpdateOperationsInput | string | null
    Modelo?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion_problema?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_equipoUncheckedUpdateManyInput = {
    ID_Equipo?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Marca?: NullableStringFieldUpdateOperationsInput | string | null
    Modelo?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion_problema?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_estado_reparacionCreateInput = {
    FechaHora?: Date | string | null
    Estado?: string | null
    Descripcion?: string | null
    Requiere_Aprobacion?: boolean | null
    Aprobado?: boolean | null
    Fecha_Aprobacion?: Date | string | null
    reparacion?: tb_reparacionCreateNestedOneWithoutEstadosInput
    usuario_aprobador?: tb_usuarioCreateNestedOneWithoutEstados_aprobadosInput
  }

  export type tb_estado_reparacionUncheckedCreateInput = {
    ID_Estado?: number
    ID_Reparacion?: number | null
    FechaHora?: Date | string | null
    Estado?: string | null
    Descripcion?: string | null
    Requiere_Aprobacion?: boolean | null
    Aprobado?: boolean | null
    ID_Usuario_Aprobado?: number | null
    Fecha_Aprobacion?: Date | string | null
  }

  export type tb_estado_reparacionUpdateInput = {
    FechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Requiere_Aprobacion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Fecha_Aprobacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reparacion?: tb_reparacionUpdateOneWithoutEstadosNestedInput
    usuario_aprobador?: tb_usuarioUpdateOneWithoutEstados_aprobadosNestedInput
  }

  export type tb_estado_reparacionUncheckedUpdateInput = {
    ID_Estado?: IntFieldUpdateOperationsInput | number
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    FechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Requiere_Aprobacion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Usuario_Aprobado?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Aprobacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_estado_reparacionCreateManyInput = {
    ID_Estado?: number
    ID_Reparacion?: number | null
    FechaHora?: Date | string | null
    Estado?: string | null
    Descripcion?: string | null
    Requiere_Aprobacion?: boolean | null
    Aprobado?: boolean | null
    ID_Usuario_Aprobado?: number | null
    Fecha_Aprobacion?: Date | string | null
  }

  export type tb_estado_reparacionUpdateManyMutationInput = {
    FechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Requiere_Aprobacion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Fecha_Aprobacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_estado_reparacionUncheckedUpdateManyInput = {
    ID_Estado?: IntFieldUpdateOperationsInput | number
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    FechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Requiere_Aprobacion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Usuario_Aprobado?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Aprobacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_facturaCreateInput = {
    Fecha_Emision?: Date | string | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: string | null
    Estado?: string | null
    reparacion?: tb_reparacionCreateNestedOneWithoutFacturaInput
  }

  export type tb_facturaUncheckedCreateInput = {
    ID_Factura?: number
    ID_Reparacion?: number | null
    Fecha_Emision?: Date | string | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: string | null
    Estado?: string | null
  }

  export type tb_facturaUpdateInput = {
    Fecha_Emision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    reparacion?: tb_reparacionUpdateOneWithoutFacturaNestedInput
  }

  export type tb_facturaUncheckedUpdateInput = {
    ID_Factura?: IntFieldUpdateOperationsInput | number
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Emision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_facturaCreateManyInput = {
    ID_Factura?: number
    ID_Reparacion?: number | null
    Fecha_Emision?: Date | string | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: string | null
    Estado?: string | null
  }

  export type tb_facturaUpdateManyMutationInput = {
    Fecha_Emision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_facturaUncheckedUpdateManyInput = {
    ID_Factura?: IntFieldUpdateOperationsInput | number
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Emision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_notificacionCreateInput = {
    Mensaje?: string | null
    Fecha_Envio?: Date | string | null
    Enviado?: boolean | null
    Tipo?: string | null
    Tipo_Cambio?: string | null
    Aprobado?: boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
    cliente?: tb_clienteCreateNestedOneWithoutTb_notificacionInput
    reparacion?: tb_reparacionCreateNestedOneWithoutTb_notificacionInput
    usuario?: tb_usuarioCreateNestedOneWithoutNotificacionesInput
  }

  export type tb_notificacionUncheckedCreateInput = {
    ID_Notificacion?: number
    ID_Cliente?: number | null
    ID_Reparacion?: number | null
    ID_Usuario?: number | null
    Mensaje?: string | null
    Fecha_Envio?: Date | string | null
    Enviado?: boolean | null
    Tipo?: string | null
    Tipo_Cambio?: string | null
    Aprobado?: boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_notificacionUpdateInput = {
    Mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    Fecha_Envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enviado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tipo?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Cambio?: NullableStringFieldUpdateOperationsInput | string | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
    cliente?: tb_clienteUpdateOneWithoutTb_notificacionNestedInput
    reparacion?: tb_reparacionUpdateOneWithoutTb_notificacionNestedInput
    usuario?: tb_usuarioUpdateOneWithoutNotificacionesNestedInput
  }

  export type tb_notificacionUncheckedUpdateInput = {
    ID_Notificacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Usuario?: NullableIntFieldUpdateOperationsInput | number | null
    Mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    Fecha_Envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enviado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tipo?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Cambio?: NullableStringFieldUpdateOperationsInput | string | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_notificacionCreateManyInput = {
    ID_Notificacion?: number
    ID_Cliente?: number | null
    ID_Reparacion?: number | null
    ID_Usuario?: number | null
    Mensaje?: string | null
    Fecha_Envio?: Date | string | null
    Enviado?: boolean | null
    Tipo?: string | null
    Tipo_Cambio?: string | null
    Aprobado?: boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_notificacionUpdateManyMutationInput = {
    Mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    Fecha_Envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enviado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tipo?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Cambio?: NullableStringFieldUpdateOperationsInput | string | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_notificacionUncheckedUpdateManyInput = {
    ID_Notificacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Usuario?: NullableIntFieldUpdateOperationsInput | number | null
    Mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    Fecha_Envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enviado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tipo?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Cambio?: NullableStringFieldUpdateOperationsInput | string | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_reparacionCreateInput = {
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteCreateNestedOneWithoutReparacionesInput
    tecnico?: tb_tecnicoCreateNestedOneWithoutReparacionesInput
    equipo?: tb_equipoCreateNestedOneWithoutReparacionesInput
    estados?: tb_estado_reparacionCreateNestedManyWithoutReparacionInput
    detalles?: tb_detalle_reparacion_repuestoCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaCreateNestedOneWithoutReparacionInput
    tb_notificacion?: tb_notificacionCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionUncheckedCreateInput = {
    ID_Reparacion?: number
    ID_Cliente?: number | null
    ID_Tecnico?: number | null
    ID_Equipo?: number | null
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedCreateNestedManyWithoutReparacionInput
    detalles?: tb_detalle_reparacion_repuestoUncheckedCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaUncheckedCreateNestedOneWithoutReparacionInput
    tb_notificacion?: tb_notificacionUncheckedCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionUpdateInput = {
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteUpdateOneWithoutReparacionesNestedInput
    tecnico?: tb_tecnicoUpdateOneWithoutReparacionesNestedInput
    equipo?: tb_equipoUpdateOneWithoutReparacionesNestedInput
    estados?: tb_estado_reparacionUpdateManyWithoutReparacionNestedInput
    detalles?: tb_detalle_reparacion_repuestoUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUpdateOneWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUpdateManyWithoutReparacionNestedInput
  }

  export type tb_reparacionUncheckedUpdateInput = {
    ID_Reparacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Equipo?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedUpdateManyWithoutReparacionNestedInput
    detalles?: tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUncheckedUpdateOneWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUncheckedUpdateManyWithoutReparacionNestedInput
  }

  export type tb_reparacionCreateManyInput = {
    ID_Reparacion?: number
    ID_Cliente?: number | null
    ID_Tecnico?: number | null
    ID_Equipo?: number | null
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
  }

  export type tb_reparacionUpdateManyMutationInput = {
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_reparacionUncheckedUpdateManyInput = {
    ID_Reparacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Equipo?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_repuestoCreateInput = {
    Nombre?: string | null
    Precio?: Decimal | DecimalJsLike | number | string | null
    detalles?: tb_detalle_reparacion_repuestoCreateNestedManyWithoutRepuestoInput
  }

  export type tb_repuestoUncheckedCreateInput = {
    ID_Repuesto?: number
    Nombre?: string | null
    Precio?: Decimal | DecimalJsLike | number | string | null
    detalles?: tb_detalle_reparacion_repuestoUncheckedCreateNestedManyWithoutRepuestoInput
  }

  export type tb_repuestoUpdateInput = {
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detalles?: tb_detalle_reparacion_repuestoUpdateManyWithoutRepuestoNestedInput
  }

  export type tb_repuestoUncheckedUpdateInput = {
    ID_Repuesto?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detalles?: tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutRepuestoNestedInput
  }

  export type tb_repuestoCreateManyInput = {
    ID_Repuesto?: number
    Nombre?: string | null
    Precio?: Decimal | DecimalJsLike | number | string | null
  }

  export type tb_repuestoUpdateManyMutationInput = {
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_repuestoUncheckedUpdateManyInput = {
    ID_Repuesto?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_tecnicoCreateInput = {
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Especialidad?: string | null
    reparaciones?: tb_reparacionCreateNestedManyWithoutTecnicoInput
    usuarios?: tb_usuarioCreateNestedManyWithoutTecnicoInput
  }

  export type tb_tecnicoUncheckedCreateInput = {
    ID_Tecnico?: number
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Especialidad?: string | null
    reparaciones?: tb_reparacionUncheckedCreateNestedManyWithoutTecnicoInput
    usuarios?: tb_usuarioUncheckedCreateNestedManyWithoutTecnicoInput
  }

  export type tb_tecnicoUpdateInput = {
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    reparaciones?: tb_reparacionUpdateManyWithoutTecnicoNestedInput
    usuarios?: tb_usuarioUpdateManyWithoutTecnicoNestedInput
  }

  export type tb_tecnicoUncheckedUpdateInput = {
    ID_Tecnico?: IntFieldUpdateOperationsInput | number
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    reparaciones?: tb_reparacionUncheckedUpdateManyWithoutTecnicoNestedInput
    usuarios?: tb_usuarioUncheckedUpdateManyWithoutTecnicoNestedInput
  }

  export type tb_tecnicoCreateManyInput = {
    ID_Tecnico?: number
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Especialidad?: string | null
  }

  export type tb_tecnicoUpdateManyMutationInput = {
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Especialidad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_tecnicoUncheckedUpdateManyInput = {
    ID_Tecnico?: IntFieldUpdateOperationsInput | number
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Especialidad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_usuarioCreateInput = {
    Usuario_Name?: string | null
    Usuario_Password?: string | null
    Usuario_nivel?: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: boolean | null
    cliente?: tb_clienteCreateNestedOneWithoutUsuariosInput
    tecnico?: tb_tecnicoCreateNestedOneWithoutUsuariosInput
    notificaciones?: tb_notificacionCreateNestedManyWithoutUsuarioInput
    estados_aprobados?: tb_estado_reparacionCreateNestedManyWithoutUsuario_aprobadorInput
  }

  export type tb_usuarioUncheckedCreateInput = {
    ID_Usuario?: number
    Usuario_Name?: string | null
    Usuario_Password?: string | null
    Usuario_nivel?: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: boolean | null
    ID_Cliente?: number | null
    ID_Tecnico?: number | null
    notificaciones?: tb_notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    estados_aprobados?: tb_estado_reparacionUncheckedCreateNestedManyWithoutUsuario_aprobadorInput
  }

  export type tb_usuarioUpdateInput = {
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cliente?: tb_clienteUpdateOneWithoutUsuariosNestedInput
    tecnico?: tb_tecnicoUpdateOneWithoutUsuariosNestedInput
    notificaciones?: tb_notificacionUpdateManyWithoutUsuarioNestedInput
    estados_aprobados?: tb_estado_reparacionUpdateManyWithoutUsuario_aprobadorNestedInput
  }

  export type tb_usuarioUncheckedUpdateInput = {
    ID_Usuario?: IntFieldUpdateOperationsInput | number
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    notificaciones?: tb_notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    estados_aprobados?: tb_estado_reparacionUncheckedUpdateManyWithoutUsuario_aprobadorNestedInput
  }

  export type tb_usuarioCreateManyInput = {
    ID_Usuario?: number
    Usuario_Name?: string | null
    Usuario_Password?: string | null
    Usuario_nivel?: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: boolean | null
    ID_Cliente?: number | null
    ID_Tecnico?: number | null
  }

  export type tb_usuarioUpdateManyMutationInput = {
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type tb_usuarioUncheckedUpdateManyInput = {
    ID_Usuario?: IntFieldUpdateOperationsInput | number
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Tb_equipoListRelationFilter = {
    every?: tb_equipoWhereInput
    some?: tb_equipoWhereInput
    none?: tb_equipoWhereInput
  }

  export type Tb_reparacionListRelationFilter = {
    every?: tb_reparacionWhereInput
    some?: tb_reparacionWhereInput
    none?: tb_reparacionWhereInput
  }

  export type Tb_usuarioListRelationFilter = {
    every?: tb_usuarioWhereInput
    some?: tb_usuarioWhereInput
    none?: tb_usuarioWhereInput
  }

  export type Tb_notificacionListRelationFilter = {
    every?: tb_notificacionWhereInput
    some?: tb_notificacionWhereInput
    none?: tb_notificacionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tb_equipoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_reparacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_usuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_notificacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_clienteOrderByRelevanceInput = {
    fields: tb_clienteOrderByRelevanceFieldEnum | tb_clienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_clienteCountOrderByAggregateInput = {
    ID_Cliente?: SortOrder
    Cedula?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Telefono?: SortOrder
    Email?: SortOrder
    Direccion?: SortOrder
  }

  export type tb_clienteAvgOrderByAggregateInput = {
    ID_Cliente?: SortOrder
  }

  export type tb_clienteMaxOrderByAggregateInput = {
    ID_Cliente?: SortOrder
    Cedula?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Telefono?: SortOrder
    Email?: SortOrder
    Direccion?: SortOrder
  }

  export type tb_clienteMinOrderByAggregateInput = {
    ID_Cliente?: SortOrder
    Cedula?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Telefono?: SortOrder
    Email?: SortOrder
    Direccion?: SortOrder
  }

  export type tb_clienteSumOrderByAggregateInput = {
    ID_Cliente?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Tb_reparacionNullableScalarRelationFilter = {
    is?: tb_reparacionWhereInput | null
    isNot?: tb_reparacionWhereInput | null
  }

  export type Tb_repuestoNullableScalarRelationFilter = {
    is?: tb_repuestoWhereInput | null
    isNot?: tb_repuestoWhereInput | null
  }

  export type tb_detalle_reparacion_repuestoCountOrderByAggregateInput = {
    ID_Detalle?: SortOrder
    ID_Reparacion?: SortOrder
    ID_Repuesto?: SortOrder
    Cantidad?: SortOrder
    Subtotal?: SortOrder
  }

  export type tb_detalle_reparacion_repuestoAvgOrderByAggregateInput = {
    ID_Detalle?: SortOrder
    ID_Reparacion?: SortOrder
    ID_Repuesto?: SortOrder
    Cantidad?: SortOrder
    Subtotal?: SortOrder
  }

  export type tb_detalle_reparacion_repuestoMaxOrderByAggregateInput = {
    ID_Detalle?: SortOrder
    ID_Reparacion?: SortOrder
    ID_Repuesto?: SortOrder
    Cantidad?: SortOrder
    Subtotal?: SortOrder
  }

  export type tb_detalle_reparacion_repuestoMinOrderByAggregateInput = {
    ID_Detalle?: SortOrder
    ID_Reparacion?: SortOrder
    ID_Repuesto?: SortOrder
    Cantidad?: SortOrder
    Subtotal?: SortOrder
  }

  export type tb_detalle_reparacion_repuestoSumOrderByAggregateInput = {
    ID_Detalle?: SortOrder
    ID_Reparacion?: SortOrder
    ID_Repuesto?: SortOrder
    Cantidad?: SortOrder
    Subtotal?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Tb_clienteNullableScalarRelationFilter = {
    is?: tb_clienteWhereInput | null
    isNot?: tb_clienteWhereInput | null
  }

  export type tb_equipoOrderByRelevanceInput = {
    fields: tb_equipoOrderByRelevanceFieldEnum | tb_equipoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_equipoCountOrderByAggregateInput = {
    ID_Equipo?: SortOrder
    ID_Cliente?: SortOrder
    Nombre?: SortOrder
    Marca?: SortOrder
    Modelo?: SortOrder
    Descripcion_problema?: SortOrder
    Estado?: SortOrder
  }

  export type tb_equipoAvgOrderByAggregateInput = {
    ID_Equipo?: SortOrder
    ID_Cliente?: SortOrder
  }

  export type tb_equipoMaxOrderByAggregateInput = {
    ID_Equipo?: SortOrder
    ID_Cliente?: SortOrder
    Nombre?: SortOrder
    Marca?: SortOrder
    Modelo?: SortOrder
    Descripcion_problema?: SortOrder
    Estado?: SortOrder
  }

  export type tb_equipoMinOrderByAggregateInput = {
    ID_Equipo?: SortOrder
    ID_Cliente?: SortOrder
    Nombre?: SortOrder
    Marca?: SortOrder
    Modelo?: SortOrder
    Descripcion_problema?: SortOrder
    Estado?: SortOrder
  }

  export type tb_equipoSumOrderByAggregateInput = {
    ID_Equipo?: SortOrder
    ID_Cliente?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Tb_usuarioNullableScalarRelationFilter = {
    is?: tb_usuarioWhereInput | null
    isNot?: tb_usuarioWhereInput | null
  }

  export type tb_estado_reparacionOrderByRelevanceInput = {
    fields: tb_estado_reparacionOrderByRelevanceFieldEnum | tb_estado_reparacionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_estado_reparacionCountOrderByAggregateInput = {
    ID_Estado?: SortOrder
    ID_Reparacion?: SortOrder
    FechaHora?: SortOrder
    Estado?: SortOrder
    Descripcion?: SortOrder
    Requiere_Aprobacion?: SortOrder
    Aprobado?: SortOrder
    ID_Usuario_Aprobado?: SortOrder
    Fecha_Aprobacion?: SortOrder
  }

  export type tb_estado_reparacionAvgOrderByAggregateInput = {
    ID_Estado?: SortOrder
    ID_Reparacion?: SortOrder
    ID_Usuario_Aprobado?: SortOrder
  }

  export type tb_estado_reparacionMaxOrderByAggregateInput = {
    ID_Estado?: SortOrder
    ID_Reparacion?: SortOrder
    FechaHora?: SortOrder
    Estado?: SortOrder
    Descripcion?: SortOrder
    Requiere_Aprobacion?: SortOrder
    Aprobado?: SortOrder
    ID_Usuario_Aprobado?: SortOrder
    Fecha_Aprobacion?: SortOrder
  }

  export type tb_estado_reparacionMinOrderByAggregateInput = {
    ID_Estado?: SortOrder
    ID_Reparacion?: SortOrder
    FechaHora?: SortOrder
    Estado?: SortOrder
    Descripcion?: SortOrder
    Requiere_Aprobacion?: SortOrder
    Aprobado?: SortOrder
    ID_Usuario_Aprobado?: SortOrder
    Fecha_Aprobacion?: SortOrder
  }

  export type tb_estado_reparacionSumOrderByAggregateInput = {
    ID_Estado?: SortOrder
    ID_Reparacion?: SortOrder
    ID_Usuario_Aprobado?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type tb_facturaOrderByRelevanceInput = {
    fields: tb_facturaOrderByRelevanceFieldEnum | tb_facturaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_facturaCountOrderByAggregateInput = {
    ID_Factura?: SortOrder
    ID_Reparacion?: SortOrder
    Fecha_Emision?: SortOrder
    Subtotal?: SortOrder
    IVA?: SortOrder
    Total?: SortOrder
    Metodo_Pago?: SortOrder
    Estado?: SortOrder
  }

  export type tb_facturaAvgOrderByAggregateInput = {
    ID_Factura?: SortOrder
    ID_Reparacion?: SortOrder
    Subtotal?: SortOrder
    IVA?: SortOrder
    Total?: SortOrder
  }

  export type tb_facturaMaxOrderByAggregateInput = {
    ID_Factura?: SortOrder
    ID_Reparacion?: SortOrder
    Fecha_Emision?: SortOrder
    Subtotal?: SortOrder
    IVA?: SortOrder
    Total?: SortOrder
    Metodo_Pago?: SortOrder
    Estado?: SortOrder
  }

  export type tb_facturaMinOrderByAggregateInput = {
    ID_Factura?: SortOrder
    ID_Reparacion?: SortOrder
    Fecha_Emision?: SortOrder
    Subtotal?: SortOrder
    IVA?: SortOrder
    Total?: SortOrder
    Metodo_Pago?: SortOrder
    Estado?: SortOrder
  }

  export type tb_facturaSumOrderByAggregateInput = {
    ID_Factura?: SortOrder
    ID_Reparacion?: SortOrder
    Subtotal?: SortOrder
    IVA?: SortOrder
    Total?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type tb_notificacionOrderByRelevanceInput = {
    fields: tb_notificacionOrderByRelevanceFieldEnum | tb_notificacionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_notificacionCountOrderByAggregateInput = {
    ID_Notificacion?: SortOrder
    ID_Cliente?: SortOrder
    ID_Reparacion?: SortOrder
    ID_Usuario?: SortOrder
    Mensaje?: SortOrder
    Fecha_Envio?: SortOrder
    Enviado?: SortOrder
    Tipo?: SortOrder
    Tipo_Cambio?: SortOrder
    Aprobado?: SortOrder
    Datos_Cambio?: SortOrder
  }

  export type tb_notificacionAvgOrderByAggregateInput = {
    ID_Notificacion?: SortOrder
    ID_Cliente?: SortOrder
    ID_Reparacion?: SortOrder
    ID_Usuario?: SortOrder
  }

  export type tb_notificacionMaxOrderByAggregateInput = {
    ID_Notificacion?: SortOrder
    ID_Cliente?: SortOrder
    ID_Reparacion?: SortOrder
    ID_Usuario?: SortOrder
    Mensaje?: SortOrder
    Fecha_Envio?: SortOrder
    Enviado?: SortOrder
    Tipo?: SortOrder
    Tipo_Cambio?: SortOrder
    Aprobado?: SortOrder
  }

  export type tb_notificacionMinOrderByAggregateInput = {
    ID_Notificacion?: SortOrder
    ID_Cliente?: SortOrder
    ID_Reparacion?: SortOrder
    ID_Usuario?: SortOrder
    Mensaje?: SortOrder
    Fecha_Envio?: SortOrder
    Enviado?: SortOrder
    Tipo?: SortOrder
    Tipo_Cambio?: SortOrder
    Aprobado?: SortOrder
  }

  export type tb_notificacionSumOrderByAggregateInput = {
    ID_Notificacion?: SortOrder
    ID_Cliente?: SortOrder
    ID_Reparacion?: SortOrder
    ID_Usuario?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type Tb_tecnicoNullableScalarRelationFilter = {
    is?: tb_tecnicoWhereInput | null
    isNot?: tb_tecnicoWhereInput | null
  }

  export type Tb_equipoNullableScalarRelationFilter = {
    is?: tb_equipoWhereInput | null
    isNot?: tb_equipoWhereInput | null
  }

  export type Tb_estado_reparacionListRelationFilter = {
    every?: tb_estado_reparacionWhereInput
    some?: tb_estado_reparacionWhereInput
    none?: tb_estado_reparacionWhereInput
  }

  export type Tb_detalle_reparacion_repuestoListRelationFilter = {
    every?: tb_detalle_reparacion_repuestoWhereInput
    some?: tb_detalle_reparacion_repuestoWhereInput
    none?: tb_detalle_reparacion_repuestoWhereInput
  }

  export type Tb_facturaNullableScalarRelationFilter = {
    is?: tb_facturaWhereInput | null
    isNot?: tb_facturaWhereInput | null
  }

  export type tb_estado_reparacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_detalle_reparacion_repuestoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tb_reparacionCountOrderByAggregateInput = {
    ID_Reparacion?: SortOrder
    ID_Cliente?: SortOrder
    ID_Tecnico?: SortOrder
    ID_Equipo?: SortOrder
    Fecha_Ingreso?: SortOrder
    Fecha_Entrega?: SortOrder
    CostoServicio?: SortOrder
    IVA?: SortOrder
    Total?: SortOrder
  }

  export type tb_reparacionAvgOrderByAggregateInput = {
    ID_Reparacion?: SortOrder
    ID_Cliente?: SortOrder
    ID_Tecnico?: SortOrder
    ID_Equipo?: SortOrder
    CostoServicio?: SortOrder
    IVA?: SortOrder
    Total?: SortOrder
  }

  export type tb_reparacionMaxOrderByAggregateInput = {
    ID_Reparacion?: SortOrder
    ID_Cliente?: SortOrder
    ID_Tecnico?: SortOrder
    ID_Equipo?: SortOrder
    Fecha_Ingreso?: SortOrder
    Fecha_Entrega?: SortOrder
    CostoServicio?: SortOrder
    IVA?: SortOrder
    Total?: SortOrder
  }

  export type tb_reparacionMinOrderByAggregateInput = {
    ID_Reparacion?: SortOrder
    ID_Cliente?: SortOrder
    ID_Tecnico?: SortOrder
    ID_Equipo?: SortOrder
    Fecha_Ingreso?: SortOrder
    Fecha_Entrega?: SortOrder
    CostoServicio?: SortOrder
    IVA?: SortOrder
    Total?: SortOrder
  }

  export type tb_reparacionSumOrderByAggregateInput = {
    ID_Reparacion?: SortOrder
    ID_Cliente?: SortOrder
    ID_Tecnico?: SortOrder
    ID_Equipo?: SortOrder
    CostoServicio?: SortOrder
    IVA?: SortOrder
    Total?: SortOrder
  }

  export type tb_repuestoOrderByRelevanceInput = {
    fields: tb_repuestoOrderByRelevanceFieldEnum | tb_repuestoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_repuestoCountOrderByAggregateInput = {
    ID_Repuesto?: SortOrder
    Nombre?: SortOrder
    Precio?: SortOrder
  }

  export type tb_repuestoAvgOrderByAggregateInput = {
    ID_Repuesto?: SortOrder
    Precio?: SortOrder
  }

  export type tb_repuestoMaxOrderByAggregateInput = {
    ID_Repuesto?: SortOrder
    Nombre?: SortOrder
    Precio?: SortOrder
  }

  export type tb_repuestoMinOrderByAggregateInput = {
    ID_Repuesto?: SortOrder
    Nombre?: SortOrder
    Precio?: SortOrder
  }

  export type tb_repuestoSumOrderByAggregateInput = {
    ID_Repuesto?: SortOrder
    Precio?: SortOrder
  }

  export type tb_tecnicoOrderByRelevanceInput = {
    fields: tb_tecnicoOrderByRelevanceFieldEnum | tb_tecnicoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_tecnicoCountOrderByAggregateInput = {
    ID_Tecnico?: SortOrder
    Cedula?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Telefono?: SortOrder
    Email?: SortOrder
    Especialidad?: SortOrder
  }

  export type tb_tecnicoAvgOrderByAggregateInput = {
    ID_Tecnico?: SortOrder
  }

  export type tb_tecnicoMaxOrderByAggregateInput = {
    ID_Tecnico?: SortOrder
    Cedula?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Telefono?: SortOrder
    Email?: SortOrder
    Especialidad?: SortOrder
  }

  export type tb_tecnicoMinOrderByAggregateInput = {
    ID_Tecnico?: SortOrder
    Cedula?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Telefono?: SortOrder
    Email?: SortOrder
    Especialidad?: SortOrder
  }

  export type tb_tecnicoSumOrderByAggregateInput = {
    ID_Tecnico?: SortOrder
  }

  export type Enumtb_usuario_Usuario_nivelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.tb_usuario_Usuario_nivel | Enumtb_usuario_Usuario_nivelFieldRefInput<$PrismaModel> | null
    in?: $Enums.tb_usuario_Usuario_nivel[] | null
    notIn?: $Enums.tb_usuario_Usuario_nivel[] | null
    not?: NestedEnumtb_usuario_Usuario_nivelNullableFilter<$PrismaModel> | $Enums.tb_usuario_Usuario_nivel | null
  }

  export type tb_usuarioOrderByRelevanceInput = {
    fields: tb_usuarioOrderByRelevanceFieldEnum | tb_usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tb_usuarioCountOrderByAggregateInput = {
    ID_Usuario?: SortOrder
    Usuario_Name?: SortOrder
    Usuario_Password?: SortOrder
    Usuario_nivel?: SortOrder
    Usuario_activo?: SortOrder
    ID_Cliente?: SortOrder
    ID_Tecnico?: SortOrder
  }

  export type tb_usuarioAvgOrderByAggregateInput = {
    ID_Usuario?: SortOrder
    ID_Cliente?: SortOrder
    ID_Tecnico?: SortOrder
  }

  export type tb_usuarioMaxOrderByAggregateInput = {
    ID_Usuario?: SortOrder
    Usuario_Name?: SortOrder
    Usuario_Password?: SortOrder
    Usuario_nivel?: SortOrder
    Usuario_activo?: SortOrder
    ID_Cliente?: SortOrder
    ID_Tecnico?: SortOrder
  }

  export type tb_usuarioMinOrderByAggregateInput = {
    ID_Usuario?: SortOrder
    Usuario_Name?: SortOrder
    Usuario_Password?: SortOrder
    Usuario_nivel?: SortOrder
    Usuario_activo?: SortOrder
    ID_Cliente?: SortOrder
    ID_Tecnico?: SortOrder
  }

  export type tb_usuarioSumOrderByAggregateInput = {
    ID_Usuario?: SortOrder
    ID_Cliente?: SortOrder
    ID_Tecnico?: SortOrder
  }

  export type Enumtb_usuario_Usuario_nivelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tb_usuario_Usuario_nivel | Enumtb_usuario_Usuario_nivelFieldRefInput<$PrismaModel> | null
    in?: $Enums.tb_usuario_Usuario_nivel[] | null
    notIn?: $Enums.tb_usuario_Usuario_nivel[] | null
    not?: NestedEnumtb_usuario_Usuario_nivelNullableWithAggregatesFilter<$PrismaModel> | $Enums.tb_usuario_Usuario_nivel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtb_usuario_Usuario_nivelNullableFilter<$PrismaModel>
    _max?: NestedEnumtb_usuario_Usuario_nivelNullableFilter<$PrismaModel>
  }

  export type tb_equipoCreateNestedManyWithoutClienteInput = {
    create?: XOR<tb_equipoCreateWithoutClienteInput, tb_equipoUncheckedCreateWithoutClienteInput> | tb_equipoCreateWithoutClienteInput[] | tb_equipoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_equipoCreateOrConnectWithoutClienteInput | tb_equipoCreateOrConnectWithoutClienteInput[]
    createMany?: tb_equipoCreateManyClienteInputEnvelope
    connect?: tb_equipoWhereUniqueInput | tb_equipoWhereUniqueInput[]
  }

  export type tb_reparacionCreateNestedManyWithoutClienteInput = {
    create?: XOR<tb_reparacionCreateWithoutClienteInput, tb_reparacionUncheckedCreateWithoutClienteInput> | tb_reparacionCreateWithoutClienteInput[] | tb_reparacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutClienteInput | tb_reparacionCreateOrConnectWithoutClienteInput[]
    createMany?: tb_reparacionCreateManyClienteInputEnvelope
    connect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
  }

  export type tb_usuarioCreateNestedManyWithoutClienteInput = {
    create?: XOR<tb_usuarioCreateWithoutClienteInput, tb_usuarioUncheckedCreateWithoutClienteInput> | tb_usuarioCreateWithoutClienteInput[] | tb_usuarioUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_usuarioCreateOrConnectWithoutClienteInput | tb_usuarioCreateOrConnectWithoutClienteInput[]
    createMany?: tb_usuarioCreateManyClienteInputEnvelope
    connect?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
  }

  export type tb_notificacionCreateNestedManyWithoutClienteInput = {
    create?: XOR<tb_notificacionCreateWithoutClienteInput, tb_notificacionUncheckedCreateWithoutClienteInput> | tb_notificacionCreateWithoutClienteInput[] | tb_notificacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_notificacionCreateOrConnectWithoutClienteInput | tb_notificacionCreateOrConnectWithoutClienteInput[]
    createMany?: tb_notificacionCreateManyClienteInputEnvelope
    connect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
  }

  export type tb_equipoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<tb_equipoCreateWithoutClienteInput, tb_equipoUncheckedCreateWithoutClienteInput> | tb_equipoCreateWithoutClienteInput[] | tb_equipoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_equipoCreateOrConnectWithoutClienteInput | tb_equipoCreateOrConnectWithoutClienteInput[]
    createMany?: tb_equipoCreateManyClienteInputEnvelope
    connect?: tb_equipoWhereUniqueInput | tb_equipoWhereUniqueInput[]
  }

  export type tb_reparacionUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<tb_reparacionCreateWithoutClienteInput, tb_reparacionUncheckedCreateWithoutClienteInput> | tb_reparacionCreateWithoutClienteInput[] | tb_reparacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutClienteInput | tb_reparacionCreateOrConnectWithoutClienteInput[]
    createMany?: tb_reparacionCreateManyClienteInputEnvelope
    connect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
  }

  export type tb_usuarioUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<tb_usuarioCreateWithoutClienteInput, tb_usuarioUncheckedCreateWithoutClienteInput> | tb_usuarioCreateWithoutClienteInput[] | tb_usuarioUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_usuarioCreateOrConnectWithoutClienteInput | tb_usuarioCreateOrConnectWithoutClienteInput[]
    createMany?: tb_usuarioCreateManyClienteInputEnvelope
    connect?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
  }

  export type tb_notificacionUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<tb_notificacionCreateWithoutClienteInput, tb_notificacionUncheckedCreateWithoutClienteInput> | tb_notificacionCreateWithoutClienteInput[] | tb_notificacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_notificacionCreateOrConnectWithoutClienteInput | tb_notificacionCreateOrConnectWithoutClienteInput[]
    createMany?: tb_notificacionCreateManyClienteInputEnvelope
    connect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type tb_equipoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<tb_equipoCreateWithoutClienteInput, tb_equipoUncheckedCreateWithoutClienteInput> | tb_equipoCreateWithoutClienteInput[] | tb_equipoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_equipoCreateOrConnectWithoutClienteInput | tb_equipoCreateOrConnectWithoutClienteInput[]
    upsert?: tb_equipoUpsertWithWhereUniqueWithoutClienteInput | tb_equipoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: tb_equipoCreateManyClienteInputEnvelope
    set?: tb_equipoWhereUniqueInput | tb_equipoWhereUniqueInput[]
    disconnect?: tb_equipoWhereUniqueInput | tb_equipoWhereUniqueInput[]
    delete?: tb_equipoWhereUniqueInput | tb_equipoWhereUniqueInput[]
    connect?: tb_equipoWhereUniqueInput | tb_equipoWhereUniqueInput[]
    update?: tb_equipoUpdateWithWhereUniqueWithoutClienteInput | tb_equipoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: tb_equipoUpdateManyWithWhereWithoutClienteInput | tb_equipoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: tb_equipoScalarWhereInput | tb_equipoScalarWhereInput[]
  }

  export type tb_reparacionUpdateManyWithoutClienteNestedInput = {
    create?: XOR<tb_reparacionCreateWithoutClienteInput, tb_reparacionUncheckedCreateWithoutClienteInput> | tb_reparacionCreateWithoutClienteInput[] | tb_reparacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutClienteInput | tb_reparacionCreateOrConnectWithoutClienteInput[]
    upsert?: tb_reparacionUpsertWithWhereUniqueWithoutClienteInput | tb_reparacionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: tb_reparacionCreateManyClienteInputEnvelope
    set?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    disconnect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    delete?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    connect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    update?: tb_reparacionUpdateWithWhereUniqueWithoutClienteInput | tb_reparacionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: tb_reparacionUpdateManyWithWhereWithoutClienteInput | tb_reparacionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: tb_reparacionScalarWhereInput | tb_reparacionScalarWhereInput[]
  }

  export type tb_usuarioUpdateManyWithoutClienteNestedInput = {
    create?: XOR<tb_usuarioCreateWithoutClienteInput, tb_usuarioUncheckedCreateWithoutClienteInput> | tb_usuarioCreateWithoutClienteInput[] | tb_usuarioUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_usuarioCreateOrConnectWithoutClienteInput | tb_usuarioCreateOrConnectWithoutClienteInput[]
    upsert?: tb_usuarioUpsertWithWhereUniqueWithoutClienteInput | tb_usuarioUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: tb_usuarioCreateManyClienteInputEnvelope
    set?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    disconnect?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    delete?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    connect?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    update?: tb_usuarioUpdateWithWhereUniqueWithoutClienteInput | tb_usuarioUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: tb_usuarioUpdateManyWithWhereWithoutClienteInput | tb_usuarioUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: tb_usuarioScalarWhereInput | tb_usuarioScalarWhereInput[]
  }

  export type tb_notificacionUpdateManyWithoutClienteNestedInput = {
    create?: XOR<tb_notificacionCreateWithoutClienteInput, tb_notificacionUncheckedCreateWithoutClienteInput> | tb_notificacionCreateWithoutClienteInput[] | tb_notificacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_notificacionCreateOrConnectWithoutClienteInput | tb_notificacionCreateOrConnectWithoutClienteInput[]
    upsert?: tb_notificacionUpsertWithWhereUniqueWithoutClienteInput | tb_notificacionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: tb_notificacionCreateManyClienteInputEnvelope
    set?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    disconnect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    delete?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    connect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    update?: tb_notificacionUpdateWithWhereUniqueWithoutClienteInput | tb_notificacionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: tb_notificacionUpdateManyWithWhereWithoutClienteInput | tb_notificacionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: tb_notificacionScalarWhereInput | tb_notificacionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type tb_equipoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<tb_equipoCreateWithoutClienteInput, tb_equipoUncheckedCreateWithoutClienteInput> | tb_equipoCreateWithoutClienteInput[] | tb_equipoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_equipoCreateOrConnectWithoutClienteInput | tb_equipoCreateOrConnectWithoutClienteInput[]
    upsert?: tb_equipoUpsertWithWhereUniqueWithoutClienteInput | tb_equipoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: tb_equipoCreateManyClienteInputEnvelope
    set?: tb_equipoWhereUniqueInput | tb_equipoWhereUniqueInput[]
    disconnect?: tb_equipoWhereUniqueInput | tb_equipoWhereUniqueInput[]
    delete?: tb_equipoWhereUniqueInput | tb_equipoWhereUniqueInput[]
    connect?: tb_equipoWhereUniqueInput | tb_equipoWhereUniqueInput[]
    update?: tb_equipoUpdateWithWhereUniqueWithoutClienteInput | tb_equipoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: tb_equipoUpdateManyWithWhereWithoutClienteInput | tb_equipoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: tb_equipoScalarWhereInput | tb_equipoScalarWhereInput[]
  }

  export type tb_reparacionUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<tb_reparacionCreateWithoutClienteInput, tb_reparacionUncheckedCreateWithoutClienteInput> | tb_reparacionCreateWithoutClienteInput[] | tb_reparacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutClienteInput | tb_reparacionCreateOrConnectWithoutClienteInput[]
    upsert?: tb_reparacionUpsertWithWhereUniqueWithoutClienteInput | tb_reparacionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: tb_reparacionCreateManyClienteInputEnvelope
    set?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    disconnect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    delete?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    connect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    update?: tb_reparacionUpdateWithWhereUniqueWithoutClienteInput | tb_reparacionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: tb_reparacionUpdateManyWithWhereWithoutClienteInput | tb_reparacionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: tb_reparacionScalarWhereInput | tb_reparacionScalarWhereInput[]
  }

  export type tb_usuarioUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<tb_usuarioCreateWithoutClienteInput, tb_usuarioUncheckedCreateWithoutClienteInput> | tb_usuarioCreateWithoutClienteInput[] | tb_usuarioUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_usuarioCreateOrConnectWithoutClienteInput | tb_usuarioCreateOrConnectWithoutClienteInput[]
    upsert?: tb_usuarioUpsertWithWhereUniqueWithoutClienteInput | tb_usuarioUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: tb_usuarioCreateManyClienteInputEnvelope
    set?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    disconnect?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    delete?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    connect?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    update?: tb_usuarioUpdateWithWhereUniqueWithoutClienteInput | tb_usuarioUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: tb_usuarioUpdateManyWithWhereWithoutClienteInput | tb_usuarioUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: tb_usuarioScalarWhereInput | tb_usuarioScalarWhereInput[]
  }

  export type tb_notificacionUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<tb_notificacionCreateWithoutClienteInput, tb_notificacionUncheckedCreateWithoutClienteInput> | tb_notificacionCreateWithoutClienteInput[] | tb_notificacionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: tb_notificacionCreateOrConnectWithoutClienteInput | tb_notificacionCreateOrConnectWithoutClienteInput[]
    upsert?: tb_notificacionUpsertWithWhereUniqueWithoutClienteInput | tb_notificacionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: tb_notificacionCreateManyClienteInputEnvelope
    set?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    disconnect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    delete?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    connect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    update?: tb_notificacionUpdateWithWhereUniqueWithoutClienteInput | tb_notificacionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: tb_notificacionUpdateManyWithWhereWithoutClienteInput | tb_notificacionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: tb_notificacionScalarWhereInput | tb_notificacionScalarWhereInput[]
  }

  export type tb_reparacionCreateNestedOneWithoutDetallesInput = {
    create?: XOR<tb_reparacionCreateWithoutDetallesInput, tb_reparacionUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutDetallesInput
    connect?: tb_reparacionWhereUniqueInput
  }

  export type tb_repuestoCreateNestedOneWithoutDetallesInput = {
    create?: XOR<tb_repuestoCreateWithoutDetallesInput, tb_repuestoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: tb_repuestoCreateOrConnectWithoutDetallesInput
    connect?: tb_repuestoWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type tb_reparacionUpdateOneWithoutDetallesNestedInput = {
    create?: XOR<tb_reparacionCreateWithoutDetallesInput, tb_reparacionUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutDetallesInput
    upsert?: tb_reparacionUpsertWithoutDetallesInput
    disconnect?: tb_reparacionWhereInput | boolean
    delete?: tb_reparacionWhereInput | boolean
    connect?: tb_reparacionWhereUniqueInput
    update?: XOR<XOR<tb_reparacionUpdateToOneWithWhereWithoutDetallesInput, tb_reparacionUpdateWithoutDetallesInput>, tb_reparacionUncheckedUpdateWithoutDetallesInput>
  }

  export type tb_repuestoUpdateOneWithoutDetallesNestedInput = {
    create?: XOR<tb_repuestoCreateWithoutDetallesInput, tb_repuestoUncheckedCreateWithoutDetallesInput>
    connectOrCreate?: tb_repuestoCreateOrConnectWithoutDetallesInput
    upsert?: tb_repuestoUpsertWithoutDetallesInput
    disconnect?: tb_repuestoWhereInput | boolean
    delete?: tb_repuestoWhereInput | boolean
    connect?: tb_repuestoWhereUniqueInput
    update?: XOR<XOR<tb_repuestoUpdateToOneWithWhereWithoutDetallesInput, tb_repuestoUpdateWithoutDetallesInput>, tb_repuestoUncheckedUpdateWithoutDetallesInput>
  }

  export type tb_clienteCreateNestedOneWithoutEquiposInput = {
    create?: XOR<tb_clienteCreateWithoutEquiposInput, tb_clienteUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: tb_clienteCreateOrConnectWithoutEquiposInput
    connect?: tb_clienteWhereUniqueInput
  }

  export type tb_reparacionCreateNestedManyWithoutEquipoInput = {
    create?: XOR<tb_reparacionCreateWithoutEquipoInput, tb_reparacionUncheckedCreateWithoutEquipoInput> | tb_reparacionCreateWithoutEquipoInput[] | tb_reparacionUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutEquipoInput | tb_reparacionCreateOrConnectWithoutEquipoInput[]
    createMany?: tb_reparacionCreateManyEquipoInputEnvelope
    connect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
  }

  export type tb_reparacionUncheckedCreateNestedManyWithoutEquipoInput = {
    create?: XOR<tb_reparacionCreateWithoutEquipoInput, tb_reparacionUncheckedCreateWithoutEquipoInput> | tb_reparacionCreateWithoutEquipoInput[] | tb_reparacionUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutEquipoInput | tb_reparacionCreateOrConnectWithoutEquipoInput[]
    createMany?: tb_reparacionCreateManyEquipoInputEnvelope
    connect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
  }

  export type tb_clienteUpdateOneWithoutEquiposNestedInput = {
    create?: XOR<tb_clienteCreateWithoutEquiposInput, tb_clienteUncheckedCreateWithoutEquiposInput>
    connectOrCreate?: tb_clienteCreateOrConnectWithoutEquiposInput
    upsert?: tb_clienteUpsertWithoutEquiposInput
    disconnect?: tb_clienteWhereInput | boolean
    delete?: tb_clienteWhereInput | boolean
    connect?: tb_clienteWhereUniqueInput
    update?: XOR<XOR<tb_clienteUpdateToOneWithWhereWithoutEquiposInput, tb_clienteUpdateWithoutEquiposInput>, tb_clienteUncheckedUpdateWithoutEquiposInput>
  }

  export type tb_reparacionUpdateManyWithoutEquipoNestedInput = {
    create?: XOR<tb_reparacionCreateWithoutEquipoInput, tb_reparacionUncheckedCreateWithoutEquipoInput> | tb_reparacionCreateWithoutEquipoInput[] | tb_reparacionUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutEquipoInput | tb_reparacionCreateOrConnectWithoutEquipoInput[]
    upsert?: tb_reparacionUpsertWithWhereUniqueWithoutEquipoInput | tb_reparacionUpsertWithWhereUniqueWithoutEquipoInput[]
    createMany?: tb_reparacionCreateManyEquipoInputEnvelope
    set?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    disconnect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    delete?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    connect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    update?: tb_reparacionUpdateWithWhereUniqueWithoutEquipoInput | tb_reparacionUpdateWithWhereUniqueWithoutEquipoInput[]
    updateMany?: tb_reparacionUpdateManyWithWhereWithoutEquipoInput | tb_reparacionUpdateManyWithWhereWithoutEquipoInput[]
    deleteMany?: tb_reparacionScalarWhereInput | tb_reparacionScalarWhereInput[]
  }

  export type tb_reparacionUncheckedUpdateManyWithoutEquipoNestedInput = {
    create?: XOR<tb_reparacionCreateWithoutEquipoInput, tb_reparacionUncheckedCreateWithoutEquipoInput> | tb_reparacionCreateWithoutEquipoInput[] | tb_reparacionUncheckedCreateWithoutEquipoInput[]
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutEquipoInput | tb_reparacionCreateOrConnectWithoutEquipoInput[]
    upsert?: tb_reparacionUpsertWithWhereUniqueWithoutEquipoInput | tb_reparacionUpsertWithWhereUniqueWithoutEquipoInput[]
    createMany?: tb_reparacionCreateManyEquipoInputEnvelope
    set?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    disconnect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    delete?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    connect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    update?: tb_reparacionUpdateWithWhereUniqueWithoutEquipoInput | tb_reparacionUpdateWithWhereUniqueWithoutEquipoInput[]
    updateMany?: tb_reparacionUpdateManyWithWhereWithoutEquipoInput | tb_reparacionUpdateManyWithWhereWithoutEquipoInput[]
    deleteMany?: tb_reparacionScalarWhereInput | tb_reparacionScalarWhereInput[]
  }

  export type tb_reparacionCreateNestedOneWithoutEstadosInput = {
    create?: XOR<tb_reparacionCreateWithoutEstadosInput, tb_reparacionUncheckedCreateWithoutEstadosInput>
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutEstadosInput
    connect?: tb_reparacionWhereUniqueInput
  }

  export type tb_usuarioCreateNestedOneWithoutEstados_aprobadosInput = {
    create?: XOR<tb_usuarioCreateWithoutEstados_aprobadosInput, tb_usuarioUncheckedCreateWithoutEstados_aprobadosInput>
    connectOrCreate?: tb_usuarioCreateOrConnectWithoutEstados_aprobadosInput
    connect?: tb_usuarioWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type tb_reparacionUpdateOneWithoutEstadosNestedInput = {
    create?: XOR<tb_reparacionCreateWithoutEstadosInput, tb_reparacionUncheckedCreateWithoutEstadosInput>
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutEstadosInput
    upsert?: tb_reparacionUpsertWithoutEstadosInput
    disconnect?: tb_reparacionWhereInput | boolean
    delete?: tb_reparacionWhereInput | boolean
    connect?: tb_reparacionWhereUniqueInput
    update?: XOR<XOR<tb_reparacionUpdateToOneWithWhereWithoutEstadosInput, tb_reparacionUpdateWithoutEstadosInput>, tb_reparacionUncheckedUpdateWithoutEstadosInput>
  }

  export type tb_usuarioUpdateOneWithoutEstados_aprobadosNestedInput = {
    create?: XOR<tb_usuarioCreateWithoutEstados_aprobadosInput, tb_usuarioUncheckedCreateWithoutEstados_aprobadosInput>
    connectOrCreate?: tb_usuarioCreateOrConnectWithoutEstados_aprobadosInput
    upsert?: tb_usuarioUpsertWithoutEstados_aprobadosInput
    disconnect?: tb_usuarioWhereInput | boolean
    delete?: tb_usuarioWhereInput | boolean
    connect?: tb_usuarioWhereUniqueInput
    update?: XOR<XOR<tb_usuarioUpdateToOneWithWhereWithoutEstados_aprobadosInput, tb_usuarioUpdateWithoutEstados_aprobadosInput>, tb_usuarioUncheckedUpdateWithoutEstados_aprobadosInput>
  }

  export type tb_reparacionCreateNestedOneWithoutFacturaInput = {
    create?: XOR<tb_reparacionCreateWithoutFacturaInput, tb_reparacionUncheckedCreateWithoutFacturaInput>
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutFacturaInput
    connect?: tb_reparacionWhereUniqueInput
  }

  export type tb_reparacionUpdateOneWithoutFacturaNestedInput = {
    create?: XOR<tb_reparacionCreateWithoutFacturaInput, tb_reparacionUncheckedCreateWithoutFacturaInput>
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutFacturaInput
    upsert?: tb_reparacionUpsertWithoutFacturaInput
    disconnect?: tb_reparacionWhereInput | boolean
    delete?: tb_reparacionWhereInput | boolean
    connect?: tb_reparacionWhereUniqueInput
    update?: XOR<XOR<tb_reparacionUpdateToOneWithWhereWithoutFacturaInput, tb_reparacionUpdateWithoutFacturaInput>, tb_reparacionUncheckedUpdateWithoutFacturaInput>
  }

  export type tb_clienteCreateNestedOneWithoutTb_notificacionInput = {
    create?: XOR<tb_clienteCreateWithoutTb_notificacionInput, tb_clienteUncheckedCreateWithoutTb_notificacionInput>
    connectOrCreate?: tb_clienteCreateOrConnectWithoutTb_notificacionInput
    connect?: tb_clienteWhereUniqueInput
  }

  export type tb_reparacionCreateNestedOneWithoutTb_notificacionInput = {
    create?: XOR<tb_reparacionCreateWithoutTb_notificacionInput, tb_reparacionUncheckedCreateWithoutTb_notificacionInput>
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutTb_notificacionInput
    connect?: tb_reparacionWhereUniqueInput
  }

  export type tb_usuarioCreateNestedOneWithoutNotificacionesInput = {
    create?: XOR<tb_usuarioCreateWithoutNotificacionesInput, tb_usuarioUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: tb_usuarioCreateOrConnectWithoutNotificacionesInput
    connect?: tb_usuarioWhereUniqueInput
  }

  export type tb_clienteUpdateOneWithoutTb_notificacionNestedInput = {
    create?: XOR<tb_clienteCreateWithoutTb_notificacionInput, tb_clienteUncheckedCreateWithoutTb_notificacionInput>
    connectOrCreate?: tb_clienteCreateOrConnectWithoutTb_notificacionInput
    upsert?: tb_clienteUpsertWithoutTb_notificacionInput
    disconnect?: tb_clienteWhereInput | boolean
    delete?: tb_clienteWhereInput | boolean
    connect?: tb_clienteWhereUniqueInput
    update?: XOR<XOR<tb_clienteUpdateToOneWithWhereWithoutTb_notificacionInput, tb_clienteUpdateWithoutTb_notificacionInput>, tb_clienteUncheckedUpdateWithoutTb_notificacionInput>
  }

  export type tb_reparacionUpdateOneWithoutTb_notificacionNestedInput = {
    create?: XOR<tb_reparacionCreateWithoutTb_notificacionInput, tb_reparacionUncheckedCreateWithoutTb_notificacionInput>
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutTb_notificacionInput
    upsert?: tb_reparacionUpsertWithoutTb_notificacionInput
    disconnect?: tb_reparacionWhereInput | boolean
    delete?: tb_reparacionWhereInput | boolean
    connect?: tb_reparacionWhereUniqueInput
    update?: XOR<XOR<tb_reparacionUpdateToOneWithWhereWithoutTb_notificacionInput, tb_reparacionUpdateWithoutTb_notificacionInput>, tb_reparacionUncheckedUpdateWithoutTb_notificacionInput>
  }

  export type tb_usuarioUpdateOneWithoutNotificacionesNestedInput = {
    create?: XOR<tb_usuarioCreateWithoutNotificacionesInput, tb_usuarioUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: tb_usuarioCreateOrConnectWithoutNotificacionesInput
    upsert?: tb_usuarioUpsertWithoutNotificacionesInput
    disconnect?: tb_usuarioWhereInput | boolean
    delete?: tb_usuarioWhereInput | boolean
    connect?: tb_usuarioWhereUniqueInput
    update?: XOR<XOR<tb_usuarioUpdateToOneWithWhereWithoutNotificacionesInput, tb_usuarioUpdateWithoutNotificacionesInput>, tb_usuarioUncheckedUpdateWithoutNotificacionesInput>
  }

  export type tb_clienteCreateNestedOneWithoutReparacionesInput = {
    create?: XOR<tb_clienteCreateWithoutReparacionesInput, tb_clienteUncheckedCreateWithoutReparacionesInput>
    connectOrCreate?: tb_clienteCreateOrConnectWithoutReparacionesInput
    connect?: tb_clienteWhereUniqueInput
  }

  export type tb_tecnicoCreateNestedOneWithoutReparacionesInput = {
    create?: XOR<tb_tecnicoCreateWithoutReparacionesInput, tb_tecnicoUncheckedCreateWithoutReparacionesInput>
    connectOrCreate?: tb_tecnicoCreateOrConnectWithoutReparacionesInput
    connect?: tb_tecnicoWhereUniqueInput
  }

  export type tb_equipoCreateNestedOneWithoutReparacionesInput = {
    create?: XOR<tb_equipoCreateWithoutReparacionesInput, tb_equipoUncheckedCreateWithoutReparacionesInput>
    connectOrCreate?: tb_equipoCreateOrConnectWithoutReparacionesInput
    connect?: tb_equipoWhereUniqueInput
  }

  export type tb_estado_reparacionCreateNestedManyWithoutReparacionInput = {
    create?: XOR<tb_estado_reparacionCreateWithoutReparacionInput, tb_estado_reparacionUncheckedCreateWithoutReparacionInput> | tb_estado_reparacionCreateWithoutReparacionInput[] | tb_estado_reparacionUncheckedCreateWithoutReparacionInput[]
    connectOrCreate?: tb_estado_reparacionCreateOrConnectWithoutReparacionInput | tb_estado_reparacionCreateOrConnectWithoutReparacionInput[]
    createMany?: tb_estado_reparacionCreateManyReparacionInputEnvelope
    connect?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
  }

  export type tb_detalle_reparacion_repuestoCreateNestedManyWithoutReparacionInput = {
    create?: XOR<tb_detalle_reparacion_repuestoCreateWithoutReparacionInput, tb_detalle_reparacion_repuestoUncheckedCreateWithoutReparacionInput> | tb_detalle_reparacion_repuestoCreateWithoutReparacionInput[] | tb_detalle_reparacion_repuestoUncheckedCreateWithoutReparacionInput[]
    connectOrCreate?: tb_detalle_reparacion_repuestoCreateOrConnectWithoutReparacionInput | tb_detalle_reparacion_repuestoCreateOrConnectWithoutReparacionInput[]
    createMany?: tb_detalle_reparacion_repuestoCreateManyReparacionInputEnvelope
    connect?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
  }

  export type tb_facturaCreateNestedOneWithoutReparacionInput = {
    create?: XOR<tb_facturaCreateWithoutReparacionInput, tb_facturaUncheckedCreateWithoutReparacionInput>
    connectOrCreate?: tb_facturaCreateOrConnectWithoutReparacionInput
    connect?: tb_facturaWhereUniqueInput
  }

  export type tb_notificacionCreateNestedManyWithoutReparacionInput = {
    create?: XOR<tb_notificacionCreateWithoutReparacionInput, tb_notificacionUncheckedCreateWithoutReparacionInput> | tb_notificacionCreateWithoutReparacionInput[] | tb_notificacionUncheckedCreateWithoutReparacionInput[]
    connectOrCreate?: tb_notificacionCreateOrConnectWithoutReparacionInput | tb_notificacionCreateOrConnectWithoutReparacionInput[]
    createMany?: tb_notificacionCreateManyReparacionInputEnvelope
    connect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
  }

  export type tb_estado_reparacionUncheckedCreateNestedManyWithoutReparacionInput = {
    create?: XOR<tb_estado_reparacionCreateWithoutReparacionInput, tb_estado_reparacionUncheckedCreateWithoutReparacionInput> | tb_estado_reparacionCreateWithoutReparacionInput[] | tb_estado_reparacionUncheckedCreateWithoutReparacionInput[]
    connectOrCreate?: tb_estado_reparacionCreateOrConnectWithoutReparacionInput | tb_estado_reparacionCreateOrConnectWithoutReparacionInput[]
    createMany?: tb_estado_reparacionCreateManyReparacionInputEnvelope
    connect?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
  }

  export type tb_detalle_reparacion_repuestoUncheckedCreateNestedManyWithoutReparacionInput = {
    create?: XOR<tb_detalle_reparacion_repuestoCreateWithoutReparacionInput, tb_detalle_reparacion_repuestoUncheckedCreateWithoutReparacionInput> | tb_detalle_reparacion_repuestoCreateWithoutReparacionInput[] | tb_detalle_reparacion_repuestoUncheckedCreateWithoutReparacionInput[]
    connectOrCreate?: tb_detalle_reparacion_repuestoCreateOrConnectWithoutReparacionInput | tb_detalle_reparacion_repuestoCreateOrConnectWithoutReparacionInput[]
    createMany?: tb_detalle_reparacion_repuestoCreateManyReparacionInputEnvelope
    connect?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
  }

  export type tb_facturaUncheckedCreateNestedOneWithoutReparacionInput = {
    create?: XOR<tb_facturaCreateWithoutReparacionInput, tb_facturaUncheckedCreateWithoutReparacionInput>
    connectOrCreate?: tb_facturaCreateOrConnectWithoutReparacionInput
    connect?: tb_facturaWhereUniqueInput
  }

  export type tb_notificacionUncheckedCreateNestedManyWithoutReparacionInput = {
    create?: XOR<tb_notificacionCreateWithoutReparacionInput, tb_notificacionUncheckedCreateWithoutReparacionInput> | tb_notificacionCreateWithoutReparacionInput[] | tb_notificacionUncheckedCreateWithoutReparacionInput[]
    connectOrCreate?: tb_notificacionCreateOrConnectWithoutReparacionInput | tb_notificacionCreateOrConnectWithoutReparacionInput[]
    createMany?: tb_notificacionCreateManyReparacionInputEnvelope
    connect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
  }

  export type tb_clienteUpdateOneWithoutReparacionesNestedInput = {
    create?: XOR<tb_clienteCreateWithoutReparacionesInput, tb_clienteUncheckedCreateWithoutReparacionesInput>
    connectOrCreate?: tb_clienteCreateOrConnectWithoutReparacionesInput
    upsert?: tb_clienteUpsertWithoutReparacionesInput
    disconnect?: tb_clienteWhereInput | boolean
    delete?: tb_clienteWhereInput | boolean
    connect?: tb_clienteWhereUniqueInput
    update?: XOR<XOR<tb_clienteUpdateToOneWithWhereWithoutReparacionesInput, tb_clienteUpdateWithoutReparacionesInput>, tb_clienteUncheckedUpdateWithoutReparacionesInput>
  }

  export type tb_tecnicoUpdateOneWithoutReparacionesNestedInput = {
    create?: XOR<tb_tecnicoCreateWithoutReparacionesInput, tb_tecnicoUncheckedCreateWithoutReparacionesInput>
    connectOrCreate?: tb_tecnicoCreateOrConnectWithoutReparacionesInput
    upsert?: tb_tecnicoUpsertWithoutReparacionesInput
    disconnect?: tb_tecnicoWhereInput | boolean
    delete?: tb_tecnicoWhereInput | boolean
    connect?: tb_tecnicoWhereUniqueInput
    update?: XOR<XOR<tb_tecnicoUpdateToOneWithWhereWithoutReparacionesInput, tb_tecnicoUpdateWithoutReparacionesInput>, tb_tecnicoUncheckedUpdateWithoutReparacionesInput>
  }

  export type tb_equipoUpdateOneWithoutReparacionesNestedInput = {
    create?: XOR<tb_equipoCreateWithoutReparacionesInput, tb_equipoUncheckedCreateWithoutReparacionesInput>
    connectOrCreate?: tb_equipoCreateOrConnectWithoutReparacionesInput
    upsert?: tb_equipoUpsertWithoutReparacionesInput
    disconnect?: tb_equipoWhereInput | boolean
    delete?: tb_equipoWhereInput | boolean
    connect?: tb_equipoWhereUniqueInput
    update?: XOR<XOR<tb_equipoUpdateToOneWithWhereWithoutReparacionesInput, tb_equipoUpdateWithoutReparacionesInput>, tb_equipoUncheckedUpdateWithoutReparacionesInput>
  }

  export type tb_estado_reparacionUpdateManyWithoutReparacionNestedInput = {
    create?: XOR<tb_estado_reparacionCreateWithoutReparacionInput, tb_estado_reparacionUncheckedCreateWithoutReparacionInput> | tb_estado_reparacionCreateWithoutReparacionInput[] | tb_estado_reparacionUncheckedCreateWithoutReparacionInput[]
    connectOrCreate?: tb_estado_reparacionCreateOrConnectWithoutReparacionInput | tb_estado_reparacionCreateOrConnectWithoutReparacionInput[]
    upsert?: tb_estado_reparacionUpsertWithWhereUniqueWithoutReparacionInput | tb_estado_reparacionUpsertWithWhereUniqueWithoutReparacionInput[]
    createMany?: tb_estado_reparacionCreateManyReparacionInputEnvelope
    set?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    disconnect?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    delete?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    connect?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    update?: tb_estado_reparacionUpdateWithWhereUniqueWithoutReparacionInput | tb_estado_reparacionUpdateWithWhereUniqueWithoutReparacionInput[]
    updateMany?: tb_estado_reparacionUpdateManyWithWhereWithoutReparacionInput | tb_estado_reparacionUpdateManyWithWhereWithoutReparacionInput[]
    deleteMany?: tb_estado_reparacionScalarWhereInput | tb_estado_reparacionScalarWhereInput[]
  }

  export type tb_detalle_reparacion_repuestoUpdateManyWithoutReparacionNestedInput = {
    create?: XOR<tb_detalle_reparacion_repuestoCreateWithoutReparacionInput, tb_detalle_reparacion_repuestoUncheckedCreateWithoutReparacionInput> | tb_detalle_reparacion_repuestoCreateWithoutReparacionInput[] | tb_detalle_reparacion_repuestoUncheckedCreateWithoutReparacionInput[]
    connectOrCreate?: tb_detalle_reparacion_repuestoCreateOrConnectWithoutReparacionInput | tb_detalle_reparacion_repuestoCreateOrConnectWithoutReparacionInput[]
    upsert?: tb_detalle_reparacion_repuestoUpsertWithWhereUniqueWithoutReparacionInput | tb_detalle_reparacion_repuestoUpsertWithWhereUniqueWithoutReparacionInput[]
    createMany?: tb_detalle_reparacion_repuestoCreateManyReparacionInputEnvelope
    set?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    disconnect?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    delete?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    connect?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    update?: tb_detalle_reparacion_repuestoUpdateWithWhereUniqueWithoutReparacionInput | tb_detalle_reparacion_repuestoUpdateWithWhereUniqueWithoutReparacionInput[]
    updateMany?: tb_detalle_reparacion_repuestoUpdateManyWithWhereWithoutReparacionInput | tb_detalle_reparacion_repuestoUpdateManyWithWhereWithoutReparacionInput[]
    deleteMany?: tb_detalle_reparacion_repuestoScalarWhereInput | tb_detalle_reparacion_repuestoScalarWhereInput[]
  }

  export type tb_facturaUpdateOneWithoutReparacionNestedInput = {
    create?: XOR<tb_facturaCreateWithoutReparacionInput, tb_facturaUncheckedCreateWithoutReparacionInput>
    connectOrCreate?: tb_facturaCreateOrConnectWithoutReparacionInput
    upsert?: tb_facturaUpsertWithoutReparacionInput
    disconnect?: tb_facturaWhereInput | boolean
    delete?: tb_facturaWhereInput | boolean
    connect?: tb_facturaWhereUniqueInput
    update?: XOR<XOR<tb_facturaUpdateToOneWithWhereWithoutReparacionInput, tb_facturaUpdateWithoutReparacionInput>, tb_facturaUncheckedUpdateWithoutReparacionInput>
  }

  export type tb_notificacionUpdateManyWithoutReparacionNestedInput = {
    create?: XOR<tb_notificacionCreateWithoutReparacionInput, tb_notificacionUncheckedCreateWithoutReparacionInput> | tb_notificacionCreateWithoutReparacionInput[] | tb_notificacionUncheckedCreateWithoutReparacionInput[]
    connectOrCreate?: tb_notificacionCreateOrConnectWithoutReparacionInput | tb_notificacionCreateOrConnectWithoutReparacionInput[]
    upsert?: tb_notificacionUpsertWithWhereUniqueWithoutReparacionInput | tb_notificacionUpsertWithWhereUniqueWithoutReparacionInput[]
    createMany?: tb_notificacionCreateManyReparacionInputEnvelope
    set?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    disconnect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    delete?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    connect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    update?: tb_notificacionUpdateWithWhereUniqueWithoutReparacionInput | tb_notificacionUpdateWithWhereUniqueWithoutReparacionInput[]
    updateMany?: tb_notificacionUpdateManyWithWhereWithoutReparacionInput | tb_notificacionUpdateManyWithWhereWithoutReparacionInput[]
    deleteMany?: tb_notificacionScalarWhereInput | tb_notificacionScalarWhereInput[]
  }

  export type tb_estado_reparacionUncheckedUpdateManyWithoutReparacionNestedInput = {
    create?: XOR<tb_estado_reparacionCreateWithoutReparacionInput, tb_estado_reparacionUncheckedCreateWithoutReparacionInput> | tb_estado_reparacionCreateWithoutReparacionInput[] | tb_estado_reparacionUncheckedCreateWithoutReparacionInput[]
    connectOrCreate?: tb_estado_reparacionCreateOrConnectWithoutReparacionInput | tb_estado_reparacionCreateOrConnectWithoutReparacionInput[]
    upsert?: tb_estado_reparacionUpsertWithWhereUniqueWithoutReparacionInput | tb_estado_reparacionUpsertWithWhereUniqueWithoutReparacionInput[]
    createMany?: tb_estado_reparacionCreateManyReparacionInputEnvelope
    set?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    disconnect?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    delete?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    connect?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    update?: tb_estado_reparacionUpdateWithWhereUniqueWithoutReparacionInput | tb_estado_reparacionUpdateWithWhereUniqueWithoutReparacionInput[]
    updateMany?: tb_estado_reparacionUpdateManyWithWhereWithoutReparacionInput | tb_estado_reparacionUpdateManyWithWhereWithoutReparacionInput[]
    deleteMany?: tb_estado_reparacionScalarWhereInput | tb_estado_reparacionScalarWhereInput[]
  }

  export type tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutReparacionNestedInput = {
    create?: XOR<tb_detalle_reparacion_repuestoCreateWithoutReparacionInput, tb_detalle_reparacion_repuestoUncheckedCreateWithoutReparacionInput> | tb_detalle_reparacion_repuestoCreateWithoutReparacionInput[] | tb_detalle_reparacion_repuestoUncheckedCreateWithoutReparacionInput[]
    connectOrCreate?: tb_detalle_reparacion_repuestoCreateOrConnectWithoutReparacionInput | tb_detalle_reparacion_repuestoCreateOrConnectWithoutReparacionInput[]
    upsert?: tb_detalle_reparacion_repuestoUpsertWithWhereUniqueWithoutReparacionInput | tb_detalle_reparacion_repuestoUpsertWithWhereUniqueWithoutReparacionInput[]
    createMany?: tb_detalle_reparacion_repuestoCreateManyReparacionInputEnvelope
    set?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    disconnect?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    delete?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    connect?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    update?: tb_detalle_reparacion_repuestoUpdateWithWhereUniqueWithoutReparacionInput | tb_detalle_reparacion_repuestoUpdateWithWhereUniqueWithoutReparacionInput[]
    updateMany?: tb_detalle_reparacion_repuestoUpdateManyWithWhereWithoutReparacionInput | tb_detalle_reparacion_repuestoUpdateManyWithWhereWithoutReparacionInput[]
    deleteMany?: tb_detalle_reparacion_repuestoScalarWhereInput | tb_detalle_reparacion_repuestoScalarWhereInput[]
  }

  export type tb_facturaUncheckedUpdateOneWithoutReparacionNestedInput = {
    create?: XOR<tb_facturaCreateWithoutReparacionInput, tb_facturaUncheckedCreateWithoutReparacionInput>
    connectOrCreate?: tb_facturaCreateOrConnectWithoutReparacionInput
    upsert?: tb_facturaUpsertWithoutReparacionInput
    disconnect?: tb_facturaWhereInput | boolean
    delete?: tb_facturaWhereInput | boolean
    connect?: tb_facturaWhereUniqueInput
    update?: XOR<XOR<tb_facturaUpdateToOneWithWhereWithoutReparacionInput, tb_facturaUpdateWithoutReparacionInput>, tb_facturaUncheckedUpdateWithoutReparacionInput>
  }

  export type tb_notificacionUncheckedUpdateManyWithoutReparacionNestedInput = {
    create?: XOR<tb_notificacionCreateWithoutReparacionInput, tb_notificacionUncheckedCreateWithoutReparacionInput> | tb_notificacionCreateWithoutReparacionInput[] | tb_notificacionUncheckedCreateWithoutReparacionInput[]
    connectOrCreate?: tb_notificacionCreateOrConnectWithoutReparacionInput | tb_notificacionCreateOrConnectWithoutReparacionInput[]
    upsert?: tb_notificacionUpsertWithWhereUniqueWithoutReparacionInput | tb_notificacionUpsertWithWhereUniqueWithoutReparacionInput[]
    createMany?: tb_notificacionCreateManyReparacionInputEnvelope
    set?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    disconnect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    delete?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    connect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    update?: tb_notificacionUpdateWithWhereUniqueWithoutReparacionInput | tb_notificacionUpdateWithWhereUniqueWithoutReparacionInput[]
    updateMany?: tb_notificacionUpdateManyWithWhereWithoutReparacionInput | tb_notificacionUpdateManyWithWhereWithoutReparacionInput[]
    deleteMany?: tb_notificacionScalarWhereInput | tb_notificacionScalarWhereInput[]
  }

  export type tb_detalle_reparacion_repuestoCreateNestedManyWithoutRepuestoInput = {
    create?: XOR<tb_detalle_reparacion_repuestoCreateWithoutRepuestoInput, tb_detalle_reparacion_repuestoUncheckedCreateWithoutRepuestoInput> | tb_detalle_reparacion_repuestoCreateWithoutRepuestoInput[] | tb_detalle_reparacion_repuestoUncheckedCreateWithoutRepuestoInput[]
    connectOrCreate?: tb_detalle_reparacion_repuestoCreateOrConnectWithoutRepuestoInput | tb_detalle_reparacion_repuestoCreateOrConnectWithoutRepuestoInput[]
    createMany?: tb_detalle_reparacion_repuestoCreateManyRepuestoInputEnvelope
    connect?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
  }

  export type tb_detalle_reparacion_repuestoUncheckedCreateNestedManyWithoutRepuestoInput = {
    create?: XOR<tb_detalle_reparacion_repuestoCreateWithoutRepuestoInput, tb_detalle_reparacion_repuestoUncheckedCreateWithoutRepuestoInput> | tb_detalle_reparacion_repuestoCreateWithoutRepuestoInput[] | tb_detalle_reparacion_repuestoUncheckedCreateWithoutRepuestoInput[]
    connectOrCreate?: tb_detalle_reparacion_repuestoCreateOrConnectWithoutRepuestoInput | tb_detalle_reparacion_repuestoCreateOrConnectWithoutRepuestoInput[]
    createMany?: tb_detalle_reparacion_repuestoCreateManyRepuestoInputEnvelope
    connect?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
  }

  export type tb_detalle_reparacion_repuestoUpdateManyWithoutRepuestoNestedInput = {
    create?: XOR<tb_detalle_reparacion_repuestoCreateWithoutRepuestoInput, tb_detalle_reparacion_repuestoUncheckedCreateWithoutRepuestoInput> | tb_detalle_reparacion_repuestoCreateWithoutRepuestoInput[] | tb_detalle_reparacion_repuestoUncheckedCreateWithoutRepuestoInput[]
    connectOrCreate?: tb_detalle_reparacion_repuestoCreateOrConnectWithoutRepuestoInput | tb_detalle_reparacion_repuestoCreateOrConnectWithoutRepuestoInput[]
    upsert?: tb_detalle_reparacion_repuestoUpsertWithWhereUniqueWithoutRepuestoInput | tb_detalle_reparacion_repuestoUpsertWithWhereUniqueWithoutRepuestoInput[]
    createMany?: tb_detalle_reparacion_repuestoCreateManyRepuestoInputEnvelope
    set?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    disconnect?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    delete?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    connect?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    update?: tb_detalle_reparacion_repuestoUpdateWithWhereUniqueWithoutRepuestoInput | tb_detalle_reparacion_repuestoUpdateWithWhereUniqueWithoutRepuestoInput[]
    updateMany?: tb_detalle_reparacion_repuestoUpdateManyWithWhereWithoutRepuestoInput | tb_detalle_reparacion_repuestoUpdateManyWithWhereWithoutRepuestoInput[]
    deleteMany?: tb_detalle_reparacion_repuestoScalarWhereInput | tb_detalle_reparacion_repuestoScalarWhereInput[]
  }

  export type tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutRepuestoNestedInput = {
    create?: XOR<tb_detalle_reparacion_repuestoCreateWithoutRepuestoInput, tb_detalle_reparacion_repuestoUncheckedCreateWithoutRepuestoInput> | tb_detalle_reparacion_repuestoCreateWithoutRepuestoInput[] | tb_detalle_reparacion_repuestoUncheckedCreateWithoutRepuestoInput[]
    connectOrCreate?: tb_detalle_reparacion_repuestoCreateOrConnectWithoutRepuestoInput | tb_detalle_reparacion_repuestoCreateOrConnectWithoutRepuestoInput[]
    upsert?: tb_detalle_reparacion_repuestoUpsertWithWhereUniqueWithoutRepuestoInput | tb_detalle_reparacion_repuestoUpsertWithWhereUniqueWithoutRepuestoInput[]
    createMany?: tb_detalle_reparacion_repuestoCreateManyRepuestoInputEnvelope
    set?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    disconnect?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    delete?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    connect?: tb_detalle_reparacion_repuestoWhereUniqueInput | tb_detalle_reparacion_repuestoWhereUniqueInput[]
    update?: tb_detalle_reparacion_repuestoUpdateWithWhereUniqueWithoutRepuestoInput | tb_detalle_reparacion_repuestoUpdateWithWhereUniqueWithoutRepuestoInput[]
    updateMany?: tb_detalle_reparacion_repuestoUpdateManyWithWhereWithoutRepuestoInput | tb_detalle_reparacion_repuestoUpdateManyWithWhereWithoutRepuestoInput[]
    deleteMany?: tb_detalle_reparacion_repuestoScalarWhereInput | tb_detalle_reparacion_repuestoScalarWhereInput[]
  }

  export type tb_reparacionCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<tb_reparacionCreateWithoutTecnicoInput, tb_reparacionUncheckedCreateWithoutTecnicoInput> | tb_reparacionCreateWithoutTecnicoInput[] | tb_reparacionUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutTecnicoInput | tb_reparacionCreateOrConnectWithoutTecnicoInput[]
    createMany?: tb_reparacionCreateManyTecnicoInputEnvelope
    connect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
  }

  export type tb_usuarioCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<tb_usuarioCreateWithoutTecnicoInput, tb_usuarioUncheckedCreateWithoutTecnicoInput> | tb_usuarioCreateWithoutTecnicoInput[] | tb_usuarioUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: tb_usuarioCreateOrConnectWithoutTecnicoInput | tb_usuarioCreateOrConnectWithoutTecnicoInput[]
    createMany?: tb_usuarioCreateManyTecnicoInputEnvelope
    connect?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
  }

  export type tb_reparacionUncheckedCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<tb_reparacionCreateWithoutTecnicoInput, tb_reparacionUncheckedCreateWithoutTecnicoInput> | tb_reparacionCreateWithoutTecnicoInput[] | tb_reparacionUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutTecnicoInput | tb_reparacionCreateOrConnectWithoutTecnicoInput[]
    createMany?: tb_reparacionCreateManyTecnicoInputEnvelope
    connect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
  }

  export type tb_usuarioUncheckedCreateNestedManyWithoutTecnicoInput = {
    create?: XOR<tb_usuarioCreateWithoutTecnicoInput, tb_usuarioUncheckedCreateWithoutTecnicoInput> | tb_usuarioCreateWithoutTecnicoInput[] | tb_usuarioUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: tb_usuarioCreateOrConnectWithoutTecnicoInput | tb_usuarioCreateOrConnectWithoutTecnicoInput[]
    createMany?: tb_usuarioCreateManyTecnicoInputEnvelope
    connect?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
  }

  export type tb_reparacionUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<tb_reparacionCreateWithoutTecnicoInput, tb_reparacionUncheckedCreateWithoutTecnicoInput> | tb_reparacionCreateWithoutTecnicoInput[] | tb_reparacionUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutTecnicoInput | tb_reparacionCreateOrConnectWithoutTecnicoInput[]
    upsert?: tb_reparacionUpsertWithWhereUniqueWithoutTecnicoInput | tb_reparacionUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: tb_reparacionCreateManyTecnicoInputEnvelope
    set?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    disconnect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    delete?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    connect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    update?: tb_reparacionUpdateWithWhereUniqueWithoutTecnicoInput | tb_reparacionUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: tb_reparacionUpdateManyWithWhereWithoutTecnicoInput | tb_reparacionUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: tb_reparacionScalarWhereInput | tb_reparacionScalarWhereInput[]
  }

  export type tb_usuarioUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<tb_usuarioCreateWithoutTecnicoInput, tb_usuarioUncheckedCreateWithoutTecnicoInput> | tb_usuarioCreateWithoutTecnicoInput[] | tb_usuarioUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: tb_usuarioCreateOrConnectWithoutTecnicoInput | tb_usuarioCreateOrConnectWithoutTecnicoInput[]
    upsert?: tb_usuarioUpsertWithWhereUniqueWithoutTecnicoInput | tb_usuarioUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: tb_usuarioCreateManyTecnicoInputEnvelope
    set?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    disconnect?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    delete?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    connect?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    update?: tb_usuarioUpdateWithWhereUniqueWithoutTecnicoInput | tb_usuarioUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: tb_usuarioUpdateManyWithWhereWithoutTecnicoInput | tb_usuarioUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: tb_usuarioScalarWhereInput | tb_usuarioScalarWhereInput[]
  }

  export type tb_reparacionUncheckedUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<tb_reparacionCreateWithoutTecnicoInput, tb_reparacionUncheckedCreateWithoutTecnicoInput> | tb_reparacionCreateWithoutTecnicoInput[] | tb_reparacionUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: tb_reparacionCreateOrConnectWithoutTecnicoInput | tb_reparacionCreateOrConnectWithoutTecnicoInput[]
    upsert?: tb_reparacionUpsertWithWhereUniqueWithoutTecnicoInput | tb_reparacionUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: tb_reparacionCreateManyTecnicoInputEnvelope
    set?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    disconnect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    delete?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    connect?: tb_reparacionWhereUniqueInput | tb_reparacionWhereUniqueInput[]
    update?: tb_reparacionUpdateWithWhereUniqueWithoutTecnicoInput | tb_reparacionUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: tb_reparacionUpdateManyWithWhereWithoutTecnicoInput | tb_reparacionUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: tb_reparacionScalarWhereInput | tb_reparacionScalarWhereInput[]
  }

  export type tb_usuarioUncheckedUpdateManyWithoutTecnicoNestedInput = {
    create?: XOR<tb_usuarioCreateWithoutTecnicoInput, tb_usuarioUncheckedCreateWithoutTecnicoInput> | tb_usuarioCreateWithoutTecnicoInput[] | tb_usuarioUncheckedCreateWithoutTecnicoInput[]
    connectOrCreate?: tb_usuarioCreateOrConnectWithoutTecnicoInput | tb_usuarioCreateOrConnectWithoutTecnicoInput[]
    upsert?: tb_usuarioUpsertWithWhereUniqueWithoutTecnicoInput | tb_usuarioUpsertWithWhereUniqueWithoutTecnicoInput[]
    createMany?: tb_usuarioCreateManyTecnicoInputEnvelope
    set?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    disconnect?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    delete?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    connect?: tb_usuarioWhereUniqueInput | tb_usuarioWhereUniqueInput[]
    update?: tb_usuarioUpdateWithWhereUniqueWithoutTecnicoInput | tb_usuarioUpdateWithWhereUniqueWithoutTecnicoInput[]
    updateMany?: tb_usuarioUpdateManyWithWhereWithoutTecnicoInput | tb_usuarioUpdateManyWithWhereWithoutTecnicoInput[]
    deleteMany?: tb_usuarioScalarWhereInput | tb_usuarioScalarWhereInput[]
  }

  export type tb_clienteCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<tb_clienteCreateWithoutUsuariosInput, tb_clienteUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tb_clienteCreateOrConnectWithoutUsuariosInput
    connect?: tb_clienteWhereUniqueInput
  }

  export type tb_tecnicoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<tb_tecnicoCreateWithoutUsuariosInput, tb_tecnicoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tb_tecnicoCreateOrConnectWithoutUsuariosInput
    connect?: tb_tecnicoWhereUniqueInput
  }

  export type tb_notificacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tb_notificacionCreateWithoutUsuarioInput, tb_notificacionUncheckedCreateWithoutUsuarioInput> | tb_notificacionCreateWithoutUsuarioInput[] | tb_notificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tb_notificacionCreateOrConnectWithoutUsuarioInput | tb_notificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: tb_notificacionCreateManyUsuarioInputEnvelope
    connect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
  }

  export type tb_estado_reparacionCreateNestedManyWithoutUsuario_aprobadorInput = {
    create?: XOR<tb_estado_reparacionCreateWithoutUsuario_aprobadorInput, tb_estado_reparacionUncheckedCreateWithoutUsuario_aprobadorInput> | tb_estado_reparacionCreateWithoutUsuario_aprobadorInput[] | tb_estado_reparacionUncheckedCreateWithoutUsuario_aprobadorInput[]
    connectOrCreate?: tb_estado_reparacionCreateOrConnectWithoutUsuario_aprobadorInput | tb_estado_reparacionCreateOrConnectWithoutUsuario_aprobadorInput[]
    createMany?: tb_estado_reparacionCreateManyUsuario_aprobadorInputEnvelope
    connect?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
  }

  export type tb_notificacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<tb_notificacionCreateWithoutUsuarioInput, tb_notificacionUncheckedCreateWithoutUsuarioInput> | tb_notificacionCreateWithoutUsuarioInput[] | tb_notificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tb_notificacionCreateOrConnectWithoutUsuarioInput | tb_notificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: tb_notificacionCreateManyUsuarioInputEnvelope
    connect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
  }

  export type tb_estado_reparacionUncheckedCreateNestedManyWithoutUsuario_aprobadorInput = {
    create?: XOR<tb_estado_reparacionCreateWithoutUsuario_aprobadorInput, tb_estado_reparacionUncheckedCreateWithoutUsuario_aprobadorInput> | tb_estado_reparacionCreateWithoutUsuario_aprobadorInput[] | tb_estado_reparacionUncheckedCreateWithoutUsuario_aprobadorInput[]
    connectOrCreate?: tb_estado_reparacionCreateOrConnectWithoutUsuario_aprobadorInput | tb_estado_reparacionCreateOrConnectWithoutUsuario_aprobadorInput[]
    createMany?: tb_estado_reparacionCreateManyUsuario_aprobadorInputEnvelope
    connect?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
  }

  export type NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput = {
    set?: $Enums.tb_usuario_Usuario_nivel | null
  }

  export type tb_clienteUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<tb_clienteCreateWithoutUsuariosInput, tb_clienteUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tb_clienteCreateOrConnectWithoutUsuariosInput
    upsert?: tb_clienteUpsertWithoutUsuariosInput
    disconnect?: tb_clienteWhereInput | boolean
    delete?: tb_clienteWhereInput | boolean
    connect?: tb_clienteWhereUniqueInput
    update?: XOR<XOR<tb_clienteUpdateToOneWithWhereWithoutUsuariosInput, tb_clienteUpdateWithoutUsuariosInput>, tb_clienteUncheckedUpdateWithoutUsuariosInput>
  }

  export type tb_tecnicoUpdateOneWithoutUsuariosNestedInput = {
    create?: XOR<tb_tecnicoCreateWithoutUsuariosInput, tb_tecnicoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tb_tecnicoCreateOrConnectWithoutUsuariosInput
    upsert?: tb_tecnicoUpsertWithoutUsuariosInput
    disconnect?: tb_tecnicoWhereInput | boolean
    delete?: tb_tecnicoWhereInput | boolean
    connect?: tb_tecnicoWhereUniqueInput
    update?: XOR<XOR<tb_tecnicoUpdateToOneWithWhereWithoutUsuariosInput, tb_tecnicoUpdateWithoutUsuariosInput>, tb_tecnicoUncheckedUpdateWithoutUsuariosInput>
  }

  export type tb_notificacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tb_notificacionCreateWithoutUsuarioInput, tb_notificacionUncheckedCreateWithoutUsuarioInput> | tb_notificacionCreateWithoutUsuarioInput[] | tb_notificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tb_notificacionCreateOrConnectWithoutUsuarioInput | tb_notificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: tb_notificacionUpsertWithWhereUniqueWithoutUsuarioInput | tb_notificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tb_notificacionCreateManyUsuarioInputEnvelope
    set?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    disconnect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    delete?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    connect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    update?: tb_notificacionUpdateWithWhereUniqueWithoutUsuarioInput | tb_notificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tb_notificacionUpdateManyWithWhereWithoutUsuarioInput | tb_notificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tb_notificacionScalarWhereInput | tb_notificacionScalarWhereInput[]
  }

  export type tb_estado_reparacionUpdateManyWithoutUsuario_aprobadorNestedInput = {
    create?: XOR<tb_estado_reparacionCreateWithoutUsuario_aprobadorInput, tb_estado_reparacionUncheckedCreateWithoutUsuario_aprobadorInput> | tb_estado_reparacionCreateWithoutUsuario_aprobadorInput[] | tb_estado_reparacionUncheckedCreateWithoutUsuario_aprobadorInput[]
    connectOrCreate?: tb_estado_reparacionCreateOrConnectWithoutUsuario_aprobadorInput | tb_estado_reparacionCreateOrConnectWithoutUsuario_aprobadorInput[]
    upsert?: tb_estado_reparacionUpsertWithWhereUniqueWithoutUsuario_aprobadorInput | tb_estado_reparacionUpsertWithWhereUniqueWithoutUsuario_aprobadorInput[]
    createMany?: tb_estado_reparacionCreateManyUsuario_aprobadorInputEnvelope
    set?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    disconnect?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    delete?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    connect?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    update?: tb_estado_reparacionUpdateWithWhereUniqueWithoutUsuario_aprobadorInput | tb_estado_reparacionUpdateWithWhereUniqueWithoutUsuario_aprobadorInput[]
    updateMany?: tb_estado_reparacionUpdateManyWithWhereWithoutUsuario_aprobadorInput | tb_estado_reparacionUpdateManyWithWhereWithoutUsuario_aprobadorInput[]
    deleteMany?: tb_estado_reparacionScalarWhereInput | tb_estado_reparacionScalarWhereInput[]
  }

  export type tb_notificacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<tb_notificacionCreateWithoutUsuarioInput, tb_notificacionUncheckedCreateWithoutUsuarioInput> | tb_notificacionCreateWithoutUsuarioInput[] | tb_notificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: tb_notificacionCreateOrConnectWithoutUsuarioInput | tb_notificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: tb_notificacionUpsertWithWhereUniqueWithoutUsuarioInput | tb_notificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: tb_notificacionCreateManyUsuarioInputEnvelope
    set?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    disconnect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    delete?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    connect?: tb_notificacionWhereUniqueInput | tb_notificacionWhereUniqueInput[]
    update?: tb_notificacionUpdateWithWhereUniqueWithoutUsuarioInput | tb_notificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: tb_notificacionUpdateManyWithWhereWithoutUsuarioInput | tb_notificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: tb_notificacionScalarWhereInput | tb_notificacionScalarWhereInput[]
  }

  export type tb_estado_reparacionUncheckedUpdateManyWithoutUsuario_aprobadorNestedInput = {
    create?: XOR<tb_estado_reparacionCreateWithoutUsuario_aprobadorInput, tb_estado_reparacionUncheckedCreateWithoutUsuario_aprobadorInput> | tb_estado_reparacionCreateWithoutUsuario_aprobadorInput[] | tb_estado_reparacionUncheckedCreateWithoutUsuario_aprobadorInput[]
    connectOrCreate?: tb_estado_reparacionCreateOrConnectWithoutUsuario_aprobadorInput | tb_estado_reparacionCreateOrConnectWithoutUsuario_aprobadorInput[]
    upsert?: tb_estado_reparacionUpsertWithWhereUniqueWithoutUsuario_aprobadorInput | tb_estado_reparacionUpsertWithWhereUniqueWithoutUsuario_aprobadorInput[]
    createMany?: tb_estado_reparacionCreateManyUsuario_aprobadorInputEnvelope
    set?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    disconnect?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    delete?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    connect?: tb_estado_reparacionWhereUniqueInput | tb_estado_reparacionWhereUniqueInput[]
    update?: tb_estado_reparacionUpdateWithWhereUniqueWithoutUsuario_aprobadorInput | tb_estado_reparacionUpdateWithWhereUniqueWithoutUsuario_aprobadorInput[]
    updateMany?: tb_estado_reparacionUpdateManyWithWhereWithoutUsuario_aprobadorInput | tb_estado_reparacionUpdateManyWithWhereWithoutUsuario_aprobadorInput[]
    deleteMany?: tb_estado_reparacionScalarWhereInput | tb_estado_reparacionScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumtb_usuario_Usuario_nivelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.tb_usuario_Usuario_nivel | Enumtb_usuario_Usuario_nivelFieldRefInput<$PrismaModel> | null
    in?: $Enums.tb_usuario_Usuario_nivel[] | null
    notIn?: $Enums.tb_usuario_Usuario_nivel[] | null
    not?: NestedEnumtb_usuario_Usuario_nivelNullableFilter<$PrismaModel> | $Enums.tb_usuario_Usuario_nivel | null
  }

  export type NestedEnumtb_usuario_Usuario_nivelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.tb_usuario_Usuario_nivel | Enumtb_usuario_Usuario_nivelFieldRefInput<$PrismaModel> | null
    in?: $Enums.tb_usuario_Usuario_nivel[] | null
    notIn?: $Enums.tb_usuario_Usuario_nivel[] | null
    not?: NestedEnumtb_usuario_Usuario_nivelNullableWithAggregatesFilter<$PrismaModel> | $Enums.tb_usuario_Usuario_nivel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumtb_usuario_Usuario_nivelNullableFilter<$PrismaModel>
    _max?: NestedEnumtb_usuario_Usuario_nivelNullableFilter<$PrismaModel>
  }

  export type tb_equipoCreateWithoutClienteInput = {
    Nombre?: string | null
    Marca?: string | null
    Modelo?: string | null
    Descripcion_problema?: string | null
    Estado?: string | null
    reparaciones?: tb_reparacionCreateNestedManyWithoutEquipoInput
  }

  export type tb_equipoUncheckedCreateWithoutClienteInput = {
    ID_Equipo?: number
    Nombre?: string | null
    Marca?: string | null
    Modelo?: string | null
    Descripcion_problema?: string | null
    Estado?: string | null
    reparaciones?: tb_reparacionUncheckedCreateNestedManyWithoutEquipoInput
  }

  export type tb_equipoCreateOrConnectWithoutClienteInput = {
    where: tb_equipoWhereUniqueInput
    create: XOR<tb_equipoCreateWithoutClienteInput, tb_equipoUncheckedCreateWithoutClienteInput>
  }

  export type tb_equipoCreateManyClienteInputEnvelope = {
    data: tb_equipoCreateManyClienteInput | tb_equipoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type tb_reparacionCreateWithoutClienteInput = {
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    tecnico?: tb_tecnicoCreateNestedOneWithoutReparacionesInput
    equipo?: tb_equipoCreateNestedOneWithoutReparacionesInput
    estados?: tb_estado_reparacionCreateNestedManyWithoutReparacionInput
    detalles?: tb_detalle_reparacion_repuestoCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaCreateNestedOneWithoutReparacionInput
    tb_notificacion?: tb_notificacionCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionUncheckedCreateWithoutClienteInput = {
    ID_Reparacion?: number
    ID_Tecnico?: number | null
    ID_Equipo?: number | null
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedCreateNestedManyWithoutReparacionInput
    detalles?: tb_detalle_reparacion_repuestoUncheckedCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaUncheckedCreateNestedOneWithoutReparacionInput
    tb_notificacion?: tb_notificacionUncheckedCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionCreateOrConnectWithoutClienteInput = {
    where: tb_reparacionWhereUniqueInput
    create: XOR<tb_reparacionCreateWithoutClienteInput, tb_reparacionUncheckedCreateWithoutClienteInput>
  }

  export type tb_reparacionCreateManyClienteInputEnvelope = {
    data: tb_reparacionCreateManyClienteInput | tb_reparacionCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type tb_usuarioCreateWithoutClienteInput = {
    Usuario_Name?: string | null
    Usuario_Password?: string | null
    Usuario_nivel?: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: boolean | null
    tecnico?: tb_tecnicoCreateNestedOneWithoutUsuariosInput
    notificaciones?: tb_notificacionCreateNestedManyWithoutUsuarioInput
    estados_aprobados?: tb_estado_reparacionCreateNestedManyWithoutUsuario_aprobadorInput
  }

  export type tb_usuarioUncheckedCreateWithoutClienteInput = {
    ID_Usuario?: number
    Usuario_Name?: string | null
    Usuario_Password?: string | null
    Usuario_nivel?: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: boolean | null
    ID_Tecnico?: number | null
    notificaciones?: tb_notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    estados_aprobados?: tb_estado_reparacionUncheckedCreateNestedManyWithoutUsuario_aprobadorInput
  }

  export type tb_usuarioCreateOrConnectWithoutClienteInput = {
    where: tb_usuarioWhereUniqueInput
    create: XOR<tb_usuarioCreateWithoutClienteInput, tb_usuarioUncheckedCreateWithoutClienteInput>
  }

  export type tb_usuarioCreateManyClienteInputEnvelope = {
    data: tb_usuarioCreateManyClienteInput | tb_usuarioCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type tb_notificacionCreateWithoutClienteInput = {
    Mensaje?: string | null
    Fecha_Envio?: Date | string | null
    Enviado?: boolean | null
    Tipo?: string | null
    Tipo_Cambio?: string | null
    Aprobado?: boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
    reparacion?: tb_reparacionCreateNestedOneWithoutTb_notificacionInput
    usuario?: tb_usuarioCreateNestedOneWithoutNotificacionesInput
  }

  export type tb_notificacionUncheckedCreateWithoutClienteInput = {
    ID_Notificacion?: number
    ID_Reparacion?: number | null
    ID_Usuario?: number | null
    Mensaje?: string | null
    Fecha_Envio?: Date | string | null
    Enviado?: boolean | null
    Tipo?: string | null
    Tipo_Cambio?: string | null
    Aprobado?: boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_notificacionCreateOrConnectWithoutClienteInput = {
    where: tb_notificacionWhereUniqueInput
    create: XOR<tb_notificacionCreateWithoutClienteInput, tb_notificacionUncheckedCreateWithoutClienteInput>
  }

  export type tb_notificacionCreateManyClienteInputEnvelope = {
    data: tb_notificacionCreateManyClienteInput | tb_notificacionCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type tb_equipoUpsertWithWhereUniqueWithoutClienteInput = {
    where: tb_equipoWhereUniqueInput
    update: XOR<tb_equipoUpdateWithoutClienteInput, tb_equipoUncheckedUpdateWithoutClienteInput>
    create: XOR<tb_equipoCreateWithoutClienteInput, tb_equipoUncheckedCreateWithoutClienteInput>
  }

  export type tb_equipoUpdateWithWhereUniqueWithoutClienteInput = {
    where: tb_equipoWhereUniqueInput
    data: XOR<tb_equipoUpdateWithoutClienteInput, tb_equipoUncheckedUpdateWithoutClienteInput>
  }

  export type tb_equipoUpdateManyWithWhereWithoutClienteInput = {
    where: tb_equipoScalarWhereInput
    data: XOR<tb_equipoUpdateManyMutationInput, tb_equipoUncheckedUpdateManyWithoutClienteInput>
  }

  export type tb_equipoScalarWhereInput = {
    AND?: tb_equipoScalarWhereInput | tb_equipoScalarWhereInput[]
    OR?: tb_equipoScalarWhereInput[]
    NOT?: tb_equipoScalarWhereInput | tb_equipoScalarWhereInput[]
    ID_Equipo?: IntFilter<"tb_equipo"> | number
    ID_Cliente?: IntNullableFilter<"tb_equipo"> | number | null
    Nombre?: StringNullableFilter<"tb_equipo"> | string | null
    Marca?: StringNullableFilter<"tb_equipo"> | string | null
    Modelo?: StringNullableFilter<"tb_equipo"> | string | null
    Descripcion_problema?: StringNullableFilter<"tb_equipo"> | string | null
    Estado?: StringNullableFilter<"tb_equipo"> | string | null
  }

  export type tb_reparacionUpsertWithWhereUniqueWithoutClienteInput = {
    where: tb_reparacionWhereUniqueInput
    update: XOR<tb_reparacionUpdateWithoutClienteInput, tb_reparacionUncheckedUpdateWithoutClienteInput>
    create: XOR<tb_reparacionCreateWithoutClienteInput, tb_reparacionUncheckedCreateWithoutClienteInput>
  }

  export type tb_reparacionUpdateWithWhereUniqueWithoutClienteInput = {
    where: tb_reparacionWhereUniqueInput
    data: XOR<tb_reparacionUpdateWithoutClienteInput, tb_reparacionUncheckedUpdateWithoutClienteInput>
  }

  export type tb_reparacionUpdateManyWithWhereWithoutClienteInput = {
    where: tb_reparacionScalarWhereInput
    data: XOR<tb_reparacionUpdateManyMutationInput, tb_reparacionUncheckedUpdateManyWithoutClienteInput>
  }

  export type tb_reparacionScalarWhereInput = {
    AND?: tb_reparacionScalarWhereInput | tb_reparacionScalarWhereInput[]
    OR?: tb_reparacionScalarWhereInput[]
    NOT?: tb_reparacionScalarWhereInput | tb_reparacionScalarWhereInput[]
    ID_Reparacion?: IntFilter<"tb_reparacion"> | number
    ID_Cliente?: IntNullableFilter<"tb_reparacion"> | number | null
    ID_Tecnico?: IntNullableFilter<"tb_reparacion"> | number | null
    ID_Equipo?: IntNullableFilter<"tb_reparacion"> | number | null
    Fecha_Ingreso?: DateTimeNullableFilter<"tb_reparacion"> | Date | string | null
    Fecha_Entrega?: DateTimeNullableFilter<"tb_reparacion"> | Date | string | null
    CostoServicio?: DecimalNullableFilter<"tb_reparacion"> | Decimal | DecimalJsLike | number | string | null
    IVA?: DecimalNullableFilter<"tb_reparacion"> | Decimal | DecimalJsLike | number | string | null
    Total?: DecimalNullableFilter<"tb_reparacion"> | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_usuarioUpsertWithWhereUniqueWithoutClienteInput = {
    where: tb_usuarioWhereUniqueInput
    update: XOR<tb_usuarioUpdateWithoutClienteInput, tb_usuarioUncheckedUpdateWithoutClienteInput>
    create: XOR<tb_usuarioCreateWithoutClienteInput, tb_usuarioUncheckedCreateWithoutClienteInput>
  }

  export type tb_usuarioUpdateWithWhereUniqueWithoutClienteInput = {
    where: tb_usuarioWhereUniqueInput
    data: XOR<tb_usuarioUpdateWithoutClienteInput, tb_usuarioUncheckedUpdateWithoutClienteInput>
  }

  export type tb_usuarioUpdateManyWithWhereWithoutClienteInput = {
    where: tb_usuarioScalarWhereInput
    data: XOR<tb_usuarioUpdateManyMutationInput, tb_usuarioUncheckedUpdateManyWithoutClienteInput>
  }

  export type tb_usuarioScalarWhereInput = {
    AND?: tb_usuarioScalarWhereInput | tb_usuarioScalarWhereInput[]
    OR?: tb_usuarioScalarWhereInput[]
    NOT?: tb_usuarioScalarWhereInput | tb_usuarioScalarWhereInput[]
    ID_Usuario?: IntFilter<"tb_usuario"> | number
    Usuario_Name?: StringNullableFilter<"tb_usuario"> | string | null
    Usuario_Password?: StringNullableFilter<"tb_usuario"> | string | null
    Usuario_nivel?: Enumtb_usuario_Usuario_nivelNullableFilter<"tb_usuario"> | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: BoolNullableFilter<"tb_usuario"> | boolean | null
    ID_Cliente?: IntNullableFilter<"tb_usuario"> | number | null
    ID_Tecnico?: IntNullableFilter<"tb_usuario"> | number | null
  }

  export type tb_notificacionUpsertWithWhereUniqueWithoutClienteInput = {
    where: tb_notificacionWhereUniqueInput
    update: XOR<tb_notificacionUpdateWithoutClienteInput, tb_notificacionUncheckedUpdateWithoutClienteInput>
    create: XOR<tb_notificacionCreateWithoutClienteInput, tb_notificacionUncheckedCreateWithoutClienteInput>
  }

  export type tb_notificacionUpdateWithWhereUniqueWithoutClienteInput = {
    where: tb_notificacionWhereUniqueInput
    data: XOR<tb_notificacionUpdateWithoutClienteInput, tb_notificacionUncheckedUpdateWithoutClienteInput>
  }

  export type tb_notificacionUpdateManyWithWhereWithoutClienteInput = {
    where: tb_notificacionScalarWhereInput
    data: XOR<tb_notificacionUpdateManyMutationInput, tb_notificacionUncheckedUpdateManyWithoutClienteInput>
  }

  export type tb_notificacionScalarWhereInput = {
    AND?: tb_notificacionScalarWhereInput | tb_notificacionScalarWhereInput[]
    OR?: tb_notificacionScalarWhereInput[]
    NOT?: tb_notificacionScalarWhereInput | tb_notificacionScalarWhereInput[]
    ID_Notificacion?: IntFilter<"tb_notificacion"> | number
    ID_Cliente?: IntNullableFilter<"tb_notificacion"> | number | null
    ID_Reparacion?: IntNullableFilter<"tb_notificacion"> | number | null
    ID_Usuario?: IntNullableFilter<"tb_notificacion"> | number | null
    Mensaje?: StringNullableFilter<"tb_notificacion"> | string | null
    Fecha_Envio?: DateTimeNullableFilter<"tb_notificacion"> | Date | string | null
    Enviado?: BoolNullableFilter<"tb_notificacion"> | boolean | null
    Tipo?: StringNullableFilter<"tb_notificacion"> | string | null
    Tipo_Cambio?: StringNullableFilter<"tb_notificacion"> | string | null
    Aprobado?: BoolNullableFilter<"tb_notificacion"> | boolean | null
    Datos_Cambio?: JsonNullableFilter<"tb_notificacion">
  }

  export type tb_reparacionCreateWithoutDetallesInput = {
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteCreateNestedOneWithoutReparacionesInput
    tecnico?: tb_tecnicoCreateNestedOneWithoutReparacionesInput
    equipo?: tb_equipoCreateNestedOneWithoutReparacionesInput
    estados?: tb_estado_reparacionCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaCreateNestedOneWithoutReparacionInput
    tb_notificacion?: tb_notificacionCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionUncheckedCreateWithoutDetallesInput = {
    ID_Reparacion?: number
    ID_Cliente?: number | null
    ID_Tecnico?: number | null
    ID_Equipo?: number | null
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaUncheckedCreateNestedOneWithoutReparacionInput
    tb_notificacion?: tb_notificacionUncheckedCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionCreateOrConnectWithoutDetallesInput = {
    where: tb_reparacionWhereUniqueInput
    create: XOR<tb_reparacionCreateWithoutDetallesInput, tb_reparacionUncheckedCreateWithoutDetallesInput>
  }

  export type tb_repuestoCreateWithoutDetallesInput = {
    Nombre?: string | null
    Precio?: Decimal | DecimalJsLike | number | string | null
  }

  export type tb_repuestoUncheckedCreateWithoutDetallesInput = {
    ID_Repuesto?: number
    Nombre?: string | null
    Precio?: Decimal | DecimalJsLike | number | string | null
  }

  export type tb_repuestoCreateOrConnectWithoutDetallesInput = {
    where: tb_repuestoWhereUniqueInput
    create: XOR<tb_repuestoCreateWithoutDetallesInput, tb_repuestoUncheckedCreateWithoutDetallesInput>
  }

  export type tb_reparacionUpsertWithoutDetallesInput = {
    update: XOR<tb_reparacionUpdateWithoutDetallesInput, tb_reparacionUncheckedUpdateWithoutDetallesInput>
    create: XOR<tb_reparacionCreateWithoutDetallesInput, tb_reparacionUncheckedCreateWithoutDetallesInput>
    where?: tb_reparacionWhereInput
  }

  export type tb_reparacionUpdateToOneWithWhereWithoutDetallesInput = {
    where?: tb_reparacionWhereInput
    data: XOR<tb_reparacionUpdateWithoutDetallesInput, tb_reparacionUncheckedUpdateWithoutDetallesInput>
  }

  export type tb_reparacionUpdateWithoutDetallesInput = {
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteUpdateOneWithoutReparacionesNestedInput
    tecnico?: tb_tecnicoUpdateOneWithoutReparacionesNestedInput
    equipo?: tb_equipoUpdateOneWithoutReparacionesNestedInput
    estados?: tb_estado_reparacionUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUpdateOneWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUpdateManyWithoutReparacionNestedInput
  }

  export type tb_reparacionUncheckedUpdateWithoutDetallesInput = {
    ID_Reparacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Equipo?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUncheckedUpdateOneWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUncheckedUpdateManyWithoutReparacionNestedInput
  }

  export type tb_repuestoUpsertWithoutDetallesInput = {
    update: XOR<tb_repuestoUpdateWithoutDetallesInput, tb_repuestoUncheckedUpdateWithoutDetallesInput>
    create: XOR<tb_repuestoCreateWithoutDetallesInput, tb_repuestoUncheckedCreateWithoutDetallesInput>
    where?: tb_repuestoWhereInput
  }

  export type tb_repuestoUpdateToOneWithWhereWithoutDetallesInput = {
    where?: tb_repuestoWhereInput
    data: XOR<tb_repuestoUpdateWithoutDetallesInput, tb_repuestoUncheckedUpdateWithoutDetallesInput>
  }

  export type tb_repuestoUpdateWithoutDetallesInput = {
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_repuestoUncheckedUpdateWithoutDetallesInput = {
    ID_Repuesto?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Precio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_clienteCreateWithoutEquiposInput = {
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Direccion?: string | null
    reparaciones?: tb_reparacionCreateNestedManyWithoutClienteInput
    usuarios?: tb_usuarioCreateNestedManyWithoutClienteInput
    tb_notificacion?: tb_notificacionCreateNestedManyWithoutClienteInput
  }

  export type tb_clienteUncheckedCreateWithoutEquiposInput = {
    ID_Cliente?: number
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Direccion?: string | null
    reparaciones?: tb_reparacionUncheckedCreateNestedManyWithoutClienteInput
    usuarios?: tb_usuarioUncheckedCreateNestedManyWithoutClienteInput
    tb_notificacion?: tb_notificacionUncheckedCreateNestedManyWithoutClienteInput
  }

  export type tb_clienteCreateOrConnectWithoutEquiposInput = {
    where: tb_clienteWhereUniqueInput
    create: XOR<tb_clienteCreateWithoutEquiposInput, tb_clienteUncheckedCreateWithoutEquiposInput>
  }

  export type tb_reparacionCreateWithoutEquipoInput = {
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteCreateNestedOneWithoutReparacionesInput
    tecnico?: tb_tecnicoCreateNestedOneWithoutReparacionesInput
    estados?: tb_estado_reparacionCreateNestedManyWithoutReparacionInput
    detalles?: tb_detalle_reparacion_repuestoCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaCreateNestedOneWithoutReparacionInput
    tb_notificacion?: tb_notificacionCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionUncheckedCreateWithoutEquipoInput = {
    ID_Reparacion?: number
    ID_Cliente?: number | null
    ID_Tecnico?: number | null
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedCreateNestedManyWithoutReparacionInput
    detalles?: tb_detalle_reparacion_repuestoUncheckedCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaUncheckedCreateNestedOneWithoutReparacionInput
    tb_notificacion?: tb_notificacionUncheckedCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionCreateOrConnectWithoutEquipoInput = {
    where: tb_reparacionWhereUniqueInput
    create: XOR<tb_reparacionCreateWithoutEquipoInput, tb_reparacionUncheckedCreateWithoutEquipoInput>
  }

  export type tb_reparacionCreateManyEquipoInputEnvelope = {
    data: tb_reparacionCreateManyEquipoInput | tb_reparacionCreateManyEquipoInput[]
    skipDuplicates?: boolean
  }

  export type tb_clienteUpsertWithoutEquiposInput = {
    update: XOR<tb_clienteUpdateWithoutEquiposInput, tb_clienteUncheckedUpdateWithoutEquiposInput>
    create: XOR<tb_clienteCreateWithoutEquiposInput, tb_clienteUncheckedCreateWithoutEquiposInput>
    where?: tb_clienteWhereInput
  }

  export type tb_clienteUpdateToOneWithWhereWithoutEquiposInput = {
    where?: tb_clienteWhereInput
    data: XOR<tb_clienteUpdateWithoutEquiposInput, tb_clienteUncheckedUpdateWithoutEquiposInput>
  }

  export type tb_clienteUpdateWithoutEquiposInput = {
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Direccion?: NullableStringFieldUpdateOperationsInput | string | null
    reparaciones?: tb_reparacionUpdateManyWithoutClienteNestedInput
    usuarios?: tb_usuarioUpdateManyWithoutClienteNestedInput
    tb_notificacion?: tb_notificacionUpdateManyWithoutClienteNestedInput
  }

  export type tb_clienteUncheckedUpdateWithoutEquiposInput = {
    ID_Cliente?: IntFieldUpdateOperationsInput | number
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Direccion?: NullableStringFieldUpdateOperationsInput | string | null
    reparaciones?: tb_reparacionUncheckedUpdateManyWithoutClienteNestedInput
    usuarios?: tb_usuarioUncheckedUpdateManyWithoutClienteNestedInput
    tb_notificacion?: tb_notificacionUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type tb_reparacionUpsertWithWhereUniqueWithoutEquipoInput = {
    where: tb_reparacionWhereUniqueInput
    update: XOR<tb_reparacionUpdateWithoutEquipoInput, tb_reparacionUncheckedUpdateWithoutEquipoInput>
    create: XOR<tb_reparacionCreateWithoutEquipoInput, tb_reparacionUncheckedCreateWithoutEquipoInput>
  }

  export type tb_reparacionUpdateWithWhereUniqueWithoutEquipoInput = {
    where: tb_reparacionWhereUniqueInput
    data: XOR<tb_reparacionUpdateWithoutEquipoInput, tb_reparacionUncheckedUpdateWithoutEquipoInput>
  }

  export type tb_reparacionUpdateManyWithWhereWithoutEquipoInput = {
    where: tb_reparacionScalarWhereInput
    data: XOR<tb_reparacionUpdateManyMutationInput, tb_reparacionUncheckedUpdateManyWithoutEquipoInput>
  }

  export type tb_reparacionCreateWithoutEstadosInput = {
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteCreateNestedOneWithoutReparacionesInput
    tecnico?: tb_tecnicoCreateNestedOneWithoutReparacionesInput
    equipo?: tb_equipoCreateNestedOneWithoutReparacionesInput
    detalles?: tb_detalle_reparacion_repuestoCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaCreateNestedOneWithoutReparacionInput
    tb_notificacion?: tb_notificacionCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionUncheckedCreateWithoutEstadosInput = {
    ID_Reparacion?: number
    ID_Cliente?: number | null
    ID_Tecnico?: number | null
    ID_Equipo?: number | null
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    detalles?: tb_detalle_reparacion_repuestoUncheckedCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaUncheckedCreateNestedOneWithoutReparacionInput
    tb_notificacion?: tb_notificacionUncheckedCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionCreateOrConnectWithoutEstadosInput = {
    where: tb_reparacionWhereUniqueInput
    create: XOR<tb_reparacionCreateWithoutEstadosInput, tb_reparacionUncheckedCreateWithoutEstadosInput>
  }

  export type tb_usuarioCreateWithoutEstados_aprobadosInput = {
    Usuario_Name?: string | null
    Usuario_Password?: string | null
    Usuario_nivel?: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: boolean | null
    cliente?: tb_clienteCreateNestedOneWithoutUsuariosInput
    tecnico?: tb_tecnicoCreateNestedOneWithoutUsuariosInput
    notificaciones?: tb_notificacionCreateNestedManyWithoutUsuarioInput
  }

  export type tb_usuarioUncheckedCreateWithoutEstados_aprobadosInput = {
    ID_Usuario?: number
    Usuario_Name?: string | null
    Usuario_Password?: string | null
    Usuario_nivel?: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: boolean | null
    ID_Cliente?: number | null
    ID_Tecnico?: number | null
    notificaciones?: tb_notificacionUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type tb_usuarioCreateOrConnectWithoutEstados_aprobadosInput = {
    where: tb_usuarioWhereUniqueInput
    create: XOR<tb_usuarioCreateWithoutEstados_aprobadosInput, tb_usuarioUncheckedCreateWithoutEstados_aprobadosInput>
  }

  export type tb_reparacionUpsertWithoutEstadosInput = {
    update: XOR<tb_reparacionUpdateWithoutEstadosInput, tb_reparacionUncheckedUpdateWithoutEstadosInput>
    create: XOR<tb_reparacionCreateWithoutEstadosInput, tb_reparacionUncheckedCreateWithoutEstadosInput>
    where?: tb_reparacionWhereInput
  }

  export type tb_reparacionUpdateToOneWithWhereWithoutEstadosInput = {
    where?: tb_reparacionWhereInput
    data: XOR<tb_reparacionUpdateWithoutEstadosInput, tb_reparacionUncheckedUpdateWithoutEstadosInput>
  }

  export type tb_reparacionUpdateWithoutEstadosInput = {
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteUpdateOneWithoutReparacionesNestedInput
    tecnico?: tb_tecnicoUpdateOneWithoutReparacionesNestedInput
    equipo?: tb_equipoUpdateOneWithoutReparacionesNestedInput
    detalles?: tb_detalle_reparacion_repuestoUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUpdateOneWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUpdateManyWithoutReparacionNestedInput
  }

  export type tb_reparacionUncheckedUpdateWithoutEstadosInput = {
    ID_Reparacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Equipo?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detalles?: tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUncheckedUpdateOneWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUncheckedUpdateManyWithoutReparacionNestedInput
  }

  export type tb_usuarioUpsertWithoutEstados_aprobadosInput = {
    update: XOR<tb_usuarioUpdateWithoutEstados_aprobadosInput, tb_usuarioUncheckedUpdateWithoutEstados_aprobadosInput>
    create: XOR<tb_usuarioCreateWithoutEstados_aprobadosInput, tb_usuarioUncheckedCreateWithoutEstados_aprobadosInput>
    where?: tb_usuarioWhereInput
  }

  export type tb_usuarioUpdateToOneWithWhereWithoutEstados_aprobadosInput = {
    where?: tb_usuarioWhereInput
    data: XOR<tb_usuarioUpdateWithoutEstados_aprobadosInput, tb_usuarioUncheckedUpdateWithoutEstados_aprobadosInput>
  }

  export type tb_usuarioUpdateWithoutEstados_aprobadosInput = {
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cliente?: tb_clienteUpdateOneWithoutUsuariosNestedInput
    tecnico?: tb_tecnicoUpdateOneWithoutUsuariosNestedInput
    notificaciones?: tb_notificacionUpdateManyWithoutUsuarioNestedInput
  }

  export type tb_usuarioUncheckedUpdateWithoutEstados_aprobadosInput = {
    ID_Usuario?: IntFieldUpdateOperationsInput | number
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    notificaciones?: tb_notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type tb_reparacionCreateWithoutFacturaInput = {
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteCreateNestedOneWithoutReparacionesInput
    tecnico?: tb_tecnicoCreateNestedOneWithoutReparacionesInput
    equipo?: tb_equipoCreateNestedOneWithoutReparacionesInput
    estados?: tb_estado_reparacionCreateNestedManyWithoutReparacionInput
    detalles?: tb_detalle_reparacion_repuestoCreateNestedManyWithoutReparacionInput
    tb_notificacion?: tb_notificacionCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionUncheckedCreateWithoutFacturaInput = {
    ID_Reparacion?: number
    ID_Cliente?: number | null
    ID_Tecnico?: number | null
    ID_Equipo?: number | null
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedCreateNestedManyWithoutReparacionInput
    detalles?: tb_detalle_reparacion_repuestoUncheckedCreateNestedManyWithoutReparacionInput
    tb_notificacion?: tb_notificacionUncheckedCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionCreateOrConnectWithoutFacturaInput = {
    where: tb_reparacionWhereUniqueInput
    create: XOR<tb_reparacionCreateWithoutFacturaInput, tb_reparacionUncheckedCreateWithoutFacturaInput>
  }

  export type tb_reparacionUpsertWithoutFacturaInput = {
    update: XOR<tb_reparacionUpdateWithoutFacturaInput, tb_reparacionUncheckedUpdateWithoutFacturaInput>
    create: XOR<tb_reparacionCreateWithoutFacturaInput, tb_reparacionUncheckedCreateWithoutFacturaInput>
    where?: tb_reparacionWhereInput
  }

  export type tb_reparacionUpdateToOneWithWhereWithoutFacturaInput = {
    where?: tb_reparacionWhereInput
    data: XOR<tb_reparacionUpdateWithoutFacturaInput, tb_reparacionUncheckedUpdateWithoutFacturaInput>
  }

  export type tb_reparacionUpdateWithoutFacturaInput = {
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteUpdateOneWithoutReparacionesNestedInput
    tecnico?: tb_tecnicoUpdateOneWithoutReparacionesNestedInput
    equipo?: tb_equipoUpdateOneWithoutReparacionesNestedInput
    estados?: tb_estado_reparacionUpdateManyWithoutReparacionNestedInput
    detalles?: tb_detalle_reparacion_repuestoUpdateManyWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUpdateManyWithoutReparacionNestedInput
  }

  export type tb_reparacionUncheckedUpdateWithoutFacturaInput = {
    ID_Reparacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Equipo?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedUpdateManyWithoutReparacionNestedInput
    detalles?: tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUncheckedUpdateManyWithoutReparacionNestedInput
  }

  export type tb_clienteCreateWithoutTb_notificacionInput = {
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Direccion?: string | null
    equipos?: tb_equipoCreateNestedManyWithoutClienteInput
    reparaciones?: tb_reparacionCreateNestedManyWithoutClienteInput
    usuarios?: tb_usuarioCreateNestedManyWithoutClienteInput
  }

  export type tb_clienteUncheckedCreateWithoutTb_notificacionInput = {
    ID_Cliente?: number
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Direccion?: string | null
    equipos?: tb_equipoUncheckedCreateNestedManyWithoutClienteInput
    reparaciones?: tb_reparacionUncheckedCreateNestedManyWithoutClienteInput
    usuarios?: tb_usuarioUncheckedCreateNestedManyWithoutClienteInput
  }

  export type tb_clienteCreateOrConnectWithoutTb_notificacionInput = {
    where: tb_clienteWhereUniqueInput
    create: XOR<tb_clienteCreateWithoutTb_notificacionInput, tb_clienteUncheckedCreateWithoutTb_notificacionInput>
  }

  export type tb_reparacionCreateWithoutTb_notificacionInput = {
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteCreateNestedOneWithoutReparacionesInput
    tecnico?: tb_tecnicoCreateNestedOneWithoutReparacionesInput
    equipo?: tb_equipoCreateNestedOneWithoutReparacionesInput
    estados?: tb_estado_reparacionCreateNestedManyWithoutReparacionInput
    detalles?: tb_detalle_reparacion_repuestoCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaCreateNestedOneWithoutReparacionInput
  }

  export type tb_reparacionUncheckedCreateWithoutTb_notificacionInput = {
    ID_Reparacion?: number
    ID_Cliente?: number | null
    ID_Tecnico?: number | null
    ID_Equipo?: number | null
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedCreateNestedManyWithoutReparacionInput
    detalles?: tb_detalle_reparacion_repuestoUncheckedCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaUncheckedCreateNestedOneWithoutReparacionInput
  }

  export type tb_reparacionCreateOrConnectWithoutTb_notificacionInput = {
    where: tb_reparacionWhereUniqueInput
    create: XOR<tb_reparacionCreateWithoutTb_notificacionInput, tb_reparacionUncheckedCreateWithoutTb_notificacionInput>
  }

  export type tb_usuarioCreateWithoutNotificacionesInput = {
    Usuario_Name?: string | null
    Usuario_Password?: string | null
    Usuario_nivel?: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: boolean | null
    cliente?: tb_clienteCreateNestedOneWithoutUsuariosInput
    tecnico?: tb_tecnicoCreateNestedOneWithoutUsuariosInput
    estados_aprobados?: tb_estado_reparacionCreateNestedManyWithoutUsuario_aprobadorInput
  }

  export type tb_usuarioUncheckedCreateWithoutNotificacionesInput = {
    ID_Usuario?: number
    Usuario_Name?: string | null
    Usuario_Password?: string | null
    Usuario_nivel?: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: boolean | null
    ID_Cliente?: number | null
    ID_Tecnico?: number | null
    estados_aprobados?: tb_estado_reparacionUncheckedCreateNestedManyWithoutUsuario_aprobadorInput
  }

  export type tb_usuarioCreateOrConnectWithoutNotificacionesInput = {
    where: tb_usuarioWhereUniqueInput
    create: XOR<tb_usuarioCreateWithoutNotificacionesInput, tb_usuarioUncheckedCreateWithoutNotificacionesInput>
  }

  export type tb_clienteUpsertWithoutTb_notificacionInput = {
    update: XOR<tb_clienteUpdateWithoutTb_notificacionInput, tb_clienteUncheckedUpdateWithoutTb_notificacionInput>
    create: XOR<tb_clienteCreateWithoutTb_notificacionInput, tb_clienteUncheckedCreateWithoutTb_notificacionInput>
    where?: tb_clienteWhereInput
  }

  export type tb_clienteUpdateToOneWithWhereWithoutTb_notificacionInput = {
    where?: tb_clienteWhereInput
    data: XOR<tb_clienteUpdateWithoutTb_notificacionInput, tb_clienteUncheckedUpdateWithoutTb_notificacionInput>
  }

  export type tb_clienteUpdateWithoutTb_notificacionInput = {
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Direccion?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: tb_equipoUpdateManyWithoutClienteNestedInput
    reparaciones?: tb_reparacionUpdateManyWithoutClienteNestedInput
    usuarios?: tb_usuarioUpdateManyWithoutClienteNestedInput
  }

  export type tb_clienteUncheckedUpdateWithoutTb_notificacionInput = {
    ID_Cliente?: IntFieldUpdateOperationsInput | number
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Direccion?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: tb_equipoUncheckedUpdateManyWithoutClienteNestedInput
    reparaciones?: tb_reparacionUncheckedUpdateManyWithoutClienteNestedInput
    usuarios?: tb_usuarioUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type tb_reparacionUpsertWithoutTb_notificacionInput = {
    update: XOR<tb_reparacionUpdateWithoutTb_notificacionInput, tb_reparacionUncheckedUpdateWithoutTb_notificacionInput>
    create: XOR<tb_reparacionCreateWithoutTb_notificacionInput, tb_reparacionUncheckedCreateWithoutTb_notificacionInput>
    where?: tb_reparacionWhereInput
  }

  export type tb_reparacionUpdateToOneWithWhereWithoutTb_notificacionInput = {
    where?: tb_reparacionWhereInput
    data: XOR<tb_reparacionUpdateWithoutTb_notificacionInput, tb_reparacionUncheckedUpdateWithoutTb_notificacionInput>
  }

  export type tb_reparacionUpdateWithoutTb_notificacionInput = {
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteUpdateOneWithoutReparacionesNestedInput
    tecnico?: tb_tecnicoUpdateOneWithoutReparacionesNestedInput
    equipo?: tb_equipoUpdateOneWithoutReparacionesNestedInput
    estados?: tb_estado_reparacionUpdateManyWithoutReparacionNestedInput
    detalles?: tb_detalle_reparacion_repuestoUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUpdateOneWithoutReparacionNestedInput
  }

  export type tb_reparacionUncheckedUpdateWithoutTb_notificacionInput = {
    ID_Reparacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Equipo?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedUpdateManyWithoutReparacionNestedInput
    detalles?: tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUncheckedUpdateOneWithoutReparacionNestedInput
  }

  export type tb_usuarioUpsertWithoutNotificacionesInput = {
    update: XOR<tb_usuarioUpdateWithoutNotificacionesInput, tb_usuarioUncheckedUpdateWithoutNotificacionesInput>
    create: XOR<tb_usuarioCreateWithoutNotificacionesInput, tb_usuarioUncheckedCreateWithoutNotificacionesInput>
    where?: tb_usuarioWhereInput
  }

  export type tb_usuarioUpdateToOneWithWhereWithoutNotificacionesInput = {
    where?: tb_usuarioWhereInput
    data: XOR<tb_usuarioUpdateWithoutNotificacionesInput, tb_usuarioUncheckedUpdateWithoutNotificacionesInput>
  }

  export type tb_usuarioUpdateWithoutNotificacionesInput = {
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cliente?: tb_clienteUpdateOneWithoutUsuariosNestedInput
    tecnico?: tb_tecnicoUpdateOneWithoutUsuariosNestedInput
    estados_aprobados?: tb_estado_reparacionUpdateManyWithoutUsuario_aprobadorNestedInput
  }

  export type tb_usuarioUncheckedUpdateWithoutNotificacionesInput = {
    ID_Usuario?: IntFieldUpdateOperationsInput | number
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    estados_aprobados?: tb_estado_reparacionUncheckedUpdateManyWithoutUsuario_aprobadorNestedInput
  }

  export type tb_clienteCreateWithoutReparacionesInput = {
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Direccion?: string | null
    equipos?: tb_equipoCreateNestedManyWithoutClienteInput
    usuarios?: tb_usuarioCreateNestedManyWithoutClienteInput
    tb_notificacion?: tb_notificacionCreateNestedManyWithoutClienteInput
  }

  export type tb_clienteUncheckedCreateWithoutReparacionesInput = {
    ID_Cliente?: number
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Direccion?: string | null
    equipos?: tb_equipoUncheckedCreateNestedManyWithoutClienteInput
    usuarios?: tb_usuarioUncheckedCreateNestedManyWithoutClienteInput
    tb_notificacion?: tb_notificacionUncheckedCreateNestedManyWithoutClienteInput
  }

  export type tb_clienteCreateOrConnectWithoutReparacionesInput = {
    where: tb_clienteWhereUniqueInput
    create: XOR<tb_clienteCreateWithoutReparacionesInput, tb_clienteUncheckedCreateWithoutReparacionesInput>
  }

  export type tb_tecnicoCreateWithoutReparacionesInput = {
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Especialidad?: string | null
    usuarios?: tb_usuarioCreateNestedManyWithoutTecnicoInput
  }

  export type tb_tecnicoUncheckedCreateWithoutReparacionesInput = {
    ID_Tecnico?: number
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Especialidad?: string | null
    usuarios?: tb_usuarioUncheckedCreateNestedManyWithoutTecnicoInput
  }

  export type tb_tecnicoCreateOrConnectWithoutReparacionesInput = {
    where: tb_tecnicoWhereUniqueInput
    create: XOR<tb_tecnicoCreateWithoutReparacionesInput, tb_tecnicoUncheckedCreateWithoutReparacionesInput>
  }

  export type tb_equipoCreateWithoutReparacionesInput = {
    Nombre?: string | null
    Marca?: string | null
    Modelo?: string | null
    Descripcion_problema?: string | null
    Estado?: string | null
    cliente?: tb_clienteCreateNestedOneWithoutEquiposInput
  }

  export type tb_equipoUncheckedCreateWithoutReparacionesInput = {
    ID_Equipo?: number
    ID_Cliente?: number | null
    Nombre?: string | null
    Marca?: string | null
    Modelo?: string | null
    Descripcion_problema?: string | null
    Estado?: string | null
  }

  export type tb_equipoCreateOrConnectWithoutReparacionesInput = {
    where: tb_equipoWhereUniqueInput
    create: XOR<tb_equipoCreateWithoutReparacionesInput, tb_equipoUncheckedCreateWithoutReparacionesInput>
  }

  export type tb_estado_reparacionCreateWithoutReparacionInput = {
    FechaHora?: Date | string | null
    Estado?: string | null
    Descripcion?: string | null
    Requiere_Aprobacion?: boolean | null
    Aprobado?: boolean | null
    Fecha_Aprobacion?: Date | string | null
    usuario_aprobador?: tb_usuarioCreateNestedOneWithoutEstados_aprobadosInput
  }

  export type tb_estado_reparacionUncheckedCreateWithoutReparacionInput = {
    ID_Estado?: number
    FechaHora?: Date | string | null
    Estado?: string | null
    Descripcion?: string | null
    Requiere_Aprobacion?: boolean | null
    Aprobado?: boolean | null
    ID_Usuario_Aprobado?: number | null
    Fecha_Aprobacion?: Date | string | null
  }

  export type tb_estado_reparacionCreateOrConnectWithoutReparacionInput = {
    where: tb_estado_reparacionWhereUniqueInput
    create: XOR<tb_estado_reparacionCreateWithoutReparacionInput, tb_estado_reparacionUncheckedCreateWithoutReparacionInput>
  }

  export type tb_estado_reparacionCreateManyReparacionInputEnvelope = {
    data: tb_estado_reparacionCreateManyReparacionInput | tb_estado_reparacionCreateManyReparacionInput[]
    skipDuplicates?: boolean
  }

  export type tb_detalle_reparacion_repuestoCreateWithoutReparacionInput = {
    Cantidad?: number | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
    repuesto?: tb_repuestoCreateNestedOneWithoutDetallesInput
  }

  export type tb_detalle_reparacion_repuestoUncheckedCreateWithoutReparacionInput = {
    ID_Detalle?: number
    ID_Repuesto?: number | null
    Cantidad?: number | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type tb_detalle_reparacion_repuestoCreateOrConnectWithoutReparacionInput = {
    where: tb_detalle_reparacion_repuestoWhereUniqueInput
    create: XOR<tb_detalle_reparacion_repuestoCreateWithoutReparacionInput, tb_detalle_reparacion_repuestoUncheckedCreateWithoutReparacionInput>
  }

  export type tb_detalle_reparacion_repuestoCreateManyReparacionInputEnvelope = {
    data: tb_detalle_reparacion_repuestoCreateManyReparacionInput | tb_detalle_reparacion_repuestoCreateManyReparacionInput[]
    skipDuplicates?: boolean
  }

  export type tb_facturaCreateWithoutReparacionInput = {
    Fecha_Emision?: Date | string | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: string | null
    Estado?: string | null
  }

  export type tb_facturaUncheckedCreateWithoutReparacionInput = {
    ID_Factura?: number
    Fecha_Emision?: Date | string | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: string | null
    Estado?: string | null
  }

  export type tb_facturaCreateOrConnectWithoutReparacionInput = {
    where: tb_facturaWhereUniqueInput
    create: XOR<tb_facturaCreateWithoutReparacionInput, tb_facturaUncheckedCreateWithoutReparacionInput>
  }

  export type tb_notificacionCreateWithoutReparacionInput = {
    Mensaje?: string | null
    Fecha_Envio?: Date | string | null
    Enviado?: boolean | null
    Tipo?: string | null
    Tipo_Cambio?: string | null
    Aprobado?: boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
    cliente?: tb_clienteCreateNestedOneWithoutTb_notificacionInput
    usuario?: tb_usuarioCreateNestedOneWithoutNotificacionesInput
  }

  export type tb_notificacionUncheckedCreateWithoutReparacionInput = {
    ID_Notificacion?: number
    ID_Cliente?: number | null
    ID_Usuario?: number | null
    Mensaje?: string | null
    Fecha_Envio?: Date | string | null
    Enviado?: boolean | null
    Tipo?: string | null
    Tipo_Cambio?: string | null
    Aprobado?: boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_notificacionCreateOrConnectWithoutReparacionInput = {
    where: tb_notificacionWhereUniqueInput
    create: XOR<tb_notificacionCreateWithoutReparacionInput, tb_notificacionUncheckedCreateWithoutReparacionInput>
  }

  export type tb_notificacionCreateManyReparacionInputEnvelope = {
    data: tb_notificacionCreateManyReparacionInput | tb_notificacionCreateManyReparacionInput[]
    skipDuplicates?: boolean
  }

  export type tb_clienteUpsertWithoutReparacionesInput = {
    update: XOR<tb_clienteUpdateWithoutReparacionesInput, tb_clienteUncheckedUpdateWithoutReparacionesInput>
    create: XOR<tb_clienteCreateWithoutReparacionesInput, tb_clienteUncheckedCreateWithoutReparacionesInput>
    where?: tb_clienteWhereInput
  }

  export type tb_clienteUpdateToOneWithWhereWithoutReparacionesInput = {
    where?: tb_clienteWhereInput
    data: XOR<tb_clienteUpdateWithoutReparacionesInput, tb_clienteUncheckedUpdateWithoutReparacionesInput>
  }

  export type tb_clienteUpdateWithoutReparacionesInput = {
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Direccion?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: tb_equipoUpdateManyWithoutClienteNestedInput
    usuarios?: tb_usuarioUpdateManyWithoutClienteNestedInput
    tb_notificacion?: tb_notificacionUpdateManyWithoutClienteNestedInput
  }

  export type tb_clienteUncheckedUpdateWithoutReparacionesInput = {
    ID_Cliente?: IntFieldUpdateOperationsInput | number
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Direccion?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: tb_equipoUncheckedUpdateManyWithoutClienteNestedInput
    usuarios?: tb_usuarioUncheckedUpdateManyWithoutClienteNestedInput
    tb_notificacion?: tb_notificacionUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type tb_tecnicoUpsertWithoutReparacionesInput = {
    update: XOR<tb_tecnicoUpdateWithoutReparacionesInput, tb_tecnicoUncheckedUpdateWithoutReparacionesInput>
    create: XOR<tb_tecnicoCreateWithoutReparacionesInput, tb_tecnicoUncheckedCreateWithoutReparacionesInput>
    where?: tb_tecnicoWhereInput
  }

  export type tb_tecnicoUpdateToOneWithWhereWithoutReparacionesInput = {
    where?: tb_tecnicoWhereInput
    data: XOR<tb_tecnicoUpdateWithoutReparacionesInput, tb_tecnicoUncheckedUpdateWithoutReparacionesInput>
  }

  export type tb_tecnicoUpdateWithoutReparacionesInput = {
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: tb_usuarioUpdateManyWithoutTecnicoNestedInput
  }

  export type tb_tecnicoUncheckedUpdateWithoutReparacionesInput = {
    ID_Tecnico?: IntFieldUpdateOperationsInput | number
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    usuarios?: tb_usuarioUncheckedUpdateManyWithoutTecnicoNestedInput
  }

  export type tb_equipoUpsertWithoutReparacionesInput = {
    update: XOR<tb_equipoUpdateWithoutReparacionesInput, tb_equipoUncheckedUpdateWithoutReparacionesInput>
    create: XOR<tb_equipoCreateWithoutReparacionesInput, tb_equipoUncheckedCreateWithoutReparacionesInput>
    where?: tb_equipoWhereInput
  }

  export type tb_equipoUpdateToOneWithWhereWithoutReparacionesInput = {
    where?: tb_equipoWhereInput
    data: XOR<tb_equipoUpdateWithoutReparacionesInput, tb_equipoUncheckedUpdateWithoutReparacionesInput>
  }

  export type tb_equipoUpdateWithoutReparacionesInput = {
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Marca?: NullableStringFieldUpdateOperationsInput | string | null
    Modelo?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion_problema?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    cliente?: tb_clienteUpdateOneWithoutEquiposNestedInput
  }

  export type tb_equipoUncheckedUpdateWithoutReparacionesInput = {
    ID_Equipo?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Marca?: NullableStringFieldUpdateOperationsInput | string | null
    Modelo?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion_problema?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_estado_reparacionUpsertWithWhereUniqueWithoutReparacionInput = {
    where: tb_estado_reparacionWhereUniqueInput
    update: XOR<tb_estado_reparacionUpdateWithoutReparacionInput, tb_estado_reparacionUncheckedUpdateWithoutReparacionInput>
    create: XOR<tb_estado_reparacionCreateWithoutReparacionInput, tb_estado_reparacionUncheckedCreateWithoutReparacionInput>
  }

  export type tb_estado_reparacionUpdateWithWhereUniqueWithoutReparacionInput = {
    where: tb_estado_reparacionWhereUniqueInput
    data: XOR<tb_estado_reparacionUpdateWithoutReparacionInput, tb_estado_reparacionUncheckedUpdateWithoutReparacionInput>
  }

  export type tb_estado_reparacionUpdateManyWithWhereWithoutReparacionInput = {
    where: tb_estado_reparacionScalarWhereInput
    data: XOR<tb_estado_reparacionUpdateManyMutationInput, tb_estado_reparacionUncheckedUpdateManyWithoutReparacionInput>
  }

  export type tb_estado_reparacionScalarWhereInput = {
    AND?: tb_estado_reparacionScalarWhereInput | tb_estado_reparacionScalarWhereInput[]
    OR?: tb_estado_reparacionScalarWhereInput[]
    NOT?: tb_estado_reparacionScalarWhereInput | tb_estado_reparacionScalarWhereInput[]
    ID_Estado?: IntFilter<"tb_estado_reparacion"> | number
    ID_Reparacion?: IntNullableFilter<"tb_estado_reparacion"> | number | null
    FechaHora?: DateTimeNullableFilter<"tb_estado_reparacion"> | Date | string | null
    Estado?: StringNullableFilter<"tb_estado_reparacion"> | string | null
    Descripcion?: StringNullableFilter<"tb_estado_reparacion"> | string | null
    Requiere_Aprobacion?: BoolNullableFilter<"tb_estado_reparacion"> | boolean | null
    Aprobado?: BoolNullableFilter<"tb_estado_reparacion"> | boolean | null
    ID_Usuario_Aprobado?: IntNullableFilter<"tb_estado_reparacion"> | number | null
    Fecha_Aprobacion?: DateTimeNullableFilter<"tb_estado_reparacion"> | Date | string | null
  }

  export type tb_detalle_reparacion_repuestoUpsertWithWhereUniqueWithoutReparacionInput = {
    where: tb_detalle_reparacion_repuestoWhereUniqueInput
    update: XOR<tb_detalle_reparacion_repuestoUpdateWithoutReparacionInput, tb_detalle_reparacion_repuestoUncheckedUpdateWithoutReparacionInput>
    create: XOR<tb_detalle_reparacion_repuestoCreateWithoutReparacionInput, tb_detalle_reparacion_repuestoUncheckedCreateWithoutReparacionInput>
  }

  export type tb_detalle_reparacion_repuestoUpdateWithWhereUniqueWithoutReparacionInput = {
    where: tb_detalle_reparacion_repuestoWhereUniqueInput
    data: XOR<tb_detalle_reparacion_repuestoUpdateWithoutReparacionInput, tb_detalle_reparacion_repuestoUncheckedUpdateWithoutReparacionInput>
  }

  export type tb_detalle_reparacion_repuestoUpdateManyWithWhereWithoutReparacionInput = {
    where: tb_detalle_reparacion_repuestoScalarWhereInput
    data: XOR<tb_detalle_reparacion_repuestoUpdateManyMutationInput, tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutReparacionInput>
  }

  export type tb_detalle_reparacion_repuestoScalarWhereInput = {
    AND?: tb_detalle_reparacion_repuestoScalarWhereInput | tb_detalle_reparacion_repuestoScalarWhereInput[]
    OR?: tb_detalle_reparacion_repuestoScalarWhereInput[]
    NOT?: tb_detalle_reparacion_repuestoScalarWhereInput | tb_detalle_reparacion_repuestoScalarWhereInput[]
    ID_Detalle?: IntFilter<"tb_detalle_reparacion_repuesto"> | number
    ID_Reparacion?: IntNullableFilter<"tb_detalle_reparacion_repuesto"> | number | null
    ID_Repuesto?: IntNullableFilter<"tb_detalle_reparacion_repuesto"> | number | null
    Cantidad?: IntNullableFilter<"tb_detalle_reparacion_repuesto"> | number | null
    Subtotal?: DecimalNullableFilter<"tb_detalle_reparacion_repuesto"> | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_facturaUpsertWithoutReparacionInput = {
    update: XOR<tb_facturaUpdateWithoutReparacionInput, tb_facturaUncheckedUpdateWithoutReparacionInput>
    create: XOR<tb_facturaCreateWithoutReparacionInput, tb_facturaUncheckedCreateWithoutReparacionInput>
    where?: tb_facturaWhereInput
  }

  export type tb_facturaUpdateToOneWithWhereWithoutReparacionInput = {
    where?: tb_facturaWhereInput
    data: XOR<tb_facturaUpdateWithoutReparacionInput, tb_facturaUncheckedUpdateWithoutReparacionInput>
  }

  export type tb_facturaUpdateWithoutReparacionInput = {
    Fecha_Emision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_facturaUncheckedUpdateWithoutReparacionInput = {
    ID_Factura?: IntFieldUpdateOperationsInput | number
    Fecha_Emision?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Metodo_Pago?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_notificacionUpsertWithWhereUniqueWithoutReparacionInput = {
    where: tb_notificacionWhereUniqueInput
    update: XOR<tb_notificacionUpdateWithoutReparacionInput, tb_notificacionUncheckedUpdateWithoutReparacionInput>
    create: XOR<tb_notificacionCreateWithoutReparacionInput, tb_notificacionUncheckedCreateWithoutReparacionInput>
  }

  export type tb_notificacionUpdateWithWhereUniqueWithoutReparacionInput = {
    where: tb_notificacionWhereUniqueInput
    data: XOR<tb_notificacionUpdateWithoutReparacionInput, tb_notificacionUncheckedUpdateWithoutReparacionInput>
  }

  export type tb_notificacionUpdateManyWithWhereWithoutReparacionInput = {
    where: tb_notificacionScalarWhereInput
    data: XOR<tb_notificacionUpdateManyMutationInput, tb_notificacionUncheckedUpdateManyWithoutReparacionInput>
  }

  export type tb_detalle_reparacion_repuestoCreateWithoutRepuestoInput = {
    Cantidad?: number | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
    reparacion?: tb_reparacionCreateNestedOneWithoutDetallesInput
  }

  export type tb_detalle_reparacion_repuestoUncheckedCreateWithoutRepuestoInput = {
    ID_Detalle?: number
    ID_Reparacion?: number | null
    Cantidad?: number | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type tb_detalle_reparacion_repuestoCreateOrConnectWithoutRepuestoInput = {
    where: tb_detalle_reparacion_repuestoWhereUniqueInput
    create: XOR<tb_detalle_reparacion_repuestoCreateWithoutRepuestoInput, tb_detalle_reparacion_repuestoUncheckedCreateWithoutRepuestoInput>
  }

  export type tb_detalle_reparacion_repuestoCreateManyRepuestoInputEnvelope = {
    data: tb_detalle_reparacion_repuestoCreateManyRepuestoInput | tb_detalle_reparacion_repuestoCreateManyRepuestoInput[]
    skipDuplicates?: boolean
  }

  export type tb_detalle_reparacion_repuestoUpsertWithWhereUniqueWithoutRepuestoInput = {
    where: tb_detalle_reparacion_repuestoWhereUniqueInput
    update: XOR<tb_detalle_reparacion_repuestoUpdateWithoutRepuestoInput, tb_detalle_reparacion_repuestoUncheckedUpdateWithoutRepuestoInput>
    create: XOR<tb_detalle_reparacion_repuestoCreateWithoutRepuestoInput, tb_detalle_reparacion_repuestoUncheckedCreateWithoutRepuestoInput>
  }

  export type tb_detalle_reparacion_repuestoUpdateWithWhereUniqueWithoutRepuestoInput = {
    where: tb_detalle_reparacion_repuestoWhereUniqueInput
    data: XOR<tb_detalle_reparacion_repuestoUpdateWithoutRepuestoInput, tb_detalle_reparacion_repuestoUncheckedUpdateWithoutRepuestoInput>
  }

  export type tb_detalle_reparacion_repuestoUpdateManyWithWhereWithoutRepuestoInput = {
    where: tb_detalle_reparacion_repuestoScalarWhereInput
    data: XOR<tb_detalle_reparacion_repuestoUpdateManyMutationInput, tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutRepuestoInput>
  }

  export type tb_reparacionCreateWithoutTecnicoInput = {
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteCreateNestedOneWithoutReparacionesInput
    equipo?: tb_equipoCreateNestedOneWithoutReparacionesInput
    estados?: tb_estado_reparacionCreateNestedManyWithoutReparacionInput
    detalles?: tb_detalle_reparacion_repuestoCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaCreateNestedOneWithoutReparacionInput
    tb_notificacion?: tb_notificacionCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionUncheckedCreateWithoutTecnicoInput = {
    ID_Reparacion?: number
    ID_Cliente?: number | null
    ID_Equipo?: number | null
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedCreateNestedManyWithoutReparacionInput
    detalles?: tb_detalle_reparacion_repuestoUncheckedCreateNestedManyWithoutReparacionInput
    factura?: tb_facturaUncheckedCreateNestedOneWithoutReparacionInput
    tb_notificacion?: tb_notificacionUncheckedCreateNestedManyWithoutReparacionInput
  }

  export type tb_reparacionCreateOrConnectWithoutTecnicoInput = {
    where: tb_reparacionWhereUniqueInput
    create: XOR<tb_reparacionCreateWithoutTecnicoInput, tb_reparacionUncheckedCreateWithoutTecnicoInput>
  }

  export type tb_reparacionCreateManyTecnicoInputEnvelope = {
    data: tb_reparacionCreateManyTecnicoInput | tb_reparacionCreateManyTecnicoInput[]
    skipDuplicates?: boolean
  }

  export type tb_usuarioCreateWithoutTecnicoInput = {
    Usuario_Name?: string | null
    Usuario_Password?: string | null
    Usuario_nivel?: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: boolean | null
    cliente?: tb_clienteCreateNestedOneWithoutUsuariosInput
    notificaciones?: tb_notificacionCreateNestedManyWithoutUsuarioInput
    estados_aprobados?: tb_estado_reparacionCreateNestedManyWithoutUsuario_aprobadorInput
  }

  export type tb_usuarioUncheckedCreateWithoutTecnicoInput = {
    ID_Usuario?: number
    Usuario_Name?: string | null
    Usuario_Password?: string | null
    Usuario_nivel?: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: boolean | null
    ID_Cliente?: number | null
    notificaciones?: tb_notificacionUncheckedCreateNestedManyWithoutUsuarioInput
    estados_aprobados?: tb_estado_reparacionUncheckedCreateNestedManyWithoutUsuario_aprobadorInput
  }

  export type tb_usuarioCreateOrConnectWithoutTecnicoInput = {
    where: tb_usuarioWhereUniqueInput
    create: XOR<tb_usuarioCreateWithoutTecnicoInput, tb_usuarioUncheckedCreateWithoutTecnicoInput>
  }

  export type tb_usuarioCreateManyTecnicoInputEnvelope = {
    data: tb_usuarioCreateManyTecnicoInput | tb_usuarioCreateManyTecnicoInput[]
    skipDuplicates?: boolean
  }

  export type tb_reparacionUpsertWithWhereUniqueWithoutTecnicoInput = {
    where: tb_reparacionWhereUniqueInput
    update: XOR<tb_reparacionUpdateWithoutTecnicoInput, tb_reparacionUncheckedUpdateWithoutTecnicoInput>
    create: XOR<tb_reparacionCreateWithoutTecnicoInput, tb_reparacionUncheckedCreateWithoutTecnicoInput>
  }

  export type tb_reparacionUpdateWithWhereUniqueWithoutTecnicoInput = {
    where: tb_reparacionWhereUniqueInput
    data: XOR<tb_reparacionUpdateWithoutTecnicoInput, tb_reparacionUncheckedUpdateWithoutTecnicoInput>
  }

  export type tb_reparacionUpdateManyWithWhereWithoutTecnicoInput = {
    where: tb_reparacionScalarWhereInput
    data: XOR<tb_reparacionUpdateManyMutationInput, tb_reparacionUncheckedUpdateManyWithoutTecnicoInput>
  }

  export type tb_usuarioUpsertWithWhereUniqueWithoutTecnicoInput = {
    where: tb_usuarioWhereUniqueInput
    update: XOR<tb_usuarioUpdateWithoutTecnicoInput, tb_usuarioUncheckedUpdateWithoutTecnicoInput>
    create: XOR<tb_usuarioCreateWithoutTecnicoInput, tb_usuarioUncheckedCreateWithoutTecnicoInput>
  }

  export type tb_usuarioUpdateWithWhereUniqueWithoutTecnicoInput = {
    where: tb_usuarioWhereUniqueInput
    data: XOR<tb_usuarioUpdateWithoutTecnicoInput, tb_usuarioUncheckedUpdateWithoutTecnicoInput>
  }

  export type tb_usuarioUpdateManyWithWhereWithoutTecnicoInput = {
    where: tb_usuarioScalarWhereInput
    data: XOR<tb_usuarioUpdateManyMutationInput, tb_usuarioUncheckedUpdateManyWithoutTecnicoInput>
  }

  export type tb_clienteCreateWithoutUsuariosInput = {
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Direccion?: string | null
    equipos?: tb_equipoCreateNestedManyWithoutClienteInput
    reparaciones?: tb_reparacionCreateNestedManyWithoutClienteInput
    tb_notificacion?: tb_notificacionCreateNestedManyWithoutClienteInput
  }

  export type tb_clienteUncheckedCreateWithoutUsuariosInput = {
    ID_Cliente?: number
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Direccion?: string | null
    equipos?: tb_equipoUncheckedCreateNestedManyWithoutClienteInput
    reparaciones?: tb_reparacionUncheckedCreateNestedManyWithoutClienteInput
    tb_notificacion?: tb_notificacionUncheckedCreateNestedManyWithoutClienteInput
  }

  export type tb_clienteCreateOrConnectWithoutUsuariosInput = {
    where: tb_clienteWhereUniqueInput
    create: XOR<tb_clienteCreateWithoutUsuariosInput, tb_clienteUncheckedCreateWithoutUsuariosInput>
  }

  export type tb_tecnicoCreateWithoutUsuariosInput = {
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Especialidad?: string | null
    reparaciones?: tb_reparacionCreateNestedManyWithoutTecnicoInput
  }

  export type tb_tecnicoUncheckedCreateWithoutUsuariosInput = {
    ID_Tecnico?: number
    Cedula?: string | null
    Nombres?: string | null
    Apellidos?: string | null
    Telefono?: string | null
    Email?: string | null
    Especialidad?: string | null
    reparaciones?: tb_reparacionUncheckedCreateNestedManyWithoutTecnicoInput
  }

  export type tb_tecnicoCreateOrConnectWithoutUsuariosInput = {
    where: tb_tecnicoWhereUniqueInput
    create: XOR<tb_tecnicoCreateWithoutUsuariosInput, tb_tecnicoUncheckedCreateWithoutUsuariosInput>
  }

  export type tb_notificacionCreateWithoutUsuarioInput = {
    Mensaje?: string | null
    Fecha_Envio?: Date | string | null
    Enviado?: boolean | null
    Tipo?: string | null
    Tipo_Cambio?: string | null
    Aprobado?: boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
    cliente?: tb_clienteCreateNestedOneWithoutTb_notificacionInput
    reparacion?: tb_reparacionCreateNestedOneWithoutTb_notificacionInput
  }

  export type tb_notificacionUncheckedCreateWithoutUsuarioInput = {
    ID_Notificacion?: number
    ID_Cliente?: number | null
    ID_Reparacion?: number | null
    Mensaje?: string | null
    Fecha_Envio?: Date | string | null
    Enviado?: boolean | null
    Tipo?: string | null
    Tipo_Cambio?: string | null
    Aprobado?: boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_notificacionCreateOrConnectWithoutUsuarioInput = {
    where: tb_notificacionWhereUniqueInput
    create: XOR<tb_notificacionCreateWithoutUsuarioInput, tb_notificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type tb_notificacionCreateManyUsuarioInputEnvelope = {
    data: tb_notificacionCreateManyUsuarioInput | tb_notificacionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type tb_estado_reparacionCreateWithoutUsuario_aprobadorInput = {
    FechaHora?: Date | string | null
    Estado?: string | null
    Descripcion?: string | null
    Requiere_Aprobacion?: boolean | null
    Aprobado?: boolean | null
    Fecha_Aprobacion?: Date | string | null
    reparacion?: tb_reparacionCreateNestedOneWithoutEstadosInput
  }

  export type tb_estado_reparacionUncheckedCreateWithoutUsuario_aprobadorInput = {
    ID_Estado?: number
    ID_Reparacion?: number | null
    FechaHora?: Date | string | null
    Estado?: string | null
    Descripcion?: string | null
    Requiere_Aprobacion?: boolean | null
    Aprobado?: boolean | null
    Fecha_Aprobacion?: Date | string | null
  }

  export type tb_estado_reparacionCreateOrConnectWithoutUsuario_aprobadorInput = {
    where: tb_estado_reparacionWhereUniqueInput
    create: XOR<tb_estado_reparacionCreateWithoutUsuario_aprobadorInput, tb_estado_reparacionUncheckedCreateWithoutUsuario_aprobadorInput>
  }

  export type tb_estado_reparacionCreateManyUsuario_aprobadorInputEnvelope = {
    data: tb_estado_reparacionCreateManyUsuario_aprobadorInput | tb_estado_reparacionCreateManyUsuario_aprobadorInput[]
    skipDuplicates?: boolean
  }

  export type tb_clienteUpsertWithoutUsuariosInput = {
    update: XOR<tb_clienteUpdateWithoutUsuariosInput, tb_clienteUncheckedUpdateWithoutUsuariosInput>
    create: XOR<tb_clienteCreateWithoutUsuariosInput, tb_clienteUncheckedCreateWithoutUsuariosInput>
    where?: tb_clienteWhereInput
  }

  export type tb_clienteUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: tb_clienteWhereInput
    data: XOR<tb_clienteUpdateWithoutUsuariosInput, tb_clienteUncheckedUpdateWithoutUsuariosInput>
  }

  export type tb_clienteUpdateWithoutUsuariosInput = {
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Direccion?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: tb_equipoUpdateManyWithoutClienteNestedInput
    reparaciones?: tb_reparacionUpdateManyWithoutClienteNestedInput
    tb_notificacion?: tb_notificacionUpdateManyWithoutClienteNestedInput
  }

  export type tb_clienteUncheckedUpdateWithoutUsuariosInput = {
    ID_Cliente?: IntFieldUpdateOperationsInput | number
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Direccion?: NullableStringFieldUpdateOperationsInput | string | null
    equipos?: tb_equipoUncheckedUpdateManyWithoutClienteNestedInput
    reparaciones?: tb_reparacionUncheckedUpdateManyWithoutClienteNestedInput
    tb_notificacion?: tb_notificacionUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type tb_tecnicoUpsertWithoutUsuariosInput = {
    update: XOR<tb_tecnicoUpdateWithoutUsuariosInput, tb_tecnicoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<tb_tecnicoCreateWithoutUsuariosInput, tb_tecnicoUncheckedCreateWithoutUsuariosInput>
    where?: tb_tecnicoWhereInput
  }

  export type tb_tecnicoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: tb_tecnicoWhereInput
    data: XOR<tb_tecnicoUpdateWithoutUsuariosInput, tb_tecnicoUncheckedUpdateWithoutUsuariosInput>
  }

  export type tb_tecnicoUpdateWithoutUsuariosInput = {
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    reparaciones?: tb_reparacionUpdateManyWithoutTecnicoNestedInput
  }

  export type tb_tecnicoUncheckedUpdateWithoutUsuariosInput = {
    ID_Tecnico?: IntFieldUpdateOperationsInput | number
    Cedula?: NullableStringFieldUpdateOperationsInput | string | null
    Nombres?: NullableStringFieldUpdateOperationsInput | string | null
    Apellidos?: NullableStringFieldUpdateOperationsInput | string | null
    Telefono?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Especialidad?: NullableStringFieldUpdateOperationsInput | string | null
    reparaciones?: tb_reparacionUncheckedUpdateManyWithoutTecnicoNestedInput
  }

  export type tb_notificacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: tb_notificacionWhereUniqueInput
    update: XOR<tb_notificacionUpdateWithoutUsuarioInput, tb_notificacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<tb_notificacionCreateWithoutUsuarioInput, tb_notificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type tb_notificacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: tb_notificacionWhereUniqueInput
    data: XOR<tb_notificacionUpdateWithoutUsuarioInput, tb_notificacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type tb_notificacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: tb_notificacionScalarWhereInput
    data: XOR<tb_notificacionUpdateManyMutationInput, tb_notificacionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type tb_estado_reparacionUpsertWithWhereUniqueWithoutUsuario_aprobadorInput = {
    where: tb_estado_reparacionWhereUniqueInput
    update: XOR<tb_estado_reparacionUpdateWithoutUsuario_aprobadorInput, tb_estado_reparacionUncheckedUpdateWithoutUsuario_aprobadorInput>
    create: XOR<tb_estado_reparacionCreateWithoutUsuario_aprobadorInput, tb_estado_reparacionUncheckedCreateWithoutUsuario_aprobadorInput>
  }

  export type tb_estado_reparacionUpdateWithWhereUniqueWithoutUsuario_aprobadorInput = {
    where: tb_estado_reparacionWhereUniqueInput
    data: XOR<tb_estado_reparacionUpdateWithoutUsuario_aprobadorInput, tb_estado_reparacionUncheckedUpdateWithoutUsuario_aprobadorInput>
  }

  export type tb_estado_reparacionUpdateManyWithWhereWithoutUsuario_aprobadorInput = {
    where: tb_estado_reparacionScalarWhereInput
    data: XOR<tb_estado_reparacionUpdateManyMutationInput, tb_estado_reparacionUncheckedUpdateManyWithoutUsuario_aprobadorInput>
  }

  export type tb_equipoCreateManyClienteInput = {
    ID_Equipo?: number
    Nombre?: string | null
    Marca?: string | null
    Modelo?: string | null
    Descripcion_problema?: string | null
    Estado?: string | null
  }

  export type tb_reparacionCreateManyClienteInput = {
    ID_Reparacion?: number
    ID_Tecnico?: number | null
    ID_Equipo?: number | null
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
  }

  export type tb_usuarioCreateManyClienteInput = {
    ID_Usuario?: number
    Usuario_Name?: string | null
    Usuario_Password?: string | null
    Usuario_nivel?: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: boolean | null
    ID_Tecnico?: number | null
  }

  export type tb_notificacionCreateManyClienteInput = {
    ID_Notificacion?: number
    ID_Reparacion?: number | null
    ID_Usuario?: number | null
    Mensaje?: string | null
    Fecha_Envio?: Date | string | null
    Enviado?: boolean | null
    Tipo?: string | null
    Tipo_Cambio?: string | null
    Aprobado?: boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_equipoUpdateWithoutClienteInput = {
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Marca?: NullableStringFieldUpdateOperationsInput | string | null
    Modelo?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion_problema?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    reparaciones?: tb_reparacionUpdateManyWithoutEquipoNestedInput
  }

  export type tb_equipoUncheckedUpdateWithoutClienteInput = {
    ID_Equipo?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Marca?: NullableStringFieldUpdateOperationsInput | string | null
    Modelo?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion_problema?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    reparaciones?: tb_reparacionUncheckedUpdateManyWithoutEquipoNestedInput
  }

  export type tb_equipoUncheckedUpdateManyWithoutClienteInput = {
    ID_Equipo?: IntFieldUpdateOperationsInput | number
    Nombre?: NullableStringFieldUpdateOperationsInput | string | null
    Marca?: NullableStringFieldUpdateOperationsInput | string | null
    Modelo?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion_problema?: NullableStringFieldUpdateOperationsInput | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_reparacionUpdateWithoutClienteInput = {
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tecnico?: tb_tecnicoUpdateOneWithoutReparacionesNestedInput
    equipo?: tb_equipoUpdateOneWithoutReparacionesNestedInput
    estados?: tb_estado_reparacionUpdateManyWithoutReparacionNestedInput
    detalles?: tb_detalle_reparacion_repuestoUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUpdateOneWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUpdateManyWithoutReparacionNestedInput
  }

  export type tb_reparacionUncheckedUpdateWithoutClienteInput = {
    ID_Reparacion?: IntFieldUpdateOperationsInput | number
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Equipo?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedUpdateManyWithoutReparacionNestedInput
    detalles?: tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUncheckedUpdateOneWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUncheckedUpdateManyWithoutReparacionNestedInput
  }

  export type tb_reparacionUncheckedUpdateManyWithoutClienteInput = {
    ID_Reparacion?: IntFieldUpdateOperationsInput | number
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Equipo?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_usuarioUpdateWithoutClienteInput = {
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tecnico?: tb_tecnicoUpdateOneWithoutUsuariosNestedInput
    notificaciones?: tb_notificacionUpdateManyWithoutUsuarioNestedInput
    estados_aprobados?: tb_estado_reparacionUpdateManyWithoutUsuario_aprobadorNestedInput
  }

  export type tb_usuarioUncheckedUpdateWithoutClienteInput = {
    ID_Usuario?: IntFieldUpdateOperationsInput | number
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    notificaciones?: tb_notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    estados_aprobados?: tb_estado_reparacionUncheckedUpdateManyWithoutUsuario_aprobadorNestedInput
  }

  export type tb_usuarioUncheckedUpdateManyWithoutClienteInput = {
    ID_Usuario?: IntFieldUpdateOperationsInput | number
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_notificacionUpdateWithoutClienteInput = {
    Mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    Fecha_Envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enviado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tipo?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Cambio?: NullableStringFieldUpdateOperationsInput | string | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
    reparacion?: tb_reparacionUpdateOneWithoutTb_notificacionNestedInput
    usuario?: tb_usuarioUpdateOneWithoutNotificacionesNestedInput
  }

  export type tb_notificacionUncheckedUpdateWithoutClienteInput = {
    ID_Notificacion?: IntFieldUpdateOperationsInput | number
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Usuario?: NullableIntFieldUpdateOperationsInput | number | null
    Mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    Fecha_Envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enviado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tipo?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Cambio?: NullableStringFieldUpdateOperationsInput | string | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_notificacionUncheckedUpdateManyWithoutClienteInput = {
    ID_Notificacion?: IntFieldUpdateOperationsInput | number
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Usuario?: NullableIntFieldUpdateOperationsInput | number | null
    Mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    Fecha_Envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enviado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tipo?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Cambio?: NullableStringFieldUpdateOperationsInput | string | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_reparacionCreateManyEquipoInput = {
    ID_Reparacion?: number
    ID_Cliente?: number | null
    ID_Tecnico?: number | null
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
  }

  export type tb_reparacionUpdateWithoutEquipoInput = {
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteUpdateOneWithoutReparacionesNestedInput
    tecnico?: tb_tecnicoUpdateOneWithoutReparacionesNestedInput
    estados?: tb_estado_reparacionUpdateManyWithoutReparacionNestedInput
    detalles?: tb_detalle_reparacion_repuestoUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUpdateOneWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUpdateManyWithoutReparacionNestedInput
  }

  export type tb_reparacionUncheckedUpdateWithoutEquipoInput = {
    ID_Reparacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedUpdateManyWithoutReparacionNestedInput
    detalles?: tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUncheckedUpdateOneWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUncheckedUpdateManyWithoutReparacionNestedInput
  }

  export type tb_reparacionUncheckedUpdateManyWithoutEquipoInput = {
    ID_Reparacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Tecnico?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_estado_reparacionCreateManyReparacionInput = {
    ID_Estado?: number
    FechaHora?: Date | string | null
    Estado?: string | null
    Descripcion?: string | null
    Requiere_Aprobacion?: boolean | null
    Aprobado?: boolean | null
    ID_Usuario_Aprobado?: number | null
    Fecha_Aprobacion?: Date | string | null
  }

  export type tb_detalle_reparacion_repuestoCreateManyReparacionInput = {
    ID_Detalle?: number
    ID_Repuesto?: number | null
    Cantidad?: number | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type tb_notificacionCreateManyReparacionInput = {
    ID_Notificacion?: number
    ID_Cliente?: number | null
    ID_Usuario?: number | null
    Mensaje?: string | null
    Fecha_Envio?: Date | string | null
    Enviado?: boolean | null
    Tipo?: string | null
    Tipo_Cambio?: string | null
    Aprobado?: boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_estado_reparacionUpdateWithoutReparacionInput = {
    FechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Requiere_Aprobacion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Fecha_Aprobacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_aprobador?: tb_usuarioUpdateOneWithoutEstados_aprobadosNestedInput
  }

  export type tb_estado_reparacionUncheckedUpdateWithoutReparacionInput = {
    ID_Estado?: IntFieldUpdateOperationsInput | number
    FechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Requiere_Aprobacion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Usuario_Aprobado?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Aprobacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_estado_reparacionUncheckedUpdateManyWithoutReparacionInput = {
    ID_Estado?: IntFieldUpdateOperationsInput | number
    FechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Requiere_Aprobacion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Usuario_Aprobado?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Aprobacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_detalle_reparacion_repuestoUpdateWithoutReparacionInput = {
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    repuesto?: tb_repuestoUpdateOneWithoutDetallesNestedInput
  }

  export type tb_detalle_reparacion_repuestoUncheckedUpdateWithoutReparacionInput = {
    ID_Detalle?: IntFieldUpdateOperationsInput | number
    ID_Repuesto?: NullableIntFieldUpdateOperationsInput | number | null
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutReparacionInput = {
    ID_Detalle?: IntFieldUpdateOperationsInput | number
    ID_Repuesto?: NullableIntFieldUpdateOperationsInput | number | null
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_notificacionUpdateWithoutReparacionInput = {
    Mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    Fecha_Envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enviado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tipo?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Cambio?: NullableStringFieldUpdateOperationsInput | string | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
    cliente?: tb_clienteUpdateOneWithoutTb_notificacionNestedInput
    usuario?: tb_usuarioUpdateOneWithoutNotificacionesNestedInput
  }

  export type tb_notificacionUncheckedUpdateWithoutReparacionInput = {
    ID_Notificacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Usuario?: NullableIntFieldUpdateOperationsInput | number | null
    Mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    Fecha_Envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enviado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tipo?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Cambio?: NullableStringFieldUpdateOperationsInput | string | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_notificacionUncheckedUpdateManyWithoutReparacionInput = {
    ID_Notificacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Usuario?: NullableIntFieldUpdateOperationsInput | number | null
    Mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    Fecha_Envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enviado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tipo?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Cambio?: NullableStringFieldUpdateOperationsInput | string | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_detalle_reparacion_repuestoCreateManyRepuestoInput = {
    ID_Detalle?: number
    ID_Reparacion?: number | null
    Cantidad?: number | null
    Subtotal?: Decimal | DecimalJsLike | number | string | null
  }

  export type tb_detalle_reparacion_repuestoUpdateWithoutRepuestoInput = {
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    reparacion?: tb_reparacionUpdateOneWithoutDetallesNestedInput
  }

  export type tb_detalle_reparacion_repuestoUncheckedUpdateWithoutRepuestoInput = {
    ID_Detalle?: IntFieldUpdateOperationsInput | number
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutRepuestoInput = {
    ID_Detalle?: IntFieldUpdateOperationsInput | number
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    Cantidad?: NullableIntFieldUpdateOperationsInput | number | null
    Subtotal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_reparacionCreateManyTecnicoInput = {
    ID_Reparacion?: number
    ID_Cliente?: number | null
    ID_Equipo?: number | null
    Fecha_Ingreso?: Date | string | null
    Fecha_Entrega?: Date | string | null
    CostoServicio?: Decimal | DecimalJsLike | number | string | null
    IVA?: Decimal | DecimalJsLike | number | string | null
    Total?: Decimal | DecimalJsLike | number | string | null
  }

  export type tb_usuarioCreateManyTecnicoInput = {
    ID_Usuario?: number
    Usuario_Name?: string | null
    Usuario_Password?: string | null
    Usuario_nivel?: $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: boolean | null
    ID_Cliente?: number | null
  }

  export type tb_reparacionUpdateWithoutTecnicoInput = {
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cliente?: tb_clienteUpdateOneWithoutReparacionesNestedInput
    equipo?: tb_equipoUpdateOneWithoutReparacionesNestedInput
    estados?: tb_estado_reparacionUpdateManyWithoutReparacionNestedInput
    detalles?: tb_detalle_reparacion_repuestoUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUpdateOneWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUpdateManyWithoutReparacionNestedInput
  }

  export type tb_reparacionUncheckedUpdateWithoutTecnicoInput = {
    ID_Reparacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Equipo?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estados?: tb_estado_reparacionUncheckedUpdateManyWithoutReparacionNestedInput
    detalles?: tb_detalle_reparacion_repuestoUncheckedUpdateManyWithoutReparacionNestedInput
    factura?: tb_facturaUncheckedUpdateOneWithoutReparacionNestedInput
    tb_notificacion?: tb_notificacionUncheckedUpdateManyWithoutReparacionNestedInput
  }

  export type tb_reparacionUncheckedUpdateManyWithoutTecnicoInput = {
    ID_Reparacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Equipo?: NullableIntFieldUpdateOperationsInput | number | null
    Fecha_Ingreso?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fecha_Entrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CostoServicio?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IVA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Total?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type tb_usuarioUpdateWithoutTecnicoInput = {
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cliente?: tb_clienteUpdateOneWithoutUsuariosNestedInput
    notificaciones?: tb_notificacionUpdateManyWithoutUsuarioNestedInput
    estados_aprobados?: tb_estado_reparacionUpdateManyWithoutUsuario_aprobadorNestedInput
  }

  export type tb_usuarioUncheckedUpdateWithoutTecnicoInput = {
    ID_Usuario?: IntFieldUpdateOperationsInput | number
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    notificaciones?: tb_notificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    estados_aprobados?: tb_estado_reparacionUncheckedUpdateManyWithoutUsuario_aprobadorNestedInput
  }

  export type tb_usuarioUncheckedUpdateManyWithoutTecnicoInput = {
    ID_Usuario?: IntFieldUpdateOperationsInput | number
    Usuario_Name?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_Password?: NullableStringFieldUpdateOperationsInput | string | null
    Usuario_nivel?: NullableEnumtb_usuario_Usuario_nivelFieldUpdateOperationsInput | $Enums.tb_usuario_Usuario_nivel | null
    Usuario_activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_notificacionCreateManyUsuarioInput = {
    ID_Notificacion?: number
    ID_Cliente?: number | null
    ID_Reparacion?: number | null
    Mensaje?: string | null
    Fecha_Envio?: Date | string | null
    Enviado?: boolean | null
    Tipo?: string | null
    Tipo_Cambio?: string | null
    Aprobado?: boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_estado_reparacionCreateManyUsuario_aprobadorInput = {
    ID_Estado?: number
    ID_Reparacion?: number | null
    FechaHora?: Date | string | null
    Estado?: string | null
    Descripcion?: string | null
    Requiere_Aprobacion?: boolean | null
    Aprobado?: boolean | null
    Fecha_Aprobacion?: Date | string | null
  }

  export type tb_notificacionUpdateWithoutUsuarioInput = {
    Mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    Fecha_Envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enviado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tipo?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Cambio?: NullableStringFieldUpdateOperationsInput | string | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
    cliente?: tb_clienteUpdateOneWithoutTb_notificacionNestedInput
    reparacion?: tb_reparacionUpdateOneWithoutTb_notificacionNestedInput
  }

  export type tb_notificacionUncheckedUpdateWithoutUsuarioInput = {
    ID_Notificacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    Mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    Fecha_Envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enviado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tipo?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Cambio?: NullableStringFieldUpdateOperationsInput | string | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_notificacionUncheckedUpdateManyWithoutUsuarioInput = {
    ID_Notificacion?: IntFieldUpdateOperationsInput | number
    ID_Cliente?: NullableIntFieldUpdateOperationsInput | number | null
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    Mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    Fecha_Envio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Enviado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Tipo?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Cambio?: NullableStringFieldUpdateOperationsInput | string | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Datos_Cambio?: NullableJsonNullValueInput | InputJsonValue
  }

  export type tb_estado_reparacionUpdateWithoutUsuario_aprobadorInput = {
    FechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Requiere_Aprobacion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Fecha_Aprobacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reparacion?: tb_reparacionUpdateOneWithoutEstadosNestedInput
  }

  export type tb_estado_reparacionUncheckedUpdateWithoutUsuario_aprobadorInput = {
    ID_Estado?: IntFieldUpdateOperationsInput | number
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    FechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Requiere_Aprobacion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Fecha_Aprobacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tb_estado_reparacionUncheckedUpdateManyWithoutUsuario_aprobadorInput = {
    ID_Estado?: IntFieldUpdateOperationsInput | number
    ID_Reparacion?: NullableIntFieldUpdateOperationsInput | number | null
    FechaHora?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Estado?: NullableStringFieldUpdateOperationsInput | string | null
    Descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    Requiere_Aprobacion?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Aprobado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    Fecha_Aprobacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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