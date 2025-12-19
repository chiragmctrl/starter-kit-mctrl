import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  timestamptz: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "auth.account" */
export type Auth_Account = {
  __typename?: "auth_account";
  accessToken?: Maybe<Scalars["String"]["output"]>;
  accessTokenExpiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  accountId: Scalars["String"]["output"];
  createdAt: Scalars["timestamptz"]["output"];
  id: Scalars["String"]["output"];
  idToken?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  providerId: Scalars["String"]["output"];
  refreshToken?: Maybe<Scalars["String"]["output"]>;
  refreshTokenExpiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  scope?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["timestamptz"]["output"];
  userId: Scalars["String"]["output"];
};

/** aggregated selection of "auth.account" */
export type Auth_Account_Aggregate = {
  __typename?: "auth_account_aggregate";
  aggregate?: Maybe<Auth_Account_Aggregate_Fields>;
  nodes: Array<Auth_Account>;
};

/** aggregate fields of "auth.account" */
export type Auth_Account_Aggregate_Fields = {
  __typename?: "auth_account_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Auth_Account_Max_Fields>;
  min?: Maybe<Auth_Account_Min_Fields>;
};

/** aggregate fields of "auth.account" */
export type Auth_Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "auth.account". All fields are combined with a logical 'AND'. */
export type Auth_Account_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Account_Bool_Exp>>;
  _not?: InputMaybe<Auth_Account_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Account_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  accessTokenExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  accountId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  idToken?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  refreshTokenExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.account" */
export enum Auth_Account_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountPkey = "account_pkey"
}

