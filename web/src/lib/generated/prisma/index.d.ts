
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
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model SmtpAccount
 * 
 */
export type SmtpAccount = $Result.DefaultSelection<Prisma.$SmtpAccountPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Integration
 * 
 */
export type Integration = $Result.DefaultSelection<Prisma.$IntegrationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>
/**
 * Model WorkflowExecution
 * 
 */
export type WorkflowExecution = $Result.DefaultSelection<Prisma.$WorkflowExecutionPayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model WhatsAppInstance
 * 
 */
export type WhatsAppInstance = $Result.DefaultSelection<Prisma.$WhatsAppInstancePayload>
/**
 * Model AttendanceQueue
 * 
 */
export type AttendanceQueue = $Result.DefaultSelection<Prisma.$AttendanceQueuePayload>
/**
 * Model QueueAgent
 * 
 */
export type QueueAgent = $Result.DefaultSelection<Prisma.$QueueAgentPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Audience
 * 
 */
export type Audience = $Result.DefaultSelection<Prisma.$AudiencePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
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
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs>;

  /**
   * `prisma.smtpAccount`: Exposes CRUD operations for the **SmtpAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SmtpAccounts
    * const smtpAccounts = await prisma.smtpAccount.findMany()
    * ```
    */
  get smtpAccount(): Prisma.SmtpAccountDelegate<ExtArgs>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs>;

  /**
   * `prisma.integration`: Exposes CRUD operations for the **Integration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Integrations
    * const integrations = await prisma.integration.findMany()
    * ```
    */
  get integration(): Prisma.IntegrationDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs>;

  /**
   * `prisma.workflowExecution`: Exposes CRUD operations for the **WorkflowExecution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowExecutions
    * const workflowExecutions = await prisma.workflowExecution.findMany()
    * ```
    */
  get workflowExecution(): Prisma.WorkflowExecutionDelegate<ExtArgs>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs>;

  /**
   * `prisma.whatsAppInstance`: Exposes CRUD operations for the **WhatsAppInstance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhatsAppInstances
    * const whatsAppInstances = await prisma.whatsAppInstance.findMany()
    * ```
    */
  get whatsAppInstance(): Prisma.WhatsAppInstanceDelegate<ExtArgs>;

  /**
   * `prisma.attendanceQueue`: Exposes CRUD operations for the **AttendanceQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttendanceQueues
    * const attendanceQueues = await prisma.attendanceQueue.findMany()
    * ```
    */
  get attendanceQueue(): Prisma.AttendanceQueueDelegate<ExtArgs>;

  /**
   * `prisma.queueAgent`: Exposes CRUD operations for the **QueueAgent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QueueAgents
    * const queueAgents = await prisma.queueAgent.findMany()
    * ```
    */
  get queueAgent(): Prisma.QueueAgentDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs>;

  /**
   * `prisma.audience`: Exposes CRUD operations for the **Audience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audiences
    * const audiences = await prisma.audience.findMany()
    * ```
    */
  get audience(): Prisma.AudienceDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Tenant: 'Tenant',
    Campaign: 'Campaign',
    SmtpAccount: 'SmtpAccount',
    Subscription: 'Subscription',
    Plan: 'Plan',
    Integration: 'Integration',
    User: 'User',
    Workflow: 'Workflow',
    WorkflowExecution: 'WorkflowExecution',
    Lead: 'Lead',
    WhatsAppInstance: 'WhatsAppInstance',
    AttendanceQueue: 'AttendanceQueue',
    QueueAgent: 'QueueAgent',
    Tag: 'Tag',
    Audience: 'Audience'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "tenant" | "campaign" | "smtpAccount" | "subscription" | "plan" | "integration" | "user" | "workflow" | "workflowExecution" | "lead" | "whatsAppInstance" | "attendanceQueue" | "queueAgent" | "tag" | "audience"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      SmtpAccount: {
        payload: Prisma.$SmtpAccountPayload<ExtArgs>
        fields: Prisma.SmtpAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SmtpAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmtpAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SmtpAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmtpAccountPayload>
          }
          findFirst: {
            args: Prisma.SmtpAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmtpAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SmtpAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmtpAccountPayload>
          }
          findMany: {
            args: Prisma.SmtpAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmtpAccountPayload>[]
          }
          create: {
            args: Prisma.SmtpAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmtpAccountPayload>
          }
          createMany: {
            args: Prisma.SmtpAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SmtpAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmtpAccountPayload>[]
          }
          delete: {
            args: Prisma.SmtpAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmtpAccountPayload>
          }
          update: {
            args: Prisma.SmtpAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmtpAccountPayload>
          }
          deleteMany: {
            args: Prisma.SmtpAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SmtpAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SmtpAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SmtpAccountPayload>
          }
          aggregate: {
            args: Prisma.SmtpAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSmtpAccount>
          }
          groupBy: {
            args: Prisma.SmtpAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<SmtpAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.SmtpAccountCountArgs<ExtArgs>
            result: $Utils.Optional<SmtpAccountCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Integration: {
        payload: Prisma.$IntegrationPayload<ExtArgs>
        fields: Prisma.IntegrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          findFirst: {
            args: Prisma.IntegrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          findMany: {
            args: Prisma.IntegrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[]
          }
          create: {
            args: Prisma.IntegrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          createMany: {
            args: Prisma.IntegrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegrationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>[]
          }
          delete: {
            args: Prisma.IntegrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          update: {
            args: Prisma.IntegrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IntegrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationPayload>
          }
          aggregate: {
            args: Prisma.IntegrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegration>
          }
          groupBy: {
            args: Prisma.IntegrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationCountAggregateOutputType> | number
          }
        }
      }
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
      Workflow: {
        payload: Prisma.$WorkflowPayload<ExtArgs>
        fields: Prisma.WorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findFirst: {
            args: Prisma.WorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findMany: {
            args: Prisma.WorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          create: {
            args: Prisma.WorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          createMany: {
            args: Prisma.WorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          delete: {
            args: Prisma.WorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          update: {
            args: Prisma.WorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.WorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      WorkflowExecution: {
        payload: Prisma.$WorkflowExecutionPayload<ExtArgs>
        fields: Prisma.WorkflowExecutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowExecutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowExecutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>
          }
          findFirst: {
            args: Prisma.WorkflowExecutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowExecutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>
          }
          findMany: {
            args: Prisma.WorkflowExecutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>[]
          }
          create: {
            args: Prisma.WorkflowExecutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>
          }
          createMany: {
            args: Prisma.WorkflowExecutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowExecutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>[]
          }
          delete: {
            args: Prisma.WorkflowExecutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>
          }
          update: {
            args: Prisma.WorkflowExecutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowExecutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowExecutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkflowExecutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowExecutionPayload>
          }
          aggregate: {
            args: Prisma.WorkflowExecutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowExecution>
          }
          groupBy: {
            args: Prisma.WorkflowExecutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowExecutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowExecutionCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowExecutionCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      WhatsAppInstance: {
        payload: Prisma.$WhatsAppInstancePayload<ExtArgs>
        fields: Prisma.WhatsAppInstanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhatsAppInstanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhatsAppInstanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>
          }
          findFirst: {
            args: Prisma.WhatsAppInstanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhatsAppInstanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>
          }
          findMany: {
            args: Prisma.WhatsAppInstanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>[]
          }
          create: {
            args: Prisma.WhatsAppInstanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>
          }
          createMany: {
            args: Prisma.WhatsAppInstanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhatsAppInstanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>[]
          }
          delete: {
            args: Prisma.WhatsAppInstanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>
          }
          update: {
            args: Prisma.WhatsAppInstanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>
          }
          deleteMany: {
            args: Prisma.WhatsAppInstanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhatsAppInstanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WhatsAppInstanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhatsAppInstancePayload>
          }
          aggregate: {
            args: Prisma.WhatsAppInstanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhatsAppInstance>
          }
          groupBy: {
            args: Prisma.WhatsAppInstanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppInstanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhatsAppInstanceCountArgs<ExtArgs>
            result: $Utils.Optional<WhatsAppInstanceCountAggregateOutputType> | number
          }
        }
      }
      AttendanceQueue: {
        payload: Prisma.$AttendanceQueuePayload<ExtArgs>
        fields: Prisma.AttendanceQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceQueuePayload>
          }
          findFirst: {
            args: Prisma.AttendanceQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceQueuePayload>
          }
          findMany: {
            args: Prisma.AttendanceQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceQueuePayload>[]
          }
          create: {
            args: Prisma.AttendanceQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceQueuePayload>
          }
          createMany: {
            args: Prisma.AttendanceQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceQueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceQueuePayload>[]
          }
          delete: {
            args: Prisma.AttendanceQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceQueuePayload>
          }
          update: {
            args: Prisma.AttendanceQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceQueuePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendanceQueuePayload>
          }
          aggregate: {
            args: Prisma.AttendanceQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendanceQueue>
          }
          groupBy: {
            args: Prisma.AttendanceQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceQueueCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceQueueCountAggregateOutputType> | number
          }
        }
      }
      QueueAgent: {
        payload: Prisma.$QueueAgentPayload<ExtArgs>
        fields: Prisma.QueueAgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueueAgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueAgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueueAgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueAgentPayload>
          }
          findFirst: {
            args: Prisma.QueueAgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueAgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueueAgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueAgentPayload>
          }
          findMany: {
            args: Prisma.QueueAgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueAgentPayload>[]
          }
          create: {
            args: Prisma.QueueAgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueAgentPayload>
          }
          createMany: {
            args: Prisma.QueueAgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QueueAgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueAgentPayload>[]
          }
          delete: {
            args: Prisma.QueueAgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueAgentPayload>
          }
          update: {
            args: Prisma.QueueAgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueAgentPayload>
          }
          deleteMany: {
            args: Prisma.QueueAgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueueAgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QueueAgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueueAgentPayload>
          }
          aggregate: {
            args: Prisma.QueueAgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQueueAgent>
          }
          groupBy: {
            args: Prisma.QueueAgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueueAgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.QueueAgentCountArgs<ExtArgs>
            result: $Utils.Optional<QueueAgentCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Audience: {
        payload: Prisma.$AudiencePayload<ExtArgs>
        fields: Prisma.AudienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AudienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AudienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>
          }
          findFirst: {
            args: Prisma.AudienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AudienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>
          }
          findMany: {
            args: Prisma.AudienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>[]
          }
          create: {
            args: Prisma.AudienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>
          }
          createMany: {
            args: Prisma.AudienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AudienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>[]
          }
          delete: {
            args: Prisma.AudienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>
          }
          update: {
            args: Prisma.AudienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>
          }
          deleteMany: {
            args: Prisma.AudienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AudienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AudienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AudiencePayload>
          }
          aggregate: {
            args: Prisma.AudienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudience>
          }
          groupBy: {
            args: Prisma.AudienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AudienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AudienceCountArgs<ExtArgs>
            result: $Utils.Optional<AudienceCountAggregateOutputType> | number
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
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    users: number
    leads: number
    tags: number
    audiences: number
    instances: number
    queues: number
    workflows: number
    integrations: number
    smtpAccounts: number
    campaigns: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TenantCountOutputTypeCountUsersArgs
    leads?: boolean | TenantCountOutputTypeCountLeadsArgs
    tags?: boolean | TenantCountOutputTypeCountTagsArgs
    audiences?: boolean | TenantCountOutputTypeCountAudiencesArgs
    instances?: boolean | TenantCountOutputTypeCountInstancesArgs
    queues?: boolean | TenantCountOutputTypeCountQueuesArgs
    workflows?: boolean | TenantCountOutputTypeCountWorkflowsArgs
    integrations?: boolean | TenantCountOutputTypeCountIntegrationsArgs
    smtpAccounts?: boolean | TenantCountOutputTypeCountSmtpAccountsArgs
    campaigns?: boolean | TenantCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountAudiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudienceWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountInstancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppInstanceWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceQueueWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountWorkflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountIntegrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountSmtpAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmtpAccountWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    subscriptions: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | PlanCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    executions: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executions?: boolean | WorkflowCountOutputTypeCountExecutionsArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowExecutionWhereInput
  }


  /**
   * Count Type LeadCountOutputType
   */

  export type LeadCountOutputType = {
    tags: number
    audiences: number
    workflowExec: number
  }

  export type LeadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | LeadCountOutputTypeCountTagsArgs
    audiences?: boolean | LeadCountOutputTypeCountAudiencesArgs
    workflowExec?: boolean | LeadCountOutputTypeCountWorkflowExecArgs
  }

  // Custom InputTypes
  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeadCountOutputType
     */
    select?: LeadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountAudiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudienceWhereInput
  }

  /**
   * LeadCountOutputType without action
   */
  export type LeadCountOutputTypeCountWorkflowExecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowExecutionWhereInput
  }


  /**
   * Count Type WhatsAppInstanceCountOutputType
   */

  export type WhatsAppInstanceCountOutputType = {
    asMainInQueues: number
    asAgentInQueues: number
  }

  export type WhatsAppInstanceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    asMainInQueues?: boolean | WhatsAppInstanceCountOutputTypeCountAsMainInQueuesArgs
    asAgentInQueues?: boolean | WhatsAppInstanceCountOutputTypeCountAsAgentInQueuesArgs
  }

  // Custom InputTypes
  /**
   * WhatsAppInstanceCountOutputType without action
   */
  export type WhatsAppInstanceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstanceCountOutputType
     */
    select?: WhatsAppInstanceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WhatsAppInstanceCountOutputType without action
   */
  export type WhatsAppInstanceCountOutputTypeCountAsMainInQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceQueueWhereInput
  }

  /**
   * WhatsAppInstanceCountOutputType without action
   */
  export type WhatsAppInstanceCountOutputTypeCountAsAgentInQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueueAgentWhereInput
  }


  /**
   * Count Type AttendanceQueueCountOutputType
   */

  export type AttendanceQueueCountOutputType = {
    agents: number
  }

  export type AttendanceQueueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agents?: boolean | AttendanceQueueCountOutputTypeCountAgentsArgs
  }

  // Custom InputTypes
  /**
   * AttendanceQueueCountOutputType without action
   */
  export type AttendanceQueueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueueCountOutputType
     */
    select?: AttendanceQueueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AttendanceQueueCountOutputType without action
   */
  export type AttendanceQueueCountOutputTypeCountAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueueAgentWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    leads: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | TagCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Count Type AudienceCountOutputType
   */

  export type AudienceCountOutputType = {
    leads: number
  }

  export type AudienceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leads?: boolean | AudienceCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * AudienceCountOutputType without action
   */
  export type AudienceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AudienceCountOutputType
     */
    select?: AudienceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AudienceCountOutputType without action
   */
  export type AudienceCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantAvgAggregateOutputType = {
    maxUsers: number | null
    maxLeads: number | null
    maxWorkflows: number | null
  }

  export type TenantSumAggregateOutputType = {
    maxUsers: number | null
    maxLeads: number | null
    maxWorkflows: number | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    evolutionUrl: string | null
    evolutionToken: string | null
    maxUsers: number | null
    maxLeads: number | null
    maxWorkflows: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    evolutionUrl: string | null
    evolutionToken: string | null
    maxUsers: number | null
    maxLeads: number | null
    maxWorkflows: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    evolutionUrl: number
    evolutionToken: number
    maxUsers: number
    maxLeads: number
    maxWorkflows: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantAvgAggregateInputType = {
    maxUsers?: true
    maxLeads?: true
    maxWorkflows?: true
  }

  export type TenantSumAggregateInputType = {
    maxUsers?: true
    maxLeads?: true
    maxWorkflows?: true
  }

  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    evolutionUrl?: true
    evolutionToken?: true
    maxUsers?: true
    maxLeads?: true
    maxWorkflows?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    evolutionUrl?: true
    evolutionToken?: true
    maxUsers?: true
    maxLeads?: true
    maxWorkflows?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    evolutionUrl?: true
    evolutionToken?: true
    maxUsers?: true
    maxLeads?: true
    maxWorkflows?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _avg?: TenantAvgAggregateInputType
    _sum?: TenantSumAggregateInputType
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    slug: string | null
    evolutionUrl: string | null
    evolutionToken: string | null
    maxUsers: number
    maxLeads: number
    maxWorkflows: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    evolutionUrl?: boolean
    evolutionToken?: boolean
    maxUsers?: boolean
    maxLeads?: boolean
    maxWorkflows?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Tenant$usersArgs<ExtArgs>
    leads?: boolean | Tenant$leadsArgs<ExtArgs>
    tags?: boolean | Tenant$tagsArgs<ExtArgs>
    audiences?: boolean | Tenant$audiencesArgs<ExtArgs>
    instances?: boolean | Tenant$instancesArgs<ExtArgs>
    queues?: boolean | Tenant$queuesArgs<ExtArgs>
    workflows?: boolean | Tenant$workflowsArgs<ExtArgs>
    integrations?: boolean | Tenant$integrationsArgs<ExtArgs>
    smtpAccounts?: boolean | Tenant$smtpAccountsArgs<ExtArgs>
    campaigns?: boolean | Tenant$campaignsArgs<ExtArgs>
    subscription?: boolean | Tenant$subscriptionArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    evolutionUrl?: boolean
    evolutionToken?: boolean
    maxUsers?: boolean
    maxLeads?: boolean
    maxWorkflows?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    evolutionUrl?: boolean
    evolutionToken?: boolean
    maxUsers?: boolean
    maxLeads?: boolean
    maxWorkflows?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Tenant$usersArgs<ExtArgs>
    leads?: boolean | Tenant$leadsArgs<ExtArgs>
    tags?: boolean | Tenant$tagsArgs<ExtArgs>
    audiences?: boolean | Tenant$audiencesArgs<ExtArgs>
    instances?: boolean | Tenant$instancesArgs<ExtArgs>
    queues?: boolean | Tenant$queuesArgs<ExtArgs>
    workflows?: boolean | Tenant$workflowsArgs<ExtArgs>
    integrations?: boolean | Tenant$integrationsArgs<ExtArgs>
    smtpAccounts?: boolean | Tenant$smtpAccountsArgs<ExtArgs>
    campaigns?: boolean | Tenant$campaignsArgs<ExtArgs>
    subscription?: boolean | Tenant$subscriptionArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      audiences: Prisma.$AudiencePayload<ExtArgs>[]
      instances: Prisma.$WhatsAppInstancePayload<ExtArgs>[]
      queues: Prisma.$AttendanceQueuePayload<ExtArgs>[]
      workflows: Prisma.$WorkflowPayload<ExtArgs>[]
      integrations: Prisma.$IntegrationPayload<ExtArgs>[]
      smtpAccounts: Prisma.$SmtpAccountPayload<ExtArgs>[]
      campaigns: Prisma.$CampaignPayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string | null
      evolutionUrl: string | null
      evolutionToken: string | null
      maxUsers: number
      maxLeads: number
      maxWorkflows: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
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
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Tenant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    leads<T extends Tenant$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany"> | Null>
    tags<T extends Tenant$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany"> | Null>
    audiences<T extends Tenant$audiencesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$audiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findMany"> | Null>
    instances<T extends Tenant$instancesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$instancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "findMany"> | Null>
    queues<T extends Tenant$queuesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$queuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceQueuePayload<ExtArgs>, T, "findMany"> | Null>
    workflows<T extends Tenant$workflowsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$workflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany"> | Null>
    integrations<T extends Tenant$integrationsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$integrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findMany"> | Null>
    smtpAccounts<T extends Tenant$smtpAccountsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$smtpAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmtpAccountPayload<ExtArgs>, T, "findMany"> | Null>
    campaigns<T extends Tenant$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany"> | Null>
    subscription<T extends Tenant$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Tenant model
   */ 
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly slug: FieldRef<"Tenant", 'String'>
    readonly evolutionUrl: FieldRef<"Tenant", 'String'>
    readonly evolutionToken: FieldRef<"Tenant", 'String'>
    readonly maxUsers: FieldRef<"Tenant", 'Int'>
    readonly maxLeads: FieldRef<"Tenant", 'Int'>
    readonly maxWorkflows: FieldRef<"Tenant", 'Int'>
    readonly status: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
    readonly updatedAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
  }

  /**
   * Tenant.users
   */
  export type Tenant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant.leads
   */
  export type Tenant$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Tenant.tags
   */
  export type Tenant$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tenant.audiences
   */
  export type Tenant$audiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    where?: AudienceWhereInput
    orderBy?: AudienceOrderByWithRelationInput | AudienceOrderByWithRelationInput[]
    cursor?: AudienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AudienceScalarFieldEnum | AudienceScalarFieldEnum[]
  }

  /**
   * Tenant.instances
   */
  export type Tenant$instancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppInstanceInclude<ExtArgs> | null
    where?: WhatsAppInstanceWhereInput
    orderBy?: WhatsAppInstanceOrderByWithRelationInput | WhatsAppInstanceOrderByWithRelationInput[]
    cursor?: WhatsAppInstanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhatsAppInstanceScalarFieldEnum | WhatsAppInstanceScalarFieldEnum[]
  }

  /**
   * Tenant.queues
   */
  export type Tenant$queuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueue
     */
    select?: AttendanceQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceQueueInclude<ExtArgs> | null
    where?: AttendanceQueueWhereInput
    orderBy?: AttendanceQueueOrderByWithRelationInput | AttendanceQueueOrderByWithRelationInput[]
    cursor?: AttendanceQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceQueueScalarFieldEnum | AttendanceQueueScalarFieldEnum[]
  }

  /**
   * Tenant.workflows
   */
  export type Tenant$workflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    cursor?: WorkflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Tenant.integrations
   */
  export type Tenant$integrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    where?: IntegrationWhereInput
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    cursor?: IntegrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Tenant.smtpAccounts
   */
  export type Tenant$smtpAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmtpAccount
     */
    select?: SmtpAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmtpAccountInclude<ExtArgs> | null
    where?: SmtpAccountWhereInput
    orderBy?: SmtpAccountOrderByWithRelationInput | SmtpAccountOrderByWithRelationInput[]
    cursor?: SmtpAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SmtpAccountScalarFieldEnum | SmtpAccountScalarFieldEnum[]
  }

  /**
   * Tenant.campaigns
   */
  export type Tenant$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    cursor?: CampaignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Tenant.subscription
   */
  export type Tenant$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    sentCount: number | null
    openRate: number | null
    clickRate: number | null
  }

  export type CampaignSumAggregateOutputType = {
    sentCount: number | null
    openRate: number | null
    clickRate: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    content: string | null
    status: string | null
    sentCount: number | null
    openRate: number | null
    clickRate: number | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    subject: string | null
    content: string | null
    status: string | null
    sentCount: number | null
    openRate: number | null
    clickRate: number | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    subject: number
    content: number
    status: number
    sentCount: number
    openRate: number
    clickRate: number
    tenantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    sentCount?: true
    openRate?: true
    clickRate?: true
  }

  export type CampaignSumAggregateInputType = {
    sentCount?: true
    openRate?: true
    clickRate?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    content?: true
    status?: true
    sentCount?: true
    openRate?: true
    clickRate?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    content?: true
    status?: true
    sentCount?: true
    openRate?: true
    clickRate?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    subject?: true
    content?: true
    status?: true
    sentCount?: true
    openRate?: true
    clickRate?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    name: string
    subject: string
    content: string
    status: string
    sentCount: number
    openRate: number
    clickRate: number
    tenantId: string
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    status?: boolean
    sentCount?: boolean
    openRate?: boolean
    clickRate?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    status?: boolean
    sentCount?: boolean
    openRate?: boolean
    clickRate?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    subject?: boolean
    content?: boolean
    status?: boolean
    sentCount?: boolean
    openRate?: boolean
    clickRate?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      subject: string
      content: string
      status: string
      sentCount: number
      openRate: number
      clickRate: number
      tenantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
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
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Campaign model
   */ 
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly subject: FieldRef<"Campaign", 'String'>
    readonly content: FieldRef<"Campaign", 'String'>
    readonly status: FieldRef<"Campaign", 'String'>
    readonly sentCount: FieldRef<"Campaign", 'Int'>
    readonly openRate: FieldRef<"Campaign", 'Float'>
    readonly clickRate: FieldRef<"Campaign", 'Float'>
    readonly tenantId: FieldRef<"Campaign", 'String'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model SmtpAccount
   */

  export type AggregateSmtpAccount = {
    _count: SmtpAccountCountAggregateOutputType | null
    _avg: SmtpAccountAvgAggregateOutputType | null
    _sum: SmtpAccountSumAggregateOutputType | null
    _min: SmtpAccountMinAggregateOutputType | null
    _max: SmtpAccountMaxAggregateOutputType | null
  }

  export type SmtpAccountAvgAggregateOutputType = {
    port: number | null
  }

  export type SmtpAccountSumAggregateOutputType = {
    port: number | null
  }

  export type SmtpAccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    host: string | null
    port: number | null
    user: string | null
    pass: string | null
    secure: boolean | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SmtpAccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    host: string | null
    port: number | null
    user: string | null
    pass: string | null
    secure: boolean | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SmtpAccountCountAggregateOutputType = {
    id: number
    name: number
    host: number
    port: number
    user: number
    pass: number
    secure: number
    tenantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SmtpAccountAvgAggregateInputType = {
    port?: true
  }

  export type SmtpAccountSumAggregateInputType = {
    port?: true
  }

  export type SmtpAccountMinAggregateInputType = {
    id?: true
    name?: true
    host?: true
    port?: true
    user?: true
    pass?: true
    secure?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SmtpAccountMaxAggregateInputType = {
    id?: true
    name?: true
    host?: true
    port?: true
    user?: true
    pass?: true
    secure?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SmtpAccountCountAggregateInputType = {
    id?: true
    name?: true
    host?: true
    port?: true
    user?: true
    pass?: true
    secure?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SmtpAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmtpAccount to aggregate.
     */
    where?: SmtpAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmtpAccounts to fetch.
     */
    orderBy?: SmtpAccountOrderByWithRelationInput | SmtpAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SmtpAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmtpAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmtpAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SmtpAccounts
    **/
    _count?: true | SmtpAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SmtpAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SmtpAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SmtpAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SmtpAccountMaxAggregateInputType
  }

  export type GetSmtpAccountAggregateType<T extends SmtpAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateSmtpAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSmtpAccount[P]>
      : GetScalarType<T[P], AggregateSmtpAccount[P]>
  }




  export type SmtpAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SmtpAccountWhereInput
    orderBy?: SmtpAccountOrderByWithAggregationInput | SmtpAccountOrderByWithAggregationInput[]
    by: SmtpAccountScalarFieldEnum[] | SmtpAccountScalarFieldEnum
    having?: SmtpAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SmtpAccountCountAggregateInputType | true
    _avg?: SmtpAccountAvgAggregateInputType
    _sum?: SmtpAccountSumAggregateInputType
    _min?: SmtpAccountMinAggregateInputType
    _max?: SmtpAccountMaxAggregateInputType
  }

  export type SmtpAccountGroupByOutputType = {
    id: string
    name: string
    host: string
    port: number
    user: string
    pass: string
    secure: boolean
    tenantId: string
    createdAt: Date
    updatedAt: Date
    _count: SmtpAccountCountAggregateOutputType | null
    _avg: SmtpAccountAvgAggregateOutputType | null
    _sum: SmtpAccountSumAggregateOutputType | null
    _min: SmtpAccountMinAggregateOutputType | null
    _max: SmtpAccountMaxAggregateOutputType | null
  }

  type GetSmtpAccountGroupByPayload<T extends SmtpAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SmtpAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SmtpAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SmtpAccountGroupByOutputType[P]>
            : GetScalarType<T[P], SmtpAccountGroupByOutputType[P]>
        }
      >
    >


  export type SmtpAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    host?: boolean
    port?: boolean
    user?: boolean
    pass?: boolean
    secure?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["smtpAccount"]>

  export type SmtpAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    host?: boolean
    port?: boolean
    user?: boolean
    pass?: boolean
    secure?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["smtpAccount"]>

  export type SmtpAccountSelectScalar = {
    id?: boolean
    name?: boolean
    host?: boolean
    port?: boolean
    user?: boolean
    pass?: boolean
    secure?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SmtpAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type SmtpAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $SmtpAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SmtpAccount"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      host: string
      port: number
      user: string
      pass: string
      secure: boolean
      tenantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["smtpAccount"]>
    composites: {}
  }

  type SmtpAccountGetPayload<S extends boolean | null | undefined | SmtpAccountDefaultArgs> = $Result.GetResult<Prisma.$SmtpAccountPayload, S>

  type SmtpAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SmtpAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SmtpAccountCountAggregateInputType | true
    }

  export interface SmtpAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SmtpAccount'], meta: { name: 'SmtpAccount' } }
    /**
     * Find zero or one SmtpAccount that matches the filter.
     * @param {SmtpAccountFindUniqueArgs} args - Arguments to find a SmtpAccount
     * @example
     * // Get one SmtpAccount
     * const smtpAccount = await prisma.smtpAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SmtpAccountFindUniqueArgs>(args: SelectSubset<T, SmtpAccountFindUniqueArgs<ExtArgs>>): Prisma__SmtpAccountClient<$Result.GetResult<Prisma.$SmtpAccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SmtpAccount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SmtpAccountFindUniqueOrThrowArgs} args - Arguments to find a SmtpAccount
     * @example
     * // Get one SmtpAccount
     * const smtpAccount = await prisma.smtpAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SmtpAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, SmtpAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SmtpAccountClient<$Result.GetResult<Prisma.$SmtpAccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SmtpAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmtpAccountFindFirstArgs} args - Arguments to find a SmtpAccount
     * @example
     * // Get one SmtpAccount
     * const smtpAccount = await prisma.smtpAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SmtpAccountFindFirstArgs>(args?: SelectSubset<T, SmtpAccountFindFirstArgs<ExtArgs>>): Prisma__SmtpAccountClient<$Result.GetResult<Prisma.$SmtpAccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SmtpAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmtpAccountFindFirstOrThrowArgs} args - Arguments to find a SmtpAccount
     * @example
     * // Get one SmtpAccount
     * const smtpAccount = await prisma.smtpAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SmtpAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, SmtpAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__SmtpAccountClient<$Result.GetResult<Prisma.$SmtpAccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SmtpAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmtpAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SmtpAccounts
     * const smtpAccounts = await prisma.smtpAccount.findMany()
     * 
     * // Get first 10 SmtpAccounts
     * const smtpAccounts = await prisma.smtpAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const smtpAccountWithIdOnly = await prisma.smtpAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SmtpAccountFindManyArgs>(args?: SelectSubset<T, SmtpAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmtpAccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SmtpAccount.
     * @param {SmtpAccountCreateArgs} args - Arguments to create a SmtpAccount.
     * @example
     * // Create one SmtpAccount
     * const SmtpAccount = await prisma.smtpAccount.create({
     *   data: {
     *     // ... data to create a SmtpAccount
     *   }
     * })
     * 
     */
    create<T extends SmtpAccountCreateArgs>(args: SelectSubset<T, SmtpAccountCreateArgs<ExtArgs>>): Prisma__SmtpAccountClient<$Result.GetResult<Prisma.$SmtpAccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SmtpAccounts.
     * @param {SmtpAccountCreateManyArgs} args - Arguments to create many SmtpAccounts.
     * @example
     * // Create many SmtpAccounts
     * const smtpAccount = await prisma.smtpAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SmtpAccountCreateManyArgs>(args?: SelectSubset<T, SmtpAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SmtpAccounts and returns the data saved in the database.
     * @param {SmtpAccountCreateManyAndReturnArgs} args - Arguments to create many SmtpAccounts.
     * @example
     * // Create many SmtpAccounts
     * const smtpAccount = await prisma.smtpAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SmtpAccounts and only return the `id`
     * const smtpAccountWithIdOnly = await prisma.smtpAccount.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SmtpAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, SmtpAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SmtpAccountPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SmtpAccount.
     * @param {SmtpAccountDeleteArgs} args - Arguments to delete one SmtpAccount.
     * @example
     * // Delete one SmtpAccount
     * const SmtpAccount = await prisma.smtpAccount.delete({
     *   where: {
     *     // ... filter to delete one SmtpAccount
     *   }
     * })
     * 
     */
    delete<T extends SmtpAccountDeleteArgs>(args: SelectSubset<T, SmtpAccountDeleteArgs<ExtArgs>>): Prisma__SmtpAccountClient<$Result.GetResult<Prisma.$SmtpAccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SmtpAccount.
     * @param {SmtpAccountUpdateArgs} args - Arguments to update one SmtpAccount.
     * @example
     * // Update one SmtpAccount
     * const smtpAccount = await prisma.smtpAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SmtpAccountUpdateArgs>(args: SelectSubset<T, SmtpAccountUpdateArgs<ExtArgs>>): Prisma__SmtpAccountClient<$Result.GetResult<Prisma.$SmtpAccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SmtpAccounts.
     * @param {SmtpAccountDeleteManyArgs} args - Arguments to filter SmtpAccounts to delete.
     * @example
     * // Delete a few SmtpAccounts
     * const { count } = await prisma.smtpAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SmtpAccountDeleteManyArgs>(args?: SelectSubset<T, SmtpAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SmtpAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmtpAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SmtpAccounts
     * const smtpAccount = await prisma.smtpAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SmtpAccountUpdateManyArgs>(args: SelectSubset<T, SmtpAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SmtpAccount.
     * @param {SmtpAccountUpsertArgs} args - Arguments to update or create a SmtpAccount.
     * @example
     * // Update or create a SmtpAccount
     * const smtpAccount = await prisma.smtpAccount.upsert({
     *   create: {
     *     // ... data to create a SmtpAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SmtpAccount we want to update
     *   }
     * })
     */
    upsert<T extends SmtpAccountUpsertArgs>(args: SelectSubset<T, SmtpAccountUpsertArgs<ExtArgs>>): Prisma__SmtpAccountClient<$Result.GetResult<Prisma.$SmtpAccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SmtpAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmtpAccountCountArgs} args - Arguments to filter SmtpAccounts to count.
     * @example
     * // Count the number of SmtpAccounts
     * const count = await prisma.smtpAccount.count({
     *   where: {
     *     // ... the filter for the SmtpAccounts we want to count
     *   }
     * })
    **/
    count<T extends SmtpAccountCountArgs>(
      args?: Subset<T, SmtpAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SmtpAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SmtpAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmtpAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SmtpAccountAggregateArgs>(args: Subset<T, SmtpAccountAggregateArgs>): Prisma.PrismaPromise<GetSmtpAccountAggregateType<T>>

    /**
     * Group by SmtpAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SmtpAccountGroupByArgs} args - Group by arguments.
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
      T extends SmtpAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SmtpAccountGroupByArgs['orderBy'] }
        : { orderBy?: SmtpAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SmtpAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSmtpAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SmtpAccount model
   */
  readonly fields: SmtpAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SmtpAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SmtpAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SmtpAccount model
   */ 
  interface SmtpAccountFieldRefs {
    readonly id: FieldRef<"SmtpAccount", 'String'>
    readonly name: FieldRef<"SmtpAccount", 'String'>
    readonly host: FieldRef<"SmtpAccount", 'String'>
    readonly port: FieldRef<"SmtpAccount", 'Int'>
    readonly user: FieldRef<"SmtpAccount", 'String'>
    readonly pass: FieldRef<"SmtpAccount", 'String'>
    readonly secure: FieldRef<"SmtpAccount", 'Boolean'>
    readonly tenantId: FieldRef<"SmtpAccount", 'String'>
    readonly createdAt: FieldRef<"SmtpAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"SmtpAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SmtpAccount findUnique
   */
  export type SmtpAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmtpAccount
     */
    select?: SmtpAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmtpAccountInclude<ExtArgs> | null
    /**
     * Filter, which SmtpAccount to fetch.
     */
    where: SmtpAccountWhereUniqueInput
  }

  /**
   * SmtpAccount findUniqueOrThrow
   */
  export type SmtpAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmtpAccount
     */
    select?: SmtpAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmtpAccountInclude<ExtArgs> | null
    /**
     * Filter, which SmtpAccount to fetch.
     */
    where: SmtpAccountWhereUniqueInput
  }

  /**
   * SmtpAccount findFirst
   */
  export type SmtpAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmtpAccount
     */
    select?: SmtpAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmtpAccountInclude<ExtArgs> | null
    /**
     * Filter, which SmtpAccount to fetch.
     */
    where?: SmtpAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmtpAccounts to fetch.
     */
    orderBy?: SmtpAccountOrderByWithRelationInput | SmtpAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmtpAccounts.
     */
    cursor?: SmtpAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmtpAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmtpAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmtpAccounts.
     */
    distinct?: SmtpAccountScalarFieldEnum | SmtpAccountScalarFieldEnum[]
  }

  /**
   * SmtpAccount findFirstOrThrow
   */
  export type SmtpAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmtpAccount
     */
    select?: SmtpAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmtpAccountInclude<ExtArgs> | null
    /**
     * Filter, which SmtpAccount to fetch.
     */
    where?: SmtpAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmtpAccounts to fetch.
     */
    orderBy?: SmtpAccountOrderByWithRelationInput | SmtpAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SmtpAccounts.
     */
    cursor?: SmtpAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmtpAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmtpAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SmtpAccounts.
     */
    distinct?: SmtpAccountScalarFieldEnum | SmtpAccountScalarFieldEnum[]
  }

  /**
   * SmtpAccount findMany
   */
  export type SmtpAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmtpAccount
     */
    select?: SmtpAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmtpAccountInclude<ExtArgs> | null
    /**
     * Filter, which SmtpAccounts to fetch.
     */
    where?: SmtpAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SmtpAccounts to fetch.
     */
    orderBy?: SmtpAccountOrderByWithRelationInput | SmtpAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SmtpAccounts.
     */
    cursor?: SmtpAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SmtpAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SmtpAccounts.
     */
    skip?: number
    distinct?: SmtpAccountScalarFieldEnum | SmtpAccountScalarFieldEnum[]
  }

  /**
   * SmtpAccount create
   */
  export type SmtpAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmtpAccount
     */
    select?: SmtpAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmtpAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a SmtpAccount.
     */
    data: XOR<SmtpAccountCreateInput, SmtpAccountUncheckedCreateInput>
  }

  /**
   * SmtpAccount createMany
   */
  export type SmtpAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SmtpAccounts.
     */
    data: SmtpAccountCreateManyInput | SmtpAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SmtpAccount createManyAndReturn
   */
  export type SmtpAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmtpAccount
     */
    select?: SmtpAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SmtpAccounts.
     */
    data: SmtpAccountCreateManyInput | SmtpAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmtpAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SmtpAccount update
   */
  export type SmtpAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmtpAccount
     */
    select?: SmtpAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmtpAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a SmtpAccount.
     */
    data: XOR<SmtpAccountUpdateInput, SmtpAccountUncheckedUpdateInput>
    /**
     * Choose, which SmtpAccount to update.
     */
    where: SmtpAccountWhereUniqueInput
  }

  /**
   * SmtpAccount updateMany
   */
  export type SmtpAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SmtpAccounts.
     */
    data: XOR<SmtpAccountUpdateManyMutationInput, SmtpAccountUncheckedUpdateManyInput>
    /**
     * Filter which SmtpAccounts to update
     */
    where?: SmtpAccountWhereInput
  }

  /**
   * SmtpAccount upsert
   */
  export type SmtpAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmtpAccount
     */
    select?: SmtpAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmtpAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the SmtpAccount to update in case it exists.
     */
    where: SmtpAccountWhereUniqueInput
    /**
     * In case the SmtpAccount found by the `where` argument doesn't exist, create a new SmtpAccount with this data.
     */
    create: XOR<SmtpAccountCreateInput, SmtpAccountUncheckedCreateInput>
    /**
     * In case the SmtpAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SmtpAccountUpdateInput, SmtpAccountUncheckedUpdateInput>
  }

  /**
   * SmtpAccount delete
   */
  export type SmtpAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmtpAccount
     */
    select?: SmtpAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmtpAccountInclude<ExtArgs> | null
    /**
     * Filter which SmtpAccount to delete.
     */
    where: SmtpAccountWhereUniqueInput
  }

  /**
   * SmtpAccount deleteMany
   */
  export type SmtpAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SmtpAccounts to delete
     */
    where?: SmtpAccountWhereInput
  }

  /**
   * SmtpAccount without action
   */
  export type SmtpAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SmtpAccount
     */
    select?: SmtpAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SmtpAccountInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    planId: string | null
    tenantId: string | null
    stripeCustomerId: string | null
    stripeSubId: string | null
    status: string | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    planId: string | null
    tenantId: string | null
    stripeCustomerId: string | null
    stripeSubId: string | null
    status: string | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    planId: number
    tenantId: number
    stripeCustomerId: number
    stripeSubId: number
    status: number
    currentPeriodEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    planId?: true
    tenantId?: true
    stripeCustomerId?: true
    stripeSubId?: true
    status?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    planId?: true
    tenantId?: true
    stripeCustomerId?: true
    stripeSubId?: true
    status?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    planId?: true
    tenantId?: true
    stripeCustomerId?: true
    stripeSubId?: true
    status?: true
    currentPeriodEnd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    planId: string
    tenantId: string
    stripeCustomerId: string | null
    stripeSubId: string | null
    status: string
    currentPeriodEnd: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    tenantId?: boolean
    stripeCustomerId?: boolean
    stripeSubId?: boolean
    status?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planId?: boolean
    tenantId?: boolean
    stripeCustomerId?: boolean
    stripeSubId?: boolean
    status?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    planId?: boolean
    tenantId?: boolean
    stripeCustomerId?: boolean
    stripeSubId?: boolean
    status?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      planId: string
      tenantId: string
      stripeCustomerId: string | null
      stripeSubId: string | null
      status: string
      currentPeriodEnd: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly tenantId: FieldRef<"Subscription", 'String'>
    readonly stripeCustomerId: FieldRef<"Subscription", 'String'>
    readonly stripeSubId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    price: number | null
    maxUsers: number | null
    maxLeads: number | null
    maxWorkflows: number | null
  }

  export type PlanSumAggregateOutputType = {
    price: number | null
    maxUsers: number | null
    maxLeads: number | null
    maxWorkflows: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    interval: string | null
    maxUsers: number | null
    maxLeads: number | null
    maxWorkflows: number | null
    stripePriceId: string | null
    createdAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    interval: string | null
    maxUsers: number | null
    maxLeads: number | null
    maxWorkflows: number | null
    stripePriceId: string | null
    createdAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    price: number
    interval: number
    maxUsers: number
    maxLeads: number
    maxWorkflows: number
    stripePriceId: number
    createdAt: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    price?: true
    maxUsers?: true
    maxLeads?: true
    maxWorkflows?: true
  }

  export type PlanSumAggregateInputType = {
    price?: true
    maxUsers?: true
    maxLeads?: true
    maxWorkflows?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    interval?: true
    maxUsers?: true
    maxLeads?: true
    maxWorkflows?: true
    stripePriceId?: true
    createdAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    interval?: true
    maxUsers?: true
    maxLeads?: true
    maxWorkflows?: true
    stripePriceId?: true
    createdAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    interval?: true
    maxUsers?: true
    maxLeads?: true
    maxWorkflows?: true
    stripePriceId?: true
    createdAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    name: string
    price: number
    interval: string
    maxUsers: number
    maxLeads: number
    maxWorkflows: number
    stripePriceId: string | null
    createdAt: Date
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    interval?: boolean
    maxUsers?: boolean
    maxLeads?: boolean
    maxWorkflows?: boolean
    stripePriceId?: boolean
    createdAt?: boolean
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    interval?: boolean
    maxUsers?: boolean
    maxLeads?: boolean
    maxWorkflows?: boolean
    stripePriceId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    interval?: boolean
    maxUsers?: boolean
    maxLeads?: boolean
    maxWorkflows?: boolean
    stripePriceId?: boolean
    createdAt?: boolean
  }

  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      interval: string
      maxUsers: number
      maxLeads: number
      maxWorkflows: number
      stripePriceId: string | null
      createdAt: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
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
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends Plan$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Plan model
   */ 
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly price: FieldRef<"Plan", 'Float'>
    readonly interval: FieldRef<"Plan", 'String'>
    readonly maxUsers: FieldRef<"Plan", 'Int'>
    readonly maxLeads: FieldRef<"Plan", 'Int'>
    readonly maxWorkflows: FieldRef<"Plan", 'Int'>
    readonly stripePriceId: FieldRef<"Plan", 'String'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
  }

  /**
   * Plan.subscriptions
   */
  export type Plan$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Integration
   */

  export type AggregateIntegration = {
    _count: IntegrationCountAggregateOutputType | null
    _min: IntegrationMinAggregateOutputType | null
    _max: IntegrationMaxAggregateOutputType | null
  }

  export type IntegrationMinAggregateOutputType = {
    id: string | null
    name: string | null
    platform: string | null
    type: string | null
    webhookKey: string | null
    config: string | null
    autoTag: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    platform: string | null
    type: string | null
    webhookKey: string | null
    config: string | null
    autoTag: string | null
    tenantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntegrationCountAggregateOutputType = {
    id: number
    name: number
    platform: number
    type: number
    webhookKey: number
    config: number
    autoTag: number
    tenantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntegrationMinAggregateInputType = {
    id?: true
    name?: true
    platform?: true
    type?: true
    webhookKey?: true
    config?: true
    autoTag?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationMaxAggregateInputType = {
    id?: true
    name?: true
    platform?: true
    type?: true
    webhookKey?: true
    config?: true
    autoTag?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntegrationCountAggregateInputType = {
    id?: true
    name?: true
    platform?: true
    type?: true
    webhookKey?: true
    config?: true
    autoTag?: true
    tenantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntegrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integration to aggregate.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Integrations
    **/
    _count?: true | IntegrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationMaxAggregateInputType
  }

  export type GetIntegrationAggregateType<T extends IntegrationAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegration[P]>
      : GetScalarType<T[P], AggregateIntegration[P]>
  }




  export type IntegrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationWhereInput
    orderBy?: IntegrationOrderByWithAggregationInput | IntegrationOrderByWithAggregationInput[]
    by: IntegrationScalarFieldEnum[] | IntegrationScalarFieldEnum
    having?: IntegrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationCountAggregateInputType | true
    _min?: IntegrationMinAggregateInputType
    _max?: IntegrationMaxAggregateInputType
  }

  export type IntegrationGroupByOutputType = {
    id: string
    name: string
    platform: string
    type: string
    webhookKey: string
    config: string | null
    autoTag: string | null
    tenantId: string
    createdAt: Date
    updatedAt: Date
    _count: IntegrationCountAggregateOutputType | null
    _min: IntegrationMinAggregateOutputType | null
    _max: IntegrationMaxAggregateOutputType | null
  }

  type GetIntegrationGroupByPayload<T extends IntegrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    platform?: boolean
    type?: boolean
    webhookKey?: boolean
    config?: boolean
    autoTag?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integration"]>

  export type IntegrationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    platform?: boolean
    type?: boolean
    webhookKey?: boolean
    config?: boolean
    autoTag?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["integration"]>

  export type IntegrationSelectScalar = {
    id?: boolean
    name?: boolean
    platform?: boolean
    type?: boolean
    webhookKey?: boolean
    config?: boolean
    autoTag?: boolean
    tenantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IntegrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type IntegrationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $IntegrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Integration"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      platform: string
      type: string
      webhookKey: string
      config: string | null
      autoTag: string | null
      tenantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["integration"]>
    composites: {}
  }

  type IntegrationGetPayload<S extends boolean | null | undefined | IntegrationDefaultArgs> = $Result.GetResult<Prisma.$IntegrationPayload, S>

  type IntegrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IntegrationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IntegrationCountAggregateInputType | true
    }

  export interface IntegrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Integration'], meta: { name: 'Integration' } }
    /**
     * Find zero or one Integration that matches the filter.
     * @param {IntegrationFindUniqueArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationFindUniqueArgs>(args: SelectSubset<T, IntegrationFindUniqueArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Integration that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IntegrationFindUniqueOrThrowArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Integration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindFirstArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationFindFirstArgs>(args?: SelectSubset<T, IntegrationFindFirstArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Integration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindFirstOrThrowArgs} args - Arguments to find a Integration
     * @example
     * // Get one Integration
     * const integration = await prisma.integration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Integrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Integrations
     * const integrations = await prisma.integration.findMany()
     * 
     * // Get first 10 Integrations
     * const integrations = await prisma.integration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationWithIdOnly = await prisma.integration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationFindManyArgs>(args?: SelectSubset<T, IntegrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Integration.
     * @param {IntegrationCreateArgs} args - Arguments to create a Integration.
     * @example
     * // Create one Integration
     * const Integration = await prisma.integration.create({
     *   data: {
     *     // ... data to create a Integration
     *   }
     * })
     * 
     */
    create<T extends IntegrationCreateArgs>(args: SelectSubset<T, IntegrationCreateArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Integrations.
     * @param {IntegrationCreateManyArgs} args - Arguments to create many Integrations.
     * @example
     * // Create many Integrations
     * const integration = await prisma.integration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationCreateManyArgs>(args?: SelectSubset<T, IntegrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Integrations and returns the data saved in the database.
     * @param {IntegrationCreateManyAndReturnArgs} args - Arguments to create many Integrations.
     * @example
     * // Create many Integrations
     * const integration = await prisma.integration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Integrations and only return the `id`
     * const integrationWithIdOnly = await prisma.integration.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegrationCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Integration.
     * @param {IntegrationDeleteArgs} args - Arguments to delete one Integration.
     * @example
     * // Delete one Integration
     * const Integration = await prisma.integration.delete({
     *   where: {
     *     // ... filter to delete one Integration
     *   }
     * })
     * 
     */
    delete<T extends IntegrationDeleteArgs>(args: SelectSubset<T, IntegrationDeleteArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Integration.
     * @param {IntegrationUpdateArgs} args - Arguments to update one Integration.
     * @example
     * // Update one Integration
     * const integration = await prisma.integration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationUpdateArgs>(args: SelectSubset<T, IntegrationUpdateArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Integrations.
     * @param {IntegrationDeleteManyArgs} args - Arguments to filter Integrations to delete.
     * @example
     * // Delete a few Integrations
     * const { count } = await prisma.integration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationDeleteManyArgs>(args?: SelectSubset<T, IntegrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Integrations
     * const integration = await prisma.integration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationUpdateManyArgs>(args: SelectSubset<T, IntegrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Integration.
     * @param {IntegrationUpsertArgs} args - Arguments to update or create a Integration.
     * @example
     * // Update or create a Integration
     * const integration = await prisma.integration.upsert({
     *   create: {
     *     // ... data to create a Integration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Integration we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationUpsertArgs>(args: SelectSubset<T, IntegrationUpsertArgs<ExtArgs>>): Prisma__IntegrationClient<$Result.GetResult<Prisma.$IntegrationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationCountArgs} args - Arguments to filter Integrations to count.
     * @example
     * // Count the number of Integrations
     * const count = await prisma.integration.count({
     *   where: {
     *     // ... the filter for the Integrations we want to count
     *   }
     * })
    **/
    count<T extends IntegrationCountArgs>(
      args?: Subset<T, IntegrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Integration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntegrationAggregateArgs>(args: Subset<T, IntegrationAggregateArgs>): Prisma.PrismaPromise<GetIntegrationAggregateType<T>>

    /**
     * Group by Integration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationGroupByArgs} args - Group by arguments.
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
      T extends IntegrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntegrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Integration model
   */
  readonly fields: IntegrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Integration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Integration model
   */ 
  interface IntegrationFieldRefs {
    readonly id: FieldRef<"Integration", 'String'>
    readonly name: FieldRef<"Integration", 'String'>
    readonly platform: FieldRef<"Integration", 'String'>
    readonly type: FieldRef<"Integration", 'String'>
    readonly webhookKey: FieldRef<"Integration", 'String'>
    readonly config: FieldRef<"Integration", 'String'>
    readonly autoTag: FieldRef<"Integration", 'String'>
    readonly tenantId: FieldRef<"Integration", 'String'>
    readonly createdAt: FieldRef<"Integration", 'DateTime'>
    readonly updatedAt: FieldRef<"Integration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Integration findUnique
   */
  export type IntegrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration findUniqueOrThrow
   */
  export type IntegrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration findFirst
   */
  export type IntegrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration findFirstOrThrow
   */
  export type IntegrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integration to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration findMany
   */
  export type IntegrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where?: IntegrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationOrderByWithRelationInput | IntegrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Integrations.
     */
    cursor?: IntegrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    distinct?: IntegrationScalarFieldEnum | IntegrationScalarFieldEnum[]
  }

  /**
   * Integration create
   */
  export type IntegrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Integration.
     */
    data: XOR<IntegrationCreateInput, IntegrationUncheckedCreateInput>
  }

  /**
   * Integration createMany
   */
  export type IntegrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Integrations.
     */
    data: IntegrationCreateManyInput | IntegrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Integration createManyAndReturn
   */
  export type IntegrationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Integrations.
     */
    data: IntegrationCreateManyInput | IntegrationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Integration update
   */
  export type IntegrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Integration.
     */
    data: XOR<IntegrationUpdateInput, IntegrationUncheckedUpdateInput>
    /**
     * Choose, which Integration to update.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration updateMany
   */
  export type IntegrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Integrations.
     */
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyInput>
    /**
     * Filter which Integrations to update
     */
    where?: IntegrationWhereInput
  }

  /**
   * Integration upsert
   */
  export type IntegrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Integration to update in case it exists.
     */
    where: IntegrationWhereUniqueInput
    /**
     * In case the Integration found by the `where` argument doesn't exist, create a new Integration with this data.
     */
    create: XOR<IntegrationCreateInput, IntegrationUncheckedCreateInput>
    /**
     * In case the Integration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationUpdateInput, IntegrationUncheckedUpdateInput>
  }

  /**
   * Integration delete
   */
  export type IntegrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
    /**
     * Filter which Integration to delete.
     */
    where: IntegrationWhereUniqueInput
  }

  /**
   * Integration deleteMany
   */
  export type IntegrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integrations to delete
     */
    where?: IntegrationWhereInput
  }

  /**
   * Integration without action
   */
  export type IntegrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integration
     */
    select?: IntegrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationInclude<ExtArgs> | null
  }


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
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    tenantId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    tenantId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    tenantId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    tenantId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    tenantId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    tenantId?: true
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
    email: string
    password: string
    name: string | null
    role: string
    createdAt: Date
    tenantId: string
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
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    tenantId?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      role: string
      createdAt: Date
      tenantId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly tenantId: FieldRef<"User", 'String'>
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: string | null
    nodes: string | null
    connections: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: string | null
    nodes: string | null
    connections: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    nodes: number
    connections: number
    createdAt: number
    updatedAt: number
    tenantId: number
    _all: number
  }


  export type WorkflowMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    nodes?: true
    connections?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    nodes?: true
    connections?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    nodes?: true
    connections?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithAggregationInput | WorkflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: string
    nodes: string
    connections: string
    createdAt: Date
    updatedAt: Date
    tenantId: string
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    nodes?: boolean
    connections?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    executions?: boolean | Workflow$executionsArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    nodes?: boolean
    connections?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    nodes?: boolean
    connections?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
  }

  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    executions?: boolean | Workflow$executionsArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      executions: Prisma.$WorkflowExecutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      status: string
      nodes: string
      connections: string
      createdAt: Date
      updatedAt: Date
      tenantId: string
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowDefaultArgs> = $Result.GetResult<Prisma.$WorkflowPayload, S>

  type WorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkflowFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow'], meta: { name: 'Workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowFindUniqueArgs>(args: SelectSubset<T, WorkflowFindUniqueArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowFindFirstArgs>(args?: SelectSubset<T, WorkflowFindFirstArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowFindManyArgs>(args?: SelectSubset<T, WorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends WorkflowCreateArgs>(args: SelectSubset<T, WorkflowCreateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Workflows.
     * @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowCreateManyArgs>(args?: SelectSubset<T, WorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {WorkflowCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends WorkflowDeleteArgs>(args: SelectSubset<T, WorkflowDeleteArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowUpdateArgs>(args: SelectSubset<T, WorkflowUpdateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowDeleteManyArgs>(args?: SelectSubset<T, WorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowUpdateManyArgs>(args: SelectSubset<T, WorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowUpsertArgs>(args: SelectSubset<T, WorkflowUpsertArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
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
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow model
   */
  readonly fields: WorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    executions<T extends Workflow$executionsArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$executionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Workflow model
   */ 
  interface WorkflowFieldRefs {
    readonly id: FieldRef<"Workflow", 'String'>
    readonly name: FieldRef<"Workflow", 'String'>
    readonly description: FieldRef<"Workflow", 'String'>
    readonly status: FieldRef<"Workflow", 'String'>
    readonly nodes: FieldRef<"Workflow", 'String'>
    readonly connections: FieldRef<"Workflow", 'String'>
    readonly createdAt: FieldRef<"Workflow", 'DateTime'>
    readonly updatedAt: FieldRef<"Workflow", 'DateTime'>
    readonly tenantId: FieldRef<"Workflow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Workflow findUnique
   */
  export type WorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findFirst
   */
  export type WorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow create
   */
  export type WorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflow.
     */
    data: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }

  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow createManyAndReturn
   */
  export type WorkflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
  }

  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }

  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
  }

  /**
   * Workflow.executions
   */
  export type Workflow$executionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    where?: WorkflowExecutionWhereInput
    orderBy?: WorkflowExecutionOrderByWithRelationInput | WorkflowExecutionOrderByWithRelationInput[]
    cursor?: WorkflowExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * Workflow without action
   */
  export type WorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowExecution
   */

  export type AggregateWorkflowExecution = {
    _count: WorkflowExecutionCountAggregateOutputType | null
    _min: WorkflowExecutionMinAggregateOutputType | null
    _max: WorkflowExecutionMaxAggregateOutputType | null
  }

  export type WorkflowExecutionMinAggregateOutputType = {
    id: string | null
    status: string | null
    currentNode: string | null
    nextStepAt: Date | null
    workflowId: string | null
    leadId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowExecutionMaxAggregateOutputType = {
    id: string | null
    status: string | null
    currentNode: string | null
    nextStepAt: Date | null
    workflowId: string | null
    leadId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowExecutionCountAggregateOutputType = {
    id: number
    status: number
    currentNode: number
    nextStepAt: number
    workflowId: number
    leadId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkflowExecutionMinAggregateInputType = {
    id?: true
    status?: true
    currentNode?: true
    nextStepAt?: true
    workflowId?: true
    leadId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowExecutionMaxAggregateInputType = {
    id?: true
    status?: true
    currentNode?: true
    nextStepAt?: true
    workflowId?: true
    leadId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowExecutionCountAggregateInputType = {
    id?: true
    status?: true
    currentNode?: true
    nextStepAt?: true
    workflowId?: true
    leadId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkflowExecutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowExecution to aggregate.
     */
    where?: WorkflowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExecutions to fetch.
     */
    orderBy?: WorkflowExecutionOrderByWithRelationInput | WorkflowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowExecutions
    **/
    _count?: true | WorkflowExecutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowExecutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowExecutionMaxAggregateInputType
  }

  export type GetWorkflowExecutionAggregateType<T extends WorkflowExecutionAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowExecution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowExecution[P]>
      : GetScalarType<T[P], AggregateWorkflowExecution[P]>
  }




  export type WorkflowExecutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowExecutionWhereInput
    orderBy?: WorkflowExecutionOrderByWithAggregationInput | WorkflowExecutionOrderByWithAggregationInput[]
    by: WorkflowExecutionScalarFieldEnum[] | WorkflowExecutionScalarFieldEnum
    having?: WorkflowExecutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowExecutionCountAggregateInputType | true
    _min?: WorkflowExecutionMinAggregateInputType
    _max?: WorkflowExecutionMaxAggregateInputType
  }

  export type WorkflowExecutionGroupByOutputType = {
    id: string
    status: string
    currentNode: string | null
    nextStepAt: Date | null
    workflowId: string
    leadId: string
    createdAt: Date
    updatedAt: Date
    _count: WorkflowExecutionCountAggregateOutputType | null
    _min: WorkflowExecutionMinAggregateOutputType | null
    _max: WorkflowExecutionMaxAggregateOutputType | null
  }

  type GetWorkflowExecutionGroupByPayload<T extends WorkflowExecutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowExecutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowExecutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowExecutionGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowExecutionGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowExecutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    currentNode?: boolean
    nextStepAt?: boolean
    workflowId?: boolean
    leadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowExecution"]>

  export type WorkflowExecutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    currentNode?: boolean
    nextStepAt?: boolean
    workflowId?: boolean
    leadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowExecution"]>

  export type WorkflowExecutionSelectScalar = {
    id?: boolean
    status?: boolean
    currentNode?: boolean
    nextStepAt?: boolean
    workflowId?: boolean
    leadId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkflowExecutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }
  export type WorkflowExecutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    lead?: boolean | LeadDefaultArgs<ExtArgs>
  }

  export type $WorkflowExecutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowExecution"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      lead: Prisma.$LeadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      currentNode: string | null
      nextStepAt: Date | null
      workflowId: string
      leadId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workflowExecution"]>
    composites: {}
  }

  type WorkflowExecutionGetPayload<S extends boolean | null | undefined | WorkflowExecutionDefaultArgs> = $Result.GetResult<Prisma.$WorkflowExecutionPayload, S>

  type WorkflowExecutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkflowExecutionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkflowExecutionCountAggregateInputType | true
    }

  export interface WorkflowExecutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowExecution'], meta: { name: 'WorkflowExecution' } }
    /**
     * Find zero or one WorkflowExecution that matches the filter.
     * @param {WorkflowExecutionFindUniqueArgs} args - Arguments to find a WorkflowExecution
     * @example
     * // Get one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowExecutionFindUniqueArgs>(args: SelectSubset<T, WorkflowExecutionFindUniqueArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkflowExecution that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkflowExecutionFindUniqueOrThrowArgs} args - Arguments to find a WorkflowExecution
     * @example
     * // Get one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowExecutionFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowExecutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkflowExecution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionFindFirstArgs} args - Arguments to find a WorkflowExecution
     * @example
     * // Get one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowExecutionFindFirstArgs>(args?: SelectSubset<T, WorkflowExecutionFindFirstArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkflowExecution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionFindFirstOrThrowArgs} args - Arguments to find a WorkflowExecution
     * @example
     * // Get one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowExecutionFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowExecutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkflowExecutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowExecutions
     * const workflowExecutions = await prisma.workflowExecution.findMany()
     * 
     * // Get first 10 WorkflowExecutions
     * const workflowExecutions = await prisma.workflowExecution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowExecutionWithIdOnly = await prisma.workflowExecution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowExecutionFindManyArgs>(args?: SelectSubset<T, WorkflowExecutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkflowExecution.
     * @param {WorkflowExecutionCreateArgs} args - Arguments to create a WorkflowExecution.
     * @example
     * // Create one WorkflowExecution
     * const WorkflowExecution = await prisma.workflowExecution.create({
     *   data: {
     *     // ... data to create a WorkflowExecution
     *   }
     * })
     * 
     */
    create<T extends WorkflowExecutionCreateArgs>(args: SelectSubset<T, WorkflowExecutionCreateArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkflowExecutions.
     * @param {WorkflowExecutionCreateManyArgs} args - Arguments to create many WorkflowExecutions.
     * @example
     * // Create many WorkflowExecutions
     * const workflowExecution = await prisma.workflowExecution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowExecutionCreateManyArgs>(args?: SelectSubset<T, WorkflowExecutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowExecutions and returns the data saved in the database.
     * @param {WorkflowExecutionCreateManyAndReturnArgs} args - Arguments to create many WorkflowExecutions.
     * @example
     * // Create many WorkflowExecutions
     * const workflowExecution = await prisma.workflowExecution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowExecutions and only return the `id`
     * const workflowExecutionWithIdOnly = await prisma.workflowExecution.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowExecutionCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowExecutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkflowExecution.
     * @param {WorkflowExecutionDeleteArgs} args - Arguments to delete one WorkflowExecution.
     * @example
     * // Delete one WorkflowExecution
     * const WorkflowExecution = await prisma.workflowExecution.delete({
     *   where: {
     *     // ... filter to delete one WorkflowExecution
     *   }
     * })
     * 
     */
    delete<T extends WorkflowExecutionDeleteArgs>(args: SelectSubset<T, WorkflowExecutionDeleteArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkflowExecution.
     * @param {WorkflowExecutionUpdateArgs} args - Arguments to update one WorkflowExecution.
     * @example
     * // Update one WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowExecutionUpdateArgs>(args: SelectSubset<T, WorkflowExecutionUpdateArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkflowExecutions.
     * @param {WorkflowExecutionDeleteManyArgs} args - Arguments to filter WorkflowExecutions to delete.
     * @example
     * // Delete a few WorkflowExecutions
     * const { count } = await prisma.workflowExecution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowExecutionDeleteManyArgs>(args?: SelectSubset<T, WorkflowExecutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowExecutions
     * const workflowExecution = await prisma.workflowExecution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowExecutionUpdateManyArgs>(args: SelectSubset<T, WorkflowExecutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkflowExecution.
     * @param {WorkflowExecutionUpsertArgs} args - Arguments to update or create a WorkflowExecution.
     * @example
     * // Update or create a WorkflowExecution
     * const workflowExecution = await prisma.workflowExecution.upsert({
     *   create: {
     *     // ... data to create a WorkflowExecution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowExecution we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowExecutionUpsertArgs>(args: SelectSubset<T, WorkflowExecutionUpsertArgs<ExtArgs>>): Prisma__WorkflowExecutionClient<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkflowExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionCountArgs} args - Arguments to filter WorkflowExecutions to count.
     * @example
     * // Count the number of WorkflowExecutions
     * const count = await prisma.workflowExecution.count({
     *   where: {
     *     // ... the filter for the WorkflowExecutions we want to count
     *   }
     * })
    **/
    count<T extends WorkflowExecutionCountArgs>(
      args?: Subset<T, WorkflowExecutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowExecutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowExecutionAggregateArgs>(args: Subset<T, WorkflowExecutionAggregateArgs>): Prisma.PrismaPromise<GetWorkflowExecutionAggregateType<T>>

    /**
     * Group by WorkflowExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowExecutionGroupByArgs} args - Group by arguments.
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
      T extends WorkflowExecutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowExecutionGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowExecutionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowExecution model
   */
  readonly fields: WorkflowExecutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowExecution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowExecutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    lead<T extends LeadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeadDefaultArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the WorkflowExecution model
   */ 
  interface WorkflowExecutionFieldRefs {
    readonly id: FieldRef<"WorkflowExecution", 'String'>
    readonly status: FieldRef<"WorkflowExecution", 'String'>
    readonly currentNode: FieldRef<"WorkflowExecution", 'String'>
    readonly nextStepAt: FieldRef<"WorkflowExecution", 'DateTime'>
    readonly workflowId: FieldRef<"WorkflowExecution", 'String'>
    readonly leadId: FieldRef<"WorkflowExecution", 'String'>
    readonly createdAt: FieldRef<"WorkflowExecution", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkflowExecution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowExecution findUnique
   */
  export type WorkflowExecutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExecution to fetch.
     */
    where: WorkflowExecutionWhereUniqueInput
  }

  /**
   * WorkflowExecution findUniqueOrThrow
   */
  export type WorkflowExecutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExecution to fetch.
     */
    where: WorkflowExecutionWhereUniqueInput
  }

  /**
   * WorkflowExecution findFirst
   */
  export type WorkflowExecutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExecution to fetch.
     */
    where?: WorkflowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExecutions to fetch.
     */
    orderBy?: WorkflowExecutionOrderByWithRelationInput | WorkflowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowExecutions.
     */
    cursor?: WorkflowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowExecutions.
     */
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * WorkflowExecution findFirstOrThrow
   */
  export type WorkflowExecutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExecution to fetch.
     */
    where?: WorkflowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExecutions to fetch.
     */
    orderBy?: WorkflowExecutionOrderByWithRelationInput | WorkflowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowExecutions.
     */
    cursor?: WorkflowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowExecutions.
     */
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * WorkflowExecution findMany
   */
  export type WorkflowExecutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowExecutions to fetch.
     */
    where?: WorkflowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowExecutions to fetch.
     */
    orderBy?: WorkflowExecutionOrderByWithRelationInput | WorkflowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowExecutions.
     */
    cursor?: WorkflowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowExecutions.
     */
    skip?: number
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * WorkflowExecution create
   */
  export type WorkflowExecutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowExecution.
     */
    data: XOR<WorkflowExecutionCreateInput, WorkflowExecutionUncheckedCreateInput>
  }

  /**
   * WorkflowExecution createMany
   */
  export type WorkflowExecutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowExecutions.
     */
    data: WorkflowExecutionCreateManyInput | WorkflowExecutionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowExecution createManyAndReturn
   */
  export type WorkflowExecutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkflowExecutions.
     */
    data: WorkflowExecutionCreateManyInput | WorkflowExecutionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowExecution update
   */
  export type WorkflowExecutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowExecution.
     */
    data: XOR<WorkflowExecutionUpdateInput, WorkflowExecutionUncheckedUpdateInput>
    /**
     * Choose, which WorkflowExecution to update.
     */
    where: WorkflowExecutionWhereUniqueInput
  }

  /**
   * WorkflowExecution updateMany
   */
  export type WorkflowExecutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowExecutions.
     */
    data: XOR<WorkflowExecutionUpdateManyMutationInput, WorkflowExecutionUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowExecutions to update
     */
    where?: WorkflowExecutionWhereInput
  }

  /**
   * WorkflowExecution upsert
   */
  export type WorkflowExecutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowExecution to update in case it exists.
     */
    where: WorkflowExecutionWhereUniqueInput
    /**
     * In case the WorkflowExecution found by the `where` argument doesn't exist, create a new WorkflowExecution with this data.
     */
    create: XOR<WorkflowExecutionCreateInput, WorkflowExecutionUncheckedCreateInput>
    /**
     * In case the WorkflowExecution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowExecutionUpdateInput, WorkflowExecutionUncheckedUpdateInput>
  }

  /**
   * WorkflowExecution delete
   */
  export type WorkflowExecutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    /**
     * Filter which WorkflowExecution to delete.
     */
    where: WorkflowExecutionWhereUniqueInput
  }

  /**
   * WorkflowExecution deleteMany
   */
  export type WorkflowExecutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowExecutions to delete
     */
    where?: WorkflowExecutionWhereInput
  }

  /**
   * WorkflowExecution without action
   */
  export type WorkflowExecutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    status: string | null
    source: string | null
    obs: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    status: string | null
    source: string | null
    obs: string | null
    createdAt: Date | null
    updatedAt: Date | null
    tenantId: string | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    status: number
    source: number
    obs: number
    createdAt: number
    updatedAt: number
    tenantId: number
    _all: number
  }


  export type LeadMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    status?: true
    source?: true
    obs?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    status?: true
    source?: true
    obs?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    status?: true
    source?: true
    obs?: true
    createdAt?: true
    updatedAt?: true
    tenantId?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string | null
    status: string
    source: string
    obs: string | null
    createdAt: Date
    updatedAt: Date
    tenantId: string
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    source?: boolean
    obs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    tags?: boolean | Lead$tagsArgs<ExtArgs>
    audiences?: boolean | Lead$audiencesArgs<ExtArgs>
    workflowExec?: boolean | Lead$workflowExecArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    source?: boolean
    obs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    source?: boolean
    obs?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantId?: boolean
  }

  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    tags?: boolean | Lead$tagsArgs<ExtArgs>
    audiences?: boolean | Lead$audiencesArgs<ExtArgs>
    workflowExec?: boolean | Lead$workflowExecArgs<ExtArgs>
    _count?: boolean | LeadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
      audiences: Prisma.$AudiencePayload<ExtArgs>[]
      workflowExec: Prisma.$WorkflowExecutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      email: string | null
      status: string
      source: string
      obs: string | null
      createdAt: Date
      updatedAt: Date
      tenantId: string
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
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
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tags<T extends Lead$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Lead$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany"> | Null>
    audiences<T extends Lead$audiencesArgs<ExtArgs> = {}>(args?: Subset<T, Lead$audiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findMany"> | Null>
    workflowExec<T extends Lead$workflowExecArgs<ExtArgs> = {}>(args?: Subset<T, Lead$workflowExecArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowExecutionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Lead model
   */ 
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly name: FieldRef<"Lead", 'String'>
    readonly phone: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly status: FieldRef<"Lead", 'String'>
    readonly source: FieldRef<"Lead", 'String'>
    readonly obs: FieldRef<"Lead", 'String'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
    readonly updatedAt: FieldRef<"Lead", 'DateTime'>
    readonly tenantId: FieldRef<"Lead", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
  }

  /**
   * Lead.tags
   */
  export type Lead$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Lead.audiences
   */
  export type Lead$audiencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    where?: AudienceWhereInput
    orderBy?: AudienceOrderByWithRelationInput | AudienceOrderByWithRelationInput[]
    cursor?: AudienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AudienceScalarFieldEnum | AudienceScalarFieldEnum[]
  }

  /**
   * Lead.workflowExec
   */
  export type Lead$workflowExecArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowExecution
     */
    select?: WorkflowExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowExecutionInclude<ExtArgs> | null
    where?: WorkflowExecutionWhereInput
    orderBy?: WorkflowExecutionOrderByWithRelationInput | WorkflowExecutionOrderByWithRelationInput[]
    cursor?: WorkflowExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowExecutionScalarFieldEnum | WorkflowExecutionScalarFieldEnum[]
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model WhatsAppInstance
   */

  export type AggregateWhatsAppInstance = {
    _count: WhatsAppInstanceCountAggregateOutputType | null
    _min: WhatsAppInstanceMinAggregateOutputType | null
    _max: WhatsAppInstanceMaxAggregateOutputType | null
  }

  export type WhatsAppInstanceMinAggregateOutputType = {
    id: string | null
    instanceName: string | null
    owner: string | null
    type: string | null
    status: string | null
    aiEnabled: boolean | null
    aiPrompt: string | null
    aiModel: string | null
    knowledgeBase: string | null
    tenantId: string | null
  }

  export type WhatsAppInstanceMaxAggregateOutputType = {
    id: string | null
    instanceName: string | null
    owner: string | null
    type: string | null
    status: string | null
    aiEnabled: boolean | null
    aiPrompt: string | null
    aiModel: string | null
    knowledgeBase: string | null
    tenantId: string | null
  }

  export type WhatsAppInstanceCountAggregateOutputType = {
    id: number
    instanceName: number
    owner: number
    type: number
    status: number
    aiEnabled: number
    aiPrompt: number
    aiModel: number
    knowledgeBase: number
    tenantId: number
    _all: number
  }


  export type WhatsAppInstanceMinAggregateInputType = {
    id?: true
    instanceName?: true
    owner?: true
    type?: true
    status?: true
    aiEnabled?: true
    aiPrompt?: true
    aiModel?: true
    knowledgeBase?: true
    tenantId?: true
  }

  export type WhatsAppInstanceMaxAggregateInputType = {
    id?: true
    instanceName?: true
    owner?: true
    type?: true
    status?: true
    aiEnabled?: true
    aiPrompt?: true
    aiModel?: true
    knowledgeBase?: true
    tenantId?: true
  }

  export type WhatsAppInstanceCountAggregateInputType = {
    id?: true
    instanceName?: true
    owner?: true
    type?: true
    status?: true
    aiEnabled?: true
    aiPrompt?: true
    aiModel?: true
    knowledgeBase?: true
    tenantId?: true
    _all?: true
  }

  export type WhatsAppInstanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppInstance to aggregate.
     */
    where?: WhatsAppInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppInstances to fetch.
     */
    orderBy?: WhatsAppInstanceOrderByWithRelationInput | WhatsAppInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhatsAppInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhatsAppInstances
    **/
    _count?: true | WhatsAppInstanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhatsAppInstanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhatsAppInstanceMaxAggregateInputType
  }

  export type GetWhatsAppInstanceAggregateType<T extends WhatsAppInstanceAggregateArgs> = {
        [P in keyof T & keyof AggregateWhatsAppInstance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhatsAppInstance[P]>
      : GetScalarType<T[P], AggregateWhatsAppInstance[P]>
  }




  export type WhatsAppInstanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhatsAppInstanceWhereInput
    orderBy?: WhatsAppInstanceOrderByWithAggregationInput | WhatsAppInstanceOrderByWithAggregationInput[]
    by: WhatsAppInstanceScalarFieldEnum[] | WhatsAppInstanceScalarFieldEnum
    having?: WhatsAppInstanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhatsAppInstanceCountAggregateInputType | true
    _min?: WhatsAppInstanceMinAggregateInputType
    _max?: WhatsAppInstanceMaxAggregateInputType
  }

  export type WhatsAppInstanceGroupByOutputType = {
    id: string
    instanceName: string
    owner: string | null
    type: string
    status: string
    aiEnabled: boolean
    aiPrompt: string | null
    aiModel: string
    knowledgeBase: string | null
    tenantId: string
    _count: WhatsAppInstanceCountAggregateOutputType | null
    _min: WhatsAppInstanceMinAggregateOutputType | null
    _max: WhatsAppInstanceMaxAggregateOutputType | null
  }

  type GetWhatsAppInstanceGroupByPayload<T extends WhatsAppInstanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhatsAppInstanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhatsAppInstanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhatsAppInstanceGroupByOutputType[P]>
            : GetScalarType<T[P], WhatsAppInstanceGroupByOutputType[P]>
        }
      >
    >


  export type WhatsAppInstanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instanceName?: boolean
    owner?: boolean
    type?: boolean
    status?: boolean
    aiEnabled?: boolean
    aiPrompt?: boolean
    aiModel?: boolean
    knowledgeBase?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    asMainInQueues?: boolean | WhatsAppInstance$asMainInQueuesArgs<ExtArgs>
    asAgentInQueues?: boolean | WhatsAppInstance$asAgentInQueuesArgs<ExtArgs>
    _count?: boolean | WhatsAppInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppInstance"]>

  export type WhatsAppInstanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    instanceName?: boolean
    owner?: boolean
    type?: boolean
    status?: boolean
    aiEnabled?: boolean
    aiPrompt?: boolean
    aiModel?: boolean
    knowledgeBase?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whatsAppInstance"]>

  export type WhatsAppInstanceSelectScalar = {
    id?: boolean
    instanceName?: boolean
    owner?: boolean
    type?: boolean
    status?: boolean
    aiEnabled?: boolean
    aiPrompt?: boolean
    aiModel?: boolean
    knowledgeBase?: boolean
    tenantId?: boolean
  }

  export type WhatsAppInstanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    asMainInQueues?: boolean | WhatsAppInstance$asMainInQueuesArgs<ExtArgs>
    asAgentInQueues?: boolean | WhatsAppInstance$asAgentInQueuesArgs<ExtArgs>
    _count?: boolean | WhatsAppInstanceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WhatsAppInstanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $WhatsAppInstancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhatsAppInstance"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      asMainInQueues: Prisma.$AttendanceQueuePayload<ExtArgs>[]
      asAgentInQueues: Prisma.$QueueAgentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      instanceName: string
      owner: string | null
      type: string
      status: string
      aiEnabled: boolean
      aiPrompt: string | null
      aiModel: string
      knowledgeBase: string | null
      tenantId: string
    }, ExtArgs["result"]["whatsAppInstance"]>
    composites: {}
  }

  type WhatsAppInstanceGetPayload<S extends boolean | null | undefined | WhatsAppInstanceDefaultArgs> = $Result.GetResult<Prisma.$WhatsAppInstancePayload, S>

  type WhatsAppInstanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WhatsAppInstanceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WhatsAppInstanceCountAggregateInputType | true
    }

  export interface WhatsAppInstanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhatsAppInstance'], meta: { name: 'WhatsAppInstance' } }
    /**
     * Find zero or one WhatsAppInstance that matches the filter.
     * @param {WhatsAppInstanceFindUniqueArgs} args - Arguments to find a WhatsAppInstance
     * @example
     * // Get one WhatsAppInstance
     * const whatsAppInstance = await prisma.whatsAppInstance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhatsAppInstanceFindUniqueArgs>(args: SelectSubset<T, WhatsAppInstanceFindUniqueArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WhatsAppInstance that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WhatsAppInstanceFindUniqueOrThrowArgs} args - Arguments to find a WhatsAppInstance
     * @example
     * // Get one WhatsAppInstance
     * const whatsAppInstance = await prisma.whatsAppInstance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhatsAppInstanceFindUniqueOrThrowArgs>(args: SelectSubset<T, WhatsAppInstanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WhatsAppInstance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceFindFirstArgs} args - Arguments to find a WhatsAppInstance
     * @example
     * // Get one WhatsAppInstance
     * const whatsAppInstance = await prisma.whatsAppInstance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhatsAppInstanceFindFirstArgs>(args?: SelectSubset<T, WhatsAppInstanceFindFirstArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WhatsAppInstance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceFindFirstOrThrowArgs} args - Arguments to find a WhatsAppInstance
     * @example
     * // Get one WhatsAppInstance
     * const whatsAppInstance = await prisma.whatsAppInstance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhatsAppInstanceFindFirstOrThrowArgs>(args?: SelectSubset<T, WhatsAppInstanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WhatsAppInstances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhatsAppInstances
     * const whatsAppInstances = await prisma.whatsAppInstance.findMany()
     * 
     * // Get first 10 WhatsAppInstances
     * const whatsAppInstances = await prisma.whatsAppInstance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whatsAppInstanceWithIdOnly = await prisma.whatsAppInstance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhatsAppInstanceFindManyArgs>(args?: SelectSubset<T, WhatsAppInstanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WhatsAppInstance.
     * @param {WhatsAppInstanceCreateArgs} args - Arguments to create a WhatsAppInstance.
     * @example
     * // Create one WhatsAppInstance
     * const WhatsAppInstance = await prisma.whatsAppInstance.create({
     *   data: {
     *     // ... data to create a WhatsAppInstance
     *   }
     * })
     * 
     */
    create<T extends WhatsAppInstanceCreateArgs>(args: SelectSubset<T, WhatsAppInstanceCreateArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WhatsAppInstances.
     * @param {WhatsAppInstanceCreateManyArgs} args - Arguments to create many WhatsAppInstances.
     * @example
     * // Create many WhatsAppInstances
     * const whatsAppInstance = await prisma.whatsAppInstance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhatsAppInstanceCreateManyArgs>(args?: SelectSubset<T, WhatsAppInstanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhatsAppInstances and returns the data saved in the database.
     * @param {WhatsAppInstanceCreateManyAndReturnArgs} args - Arguments to create many WhatsAppInstances.
     * @example
     * // Create many WhatsAppInstances
     * const whatsAppInstance = await prisma.whatsAppInstance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhatsAppInstances and only return the `id`
     * const whatsAppInstanceWithIdOnly = await prisma.whatsAppInstance.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhatsAppInstanceCreateManyAndReturnArgs>(args?: SelectSubset<T, WhatsAppInstanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WhatsAppInstance.
     * @param {WhatsAppInstanceDeleteArgs} args - Arguments to delete one WhatsAppInstance.
     * @example
     * // Delete one WhatsAppInstance
     * const WhatsAppInstance = await prisma.whatsAppInstance.delete({
     *   where: {
     *     // ... filter to delete one WhatsAppInstance
     *   }
     * })
     * 
     */
    delete<T extends WhatsAppInstanceDeleteArgs>(args: SelectSubset<T, WhatsAppInstanceDeleteArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WhatsAppInstance.
     * @param {WhatsAppInstanceUpdateArgs} args - Arguments to update one WhatsAppInstance.
     * @example
     * // Update one WhatsAppInstance
     * const whatsAppInstance = await prisma.whatsAppInstance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhatsAppInstanceUpdateArgs>(args: SelectSubset<T, WhatsAppInstanceUpdateArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WhatsAppInstances.
     * @param {WhatsAppInstanceDeleteManyArgs} args - Arguments to filter WhatsAppInstances to delete.
     * @example
     * // Delete a few WhatsAppInstances
     * const { count } = await prisma.whatsAppInstance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhatsAppInstanceDeleteManyArgs>(args?: SelectSubset<T, WhatsAppInstanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhatsAppInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhatsAppInstances
     * const whatsAppInstance = await prisma.whatsAppInstance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhatsAppInstanceUpdateManyArgs>(args: SelectSubset<T, WhatsAppInstanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WhatsAppInstance.
     * @param {WhatsAppInstanceUpsertArgs} args - Arguments to update or create a WhatsAppInstance.
     * @example
     * // Update or create a WhatsAppInstance
     * const whatsAppInstance = await prisma.whatsAppInstance.upsert({
     *   create: {
     *     // ... data to create a WhatsAppInstance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhatsAppInstance we want to update
     *   }
     * })
     */
    upsert<T extends WhatsAppInstanceUpsertArgs>(args: SelectSubset<T, WhatsAppInstanceUpsertArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WhatsAppInstances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceCountArgs} args - Arguments to filter WhatsAppInstances to count.
     * @example
     * // Count the number of WhatsAppInstances
     * const count = await prisma.whatsAppInstance.count({
     *   where: {
     *     // ... the filter for the WhatsAppInstances we want to count
     *   }
     * })
    **/
    count<T extends WhatsAppInstanceCountArgs>(
      args?: Subset<T, WhatsAppInstanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhatsAppInstanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhatsAppInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WhatsAppInstanceAggregateArgs>(args: Subset<T, WhatsAppInstanceAggregateArgs>): Prisma.PrismaPromise<GetWhatsAppInstanceAggregateType<T>>

    /**
     * Group by WhatsAppInstance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhatsAppInstanceGroupByArgs} args - Group by arguments.
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
      T extends WhatsAppInstanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhatsAppInstanceGroupByArgs['orderBy'] }
        : { orderBy?: WhatsAppInstanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WhatsAppInstanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhatsAppInstanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhatsAppInstance model
   */
  readonly fields: WhatsAppInstanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhatsAppInstance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhatsAppInstanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    asMainInQueues<T extends WhatsAppInstance$asMainInQueuesArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppInstance$asMainInQueuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceQueuePayload<ExtArgs>, T, "findMany"> | Null>
    asAgentInQueues<T extends WhatsAppInstance$asAgentInQueuesArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppInstance$asAgentInQueuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueueAgentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the WhatsAppInstance model
   */ 
  interface WhatsAppInstanceFieldRefs {
    readonly id: FieldRef<"WhatsAppInstance", 'String'>
    readonly instanceName: FieldRef<"WhatsAppInstance", 'String'>
    readonly owner: FieldRef<"WhatsAppInstance", 'String'>
    readonly type: FieldRef<"WhatsAppInstance", 'String'>
    readonly status: FieldRef<"WhatsAppInstance", 'String'>
    readonly aiEnabled: FieldRef<"WhatsAppInstance", 'Boolean'>
    readonly aiPrompt: FieldRef<"WhatsAppInstance", 'String'>
    readonly aiModel: FieldRef<"WhatsAppInstance", 'String'>
    readonly knowledgeBase: FieldRef<"WhatsAppInstance", 'String'>
    readonly tenantId: FieldRef<"WhatsAppInstance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WhatsAppInstance findUnique
   */
  export type WhatsAppInstanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppInstanceInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppInstance to fetch.
     */
    where: WhatsAppInstanceWhereUniqueInput
  }

  /**
   * WhatsAppInstance findUniqueOrThrow
   */
  export type WhatsAppInstanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppInstanceInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppInstance to fetch.
     */
    where: WhatsAppInstanceWhereUniqueInput
  }

  /**
   * WhatsAppInstance findFirst
   */
  export type WhatsAppInstanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppInstanceInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppInstance to fetch.
     */
    where?: WhatsAppInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppInstances to fetch.
     */
    orderBy?: WhatsAppInstanceOrderByWithRelationInput | WhatsAppInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppInstances.
     */
    cursor?: WhatsAppInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppInstances.
     */
    distinct?: WhatsAppInstanceScalarFieldEnum | WhatsAppInstanceScalarFieldEnum[]
  }

  /**
   * WhatsAppInstance findFirstOrThrow
   */
  export type WhatsAppInstanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppInstanceInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppInstance to fetch.
     */
    where?: WhatsAppInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppInstances to fetch.
     */
    orderBy?: WhatsAppInstanceOrderByWithRelationInput | WhatsAppInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhatsAppInstances.
     */
    cursor?: WhatsAppInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppInstances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhatsAppInstances.
     */
    distinct?: WhatsAppInstanceScalarFieldEnum | WhatsAppInstanceScalarFieldEnum[]
  }

  /**
   * WhatsAppInstance findMany
   */
  export type WhatsAppInstanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppInstanceInclude<ExtArgs> | null
    /**
     * Filter, which WhatsAppInstances to fetch.
     */
    where?: WhatsAppInstanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhatsAppInstances to fetch.
     */
    orderBy?: WhatsAppInstanceOrderByWithRelationInput | WhatsAppInstanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhatsAppInstances.
     */
    cursor?: WhatsAppInstanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhatsAppInstances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhatsAppInstances.
     */
    skip?: number
    distinct?: WhatsAppInstanceScalarFieldEnum | WhatsAppInstanceScalarFieldEnum[]
  }

  /**
   * WhatsAppInstance create
   */
  export type WhatsAppInstanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppInstanceInclude<ExtArgs> | null
    /**
     * The data needed to create a WhatsAppInstance.
     */
    data: XOR<WhatsAppInstanceCreateInput, WhatsAppInstanceUncheckedCreateInput>
  }

  /**
   * WhatsAppInstance createMany
   */
  export type WhatsAppInstanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhatsAppInstances.
     */
    data: WhatsAppInstanceCreateManyInput | WhatsAppInstanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhatsAppInstance createManyAndReturn
   */
  export type WhatsAppInstanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WhatsAppInstances.
     */
    data: WhatsAppInstanceCreateManyInput | WhatsAppInstanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppInstanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WhatsAppInstance update
   */
  export type WhatsAppInstanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppInstanceInclude<ExtArgs> | null
    /**
     * The data needed to update a WhatsAppInstance.
     */
    data: XOR<WhatsAppInstanceUpdateInput, WhatsAppInstanceUncheckedUpdateInput>
    /**
     * Choose, which WhatsAppInstance to update.
     */
    where: WhatsAppInstanceWhereUniqueInput
  }

  /**
   * WhatsAppInstance updateMany
   */
  export type WhatsAppInstanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhatsAppInstances.
     */
    data: XOR<WhatsAppInstanceUpdateManyMutationInput, WhatsAppInstanceUncheckedUpdateManyInput>
    /**
     * Filter which WhatsAppInstances to update
     */
    where?: WhatsAppInstanceWhereInput
  }

  /**
   * WhatsAppInstance upsert
   */
  export type WhatsAppInstanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppInstanceInclude<ExtArgs> | null
    /**
     * The filter to search for the WhatsAppInstance to update in case it exists.
     */
    where: WhatsAppInstanceWhereUniqueInput
    /**
     * In case the WhatsAppInstance found by the `where` argument doesn't exist, create a new WhatsAppInstance with this data.
     */
    create: XOR<WhatsAppInstanceCreateInput, WhatsAppInstanceUncheckedCreateInput>
    /**
     * In case the WhatsAppInstance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhatsAppInstanceUpdateInput, WhatsAppInstanceUncheckedUpdateInput>
  }

  /**
   * WhatsAppInstance delete
   */
  export type WhatsAppInstanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppInstanceInclude<ExtArgs> | null
    /**
     * Filter which WhatsAppInstance to delete.
     */
    where: WhatsAppInstanceWhereUniqueInput
  }

  /**
   * WhatsAppInstance deleteMany
   */
  export type WhatsAppInstanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhatsAppInstances to delete
     */
    where?: WhatsAppInstanceWhereInput
  }

  /**
   * WhatsAppInstance.asMainInQueues
   */
  export type WhatsAppInstance$asMainInQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueue
     */
    select?: AttendanceQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceQueueInclude<ExtArgs> | null
    where?: AttendanceQueueWhereInput
    orderBy?: AttendanceQueueOrderByWithRelationInput | AttendanceQueueOrderByWithRelationInput[]
    cursor?: AttendanceQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceQueueScalarFieldEnum | AttendanceQueueScalarFieldEnum[]
  }

  /**
   * WhatsAppInstance.asAgentInQueues
   */
  export type WhatsAppInstance$asAgentInQueuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueAgent
     */
    select?: QueueAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueAgentInclude<ExtArgs> | null
    where?: QueueAgentWhereInput
    orderBy?: QueueAgentOrderByWithRelationInput | QueueAgentOrderByWithRelationInput[]
    cursor?: QueueAgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueueAgentScalarFieldEnum | QueueAgentScalarFieldEnum[]
  }

  /**
   * WhatsAppInstance without action
   */
  export type WhatsAppInstanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhatsAppInstance
     */
    select?: WhatsAppInstanceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhatsAppInstanceInclude<ExtArgs> | null
  }


  /**
   * Model AttendanceQueue
   */

  export type AggregateAttendanceQueue = {
    _count: AttendanceQueueCountAggregateOutputType | null
    _avg: AttendanceQueueAvgAggregateOutputType | null
    _sum: AttendanceQueueSumAggregateOutputType | null
    _min: AttendanceQueueMinAggregateOutputType | null
    _max: AttendanceQueueMaxAggregateOutputType | null
  }

  export type AttendanceQueueAvgAggregateOutputType = {
    lastAgentIndex: number | null
  }

  export type AttendanceQueueSumAggregateOutputType = {
    lastAgentIndex: number | null
  }

  export type AttendanceQueueMinAggregateOutputType = {
    id: string | null
    name: string | null
    mainInstanceId: string | null
    tenantId: string | null
    lastAgentIndex: number | null
  }

  export type AttendanceQueueMaxAggregateOutputType = {
    id: string | null
    name: string | null
    mainInstanceId: string | null
    tenantId: string | null
    lastAgentIndex: number | null
  }

  export type AttendanceQueueCountAggregateOutputType = {
    id: number
    name: number
    mainInstanceId: number
    tenantId: number
    lastAgentIndex: number
    _all: number
  }


  export type AttendanceQueueAvgAggregateInputType = {
    lastAgentIndex?: true
  }

  export type AttendanceQueueSumAggregateInputType = {
    lastAgentIndex?: true
  }

  export type AttendanceQueueMinAggregateInputType = {
    id?: true
    name?: true
    mainInstanceId?: true
    tenantId?: true
    lastAgentIndex?: true
  }

  export type AttendanceQueueMaxAggregateInputType = {
    id?: true
    name?: true
    mainInstanceId?: true
    tenantId?: true
    lastAgentIndex?: true
  }

  export type AttendanceQueueCountAggregateInputType = {
    id?: true
    name?: true
    mainInstanceId?: true
    tenantId?: true
    lastAgentIndex?: true
    _all?: true
  }

  export type AttendanceQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceQueue to aggregate.
     */
    where?: AttendanceQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceQueues to fetch.
     */
    orderBy?: AttendanceQueueOrderByWithRelationInput | AttendanceQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttendanceQueues
    **/
    _count?: true | AttendanceQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceQueueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceQueueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceQueueMaxAggregateInputType
  }

  export type GetAttendanceQueueAggregateType<T extends AttendanceQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendanceQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendanceQueue[P]>
      : GetScalarType<T[P], AggregateAttendanceQueue[P]>
  }




  export type AttendanceQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceQueueWhereInput
    orderBy?: AttendanceQueueOrderByWithAggregationInput | AttendanceQueueOrderByWithAggregationInput[]
    by: AttendanceQueueScalarFieldEnum[] | AttendanceQueueScalarFieldEnum
    having?: AttendanceQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceQueueCountAggregateInputType | true
    _avg?: AttendanceQueueAvgAggregateInputType
    _sum?: AttendanceQueueSumAggregateInputType
    _min?: AttendanceQueueMinAggregateInputType
    _max?: AttendanceQueueMaxAggregateInputType
  }

  export type AttendanceQueueGroupByOutputType = {
    id: string
    name: string
    mainInstanceId: string
    tenantId: string
    lastAgentIndex: number
    _count: AttendanceQueueCountAggregateOutputType | null
    _avg: AttendanceQueueAvgAggregateOutputType | null
    _sum: AttendanceQueueSumAggregateOutputType | null
    _min: AttendanceQueueMinAggregateOutputType | null
    _max: AttendanceQueueMaxAggregateOutputType | null
  }

  type GetAttendanceQueueGroupByPayload<T extends AttendanceQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceQueueGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceQueueGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mainInstanceId?: boolean
    tenantId?: boolean
    lastAgentIndex?: boolean
    mainInstance?: boolean | WhatsAppInstanceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    agents?: boolean | AttendanceQueue$agentsArgs<ExtArgs>
    _count?: boolean | AttendanceQueueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceQueue"]>

  export type AttendanceQueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mainInstanceId?: boolean
    tenantId?: boolean
    lastAgentIndex?: boolean
    mainInstance?: boolean | WhatsAppInstanceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendanceQueue"]>

  export type AttendanceQueueSelectScalar = {
    id?: boolean
    name?: boolean
    mainInstanceId?: boolean
    tenantId?: boolean
    lastAgentIndex?: boolean
  }

  export type AttendanceQueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainInstance?: boolean | WhatsAppInstanceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    agents?: boolean | AttendanceQueue$agentsArgs<ExtArgs>
    _count?: boolean | AttendanceQueueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AttendanceQueueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mainInstance?: boolean | WhatsAppInstanceDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $AttendanceQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttendanceQueue"
    objects: {
      mainInstance: Prisma.$WhatsAppInstancePayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
      agents: Prisma.$QueueAgentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      mainInstanceId: string
      tenantId: string
      lastAgentIndex: number
    }, ExtArgs["result"]["attendanceQueue"]>
    composites: {}
  }

  type AttendanceQueueGetPayload<S extends boolean | null | undefined | AttendanceQueueDefaultArgs> = $Result.GetResult<Prisma.$AttendanceQueuePayload, S>

  type AttendanceQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttendanceQueueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttendanceQueueCountAggregateInputType | true
    }

  export interface AttendanceQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttendanceQueue'], meta: { name: 'AttendanceQueue' } }
    /**
     * Find zero or one AttendanceQueue that matches the filter.
     * @param {AttendanceQueueFindUniqueArgs} args - Arguments to find a AttendanceQueue
     * @example
     * // Get one AttendanceQueue
     * const attendanceQueue = await prisma.attendanceQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceQueueFindUniqueArgs>(args: SelectSubset<T, AttendanceQueueFindUniqueArgs<ExtArgs>>): Prisma__AttendanceQueueClient<$Result.GetResult<Prisma.$AttendanceQueuePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AttendanceQueue that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AttendanceQueueFindUniqueOrThrowArgs} args - Arguments to find a AttendanceQueue
     * @example
     * // Get one AttendanceQueue
     * const attendanceQueue = await prisma.attendanceQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceQueueClient<$Result.GetResult<Prisma.$AttendanceQueuePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AttendanceQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceQueueFindFirstArgs} args - Arguments to find a AttendanceQueue
     * @example
     * // Get one AttendanceQueue
     * const attendanceQueue = await prisma.attendanceQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceQueueFindFirstArgs>(args?: SelectSubset<T, AttendanceQueueFindFirstArgs<ExtArgs>>): Prisma__AttendanceQueueClient<$Result.GetResult<Prisma.$AttendanceQueuePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AttendanceQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceQueueFindFirstOrThrowArgs} args - Arguments to find a AttendanceQueue
     * @example
     * // Get one AttendanceQueue
     * const attendanceQueue = await prisma.attendanceQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceQueueClient<$Result.GetResult<Prisma.$AttendanceQueuePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AttendanceQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttendanceQueues
     * const attendanceQueues = await prisma.attendanceQueue.findMany()
     * 
     * // Get first 10 AttendanceQueues
     * const attendanceQueues = await prisma.attendanceQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceQueueWithIdOnly = await prisma.attendanceQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceQueueFindManyArgs>(args?: SelectSubset<T, AttendanceQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceQueuePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AttendanceQueue.
     * @param {AttendanceQueueCreateArgs} args - Arguments to create a AttendanceQueue.
     * @example
     * // Create one AttendanceQueue
     * const AttendanceQueue = await prisma.attendanceQueue.create({
     *   data: {
     *     // ... data to create a AttendanceQueue
     *   }
     * })
     * 
     */
    create<T extends AttendanceQueueCreateArgs>(args: SelectSubset<T, AttendanceQueueCreateArgs<ExtArgs>>): Prisma__AttendanceQueueClient<$Result.GetResult<Prisma.$AttendanceQueuePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AttendanceQueues.
     * @param {AttendanceQueueCreateManyArgs} args - Arguments to create many AttendanceQueues.
     * @example
     * // Create many AttendanceQueues
     * const attendanceQueue = await prisma.attendanceQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceQueueCreateManyArgs>(args?: SelectSubset<T, AttendanceQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttendanceQueues and returns the data saved in the database.
     * @param {AttendanceQueueCreateManyAndReturnArgs} args - Arguments to create many AttendanceQueues.
     * @example
     * // Create many AttendanceQueues
     * const attendanceQueue = await prisma.attendanceQueue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttendanceQueues and only return the `id`
     * const attendanceQueueWithIdOnly = await prisma.attendanceQueue.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceQueueCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendanceQueuePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AttendanceQueue.
     * @param {AttendanceQueueDeleteArgs} args - Arguments to delete one AttendanceQueue.
     * @example
     * // Delete one AttendanceQueue
     * const AttendanceQueue = await prisma.attendanceQueue.delete({
     *   where: {
     *     // ... filter to delete one AttendanceQueue
     *   }
     * })
     * 
     */
    delete<T extends AttendanceQueueDeleteArgs>(args: SelectSubset<T, AttendanceQueueDeleteArgs<ExtArgs>>): Prisma__AttendanceQueueClient<$Result.GetResult<Prisma.$AttendanceQueuePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AttendanceQueue.
     * @param {AttendanceQueueUpdateArgs} args - Arguments to update one AttendanceQueue.
     * @example
     * // Update one AttendanceQueue
     * const attendanceQueue = await prisma.attendanceQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceQueueUpdateArgs>(args: SelectSubset<T, AttendanceQueueUpdateArgs<ExtArgs>>): Prisma__AttendanceQueueClient<$Result.GetResult<Prisma.$AttendanceQueuePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AttendanceQueues.
     * @param {AttendanceQueueDeleteManyArgs} args - Arguments to filter AttendanceQueues to delete.
     * @example
     * // Delete a few AttendanceQueues
     * const { count } = await prisma.attendanceQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceQueueDeleteManyArgs>(args?: SelectSubset<T, AttendanceQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttendanceQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttendanceQueues
     * const attendanceQueue = await prisma.attendanceQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceQueueUpdateManyArgs>(args: SelectSubset<T, AttendanceQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AttendanceQueue.
     * @param {AttendanceQueueUpsertArgs} args - Arguments to update or create a AttendanceQueue.
     * @example
     * // Update or create a AttendanceQueue
     * const attendanceQueue = await prisma.attendanceQueue.upsert({
     *   create: {
     *     // ... data to create a AttendanceQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttendanceQueue we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceQueueUpsertArgs>(args: SelectSubset<T, AttendanceQueueUpsertArgs<ExtArgs>>): Prisma__AttendanceQueueClient<$Result.GetResult<Prisma.$AttendanceQueuePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AttendanceQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceQueueCountArgs} args - Arguments to filter AttendanceQueues to count.
     * @example
     * // Count the number of AttendanceQueues
     * const count = await prisma.attendanceQueue.count({
     *   where: {
     *     // ... the filter for the AttendanceQueues we want to count
     *   }
     * })
    **/
    count<T extends AttendanceQueueCountArgs>(
      args?: Subset<T, AttendanceQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttendanceQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceQueueAggregateArgs>(args: Subset<T, AttendanceQueueAggregateArgs>): Prisma.PrismaPromise<GetAttendanceQueueAggregateType<T>>

    /**
     * Group by AttendanceQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceQueueGroupByArgs} args - Group by arguments.
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
      T extends AttendanceQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceQueueGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceQueueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttendanceQueue model
   */
  readonly fields: AttendanceQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttendanceQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mainInstance<T extends WhatsAppInstanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppInstanceDefaultArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    agents<T extends AttendanceQueue$agentsArgs<ExtArgs> = {}>(args?: Subset<T, AttendanceQueue$agentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueueAgentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AttendanceQueue model
   */ 
  interface AttendanceQueueFieldRefs {
    readonly id: FieldRef<"AttendanceQueue", 'String'>
    readonly name: FieldRef<"AttendanceQueue", 'String'>
    readonly mainInstanceId: FieldRef<"AttendanceQueue", 'String'>
    readonly tenantId: FieldRef<"AttendanceQueue", 'String'>
    readonly lastAgentIndex: FieldRef<"AttendanceQueue", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AttendanceQueue findUnique
   */
  export type AttendanceQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueue
     */
    select?: AttendanceQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceQueueInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceQueue to fetch.
     */
    where: AttendanceQueueWhereUniqueInput
  }

  /**
   * AttendanceQueue findUniqueOrThrow
   */
  export type AttendanceQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueue
     */
    select?: AttendanceQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceQueueInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceQueue to fetch.
     */
    where: AttendanceQueueWhereUniqueInput
  }

  /**
   * AttendanceQueue findFirst
   */
  export type AttendanceQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueue
     */
    select?: AttendanceQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceQueueInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceQueue to fetch.
     */
    where?: AttendanceQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceQueues to fetch.
     */
    orderBy?: AttendanceQueueOrderByWithRelationInput | AttendanceQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceQueues.
     */
    cursor?: AttendanceQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceQueues.
     */
    distinct?: AttendanceQueueScalarFieldEnum | AttendanceQueueScalarFieldEnum[]
  }

  /**
   * AttendanceQueue findFirstOrThrow
   */
  export type AttendanceQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueue
     */
    select?: AttendanceQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceQueueInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceQueue to fetch.
     */
    where?: AttendanceQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceQueues to fetch.
     */
    orderBy?: AttendanceQueueOrderByWithRelationInput | AttendanceQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttendanceQueues.
     */
    cursor?: AttendanceQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttendanceQueues.
     */
    distinct?: AttendanceQueueScalarFieldEnum | AttendanceQueueScalarFieldEnum[]
  }

  /**
   * AttendanceQueue findMany
   */
  export type AttendanceQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueue
     */
    select?: AttendanceQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceQueueInclude<ExtArgs> | null
    /**
     * Filter, which AttendanceQueues to fetch.
     */
    where?: AttendanceQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttendanceQueues to fetch.
     */
    orderBy?: AttendanceQueueOrderByWithRelationInput | AttendanceQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttendanceQueues.
     */
    cursor?: AttendanceQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttendanceQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttendanceQueues.
     */
    skip?: number
    distinct?: AttendanceQueueScalarFieldEnum | AttendanceQueueScalarFieldEnum[]
  }

  /**
   * AttendanceQueue create
   */
  export type AttendanceQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueue
     */
    select?: AttendanceQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceQueueInclude<ExtArgs> | null
    /**
     * The data needed to create a AttendanceQueue.
     */
    data: XOR<AttendanceQueueCreateInput, AttendanceQueueUncheckedCreateInput>
  }

  /**
   * AttendanceQueue createMany
   */
  export type AttendanceQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttendanceQueues.
     */
    data: AttendanceQueueCreateManyInput | AttendanceQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttendanceQueue createManyAndReturn
   */
  export type AttendanceQueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueue
     */
    select?: AttendanceQueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AttendanceQueues.
     */
    data: AttendanceQueueCreateManyInput | AttendanceQueueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceQueueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttendanceQueue update
   */
  export type AttendanceQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueue
     */
    select?: AttendanceQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceQueueInclude<ExtArgs> | null
    /**
     * The data needed to update a AttendanceQueue.
     */
    data: XOR<AttendanceQueueUpdateInput, AttendanceQueueUncheckedUpdateInput>
    /**
     * Choose, which AttendanceQueue to update.
     */
    where: AttendanceQueueWhereUniqueInput
  }

  /**
   * AttendanceQueue updateMany
   */
  export type AttendanceQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttendanceQueues.
     */
    data: XOR<AttendanceQueueUpdateManyMutationInput, AttendanceQueueUncheckedUpdateManyInput>
    /**
     * Filter which AttendanceQueues to update
     */
    where?: AttendanceQueueWhereInput
  }

  /**
   * AttendanceQueue upsert
   */
  export type AttendanceQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueue
     */
    select?: AttendanceQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceQueueInclude<ExtArgs> | null
    /**
     * The filter to search for the AttendanceQueue to update in case it exists.
     */
    where: AttendanceQueueWhereUniqueInput
    /**
     * In case the AttendanceQueue found by the `where` argument doesn't exist, create a new AttendanceQueue with this data.
     */
    create: XOR<AttendanceQueueCreateInput, AttendanceQueueUncheckedCreateInput>
    /**
     * In case the AttendanceQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceQueueUpdateInput, AttendanceQueueUncheckedUpdateInput>
  }

  /**
   * AttendanceQueue delete
   */
  export type AttendanceQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueue
     */
    select?: AttendanceQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceQueueInclude<ExtArgs> | null
    /**
     * Filter which AttendanceQueue to delete.
     */
    where: AttendanceQueueWhereUniqueInput
  }

  /**
   * AttendanceQueue deleteMany
   */
  export type AttendanceQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttendanceQueues to delete
     */
    where?: AttendanceQueueWhereInput
  }

  /**
   * AttendanceQueue.agents
   */
  export type AttendanceQueue$agentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueAgent
     */
    select?: QueueAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueAgentInclude<ExtArgs> | null
    where?: QueueAgentWhereInput
    orderBy?: QueueAgentOrderByWithRelationInput | QueueAgentOrderByWithRelationInput[]
    cursor?: QueueAgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueueAgentScalarFieldEnum | QueueAgentScalarFieldEnum[]
  }

  /**
   * AttendanceQueue without action
   */
  export type AttendanceQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttendanceQueue
     */
    select?: AttendanceQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceQueueInclude<ExtArgs> | null
  }


  /**
   * Model QueueAgent
   */

  export type AggregateQueueAgent = {
    _count: QueueAgentCountAggregateOutputType | null
    _avg: QueueAgentAvgAggregateOutputType | null
    _sum: QueueAgentSumAggregateOutputType | null
    _min: QueueAgentMinAggregateOutputType | null
    _max: QueueAgentMaxAggregateOutputType | null
  }

  export type QueueAgentAvgAggregateOutputType = {
    order: number | null
  }

  export type QueueAgentSumAggregateOutputType = {
    order: number | null
  }

  export type QueueAgentMinAggregateOutputType = {
    id: string | null
    order: number | null
    queueId: string | null
    instanceId: string | null
  }

  export type QueueAgentMaxAggregateOutputType = {
    id: string | null
    order: number | null
    queueId: string | null
    instanceId: string | null
  }

  export type QueueAgentCountAggregateOutputType = {
    id: number
    order: number
    queueId: number
    instanceId: number
    _all: number
  }


  export type QueueAgentAvgAggregateInputType = {
    order?: true
  }

  export type QueueAgentSumAggregateInputType = {
    order?: true
  }

  export type QueueAgentMinAggregateInputType = {
    id?: true
    order?: true
    queueId?: true
    instanceId?: true
  }

  export type QueueAgentMaxAggregateInputType = {
    id?: true
    order?: true
    queueId?: true
    instanceId?: true
  }

  export type QueueAgentCountAggregateInputType = {
    id?: true
    order?: true
    queueId?: true
    instanceId?: true
    _all?: true
  }

  export type QueueAgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueueAgent to aggregate.
     */
    where?: QueueAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueAgents to fetch.
     */
    orderBy?: QueueAgentOrderByWithRelationInput | QueueAgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueueAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QueueAgents
    **/
    _count?: true | QueueAgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QueueAgentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QueueAgentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueueAgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueueAgentMaxAggregateInputType
  }

  export type GetQueueAgentAggregateType<T extends QueueAgentAggregateArgs> = {
        [P in keyof T & keyof AggregateQueueAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueueAgent[P]>
      : GetScalarType<T[P], AggregateQueueAgent[P]>
  }




  export type QueueAgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueueAgentWhereInput
    orderBy?: QueueAgentOrderByWithAggregationInput | QueueAgentOrderByWithAggregationInput[]
    by: QueueAgentScalarFieldEnum[] | QueueAgentScalarFieldEnum
    having?: QueueAgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueueAgentCountAggregateInputType | true
    _avg?: QueueAgentAvgAggregateInputType
    _sum?: QueueAgentSumAggregateInputType
    _min?: QueueAgentMinAggregateInputType
    _max?: QueueAgentMaxAggregateInputType
  }

  export type QueueAgentGroupByOutputType = {
    id: string
    order: number
    queueId: string
    instanceId: string
    _count: QueueAgentCountAggregateOutputType | null
    _avg: QueueAgentAvgAggregateOutputType | null
    _sum: QueueAgentSumAggregateOutputType | null
    _min: QueueAgentMinAggregateOutputType | null
    _max: QueueAgentMaxAggregateOutputType | null
  }

  type GetQueueAgentGroupByPayload<T extends QueueAgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueueAgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueueAgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueueAgentGroupByOutputType[P]>
            : GetScalarType<T[P], QueueAgentGroupByOutputType[P]>
        }
      >
    >


  export type QueueAgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    queueId?: boolean
    instanceId?: boolean
    queue?: boolean | AttendanceQueueDefaultArgs<ExtArgs>
    instance?: boolean | WhatsAppInstanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queueAgent"]>

  export type QueueAgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    queueId?: boolean
    instanceId?: boolean
    queue?: boolean | AttendanceQueueDefaultArgs<ExtArgs>
    instance?: boolean | WhatsAppInstanceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queueAgent"]>

  export type QueueAgentSelectScalar = {
    id?: boolean
    order?: boolean
    queueId?: boolean
    instanceId?: boolean
  }

  export type QueueAgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    queue?: boolean | AttendanceQueueDefaultArgs<ExtArgs>
    instance?: boolean | WhatsAppInstanceDefaultArgs<ExtArgs>
  }
  export type QueueAgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    queue?: boolean | AttendanceQueueDefaultArgs<ExtArgs>
    instance?: boolean | WhatsAppInstanceDefaultArgs<ExtArgs>
  }

  export type $QueueAgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QueueAgent"
    objects: {
      queue: Prisma.$AttendanceQueuePayload<ExtArgs>
      instance: Prisma.$WhatsAppInstancePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      queueId: string
      instanceId: string
    }, ExtArgs["result"]["queueAgent"]>
    composites: {}
  }

  type QueueAgentGetPayload<S extends boolean | null | undefined | QueueAgentDefaultArgs> = $Result.GetResult<Prisma.$QueueAgentPayload, S>

  type QueueAgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QueueAgentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QueueAgentCountAggregateInputType | true
    }

  export interface QueueAgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QueueAgent'], meta: { name: 'QueueAgent' } }
    /**
     * Find zero or one QueueAgent that matches the filter.
     * @param {QueueAgentFindUniqueArgs} args - Arguments to find a QueueAgent
     * @example
     * // Get one QueueAgent
     * const queueAgent = await prisma.queueAgent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueueAgentFindUniqueArgs>(args: SelectSubset<T, QueueAgentFindUniqueArgs<ExtArgs>>): Prisma__QueueAgentClient<$Result.GetResult<Prisma.$QueueAgentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QueueAgent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QueueAgentFindUniqueOrThrowArgs} args - Arguments to find a QueueAgent
     * @example
     * // Get one QueueAgent
     * const queueAgent = await prisma.queueAgent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueueAgentFindUniqueOrThrowArgs>(args: SelectSubset<T, QueueAgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueueAgentClient<$Result.GetResult<Prisma.$QueueAgentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QueueAgent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueAgentFindFirstArgs} args - Arguments to find a QueueAgent
     * @example
     * // Get one QueueAgent
     * const queueAgent = await prisma.queueAgent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueueAgentFindFirstArgs>(args?: SelectSubset<T, QueueAgentFindFirstArgs<ExtArgs>>): Prisma__QueueAgentClient<$Result.GetResult<Prisma.$QueueAgentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QueueAgent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueAgentFindFirstOrThrowArgs} args - Arguments to find a QueueAgent
     * @example
     * // Get one QueueAgent
     * const queueAgent = await prisma.queueAgent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueueAgentFindFirstOrThrowArgs>(args?: SelectSubset<T, QueueAgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueueAgentClient<$Result.GetResult<Prisma.$QueueAgentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QueueAgents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueAgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QueueAgents
     * const queueAgents = await prisma.queueAgent.findMany()
     * 
     * // Get first 10 QueueAgents
     * const queueAgents = await prisma.queueAgent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queueAgentWithIdOnly = await prisma.queueAgent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueueAgentFindManyArgs>(args?: SelectSubset<T, QueueAgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueueAgentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QueueAgent.
     * @param {QueueAgentCreateArgs} args - Arguments to create a QueueAgent.
     * @example
     * // Create one QueueAgent
     * const QueueAgent = await prisma.queueAgent.create({
     *   data: {
     *     // ... data to create a QueueAgent
     *   }
     * })
     * 
     */
    create<T extends QueueAgentCreateArgs>(args: SelectSubset<T, QueueAgentCreateArgs<ExtArgs>>): Prisma__QueueAgentClient<$Result.GetResult<Prisma.$QueueAgentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QueueAgents.
     * @param {QueueAgentCreateManyArgs} args - Arguments to create many QueueAgents.
     * @example
     * // Create many QueueAgents
     * const queueAgent = await prisma.queueAgent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueueAgentCreateManyArgs>(args?: SelectSubset<T, QueueAgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QueueAgents and returns the data saved in the database.
     * @param {QueueAgentCreateManyAndReturnArgs} args - Arguments to create many QueueAgents.
     * @example
     * // Create many QueueAgents
     * const queueAgent = await prisma.queueAgent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QueueAgents and only return the `id`
     * const queueAgentWithIdOnly = await prisma.queueAgent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QueueAgentCreateManyAndReturnArgs>(args?: SelectSubset<T, QueueAgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueueAgentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QueueAgent.
     * @param {QueueAgentDeleteArgs} args - Arguments to delete one QueueAgent.
     * @example
     * // Delete one QueueAgent
     * const QueueAgent = await prisma.queueAgent.delete({
     *   where: {
     *     // ... filter to delete one QueueAgent
     *   }
     * })
     * 
     */
    delete<T extends QueueAgentDeleteArgs>(args: SelectSubset<T, QueueAgentDeleteArgs<ExtArgs>>): Prisma__QueueAgentClient<$Result.GetResult<Prisma.$QueueAgentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QueueAgent.
     * @param {QueueAgentUpdateArgs} args - Arguments to update one QueueAgent.
     * @example
     * // Update one QueueAgent
     * const queueAgent = await prisma.queueAgent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueueAgentUpdateArgs>(args: SelectSubset<T, QueueAgentUpdateArgs<ExtArgs>>): Prisma__QueueAgentClient<$Result.GetResult<Prisma.$QueueAgentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QueueAgents.
     * @param {QueueAgentDeleteManyArgs} args - Arguments to filter QueueAgents to delete.
     * @example
     * // Delete a few QueueAgents
     * const { count } = await prisma.queueAgent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueueAgentDeleteManyArgs>(args?: SelectSubset<T, QueueAgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QueueAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueAgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QueueAgents
     * const queueAgent = await prisma.queueAgent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueueAgentUpdateManyArgs>(args: SelectSubset<T, QueueAgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QueueAgent.
     * @param {QueueAgentUpsertArgs} args - Arguments to update or create a QueueAgent.
     * @example
     * // Update or create a QueueAgent
     * const queueAgent = await prisma.queueAgent.upsert({
     *   create: {
     *     // ... data to create a QueueAgent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QueueAgent we want to update
     *   }
     * })
     */
    upsert<T extends QueueAgentUpsertArgs>(args: SelectSubset<T, QueueAgentUpsertArgs<ExtArgs>>): Prisma__QueueAgentClient<$Result.GetResult<Prisma.$QueueAgentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QueueAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueAgentCountArgs} args - Arguments to filter QueueAgents to count.
     * @example
     * // Count the number of QueueAgents
     * const count = await prisma.queueAgent.count({
     *   where: {
     *     // ... the filter for the QueueAgents we want to count
     *   }
     * })
    **/
    count<T extends QueueAgentCountArgs>(
      args?: Subset<T, QueueAgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueueAgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QueueAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueAgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QueueAgentAggregateArgs>(args: Subset<T, QueueAgentAggregateArgs>): Prisma.PrismaPromise<GetQueueAgentAggregateType<T>>

    /**
     * Group by QueueAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueueAgentGroupByArgs} args - Group by arguments.
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
      T extends QueueAgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueueAgentGroupByArgs['orderBy'] }
        : { orderBy?: QueueAgentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QueueAgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueueAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QueueAgent model
   */
  readonly fields: QueueAgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QueueAgent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueueAgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    queue<T extends AttendanceQueueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AttendanceQueueDefaultArgs<ExtArgs>>): Prisma__AttendanceQueueClient<$Result.GetResult<Prisma.$AttendanceQueuePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    instance<T extends WhatsAppInstanceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhatsAppInstanceDefaultArgs<ExtArgs>>): Prisma__WhatsAppInstanceClient<$Result.GetResult<Prisma.$WhatsAppInstancePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the QueueAgent model
   */ 
  interface QueueAgentFieldRefs {
    readonly id: FieldRef<"QueueAgent", 'String'>
    readonly order: FieldRef<"QueueAgent", 'Int'>
    readonly queueId: FieldRef<"QueueAgent", 'String'>
    readonly instanceId: FieldRef<"QueueAgent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QueueAgent findUnique
   */
  export type QueueAgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueAgent
     */
    select?: QueueAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueAgentInclude<ExtArgs> | null
    /**
     * Filter, which QueueAgent to fetch.
     */
    where: QueueAgentWhereUniqueInput
  }

  /**
   * QueueAgent findUniqueOrThrow
   */
  export type QueueAgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueAgent
     */
    select?: QueueAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueAgentInclude<ExtArgs> | null
    /**
     * Filter, which QueueAgent to fetch.
     */
    where: QueueAgentWhereUniqueInput
  }

  /**
   * QueueAgent findFirst
   */
  export type QueueAgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueAgent
     */
    select?: QueueAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueAgentInclude<ExtArgs> | null
    /**
     * Filter, which QueueAgent to fetch.
     */
    where?: QueueAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueAgents to fetch.
     */
    orderBy?: QueueAgentOrderByWithRelationInput | QueueAgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueueAgents.
     */
    cursor?: QueueAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueueAgents.
     */
    distinct?: QueueAgentScalarFieldEnum | QueueAgentScalarFieldEnum[]
  }

  /**
   * QueueAgent findFirstOrThrow
   */
  export type QueueAgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueAgent
     */
    select?: QueueAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueAgentInclude<ExtArgs> | null
    /**
     * Filter, which QueueAgent to fetch.
     */
    where?: QueueAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueAgents to fetch.
     */
    orderBy?: QueueAgentOrderByWithRelationInput | QueueAgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueueAgents.
     */
    cursor?: QueueAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueueAgents.
     */
    distinct?: QueueAgentScalarFieldEnum | QueueAgentScalarFieldEnum[]
  }

  /**
   * QueueAgent findMany
   */
  export type QueueAgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueAgent
     */
    select?: QueueAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueAgentInclude<ExtArgs> | null
    /**
     * Filter, which QueueAgents to fetch.
     */
    where?: QueueAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueueAgents to fetch.
     */
    orderBy?: QueueAgentOrderByWithRelationInput | QueueAgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QueueAgents.
     */
    cursor?: QueueAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueueAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueueAgents.
     */
    skip?: number
    distinct?: QueueAgentScalarFieldEnum | QueueAgentScalarFieldEnum[]
  }

  /**
   * QueueAgent create
   */
  export type QueueAgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueAgent
     */
    select?: QueueAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueAgentInclude<ExtArgs> | null
    /**
     * The data needed to create a QueueAgent.
     */
    data: XOR<QueueAgentCreateInput, QueueAgentUncheckedCreateInput>
  }

  /**
   * QueueAgent createMany
   */
  export type QueueAgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QueueAgents.
     */
    data: QueueAgentCreateManyInput | QueueAgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QueueAgent createManyAndReturn
   */
  export type QueueAgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueAgent
     */
    select?: QueueAgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QueueAgents.
     */
    data: QueueAgentCreateManyInput | QueueAgentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueAgentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QueueAgent update
   */
  export type QueueAgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueAgent
     */
    select?: QueueAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueAgentInclude<ExtArgs> | null
    /**
     * The data needed to update a QueueAgent.
     */
    data: XOR<QueueAgentUpdateInput, QueueAgentUncheckedUpdateInput>
    /**
     * Choose, which QueueAgent to update.
     */
    where: QueueAgentWhereUniqueInput
  }

  /**
   * QueueAgent updateMany
   */
  export type QueueAgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QueueAgents.
     */
    data: XOR<QueueAgentUpdateManyMutationInput, QueueAgentUncheckedUpdateManyInput>
    /**
     * Filter which QueueAgents to update
     */
    where?: QueueAgentWhereInput
  }

  /**
   * QueueAgent upsert
   */
  export type QueueAgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueAgent
     */
    select?: QueueAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueAgentInclude<ExtArgs> | null
    /**
     * The filter to search for the QueueAgent to update in case it exists.
     */
    where: QueueAgentWhereUniqueInput
    /**
     * In case the QueueAgent found by the `where` argument doesn't exist, create a new QueueAgent with this data.
     */
    create: XOR<QueueAgentCreateInput, QueueAgentUncheckedCreateInput>
    /**
     * In case the QueueAgent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueueAgentUpdateInput, QueueAgentUncheckedUpdateInput>
  }

  /**
   * QueueAgent delete
   */
  export type QueueAgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueAgent
     */
    select?: QueueAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueAgentInclude<ExtArgs> | null
    /**
     * Filter which QueueAgent to delete.
     */
    where: QueueAgentWhereUniqueInput
  }

  /**
   * QueueAgent deleteMany
   */
  export type QueueAgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueueAgents to delete
     */
    where?: QueueAgentWhereInput
  }

  /**
   * QueueAgent without action
   */
  export type QueueAgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueueAgent
     */
    select?: QueueAgentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueueAgentInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    tenantId: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    tenantId: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    color: number
    tenantId: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    tenantId?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    tenantId?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    tenantId?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    color: string | null
    tenantId: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    leads?: boolean | Tag$leadsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    tenantId?: boolean
  }

  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    leads?: boolean | Tag$leadsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string | null
      tenantId: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    leads<T extends Tag$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly color: FieldRef<"Tag", 'String'>
    readonly tenantId: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }

  /**
   * Tag.leads
   */
  export type Tag$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Audience
   */

  export type AggregateAudience = {
    _count: AudienceCountAggregateOutputType | null
    _min: AudienceMinAggregateOutputType | null
    _max: AudienceMaxAggregateOutputType | null
  }

  export type AudienceMinAggregateOutputType = {
    id: string | null
    name: string | null
    tenantId: string | null
  }

  export type AudienceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    tenantId: string | null
  }

  export type AudienceCountAggregateOutputType = {
    id: number
    name: number
    tenantId: number
    _all: number
  }


  export type AudienceMinAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
  }

  export type AudienceMaxAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
  }

  export type AudienceCountAggregateInputType = {
    id?: true
    name?: true
    tenantId?: true
    _all?: true
  }

  export type AudienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audience to aggregate.
     */
    where?: AudienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audiences to fetch.
     */
    orderBy?: AudienceOrderByWithRelationInput | AudienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AudienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Audiences
    **/
    _count?: true | AudienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AudienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AudienceMaxAggregateInputType
  }

  export type GetAudienceAggregateType<T extends AudienceAggregateArgs> = {
        [P in keyof T & keyof AggregateAudience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudience[P]>
      : GetScalarType<T[P], AggregateAudience[P]>
  }




  export type AudienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AudienceWhereInput
    orderBy?: AudienceOrderByWithAggregationInput | AudienceOrderByWithAggregationInput[]
    by: AudienceScalarFieldEnum[] | AudienceScalarFieldEnum
    having?: AudienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AudienceCountAggregateInputType | true
    _min?: AudienceMinAggregateInputType
    _max?: AudienceMaxAggregateInputType
  }

  export type AudienceGroupByOutputType = {
    id: string
    name: string
    tenantId: string
    _count: AudienceCountAggregateOutputType | null
    _min: AudienceMinAggregateOutputType | null
    _max: AudienceMaxAggregateOutputType | null
  }

  type GetAudienceGroupByPayload<T extends AudienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AudienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AudienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AudienceGroupByOutputType[P]>
            : GetScalarType<T[P], AudienceGroupByOutputType[P]>
        }
      >
    >


  export type AudienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    leads?: boolean | Audience$leadsArgs<ExtArgs>
    _count?: boolean | AudienceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audience"]>

  export type AudienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audience"]>

  export type AudienceSelectScalar = {
    id?: boolean
    name?: boolean
    tenantId?: boolean
  }

  export type AudienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    leads?: boolean | Audience$leadsArgs<ExtArgs>
    _count?: boolean | AudienceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AudienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $AudiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Audience"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      tenantId: string
    }, ExtArgs["result"]["audience"]>
    composites: {}
  }

  type AudienceGetPayload<S extends boolean | null | undefined | AudienceDefaultArgs> = $Result.GetResult<Prisma.$AudiencePayload, S>

  type AudienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AudienceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AudienceCountAggregateInputType | true
    }

  export interface AudienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Audience'], meta: { name: 'Audience' } }
    /**
     * Find zero or one Audience that matches the filter.
     * @param {AudienceFindUniqueArgs} args - Arguments to find a Audience
     * @example
     * // Get one Audience
     * const audience = await prisma.audience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AudienceFindUniqueArgs>(args: SelectSubset<T, AudienceFindUniqueArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Audience that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AudienceFindUniqueOrThrowArgs} args - Arguments to find a Audience
     * @example
     * // Get one Audience
     * const audience = await prisma.audience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AudienceFindUniqueOrThrowArgs>(args: SelectSubset<T, AudienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Audience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceFindFirstArgs} args - Arguments to find a Audience
     * @example
     * // Get one Audience
     * const audience = await prisma.audience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AudienceFindFirstArgs>(args?: SelectSubset<T, AudienceFindFirstArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Audience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceFindFirstOrThrowArgs} args - Arguments to find a Audience
     * @example
     * // Get one Audience
     * const audience = await prisma.audience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AudienceFindFirstOrThrowArgs>(args?: SelectSubset<T, AudienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Audiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audiences
     * const audiences = await prisma.audience.findMany()
     * 
     * // Get first 10 Audiences
     * const audiences = await prisma.audience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audienceWithIdOnly = await prisma.audience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AudienceFindManyArgs>(args?: SelectSubset<T, AudienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Audience.
     * @param {AudienceCreateArgs} args - Arguments to create a Audience.
     * @example
     * // Create one Audience
     * const Audience = await prisma.audience.create({
     *   data: {
     *     // ... data to create a Audience
     *   }
     * })
     * 
     */
    create<T extends AudienceCreateArgs>(args: SelectSubset<T, AudienceCreateArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Audiences.
     * @param {AudienceCreateManyArgs} args - Arguments to create many Audiences.
     * @example
     * // Create many Audiences
     * const audience = await prisma.audience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AudienceCreateManyArgs>(args?: SelectSubset<T, AudienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audiences and returns the data saved in the database.
     * @param {AudienceCreateManyAndReturnArgs} args - Arguments to create many Audiences.
     * @example
     * // Create many Audiences
     * const audience = await prisma.audience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audiences and only return the `id`
     * const audienceWithIdOnly = await prisma.audience.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AudienceCreateManyAndReturnArgs>(args?: SelectSubset<T, AudienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Audience.
     * @param {AudienceDeleteArgs} args - Arguments to delete one Audience.
     * @example
     * // Delete one Audience
     * const Audience = await prisma.audience.delete({
     *   where: {
     *     // ... filter to delete one Audience
     *   }
     * })
     * 
     */
    delete<T extends AudienceDeleteArgs>(args: SelectSubset<T, AudienceDeleteArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Audience.
     * @param {AudienceUpdateArgs} args - Arguments to update one Audience.
     * @example
     * // Update one Audience
     * const audience = await prisma.audience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AudienceUpdateArgs>(args: SelectSubset<T, AudienceUpdateArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Audiences.
     * @param {AudienceDeleteManyArgs} args - Arguments to filter Audiences to delete.
     * @example
     * // Delete a few Audiences
     * const { count } = await prisma.audience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AudienceDeleteManyArgs>(args?: SelectSubset<T, AudienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audiences
     * const audience = await prisma.audience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AudienceUpdateManyArgs>(args: SelectSubset<T, AudienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Audience.
     * @param {AudienceUpsertArgs} args - Arguments to update or create a Audience.
     * @example
     * // Update or create a Audience
     * const audience = await prisma.audience.upsert({
     *   create: {
     *     // ... data to create a Audience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audience we want to update
     *   }
     * })
     */
    upsert<T extends AudienceUpsertArgs>(args: SelectSubset<T, AudienceUpsertArgs<ExtArgs>>): Prisma__AudienceClient<$Result.GetResult<Prisma.$AudiencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Audiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceCountArgs} args - Arguments to filter Audiences to count.
     * @example
     * // Count the number of Audiences
     * const count = await prisma.audience.count({
     *   where: {
     *     // ... the filter for the Audiences we want to count
     *   }
     * })
    **/
    count<T extends AudienceCountArgs>(
      args?: Subset<T, AudienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AudienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AudienceAggregateArgs>(args: Subset<T, AudienceAggregateArgs>): Prisma.PrismaPromise<GetAudienceAggregateType<T>>

    /**
     * Group by Audience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AudienceGroupByArgs} args - Group by arguments.
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
      T extends AudienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AudienceGroupByArgs['orderBy'] }
        : { orderBy?: AudienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AudienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Audience model
   */
  readonly fields: AudienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Audience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AudienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    leads<T extends Audience$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Audience$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Audience model
   */ 
  interface AudienceFieldRefs {
    readonly id: FieldRef<"Audience", 'String'>
    readonly name: FieldRef<"Audience", 'String'>
    readonly tenantId: FieldRef<"Audience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Audience findUnique
   */
  export type AudienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * Filter, which Audience to fetch.
     */
    where: AudienceWhereUniqueInput
  }

  /**
   * Audience findUniqueOrThrow
   */
  export type AudienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * Filter, which Audience to fetch.
     */
    where: AudienceWhereUniqueInput
  }

  /**
   * Audience findFirst
   */
  export type AudienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * Filter, which Audience to fetch.
     */
    where?: AudienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audiences to fetch.
     */
    orderBy?: AudienceOrderByWithRelationInput | AudienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audiences.
     */
    cursor?: AudienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audiences.
     */
    distinct?: AudienceScalarFieldEnum | AudienceScalarFieldEnum[]
  }

  /**
   * Audience findFirstOrThrow
   */
  export type AudienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * Filter, which Audience to fetch.
     */
    where?: AudienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audiences to fetch.
     */
    orderBy?: AudienceOrderByWithRelationInput | AudienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audiences.
     */
    cursor?: AudienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audiences.
     */
    distinct?: AudienceScalarFieldEnum | AudienceScalarFieldEnum[]
  }

  /**
   * Audience findMany
   */
  export type AudienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * Filter, which Audiences to fetch.
     */
    where?: AudienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audiences to fetch.
     */
    orderBy?: AudienceOrderByWithRelationInput | AudienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Audiences.
     */
    cursor?: AudienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audiences.
     */
    skip?: number
    distinct?: AudienceScalarFieldEnum | AudienceScalarFieldEnum[]
  }

  /**
   * Audience create
   */
  export type AudienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Audience.
     */
    data: XOR<AudienceCreateInput, AudienceUncheckedCreateInput>
  }

  /**
   * Audience createMany
   */
  export type AudienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Audiences.
     */
    data: AudienceCreateManyInput | AudienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Audience createManyAndReturn
   */
  export type AudienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Audiences.
     */
    data: AudienceCreateManyInput | AudienceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audience update
   */
  export type AudienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Audience.
     */
    data: XOR<AudienceUpdateInput, AudienceUncheckedUpdateInput>
    /**
     * Choose, which Audience to update.
     */
    where: AudienceWhereUniqueInput
  }

  /**
   * Audience updateMany
   */
  export type AudienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Audiences.
     */
    data: XOR<AudienceUpdateManyMutationInput, AudienceUncheckedUpdateManyInput>
    /**
     * Filter which Audiences to update
     */
    where?: AudienceWhereInput
  }

  /**
   * Audience upsert
   */
  export type AudienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Audience to update in case it exists.
     */
    where: AudienceWhereUniqueInput
    /**
     * In case the Audience found by the `where` argument doesn't exist, create a new Audience with this data.
     */
    create: XOR<AudienceCreateInput, AudienceUncheckedCreateInput>
    /**
     * In case the Audience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AudienceUpdateInput, AudienceUncheckedUpdateInput>
  }

  /**
   * Audience delete
   */
  export type AudienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
    /**
     * Filter which Audience to delete.
     */
    where: AudienceWhereUniqueInput
  }

  /**
   * Audience deleteMany
   */
  export type AudienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audiences to delete
     */
    where?: AudienceWhereInput
  }

  /**
   * Audience.leads
   */
  export type Audience$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Audience without action
   */
  export type AudienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audience
     */
    select?: AudienceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AudienceInclude<ExtArgs> | null
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


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    evolutionUrl: 'evolutionUrl',
    evolutionToken: 'evolutionToken',
    maxUsers: 'maxUsers',
    maxLeads: 'maxLeads',
    maxWorkflows: 'maxWorkflows',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    subject: 'subject',
    content: 'content',
    status: 'status',
    sentCount: 'sentCount',
    openRate: 'openRate',
    clickRate: 'clickRate',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const SmtpAccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    host: 'host',
    port: 'port',
    user: 'user',
    pass: 'pass',
    secure: 'secure',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SmtpAccountScalarFieldEnum = (typeof SmtpAccountScalarFieldEnum)[keyof typeof SmtpAccountScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    planId: 'planId',
    tenantId: 'tenantId',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubId: 'stripeSubId',
    status: 'status',
    currentPeriodEnd: 'currentPeriodEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    interval: 'interval',
    maxUsers: 'maxUsers',
    maxLeads: 'maxLeads',
    maxWorkflows: 'maxWorkflows',
    stripePriceId: 'stripePriceId',
    createdAt: 'createdAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const IntegrationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    platform: 'platform',
    type: 'type',
    webhookKey: 'webhookKey',
    config: 'config',
    autoTag: 'autoTag',
    tenantId: 'tenantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntegrationScalarFieldEnum = (typeof IntegrationScalarFieldEnum)[keyof typeof IntegrationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    tenantId: 'tenantId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    status: 'status',
    nodes: 'nodes',
    connections: 'connections',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tenantId: 'tenantId'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const WorkflowExecutionScalarFieldEnum: {
    id: 'id',
    status: 'status',
    currentNode: 'currentNode',
    nextStepAt: 'nextStepAt',
    workflowId: 'workflowId',
    leadId: 'leadId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkflowExecutionScalarFieldEnum = (typeof WorkflowExecutionScalarFieldEnum)[keyof typeof WorkflowExecutionScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    status: 'status',
    source: 'source',
    obs: 'obs',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tenantId: 'tenantId'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const WhatsAppInstanceScalarFieldEnum: {
    id: 'id',
    instanceName: 'instanceName',
    owner: 'owner',
    type: 'type',
    status: 'status',
    aiEnabled: 'aiEnabled',
    aiPrompt: 'aiPrompt',
    aiModel: 'aiModel',
    knowledgeBase: 'knowledgeBase',
    tenantId: 'tenantId'
  };

  export type WhatsAppInstanceScalarFieldEnum = (typeof WhatsAppInstanceScalarFieldEnum)[keyof typeof WhatsAppInstanceScalarFieldEnum]


  export const AttendanceQueueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mainInstanceId: 'mainInstanceId',
    tenantId: 'tenantId',
    lastAgentIndex: 'lastAgentIndex'
  };

  export type AttendanceQueueScalarFieldEnum = (typeof AttendanceQueueScalarFieldEnum)[keyof typeof AttendanceQueueScalarFieldEnum]


  export const QueueAgentScalarFieldEnum: {
    id: 'id',
    order: 'order',
    queueId: 'queueId',
    instanceId: 'instanceId'
  };

  export type QueueAgentScalarFieldEnum = (typeof QueueAgentScalarFieldEnum)[keyof typeof QueueAgentScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    tenantId: 'tenantId'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const AudienceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    tenantId: 'tenantId'
  };

  export type AudienceScalarFieldEnum = (typeof AudienceScalarFieldEnum)[keyof typeof AudienceScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    slug?: StringNullableFilter<"Tenant"> | string | null
    evolutionUrl?: StringNullableFilter<"Tenant"> | string | null
    evolutionToken?: StringNullableFilter<"Tenant"> | string | null
    maxUsers?: IntFilter<"Tenant"> | number
    maxLeads?: IntFilter<"Tenant"> | number
    maxWorkflows?: IntFilter<"Tenant"> | number
    status?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    leads?: LeadListRelationFilter
    tags?: TagListRelationFilter
    audiences?: AudienceListRelationFilter
    instances?: WhatsAppInstanceListRelationFilter
    queues?: AttendanceQueueListRelationFilter
    workflows?: WorkflowListRelationFilter
    integrations?: IntegrationListRelationFilter
    smtpAccounts?: SmtpAccountListRelationFilter
    campaigns?: CampaignListRelationFilter
    subscription?: XOR<SubscriptionNullableRelationFilter, SubscriptionWhereInput> | null
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    evolutionUrl?: SortOrderInput | SortOrder
    evolutionToken?: SortOrderInput | SortOrder
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    audiences?: AudienceOrderByRelationAggregateInput
    instances?: WhatsAppInstanceOrderByRelationAggregateInput
    queues?: AttendanceQueueOrderByRelationAggregateInput
    workflows?: WorkflowOrderByRelationAggregateInput
    integrations?: IntegrationOrderByRelationAggregateInput
    smtpAccounts?: SmtpAccountOrderByRelationAggregateInput
    campaigns?: CampaignOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    evolutionUrl?: StringNullableFilter<"Tenant"> | string | null
    evolutionToken?: StringNullableFilter<"Tenant"> | string | null
    maxUsers?: IntFilter<"Tenant"> | number
    maxLeads?: IntFilter<"Tenant"> | number
    maxWorkflows?: IntFilter<"Tenant"> | number
    status?: StringFilter<"Tenant"> | string
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    leads?: LeadListRelationFilter
    tags?: TagListRelationFilter
    audiences?: AudienceListRelationFilter
    instances?: WhatsAppInstanceListRelationFilter
    queues?: AttendanceQueueListRelationFilter
    workflows?: WorkflowListRelationFilter
    integrations?: IntegrationListRelationFilter
    smtpAccounts?: SmtpAccountListRelationFilter
    campaigns?: CampaignListRelationFilter
    subscription?: XOR<SubscriptionNullableRelationFilter, SubscriptionWhereInput> | null
  }, "id" | "slug">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    evolutionUrl?: SortOrderInput | SortOrder
    evolutionToken?: SortOrderInput | SortOrder
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _avg?: TenantAvgOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
    _sum?: TenantSumOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    slug?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    evolutionUrl?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    evolutionToken?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    maxUsers?: IntWithAggregatesFilter<"Tenant"> | number
    maxLeads?: IntWithAggregatesFilter<"Tenant"> | number
    maxWorkflows?: IntWithAggregatesFilter<"Tenant"> | number
    status?: StringWithAggregatesFilter<"Tenant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    subject?: StringFilter<"Campaign"> | string
    content?: StringFilter<"Campaign"> | string
    status?: StringFilter<"Campaign"> | string
    sentCount?: IntFilter<"Campaign"> | number
    openRate?: FloatFilter<"Campaign"> | number
    clickRate?: FloatFilter<"Campaign"> | number
    tenantId?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sentCount?: SortOrder
    openRate?: SortOrder
    clickRate?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    subject?: StringFilter<"Campaign"> | string
    content?: StringFilter<"Campaign"> | string
    status?: StringFilter<"Campaign"> | string
    sentCount?: IntFilter<"Campaign"> | number
    openRate?: FloatFilter<"Campaign"> | number
    clickRate?: FloatFilter<"Campaign"> | number
    tenantId?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sentCount?: SortOrder
    openRate?: SortOrder
    clickRate?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    subject?: StringWithAggregatesFilter<"Campaign"> | string
    content?: StringWithAggregatesFilter<"Campaign"> | string
    status?: StringWithAggregatesFilter<"Campaign"> | string
    sentCount?: IntWithAggregatesFilter<"Campaign"> | number
    openRate?: FloatWithAggregatesFilter<"Campaign"> | number
    clickRate?: FloatWithAggregatesFilter<"Campaign"> | number
    tenantId?: StringWithAggregatesFilter<"Campaign"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type SmtpAccountWhereInput = {
    AND?: SmtpAccountWhereInput | SmtpAccountWhereInput[]
    OR?: SmtpAccountWhereInput[]
    NOT?: SmtpAccountWhereInput | SmtpAccountWhereInput[]
    id?: StringFilter<"SmtpAccount"> | string
    name?: StringFilter<"SmtpAccount"> | string
    host?: StringFilter<"SmtpAccount"> | string
    port?: IntFilter<"SmtpAccount"> | number
    user?: StringFilter<"SmtpAccount"> | string
    pass?: StringFilter<"SmtpAccount"> | string
    secure?: BoolFilter<"SmtpAccount"> | boolean
    tenantId?: StringFilter<"SmtpAccount"> | string
    createdAt?: DateTimeFilter<"SmtpAccount"> | Date | string
    updatedAt?: DateTimeFilter<"SmtpAccount"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type SmtpAccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    host?: SortOrder
    port?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    secure?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type SmtpAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SmtpAccountWhereInput | SmtpAccountWhereInput[]
    OR?: SmtpAccountWhereInput[]
    NOT?: SmtpAccountWhereInput | SmtpAccountWhereInput[]
    name?: StringFilter<"SmtpAccount"> | string
    host?: StringFilter<"SmtpAccount"> | string
    port?: IntFilter<"SmtpAccount"> | number
    user?: StringFilter<"SmtpAccount"> | string
    pass?: StringFilter<"SmtpAccount"> | string
    secure?: BoolFilter<"SmtpAccount"> | boolean
    tenantId?: StringFilter<"SmtpAccount"> | string
    createdAt?: DateTimeFilter<"SmtpAccount"> | Date | string
    updatedAt?: DateTimeFilter<"SmtpAccount"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id">

  export type SmtpAccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    host?: SortOrder
    port?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    secure?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SmtpAccountCountOrderByAggregateInput
    _avg?: SmtpAccountAvgOrderByAggregateInput
    _max?: SmtpAccountMaxOrderByAggregateInput
    _min?: SmtpAccountMinOrderByAggregateInput
    _sum?: SmtpAccountSumOrderByAggregateInput
  }

  export type SmtpAccountScalarWhereWithAggregatesInput = {
    AND?: SmtpAccountScalarWhereWithAggregatesInput | SmtpAccountScalarWhereWithAggregatesInput[]
    OR?: SmtpAccountScalarWhereWithAggregatesInput[]
    NOT?: SmtpAccountScalarWhereWithAggregatesInput | SmtpAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SmtpAccount"> | string
    name?: StringWithAggregatesFilter<"SmtpAccount"> | string
    host?: StringWithAggregatesFilter<"SmtpAccount"> | string
    port?: IntWithAggregatesFilter<"SmtpAccount"> | number
    user?: StringWithAggregatesFilter<"SmtpAccount"> | string
    pass?: StringWithAggregatesFilter<"SmtpAccount"> | string
    secure?: BoolWithAggregatesFilter<"SmtpAccount"> | boolean
    tenantId?: StringWithAggregatesFilter<"SmtpAccount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SmtpAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SmtpAccount"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    tenantId?: StringFilter<"Subscription"> | string
    stripeCustomerId?: StringNullableFilter<"Subscription"> | string | null
    stripeSubId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    planId?: SortOrder
    tenantId?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubId?: SortOrderInput | SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: PlanOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tenantId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    planId?: StringFilter<"Subscription"> | string
    stripeCustomerId?: StringNullableFilter<"Subscription"> | string | null
    stripeSubId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id" | "tenantId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    planId?: SortOrder
    tenantId?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubId?: SortOrderInput | SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    tenantId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeCustomerId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    stripeSubId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    status?: StringWithAggregatesFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    price?: FloatFilter<"Plan"> | number
    interval?: StringFilter<"Plan"> | string
    maxUsers?: IntFilter<"Plan"> | number
    maxLeads?: IntFilter<"Plan"> | number
    maxWorkflows?: IntFilter<"Plan"> | number
    stripePriceId?: StringNullableFilter<"Plan"> | string | null
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    interval?: SortOrder
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
    stripePriceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    price?: FloatFilter<"Plan"> | number
    interval?: StringFilter<"Plan"> | string
    maxUsers?: IntFilter<"Plan"> | number
    maxLeads?: IntFilter<"Plan"> | number
    maxWorkflows?: IntFilter<"Plan"> | number
    stripePriceId?: StringNullableFilter<"Plan"> | string | null
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    interval?: SortOrder
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
    stripePriceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    price?: FloatWithAggregatesFilter<"Plan"> | number
    interval?: StringWithAggregatesFilter<"Plan"> | string
    maxUsers?: IntWithAggregatesFilter<"Plan"> | number
    maxLeads?: IntWithAggregatesFilter<"Plan"> | number
    maxWorkflows?: IntWithAggregatesFilter<"Plan"> | number
    stripePriceId?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type IntegrationWhereInput = {
    AND?: IntegrationWhereInput | IntegrationWhereInput[]
    OR?: IntegrationWhereInput[]
    NOT?: IntegrationWhereInput | IntegrationWhereInput[]
    id?: StringFilter<"Integration"> | string
    name?: StringFilter<"Integration"> | string
    platform?: StringFilter<"Integration"> | string
    type?: StringFilter<"Integration"> | string
    webhookKey?: StringFilter<"Integration"> | string
    config?: StringNullableFilter<"Integration"> | string | null
    autoTag?: StringNullableFilter<"Integration"> | string | null
    tenantId?: StringFilter<"Integration"> | string
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type IntegrationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    type?: SortOrder
    webhookKey?: SortOrder
    config?: SortOrderInput | SortOrder
    autoTag?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type IntegrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    webhookKey?: string
    AND?: IntegrationWhereInput | IntegrationWhereInput[]
    OR?: IntegrationWhereInput[]
    NOT?: IntegrationWhereInput | IntegrationWhereInput[]
    name?: StringFilter<"Integration"> | string
    platform?: StringFilter<"Integration"> | string
    type?: StringFilter<"Integration"> | string
    config?: StringNullableFilter<"Integration"> | string | null
    autoTag?: StringNullableFilter<"Integration"> | string | null
    tenantId?: StringFilter<"Integration"> | string
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id" | "webhookKey">

  export type IntegrationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    type?: SortOrder
    webhookKey?: SortOrder
    config?: SortOrderInput | SortOrder
    autoTag?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IntegrationCountOrderByAggregateInput
    _max?: IntegrationMaxOrderByAggregateInput
    _min?: IntegrationMinOrderByAggregateInput
  }

  export type IntegrationScalarWhereWithAggregatesInput = {
    AND?: IntegrationScalarWhereWithAggregatesInput | IntegrationScalarWhereWithAggregatesInput[]
    OR?: IntegrationScalarWhereWithAggregatesInput[]
    NOT?: IntegrationScalarWhereWithAggregatesInput | IntegrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Integration"> | string
    name?: StringWithAggregatesFilter<"Integration"> | string
    platform?: StringWithAggregatesFilter<"Integration"> | string
    type?: StringWithAggregatesFilter<"Integration"> | string
    webhookKey?: StringWithAggregatesFilter<"Integration"> | string
    config?: StringNullableWithAggregatesFilter<"Integration"> | string | null
    autoTag?: StringNullableWithAggregatesFilter<"Integration"> | string | null
    tenantId?: StringWithAggregatesFilter<"Integration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Integration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Integration"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    tenantId?: StringFilter<"User"> | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    tenantId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    tenantId?: StringFilter<"User"> | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    tenantId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    tenantId?: StringWithAggregatesFilter<"User"> | string
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    status?: StringFilter<"Workflow"> | string
    nodes?: StringFilter<"Workflow"> | string
    connections?: StringFilter<"Workflow"> | string
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    tenantId?: StringFilter<"Workflow"> | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    executions?: WorkflowExecutionListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    nodes?: SortOrder
    connections?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    executions?: WorkflowExecutionOrderByRelationAggregateInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    status?: StringFilter<"Workflow"> | string
    nodes?: StringFilter<"Workflow"> | string
    connections?: StringFilter<"Workflow"> | string
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    tenantId?: StringFilter<"Workflow"> | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    executions?: WorkflowExecutionListRelationFilter
  }, "id">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    nodes?: SortOrder
    connections?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workflow"> | string
    name?: StringWithAggregatesFilter<"Workflow"> | string
    description?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    status?: StringWithAggregatesFilter<"Workflow"> | string
    nodes?: StringWithAggregatesFilter<"Workflow"> | string
    connections?: StringWithAggregatesFilter<"Workflow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
    tenantId?: StringWithAggregatesFilter<"Workflow"> | string
  }

  export type WorkflowExecutionWhereInput = {
    AND?: WorkflowExecutionWhereInput | WorkflowExecutionWhereInput[]
    OR?: WorkflowExecutionWhereInput[]
    NOT?: WorkflowExecutionWhereInput | WorkflowExecutionWhereInput[]
    id?: StringFilter<"WorkflowExecution"> | string
    status?: StringFilter<"WorkflowExecution"> | string
    currentNode?: StringNullableFilter<"WorkflowExecution"> | string | null
    nextStepAt?: DateTimeNullableFilter<"WorkflowExecution"> | Date | string | null
    workflowId?: StringFilter<"WorkflowExecution"> | string
    leadId?: StringFilter<"WorkflowExecution"> | string
    createdAt?: DateTimeFilter<"WorkflowExecution"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowExecution"> | Date | string
    workflow?: XOR<WorkflowRelationFilter, WorkflowWhereInput>
    lead?: XOR<LeadRelationFilter, LeadWhereInput>
  }

  export type WorkflowExecutionOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    currentNode?: SortOrderInput | SortOrder
    nextStepAt?: SortOrderInput | SortOrder
    workflowId?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    lead?: LeadOrderByWithRelationInput
  }

  export type WorkflowExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workflowId_leadId?: WorkflowExecutionWorkflowIdLeadIdCompoundUniqueInput
    AND?: WorkflowExecutionWhereInput | WorkflowExecutionWhereInput[]
    OR?: WorkflowExecutionWhereInput[]
    NOT?: WorkflowExecutionWhereInput | WorkflowExecutionWhereInput[]
    status?: StringFilter<"WorkflowExecution"> | string
    currentNode?: StringNullableFilter<"WorkflowExecution"> | string | null
    nextStepAt?: DateTimeNullableFilter<"WorkflowExecution"> | Date | string | null
    workflowId?: StringFilter<"WorkflowExecution"> | string
    leadId?: StringFilter<"WorkflowExecution"> | string
    createdAt?: DateTimeFilter<"WorkflowExecution"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowExecution"> | Date | string
    workflow?: XOR<WorkflowRelationFilter, WorkflowWhereInput>
    lead?: XOR<LeadRelationFilter, LeadWhereInput>
  }, "id" | "workflowId_leadId">

  export type WorkflowExecutionOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    currentNode?: SortOrderInput | SortOrder
    nextStepAt?: SortOrderInput | SortOrder
    workflowId?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkflowExecutionCountOrderByAggregateInput
    _max?: WorkflowExecutionMaxOrderByAggregateInput
    _min?: WorkflowExecutionMinOrderByAggregateInput
  }

  export type WorkflowExecutionScalarWhereWithAggregatesInput = {
    AND?: WorkflowExecutionScalarWhereWithAggregatesInput | WorkflowExecutionScalarWhereWithAggregatesInput[]
    OR?: WorkflowExecutionScalarWhereWithAggregatesInput[]
    NOT?: WorkflowExecutionScalarWhereWithAggregatesInput | WorkflowExecutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkflowExecution"> | string
    status?: StringWithAggregatesFilter<"WorkflowExecution"> | string
    currentNode?: StringNullableWithAggregatesFilter<"WorkflowExecution"> | string | null
    nextStepAt?: DateTimeNullableWithAggregatesFilter<"WorkflowExecution"> | Date | string | null
    workflowId?: StringWithAggregatesFilter<"WorkflowExecution"> | string
    leadId?: StringWithAggregatesFilter<"WorkflowExecution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowExecution"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkflowExecution"> | Date | string
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    name?: StringFilter<"Lead"> | string
    phone?: StringFilter<"Lead"> | string
    email?: StringNullableFilter<"Lead"> | string | null
    status?: StringFilter<"Lead"> | string
    source?: StringFilter<"Lead"> | string
    obs?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    tenantId?: StringFilter<"Lead"> | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    tags?: TagListRelationFilter
    audiences?: AudienceListRelationFilter
    workflowExec?: WorkflowExecutionListRelationFilter
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrder
    source?: SortOrder
    obs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
    audiences?: AudienceOrderByRelationAggregateInput
    workflowExec?: WorkflowExecutionOrderByRelationAggregateInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    name?: StringFilter<"Lead"> | string
    phone?: StringFilter<"Lead"> | string
    email?: StringNullableFilter<"Lead"> | string | null
    status?: StringFilter<"Lead"> | string
    source?: StringFilter<"Lead"> | string
    obs?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    tenantId?: StringFilter<"Lead"> | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    tags?: TagListRelationFilter
    audiences?: AudienceListRelationFilter
    workflowExec?: WorkflowExecutionListRelationFilter
  }, "id">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrder
    source?: SortOrder
    obs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    name?: StringWithAggregatesFilter<"Lead"> | string
    phone?: StringWithAggregatesFilter<"Lead"> | string
    email?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    status?: StringWithAggregatesFilter<"Lead"> | string
    source?: StringWithAggregatesFilter<"Lead"> | string
    obs?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    tenantId?: StringWithAggregatesFilter<"Lead"> | string
  }

  export type WhatsAppInstanceWhereInput = {
    AND?: WhatsAppInstanceWhereInput | WhatsAppInstanceWhereInput[]
    OR?: WhatsAppInstanceWhereInput[]
    NOT?: WhatsAppInstanceWhereInput | WhatsAppInstanceWhereInput[]
    id?: StringFilter<"WhatsAppInstance"> | string
    instanceName?: StringFilter<"WhatsAppInstance"> | string
    owner?: StringNullableFilter<"WhatsAppInstance"> | string | null
    type?: StringFilter<"WhatsAppInstance"> | string
    status?: StringFilter<"WhatsAppInstance"> | string
    aiEnabled?: BoolFilter<"WhatsAppInstance"> | boolean
    aiPrompt?: StringNullableFilter<"WhatsAppInstance"> | string | null
    aiModel?: StringFilter<"WhatsAppInstance"> | string
    knowledgeBase?: StringNullableFilter<"WhatsAppInstance"> | string | null
    tenantId?: StringFilter<"WhatsAppInstance"> | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    asMainInQueues?: AttendanceQueueListRelationFilter
    asAgentInQueues?: QueueAgentListRelationFilter
  }

  export type WhatsAppInstanceOrderByWithRelationInput = {
    id?: SortOrder
    instanceName?: SortOrder
    owner?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    aiEnabled?: SortOrder
    aiPrompt?: SortOrderInput | SortOrder
    aiModel?: SortOrder
    knowledgeBase?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    asMainInQueues?: AttendanceQueueOrderByRelationAggregateInput
    asAgentInQueues?: QueueAgentOrderByRelationAggregateInput
  }

  export type WhatsAppInstanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WhatsAppInstanceWhereInput | WhatsAppInstanceWhereInput[]
    OR?: WhatsAppInstanceWhereInput[]
    NOT?: WhatsAppInstanceWhereInput | WhatsAppInstanceWhereInput[]
    instanceName?: StringFilter<"WhatsAppInstance"> | string
    owner?: StringNullableFilter<"WhatsAppInstance"> | string | null
    type?: StringFilter<"WhatsAppInstance"> | string
    status?: StringFilter<"WhatsAppInstance"> | string
    aiEnabled?: BoolFilter<"WhatsAppInstance"> | boolean
    aiPrompt?: StringNullableFilter<"WhatsAppInstance"> | string | null
    aiModel?: StringFilter<"WhatsAppInstance"> | string
    knowledgeBase?: StringNullableFilter<"WhatsAppInstance"> | string | null
    tenantId?: StringFilter<"WhatsAppInstance"> | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    asMainInQueues?: AttendanceQueueListRelationFilter
    asAgentInQueues?: QueueAgentListRelationFilter
  }, "id">

  export type WhatsAppInstanceOrderByWithAggregationInput = {
    id?: SortOrder
    instanceName?: SortOrder
    owner?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    aiEnabled?: SortOrder
    aiPrompt?: SortOrderInput | SortOrder
    aiModel?: SortOrder
    knowledgeBase?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    _count?: WhatsAppInstanceCountOrderByAggregateInput
    _max?: WhatsAppInstanceMaxOrderByAggregateInput
    _min?: WhatsAppInstanceMinOrderByAggregateInput
  }

  export type WhatsAppInstanceScalarWhereWithAggregatesInput = {
    AND?: WhatsAppInstanceScalarWhereWithAggregatesInput | WhatsAppInstanceScalarWhereWithAggregatesInput[]
    OR?: WhatsAppInstanceScalarWhereWithAggregatesInput[]
    NOT?: WhatsAppInstanceScalarWhereWithAggregatesInput | WhatsAppInstanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhatsAppInstance"> | string
    instanceName?: StringWithAggregatesFilter<"WhatsAppInstance"> | string
    owner?: StringNullableWithAggregatesFilter<"WhatsAppInstance"> | string | null
    type?: StringWithAggregatesFilter<"WhatsAppInstance"> | string
    status?: StringWithAggregatesFilter<"WhatsAppInstance"> | string
    aiEnabled?: BoolWithAggregatesFilter<"WhatsAppInstance"> | boolean
    aiPrompt?: StringNullableWithAggregatesFilter<"WhatsAppInstance"> | string | null
    aiModel?: StringWithAggregatesFilter<"WhatsAppInstance"> | string
    knowledgeBase?: StringNullableWithAggregatesFilter<"WhatsAppInstance"> | string | null
    tenantId?: StringWithAggregatesFilter<"WhatsAppInstance"> | string
  }

  export type AttendanceQueueWhereInput = {
    AND?: AttendanceQueueWhereInput | AttendanceQueueWhereInput[]
    OR?: AttendanceQueueWhereInput[]
    NOT?: AttendanceQueueWhereInput | AttendanceQueueWhereInput[]
    id?: StringFilter<"AttendanceQueue"> | string
    name?: StringFilter<"AttendanceQueue"> | string
    mainInstanceId?: StringFilter<"AttendanceQueue"> | string
    tenantId?: StringFilter<"AttendanceQueue"> | string
    lastAgentIndex?: IntFilter<"AttendanceQueue"> | number
    mainInstance?: XOR<WhatsAppInstanceRelationFilter, WhatsAppInstanceWhereInput>
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    agents?: QueueAgentListRelationFilter
  }

  export type AttendanceQueueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mainInstanceId?: SortOrder
    tenantId?: SortOrder
    lastAgentIndex?: SortOrder
    mainInstance?: WhatsAppInstanceOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    agents?: QueueAgentOrderByRelationAggregateInput
  }

  export type AttendanceQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceQueueWhereInput | AttendanceQueueWhereInput[]
    OR?: AttendanceQueueWhereInput[]
    NOT?: AttendanceQueueWhereInput | AttendanceQueueWhereInput[]
    name?: StringFilter<"AttendanceQueue"> | string
    mainInstanceId?: StringFilter<"AttendanceQueue"> | string
    tenantId?: StringFilter<"AttendanceQueue"> | string
    lastAgentIndex?: IntFilter<"AttendanceQueue"> | number
    mainInstance?: XOR<WhatsAppInstanceRelationFilter, WhatsAppInstanceWhereInput>
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    agents?: QueueAgentListRelationFilter
  }, "id">

  export type AttendanceQueueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    mainInstanceId?: SortOrder
    tenantId?: SortOrder
    lastAgentIndex?: SortOrder
    _count?: AttendanceQueueCountOrderByAggregateInput
    _avg?: AttendanceQueueAvgOrderByAggregateInput
    _max?: AttendanceQueueMaxOrderByAggregateInput
    _min?: AttendanceQueueMinOrderByAggregateInput
    _sum?: AttendanceQueueSumOrderByAggregateInput
  }

  export type AttendanceQueueScalarWhereWithAggregatesInput = {
    AND?: AttendanceQueueScalarWhereWithAggregatesInput | AttendanceQueueScalarWhereWithAggregatesInput[]
    OR?: AttendanceQueueScalarWhereWithAggregatesInput[]
    NOT?: AttendanceQueueScalarWhereWithAggregatesInput | AttendanceQueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttendanceQueue"> | string
    name?: StringWithAggregatesFilter<"AttendanceQueue"> | string
    mainInstanceId?: StringWithAggregatesFilter<"AttendanceQueue"> | string
    tenantId?: StringWithAggregatesFilter<"AttendanceQueue"> | string
    lastAgentIndex?: IntWithAggregatesFilter<"AttendanceQueue"> | number
  }

  export type QueueAgentWhereInput = {
    AND?: QueueAgentWhereInput | QueueAgentWhereInput[]
    OR?: QueueAgentWhereInput[]
    NOT?: QueueAgentWhereInput | QueueAgentWhereInput[]
    id?: StringFilter<"QueueAgent"> | string
    order?: IntFilter<"QueueAgent"> | number
    queueId?: StringFilter<"QueueAgent"> | string
    instanceId?: StringFilter<"QueueAgent"> | string
    queue?: XOR<AttendanceQueueRelationFilter, AttendanceQueueWhereInput>
    instance?: XOR<WhatsAppInstanceRelationFilter, WhatsAppInstanceWhereInput>
  }

  export type QueueAgentOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    queueId?: SortOrder
    instanceId?: SortOrder
    queue?: AttendanceQueueOrderByWithRelationInput
    instance?: WhatsAppInstanceOrderByWithRelationInput
  }

  export type QueueAgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QueueAgentWhereInput | QueueAgentWhereInput[]
    OR?: QueueAgentWhereInput[]
    NOT?: QueueAgentWhereInput | QueueAgentWhereInput[]
    order?: IntFilter<"QueueAgent"> | number
    queueId?: StringFilter<"QueueAgent"> | string
    instanceId?: StringFilter<"QueueAgent"> | string
    queue?: XOR<AttendanceQueueRelationFilter, AttendanceQueueWhereInput>
    instance?: XOR<WhatsAppInstanceRelationFilter, WhatsAppInstanceWhereInput>
  }, "id">

  export type QueueAgentOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    queueId?: SortOrder
    instanceId?: SortOrder
    _count?: QueueAgentCountOrderByAggregateInput
    _avg?: QueueAgentAvgOrderByAggregateInput
    _max?: QueueAgentMaxOrderByAggregateInput
    _min?: QueueAgentMinOrderByAggregateInput
    _sum?: QueueAgentSumOrderByAggregateInput
  }

  export type QueueAgentScalarWhereWithAggregatesInput = {
    AND?: QueueAgentScalarWhereWithAggregatesInput | QueueAgentScalarWhereWithAggregatesInput[]
    OR?: QueueAgentScalarWhereWithAggregatesInput[]
    NOT?: QueueAgentScalarWhereWithAggregatesInput | QueueAgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QueueAgent"> | string
    order?: IntWithAggregatesFilter<"QueueAgent"> | number
    queueId?: StringWithAggregatesFilter<"QueueAgent"> | string
    instanceId?: StringWithAggregatesFilter<"QueueAgent"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    color?: StringNullableFilter<"Tag"> | string | null
    tenantId?: StringFilter<"Tag"> | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    leads?: LeadListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    leads?: LeadOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_tenantId?: TagNameTenantIdCompoundUniqueInput
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    color?: StringNullableFilter<"Tag"> | string | null
    tenantId?: StringFilter<"Tag"> | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    leads?: LeadListRelationFilter
  }, "id" | "name_tenantId">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    tenantId?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    color?: StringNullableWithAggregatesFilter<"Tag"> | string | null
    tenantId?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type AudienceWhereInput = {
    AND?: AudienceWhereInput | AudienceWhereInput[]
    OR?: AudienceWhereInput[]
    NOT?: AudienceWhereInput | AudienceWhereInput[]
    id?: StringFilter<"Audience"> | string
    name?: StringFilter<"Audience"> | string
    tenantId?: StringFilter<"Audience"> | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    leads?: LeadListRelationFilter
  }

  export type AudienceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    leads?: LeadOrderByRelationAggregateInput
  }

  export type AudienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_tenantId?: AudienceNameTenantIdCompoundUniqueInput
    AND?: AudienceWhereInput | AudienceWhereInput[]
    OR?: AudienceWhereInput[]
    NOT?: AudienceWhereInput | AudienceWhereInput[]
    name?: StringFilter<"Audience"> | string
    tenantId?: StringFilter<"Audience"> | string
    tenant?: XOR<TenantRelationFilter, TenantWhereInput>
    leads?: LeadListRelationFilter
  }, "id" | "name_tenantId">

  export type AudienceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
    _count?: AudienceCountOrderByAggregateInput
    _max?: AudienceMaxOrderByAggregateInput
    _min?: AudienceMinOrderByAggregateInput
  }

  export type AudienceScalarWhereWithAggregatesInput = {
    AND?: AudienceScalarWhereWithAggregatesInput | AudienceScalarWhereWithAggregatesInput[]
    OR?: AudienceScalarWhereWithAggregatesInput[]
    NOT?: AudienceScalarWhereWithAggregatesInput | AudienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Audience"> | string
    name?: StringWithAggregatesFilter<"Audience"> | string
    tenantId?: StringWithAggregatesFilter<"Audience"> | string
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    tags?: TagCreateNestedManyWithoutTenantInput
    audiences?: AudienceCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueCreateNestedManyWithoutTenantInput
    workflows?: WorkflowCreateNestedManyWithoutTenantInput
    integrations?: IntegrationCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    tags?: TagUncheckedCreateNestedManyWithoutTenantInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceUncheckedCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueUncheckedCreateNestedManyWithoutTenantInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutTenantInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    tags?: TagUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    tags?: TagUncheckedUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUncheckedUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUncheckedUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    subject: string
    content: string
    status?: string
    sentCount?: number
    openRate?: number
    clickRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    name: string
    subject: string
    content: string
    status?: string
    sentCount?: number
    openRate?: number
    clickRate?: number
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentCount?: IntFieldUpdateOperationsInput | number
    openRate?: FloatFieldUpdateOperationsInput | number
    clickRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentCount?: IntFieldUpdateOperationsInput | number
    openRate?: FloatFieldUpdateOperationsInput | number
    clickRate?: FloatFieldUpdateOperationsInput | number
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateManyInput = {
    id?: string
    name: string
    subject: string
    content: string
    status?: string
    sentCount?: number
    openRate?: number
    clickRate?: number
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentCount?: IntFieldUpdateOperationsInput | number
    openRate?: FloatFieldUpdateOperationsInput | number
    clickRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentCount?: IntFieldUpdateOperationsInput | number
    openRate?: FloatFieldUpdateOperationsInput | number
    clickRate?: FloatFieldUpdateOperationsInput | number
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmtpAccountCreateInput = {
    id?: string
    name: string
    host: string
    port?: number
    user: string
    pass: string
    secure?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutSmtpAccountsInput
  }

  export type SmtpAccountUncheckedCreateInput = {
    id?: string
    name: string
    host: string
    port?: number
    user: string
    pass: string
    secure?: boolean
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmtpAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    secure?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutSmtpAccountsNestedInput
  }

  export type SmtpAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    secure?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmtpAccountCreateManyInput = {
    id?: string
    name: string
    host: string
    port?: number
    user: string
    pass: string
    secure?: boolean
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmtpAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    secure?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmtpAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    secure?: BoolFieldUpdateOperationsInput | boolean
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    status?: string
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    tenant: TenantCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    planId: string
    tenantId: string
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    status?: string
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    tenant?: TenantUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    planId: string
    tenantId: string
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    status?: string
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    id?: string
    name: string
    price: number
    interval?: string
    maxUsers: number
    maxLeads: number
    maxWorkflows: number
    stripePriceId?: string | null
    createdAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    interval?: string
    maxUsers: number
    maxLeads: number
    maxWorkflows: number
    stripePriceId?: string | null
    createdAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    name: string
    price: number
    interval?: string
    maxUsers: number
    maxLeads: number
    maxWorkflows: number
    stripePriceId?: string | null
    createdAt?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationCreateInput = {
    id?: string
    name: string
    platform: string
    type?: string
    webhookKey?: string
    config?: string | null
    autoTag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutIntegrationsInput
  }

  export type IntegrationUncheckedCreateInput = {
    id?: string
    name: string
    platform: string
    type?: string
    webhookKey?: string
    config?: string | null
    autoTag?: string | null
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    webhookKey?: StringFieldUpdateOperationsInput | string
    config?: NullableStringFieldUpdateOperationsInput | string | null
    autoTag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutIntegrationsNestedInput
  }

  export type IntegrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    webhookKey?: StringFieldUpdateOperationsInput | string
    config?: NullableStringFieldUpdateOperationsInput | string | null
    autoTag?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationCreateManyInput = {
    id?: string
    name: string
    platform: string
    type?: string
    webhookKey?: string
    config?: string | null
    autoTag?: string | null
    tenantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    webhookKey?: StringFieldUpdateOperationsInput | string
    config?: NullableStringFieldUpdateOperationsInput | string | null
    autoTag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    webhookKey?: StringFieldUpdateOperationsInput | string
    config?: NullableStringFieldUpdateOperationsInput | string | null
    autoTag?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    tenant: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    tenantId: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
    tenantId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    nodes: string
    connections: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutWorkflowsInput
    executions?: WorkflowExecutionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    nodes: string
    connections: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    executions?: WorkflowExecutionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    nodes?: StringFieldUpdateOperationsInput | string
    connections?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutWorkflowsNestedInput
    executions?: WorkflowExecutionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    nodes?: StringFieldUpdateOperationsInput | string
    connections?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    executions?: WorkflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    nodes: string
    connections: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
  }

  export type WorkflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    nodes?: StringFieldUpdateOperationsInput | string
    connections?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    nodes?: StringFieldUpdateOperationsInput | string
    connections?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowExecutionCreateInput = {
    id?: string
    status?: string
    currentNode?: string | null
    nextStepAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutExecutionsInput
    lead: LeadCreateNestedOneWithoutWorkflowExecInput
  }

  export type WorkflowExecutionUncheckedCreateInput = {
    id?: string
    status?: string
    currentNode?: string | null
    nextStepAt?: Date | string | null
    workflowId: string
    leadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowExecutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    nextStepAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutExecutionsNestedInput
    lead?: LeadUpdateOneRequiredWithoutWorkflowExecNestedInput
  }

  export type WorkflowExecutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    nextStepAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowExecutionCreateManyInput = {
    id?: string
    status?: string
    currentNode?: string | null
    nextStepAt?: Date | string | null
    workflowId: string
    leadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowExecutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    nextStepAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowExecutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    nextStepAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    status?: string
    source?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeadsInput
    tags?: TagCreateNestedManyWithoutLeadsInput
    audiences?: AudienceCreateNestedManyWithoutLeadsInput
    workflowExec?: WorkflowExecutionCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    status?: string
    source?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    tags?: TagUncheckedCreateNestedManyWithoutLeadsInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutLeadsInput
    workflowExec?: WorkflowExecutionUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeadsNestedInput
    tags?: TagUpdateManyWithoutLeadsNestedInput
    audiences?: AudienceUpdateManyWithoutLeadsNestedInput
    workflowExec?: WorkflowExecutionUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    tags?: TagUncheckedUpdateManyWithoutLeadsNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutLeadsNestedInput
    workflowExec?: WorkflowExecutionUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadCreateManyInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    status?: string
    source?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type WhatsAppInstanceCreateInput = {
    id?: string
    instanceName: string
    owner?: string | null
    type?: string
    status?: string
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiModel?: string
    knowledgeBase?: string | null
    tenant: TenantCreateNestedOneWithoutInstancesInput
    asMainInQueues?: AttendanceQueueCreateNestedManyWithoutMainInstanceInput
    asAgentInQueues?: QueueAgentCreateNestedManyWithoutInstanceInput
  }

  export type WhatsAppInstanceUncheckedCreateInput = {
    id?: string
    instanceName: string
    owner?: string | null
    type?: string
    status?: string
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiModel?: string
    knowledgeBase?: string | null
    tenantId: string
    asMainInQueues?: AttendanceQueueUncheckedCreateNestedManyWithoutMainInstanceInput
    asAgentInQueues?: QueueAgentUncheckedCreateNestedManyWithoutInstanceInput
  }

  export type WhatsAppInstanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instanceName?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    knowledgeBase?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutInstancesNestedInput
    asMainInQueues?: AttendanceQueueUpdateManyWithoutMainInstanceNestedInput
    asAgentInQueues?: QueueAgentUpdateManyWithoutInstanceNestedInput
  }

  export type WhatsAppInstanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    instanceName?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    knowledgeBase?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    asMainInQueues?: AttendanceQueueUncheckedUpdateManyWithoutMainInstanceNestedInput
    asAgentInQueues?: QueueAgentUncheckedUpdateManyWithoutInstanceNestedInput
  }

  export type WhatsAppInstanceCreateManyInput = {
    id?: string
    instanceName: string
    owner?: string | null
    type?: string
    status?: string
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiModel?: string
    knowledgeBase?: string | null
    tenantId: string
  }

  export type WhatsAppInstanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    instanceName?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    knowledgeBase?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WhatsAppInstanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    instanceName?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    knowledgeBase?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceQueueCreateInput = {
    id?: string
    name: string
    lastAgentIndex?: number
    mainInstance: WhatsAppInstanceCreateNestedOneWithoutAsMainInQueuesInput
    tenant: TenantCreateNestedOneWithoutQueuesInput
    agents?: QueueAgentCreateNestedManyWithoutQueueInput
  }

  export type AttendanceQueueUncheckedCreateInput = {
    id?: string
    name: string
    mainInstanceId: string
    tenantId: string
    lastAgentIndex?: number
    agents?: QueueAgentUncheckedCreateNestedManyWithoutQueueInput
  }

  export type AttendanceQueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastAgentIndex?: IntFieldUpdateOperationsInput | number
    mainInstance?: WhatsAppInstanceUpdateOneRequiredWithoutAsMainInQueuesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutQueuesNestedInput
    agents?: QueueAgentUpdateManyWithoutQueueNestedInput
  }

  export type AttendanceQueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainInstanceId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    lastAgentIndex?: IntFieldUpdateOperationsInput | number
    agents?: QueueAgentUncheckedUpdateManyWithoutQueueNestedInput
  }

  export type AttendanceQueueCreateManyInput = {
    id?: string
    name: string
    mainInstanceId: string
    tenantId: string
    lastAgentIndex?: number
  }

  export type AttendanceQueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastAgentIndex?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceQueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainInstanceId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    lastAgentIndex?: IntFieldUpdateOperationsInput | number
  }

  export type QueueAgentCreateInput = {
    id?: string
    order: number
    queue: AttendanceQueueCreateNestedOneWithoutAgentsInput
    instance: WhatsAppInstanceCreateNestedOneWithoutAsAgentInQueuesInput
  }

  export type QueueAgentUncheckedCreateInput = {
    id?: string
    order: number
    queueId: string
    instanceId: string
  }

  export type QueueAgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    queue?: AttendanceQueueUpdateOneRequiredWithoutAgentsNestedInput
    instance?: WhatsAppInstanceUpdateOneRequiredWithoutAsAgentInQueuesNestedInput
  }

  export type QueueAgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    queueId?: StringFieldUpdateOperationsInput | string
    instanceId?: StringFieldUpdateOperationsInput | string
  }

  export type QueueAgentCreateManyInput = {
    id?: string
    order: number
    queueId: string
    instanceId: string
  }

  export type QueueAgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type QueueAgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    queueId?: StringFieldUpdateOperationsInput | string
    instanceId?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    color?: string | null
    tenant: TenantCreateNestedOneWithoutTagsInput
    leads?: LeadCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    color?: string | null
    tenantId: string
    leads?: LeadUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutTagsNestedInput
    leads?: LeadUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    leads?: LeadUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    color?: string | null
    tenantId: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type AudienceCreateInput = {
    id?: string
    name: string
    tenant: TenantCreateNestedOneWithoutAudiencesInput
    leads?: LeadCreateNestedManyWithoutAudiencesInput
  }

  export type AudienceUncheckedCreateInput = {
    id?: string
    name: string
    tenantId: string
    leads?: LeadUncheckedCreateNestedManyWithoutAudiencesInput
  }

  export type AudienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutAudiencesNestedInput
    leads?: LeadUpdateManyWithoutAudiencesNestedInput
  }

  export type AudienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    leads?: LeadUncheckedUpdateManyWithoutAudiencesNestedInput
  }

  export type AudienceCreateManyInput = {
    id?: string
    name: string
    tenantId: string
  }

  export type AudienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AudienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type AudienceListRelationFilter = {
    every?: AudienceWhereInput
    some?: AudienceWhereInput
    none?: AudienceWhereInput
  }

  export type WhatsAppInstanceListRelationFilter = {
    every?: WhatsAppInstanceWhereInput
    some?: WhatsAppInstanceWhereInput
    none?: WhatsAppInstanceWhereInput
  }

  export type AttendanceQueueListRelationFilter = {
    every?: AttendanceQueueWhereInput
    some?: AttendanceQueueWhereInput
    none?: AttendanceQueueWhereInput
  }

  export type WorkflowListRelationFilter = {
    every?: WorkflowWhereInput
    some?: WorkflowWhereInput
    none?: WorkflowWhereInput
  }

  export type IntegrationListRelationFilter = {
    every?: IntegrationWhereInput
    some?: IntegrationWhereInput
    none?: IntegrationWhereInput
  }

  export type SmtpAccountListRelationFilter = {
    every?: SmtpAccountWhereInput
    some?: SmtpAccountWhereInput
    none?: SmtpAccountWhereInput
  }

  export type CampaignListRelationFilter = {
    every?: CampaignWhereInput
    some?: CampaignWhereInput
    none?: CampaignWhereInput
  }

  export type SubscriptionNullableRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AudienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsAppInstanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceQueueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntegrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SmtpAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    evolutionUrl?: SortOrder
    evolutionToken?: SortOrder
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantAvgOrderByAggregateInput = {
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    evolutionUrl?: SortOrder
    evolutionToken?: SortOrder
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    evolutionUrl?: SortOrder
    evolutionToken?: SortOrder
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantSumOrderByAggregateInput = {
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TenantRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sentCount?: SortOrder
    openRate?: SortOrder
    clickRate?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    sentCount?: SortOrder
    openRate?: SortOrder
    clickRate?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sentCount?: SortOrder
    openRate?: SortOrder
    clickRate?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    status?: SortOrder
    sentCount?: SortOrder
    openRate?: SortOrder
    clickRate?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    sentCount?: SortOrder
    openRate?: SortOrder
    clickRate?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SmtpAccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    host?: SortOrder
    port?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    secure?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmtpAccountAvgOrderByAggregateInput = {
    port?: SortOrder
  }

  export type SmtpAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    host?: SortOrder
    port?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    secure?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmtpAccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    host?: SortOrder
    port?: SortOrder
    user?: SortOrder
    pass?: SortOrder
    secure?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SmtpAccountSumOrderByAggregateInput = {
    port?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PlanRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    tenantId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubId?: SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    tenantId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubId?: SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    planId?: SortOrder
    tenantId?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubId?: SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    interval?: SortOrder
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
    stripePriceId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    price?: SortOrder
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    interval?: SortOrder
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
    stripePriceId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    interval?: SortOrder
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
    stripePriceId?: SortOrder
    createdAt?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    price?: SortOrder
    maxUsers?: SortOrder
    maxLeads?: SortOrder
    maxWorkflows?: SortOrder
  }

  export type IntegrationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    type?: SortOrder
    webhookKey?: SortOrder
    config?: SortOrder
    autoTag?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    type?: SortOrder
    webhookKey?: SortOrder
    config?: SortOrder
    autoTag?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntegrationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    type?: SortOrder
    webhookKey?: SortOrder
    config?: SortOrder
    autoTag?: SortOrder
    tenantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    tenantId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    tenantId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    tenantId?: SortOrder
  }

  export type WorkflowExecutionListRelationFilter = {
    every?: WorkflowExecutionWhereInput
    some?: WorkflowExecutionWhereInput
    none?: WorkflowExecutionWhereInput
  }

  export type WorkflowExecutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    nodes?: SortOrder
    connections?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    nodes?: SortOrder
    connections?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    nodes?: SortOrder
    connections?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
  }

  export type WorkflowRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type LeadRelationFilter = {
    is?: LeadWhereInput
    isNot?: LeadWhereInput
  }

  export type WorkflowExecutionWorkflowIdLeadIdCompoundUniqueInput = {
    workflowId: string
    leadId: string
  }

  export type WorkflowExecutionCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    currentNode?: SortOrder
    nextStepAt?: SortOrder
    workflowId?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowExecutionMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    currentNode?: SortOrder
    nextStepAt?: SortOrder
    workflowId?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowExecutionMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    currentNode?: SortOrder
    nextStepAt?: SortOrder
    workflowId?: SortOrder
    leadId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    source?: SortOrder
    obs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    source?: SortOrder
    obs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    source?: SortOrder
    obs?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantId?: SortOrder
  }

  export type QueueAgentListRelationFilter = {
    every?: QueueAgentWhereInput
    some?: QueueAgentWhereInput
    none?: QueueAgentWhereInput
  }

  export type QueueAgentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhatsAppInstanceCountOrderByAggregateInput = {
    id?: SortOrder
    instanceName?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    status?: SortOrder
    aiEnabled?: SortOrder
    aiPrompt?: SortOrder
    aiModel?: SortOrder
    knowledgeBase?: SortOrder
    tenantId?: SortOrder
  }

  export type WhatsAppInstanceMaxOrderByAggregateInput = {
    id?: SortOrder
    instanceName?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    status?: SortOrder
    aiEnabled?: SortOrder
    aiPrompt?: SortOrder
    aiModel?: SortOrder
    knowledgeBase?: SortOrder
    tenantId?: SortOrder
  }

  export type WhatsAppInstanceMinOrderByAggregateInput = {
    id?: SortOrder
    instanceName?: SortOrder
    owner?: SortOrder
    type?: SortOrder
    status?: SortOrder
    aiEnabled?: SortOrder
    aiPrompt?: SortOrder
    aiModel?: SortOrder
    knowledgeBase?: SortOrder
    tenantId?: SortOrder
  }

  export type WhatsAppInstanceRelationFilter = {
    is?: WhatsAppInstanceWhereInput
    isNot?: WhatsAppInstanceWhereInput
  }

  export type AttendanceQueueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mainInstanceId?: SortOrder
    tenantId?: SortOrder
    lastAgentIndex?: SortOrder
  }

  export type AttendanceQueueAvgOrderByAggregateInput = {
    lastAgentIndex?: SortOrder
  }

  export type AttendanceQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mainInstanceId?: SortOrder
    tenantId?: SortOrder
    lastAgentIndex?: SortOrder
  }

  export type AttendanceQueueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mainInstanceId?: SortOrder
    tenantId?: SortOrder
    lastAgentIndex?: SortOrder
  }

  export type AttendanceQueueSumOrderByAggregateInput = {
    lastAgentIndex?: SortOrder
  }

  export type AttendanceQueueRelationFilter = {
    is?: AttendanceQueueWhereInput
    isNot?: AttendanceQueueWhereInput
  }

  export type QueueAgentCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    queueId?: SortOrder
    instanceId?: SortOrder
  }

  export type QueueAgentAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QueueAgentMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    queueId?: SortOrder
    instanceId?: SortOrder
  }

  export type QueueAgentMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    queueId?: SortOrder
    instanceId?: SortOrder
  }

  export type QueueAgentSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TagNameTenantIdCompoundUniqueInput = {
    name: string
    tenantId: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    tenantId?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    tenantId?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    tenantId?: SortOrder
  }

  export type AudienceNameTenantIdCompoundUniqueInput = {
    name: string
    tenantId: string
  }

  export type AudienceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
  }

  export type AudienceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
  }

  export type AudienceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    tenantId?: SortOrder
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput> | LeadCreateWithoutTenantInput[] | LeadUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTenantInput | LeadCreateOrConnectWithoutTenantInput[]
    createMany?: LeadCreateManyTenantInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutTenantInput = {
    create?: XOR<TagCreateWithoutTenantInput, TagUncheckedCreateWithoutTenantInput> | TagCreateWithoutTenantInput[] | TagUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTenantInput | TagCreateOrConnectWithoutTenantInput[]
    createMany?: TagCreateManyTenantInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type AudienceCreateNestedManyWithoutTenantInput = {
    create?: XOR<AudienceCreateWithoutTenantInput, AudienceUncheckedCreateWithoutTenantInput> | AudienceCreateWithoutTenantInput[] | AudienceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutTenantInput | AudienceCreateOrConnectWithoutTenantInput[]
    createMany?: AudienceCreateManyTenantInputEnvelope
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
  }

  export type WhatsAppInstanceCreateNestedManyWithoutTenantInput = {
    create?: XOR<WhatsAppInstanceCreateWithoutTenantInput, WhatsAppInstanceUncheckedCreateWithoutTenantInput> | WhatsAppInstanceCreateWithoutTenantInput[] | WhatsAppInstanceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WhatsAppInstanceCreateOrConnectWithoutTenantInput | WhatsAppInstanceCreateOrConnectWithoutTenantInput[]
    createMany?: WhatsAppInstanceCreateManyTenantInputEnvelope
    connect?: WhatsAppInstanceWhereUniqueInput | WhatsAppInstanceWhereUniqueInput[]
  }

  export type AttendanceQueueCreateNestedManyWithoutTenantInput = {
    create?: XOR<AttendanceQueueCreateWithoutTenantInput, AttendanceQueueUncheckedCreateWithoutTenantInput> | AttendanceQueueCreateWithoutTenantInput[] | AttendanceQueueUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AttendanceQueueCreateOrConnectWithoutTenantInput | AttendanceQueueCreateOrConnectWithoutTenantInput[]
    createMany?: AttendanceQueueCreateManyTenantInputEnvelope
    connect?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
  }

  export type WorkflowCreateNestedManyWithoutTenantInput = {
    create?: XOR<WorkflowCreateWithoutTenantInput, WorkflowUncheckedCreateWithoutTenantInput> | WorkflowCreateWithoutTenantInput[] | WorkflowUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutTenantInput | WorkflowCreateOrConnectWithoutTenantInput[]
    createMany?: WorkflowCreateManyTenantInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type IntegrationCreateNestedManyWithoutTenantInput = {
    create?: XOR<IntegrationCreateWithoutTenantInput, IntegrationUncheckedCreateWithoutTenantInput> | IntegrationCreateWithoutTenantInput[] | IntegrationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutTenantInput | IntegrationCreateOrConnectWithoutTenantInput[]
    createMany?: IntegrationCreateManyTenantInputEnvelope
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
  }

  export type SmtpAccountCreateNestedManyWithoutTenantInput = {
    create?: XOR<SmtpAccountCreateWithoutTenantInput, SmtpAccountUncheckedCreateWithoutTenantInput> | SmtpAccountCreateWithoutTenantInput[] | SmtpAccountUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: SmtpAccountCreateOrConnectWithoutTenantInput | SmtpAccountCreateOrConnectWithoutTenantInput[]
    createMany?: SmtpAccountCreateManyTenantInputEnvelope
    connect?: SmtpAccountWhereUniqueInput | SmtpAccountWhereUniqueInput[]
  }

  export type CampaignCreateNestedManyWithoutTenantInput = {
    create?: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput> | CampaignCreateWithoutTenantInput[] | CampaignUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTenantInput | CampaignCreateOrConnectWithoutTenantInput[]
    createMany?: CampaignCreateManyTenantInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutTenantInput = {
    create?: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput> | LeadCreateWithoutTenantInput[] | LeadUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTenantInput | LeadCreateOrConnectWithoutTenantInput[]
    createMany?: LeadCreateManyTenantInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<TagCreateWithoutTenantInput, TagUncheckedCreateWithoutTenantInput> | TagCreateWithoutTenantInput[] | TagUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTenantInput | TagCreateOrConnectWithoutTenantInput[]
    createMany?: TagCreateManyTenantInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type AudienceUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<AudienceCreateWithoutTenantInput, AudienceUncheckedCreateWithoutTenantInput> | AudienceCreateWithoutTenantInput[] | AudienceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutTenantInput | AudienceCreateOrConnectWithoutTenantInput[]
    createMany?: AudienceCreateManyTenantInputEnvelope
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
  }

  export type WhatsAppInstanceUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<WhatsAppInstanceCreateWithoutTenantInput, WhatsAppInstanceUncheckedCreateWithoutTenantInput> | WhatsAppInstanceCreateWithoutTenantInput[] | WhatsAppInstanceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WhatsAppInstanceCreateOrConnectWithoutTenantInput | WhatsAppInstanceCreateOrConnectWithoutTenantInput[]
    createMany?: WhatsAppInstanceCreateManyTenantInputEnvelope
    connect?: WhatsAppInstanceWhereUniqueInput | WhatsAppInstanceWhereUniqueInput[]
  }

  export type AttendanceQueueUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<AttendanceQueueCreateWithoutTenantInput, AttendanceQueueUncheckedCreateWithoutTenantInput> | AttendanceQueueCreateWithoutTenantInput[] | AttendanceQueueUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AttendanceQueueCreateOrConnectWithoutTenantInput | AttendanceQueueCreateOrConnectWithoutTenantInput[]
    createMany?: AttendanceQueueCreateManyTenantInputEnvelope
    connect?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
  }

  export type WorkflowUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<WorkflowCreateWithoutTenantInput, WorkflowUncheckedCreateWithoutTenantInput> | WorkflowCreateWithoutTenantInput[] | WorkflowUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutTenantInput | WorkflowCreateOrConnectWithoutTenantInput[]
    createMany?: WorkflowCreateManyTenantInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type IntegrationUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<IntegrationCreateWithoutTenantInput, IntegrationUncheckedCreateWithoutTenantInput> | IntegrationCreateWithoutTenantInput[] | IntegrationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutTenantInput | IntegrationCreateOrConnectWithoutTenantInput[]
    createMany?: IntegrationCreateManyTenantInputEnvelope
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
  }

  export type SmtpAccountUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<SmtpAccountCreateWithoutTenantInput, SmtpAccountUncheckedCreateWithoutTenantInput> | SmtpAccountCreateWithoutTenantInput[] | SmtpAccountUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: SmtpAccountCreateOrConnectWithoutTenantInput | SmtpAccountCreateOrConnectWithoutTenantInput[]
    createMany?: SmtpAccountCreateManyTenantInputEnvelope
    connect?: SmtpAccountWhereUniqueInput | SmtpAccountWhereUniqueInput[]
  }

  export type CampaignUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput> | CampaignCreateWithoutTenantInput[] | CampaignUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTenantInput | CampaignCreateOrConnectWithoutTenantInput[]
    createMany?: CampaignCreateManyTenantInputEnvelope
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutTenantInput = {
    create?: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput> | LeadCreateWithoutTenantInput[] | LeadUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTenantInput | LeadCreateOrConnectWithoutTenantInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutTenantInput | LeadUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeadCreateManyTenantInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutTenantInput | LeadUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutTenantInput | LeadUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type TagUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TagCreateWithoutTenantInput, TagUncheckedCreateWithoutTenantInput> | TagCreateWithoutTenantInput[] | TagUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTenantInput | TagCreateOrConnectWithoutTenantInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutTenantInput | TagUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TagCreateManyTenantInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutTenantInput | TagUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TagUpdateManyWithWhereWithoutTenantInput | TagUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type AudienceUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AudienceCreateWithoutTenantInput, AudienceUncheckedCreateWithoutTenantInput> | AudienceCreateWithoutTenantInput[] | AudienceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutTenantInput | AudienceCreateOrConnectWithoutTenantInput[]
    upsert?: AudienceUpsertWithWhereUniqueWithoutTenantInput | AudienceUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AudienceCreateManyTenantInputEnvelope
    set?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    disconnect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    delete?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    update?: AudienceUpdateWithWhereUniqueWithoutTenantInput | AudienceUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AudienceUpdateManyWithWhereWithoutTenantInput | AudienceUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AudienceScalarWhereInput | AudienceScalarWhereInput[]
  }

  export type WhatsAppInstanceUpdateManyWithoutTenantNestedInput = {
    create?: XOR<WhatsAppInstanceCreateWithoutTenantInput, WhatsAppInstanceUncheckedCreateWithoutTenantInput> | WhatsAppInstanceCreateWithoutTenantInput[] | WhatsAppInstanceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WhatsAppInstanceCreateOrConnectWithoutTenantInput | WhatsAppInstanceCreateOrConnectWithoutTenantInput[]
    upsert?: WhatsAppInstanceUpsertWithWhereUniqueWithoutTenantInput | WhatsAppInstanceUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: WhatsAppInstanceCreateManyTenantInputEnvelope
    set?: WhatsAppInstanceWhereUniqueInput | WhatsAppInstanceWhereUniqueInput[]
    disconnect?: WhatsAppInstanceWhereUniqueInput | WhatsAppInstanceWhereUniqueInput[]
    delete?: WhatsAppInstanceWhereUniqueInput | WhatsAppInstanceWhereUniqueInput[]
    connect?: WhatsAppInstanceWhereUniqueInput | WhatsAppInstanceWhereUniqueInput[]
    update?: WhatsAppInstanceUpdateWithWhereUniqueWithoutTenantInput | WhatsAppInstanceUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: WhatsAppInstanceUpdateManyWithWhereWithoutTenantInput | WhatsAppInstanceUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: WhatsAppInstanceScalarWhereInput | WhatsAppInstanceScalarWhereInput[]
  }

  export type AttendanceQueueUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AttendanceQueueCreateWithoutTenantInput, AttendanceQueueUncheckedCreateWithoutTenantInput> | AttendanceQueueCreateWithoutTenantInput[] | AttendanceQueueUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AttendanceQueueCreateOrConnectWithoutTenantInput | AttendanceQueueCreateOrConnectWithoutTenantInput[]
    upsert?: AttendanceQueueUpsertWithWhereUniqueWithoutTenantInput | AttendanceQueueUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AttendanceQueueCreateManyTenantInputEnvelope
    set?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    disconnect?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    delete?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    connect?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    update?: AttendanceQueueUpdateWithWhereUniqueWithoutTenantInput | AttendanceQueueUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AttendanceQueueUpdateManyWithWhereWithoutTenantInput | AttendanceQueueUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AttendanceQueueScalarWhereInput | AttendanceQueueScalarWhereInput[]
  }

  export type WorkflowUpdateManyWithoutTenantNestedInput = {
    create?: XOR<WorkflowCreateWithoutTenantInput, WorkflowUncheckedCreateWithoutTenantInput> | WorkflowCreateWithoutTenantInput[] | WorkflowUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutTenantInput | WorkflowCreateOrConnectWithoutTenantInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutTenantInput | WorkflowUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: WorkflowCreateManyTenantInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutTenantInput | WorkflowUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutTenantInput | WorkflowUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type IntegrationUpdateManyWithoutTenantNestedInput = {
    create?: XOR<IntegrationCreateWithoutTenantInput, IntegrationUncheckedCreateWithoutTenantInput> | IntegrationCreateWithoutTenantInput[] | IntegrationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutTenantInput | IntegrationCreateOrConnectWithoutTenantInput[]
    upsert?: IntegrationUpsertWithWhereUniqueWithoutTenantInput | IntegrationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: IntegrationCreateManyTenantInputEnvelope
    set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    disconnect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    update?: IntegrationUpdateWithWhereUniqueWithoutTenantInput | IntegrationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: IntegrationUpdateManyWithWhereWithoutTenantInput | IntegrationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
  }

  export type SmtpAccountUpdateManyWithoutTenantNestedInput = {
    create?: XOR<SmtpAccountCreateWithoutTenantInput, SmtpAccountUncheckedCreateWithoutTenantInput> | SmtpAccountCreateWithoutTenantInput[] | SmtpAccountUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: SmtpAccountCreateOrConnectWithoutTenantInput | SmtpAccountCreateOrConnectWithoutTenantInput[]
    upsert?: SmtpAccountUpsertWithWhereUniqueWithoutTenantInput | SmtpAccountUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: SmtpAccountCreateManyTenantInputEnvelope
    set?: SmtpAccountWhereUniqueInput | SmtpAccountWhereUniqueInput[]
    disconnect?: SmtpAccountWhereUniqueInput | SmtpAccountWhereUniqueInput[]
    delete?: SmtpAccountWhereUniqueInput | SmtpAccountWhereUniqueInput[]
    connect?: SmtpAccountWhereUniqueInput | SmtpAccountWhereUniqueInput[]
    update?: SmtpAccountUpdateWithWhereUniqueWithoutTenantInput | SmtpAccountUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: SmtpAccountUpdateManyWithWhereWithoutTenantInput | SmtpAccountUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: SmtpAccountScalarWhereInput | SmtpAccountScalarWhereInput[]
  }

  export type CampaignUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput> | CampaignCreateWithoutTenantInput[] | CampaignUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTenantInput | CampaignCreateOrConnectWithoutTenantInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTenantInput | CampaignUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CampaignCreateManyTenantInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTenantInput | CampaignUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTenantInput | CampaignUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutTenantNestedInput = {
    create?: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput
    upsert?: SubscriptionUpsertWithoutTenantInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutTenantInput, SubscriptionUpdateWithoutTenantInput>, SubscriptionUncheckedUpdateWithoutTenantInput>
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput> | LeadCreateWithoutTenantInput[] | LeadUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTenantInput | LeadCreateOrConnectWithoutTenantInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutTenantInput | LeadUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: LeadCreateManyTenantInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutTenantInput | LeadUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutTenantInput | LeadUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TagCreateWithoutTenantInput, TagUncheckedCreateWithoutTenantInput> | TagCreateWithoutTenantInput[] | TagUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTenantInput | TagCreateOrConnectWithoutTenantInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutTenantInput | TagUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TagCreateManyTenantInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutTenantInput | TagUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TagUpdateManyWithWhereWithoutTenantInput | TagUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type AudienceUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AudienceCreateWithoutTenantInput, AudienceUncheckedCreateWithoutTenantInput> | AudienceCreateWithoutTenantInput[] | AudienceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutTenantInput | AudienceCreateOrConnectWithoutTenantInput[]
    upsert?: AudienceUpsertWithWhereUniqueWithoutTenantInput | AudienceUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AudienceCreateManyTenantInputEnvelope
    set?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    disconnect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    delete?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    update?: AudienceUpdateWithWhereUniqueWithoutTenantInput | AudienceUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AudienceUpdateManyWithWhereWithoutTenantInput | AudienceUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AudienceScalarWhereInput | AudienceScalarWhereInput[]
  }

  export type WhatsAppInstanceUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<WhatsAppInstanceCreateWithoutTenantInput, WhatsAppInstanceUncheckedCreateWithoutTenantInput> | WhatsAppInstanceCreateWithoutTenantInput[] | WhatsAppInstanceUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WhatsAppInstanceCreateOrConnectWithoutTenantInput | WhatsAppInstanceCreateOrConnectWithoutTenantInput[]
    upsert?: WhatsAppInstanceUpsertWithWhereUniqueWithoutTenantInput | WhatsAppInstanceUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: WhatsAppInstanceCreateManyTenantInputEnvelope
    set?: WhatsAppInstanceWhereUniqueInput | WhatsAppInstanceWhereUniqueInput[]
    disconnect?: WhatsAppInstanceWhereUniqueInput | WhatsAppInstanceWhereUniqueInput[]
    delete?: WhatsAppInstanceWhereUniqueInput | WhatsAppInstanceWhereUniqueInput[]
    connect?: WhatsAppInstanceWhereUniqueInput | WhatsAppInstanceWhereUniqueInput[]
    update?: WhatsAppInstanceUpdateWithWhereUniqueWithoutTenantInput | WhatsAppInstanceUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: WhatsAppInstanceUpdateManyWithWhereWithoutTenantInput | WhatsAppInstanceUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: WhatsAppInstanceScalarWhereInput | WhatsAppInstanceScalarWhereInput[]
  }

  export type AttendanceQueueUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<AttendanceQueueCreateWithoutTenantInput, AttendanceQueueUncheckedCreateWithoutTenantInput> | AttendanceQueueCreateWithoutTenantInput[] | AttendanceQueueUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: AttendanceQueueCreateOrConnectWithoutTenantInput | AttendanceQueueCreateOrConnectWithoutTenantInput[]
    upsert?: AttendanceQueueUpsertWithWhereUniqueWithoutTenantInput | AttendanceQueueUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: AttendanceQueueCreateManyTenantInputEnvelope
    set?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    disconnect?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    delete?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    connect?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    update?: AttendanceQueueUpdateWithWhereUniqueWithoutTenantInput | AttendanceQueueUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: AttendanceQueueUpdateManyWithWhereWithoutTenantInput | AttendanceQueueUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: AttendanceQueueScalarWhereInput | AttendanceQueueScalarWhereInput[]
  }

  export type WorkflowUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<WorkflowCreateWithoutTenantInput, WorkflowUncheckedCreateWithoutTenantInput> | WorkflowCreateWithoutTenantInput[] | WorkflowUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutTenantInput | WorkflowCreateOrConnectWithoutTenantInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutTenantInput | WorkflowUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: WorkflowCreateManyTenantInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutTenantInput | WorkflowUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutTenantInput | WorkflowUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type IntegrationUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<IntegrationCreateWithoutTenantInput, IntegrationUncheckedCreateWithoutTenantInput> | IntegrationCreateWithoutTenantInput[] | IntegrationUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: IntegrationCreateOrConnectWithoutTenantInput | IntegrationCreateOrConnectWithoutTenantInput[]
    upsert?: IntegrationUpsertWithWhereUniqueWithoutTenantInput | IntegrationUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: IntegrationCreateManyTenantInputEnvelope
    set?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    disconnect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    delete?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    connect?: IntegrationWhereUniqueInput | IntegrationWhereUniqueInput[]
    update?: IntegrationUpdateWithWhereUniqueWithoutTenantInput | IntegrationUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: IntegrationUpdateManyWithWhereWithoutTenantInput | IntegrationUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
  }

  export type SmtpAccountUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<SmtpAccountCreateWithoutTenantInput, SmtpAccountUncheckedCreateWithoutTenantInput> | SmtpAccountCreateWithoutTenantInput[] | SmtpAccountUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: SmtpAccountCreateOrConnectWithoutTenantInput | SmtpAccountCreateOrConnectWithoutTenantInput[]
    upsert?: SmtpAccountUpsertWithWhereUniqueWithoutTenantInput | SmtpAccountUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: SmtpAccountCreateManyTenantInputEnvelope
    set?: SmtpAccountWhereUniqueInput | SmtpAccountWhereUniqueInput[]
    disconnect?: SmtpAccountWhereUniqueInput | SmtpAccountWhereUniqueInput[]
    delete?: SmtpAccountWhereUniqueInput | SmtpAccountWhereUniqueInput[]
    connect?: SmtpAccountWhereUniqueInput | SmtpAccountWhereUniqueInput[]
    update?: SmtpAccountUpdateWithWhereUniqueWithoutTenantInput | SmtpAccountUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: SmtpAccountUpdateManyWithWhereWithoutTenantInput | SmtpAccountUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: SmtpAccountScalarWhereInput | SmtpAccountScalarWhereInput[]
  }

  export type CampaignUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput> | CampaignCreateWithoutTenantInput[] | CampaignUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CampaignCreateOrConnectWithoutTenantInput | CampaignCreateOrConnectWithoutTenantInput[]
    upsert?: CampaignUpsertWithWhereUniqueWithoutTenantInput | CampaignUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CampaignCreateManyTenantInputEnvelope
    set?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    disconnect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    delete?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    connect?: CampaignWhereUniqueInput | CampaignWhereUniqueInput[]
    update?: CampaignUpdateWithWhereUniqueWithoutTenantInput | CampaignUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CampaignUpdateManyWithWhereWithoutTenantInput | CampaignUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutTenantNestedInput = {
    create?: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutTenantInput
    upsert?: SubscriptionUpsertWithoutTenantInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutTenantInput, SubscriptionUpdateWithoutTenantInput>, SubscriptionUncheckedUpdateWithoutTenantInput>
  }

  export type TenantCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<TenantCreateWithoutCampaignsInput, TenantUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCampaignsInput
    connect?: TenantWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<TenantCreateWithoutCampaignsInput, TenantUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCampaignsInput
    upsert?: TenantUpsertWithoutCampaignsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutCampaignsInput, TenantUpdateWithoutCampaignsInput>, TenantUncheckedUpdateWithoutCampaignsInput>
  }

  export type TenantCreateNestedOneWithoutSmtpAccountsInput = {
    create?: XOR<TenantCreateWithoutSmtpAccountsInput, TenantUncheckedCreateWithoutSmtpAccountsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutSmtpAccountsInput
    connect?: TenantWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TenantUpdateOneRequiredWithoutSmtpAccountsNestedInput = {
    create?: XOR<TenantCreateWithoutSmtpAccountsInput, TenantUncheckedCreateWithoutSmtpAccountsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutSmtpAccountsInput
    upsert?: TenantUpsertWithoutSmtpAccountsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutSmtpAccountsInput, TenantUpdateWithoutSmtpAccountsInput>, TenantUncheckedUpdateWithoutSmtpAccountsInput>
  }

  export type PlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<TenantCreateWithoutSubscriptionInput, TenantUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: TenantCreateOrConnectWithoutSubscriptionInput
    connect?: TenantWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PlanUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    upsert?: PlanUpsertWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutSubscriptionsInput, PlanUpdateWithoutSubscriptionsInput>, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type TenantUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<TenantCreateWithoutSubscriptionInput, TenantUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: TenantCreateOrConnectWithoutSubscriptionInput
    upsert?: TenantUpsertWithoutSubscriptionInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutSubscriptionInput, TenantUpdateWithoutSubscriptionInput>, TenantUncheckedUpdateWithoutSubscriptionInput>
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutIntegrationsInput = {
    create?: XOR<TenantCreateWithoutIntegrationsInput, TenantUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutIntegrationsInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutIntegrationsNestedInput = {
    create?: XOR<TenantCreateWithoutIntegrationsInput, TenantUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutIntegrationsInput
    upsert?: TenantUpsertWithoutIntegrationsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutIntegrationsInput, TenantUpdateWithoutIntegrationsInput>, TenantUncheckedUpdateWithoutIntegrationsInput>
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsersInput, TenantUpdateWithoutUsersInput>, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantCreateNestedOneWithoutWorkflowsInput = {
    create?: XOR<TenantCreateWithoutWorkflowsInput, TenantUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutWorkflowsInput
    connect?: TenantWhereUniqueInput
  }

  export type WorkflowExecutionCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowExecutionCreateWithoutWorkflowInput, WorkflowExecutionUncheckedCreateWithoutWorkflowInput> | WorkflowExecutionCreateWithoutWorkflowInput[] | WorkflowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutWorkflowInput | WorkflowExecutionCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowExecutionCreateManyWorkflowInputEnvelope
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
  }

  export type WorkflowExecutionUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowExecutionCreateWithoutWorkflowInput, WorkflowExecutionUncheckedCreateWithoutWorkflowInput> | WorkflowExecutionCreateWithoutWorkflowInput[] | WorkflowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutWorkflowInput | WorkflowExecutionCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowExecutionCreateManyWorkflowInputEnvelope
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutWorkflowsNestedInput = {
    create?: XOR<TenantCreateWithoutWorkflowsInput, TenantUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutWorkflowsInput
    upsert?: TenantUpsertWithoutWorkflowsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutWorkflowsInput, TenantUpdateWithoutWorkflowsInput>, TenantUncheckedUpdateWithoutWorkflowsInput>
  }

  export type WorkflowExecutionUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowExecutionCreateWithoutWorkflowInput, WorkflowExecutionUncheckedCreateWithoutWorkflowInput> | WorkflowExecutionCreateWithoutWorkflowInput[] | WorkflowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutWorkflowInput | WorkflowExecutionCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowExecutionCreateManyWorkflowInputEnvelope
    set?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    disconnect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    delete?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    update?: WorkflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowExecutionUpdateManyWithWhereWithoutWorkflowInput | WorkflowExecutionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowExecutionScalarWhereInput | WorkflowExecutionScalarWhereInput[]
  }

  export type WorkflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowExecutionCreateWithoutWorkflowInput, WorkflowExecutionUncheckedCreateWithoutWorkflowInput> | WorkflowExecutionCreateWithoutWorkflowInput[] | WorkflowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutWorkflowInput | WorkflowExecutionCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowExecutionCreateManyWorkflowInputEnvelope
    set?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    disconnect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    delete?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    update?: WorkflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowExecutionUpdateManyWithWhereWithoutWorkflowInput | WorkflowExecutionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowExecutionScalarWhereInput | WorkflowExecutionScalarWhereInput[]
  }

  export type WorkflowCreateNestedOneWithoutExecutionsInput = {
    create?: XOR<WorkflowCreateWithoutExecutionsInput, WorkflowUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutExecutionsInput
    connect?: WorkflowWhereUniqueInput
  }

  export type LeadCreateNestedOneWithoutWorkflowExecInput = {
    create?: XOR<LeadCreateWithoutWorkflowExecInput, LeadUncheckedCreateWithoutWorkflowExecInput>
    connectOrCreate?: LeadCreateOrConnectWithoutWorkflowExecInput
    connect?: LeadWhereUniqueInput
  }

  export type WorkflowUpdateOneRequiredWithoutExecutionsNestedInput = {
    create?: XOR<WorkflowCreateWithoutExecutionsInput, WorkflowUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutExecutionsInput
    upsert?: WorkflowUpsertWithoutExecutionsInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutExecutionsInput, WorkflowUpdateWithoutExecutionsInput>, WorkflowUncheckedUpdateWithoutExecutionsInput>
  }

  export type LeadUpdateOneRequiredWithoutWorkflowExecNestedInput = {
    create?: XOR<LeadCreateWithoutWorkflowExecInput, LeadUncheckedCreateWithoutWorkflowExecInput>
    connectOrCreate?: LeadCreateOrConnectWithoutWorkflowExecInput
    upsert?: LeadUpsertWithoutWorkflowExecInput
    connect?: LeadWhereUniqueInput
    update?: XOR<XOR<LeadUpdateToOneWithWhereWithoutWorkflowExecInput, LeadUpdateWithoutWorkflowExecInput>, LeadUncheckedUpdateWithoutWorkflowExecInput>
  }

  export type TenantCreateNestedOneWithoutLeadsInput = {
    create?: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeadsInput
    connect?: TenantWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutLeadsInput = {
    create?: XOR<TagCreateWithoutLeadsInput, TagUncheckedCreateWithoutLeadsInput> | TagCreateWithoutLeadsInput[] | TagUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutLeadsInput | TagCreateOrConnectWithoutLeadsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type AudienceCreateNestedManyWithoutLeadsInput = {
    create?: XOR<AudienceCreateWithoutLeadsInput, AudienceUncheckedCreateWithoutLeadsInput> | AudienceCreateWithoutLeadsInput[] | AudienceUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutLeadsInput | AudienceCreateOrConnectWithoutLeadsInput[]
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
  }

  export type WorkflowExecutionCreateNestedManyWithoutLeadInput = {
    create?: XOR<WorkflowExecutionCreateWithoutLeadInput, WorkflowExecutionUncheckedCreateWithoutLeadInput> | WorkflowExecutionCreateWithoutLeadInput[] | WorkflowExecutionUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutLeadInput | WorkflowExecutionCreateOrConnectWithoutLeadInput[]
    createMany?: WorkflowExecutionCreateManyLeadInputEnvelope
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutLeadsInput = {
    create?: XOR<TagCreateWithoutLeadsInput, TagUncheckedCreateWithoutLeadsInput> | TagCreateWithoutLeadsInput[] | TagUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutLeadsInput | TagCreateOrConnectWithoutLeadsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type AudienceUncheckedCreateNestedManyWithoutLeadsInput = {
    create?: XOR<AudienceCreateWithoutLeadsInput, AudienceUncheckedCreateWithoutLeadsInput> | AudienceCreateWithoutLeadsInput[] | AudienceUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutLeadsInput | AudienceCreateOrConnectWithoutLeadsInput[]
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
  }

  export type WorkflowExecutionUncheckedCreateNestedManyWithoutLeadInput = {
    create?: XOR<WorkflowExecutionCreateWithoutLeadInput, WorkflowExecutionUncheckedCreateWithoutLeadInput> | WorkflowExecutionCreateWithoutLeadInput[] | WorkflowExecutionUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutLeadInput | WorkflowExecutionCreateOrConnectWithoutLeadInput[]
    createMany?: WorkflowExecutionCreateManyLeadInputEnvelope
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutLeadsInput
    upsert?: TenantUpsertWithoutLeadsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutLeadsInput, TenantUpdateWithoutLeadsInput>, TenantUncheckedUpdateWithoutLeadsInput>
  }

  export type TagUpdateManyWithoutLeadsNestedInput = {
    create?: XOR<TagCreateWithoutLeadsInput, TagUncheckedCreateWithoutLeadsInput> | TagCreateWithoutLeadsInput[] | TagUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutLeadsInput | TagCreateOrConnectWithoutLeadsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutLeadsInput | TagUpsertWithWhereUniqueWithoutLeadsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutLeadsInput | TagUpdateWithWhereUniqueWithoutLeadsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutLeadsInput | TagUpdateManyWithWhereWithoutLeadsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type AudienceUpdateManyWithoutLeadsNestedInput = {
    create?: XOR<AudienceCreateWithoutLeadsInput, AudienceUncheckedCreateWithoutLeadsInput> | AudienceCreateWithoutLeadsInput[] | AudienceUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutLeadsInput | AudienceCreateOrConnectWithoutLeadsInput[]
    upsert?: AudienceUpsertWithWhereUniqueWithoutLeadsInput | AudienceUpsertWithWhereUniqueWithoutLeadsInput[]
    set?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    disconnect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    delete?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    update?: AudienceUpdateWithWhereUniqueWithoutLeadsInput | AudienceUpdateWithWhereUniqueWithoutLeadsInput[]
    updateMany?: AudienceUpdateManyWithWhereWithoutLeadsInput | AudienceUpdateManyWithWhereWithoutLeadsInput[]
    deleteMany?: AudienceScalarWhereInput | AudienceScalarWhereInput[]
  }

  export type WorkflowExecutionUpdateManyWithoutLeadNestedInput = {
    create?: XOR<WorkflowExecutionCreateWithoutLeadInput, WorkflowExecutionUncheckedCreateWithoutLeadInput> | WorkflowExecutionCreateWithoutLeadInput[] | WorkflowExecutionUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutLeadInput | WorkflowExecutionCreateOrConnectWithoutLeadInput[]
    upsert?: WorkflowExecutionUpsertWithWhereUniqueWithoutLeadInput | WorkflowExecutionUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: WorkflowExecutionCreateManyLeadInputEnvelope
    set?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    disconnect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    delete?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    update?: WorkflowExecutionUpdateWithWhereUniqueWithoutLeadInput | WorkflowExecutionUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: WorkflowExecutionUpdateManyWithWhereWithoutLeadInput | WorkflowExecutionUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: WorkflowExecutionScalarWhereInput | WorkflowExecutionScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutLeadsNestedInput = {
    create?: XOR<TagCreateWithoutLeadsInput, TagUncheckedCreateWithoutLeadsInput> | TagCreateWithoutLeadsInput[] | TagUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutLeadsInput | TagCreateOrConnectWithoutLeadsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutLeadsInput | TagUpsertWithWhereUniqueWithoutLeadsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutLeadsInput | TagUpdateWithWhereUniqueWithoutLeadsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutLeadsInput | TagUpdateManyWithWhereWithoutLeadsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type AudienceUncheckedUpdateManyWithoutLeadsNestedInput = {
    create?: XOR<AudienceCreateWithoutLeadsInput, AudienceUncheckedCreateWithoutLeadsInput> | AudienceCreateWithoutLeadsInput[] | AudienceUncheckedCreateWithoutLeadsInput[]
    connectOrCreate?: AudienceCreateOrConnectWithoutLeadsInput | AudienceCreateOrConnectWithoutLeadsInput[]
    upsert?: AudienceUpsertWithWhereUniqueWithoutLeadsInput | AudienceUpsertWithWhereUniqueWithoutLeadsInput[]
    set?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    disconnect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    delete?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    connect?: AudienceWhereUniqueInput | AudienceWhereUniqueInput[]
    update?: AudienceUpdateWithWhereUniqueWithoutLeadsInput | AudienceUpdateWithWhereUniqueWithoutLeadsInput[]
    updateMany?: AudienceUpdateManyWithWhereWithoutLeadsInput | AudienceUpdateManyWithWhereWithoutLeadsInput[]
    deleteMany?: AudienceScalarWhereInput | AudienceScalarWhereInput[]
  }

  export type WorkflowExecutionUncheckedUpdateManyWithoutLeadNestedInput = {
    create?: XOR<WorkflowExecutionCreateWithoutLeadInput, WorkflowExecutionUncheckedCreateWithoutLeadInput> | WorkflowExecutionCreateWithoutLeadInput[] | WorkflowExecutionUncheckedCreateWithoutLeadInput[]
    connectOrCreate?: WorkflowExecutionCreateOrConnectWithoutLeadInput | WorkflowExecutionCreateOrConnectWithoutLeadInput[]
    upsert?: WorkflowExecutionUpsertWithWhereUniqueWithoutLeadInput | WorkflowExecutionUpsertWithWhereUniqueWithoutLeadInput[]
    createMany?: WorkflowExecutionCreateManyLeadInputEnvelope
    set?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    disconnect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    delete?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    connect?: WorkflowExecutionWhereUniqueInput | WorkflowExecutionWhereUniqueInput[]
    update?: WorkflowExecutionUpdateWithWhereUniqueWithoutLeadInput | WorkflowExecutionUpdateWithWhereUniqueWithoutLeadInput[]
    updateMany?: WorkflowExecutionUpdateManyWithWhereWithoutLeadInput | WorkflowExecutionUpdateManyWithWhereWithoutLeadInput[]
    deleteMany?: WorkflowExecutionScalarWhereInput | WorkflowExecutionScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutInstancesInput = {
    create?: XOR<TenantCreateWithoutInstancesInput, TenantUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutInstancesInput
    connect?: TenantWhereUniqueInput
  }

  export type AttendanceQueueCreateNestedManyWithoutMainInstanceInput = {
    create?: XOR<AttendanceQueueCreateWithoutMainInstanceInput, AttendanceQueueUncheckedCreateWithoutMainInstanceInput> | AttendanceQueueCreateWithoutMainInstanceInput[] | AttendanceQueueUncheckedCreateWithoutMainInstanceInput[]
    connectOrCreate?: AttendanceQueueCreateOrConnectWithoutMainInstanceInput | AttendanceQueueCreateOrConnectWithoutMainInstanceInput[]
    createMany?: AttendanceQueueCreateManyMainInstanceInputEnvelope
    connect?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
  }

  export type QueueAgentCreateNestedManyWithoutInstanceInput = {
    create?: XOR<QueueAgentCreateWithoutInstanceInput, QueueAgentUncheckedCreateWithoutInstanceInput> | QueueAgentCreateWithoutInstanceInput[] | QueueAgentUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: QueueAgentCreateOrConnectWithoutInstanceInput | QueueAgentCreateOrConnectWithoutInstanceInput[]
    createMany?: QueueAgentCreateManyInstanceInputEnvelope
    connect?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
  }

  export type AttendanceQueueUncheckedCreateNestedManyWithoutMainInstanceInput = {
    create?: XOR<AttendanceQueueCreateWithoutMainInstanceInput, AttendanceQueueUncheckedCreateWithoutMainInstanceInput> | AttendanceQueueCreateWithoutMainInstanceInput[] | AttendanceQueueUncheckedCreateWithoutMainInstanceInput[]
    connectOrCreate?: AttendanceQueueCreateOrConnectWithoutMainInstanceInput | AttendanceQueueCreateOrConnectWithoutMainInstanceInput[]
    createMany?: AttendanceQueueCreateManyMainInstanceInputEnvelope
    connect?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
  }

  export type QueueAgentUncheckedCreateNestedManyWithoutInstanceInput = {
    create?: XOR<QueueAgentCreateWithoutInstanceInput, QueueAgentUncheckedCreateWithoutInstanceInput> | QueueAgentCreateWithoutInstanceInput[] | QueueAgentUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: QueueAgentCreateOrConnectWithoutInstanceInput | QueueAgentCreateOrConnectWithoutInstanceInput[]
    createMany?: QueueAgentCreateManyInstanceInputEnvelope
    connect?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutInstancesNestedInput = {
    create?: XOR<TenantCreateWithoutInstancesInput, TenantUncheckedCreateWithoutInstancesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutInstancesInput
    upsert?: TenantUpsertWithoutInstancesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutInstancesInput, TenantUpdateWithoutInstancesInput>, TenantUncheckedUpdateWithoutInstancesInput>
  }

  export type AttendanceQueueUpdateManyWithoutMainInstanceNestedInput = {
    create?: XOR<AttendanceQueueCreateWithoutMainInstanceInput, AttendanceQueueUncheckedCreateWithoutMainInstanceInput> | AttendanceQueueCreateWithoutMainInstanceInput[] | AttendanceQueueUncheckedCreateWithoutMainInstanceInput[]
    connectOrCreate?: AttendanceQueueCreateOrConnectWithoutMainInstanceInput | AttendanceQueueCreateOrConnectWithoutMainInstanceInput[]
    upsert?: AttendanceQueueUpsertWithWhereUniqueWithoutMainInstanceInput | AttendanceQueueUpsertWithWhereUniqueWithoutMainInstanceInput[]
    createMany?: AttendanceQueueCreateManyMainInstanceInputEnvelope
    set?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    disconnect?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    delete?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    connect?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    update?: AttendanceQueueUpdateWithWhereUniqueWithoutMainInstanceInput | AttendanceQueueUpdateWithWhereUniqueWithoutMainInstanceInput[]
    updateMany?: AttendanceQueueUpdateManyWithWhereWithoutMainInstanceInput | AttendanceQueueUpdateManyWithWhereWithoutMainInstanceInput[]
    deleteMany?: AttendanceQueueScalarWhereInput | AttendanceQueueScalarWhereInput[]
  }

  export type QueueAgentUpdateManyWithoutInstanceNestedInput = {
    create?: XOR<QueueAgentCreateWithoutInstanceInput, QueueAgentUncheckedCreateWithoutInstanceInput> | QueueAgentCreateWithoutInstanceInput[] | QueueAgentUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: QueueAgentCreateOrConnectWithoutInstanceInput | QueueAgentCreateOrConnectWithoutInstanceInput[]
    upsert?: QueueAgentUpsertWithWhereUniqueWithoutInstanceInput | QueueAgentUpsertWithWhereUniqueWithoutInstanceInput[]
    createMany?: QueueAgentCreateManyInstanceInputEnvelope
    set?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    disconnect?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    delete?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    connect?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    update?: QueueAgentUpdateWithWhereUniqueWithoutInstanceInput | QueueAgentUpdateWithWhereUniqueWithoutInstanceInput[]
    updateMany?: QueueAgentUpdateManyWithWhereWithoutInstanceInput | QueueAgentUpdateManyWithWhereWithoutInstanceInput[]
    deleteMany?: QueueAgentScalarWhereInput | QueueAgentScalarWhereInput[]
  }

  export type AttendanceQueueUncheckedUpdateManyWithoutMainInstanceNestedInput = {
    create?: XOR<AttendanceQueueCreateWithoutMainInstanceInput, AttendanceQueueUncheckedCreateWithoutMainInstanceInput> | AttendanceQueueCreateWithoutMainInstanceInput[] | AttendanceQueueUncheckedCreateWithoutMainInstanceInput[]
    connectOrCreate?: AttendanceQueueCreateOrConnectWithoutMainInstanceInput | AttendanceQueueCreateOrConnectWithoutMainInstanceInput[]
    upsert?: AttendanceQueueUpsertWithWhereUniqueWithoutMainInstanceInput | AttendanceQueueUpsertWithWhereUniqueWithoutMainInstanceInput[]
    createMany?: AttendanceQueueCreateManyMainInstanceInputEnvelope
    set?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    disconnect?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    delete?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    connect?: AttendanceQueueWhereUniqueInput | AttendanceQueueWhereUniqueInput[]
    update?: AttendanceQueueUpdateWithWhereUniqueWithoutMainInstanceInput | AttendanceQueueUpdateWithWhereUniqueWithoutMainInstanceInput[]
    updateMany?: AttendanceQueueUpdateManyWithWhereWithoutMainInstanceInput | AttendanceQueueUpdateManyWithWhereWithoutMainInstanceInput[]
    deleteMany?: AttendanceQueueScalarWhereInput | AttendanceQueueScalarWhereInput[]
  }

  export type QueueAgentUncheckedUpdateManyWithoutInstanceNestedInput = {
    create?: XOR<QueueAgentCreateWithoutInstanceInput, QueueAgentUncheckedCreateWithoutInstanceInput> | QueueAgentCreateWithoutInstanceInput[] | QueueAgentUncheckedCreateWithoutInstanceInput[]
    connectOrCreate?: QueueAgentCreateOrConnectWithoutInstanceInput | QueueAgentCreateOrConnectWithoutInstanceInput[]
    upsert?: QueueAgentUpsertWithWhereUniqueWithoutInstanceInput | QueueAgentUpsertWithWhereUniqueWithoutInstanceInput[]
    createMany?: QueueAgentCreateManyInstanceInputEnvelope
    set?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    disconnect?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    delete?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    connect?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    update?: QueueAgentUpdateWithWhereUniqueWithoutInstanceInput | QueueAgentUpdateWithWhereUniqueWithoutInstanceInput[]
    updateMany?: QueueAgentUpdateManyWithWhereWithoutInstanceInput | QueueAgentUpdateManyWithWhereWithoutInstanceInput[]
    deleteMany?: QueueAgentScalarWhereInput | QueueAgentScalarWhereInput[]
  }

  export type WhatsAppInstanceCreateNestedOneWithoutAsMainInQueuesInput = {
    create?: XOR<WhatsAppInstanceCreateWithoutAsMainInQueuesInput, WhatsAppInstanceUncheckedCreateWithoutAsMainInQueuesInput>
    connectOrCreate?: WhatsAppInstanceCreateOrConnectWithoutAsMainInQueuesInput
    connect?: WhatsAppInstanceWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutQueuesInput = {
    create?: XOR<TenantCreateWithoutQueuesInput, TenantUncheckedCreateWithoutQueuesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutQueuesInput
    connect?: TenantWhereUniqueInput
  }

  export type QueueAgentCreateNestedManyWithoutQueueInput = {
    create?: XOR<QueueAgentCreateWithoutQueueInput, QueueAgentUncheckedCreateWithoutQueueInput> | QueueAgentCreateWithoutQueueInput[] | QueueAgentUncheckedCreateWithoutQueueInput[]
    connectOrCreate?: QueueAgentCreateOrConnectWithoutQueueInput | QueueAgentCreateOrConnectWithoutQueueInput[]
    createMany?: QueueAgentCreateManyQueueInputEnvelope
    connect?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
  }

  export type QueueAgentUncheckedCreateNestedManyWithoutQueueInput = {
    create?: XOR<QueueAgentCreateWithoutQueueInput, QueueAgentUncheckedCreateWithoutQueueInput> | QueueAgentCreateWithoutQueueInput[] | QueueAgentUncheckedCreateWithoutQueueInput[]
    connectOrCreate?: QueueAgentCreateOrConnectWithoutQueueInput | QueueAgentCreateOrConnectWithoutQueueInput[]
    createMany?: QueueAgentCreateManyQueueInputEnvelope
    connect?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
  }

  export type WhatsAppInstanceUpdateOneRequiredWithoutAsMainInQueuesNestedInput = {
    create?: XOR<WhatsAppInstanceCreateWithoutAsMainInQueuesInput, WhatsAppInstanceUncheckedCreateWithoutAsMainInQueuesInput>
    connectOrCreate?: WhatsAppInstanceCreateOrConnectWithoutAsMainInQueuesInput
    upsert?: WhatsAppInstanceUpsertWithoutAsMainInQueuesInput
    connect?: WhatsAppInstanceWhereUniqueInput
    update?: XOR<XOR<WhatsAppInstanceUpdateToOneWithWhereWithoutAsMainInQueuesInput, WhatsAppInstanceUpdateWithoutAsMainInQueuesInput>, WhatsAppInstanceUncheckedUpdateWithoutAsMainInQueuesInput>
  }

  export type TenantUpdateOneRequiredWithoutQueuesNestedInput = {
    create?: XOR<TenantCreateWithoutQueuesInput, TenantUncheckedCreateWithoutQueuesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutQueuesInput
    upsert?: TenantUpsertWithoutQueuesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutQueuesInput, TenantUpdateWithoutQueuesInput>, TenantUncheckedUpdateWithoutQueuesInput>
  }

  export type QueueAgentUpdateManyWithoutQueueNestedInput = {
    create?: XOR<QueueAgentCreateWithoutQueueInput, QueueAgentUncheckedCreateWithoutQueueInput> | QueueAgentCreateWithoutQueueInput[] | QueueAgentUncheckedCreateWithoutQueueInput[]
    connectOrCreate?: QueueAgentCreateOrConnectWithoutQueueInput | QueueAgentCreateOrConnectWithoutQueueInput[]
    upsert?: QueueAgentUpsertWithWhereUniqueWithoutQueueInput | QueueAgentUpsertWithWhereUniqueWithoutQueueInput[]
    createMany?: QueueAgentCreateManyQueueInputEnvelope
    set?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    disconnect?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    delete?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    connect?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    update?: QueueAgentUpdateWithWhereUniqueWithoutQueueInput | QueueAgentUpdateWithWhereUniqueWithoutQueueInput[]
    updateMany?: QueueAgentUpdateManyWithWhereWithoutQueueInput | QueueAgentUpdateManyWithWhereWithoutQueueInput[]
    deleteMany?: QueueAgentScalarWhereInput | QueueAgentScalarWhereInput[]
  }

  export type QueueAgentUncheckedUpdateManyWithoutQueueNestedInput = {
    create?: XOR<QueueAgentCreateWithoutQueueInput, QueueAgentUncheckedCreateWithoutQueueInput> | QueueAgentCreateWithoutQueueInput[] | QueueAgentUncheckedCreateWithoutQueueInput[]
    connectOrCreate?: QueueAgentCreateOrConnectWithoutQueueInput | QueueAgentCreateOrConnectWithoutQueueInput[]
    upsert?: QueueAgentUpsertWithWhereUniqueWithoutQueueInput | QueueAgentUpsertWithWhereUniqueWithoutQueueInput[]
    createMany?: QueueAgentCreateManyQueueInputEnvelope
    set?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    disconnect?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    delete?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    connect?: QueueAgentWhereUniqueInput | QueueAgentWhereUniqueInput[]
    update?: QueueAgentUpdateWithWhereUniqueWithoutQueueInput | QueueAgentUpdateWithWhereUniqueWithoutQueueInput[]
    updateMany?: QueueAgentUpdateManyWithWhereWithoutQueueInput | QueueAgentUpdateManyWithWhereWithoutQueueInput[]
    deleteMany?: QueueAgentScalarWhereInput | QueueAgentScalarWhereInput[]
  }

  export type AttendanceQueueCreateNestedOneWithoutAgentsInput = {
    create?: XOR<AttendanceQueueCreateWithoutAgentsInput, AttendanceQueueUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: AttendanceQueueCreateOrConnectWithoutAgentsInput
    connect?: AttendanceQueueWhereUniqueInput
  }

  export type WhatsAppInstanceCreateNestedOneWithoutAsAgentInQueuesInput = {
    create?: XOR<WhatsAppInstanceCreateWithoutAsAgentInQueuesInput, WhatsAppInstanceUncheckedCreateWithoutAsAgentInQueuesInput>
    connectOrCreate?: WhatsAppInstanceCreateOrConnectWithoutAsAgentInQueuesInput
    connect?: WhatsAppInstanceWhereUniqueInput
  }

  export type AttendanceQueueUpdateOneRequiredWithoutAgentsNestedInput = {
    create?: XOR<AttendanceQueueCreateWithoutAgentsInput, AttendanceQueueUncheckedCreateWithoutAgentsInput>
    connectOrCreate?: AttendanceQueueCreateOrConnectWithoutAgentsInput
    upsert?: AttendanceQueueUpsertWithoutAgentsInput
    connect?: AttendanceQueueWhereUniqueInput
    update?: XOR<XOR<AttendanceQueueUpdateToOneWithWhereWithoutAgentsInput, AttendanceQueueUpdateWithoutAgentsInput>, AttendanceQueueUncheckedUpdateWithoutAgentsInput>
  }

  export type WhatsAppInstanceUpdateOneRequiredWithoutAsAgentInQueuesNestedInput = {
    create?: XOR<WhatsAppInstanceCreateWithoutAsAgentInQueuesInput, WhatsAppInstanceUncheckedCreateWithoutAsAgentInQueuesInput>
    connectOrCreate?: WhatsAppInstanceCreateOrConnectWithoutAsAgentInQueuesInput
    upsert?: WhatsAppInstanceUpsertWithoutAsAgentInQueuesInput
    connect?: WhatsAppInstanceWhereUniqueInput
    update?: XOR<XOR<WhatsAppInstanceUpdateToOneWithWhereWithoutAsAgentInQueuesInput, WhatsAppInstanceUpdateWithoutAsAgentInQueuesInput>, WhatsAppInstanceUncheckedUpdateWithoutAsAgentInQueuesInput>
  }

  export type TenantCreateNestedOneWithoutTagsInput = {
    create?: XOR<TenantCreateWithoutTagsInput, TenantUncheckedCreateWithoutTagsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTagsInput
    connect?: TenantWhereUniqueInput
  }

  export type LeadCreateNestedManyWithoutTagsInput = {
    create?: XOR<LeadCreateWithoutTagsInput, LeadUncheckedCreateWithoutTagsInput> | LeadCreateWithoutTagsInput[] | LeadUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTagsInput | LeadCreateOrConnectWithoutTagsInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<LeadCreateWithoutTagsInput, LeadUncheckedCreateWithoutTagsInput> | LeadCreateWithoutTagsInput[] | LeadUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTagsInput | LeadCreateOrConnectWithoutTagsInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<TenantCreateWithoutTagsInput, TenantUncheckedCreateWithoutTagsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutTagsInput
    upsert?: TenantUpsertWithoutTagsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutTagsInput, TenantUpdateWithoutTagsInput>, TenantUncheckedUpdateWithoutTagsInput>
  }

  export type LeadUpdateManyWithoutTagsNestedInput = {
    create?: XOR<LeadCreateWithoutTagsInput, LeadUncheckedCreateWithoutTagsInput> | LeadCreateWithoutTagsInput[] | LeadUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTagsInput | LeadCreateOrConnectWithoutTagsInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutTagsInput | LeadUpsertWithWhereUniqueWithoutTagsInput[]
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutTagsInput | LeadUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutTagsInput | LeadUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<LeadCreateWithoutTagsInput, LeadUncheckedCreateWithoutTagsInput> | LeadCreateWithoutTagsInput[] | LeadUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutTagsInput | LeadCreateOrConnectWithoutTagsInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutTagsInput | LeadUpsertWithWhereUniqueWithoutTagsInput[]
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutTagsInput | LeadUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutTagsInput | LeadUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutAudiencesInput = {
    create?: XOR<TenantCreateWithoutAudiencesInput, TenantUncheckedCreateWithoutAudiencesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAudiencesInput
    connect?: TenantWhereUniqueInput
  }

  export type LeadCreateNestedManyWithoutAudiencesInput = {
    create?: XOR<LeadCreateWithoutAudiencesInput, LeadUncheckedCreateWithoutAudiencesInput> | LeadCreateWithoutAudiencesInput[] | LeadUncheckedCreateWithoutAudiencesInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAudiencesInput | LeadCreateOrConnectWithoutAudiencesInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutAudiencesInput = {
    create?: XOR<LeadCreateWithoutAudiencesInput, LeadUncheckedCreateWithoutAudiencesInput> | LeadCreateWithoutAudiencesInput[] | LeadUncheckedCreateWithoutAudiencesInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAudiencesInput | LeadCreateOrConnectWithoutAudiencesInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutAudiencesNestedInput = {
    create?: XOR<TenantCreateWithoutAudiencesInput, TenantUncheckedCreateWithoutAudiencesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutAudiencesInput
    upsert?: TenantUpsertWithoutAudiencesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutAudiencesInput, TenantUpdateWithoutAudiencesInput>, TenantUncheckedUpdateWithoutAudiencesInput>
  }

  export type LeadUpdateManyWithoutAudiencesNestedInput = {
    create?: XOR<LeadCreateWithoutAudiencesInput, LeadUncheckedCreateWithoutAudiencesInput> | LeadCreateWithoutAudiencesInput[] | LeadUncheckedCreateWithoutAudiencesInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAudiencesInput | LeadCreateOrConnectWithoutAudiencesInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutAudiencesInput | LeadUpsertWithWhereUniqueWithoutAudiencesInput[]
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutAudiencesInput | LeadUpdateWithWhereUniqueWithoutAudiencesInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutAudiencesInput | LeadUpdateManyWithWhereWithoutAudiencesInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutAudiencesNestedInput = {
    create?: XOR<LeadCreateWithoutAudiencesInput, LeadUncheckedCreateWithoutAudiencesInput> | LeadCreateWithoutAudiencesInput[] | LeadUncheckedCreateWithoutAudiencesInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutAudiencesInput | LeadCreateOrConnectWithoutAudiencesInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutAudiencesInput | LeadUpsertWithWhereUniqueWithoutAudiencesInput[]
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutAudiencesInput | LeadUpdateWithWhereUniqueWithoutAudiencesInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutAudiencesInput | LeadUpdateManyWithWhereWithoutAudiencesInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutTenantInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type LeadCreateWithoutTenantInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    status?: string
    source?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutLeadsInput
    audiences?: AudienceCreateNestedManyWithoutLeadsInput
    workflowExec?: WorkflowExecutionCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    status?: string
    source?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutLeadsInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutLeadsInput
    workflowExec?: WorkflowExecutionUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutTenantInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput>
  }

  export type LeadCreateManyTenantInputEnvelope = {
    data: LeadCreateManyTenantInput | LeadCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutTenantInput = {
    id?: string
    name: string
    color?: string | null
    leads?: LeadCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    color?: string | null
    leads?: LeadUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutTenantInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTenantInput, TagUncheckedCreateWithoutTenantInput>
  }

  export type TagCreateManyTenantInputEnvelope = {
    data: TagCreateManyTenantInput | TagCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type AudienceCreateWithoutTenantInput = {
    id?: string
    name: string
    leads?: LeadCreateNestedManyWithoutAudiencesInput
  }

  export type AudienceUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    leads?: LeadUncheckedCreateNestedManyWithoutAudiencesInput
  }

  export type AudienceCreateOrConnectWithoutTenantInput = {
    where: AudienceWhereUniqueInput
    create: XOR<AudienceCreateWithoutTenantInput, AudienceUncheckedCreateWithoutTenantInput>
  }

  export type AudienceCreateManyTenantInputEnvelope = {
    data: AudienceCreateManyTenantInput | AudienceCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type WhatsAppInstanceCreateWithoutTenantInput = {
    id?: string
    instanceName: string
    owner?: string | null
    type?: string
    status?: string
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiModel?: string
    knowledgeBase?: string | null
    asMainInQueues?: AttendanceQueueCreateNestedManyWithoutMainInstanceInput
    asAgentInQueues?: QueueAgentCreateNestedManyWithoutInstanceInput
  }

  export type WhatsAppInstanceUncheckedCreateWithoutTenantInput = {
    id?: string
    instanceName: string
    owner?: string | null
    type?: string
    status?: string
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiModel?: string
    knowledgeBase?: string | null
    asMainInQueues?: AttendanceQueueUncheckedCreateNestedManyWithoutMainInstanceInput
    asAgentInQueues?: QueueAgentUncheckedCreateNestedManyWithoutInstanceInput
  }

  export type WhatsAppInstanceCreateOrConnectWithoutTenantInput = {
    where: WhatsAppInstanceWhereUniqueInput
    create: XOR<WhatsAppInstanceCreateWithoutTenantInput, WhatsAppInstanceUncheckedCreateWithoutTenantInput>
  }

  export type WhatsAppInstanceCreateManyTenantInputEnvelope = {
    data: WhatsAppInstanceCreateManyTenantInput | WhatsAppInstanceCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceQueueCreateWithoutTenantInput = {
    id?: string
    name: string
    lastAgentIndex?: number
    mainInstance: WhatsAppInstanceCreateNestedOneWithoutAsMainInQueuesInput
    agents?: QueueAgentCreateNestedManyWithoutQueueInput
  }

  export type AttendanceQueueUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    mainInstanceId: string
    lastAgentIndex?: number
    agents?: QueueAgentUncheckedCreateNestedManyWithoutQueueInput
  }

  export type AttendanceQueueCreateOrConnectWithoutTenantInput = {
    where: AttendanceQueueWhereUniqueInput
    create: XOR<AttendanceQueueCreateWithoutTenantInput, AttendanceQueueUncheckedCreateWithoutTenantInput>
  }

  export type AttendanceQueueCreateManyTenantInputEnvelope = {
    data: AttendanceQueueCreateManyTenantInput | AttendanceQueueCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    nodes: string
    connections: string
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: WorkflowExecutionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    nodes: string
    connections: string
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: WorkflowExecutionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutTenantInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutTenantInput, WorkflowUncheckedCreateWithoutTenantInput>
  }

  export type WorkflowCreateManyTenantInputEnvelope = {
    data: WorkflowCreateManyTenantInput | WorkflowCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationCreateWithoutTenantInput = {
    id?: string
    name: string
    platform: string
    type?: string
    webhookKey?: string
    config?: string | null
    autoTag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    platform: string
    type?: string
    webhookKey?: string
    config?: string | null
    autoTag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationCreateOrConnectWithoutTenantInput = {
    where: IntegrationWhereUniqueInput
    create: XOR<IntegrationCreateWithoutTenantInput, IntegrationUncheckedCreateWithoutTenantInput>
  }

  export type IntegrationCreateManyTenantInputEnvelope = {
    data: IntegrationCreateManyTenantInput | IntegrationCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type SmtpAccountCreateWithoutTenantInput = {
    id?: string
    name: string
    host: string
    port?: number
    user: string
    pass: string
    secure?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmtpAccountUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    host: string
    port?: number
    user: string
    pass: string
    secure?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmtpAccountCreateOrConnectWithoutTenantInput = {
    where: SmtpAccountWhereUniqueInput
    create: XOR<SmtpAccountCreateWithoutTenantInput, SmtpAccountUncheckedCreateWithoutTenantInput>
  }

  export type SmtpAccountCreateManyTenantInputEnvelope = {
    data: SmtpAccountCreateManyTenantInput | SmtpAccountCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCreateWithoutTenantInput = {
    id?: string
    name: string
    subject: string
    content: string
    status?: string
    sentCount?: number
    openRate?: number
    clickRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUncheckedCreateWithoutTenantInput = {
    id?: string
    name: string
    subject: string
    content: string
    status?: string
    sentCount?: number
    openRate?: number
    clickRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateOrConnectWithoutTenantInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput>
  }

  export type CampaignCreateManyTenantInputEnvelope = {
    data: CampaignCreateManyTenantInput | CampaignCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutTenantInput = {
    id?: string
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    status?: string
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutTenantInput = {
    id?: string
    planId: string
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    status?: string
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutTenantInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    tenantId?: StringFilter<"User"> | string
  }

  export type LeadUpsertWithWhereUniqueWithoutTenantInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutTenantInput, LeadUncheckedUpdateWithoutTenantInput>
    create: XOR<LeadCreateWithoutTenantInput, LeadUncheckedCreateWithoutTenantInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutTenantInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutTenantInput, LeadUncheckedUpdateWithoutTenantInput>
  }

  export type LeadUpdateManyWithWhereWithoutTenantInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutTenantInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: StringFilter<"Lead"> | string
    name?: StringFilter<"Lead"> | string
    phone?: StringFilter<"Lead"> | string
    email?: StringNullableFilter<"Lead"> | string | null
    status?: StringFilter<"Lead"> | string
    source?: StringFilter<"Lead"> | string
    obs?: StringNullableFilter<"Lead"> | string | null
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
    tenantId?: StringFilter<"Lead"> | string
  }

  export type TagUpsertWithWhereUniqueWithoutTenantInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutTenantInput, TagUncheckedUpdateWithoutTenantInput>
    create: XOR<TagCreateWithoutTenantInput, TagUncheckedCreateWithoutTenantInput>
  }

  export type TagUpdateWithWhereUniqueWithoutTenantInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutTenantInput, TagUncheckedUpdateWithoutTenantInput>
  }

  export type TagUpdateManyWithWhereWithoutTenantInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutTenantInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    color?: StringNullableFilter<"Tag"> | string | null
    tenantId?: StringFilter<"Tag"> | string
  }

  export type AudienceUpsertWithWhereUniqueWithoutTenantInput = {
    where: AudienceWhereUniqueInput
    update: XOR<AudienceUpdateWithoutTenantInput, AudienceUncheckedUpdateWithoutTenantInput>
    create: XOR<AudienceCreateWithoutTenantInput, AudienceUncheckedCreateWithoutTenantInput>
  }

  export type AudienceUpdateWithWhereUniqueWithoutTenantInput = {
    where: AudienceWhereUniqueInput
    data: XOR<AudienceUpdateWithoutTenantInput, AudienceUncheckedUpdateWithoutTenantInput>
  }

  export type AudienceUpdateManyWithWhereWithoutTenantInput = {
    where: AudienceScalarWhereInput
    data: XOR<AudienceUpdateManyMutationInput, AudienceUncheckedUpdateManyWithoutTenantInput>
  }

  export type AudienceScalarWhereInput = {
    AND?: AudienceScalarWhereInput | AudienceScalarWhereInput[]
    OR?: AudienceScalarWhereInput[]
    NOT?: AudienceScalarWhereInput | AudienceScalarWhereInput[]
    id?: StringFilter<"Audience"> | string
    name?: StringFilter<"Audience"> | string
    tenantId?: StringFilter<"Audience"> | string
  }

  export type WhatsAppInstanceUpsertWithWhereUniqueWithoutTenantInput = {
    where: WhatsAppInstanceWhereUniqueInput
    update: XOR<WhatsAppInstanceUpdateWithoutTenantInput, WhatsAppInstanceUncheckedUpdateWithoutTenantInput>
    create: XOR<WhatsAppInstanceCreateWithoutTenantInput, WhatsAppInstanceUncheckedCreateWithoutTenantInput>
  }

  export type WhatsAppInstanceUpdateWithWhereUniqueWithoutTenantInput = {
    where: WhatsAppInstanceWhereUniqueInput
    data: XOR<WhatsAppInstanceUpdateWithoutTenantInput, WhatsAppInstanceUncheckedUpdateWithoutTenantInput>
  }

  export type WhatsAppInstanceUpdateManyWithWhereWithoutTenantInput = {
    where: WhatsAppInstanceScalarWhereInput
    data: XOR<WhatsAppInstanceUpdateManyMutationInput, WhatsAppInstanceUncheckedUpdateManyWithoutTenantInput>
  }

  export type WhatsAppInstanceScalarWhereInput = {
    AND?: WhatsAppInstanceScalarWhereInput | WhatsAppInstanceScalarWhereInput[]
    OR?: WhatsAppInstanceScalarWhereInput[]
    NOT?: WhatsAppInstanceScalarWhereInput | WhatsAppInstanceScalarWhereInput[]
    id?: StringFilter<"WhatsAppInstance"> | string
    instanceName?: StringFilter<"WhatsAppInstance"> | string
    owner?: StringNullableFilter<"WhatsAppInstance"> | string | null
    type?: StringFilter<"WhatsAppInstance"> | string
    status?: StringFilter<"WhatsAppInstance"> | string
    aiEnabled?: BoolFilter<"WhatsAppInstance"> | boolean
    aiPrompt?: StringNullableFilter<"WhatsAppInstance"> | string | null
    aiModel?: StringFilter<"WhatsAppInstance"> | string
    knowledgeBase?: StringNullableFilter<"WhatsAppInstance"> | string | null
    tenantId?: StringFilter<"WhatsAppInstance"> | string
  }

  export type AttendanceQueueUpsertWithWhereUniqueWithoutTenantInput = {
    where: AttendanceQueueWhereUniqueInput
    update: XOR<AttendanceQueueUpdateWithoutTenantInput, AttendanceQueueUncheckedUpdateWithoutTenantInput>
    create: XOR<AttendanceQueueCreateWithoutTenantInput, AttendanceQueueUncheckedCreateWithoutTenantInput>
  }

  export type AttendanceQueueUpdateWithWhereUniqueWithoutTenantInput = {
    where: AttendanceQueueWhereUniqueInput
    data: XOR<AttendanceQueueUpdateWithoutTenantInput, AttendanceQueueUncheckedUpdateWithoutTenantInput>
  }

  export type AttendanceQueueUpdateManyWithWhereWithoutTenantInput = {
    where: AttendanceQueueScalarWhereInput
    data: XOR<AttendanceQueueUpdateManyMutationInput, AttendanceQueueUncheckedUpdateManyWithoutTenantInput>
  }

  export type AttendanceQueueScalarWhereInput = {
    AND?: AttendanceQueueScalarWhereInput | AttendanceQueueScalarWhereInput[]
    OR?: AttendanceQueueScalarWhereInput[]
    NOT?: AttendanceQueueScalarWhereInput | AttendanceQueueScalarWhereInput[]
    id?: StringFilter<"AttendanceQueue"> | string
    name?: StringFilter<"AttendanceQueue"> | string
    mainInstanceId?: StringFilter<"AttendanceQueue"> | string
    tenantId?: StringFilter<"AttendanceQueue"> | string
    lastAgentIndex?: IntFilter<"AttendanceQueue"> | number
  }

  export type WorkflowUpsertWithWhereUniqueWithoutTenantInput = {
    where: WorkflowWhereUniqueInput
    update: XOR<WorkflowUpdateWithoutTenantInput, WorkflowUncheckedUpdateWithoutTenantInput>
    create: XOR<WorkflowCreateWithoutTenantInput, WorkflowUncheckedCreateWithoutTenantInput>
  }

  export type WorkflowUpdateWithWhereUniqueWithoutTenantInput = {
    where: WorkflowWhereUniqueInput
    data: XOR<WorkflowUpdateWithoutTenantInput, WorkflowUncheckedUpdateWithoutTenantInput>
  }

  export type WorkflowUpdateManyWithWhereWithoutTenantInput = {
    where: WorkflowScalarWhereInput
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyWithoutTenantInput>
  }

  export type WorkflowScalarWhereInput = {
    AND?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    OR?: WorkflowScalarWhereInput[]
    NOT?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    id?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    status?: StringFilter<"Workflow"> | string
    nodes?: StringFilter<"Workflow"> | string
    connections?: StringFilter<"Workflow"> | string
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    tenantId?: StringFilter<"Workflow"> | string
  }

  export type IntegrationUpsertWithWhereUniqueWithoutTenantInput = {
    where: IntegrationWhereUniqueInput
    update: XOR<IntegrationUpdateWithoutTenantInput, IntegrationUncheckedUpdateWithoutTenantInput>
    create: XOR<IntegrationCreateWithoutTenantInput, IntegrationUncheckedCreateWithoutTenantInput>
  }

  export type IntegrationUpdateWithWhereUniqueWithoutTenantInput = {
    where: IntegrationWhereUniqueInput
    data: XOR<IntegrationUpdateWithoutTenantInput, IntegrationUncheckedUpdateWithoutTenantInput>
  }

  export type IntegrationUpdateManyWithWhereWithoutTenantInput = {
    where: IntegrationScalarWhereInput
    data: XOR<IntegrationUpdateManyMutationInput, IntegrationUncheckedUpdateManyWithoutTenantInput>
  }

  export type IntegrationScalarWhereInput = {
    AND?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
    OR?: IntegrationScalarWhereInput[]
    NOT?: IntegrationScalarWhereInput | IntegrationScalarWhereInput[]
    id?: StringFilter<"Integration"> | string
    name?: StringFilter<"Integration"> | string
    platform?: StringFilter<"Integration"> | string
    type?: StringFilter<"Integration"> | string
    webhookKey?: StringFilter<"Integration"> | string
    config?: StringNullableFilter<"Integration"> | string | null
    autoTag?: StringNullableFilter<"Integration"> | string | null
    tenantId?: StringFilter<"Integration"> | string
    createdAt?: DateTimeFilter<"Integration"> | Date | string
    updatedAt?: DateTimeFilter<"Integration"> | Date | string
  }

  export type SmtpAccountUpsertWithWhereUniqueWithoutTenantInput = {
    where: SmtpAccountWhereUniqueInput
    update: XOR<SmtpAccountUpdateWithoutTenantInput, SmtpAccountUncheckedUpdateWithoutTenantInput>
    create: XOR<SmtpAccountCreateWithoutTenantInput, SmtpAccountUncheckedCreateWithoutTenantInput>
  }

  export type SmtpAccountUpdateWithWhereUniqueWithoutTenantInput = {
    where: SmtpAccountWhereUniqueInput
    data: XOR<SmtpAccountUpdateWithoutTenantInput, SmtpAccountUncheckedUpdateWithoutTenantInput>
  }

  export type SmtpAccountUpdateManyWithWhereWithoutTenantInput = {
    where: SmtpAccountScalarWhereInput
    data: XOR<SmtpAccountUpdateManyMutationInput, SmtpAccountUncheckedUpdateManyWithoutTenantInput>
  }

  export type SmtpAccountScalarWhereInput = {
    AND?: SmtpAccountScalarWhereInput | SmtpAccountScalarWhereInput[]
    OR?: SmtpAccountScalarWhereInput[]
    NOT?: SmtpAccountScalarWhereInput | SmtpAccountScalarWhereInput[]
    id?: StringFilter<"SmtpAccount"> | string
    name?: StringFilter<"SmtpAccount"> | string
    host?: StringFilter<"SmtpAccount"> | string
    port?: IntFilter<"SmtpAccount"> | number
    user?: StringFilter<"SmtpAccount"> | string
    pass?: StringFilter<"SmtpAccount"> | string
    secure?: BoolFilter<"SmtpAccount"> | boolean
    tenantId?: StringFilter<"SmtpAccount"> | string
    createdAt?: DateTimeFilter<"SmtpAccount"> | Date | string
    updatedAt?: DateTimeFilter<"SmtpAccount"> | Date | string
  }

  export type CampaignUpsertWithWhereUniqueWithoutTenantInput = {
    where: CampaignWhereUniqueInput
    update: XOR<CampaignUpdateWithoutTenantInput, CampaignUncheckedUpdateWithoutTenantInput>
    create: XOR<CampaignCreateWithoutTenantInput, CampaignUncheckedCreateWithoutTenantInput>
  }

  export type CampaignUpdateWithWhereUniqueWithoutTenantInput = {
    where: CampaignWhereUniqueInput
    data: XOR<CampaignUpdateWithoutTenantInput, CampaignUncheckedUpdateWithoutTenantInput>
  }

  export type CampaignUpdateManyWithWhereWithoutTenantInput = {
    where: CampaignScalarWhereInput
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyWithoutTenantInput>
  }

  export type CampaignScalarWhereInput = {
    AND?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    OR?: CampaignScalarWhereInput[]
    NOT?: CampaignScalarWhereInput | CampaignScalarWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    subject?: StringFilter<"Campaign"> | string
    content?: StringFilter<"Campaign"> | string
    status?: StringFilter<"Campaign"> | string
    sentCount?: IntFilter<"Campaign"> | number
    openRate?: FloatFilter<"Campaign"> | number
    clickRate?: FloatFilter<"Campaign"> | number
    tenantId?: StringFilter<"Campaign"> | string
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
  }

  export type SubscriptionUpsertWithoutTenantInput = {
    update: XOR<SubscriptionUpdateWithoutTenantInput, SubscriptionUncheckedUpdateWithoutTenantInput>
    create: XOR<SubscriptionCreateWithoutTenantInput, SubscriptionUncheckedCreateWithoutTenantInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutTenantInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutTenantInput, SubscriptionUncheckedUpdateWithoutTenantInput>
  }

  export type SubscriptionUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateWithoutCampaignsInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    tags?: TagCreateNestedManyWithoutTenantInput
    audiences?: AudienceCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueCreateNestedManyWithoutTenantInput
    workflows?: WorkflowCreateNestedManyWithoutTenantInput
    integrations?: IntegrationCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    tags?: TagUncheckedCreateNestedManyWithoutTenantInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceUncheckedCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueUncheckedCreateNestedManyWithoutTenantInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutTenantInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutCampaignsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutCampaignsInput, TenantUncheckedCreateWithoutCampaignsInput>
  }

  export type TenantUpsertWithoutCampaignsInput = {
    update: XOR<TenantUpdateWithoutCampaignsInput, TenantUncheckedUpdateWithoutCampaignsInput>
    create: XOR<TenantCreateWithoutCampaignsInput, TenantUncheckedCreateWithoutCampaignsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutCampaignsInput, TenantUncheckedUpdateWithoutCampaignsInput>
  }

  export type TenantUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    tags?: TagUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    tags?: TagUncheckedUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUncheckedUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUncheckedUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type TenantCreateWithoutSmtpAccountsInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    tags?: TagCreateNestedManyWithoutTenantInput
    audiences?: AudienceCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueCreateNestedManyWithoutTenantInput
    workflows?: WorkflowCreateNestedManyWithoutTenantInput
    integrations?: IntegrationCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutSmtpAccountsInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    tags?: TagUncheckedCreateNestedManyWithoutTenantInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceUncheckedCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueUncheckedCreateNestedManyWithoutTenantInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutTenantInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutSmtpAccountsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutSmtpAccountsInput, TenantUncheckedCreateWithoutSmtpAccountsInput>
  }

  export type TenantUpsertWithoutSmtpAccountsInput = {
    update: XOR<TenantUpdateWithoutSmtpAccountsInput, TenantUncheckedUpdateWithoutSmtpAccountsInput>
    create: XOR<TenantCreateWithoutSmtpAccountsInput, TenantUncheckedCreateWithoutSmtpAccountsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutSmtpAccountsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutSmtpAccountsInput, TenantUncheckedUpdateWithoutSmtpAccountsInput>
  }

  export type TenantUpdateWithoutSmtpAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    tags?: TagUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutSmtpAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    tags?: TagUncheckedUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUncheckedUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUncheckedUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type PlanCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    price: number
    interval?: string
    maxUsers: number
    maxLeads: number
    maxWorkflows: number
    stripePriceId?: string | null
    createdAt?: Date | string
  }

  export type PlanUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    price: number
    interval?: string
    maxUsers: number
    maxLeads: number
    maxWorkflows: number
    stripePriceId?: string | null
    createdAt?: Date | string
  }

  export type PlanCreateOrConnectWithoutSubscriptionsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
  }

  export type TenantCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    tags?: TagCreateNestedManyWithoutTenantInput
    audiences?: AudienceCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueCreateNestedManyWithoutTenantInput
    workflows?: WorkflowCreateNestedManyWithoutTenantInput
    integrations?: IntegrationCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    tags?: TagUncheckedCreateNestedManyWithoutTenantInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceUncheckedCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueUncheckedCreateNestedManyWithoutTenantInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutTenantInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutSubscriptionInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutSubscriptionInput, TenantUncheckedCreateWithoutSubscriptionInput>
  }

  export type PlanUpsertWithoutSubscriptionsInput = {
    update: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlanUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    stripePriceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUpsertWithoutSubscriptionInput = {
    update: XOR<TenantUpdateWithoutSubscriptionInput, TenantUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<TenantCreateWithoutSubscriptionInput, TenantUncheckedCreateWithoutSubscriptionInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutSubscriptionInput, TenantUncheckedUpdateWithoutSubscriptionInput>
  }

  export type TenantUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    tags?: TagUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    tags?: TagUncheckedUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUncheckedUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUncheckedUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type SubscriptionCreateWithoutPlanInput = {
    id?: string
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    status?: string
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    tenantId: string
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    status?: string
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    tenantId?: StringFilter<"Subscription"> | string
    stripeCustomerId?: StringNullableFilter<"Subscription"> | string | null
    stripeSubId?: StringNullableFilter<"Subscription"> | string | null
    status?: StringFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type TenantCreateWithoutIntegrationsInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    tags?: TagCreateNestedManyWithoutTenantInput
    audiences?: AudienceCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueCreateNestedManyWithoutTenantInput
    workflows?: WorkflowCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutIntegrationsInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    tags?: TagUncheckedCreateNestedManyWithoutTenantInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceUncheckedCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueUncheckedCreateNestedManyWithoutTenantInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutIntegrationsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutIntegrationsInput, TenantUncheckedCreateWithoutIntegrationsInput>
  }

  export type TenantUpsertWithoutIntegrationsInput = {
    update: XOR<TenantUpdateWithoutIntegrationsInput, TenantUncheckedUpdateWithoutIntegrationsInput>
    create: XOR<TenantCreateWithoutIntegrationsInput, TenantUncheckedCreateWithoutIntegrationsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutIntegrationsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutIntegrationsInput, TenantUncheckedUpdateWithoutIntegrationsInput>
  }

  export type TenantUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    tags?: TagUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    tags?: TagUncheckedUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUncheckedUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUncheckedUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type TenantCreateWithoutUsersInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutTenantInput
    tags?: TagCreateNestedManyWithoutTenantInput
    audiences?: AudienceCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueCreateNestedManyWithoutTenantInput
    workflows?: WorkflowCreateNestedManyWithoutTenantInput
    integrations?: IntegrationCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    tags?: TagUncheckedCreateNestedManyWithoutTenantInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceUncheckedCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueUncheckedCreateNestedManyWithoutTenantInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutTenantInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutTenantNestedInput
    tags?: TagUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    tags?: TagUncheckedUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUncheckedUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUncheckedUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type TenantCreateWithoutWorkflowsInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    tags?: TagCreateNestedManyWithoutTenantInput
    audiences?: AudienceCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueCreateNestedManyWithoutTenantInput
    integrations?: IntegrationCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutWorkflowsInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    tags?: TagUncheckedCreateNestedManyWithoutTenantInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceUncheckedCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueUncheckedCreateNestedManyWithoutTenantInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutWorkflowsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutWorkflowsInput, TenantUncheckedCreateWithoutWorkflowsInput>
  }

  export type WorkflowExecutionCreateWithoutWorkflowInput = {
    id?: string
    status?: string
    currentNode?: string | null
    nextStepAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lead: LeadCreateNestedOneWithoutWorkflowExecInput
  }

  export type WorkflowExecutionUncheckedCreateWithoutWorkflowInput = {
    id?: string
    status?: string
    currentNode?: string | null
    nextStepAt?: Date | string | null
    leadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowExecutionCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowExecutionWhereUniqueInput
    create: XOR<WorkflowExecutionCreateWithoutWorkflowInput, WorkflowExecutionUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowExecutionCreateManyWorkflowInputEnvelope = {
    data: WorkflowExecutionCreateManyWorkflowInput | WorkflowExecutionCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutWorkflowsInput = {
    update: XOR<TenantUpdateWithoutWorkflowsInput, TenantUncheckedUpdateWithoutWorkflowsInput>
    create: XOR<TenantCreateWithoutWorkflowsInput, TenantUncheckedCreateWithoutWorkflowsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutWorkflowsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutWorkflowsInput, TenantUncheckedUpdateWithoutWorkflowsInput>
  }

  export type TenantUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    tags?: TagUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    tags?: TagUncheckedUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUncheckedUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUncheckedUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type WorkflowExecutionUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowExecutionWhereUniqueInput
    update: XOR<WorkflowExecutionUpdateWithoutWorkflowInput, WorkflowExecutionUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowExecutionCreateWithoutWorkflowInput, WorkflowExecutionUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowExecutionUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowExecutionWhereUniqueInput
    data: XOR<WorkflowExecutionUpdateWithoutWorkflowInput, WorkflowExecutionUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowExecutionUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowExecutionScalarWhereInput
    data: XOR<WorkflowExecutionUpdateManyMutationInput, WorkflowExecutionUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowExecutionScalarWhereInput = {
    AND?: WorkflowExecutionScalarWhereInput | WorkflowExecutionScalarWhereInput[]
    OR?: WorkflowExecutionScalarWhereInput[]
    NOT?: WorkflowExecutionScalarWhereInput | WorkflowExecutionScalarWhereInput[]
    id?: StringFilter<"WorkflowExecution"> | string
    status?: StringFilter<"WorkflowExecution"> | string
    currentNode?: StringNullableFilter<"WorkflowExecution"> | string | null
    nextStepAt?: DateTimeNullableFilter<"WorkflowExecution"> | Date | string | null
    workflowId?: StringFilter<"WorkflowExecution"> | string
    leadId?: StringFilter<"WorkflowExecution"> | string
    createdAt?: DateTimeFilter<"WorkflowExecution"> | Date | string
    updatedAt?: DateTimeFilter<"WorkflowExecution"> | Date | string
  }

  export type WorkflowCreateWithoutExecutionsInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    nodes: string
    connections: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutWorkflowsInput
  }

  export type WorkflowUncheckedCreateWithoutExecutionsInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    nodes: string
    connections: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
  }

  export type WorkflowCreateOrConnectWithoutExecutionsInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutExecutionsInput, WorkflowUncheckedCreateWithoutExecutionsInput>
  }

  export type LeadCreateWithoutWorkflowExecInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    status?: string
    source?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeadsInput
    tags?: TagCreateNestedManyWithoutLeadsInput
    audiences?: AudienceCreateNestedManyWithoutLeadsInput
  }

  export type LeadUncheckedCreateWithoutWorkflowExecInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    status?: string
    source?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    tags?: TagUncheckedCreateNestedManyWithoutLeadsInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutLeadsInput
  }

  export type LeadCreateOrConnectWithoutWorkflowExecInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutWorkflowExecInput, LeadUncheckedCreateWithoutWorkflowExecInput>
  }

  export type WorkflowUpsertWithoutExecutionsInput = {
    update: XOR<WorkflowUpdateWithoutExecutionsInput, WorkflowUncheckedUpdateWithoutExecutionsInput>
    create: XOR<WorkflowCreateWithoutExecutionsInput, WorkflowUncheckedCreateWithoutExecutionsInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutExecutionsInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutExecutionsInput, WorkflowUncheckedUpdateWithoutExecutionsInput>
  }

  export type WorkflowUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    nodes?: StringFieldUpdateOperationsInput | string
    connections?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutWorkflowsNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    nodes?: StringFieldUpdateOperationsInput | string
    connections?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type LeadUpsertWithoutWorkflowExecInput = {
    update: XOR<LeadUpdateWithoutWorkflowExecInput, LeadUncheckedUpdateWithoutWorkflowExecInput>
    create: XOR<LeadCreateWithoutWorkflowExecInput, LeadUncheckedCreateWithoutWorkflowExecInput>
    where?: LeadWhereInput
  }

  export type LeadUpdateToOneWithWhereWithoutWorkflowExecInput = {
    where?: LeadWhereInput
    data: XOR<LeadUpdateWithoutWorkflowExecInput, LeadUncheckedUpdateWithoutWorkflowExecInput>
  }

  export type LeadUpdateWithoutWorkflowExecInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeadsNestedInput
    tags?: TagUpdateManyWithoutLeadsNestedInput
    audiences?: AudienceUpdateManyWithoutLeadsNestedInput
  }

  export type LeadUncheckedUpdateWithoutWorkflowExecInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    tags?: TagUncheckedUpdateManyWithoutLeadsNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutLeadsNestedInput
  }

  export type TenantCreateWithoutLeadsInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    tags?: TagCreateNestedManyWithoutTenantInput
    audiences?: AudienceCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueCreateNestedManyWithoutTenantInput
    workflows?: WorkflowCreateNestedManyWithoutTenantInput
    integrations?: IntegrationCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    tags?: TagUncheckedCreateNestedManyWithoutTenantInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceUncheckedCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueUncheckedCreateNestedManyWithoutTenantInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutTenantInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutLeadsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
  }

  export type TagCreateWithoutLeadsInput = {
    id?: string
    name: string
    color?: string | null
    tenant: TenantCreateNestedOneWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    color?: string | null
    tenantId: string
  }

  export type TagCreateOrConnectWithoutLeadsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutLeadsInput, TagUncheckedCreateWithoutLeadsInput>
  }

  export type AudienceCreateWithoutLeadsInput = {
    id?: string
    name: string
    tenant: TenantCreateNestedOneWithoutAudiencesInput
  }

  export type AudienceUncheckedCreateWithoutLeadsInput = {
    id?: string
    name: string
    tenantId: string
  }

  export type AudienceCreateOrConnectWithoutLeadsInput = {
    where: AudienceWhereUniqueInput
    create: XOR<AudienceCreateWithoutLeadsInput, AudienceUncheckedCreateWithoutLeadsInput>
  }

  export type WorkflowExecutionCreateWithoutLeadInput = {
    id?: string
    status?: string
    currentNode?: string | null
    nextStepAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutExecutionsInput
  }

  export type WorkflowExecutionUncheckedCreateWithoutLeadInput = {
    id?: string
    status?: string
    currentNode?: string | null
    nextStepAt?: Date | string | null
    workflowId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowExecutionCreateOrConnectWithoutLeadInput = {
    where: WorkflowExecutionWhereUniqueInput
    create: XOR<WorkflowExecutionCreateWithoutLeadInput, WorkflowExecutionUncheckedCreateWithoutLeadInput>
  }

  export type WorkflowExecutionCreateManyLeadInputEnvelope = {
    data: WorkflowExecutionCreateManyLeadInput | WorkflowExecutionCreateManyLeadInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutLeadsInput = {
    update: XOR<TenantUpdateWithoutLeadsInput, TenantUncheckedUpdateWithoutLeadsInput>
    create: XOR<TenantCreateWithoutLeadsInput, TenantUncheckedCreateWithoutLeadsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutLeadsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutLeadsInput, TenantUncheckedUpdateWithoutLeadsInput>
  }

  export type TenantUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    tags?: TagUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    tags?: TagUncheckedUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUncheckedUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUncheckedUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type TagUpsertWithWhereUniqueWithoutLeadsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutLeadsInput, TagUncheckedUpdateWithoutLeadsInput>
    create: XOR<TagCreateWithoutLeadsInput, TagUncheckedCreateWithoutLeadsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutLeadsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutLeadsInput, TagUncheckedUpdateWithoutLeadsInput>
  }

  export type TagUpdateManyWithWhereWithoutLeadsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutLeadsInput>
  }

  export type AudienceUpsertWithWhereUniqueWithoutLeadsInput = {
    where: AudienceWhereUniqueInput
    update: XOR<AudienceUpdateWithoutLeadsInput, AudienceUncheckedUpdateWithoutLeadsInput>
    create: XOR<AudienceCreateWithoutLeadsInput, AudienceUncheckedCreateWithoutLeadsInput>
  }

  export type AudienceUpdateWithWhereUniqueWithoutLeadsInput = {
    where: AudienceWhereUniqueInput
    data: XOR<AudienceUpdateWithoutLeadsInput, AudienceUncheckedUpdateWithoutLeadsInput>
  }

  export type AudienceUpdateManyWithWhereWithoutLeadsInput = {
    where: AudienceScalarWhereInput
    data: XOR<AudienceUpdateManyMutationInput, AudienceUncheckedUpdateManyWithoutLeadsInput>
  }

  export type WorkflowExecutionUpsertWithWhereUniqueWithoutLeadInput = {
    where: WorkflowExecutionWhereUniqueInput
    update: XOR<WorkflowExecutionUpdateWithoutLeadInput, WorkflowExecutionUncheckedUpdateWithoutLeadInput>
    create: XOR<WorkflowExecutionCreateWithoutLeadInput, WorkflowExecutionUncheckedCreateWithoutLeadInput>
  }

  export type WorkflowExecutionUpdateWithWhereUniqueWithoutLeadInput = {
    where: WorkflowExecutionWhereUniqueInput
    data: XOR<WorkflowExecutionUpdateWithoutLeadInput, WorkflowExecutionUncheckedUpdateWithoutLeadInput>
  }

  export type WorkflowExecutionUpdateManyWithWhereWithoutLeadInput = {
    where: WorkflowExecutionScalarWhereInput
    data: XOR<WorkflowExecutionUpdateManyMutationInput, WorkflowExecutionUncheckedUpdateManyWithoutLeadInput>
  }

  export type TenantCreateWithoutInstancesInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    tags?: TagCreateNestedManyWithoutTenantInput
    audiences?: AudienceCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueCreateNestedManyWithoutTenantInput
    workflows?: WorkflowCreateNestedManyWithoutTenantInput
    integrations?: IntegrationCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutInstancesInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    tags?: TagUncheckedCreateNestedManyWithoutTenantInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueUncheckedCreateNestedManyWithoutTenantInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutTenantInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutInstancesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutInstancesInput, TenantUncheckedCreateWithoutInstancesInput>
  }

  export type AttendanceQueueCreateWithoutMainInstanceInput = {
    id?: string
    name: string
    lastAgentIndex?: number
    tenant: TenantCreateNestedOneWithoutQueuesInput
    agents?: QueueAgentCreateNestedManyWithoutQueueInput
  }

  export type AttendanceQueueUncheckedCreateWithoutMainInstanceInput = {
    id?: string
    name: string
    tenantId: string
    lastAgentIndex?: number
    agents?: QueueAgentUncheckedCreateNestedManyWithoutQueueInput
  }

  export type AttendanceQueueCreateOrConnectWithoutMainInstanceInput = {
    where: AttendanceQueueWhereUniqueInput
    create: XOR<AttendanceQueueCreateWithoutMainInstanceInput, AttendanceQueueUncheckedCreateWithoutMainInstanceInput>
  }

  export type AttendanceQueueCreateManyMainInstanceInputEnvelope = {
    data: AttendanceQueueCreateManyMainInstanceInput | AttendanceQueueCreateManyMainInstanceInput[]
    skipDuplicates?: boolean
  }

  export type QueueAgentCreateWithoutInstanceInput = {
    id?: string
    order: number
    queue: AttendanceQueueCreateNestedOneWithoutAgentsInput
  }

  export type QueueAgentUncheckedCreateWithoutInstanceInput = {
    id?: string
    order: number
    queueId: string
  }

  export type QueueAgentCreateOrConnectWithoutInstanceInput = {
    where: QueueAgentWhereUniqueInput
    create: XOR<QueueAgentCreateWithoutInstanceInput, QueueAgentUncheckedCreateWithoutInstanceInput>
  }

  export type QueueAgentCreateManyInstanceInputEnvelope = {
    data: QueueAgentCreateManyInstanceInput | QueueAgentCreateManyInstanceInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutInstancesInput = {
    update: XOR<TenantUpdateWithoutInstancesInput, TenantUncheckedUpdateWithoutInstancesInput>
    create: XOR<TenantCreateWithoutInstancesInput, TenantUncheckedCreateWithoutInstancesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutInstancesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutInstancesInput, TenantUncheckedUpdateWithoutInstancesInput>
  }

  export type TenantUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    tags?: TagUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutInstancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    tags?: TagUncheckedUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUncheckedUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type AttendanceQueueUpsertWithWhereUniqueWithoutMainInstanceInput = {
    where: AttendanceQueueWhereUniqueInput
    update: XOR<AttendanceQueueUpdateWithoutMainInstanceInput, AttendanceQueueUncheckedUpdateWithoutMainInstanceInput>
    create: XOR<AttendanceQueueCreateWithoutMainInstanceInput, AttendanceQueueUncheckedCreateWithoutMainInstanceInput>
  }

  export type AttendanceQueueUpdateWithWhereUniqueWithoutMainInstanceInput = {
    where: AttendanceQueueWhereUniqueInput
    data: XOR<AttendanceQueueUpdateWithoutMainInstanceInput, AttendanceQueueUncheckedUpdateWithoutMainInstanceInput>
  }

  export type AttendanceQueueUpdateManyWithWhereWithoutMainInstanceInput = {
    where: AttendanceQueueScalarWhereInput
    data: XOR<AttendanceQueueUpdateManyMutationInput, AttendanceQueueUncheckedUpdateManyWithoutMainInstanceInput>
  }

  export type QueueAgentUpsertWithWhereUniqueWithoutInstanceInput = {
    where: QueueAgentWhereUniqueInput
    update: XOR<QueueAgentUpdateWithoutInstanceInput, QueueAgentUncheckedUpdateWithoutInstanceInput>
    create: XOR<QueueAgentCreateWithoutInstanceInput, QueueAgentUncheckedCreateWithoutInstanceInput>
  }

  export type QueueAgentUpdateWithWhereUniqueWithoutInstanceInput = {
    where: QueueAgentWhereUniqueInput
    data: XOR<QueueAgentUpdateWithoutInstanceInput, QueueAgentUncheckedUpdateWithoutInstanceInput>
  }

  export type QueueAgentUpdateManyWithWhereWithoutInstanceInput = {
    where: QueueAgentScalarWhereInput
    data: XOR<QueueAgentUpdateManyMutationInput, QueueAgentUncheckedUpdateManyWithoutInstanceInput>
  }

  export type QueueAgentScalarWhereInput = {
    AND?: QueueAgentScalarWhereInput | QueueAgentScalarWhereInput[]
    OR?: QueueAgentScalarWhereInput[]
    NOT?: QueueAgentScalarWhereInput | QueueAgentScalarWhereInput[]
    id?: StringFilter<"QueueAgent"> | string
    order?: IntFilter<"QueueAgent"> | number
    queueId?: StringFilter<"QueueAgent"> | string
    instanceId?: StringFilter<"QueueAgent"> | string
  }

  export type WhatsAppInstanceCreateWithoutAsMainInQueuesInput = {
    id?: string
    instanceName: string
    owner?: string | null
    type?: string
    status?: string
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiModel?: string
    knowledgeBase?: string | null
    tenant: TenantCreateNestedOneWithoutInstancesInput
    asAgentInQueues?: QueueAgentCreateNestedManyWithoutInstanceInput
  }

  export type WhatsAppInstanceUncheckedCreateWithoutAsMainInQueuesInput = {
    id?: string
    instanceName: string
    owner?: string | null
    type?: string
    status?: string
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiModel?: string
    knowledgeBase?: string | null
    tenantId: string
    asAgentInQueues?: QueueAgentUncheckedCreateNestedManyWithoutInstanceInput
  }

  export type WhatsAppInstanceCreateOrConnectWithoutAsMainInQueuesInput = {
    where: WhatsAppInstanceWhereUniqueInput
    create: XOR<WhatsAppInstanceCreateWithoutAsMainInQueuesInput, WhatsAppInstanceUncheckedCreateWithoutAsMainInQueuesInput>
  }

  export type TenantCreateWithoutQueuesInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    tags?: TagCreateNestedManyWithoutTenantInput
    audiences?: AudienceCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceCreateNestedManyWithoutTenantInput
    workflows?: WorkflowCreateNestedManyWithoutTenantInput
    integrations?: IntegrationCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutQueuesInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    tags?: TagUncheckedCreateNestedManyWithoutTenantInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceUncheckedCreateNestedManyWithoutTenantInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutTenantInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutQueuesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutQueuesInput, TenantUncheckedCreateWithoutQueuesInput>
  }

  export type QueueAgentCreateWithoutQueueInput = {
    id?: string
    order: number
    instance: WhatsAppInstanceCreateNestedOneWithoutAsAgentInQueuesInput
  }

  export type QueueAgentUncheckedCreateWithoutQueueInput = {
    id?: string
    order: number
    instanceId: string
  }

  export type QueueAgentCreateOrConnectWithoutQueueInput = {
    where: QueueAgentWhereUniqueInput
    create: XOR<QueueAgentCreateWithoutQueueInput, QueueAgentUncheckedCreateWithoutQueueInput>
  }

  export type QueueAgentCreateManyQueueInputEnvelope = {
    data: QueueAgentCreateManyQueueInput | QueueAgentCreateManyQueueInput[]
    skipDuplicates?: boolean
  }

  export type WhatsAppInstanceUpsertWithoutAsMainInQueuesInput = {
    update: XOR<WhatsAppInstanceUpdateWithoutAsMainInQueuesInput, WhatsAppInstanceUncheckedUpdateWithoutAsMainInQueuesInput>
    create: XOR<WhatsAppInstanceCreateWithoutAsMainInQueuesInput, WhatsAppInstanceUncheckedCreateWithoutAsMainInQueuesInput>
    where?: WhatsAppInstanceWhereInput
  }

  export type WhatsAppInstanceUpdateToOneWithWhereWithoutAsMainInQueuesInput = {
    where?: WhatsAppInstanceWhereInput
    data: XOR<WhatsAppInstanceUpdateWithoutAsMainInQueuesInput, WhatsAppInstanceUncheckedUpdateWithoutAsMainInQueuesInput>
  }

  export type WhatsAppInstanceUpdateWithoutAsMainInQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    instanceName?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    knowledgeBase?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutInstancesNestedInput
    asAgentInQueues?: QueueAgentUpdateManyWithoutInstanceNestedInput
  }

  export type WhatsAppInstanceUncheckedUpdateWithoutAsMainInQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    instanceName?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    knowledgeBase?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    asAgentInQueues?: QueueAgentUncheckedUpdateManyWithoutInstanceNestedInput
  }

  export type TenantUpsertWithoutQueuesInput = {
    update: XOR<TenantUpdateWithoutQueuesInput, TenantUncheckedUpdateWithoutQueuesInput>
    create: XOR<TenantCreateWithoutQueuesInput, TenantUncheckedCreateWithoutQueuesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutQueuesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutQueuesInput, TenantUncheckedUpdateWithoutQueuesInput>
  }

  export type TenantUpdateWithoutQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    tags?: TagUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    tags?: TagUncheckedUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUncheckedUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type QueueAgentUpsertWithWhereUniqueWithoutQueueInput = {
    where: QueueAgentWhereUniqueInput
    update: XOR<QueueAgentUpdateWithoutQueueInput, QueueAgentUncheckedUpdateWithoutQueueInput>
    create: XOR<QueueAgentCreateWithoutQueueInput, QueueAgentUncheckedCreateWithoutQueueInput>
  }

  export type QueueAgentUpdateWithWhereUniqueWithoutQueueInput = {
    where: QueueAgentWhereUniqueInput
    data: XOR<QueueAgentUpdateWithoutQueueInput, QueueAgentUncheckedUpdateWithoutQueueInput>
  }

  export type QueueAgentUpdateManyWithWhereWithoutQueueInput = {
    where: QueueAgentScalarWhereInput
    data: XOR<QueueAgentUpdateManyMutationInput, QueueAgentUncheckedUpdateManyWithoutQueueInput>
  }

  export type AttendanceQueueCreateWithoutAgentsInput = {
    id?: string
    name: string
    lastAgentIndex?: number
    mainInstance: WhatsAppInstanceCreateNestedOneWithoutAsMainInQueuesInput
    tenant: TenantCreateNestedOneWithoutQueuesInput
  }

  export type AttendanceQueueUncheckedCreateWithoutAgentsInput = {
    id?: string
    name: string
    mainInstanceId: string
    tenantId: string
    lastAgentIndex?: number
  }

  export type AttendanceQueueCreateOrConnectWithoutAgentsInput = {
    where: AttendanceQueueWhereUniqueInput
    create: XOR<AttendanceQueueCreateWithoutAgentsInput, AttendanceQueueUncheckedCreateWithoutAgentsInput>
  }

  export type WhatsAppInstanceCreateWithoutAsAgentInQueuesInput = {
    id?: string
    instanceName: string
    owner?: string | null
    type?: string
    status?: string
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiModel?: string
    knowledgeBase?: string | null
    tenant: TenantCreateNestedOneWithoutInstancesInput
    asMainInQueues?: AttendanceQueueCreateNestedManyWithoutMainInstanceInput
  }

  export type WhatsAppInstanceUncheckedCreateWithoutAsAgentInQueuesInput = {
    id?: string
    instanceName: string
    owner?: string | null
    type?: string
    status?: string
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiModel?: string
    knowledgeBase?: string | null
    tenantId: string
    asMainInQueues?: AttendanceQueueUncheckedCreateNestedManyWithoutMainInstanceInput
  }

  export type WhatsAppInstanceCreateOrConnectWithoutAsAgentInQueuesInput = {
    where: WhatsAppInstanceWhereUniqueInput
    create: XOR<WhatsAppInstanceCreateWithoutAsAgentInQueuesInput, WhatsAppInstanceUncheckedCreateWithoutAsAgentInQueuesInput>
  }

  export type AttendanceQueueUpsertWithoutAgentsInput = {
    update: XOR<AttendanceQueueUpdateWithoutAgentsInput, AttendanceQueueUncheckedUpdateWithoutAgentsInput>
    create: XOR<AttendanceQueueCreateWithoutAgentsInput, AttendanceQueueUncheckedCreateWithoutAgentsInput>
    where?: AttendanceQueueWhereInput
  }

  export type AttendanceQueueUpdateToOneWithWhereWithoutAgentsInput = {
    where?: AttendanceQueueWhereInput
    data: XOR<AttendanceQueueUpdateWithoutAgentsInput, AttendanceQueueUncheckedUpdateWithoutAgentsInput>
  }

  export type AttendanceQueueUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastAgentIndex?: IntFieldUpdateOperationsInput | number
    mainInstance?: WhatsAppInstanceUpdateOneRequiredWithoutAsMainInQueuesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutQueuesNestedInput
  }

  export type AttendanceQueueUncheckedUpdateWithoutAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainInstanceId?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    lastAgentIndex?: IntFieldUpdateOperationsInput | number
  }

  export type WhatsAppInstanceUpsertWithoutAsAgentInQueuesInput = {
    update: XOR<WhatsAppInstanceUpdateWithoutAsAgentInQueuesInput, WhatsAppInstanceUncheckedUpdateWithoutAsAgentInQueuesInput>
    create: XOR<WhatsAppInstanceCreateWithoutAsAgentInQueuesInput, WhatsAppInstanceUncheckedCreateWithoutAsAgentInQueuesInput>
    where?: WhatsAppInstanceWhereInput
  }

  export type WhatsAppInstanceUpdateToOneWithWhereWithoutAsAgentInQueuesInput = {
    where?: WhatsAppInstanceWhereInput
    data: XOR<WhatsAppInstanceUpdateWithoutAsAgentInQueuesInput, WhatsAppInstanceUncheckedUpdateWithoutAsAgentInQueuesInput>
  }

  export type WhatsAppInstanceUpdateWithoutAsAgentInQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    instanceName?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    knowledgeBase?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutInstancesNestedInput
    asMainInQueues?: AttendanceQueueUpdateManyWithoutMainInstanceNestedInput
  }

  export type WhatsAppInstanceUncheckedUpdateWithoutAsAgentInQueuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    instanceName?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    knowledgeBase?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
    asMainInQueues?: AttendanceQueueUncheckedUpdateManyWithoutMainInstanceNestedInput
  }

  export type TenantCreateWithoutTagsInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    audiences?: AudienceCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueCreateNestedManyWithoutTenantInput
    workflows?: WorkflowCreateNestedManyWithoutTenantInput
    integrations?: IntegrationCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    audiences?: AudienceUncheckedCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceUncheckedCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueUncheckedCreateNestedManyWithoutTenantInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutTenantInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutTagsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutTagsInput, TenantUncheckedCreateWithoutTagsInput>
  }

  export type LeadCreateWithoutTagsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    status?: string
    source?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeadsInput
    audiences?: AudienceCreateNestedManyWithoutLeadsInput
    workflowExec?: WorkflowExecutionCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    status?: string
    source?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    audiences?: AudienceUncheckedCreateNestedManyWithoutLeadsInput
    workflowExec?: WorkflowExecutionUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutTagsInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutTagsInput, LeadUncheckedCreateWithoutTagsInput>
  }

  export type TenantUpsertWithoutTagsInput = {
    update: XOR<TenantUpdateWithoutTagsInput, TenantUncheckedUpdateWithoutTagsInput>
    create: XOR<TenantCreateWithoutTagsInput, TenantUncheckedCreateWithoutTagsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutTagsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutTagsInput, TenantUncheckedUpdateWithoutTagsInput>
  }

  export type TenantUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUncheckedUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUncheckedUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type LeadUpsertWithWhereUniqueWithoutTagsInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutTagsInput, LeadUncheckedUpdateWithoutTagsInput>
    create: XOR<LeadCreateWithoutTagsInput, LeadUncheckedCreateWithoutTagsInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutTagsInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutTagsInput, LeadUncheckedUpdateWithoutTagsInput>
  }

  export type LeadUpdateManyWithWhereWithoutTagsInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutTagsInput>
  }

  export type TenantCreateWithoutAudiencesInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    leads?: LeadCreateNestedManyWithoutTenantInput
    tags?: TagCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueCreateNestedManyWithoutTenantInput
    workflows?: WorkflowCreateNestedManyWithoutTenantInput
    integrations?: IntegrationCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountCreateNestedManyWithoutTenantInput
    campaigns?: CampaignCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionCreateNestedOneWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutAudiencesInput = {
    id?: string
    name: string
    slug?: string | null
    evolutionUrl?: string | null
    evolutionToken?: string | null
    maxUsers?: number
    maxLeads?: number
    maxWorkflows?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    leads?: LeadUncheckedCreateNestedManyWithoutTenantInput
    tags?: TagUncheckedCreateNestedManyWithoutTenantInput
    instances?: WhatsAppInstanceUncheckedCreateNestedManyWithoutTenantInput
    queues?: AttendanceQueueUncheckedCreateNestedManyWithoutTenantInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutTenantInput
    integrations?: IntegrationUncheckedCreateNestedManyWithoutTenantInput
    smtpAccounts?: SmtpAccountUncheckedCreateNestedManyWithoutTenantInput
    campaigns?: CampaignUncheckedCreateNestedManyWithoutTenantInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutAudiencesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutAudiencesInput, TenantUncheckedCreateWithoutAudiencesInput>
  }

  export type LeadCreateWithoutAudiencesInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    status?: string
    source?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutLeadsInput
    tags?: TagCreateNestedManyWithoutLeadsInput
    workflowExec?: WorkflowExecutionCreateNestedManyWithoutLeadInput
  }

  export type LeadUncheckedCreateWithoutAudiencesInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    status?: string
    source?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantId: string
    tags?: TagUncheckedCreateNestedManyWithoutLeadsInput
    workflowExec?: WorkflowExecutionUncheckedCreateNestedManyWithoutLeadInput
  }

  export type LeadCreateOrConnectWithoutAudiencesInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutAudiencesInput, LeadUncheckedCreateWithoutAudiencesInput>
  }

  export type TenantUpsertWithoutAudiencesInput = {
    update: XOR<TenantUpdateWithoutAudiencesInput, TenantUncheckedUpdateWithoutAudiencesInput>
    create: XOR<TenantCreateWithoutAudiencesInput, TenantUncheckedCreateWithoutAudiencesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutAudiencesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutAudiencesInput, TenantUncheckedUpdateWithoutAudiencesInput>
  }

  export type TenantUpdateWithoutAudiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    leads?: LeadUpdateManyWithoutTenantNestedInput
    tags?: TagUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUpdateOneWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutAudiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evolutionToken?: NullableStringFieldUpdateOperationsInput | string | null
    maxUsers?: IntFieldUpdateOperationsInput | number
    maxLeads?: IntFieldUpdateOperationsInput | number
    maxWorkflows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    leads?: LeadUncheckedUpdateManyWithoutTenantNestedInput
    tags?: TagUncheckedUpdateManyWithoutTenantNestedInput
    instances?: WhatsAppInstanceUncheckedUpdateManyWithoutTenantNestedInput
    queues?: AttendanceQueueUncheckedUpdateManyWithoutTenantNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutTenantNestedInput
    integrations?: IntegrationUncheckedUpdateManyWithoutTenantNestedInput
    smtpAccounts?: SmtpAccountUncheckedUpdateManyWithoutTenantNestedInput
    campaigns?: CampaignUncheckedUpdateManyWithoutTenantNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutTenantNestedInput
  }

  export type LeadUpsertWithWhereUniqueWithoutAudiencesInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutAudiencesInput, LeadUncheckedUpdateWithoutAudiencesInput>
    create: XOR<LeadCreateWithoutAudiencesInput, LeadUncheckedCreateWithoutAudiencesInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutAudiencesInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutAudiencesInput, LeadUncheckedUpdateWithoutAudiencesInput>
  }

  export type LeadUpdateManyWithWhereWithoutAudiencesInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutAudiencesInput>
  }

  export type UserCreateManyTenantInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: string
    createdAt?: Date | string
  }

  export type LeadCreateManyTenantInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    status?: string
    source?: string
    obs?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateManyTenantInput = {
    id?: string
    name: string
    color?: string | null
  }

  export type AudienceCreateManyTenantInput = {
    id?: string
    name: string
  }

  export type WhatsAppInstanceCreateManyTenantInput = {
    id?: string
    instanceName: string
    owner?: string | null
    type?: string
    status?: string
    aiEnabled?: boolean
    aiPrompt?: string | null
    aiModel?: string
    knowledgeBase?: string | null
  }

  export type AttendanceQueueCreateManyTenantInput = {
    id?: string
    name: string
    mainInstanceId: string
    lastAgentIndex?: number
  }

  export type WorkflowCreateManyTenantInput = {
    id?: string
    name: string
    description?: string | null
    status?: string
    nodes: string
    connections: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntegrationCreateManyTenantInput = {
    id?: string
    name: string
    platform: string
    type?: string
    webhookKey?: string
    config?: string | null
    autoTag?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SmtpAccountCreateManyTenantInput = {
    id?: string
    name: string
    host: string
    port?: number
    user: string
    pass: string
    secure?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCreateManyTenantInput = {
    id?: string
    name: string
    subject: string
    content: string
    status?: string
    sentCount?: number
    openRate?: number
    clickRate?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutLeadsNestedInput
    audiences?: AudienceUpdateManyWithoutLeadsNestedInput
    workflowExec?: WorkflowExecutionUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutLeadsNestedInput
    audiences?: AudienceUncheckedUpdateManyWithoutLeadsNestedInput
    workflowExec?: WorkflowExecutionUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    leads?: LeadUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    leads?: LeadUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AudienceUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leads?: LeadUpdateManyWithoutAudiencesNestedInput
  }

  export type AudienceUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    leads?: LeadUncheckedUpdateManyWithoutAudiencesNestedInput
  }

  export type AudienceUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WhatsAppInstanceUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    instanceName?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    knowledgeBase?: NullableStringFieldUpdateOperationsInput | string | null
    asMainInQueues?: AttendanceQueueUpdateManyWithoutMainInstanceNestedInput
    asAgentInQueues?: QueueAgentUpdateManyWithoutInstanceNestedInput
  }

  export type WhatsAppInstanceUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    instanceName?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    knowledgeBase?: NullableStringFieldUpdateOperationsInput | string | null
    asMainInQueues?: AttendanceQueueUncheckedUpdateManyWithoutMainInstanceNestedInput
    asAgentInQueues?: QueueAgentUncheckedUpdateManyWithoutInstanceNestedInput
  }

  export type WhatsAppInstanceUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    instanceName?: StringFieldUpdateOperationsInput | string
    owner?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    aiEnabled?: BoolFieldUpdateOperationsInput | boolean
    aiPrompt?: NullableStringFieldUpdateOperationsInput | string | null
    aiModel?: StringFieldUpdateOperationsInput | string
    knowledgeBase?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttendanceQueueUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastAgentIndex?: IntFieldUpdateOperationsInput | number
    mainInstance?: WhatsAppInstanceUpdateOneRequiredWithoutAsMainInQueuesNestedInput
    agents?: QueueAgentUpdateManyWithoutQueueNestedInput
  }

  export type AttendanceQueueUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainInstanceId?: StringFieldUpdateOperationsInput | string
    lastAgentIndex?: IntFieldUpdateOperationsInput | number
    agents?: QueueAgentUncheckedUpdateManyWithoutQueueNestedInput
  }

  export type AttendanceQueueUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mainInstanceId?: StringFieldUpdateOperationsInput | string
    lastAgentIndex?: IntFieldUpdateOperationsInput | number
  }

  export type WorkflowUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    nodes?: StringFieldUpdateOperationsInput | string
    connections?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: WorkflowExecutionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    nodes?: StringFieldUpdateOperationsInput | string
    connections?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: WorkflowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    nodes?: StringFieldUpdateOperationsInput | string
    connections?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    webhookKey?: StringFieldUpdateOperationsInput | string
    config?: NullableStringFieldUpdateOperationsInput | string | null
    autoTag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    webhookKey?: StringFieldUpdateOperationsInput | string
    config?: NullableStringFieldUpdateOperationsInput | string | null
    autoTag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntegrationUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    webhookKey?: StringFieldUpdateOperationsInput | string
    config?: NullableStringFieldUpdateOperationsInput | string | null
    autoTag?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmtpAccountUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    secure?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmtpAccountUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    secure?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SmtpAccountUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    pass?: StringFieldUpdateOperationsInput | string
    secure?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentCount?: IntFieldUpdateOperationsInput | number
    openRate?: FloatFieldUpdateOperationsInput | number
    clickRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentCount?: IntFieldUpdateOperationsInput | number
    openRate?: FloatFieldUpdateOperationsInput | number
    clickRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    sentCount?: IntFieldUpdateOperationsInput | number
    openRate?: FloatFieldUpdateOperationsInput | number
    clickRate?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyPlanInput = {
    id?: string
    tenantId: string
    stripeCustomerId?: string | null
    stripeSubId?: string | null
    status?: string
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowExecutionCreateManyWorkflowInput = {
    id?: string
    status?: string
    currentNode?: string | null
    nextStepAt?: Date | string | null
    leadId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowExecutionUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    nextStepAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lead?: LeadUpdateOneRequiredWithoutWorkflowExecNestedInput
  }

  export type WorkflowExecutionUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    nextStepAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowExecutionUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    nextStepAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leadId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowExecutionCreateManyLeadInput = {
    id?: string
    status?: string
    currentNode?: string | null
    nextStepAt?: Date | string | null
    workflowId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type AudienceUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutAudiencesNestedInput
  }

  export type AudienceUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type AudienceUncheckedUpdateManyWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowExecutionUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    nextStepAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type WorkflowExecutionUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    nextStepAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowExecutionUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentNode?: NullableStringFieldUpdateOperationsInput | string | null
    nextStepAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workflowId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceQueueCreateManyMainInstanceInput = {
    id?: string
    name: string
    tenantId: string
    lastAgentIndex?: number
  }

  export type QueueAgentCreateManyInstanceInput = {
    id?: string
    order: number
    queueId: string
  }

  export type AttendanceQueueUpdateWithoutMainInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastAgentIndex?: IntFieldUpdateOperationsInput | number
    tenant?: TenantUpdateOneRequiredWithoutQueuesNestedInput
    agents?: QueueAgentUpdateManyWithoutQueueNestedInput
  }

  export type AttendanceQueueUncheckedUpdateWithoutMainInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    lastAgentIndex?: IntFieldUpdateOperationsInput | number
    agents?: QueueAgentUncheckedUpdateManyWithoutQueueNestedInput
  }

  export type AttendanceQueueUncheckedUpdateManyWithoutMainInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    lastAgentIndex?: IntFieldUpdateOperationsInput | number
  }

  export type QueueAgentUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    queue?: AttendanceQueueUpdateOneRequiredWithoutAgentsNestedInput
  }

  export type QueueAgentUncheckedUpdateWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    queueId?: StringFieldUpdateOperationsInput | string
  }

  export type QueueAgentUncheckedUpdateManyWithoutInstanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    queueId?: StringFieldUpdateOperationsInput | string
  }

  export type QueueAgentCreateManyQueueInput = {
    id?: string
    order: number
    instanceId: string
  }

  export type QueueAgentUpdateWithoutQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    instance?: WhatsAppInstanceUpdateOneRequiredWithoutAsAgentInQueuesNestedInput
  }

  export type QueueAgentUncheckedUpdateWithoutQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    instanceId?: StringFieldUpdateOperationsInput | string
  }

  export type QueueAgentUncheckedUpdateManyWithoutQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    instanceId?: StringFieldUpdateOperationsInput | string
  }

  export type LeadUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeadsNestedInput
    audiences?: AudienceUpdateManyWithoutLeadsNestedInput
    workflowExec?: WorkflowExecutionUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    audiences?: AudienceUncheckedUpdateManyWithoutLeadsNestedInput
    workflowExec?: WorkflowExecutionUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type LeadUpdateWithoutAudiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutLeadsNestedInput
    tags?: TagUpdateManyWithoutLeadsNestedInput
    workflowExec?: WorkflowExecutionUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateWithoutAudiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
    tags?: TagUncheckedUpdateManyWithoutLeadsNestedInput
    workflowExec?: WorkflowExecutionUncheckedUpdateManyWithoutLeadNestedInput
  }

  export type LeadUncheckedUpdateManyWithoutAudiencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    obs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TenantCountOutputTypeDefaultArgs instead
     */
    export type TenantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanCountOutputTypeDefaultArgs instead
     */
    export type PlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkflowCountOutputTypeDefaultArgs instead
     */
    export type WorkflowCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkflowCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LeadCountOutputTypeDefaultArgs instead
     */
    export type LeadCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LeadCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WhatsAppInstanceCountOutputTypeDefaultArgs instead
     */
    export type WhatsAppInstanceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WhatsAppInstanceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendanceQueueCountOutputTypeDefaultArgs instead
     */
    export type AttendanceQueueCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceQueueCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AudienceCountOutputTypeDefaultArgs instead
     */
    export type AudienceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AudienceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TenantDefaultArgs instead
     */
    export type TenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TenantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CampaignDefaultArgs instead
     */
    export type CampaignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CampaignDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SmtpAccountDefaultArgs instead
     */
    export type SmtpAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SmtpAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionDefaultArgs instead
     */
    export type SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanDefaultArgs instead
     */
    export type PlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IntegrationDefaultArgs instead
     */
    export type IntegrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IntegrationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkflowDefaultArgs instead
     */
    export type WorkflowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkflowDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkflowExecutionDefaultArgs instead
     */
    export type WorkflowExecutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkflowExecutionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LeadDefaultArgs instead
     */
    export type LeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LeadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WhatsAppInstanceDefaultArgs instead
     */
    export type WhatsAppInstanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WhatsAppInstanceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttendanceQueueDefaultArgs instead
     */
    export type AttendanceQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttendanceQueueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QueueAgentDefaultArgs instead
     */
    export type QueueAgentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QueueAgentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagDefaultArgs instead
     */
    export type TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AudienceDefaultArgs instead
     */
    export type AudienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AudienceDefaultArgs<ExtArgs>

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