/** input type for inserting data into table "auth.account" */
export type Auth_Account_Insert_Input = {
  accessToken?: InputMaybe<Scalars["String"]["input"]>;
  accessTokenExpiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  accountId?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  idToken?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  providerId?: InputMaybe<Scalars["String"]["input"]>;
  refreshToken?: InputMaybe<Scalars["String"]["input"]>;
  refreshTokenExpiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Auth_Account_Max_Fields = {
  __typename?: "auth_account_max_fields";
  accessToken?: Maybe<Scalars["String"]["output"]>;
  accessTokenExpiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  accountId?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  idToken?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  providerId?: Maybe<Scalars["String"]["output"]>;
  refreshToken?: Maybe<Scalars["String"]["output"]>;
  refreshTokenExpiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  scope?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Auth_Account_Min_Fields = {
  __typename?: "auth_account_min_fields";
  accessToken?: Maybe<Scalars["String"]["output"]>;
  accessTokenExpiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  accountId?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  idToken?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  providerId?: Maybe<Scalars["String"]["output"]>;
  refreshToken?: Maybe<Scalars["String"]["output"]>;
  refreshTokenExpiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  scope?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "auth.account" */
export type Auth_Account_Mutation_Response = {
  __typename?: "auth_account_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Account>;
};

/** on_conflict condition type for table "auth.account" */
export type Auth_Account_On_Conflict = {
  constraint: Auth_Account_Constraint;
  update_columns?: Array<Auth_Account_Update_Column>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.account". */
export type Auth_Account_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  accessTokenExpiresAt?: InputMaybe<Order_By>;
  accountId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  idToken?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  refreshTokenExpiresAt?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.account */
export type Auth_Account_Pk_Columns_Input = {
  id: Scalars["String"]["input"];
};

/** select columns of table "auth.account" */
export enum Auth_Account_Select_Column {
  /** column name */
  AccessToken = "accessToken",
  /** column name */
  AccessTokenExpiresAt = "accessTokenExpiresAt",
  /** column name */
  AccountId = "accountId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  IdToken = "idToken",
  /** column name */
  Password = "password",
  /** column name */
  ProviderId = "providerId",
  /** column name */
  RefreshToken = "refreshToken",
  /** column name */
  RefreshTokenExpiresAt = "refreshTokenExpiresAt",
  /** column name */
  Scope = "scope",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserId = "userId"
}

/** input type for updating data in table "auth.account" */
export type Auth_Account_Set_Input = {
  accessToken?: InputMaybe<Scalars["String"]["input"]>;
  accessTokenExpiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  accountId?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  idToken?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  providerId?: InputMaybe<Scalars["String"]["input"]>;
  refreshToken?: InputMaybe<Scalars["String"]["input"]>;
  refreshTokenExpiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "auth_account" */
export type Auth_Account_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Account_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Account_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars["String"]["input"]>;
  accessTokenExpiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  accountId?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  idToken?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  providerId?: InputMaybe<Scalars["String"]["input"]>;
  refreshToken?: InputMaybe<Scalars["String"]["input"]>;
  refreshTokenExpiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  scope?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "auth.account" */
export enum Auth_Account_Update_Column {
  /** column name */
  AccessToken = "accessToken",
  /** column name */
  AccessTokenExpiresAt = "accessTokenExpiresAt",
  /** column name */
  AccountId = "accountId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  IdToken = "idToken",
  /** column name */
  Password = "password",
  /** column name */
  ProviderId = "providerId",
  /** column name */
  RefreshToken = "refreshToken",
  /** column name */
  RefreshTokenExpiresAt = "refreshTokenExpiresAt",
  /** column name */
  Scope = "scope",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserId = "userId"
}

export type Auth_Account_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Account_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Account_Bool_Exp;
};

/** columns and relationships of "auth.session" */
export type Auth_Session = {
  __typename?: "auth_session";
  createdAt: Scalars["timestamptz"]["output"];
  expiresAt: Scalars["timestamptz"]["output"];
  hasuraToken: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  ipAddress?: Maybe<Scalars["String"]["output"]>;
  token: Scalars["String"]["output"];
  updatedAt: Scalars["timestamptz"]["output"];
  userAgent?: Maybe<Scalars["String"]["output"]>;
  userId: Scalars["String"]["output"];
};

/** aggregated selection of "auth.session" */
export type Auth_Session_Aggregate = {
  __typename?: "auth_session_aggregate";
  aggregate?: Maybe<Auth_Session_Aggregate_Fields>;
  nodes: Array<Auth_Session>;
};

/** aggregate fields of "auth.session" */
export type Auth_Session_Aggregate_Fields = {
  __typename?: "auth_session_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Auth_Session_Max_Fields>;
  min?: Maybe<Auth_Session_Min_Fields>;
};

/** aggregate fields of "auth.session" */
export type Auth_Session_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Session_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "auth.session". All fields are combined with a logical 'AND'. */
export type Auth_Session_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Session_Bool_Exp>>;
  _not?: InputMaybe<Auth_Session_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Session_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  hasuraToken?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  ipAddress?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userAgent?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.session" */
export enum Auth_Session_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionPkey = "session_pkey",
  /** unique or primary key constraint on columns "token" */
  SessionTokenKey = "session_token_key"
}

/** input type for inserting data into table "auth.session" */
export type Auth_Session_Insert_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  hasuraToken?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  ipAddress?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  userAgent?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Auth_Session_Max_Fields = {
  __typename?: "auth_session_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  expiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  hasuraToken?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  ipAddress?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  userAgent?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Auth_Session_Min_Fields = {
  __typename?: "auth_session_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  expiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  hasuraToken?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  ipAddress?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  userAgent?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "auth.session" */
export type Auth_Session_Mutation_Response = {
  __typename?: "auth_session_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Session>;
};

/** on_conflict condition type for table "auth.session" */
export type Auth_Session_On_Conflict = {
  constraint: Auth_Session_Constraint;
  update_columns?: Array<Auth_Session_Update_Column>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.session". */
export type Auth_Session_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  hasuraToken?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ipAddress?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userAgent?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.session */
export type Auth_Session_Pk_Columns_Input = {
  id: Scalars["String"]["input"];
};

/** select columns of table "auth.session" */
export enum Auth_Session_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  ExpiresAt = "expiresAt",
  /** column name */
  HasuraToken = "hasuraToken",
  /** column name */
  Id = "id",
  /** column name */
  IpAddress = "ipAddress",
  /** column name */
  Token = "token",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserAgent = "userAgent",
  /** column name */
  UserId = "userId"
}

/** input type for updating data in table "auth.session" */
export type Auth_Session_Set_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  hasuraToken?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  ipAddress?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  userAgent?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "auth_session" */
export type Auth_Session_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Session_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Session_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  hasuraToken?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  ipAddress?: InputMaybe<Scalars["String"]["input"]>;
  token?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  userAgent?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "auth.session" */
export enum Auth_Session_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  ExpiresAt = "expiresAt",
  /** column name */
  HasuraToken = "hasuraToken",
  /** column name */
  Id = "id",
  /** column name */
  IpAddress = "ipAddress",
  /** column name */
  Token = "token",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserAgent = "userAgent",
  /** column name */
  UserId = "userId"
}

export type Auth_Session_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Session_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Session_Bool_Exp;
};

/** columns and relationships of "auth.user" */
export type Auth_User = {
  __typename?: "auth_user";
  createdAt: Scalars["timestamptz"]["output"];
  email: Scalars["String"]["output"];
  emailVerified: Scalars["Boolean"]["output"];
  id: Scalars["String"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  updatedAt: Scalars["timestamptz"]["output"];
};

/** aggregated selection of "auth.user" */
export type Auth_User_Aggregate = {
  __typename?: "auth_user_aggregate";
  aggregate?: Maybe<Auth_User_Aggregate_Fields>;
  nodes: Array<Auth_User>;
};

/** aggregate fields of "auth.user" */
export type Auth_User_Aggregate_Fields = {
  __typename?: "auth_user_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Auth_User_Max_Fields>;
  min?: Maybe<Auth_User_Min_Fields>;
};

/** aggregate fields of "auth.user" */
export type Auth_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_User_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "auth.user". All fields are combined with a logical 'AND'. */
export type Auth_User_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_User_Bool_Exp>>;
  _not?: InputMaybe<Auth_User_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_User_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user" */
export enum Auth_User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = "user_email_key",
  /** unique or primary key constraint on columns "id" */
  UserPkey = "user_pkey"
}

/** input type for inserting data into table "auth.user" */
export type Auth_User_Insert_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Auth_User_Max_Fields = {
  __typename?: "auth_user_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type Auth_User_Min_Fields = {
  __typename?: "auth_user_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "auth.user" */
export type Auth_User_Mutation_Response = {
  __typename?: "auth_user_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_User>;
};

/** on_conflict condition type for table "auth.user" */
export type Auth_User_On_Conflict = {
  constraint: Auth_User_Constraint;
  update_columns?: Array<Auth_User_Update_Column>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user". */
export type Auth_User_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user */
export type Auth_User_Pk_Columns_Input = {
  id: Scalars["String"]["input"];
};

/** select columns of table "auth.user" */
export enum Auth_User_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updatedAt"
}

/** input type for updating data in table "auth.user" */
export type Auth_User_Set_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "auth_user" */
export type Auth_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_User_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** update columns of table "auth.user" */
export enum Auth_User_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updatedAt"
}

export type Auth_User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_User_Bool_Exp;
};

/** columns and relationships of "auth.verification" */
export type Auth_Verification = {
  __typename?: "auth_verification";
  createdAt: Scalars["timestamptz"]["output"];
  expiresAt: Scalars["timestamptz"]["output"];
  id: Scalars["String"]["output"];
  identifier: Scalars["String"]["output"];
  updatedAt: Scalars["timestamptz"]["output"];
  value: Scalars["String"]["output"];
};

/** aggregated selection of "auth.verification" */
export type Auth_Verification_Aggregate = {
  __typename?: "auth_verification_aggregate";
  aggregate?: Maybe<Auth_Verification_Aggregate_Fields>;
  nodes: Array<Auth_Verification>;
};

/** aggregate fields of "auth.verification" */
export type Auth_Verification_Aggregate_Fields = {
  __typename?: "auth_verification_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Auth_Verification_Max_Fields>;
  min?: Maybe<Auth_Verification_Min_Fields>;
};

/** aggregate fields of "auth.verification" */
export type Auth_Verification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Verification_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "auth.verification". All fields are combined with a logical 'AND'. */
export type Auth_Verification_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Verification_Bool_Exp>>;
  _not?: InputMaybe<Auth_Verification_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Verification_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  identifier?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.verification" */
export enum Auth_Verification_Constraint {
  /** unique or primary key constraint on columns "id" */
  VerificationPkey = "verification_pkey"
}

/** input type for inserting data into table "auth.verification" */
export type Auth_Verification_Insert_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Auth_Verification_Max_Fields = {
  __typename?: "auth_verification_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  expiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  identifier?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Auth_Verification_Min_Fields = {
  __typename?: "auth_verification_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  expiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  identifier?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "auth.verification" */
export type Auth_Verification_Mutation_Response = {
  __typename?: "auth_verification_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Verification>;
};

/** on_conflict condition type for table "auth.verification" */
export type Auth_Verification_On_Conflict = {
  constraint: Auth_Verification_Constraint;
  update_columns?: Array<Auth_Verification_Update_Column>;
  where?: InputMaybe<Auth_Verification_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.verification". */
export type Auth_Verification_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  identifier?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.verification */
export type Auth_Verification_Pk_Columns_Input = {
  id: Scalars["String"]["input"];
};

/** select columns of table "auth.verification" */
export enum Auth_Verification_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  ExpiresAt = "expiresAt",
  /** column name */
  Id = "id",
  /** column name */
  Identifier = "identifier",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  Value = "value"
}

/** input type for updating data in table "auth.verification" */
export type Auth_Verification_Set_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "auth_verification" */
export type Auth_Verification_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Verification_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Verification_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "auth.verification" */
export enum Auth_Verification_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  ExpiresAt = "expiresAt",
  /** column name */
  Id = "id",
  /** column name */
  Identifier = "identifier",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  Value = "value"
}

export type Auth_Verification_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Verification_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Verification_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC"
}

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "auth.account" */
  delete_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** delete single row from the table: "auth.account" */
  delete_auth_account_by_pk?: Maybe<Auth_Account>;
  /** delete data from the table: "auth.session" */
  delete_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** delete single row from the table: "auth.session" */
  delete_auth_session_by_pk?: Maybe<Auth_Session>;
  /** delete data from the table: "auth.user" */
  delete_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** delete single row from the table: "auth.user" */
  delete_auth_user_by_pk?: Maybe<Auth_User>;
  /** delete data from the table: "auth.verification" */
  delete_auth_verification?: Maybe<Auth_Verification_Mutation_Response>;
  /** delete single row from the table: "auth.verification" */
  delete_auth_verification_by_pk?: Maybe<Auth_Verification>;
  /** insert data into the table: "auth.account" */
  insert_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** insert a single row into the table: "auth.account" */
  insert_auth_account_one?: Maybe<Auth_Account>;
  /** insert data into the table: "auth.session" */
  insert_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** insert a single row into the table: "auth.session" */
  insert_auth_session_one?: Maybe<Auth_Session>;
  /** insert data into the table: "auth.user" */
  insert_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** insert a single row into the table: "auth.user" */
  insert_auth_user_one?: Maybe<Auth_User>;
  /** insert data into the table: "auth.verification" */
  insert_auth_verification?: Maybe<Auth_Verification_Mutation_Response>;
  /** insert a single row into the table: "auth.verification" */
  insert_auth_verification_one?: Maybe<Auth_Verification>;
  /** update data of the table: "auth.account" */
  update_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** update single row of the table: "auth.account" */
  update_auth_account_by_pk?: Maybe<Auth_Account>;
  /** update multiples rows of table: "auth.account" */
  update_auth_account_many?: Maybe<Array<Maybe<Auth_Account_Mutation_Response>>>;
  /** update data of the table: "auth.session" */
  update_auth_session?: Maybe<Auth_Session_Mutation_Response>;
  /** update single row of the table: "auth.session" */
  update_auth_session_by_pk?: Maybe<Auth_Session>;
  /** update multiples rows of table: "auth.session" */
  update_auth_session_many?: Maybe<Array<Maybe<Auth_Session_Mutation_Response>>>;
  /** update data of the table: "auth.user" */
  update_auth_user?: Maybe<Auth_User_Mutation_Response>;
  /** update single row of the table: "auth.user" */
  update_auth_user_by_pk?: Maybe<Auth_User>;
  /** update multiples rows of table: "auth.user" */
  update_auth_user_many?: Maybe<Array<Maybe<Auth_User_Mutation_Response>>>;
  /** update data of the table: "auth.verification" */
  update_auth_verification?: Maybe<Auth_Verification_Mutation_Response>;
  /** update single row of the table: "auth.verification" */
  update_auth_verification_by_pk?: Maybe<Auth_Verification>;
  /** update multiples rows of table: "auth.verification" */
  update_auth_verification_many?: Maybe<Array<Maybe<Auth_Verification_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_Auth_AccountArgs = {
  where: Auth_Account_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Auth_Account_By_PkArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Auth_SessionArgs = {
  where: Auth_Session_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Auth_Session_By_PkArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Auth_UserArgs = {
  where: Auth_User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Auth_User_By_PkArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Auth_VerificationArgs = {
  where: Auth_Verification_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Auth_Verification_By_PkArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_Auth_AccountArgs = {
  objects: Array<Auth_Account_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Account_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Auth_Account_OneArgs = {
  object: Auth_Account_Insert_Input;
  on_conflict?: InputMaybe<Auth_Account_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Auth_SessionArgs = {
  objects: Array<Auth_Session_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Session_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Auth_Session_OneArgs = {
  object: Auth_Session_Insert_Input;
  on_conflict?: InputMaybe<Auth_Session_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Auth_UserArgs = {
  objects: Array<Auth_User_Insert_Input>;
  on_conflict?: InputMaybe<Auth_User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Auth_User_OneArgs = {
  object: Auth_User_Insert_Input;
  on_conflict?: InputMaybe<Auth_User_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Auth_VerificationArgs = {
  objects: Array<Auth_Verification_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Verification_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Auth_Verification_OneArgs = {
  object: Auth_Verification_Insert_Input;
  on_conflict?: InputMaybe<Auth_Verification_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_AccountArgs = {
  _set?: InputMaybe<Auth_Account_Set_Input>;
  where: Auth_Account_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_Account_By_PkArgs = {
  _set?: InputMaybe<Auth_Account_Set_Input>;
  pk_columns: Auth_Account_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_Account_ManyArgs = {
  updates: Array<Auth_Account_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_SessionArgs = {
  _set?: InputMaybe<Auth_Session_Set_Input>;
  where: Auth_Session_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_Session_By_PkArgs = {
  _set?: InputMaybe<Auth_Session_Set_Input>;
  pk_columns: Auth_Session_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_Session_ManyArgs = {
  updates: Array<Auth_Session_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_UserArgs = {
  _set?: InputMaybe<Auth_User_Set_Input>;
  where: Auth_User_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_User_By_PkArgs = {
  _set?: InputMaybe<Auth_User_Set_Input>;
  pk_columns: Auth_User_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_User_ManyArgs = {
  updates: Array<Auth_User_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_VerificationArgs = {
  _set?: InputMaybe<Auth_Verification_Set_Input>;
  where: Auth_Verification_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_Verification_By_PkArgs = {
  _set?: InputMaybe<Auth_Verification_Set_Input>;
  pk_columns: Auth_Verification_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Auth_Verification_ManyArgs = {
  updates: Array<Auth_Verification_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last"
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "auth.account" */
  auth_account: Array<Auth_Account>;
  /** fetch aggregated fields from the table: "auth.account" */
  auth_account_aggregate: Auth_Account_Aggregate;
  /** fetch data from the table: "auth.account" using primary key columns */
  auth_account_by_pk?: Maybe<Auth_Account>;
  /** fetch data from the table: "auth.session" */
  auth_session: Array<Auth_Session>;
  /** fetch aggregated fields from the table: "auth.session" */
  auth_session_aggregate: Auth_Session_Aggregate;
  /** fetch data from the table: "auth.session" using primary key columns */
  auth_session_by_pk?: Maybe<Auth_Session>;
  /** fetch data from the table: "auth.user" */
  auth_user: Array<Auth_User>;
  /** fetch aggregated fields from the table: "auth.user" */
  auth_user_aggregate: Auth_User_Aggregate;
  /** fetch data from the table: "auth.user" using primary key columns */
  auth_user_by_pk?: Maybe<Auth_User>;
  /** fetch data from the table: "auth.verification" */
  auth_verification: Array<Auth_Verification>;
  /** fetch aggregated fields from the table: "auth.verification" */
  auth_verification_aggregate: Auth_Verification_Aggregate;
  /** fetch data from the table: "auth.verification" using primary key columns */
  auth_verification_by_pk?: Maybe<Auth_Verification>;
};

export type Query_RootAuth_AccountArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};

export type Query_RootAuth_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};

export type Query_RootAuth_Account_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootAuth_SessionArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};

export type Query_RootAuth_Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};

export type Query_RootAuth_Session_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootAuth_UserArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};

export type Query_RootAuth_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};

export type Query_RootAuth_User_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootAuth_VerificationArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Verification_Order_By>>;
  where?: InputMaybe<Auth_Verification_Bool_Exp>;
};

export type Query_RootAuth_Verification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Verification_Order_By>>;
  where?: InputMaybe<Auth_Verification_Bool_Exp>;
};

export type Query_RootAuth_Verification_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "auth.account" */
  auth_account: Array<Auth_Account>;
  /** fetch aggregated fields from the table: "auth.account" */
  auth_account_aggregate: Auth_Account_Aggregate;
  /** fetch data from the table: "auth.account" using primary key columns */
  auth_account_by_pk?: Maybe<Auth_Account>;
  /** fetch data from the table in a streaming manner: "auth.account" */
  auth_account_stream: Array<Auth_Account>;
  /** fetch data from the table: "auth.session" */
  auth_session: Array<Auth_Session>;
  /** fetch aggregated fields from the table: "auth.session" */
  auth_session_aggregate: Auth_Session_Aggregate;
  /** fetch data from the table: "auth.session" using primary key columns */
  auth_session_by_pk?: Maybe<Auth_Session>;
  /** fetch data from the table in a streaming manner: "auth.session" */
  auth_session_stream: Array<Auth_Session>;
  /** fetch data from the table: "auth.user" */
  auth_user: Array<Auth_User>;
  /** fetch aggregated fields from the table: "auth.user" */
  auth_user_aggregate: Auth_User_Aggregate;
  /** fetch data from the table: "auth.user" using primary key columns */
  auth_user_by_pk?: Maybe<Auth_User>;
  /** fetch data from the table in a streaming manner: "auth.user" */
  auth_user_stream: Array<Auth_User>;
  /** fetch data from the table: "auth.verification" */
  auth_verification: Array<Auth_Verification>;
  /** fetch aggregated fields from the table: "auth.verification" */
  auth_verification_aggregate: Auth_Verification_Aggregate;
  /** fetch data from the table: "auth.verification" using primary key columns */
  auth_verification_by_pk?: Maybe<Auth_Verification>;
  /** fetch data from the table in a streaming manner: "auth.verification" */
  auth_verification_stream: Array<Auth_Verification>;
};

export type Subscription_RootAuth_AccountArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};

export type Subscription_RootAuth_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};

export type Subscription_RootAuth_Account_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootAuth_Account_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Auth_Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};

export type Subscription_RootAuth_SessionArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};

export type Subscription_RootAuth_Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};

export type Subscription_RootAuth_Session_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootAuth_Session_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Auth_Session_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};

export type Subscription_RootAuth_UserArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};

export type Subscription_RootAuth_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};

export type Subscription_RootAuth_User_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootAuth_User_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Auth_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};

export type Subscription_RootAuth_VerificationArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Verification_Order_By>>;
  where?: InputMaybe<Auth_Verification_Bool_Exp>;
};

export type Subscription_RootAuth_Verification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Auth_Verification_Order_By>>;
  where?: InputMaybe<Auth_Verification_Bool_Exp>;
};

export type Subscription_RootAuth_Verification_By_PkArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootAuth_Verification_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Auth_Verification_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Verification_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

export type UpdateAuthSessionMutationVariables = Exact<{
  setObj: Auth_Session_Set_Input;
  sessionId: Scalars["String"]["input"];
}>;

export type UpdateAuthSessionMutation = { __typename?: "mutation_root" } & {
  update_auth_session?: Maybe<{ __typename?: "auth_session_mutation_response" } & Pick<Auth_Session_Mutation_Response, "affected_rows">>;
};

export type TestQueryVariables = Exact<{ [key: string]: never }>;

export type TestQuery = { __typename?: "query_root" } & { auth_user: Array<{ __typename?: "auth_user" } & Pick<Auth_User, "name">> };

export const UpdateAuthSession = gql`
  mutation updateAuthSession($setObj: auth_session_set_input!, $sessionId: String!) {
    update_auth_session(_set: $setObj, where: { id: { _eq: $sessionId } }) {
      affected_rows
    }
  }
`;
export const Test = gql`
  query test {
    auth_user {
      name
    }
  }
`;
import { IntrospectionQuery } from "graphql";
export default {
  __schema: {
    queryType: {
      name: "query_root",
      kind: "OBJECT"
    },
    mutationType: {
      name: "mutation_root",
      kind: "OBJECT"
    },
    subscriptionType: {
      name: "subscription_root",
      kind: "OBJECT"
    },
    types: [
      {
        kind: "OBJECT",
        name: "auth_account",
        fields: [
          {
            name: "accessToken",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "accessTokenExpiresAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "accountId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "idToken",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "password",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "providerId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "refreshToken",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "refreshTokenExpiresAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "scope",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "userId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_account_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "auth_account_aggregate_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_account",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_account_aggregate_fields",
        fields: [
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "auth_account_max_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "auth_account_min_fields",
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_account_max_fields",
        fields: [
          {
            name: "accessToken",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "accessTokenExpiresAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "accountId",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "idToken",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "password",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "providerId",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "refreshToken",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "refreshTokenExpiresAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "scope",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "userId",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_account_min_fields",
        fields: [
          {
            name: "accessToken",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "accessTokenExpiresAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "accountId",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "idToken",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "password",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "providerId",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "refreshToken",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "refreshTokenExpiresAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "scope",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "userId",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_account_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_account",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_session",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "expiresAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "hasuraToken",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "ipAddress",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "token",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "userAgent",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "userId",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_session_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "auth_session_aggregate_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_session",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_session_aggregate_fields",
        fields: [
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "auth_session_max_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "auth_session_min_fields",
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_session_max_fields",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "expiresAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "hasuraToken",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "ipAddress",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "token",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "userAgent",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "userId",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_session_min_fields",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "expiresAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "hasuraToken",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "ipAddress",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "token",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "userAgent",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "userId",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_session_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_session",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_user",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "email",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "emailVerified",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "image",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "name",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_user_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "auth_user_aggregate_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_user",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_user_aggregate_fields",
        fields: [
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "auth_user_max_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "auth_user_min_fields",
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_user_max_fields",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "email",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "image",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_user_min_fields",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "email",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "image",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "name",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_user_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_user",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_verification",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "expiresAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "identifier",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "value",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_verification_aggregate",
        fields: [
          {
            name: "aggregate",
            type: {
              kind: "OBJECT",
              name: "auth_verification_aggregate_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "nodes",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_verification",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_verification_aggregate_fields",
        fields: [
          {
            name: "count",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: [
              {
                name: "columns",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "distinct",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "max",
            type: {
              kind: "OBJECT",
              name: "auth_verification_max_fields",
              ofType: null
            },
            args: []
          },
          {
            name: "min",
            type: {
              kind: "OBJECT",
              name: "auth_verification_min_fields",
              ofType: null
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_verification_max_fields",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "expiresAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "identifier",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "value",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_verification_min_fields",
        fields: [
          {
            name: "createdAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "expiresAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "id",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "identifier",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "updatedAt",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          },
          {
            name: "value",
            type: {
              kind: "SCALAR",
              name: "Any"
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "auth_verification_mutation_response",
        fields: [
          {
            name: "affected_rows",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "SCALAR",
                name: "Any"
              }
            },
            args: []
          },
          {
            name: "returning",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_verification",
                    ofType: null
                  }
                }
              }
            },
            args: []
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "mutation_root",
        fields: [
          {
            name: "delete_auth_account",
            type: {
              kind: "OBJECT",
              name: "auth_account_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "delete_auth_account_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_account",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "delete_auth_session",
            type: {
              kind: "OBJECT",
              name: "auth_session_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "delete_auth_session_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_session",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "delete_auth_user",
            type: {
              kind: "OBJECT",
              name: "auth_user_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "delete_auth_user_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_user",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "delete_auth_verification",
            type: {
              kind: "OBJECT",
              name: "auth_verification_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "delete_auth_verification_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_verification",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "insert_auth_account",
            type: {
              kind: "OBJECT",
              name: "auth_account_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any"
                      }
                    }
                  }
                }
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "insert_auth_account_one",
            type: {
              kind: "OBJECT",
              name: "auth_account",
              ofType: null
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "insert_auth_session",
            type: {
              kind: "OBJECT",
              name: "auth_session_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any"
                      }
                    }
                  }
                }
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "insert_auth_session_one",
            type: {
              kind: "OBJECT",
              name: "auth_session",
              ofType: null
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "insert_auth_user",
            type: {
              kind: "OBJECT",
              name: "auth_user_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any"
                      }
                    }
                  }
                }
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "insert_auth_user_one",
            type: {
              kind: "OBJECT",
              name: "auth_user",
              ofType: null
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "insert_auth_verification",
            type: {
              kind: "OBJECT",
              name: "auth_verification_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "objects",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any"
                      }
                    }
                  }
                }
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "insert_auth_verification_one",
            type: {
              kind: "OBJECT",
              name: "auth_verification",
              ofType: null
            },
            args: [
              {
                name: "object",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "on_conflict",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "update_auth_account",
            type: {
              kind: "OBJECT",
              name: "auth_account_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "update_auth_account_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_account",
              ofType: null
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "update_auth_account_many",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "auth_account_mutation_response",
                ofType: null
              }
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: "update_auth_session",
            type: {
              kind: "OBJECT",
              name: "auth_session_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "update_auth_session_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_session",
              ofType: null
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "update_auth_session_many",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "auth_session_mutation_response",
                ofType: null
              }
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: "update_auth_user",
            type: {
              kind: "OBJECT",
              name: "auth_user_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "update_auth_user_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_user",
              ofType: null
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "update_auth_user_many",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "auth_user_mutation_response",
                ofType: null
              }
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            name: "update_auth_verification",
            type: {
              kind: "OBJECT",
              name: "auth_verification_mutation_response",
              ofType: null
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "where",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "update_auth_verification_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_verification",
              ofType: null
            },
            args: [
              {
                name: "_set",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "pk_columns",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "update_auth_verification_many",
            type: {
              kind: "LIST",
              ofType: {
                kind: "OBJECT",
                name: "auth_verification_mutation_response",
                ofType: null
              }
            },
            args: [
              {
                name: "updates",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "NON_NULL",
                      ofType: {
                        kind: "SCALAR",
                        name: "Any"
                      }
                    }
                  }
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "query_root",
        fields: [
          {
            name: "auth_account",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_account",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_account_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "auth_account_aggregate",
                ofType: null
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_account_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_account",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "auth_session",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_session",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_session_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "auth_session_aggregate",
                ofType: null
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_session_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_session",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "auth_user",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_user",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_user_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "auth_user_aggregate",
                ofType: null
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_user_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_user",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "auth_verification",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_verification",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_verification_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "auth_verification_aggregate",
                ofType: null
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_verification_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_verification",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: "OBJECT",
        name: "subscription_root",
        fields: [
          {
            name: "auth_account",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_account",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_account_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "auth_account_aggregate",
                ofType: null
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_account_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_account",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "auth_account_stream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_account",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "batch_size",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_session",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_session",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_session_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "auth_session_aggregate",
                ofType: null
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_session_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_session",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "auth_session_stream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_session",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "batch_size",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_user",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_user",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_user_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "auth_user_aggregate",
                ofType: null
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_user_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_user",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "auth_user_stream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_user",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "batch_size",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_verification",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_verification",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_verification_aggregate",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "OBJECT",
                name: "auth_verification_aggregate",
                ofType: null
              }
            },
            args: [
              {
                name: "distinct_on",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "limit",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "offset",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              },
              {
                name: "order_by",
                type: {
                  kind: "LIST",
                  ofType: {
                    kind: "NON_NULL",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          },
          {
            name: "auth_verification_by_pk",
            type: {
              kind: "OBJECT",
              name: "auth_verification",
              ofType: null
            },
            args: [
              {
                name: "id",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              }
            ]
          },
          {
            name: "auth_verification_stream",
            type: {
              kind: "NON_NULL",
              ofType: {
                kind: "LIST",
                ofType: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "OBJECT",
                    name: "auth_verification",
                    ofType: null
                  }
                }
              }
            },
            args: [
              {
                name: "batch_size",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "SCALAR",
                    name: "Any"
                  }
                }
              },
              {
                name: "cursor",
                type: {
                  kind: "NON_NULL",
                  ofType: {
                    kind: "LIST",
                    ofType: {
                      kind: "SCALAR",
                      name: "Any"
                    }
                  }
                }
              },
              {
                name: "where",
                type: {
                  kind: "SCALAR",
                  name: "Any"
                }
              }
            ]
          }
        ],
        interfaces: []
      },
      {
        kind: "SCALAR",
        name: "Any"
      }
    ],
    directives: []
  }
} as unknown as IntrospectionQuery;
