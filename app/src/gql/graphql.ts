import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "auth.account" */
export type Auth_Account = {
  __typename?: 'auth_account';
  accessToken?: Maybe<Scalars['String']['output']>;
  accessTokenExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  accountId: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  idToken?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  providerId: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  refreshTokenExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Auth_User;
  userId: Scalars['String']['output'];
};

/** aggregated selection of "auth.account" */
export type Auth_Account_Aggregate = {
  __typename?: 'auth_account_aggregate';
  aggregate?: Maybe<Auth_Account_Aggregate_Fields>;
  nodes: Array<Auth_Account>;
};

export type Auth_Account_Aggregate_Bool_Exp = {
  count?: InputMaybe<Auth_Account_Aggregate_Bool_Exp_Count>;
};

export type Auth_Account_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Auth_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Account_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.account" */
export type Auth_Account_Aggregate_Fields = {
  __typename?: 'auth_account_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Account_Max_Fields>;
  min?: Maybe<Auth_Account_Min_Fields>;
};


/** aggregate fields of "auth.account" */
export type Auth_Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.account" */
export type Auth_Account_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Account_Max_Order_By>;
  min?: InputMaybe<Auth_Account_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.account" */
export type Auth_Account_Arr_Rel_Insert_Input = {
  data: Array<Auth_Account_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Account_On_Conflict>;
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
  user?: InputMaybe<Auth_User_Bool_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.account" */
export enum Auth_Account_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountPkey = 'account_pkey'
}

/** input type for inserting data into table "auth.account" */
export type Auth_Account_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  accessTokenExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  accountId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  refreshTokenExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Auth_User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Auth_Account_Max_Fields = {
  __typename?: 'auth_account_max_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  accessTokenExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  accountId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  idToken?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  refreshTokenExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "auth.account" */
export type Auth_Account_Max_Order_By = {
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

/** aggregate min on columns */
export type Auth_Account_Min_Fields = {
  __typename?: 'auth_account_min_fields';
  accessToken?: Maybe<Scalars['String']['output']>;
  accessTokenExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  accountId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  idToken?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  providerId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  refreshTokenExpiresAt?: Maybe<Scalars['timestamptz']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "auth.account" */
export type Auth_Account_Min_Order_By = {
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

/** response of any mutation on the table "auth.account" */
export type Auth_Account_Mutation_Response = {
  __typename?: 'auth_account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  user?: InputMaybe<Auth_User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.account */
export type Auth_Account_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.account" */
export enum Auth_Account_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  AccessTokenExpiresAt = 'accessTokenExpiresAt',
  /** column name */
  AccountId = 'accountId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'idToken',
  /** column name */
  Password = 'password',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  RefreshTokenExpiresAt = 'refreshTokenExpiresAt',
  /** column name */
  Scope = 'scope',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.account" */
export type Auth_Account_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  accessTokenExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  accountId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  refreshTokenExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
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
  accessToken?: InputMaybe<Scalars['String']['input']>;
  accessTokenExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  accountId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  providerId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  refreshTokenExpiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.account" */
export enum Auth_Account_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  AccessTokenExpiresAt = 'accessTokenExpiresAt',
  /** column name */
  AccountId = 'accountId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'idToken',
  /** column name */
  Password = 'password',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  RefreshTokenExpiresAt = 'refreshTokenExpiresAt',
  /** column name */
  Scope = 'scope',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type Auth_Account_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Account_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Account_Bool_Exp;
};

/** columns and relationships of "auth.invitation" */
export type Auth_Invitation = {
  __typename?: 'auth_invitation';
  createdAt: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  expiresAt: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  inviterId: Scalars['String']['output'];
  /** An object relationship */
  organization: Auth_Organization;
  organizationId: Scalars['String']['output'];
  role?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  /** An object relationship */
  user: Auth_User;
};

/** aggregated selection of "auth.invitation" */
export type Auth_Invitation_Aggregate = {
  __typename?: 'auth_invitation_aggregate';
  aggregate?: Maybe<Auth_Invitation_Aggregate_Fields>;
  nodes: Array<Auth_Invitation>;
};

export type Auth_Invitation_Aggregate_Bool_Exp = {
  count?: InputMaybe<Auth_Invitation_Aggregate_Bool_Exp_Count>;
};

export type Auth_Invitation_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Auth_Invitation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Invitation_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.invitation" */
export type Auth_Invitation_Aggregate_Fields = {
  __typename?: 'auth_invitation_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Invitation_Max_Fields>;
  min?: Maybe<Auth_Invitation_Min_Fields>;
};


/** aggregate fields of "auth.invitation" */
export type Auth_Invitation_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Invitation_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.invitation" */
export type Auth_Invitation_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Invitation_Max_Order_By>;
  min?: InputMaybe<Auth_Invitation_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.invitation" */
export type Auth_Invitation_Arr_Rel_Insert_Input = {
  data: Array<Auth_Invitation_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Invitation_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.invitation". All fields are combined with a logical 'AND'. */
export type Auth_Invitation_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Invitation_Bool_Exp>>;
  _not?: InputMaybe<Auth_Invitation_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Invitation_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  inviterId?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<Auth_Organization_Bool_Exp>;
  organizationId?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Auth_User_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.invitation" */
export enum Auth_Invitation_Constraint {
  /** unique or primary key constraint on columns "id" */
  InvitationPkey = 'invitation_pkey'
}

/** input type for inserting data into table "auth.invitation" */
export type Auth_Invitation_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  inviterId?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Auth_Organization_Obj_Rel_Insert_Input>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Auth_User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Auth_Invitation_Max_Fields = {
  __typename?: 'auth_invitation_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  inviterId?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "auth.invitation" */
export type Auth_Invitation_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inviterId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Invitation_Min_Fields = {
  __typename?: 'auth_invitation_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  inviterId?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "auth.invitation" */
export type Auth_Invitation_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inviterId?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.invitation" */
export type Auth_Invitation_Mutation_Response = {
  __typename?: 'auth_invitation_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Invitation>;
};

/** on_conflict condition type for table "auth.invitation" */
export type Auth_Invitation_On_Conflict = {
  constraint: Auth_Invitation_Constraint;
  update_columns?: Array<Auth_Invitation_Update_Column>;
  where?: InputMaybe<Auth_Invitation_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.invitation". */
export type Auth_Invitation_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inviterId?: InputMaybe<Order_By>;
  organization?: InputMaybe<Auth_Organization_Order_By>;
  organizationId?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_User_Order_By>;
};

/** primary key columns input for table: auth.invitation */
export type Auth_Invitation_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.invitation" */
export enum Auth_Invitation_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  InviterId = 'inviterId',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "auth.invitation" */
export type Auth_Invitation_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  inviterId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "auth_invitation" */
export type Auth_Invitation_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Invitation_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Invitation_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  inviterId?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.invitation" */
export enum Auth_Invitation_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  InviterId = 'inviterId',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status'
}

export type Auth_Invitation_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Invitation_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Invitation_Bool_Exp;
};

/** columns and relationships of "auth.member" */
export type Auth_Member = {
  __typename?: 'auth_member';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  /** An object relationship */
  organization: Auth_Organization;
  organizationId: Scalars['String']['output'];
  role: Scalars['String']['output'];
  /** An object relationship */
  user: Auth_User;
  userId: Scalars['String']['output'];
};

/** aggregated selection of "auth.member" */
export type Auth_Member_Aggregate = {
  __typename?: 'auth_member_aggregate';
  aggregate?: Maybe<Auth_Member_Aggregate_Fields>;
  nodes: Array<Auth_Member>;
};

export type Auth_Member_Aggregate_Bool_Exp = {
  count?: InputMaybe<Auth_Member_Aggregate_Bool_Exp_Count>;
};

export type Auth_Member_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Auth_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Member_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.member" */
export type Auth_Member_Aggregate_Fields = {
  __typename?: 'auth_member_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Member_Max_Fields>;
  min?: Maybe<Auth_Member_Min_Fields>;
};


/** aggregate fields of "auth.member" */
export type Auth_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.member" */
export type Auth_Member_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Member_Max_Order_By>;
  min?: InputMaybe<Auth_Member_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.member" */
export type Auth_Member_Arr_Rel_Insert_Input = {
  data: Array<Auth_Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Member_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.member". All fields are combined with a logical 'AND'. */
export type Auth_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Member_Bool_Exp>>;
  _not?: InputMaybe<Auth_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Member_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  organization?: InputMaybe<Auth_Organization_Bool_Exp>;
  organizationId?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Auth_User_Bool_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.member" */
export enum Auth_Member_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemberPkey = 'member_pkey'
}

/** input type for inserting data into table "auth.member" */
export type Auth_Member_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Auth_Organization_Obj_Rel_Insert_Input>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Auth_User_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Auth_Member_Max_Fields = {
  __typename?: 'auth_member_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "auth.member" */
export type Auth_Member_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Member_Min_Fields = {
  __typename?: 'auth_member_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  organizationId?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "auth.member" */
export type Auth_Member_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organizationId?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.member" */
export type Auth_Member_Mutation_Response = {
  __typename?: 'auth_member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Member>;
};

/** on_conflict condition type for table "auth.member" */
export type Auth_Member_On_Conflict = {
  constraint: Auth_Member_Constraint;
  update_columns?: Array<Auth_Member_Update_Column>;
  where?: InputMaybe<Auth_Member_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.member". */
export type Auth_Member_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization?: InputMaybe<Auth_Organization_Order_By>;
  organizationId?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.member */
export type Auth_Member_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.member" */
export enum Auth_Member_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.member" */
export type Auth_Member_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "auth_member" */
export type Auth_Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Member_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.member" */
export enum Auth_Member_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrganizationId = 'organizationId',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type Auth_Member_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Member_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Member_Bool_Exp;
};

/** columns and relationships of "auth.organization" */
export type Auth_Organization = {
  __typename?: 'auth_organization';
  /** An array relationship */
  chat_conversations: Array<Chat_Conversations>;
  /** An aggregate relationship */
  chat_conversations_aggregate: Chat_Conversations_Aggregate;
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  /** An array relationship */
  invitations: Array<Auth_Invitation>;
  /** An aggregate relationship */
  invitations_aggregate: Auth_Invitation_Aggregate;
  logo?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  members: Array<Auth_Member>;
  /** An aggregate relationship */
  members_aggregate: Auth_Member_Aggregate;
  metadata?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};


/** columns and relationships of "auth.organization" */
export type Auth_OrganizationChat_ConversationsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Conversations_Order_By>>;
  where?: InputMaybe<Chat_Conversations_Bool_Exp>;
};


/** columns and relationships of "auth.organization" */
export type Auth_OrganizationChat_Conversations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Conversations_Order_By>>;
  where?: InputMaybe<Chat_Conversations_Bool_Exp>;
};


/** columns and relationships of "auth.organization" */
export type Auth_OrganizationInvitationsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Invitation_Order_By>>;
  where?: InputMaybe<Auth_Invitation_Bool_Exp>;
};


/** columns and relationships of "auth.organization" */
export type Auth_OrganizationInvitations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Invitation_Order_By>>;
  where?: InputMaybe<Auth_Invitation_Bool_Exp>;
};


/** columns and relationships of "auth.organization" */
export type Auth_OrganizationMembersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Member_Order_By>>;
  where?: InputMaybe<Auth_Member_Bool_Exp>;
};


/** columns and relationships of "auth.organization" */
export type Auth_OrganizationMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Member_Order_By>>;
  where?: InputMaybe<Auth_Member_Bool_Exp>;
};

/** aggregated selection of "auth.organization" */
export type Auth_Organization_Aggregate = {
  __typename?: 'auth_organization_aggregate';
  aggregate?: Maybe<Auth_Organization_Aggregate_Fields>;
  nodes: Array<Auth_Organization>;
};

/** aggregate fields of "auth.organization" */
export type Auth_Organization_Aggregate_Fields = {
  __typename?: 'auth_organization_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Organization_Max_Fields>;
  min?: Maybe<Auth_Organization_Min_Fields>;
};


/** aggregate fields of "auth.organization" */
export type Auth_Organization_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Organization_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.organization". All fields are combined with a logical 'AND'. */
export type Auth_Organization_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Organization_Bool_Exp>>;
  _not?: InputMaybe<Auth_Organization_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Organization_Bool_Exp>>;
  chat_conversations?: InputMaybe<Chat_Conversations_Bool_Exp>;
  chat_conversations_aggregate?: InputMaybe<Chat_Conversations_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  invitations?: InputMaybe<Auth_Invitation_Bool_Exp>;
  invitations_aggregate?: InputMaybe<Auth_Invitation_Aggregate_Bool_Exp>;
  logo?: InputMaybe<String_Comparison_Exp>;
  members?: InputMaybe<Auth_Member_Bool_Exp>;
  members_aggregate?: InputMaybe<Auth_Member_Aggregate_Bool_Exp>;
  metadata?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.organization" */
export enum Auth_Organization_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrganizationPkey = 'organization_pkey',
  /** unique or primary key constraint on columns "slug" */
  OrganizationSlugKey = 'organization_slug_key',
  /** unique or primary key constraint on columns "slug" */
  OrganizationSlugUidx = 'organization_slug_uidx'
}

/** input type for inserting data into table "auth.organization" */
export type Auth_Organization_Insert_Input = {
  chat_conversations?: InputMaybe<Chat_Conversations_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  invitations?: InputMaybe<Auth_Invitation_Arr_Rel_Insert_Input>;
  logo?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<Auth_Member_Arr_Rel_Insert_Input>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Auth_Organization_Max_Fields = {
  __typename?: 'auth_organization_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Auth_Organization_Min_Fields = {
  __typename?: 'auth_organization_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.organization" */
export type Auth_Organization_Mutation_Response = {
  __typename?: 'auth_organization_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Organization>;
};

/** input type for inserting object relation for remote table "auth.organization" */
export type Auth_Organization_Obj_Rel_Insert_Input = {
  data: Auth_Organization_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Organization_On_Conflict>;
};

/** on_conflict condition type for table "auth.organization" */
export type Auth_Organization_On_Conflict = {
  constraint: Auth_Organization_Constraint;
  update_columns?: Array<Auth_Organization_Update_Column>;
  where?: InputMaybe<Auth_Organization_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.organization". */
export type Auth_Organization_Order_By = {
  chat_conversations_aggregate?: InputMaybe<Chat_Conversations_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invitations_aggregate?: InputMaybe<Auth_Invitation_Aggregate_Order_By>;
  logo?: InputMaybe<Order_By>;
  members_aggregate?: InputMaybe<Auth_Member_Aggregate_Order_By>;
  metadata?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.organization */
export type Auth_Organization_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.organization" */
export enum Auth_Organization_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Logo = 'logo',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}

/** input type for updating data in table "auth.organization" */
export type Auth_Organization_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "auth_organization" */
export type Auth_Organization_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Auth_Organization_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Auth_Organization_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.organization" */
export enum Auth_Organization_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Logo = 'logo',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}

export type Auth_Organization_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Organization_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Organization_Bool_Exp;
};

/** columns and relationships of "auth.session" */
export type Auth_Session = {
  __typename?: 'auth_session';
  activeOrganizationId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  expiresAt: Scalars['timestamptz']['output'];
  hasuraToken: Scalars['String']['output'];
  id: Scalars['String']['output'];
  impersonatedBy?: Maybe<Scalars['String']['output']>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  token: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Auth_User;
  userAgent?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

/** aggregated selection of "auth.session" */
export type Auth_Session_Aggregate = {
  __typename?: 'auth_session_aggregate';
  aggregate?: Maybe<Auth_Session_Aggregate_Fields>;
  nodes: Array<Auth_Session>;
};

export type Auth_Session_Aggregate_Bool_Exp = {
  count?: InputMaybe<Auth_Session_Aggregate_Bool_Exp_Count>;
};

export type Auth_Session_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Auth_Session_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Auth_Session_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.session" */
export type Auth_Session_Aggregate_Fields = {
  __typename?: 'auth_session_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Session_Max_Fields>;
  min?: Maybe<Auth_Session_Min_Fields>;
};


/** aggregate fields of "auth.session" */
export type Auth_Session_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Session_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "auth.session" */
export type Auth_Session_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_Session_Max_Order_By>;
  min?: InputMaybe<Auth_Session_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.session" */
export type Auth_Session_Arr_Rel_Insert_Input = {
  data: Array<Auth_Session_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Session_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.session". All fields are combined with a logical 'AND'. */
export type Auth_Session_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Session_Bool_Exp>>;
  _not?: InputMaybe<Auth_Session_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Session_Bool_Exp>>;
  activeOrganizationId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  hasuraToken?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  impersonatedBy?: InputMaybe<String_Comparison_Exp>;
  ipAddress?: InputMaybe<String_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Auth_User_Bool_Exp>;
  userAgent?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.session" */
export enum Auth_Session_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionPkey = 'session_pkey',
  /** unique or primary key constraint on columns "token" */
  SessionTokenKey = 'session_token_key'
}

/** input type for inserting data into table "auth.session" */
export type Auth_Session_Insert_Input = {
  activeOrganizationId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  hasuraToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  impersonatedBy?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Auth_User_Obj_Rel_Insert_Input>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Auth_Session_Max_Fields = {
  __typename?: 'auth_session_max_fields';
  activeOrganizationId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  hasuraToken?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  impersonatedBy?: Maybe<Scalars['String']['output']>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "auth.session" */
export type Auth_Session_Max_Order_By = {
  activeOrganizationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  hasuraToken?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  impersonatedBy?: InputMaybe<Order_By>;
  ipAddress?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userAgent?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_Session_Min_Fields = {
  __typename?: 'auth_session_min_fields';
  activeOrganizationId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  hasuraToken?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  impersonatedBy?: Maybe<Scalars['String']['output']>;
  ipAddress?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "auth.session" */
export type Auth_Session_Min_Order_By = {
  activeOrganizationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  hasuraToken?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  impersonatedBy?: InputMaybe<Order_By>;
  ipAddress?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userAgent?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.session" */
export type Auth_Session_Mutation_Response = {
  __typename?: 'auth_session_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  activeOrganizationId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  hasuraToken?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  impersonatedBy?: InputMaybe<Order_By>;
  ipAddress?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_User_Order_By>;
  userAgent?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.session */
export type Auth_Session_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.session" */
export enum Auth_Session_Select_Column {
  /** column name */
  ActiveOrganizationId = 'activeOrganizationId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  HasuraToken = 'hasuraToken',
  /** column name */
  Id = 'id',
  /** column name */
  ImpersonatedBy = 'impersonatedBy',
  /** column name */
  IpAddress = 'ipAddress',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserAgent = 'userAgent',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.session" */
export type Auth_Session_Set_Input = {
  activeOrganizationId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  hasuraToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  impersonatedBy?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
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
  activeOrganizationId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  hasuraToken?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  impersonatedBy?: InputMaybe<Scalars['String']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.session" */
export enum Auth_Session_Update_Column {
  /** column name */
  ActiveOrganizationId = 'activeOrganizationId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  HasuraToken = 'hasuraToken',
  /** column name */
  Id = 'id',
  /** column name */
  ImpersonatedBy = 'impersonatedBy',
  /** column name */
  IpAddress = 'ipAddress',
  /** column name */
  Token = 'token',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserAgent = 'userAgent',
  /** column name */
  UserId = 'userId'
}

export type Auth_Session_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Session_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Session_Bool_Exp;
};

/** columns and relationships of "auth.user" */
export type Auth_User = {
  __typename?: 'auth_user';
  /** An array relationship */
  accounts: Array<Auth_Account>;
  /** An aggregate relationship */
  accounts_aggregate: Auth_Account_Aggregate;
  banExpires?: Maybe<Scalars['timestamptz']['output']>;
  banReason?: Maybe<Scalars['String']['output']>;
  banned?: Maybe<Scalars['Boolean']['output']>;
  /** An array relationship */
  chat_conversations: Array<Chat_Conversations>;
  /** An aggregate relationship */
  chat_conversations_aggregate: Chat_Conversations_Aggregate;
  createdAt: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  invitations: Array<Auth_Invitation>;
  /** An aggregate relationship */
  invitations_aggregate: Auth_Invitation_Aggregate;
  /** An array relationship */
  members: Array<Auth_Member>;
  /** An aggregate relationship */
  members_aggregate: Auth_Member_Aggregate;
  name: Scalars['String']['output'];
  role?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  sessions: Array<Auth_Session>;
  /** An aggregate relationship */
  sessions_aggregate: Auth_Session_Aggregate;
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "auth.user" */
export type Auth_UserAccountsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserChat_ConversationsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Conversations_Order_By>>;
  where?: InputMaybe<Chat_Conversations_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserChat_Conversations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Conversations_Order_By>>;
  where?: InputMaybe<Chat_Conversations_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserInvitationsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Invitation_Order_By>>;
  where?: InputMaybe<Auth_Invitation_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserInvitations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Invitation_Order_By>>;
  where?: InputMaybe<Auth_Invitation_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserMembersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Member_Order_By>>;
  where?: InputMaybe<Auth_Member_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Member_Order_By>>;
  where?: InputMaybe<Auth_Member_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserSessionsArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


/** columns and relationships of "auth.user" */
export type Auth_UserSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};

/** aggregated selection of "auth.user" */
export type Auth_User_Aggregate = {
  __typename?: 'auth_user_aggregate';
  aggregate?: Maybe<Auth_User_Aggregate_Fields>;
  nodes: Array<Auth_User>;
};

/** aggregate fields of "auth.user" */
export type Auth_User_Aggregate_Fields = {
  __typename?: 'auth_user_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_User_Max_Fields>;
  min?: Maybe<Auth_User_Min_Fields>;
};


/** aggregate fields of "auth.user" */
export type Auth_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "auth.user". All fields are combined with a logical 'AND'. */
export type Auth_User_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_User_Bool_Exp>>;
  _not?: InputMaybe<Auth_User_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_User_Bool_Exp>>;
  accounts?: InputMaybe<Auth_Account_Bool_Exp>;
  accounts_aggregate?: InputMaybe<Auth_Account_Aggregate_Bool_Exp>;
  banExpires?: InputMaybe<Timestamptz_Comparison_Exp>;
  banReason?: InputMaybe<String_Comparison_Exp>;
  banned?: InputMaybe<Boolean_Comparison_Exp>;
  chat_conversations?: InputMaybe<Chat_Conversations_Bool_Exp>;
  chat_conversations_aggregate?: InputMaybe<Chat_Conversations_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  invitations?: InputMaybe<Auth_Invitation_Bool_Exp>;
  invitations_aggregate?: InputMaybe<Auth_Invitation_Aggregate_Bool_Exp>;
  members?: InputMaybe<Auth_Member_Bool_Exp>;
  members_aggregate?: InputMaybe<Auth_Member_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  sessions?: InputMaybe<Auth_Session_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Auth_Session_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user" */
export enum Auth_User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "auth.user" */
export type Auth_User_Insert_Input = {
  accounts?: InputMaybe<Auth_Account_Arr_Rel_Insert_Input>;
  banExpires?: InputMaybe<Scalars['timestamptz']['input']>;
  banReason?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  chat_conversations?: InputMaybe<Chat_Conversations_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  invitations?: InputMaybe<Auth_Invitation_Arr_Rel_Insert_Input>;
  members?: InputMaybe<Auth_Member_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Auth_Session_Arr_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Auth_User_Max_Fields = {
  __typename?: 'auth_user_max_fields';
  banExpires?: Maybe<Scalars['timestamptz']['output']>;
  banReason?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Auth_User_Min_Fields = {
  __typename?: 'auth_user_min_fields';
  banExpires?: Maybe<Scalars['timestamptz']['output']>;
  banReason?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "auth.user" */
export type Auth_User_Mutation_Response = {
  __typename?: 'auth_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_User>;
};

/** input type for inserting object relation for remote table "auth.user" */
export type Auth_User_Obj_Rel_Insert_Input = {
  data: Auth_User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_User_On_Conflict>;
};

/** on_conflict condition type for table "auth.user" */
export type Auth_User_On_Conflict = {
  constraint: Auth_User_Constraint;
  update_columns?: Array<Auth_User_Update_Column>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user". */
export type Auth_User_Order_By = {
  accounts_aggregate?: InputMaybe<Auth_Account_Aggregate_Order_By>;
  banExpires?: InputMaybe<Order_By>;
  banReason?: InputMaybe<Order_By>;
  banned?: InputMaybe<Order_By>;
  chat_conversations_aggregate?: InputMaybe<Chat_Conversations_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  invitations_aggregate?: InputMaybe<Auth_Invitation_Aggregate_Order_By>;
  members_aggregate?: InputMaybe<Auth_Member_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Auth_Session_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user */
export type Auth_User_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "auth.user" */
export enum Auth_User_Select_Column {
  /** column name */
  BanExpires = 'banExpires',
  /** column name */
  BanReason = 'banReason',
  /** column name */
  Banned = 'banned',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.user" */
export type Auth_User_Set_Input = {
  banExpires?: InputMaybe<Scalars['timestamptz']['input']>;
  banReason?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
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
  banExpires?: InputMaybe<Scalars['timestamptz']['input']>;
  banReason?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "auth.user" */
export enum Auth_User_Update_Column {
  /** column name */
  BanExpires = 'banExpires',
  /** column name */
  BanReason = 'banReason',
  /** column name */
  Banned = 'banned',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Auth_User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_User_Bool_Exp;
};

/** columns and relationships of "auth.verification" */
export type Auth_Verification = {
  __typename?: 'auth_verification';
  createdAt: Scalars['timestamptz']['output'];
  expiresAt: Scalars['timestamptz']['output'];
  id: Scalars['String']['output'];
  identifier: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  value: Scalars['String']['output'];
};

/** aggregated selection of "auth.verification" */
export type Auth_Verification_Aggregate = {
  __typename?: 'auth_verification_aggregate';
  aggregate?: Maybe<Auth_Verification_Aggregate_Fields>;
  nodes: Array<Auth_Verification>;
};

/** aggregate fields of "auth.verification" */
export type Auth_Verification_Aggregate_Fields = {
  __typename?: 'auth_verification_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Auth_Verification_Max_Fields>;
  min?: Maybe<Auth_Verification_Min_Fields>;
};


/** aggregate fields of "auth.verification" */
export type Auth_Verification_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Verification_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
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
  VerificationPkey = 'verification_pkey'
}

/** input type for inserting data into table "auth.verification" */
export type Auth_Verification_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Auth_Verification_Max_Fields = {
  __typename?: 'auth_verification_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Auth_Verification_Min_Fields = {
  __typename?: 'auth_verification_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  expiresAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "auth.verification" */
export type Auth_Verification_Mutation_Response = {
  __typename?: 'auth_verification_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
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
  id: Scalars['String']['input'];
};

/** select columns of table "auth.verification" */
export enum Auth_Verification_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "auth.verification" */
export type Auth_Verification_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
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
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "auth.verification" */
export enum Auth_Verification_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Value = 'value'
}

export type Auth_Verification_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Auth_Verification_Set_Input>;
  /** filter the rows which have to be updated */
  where: Auth_Verification_Bool_Exp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** columns and relationships of "chat_conversations" */
export type Chat_Conversations = {
  __typename?: 'chat_conversations';
  /** An array relationship */
  chat_messages: Array<Chat_Messages>;
  /** An aggregate relationship */
  chat_messages_aggregate: Chat_Messages_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  is_archived: Scalars['Boolean']['output'];
  /** An object relationship */
  organization: Auth_Organization;
  organization_id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user: Auth_User;
  user_id: Scalars['String']['output'];
  visibility: Scalars['String']['output'];
};


/** columns and relationships of "chat_conversations" */
export type Chat_ConversationsChat_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


/** columns and relationships of "chat_conversations" */
export type Chat_ConversationsChat_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};

/** aggregated selection of "chat_conversations" */
export type Chat_Conversations_Aggregate = {
  __typename?: 'chat_conversations_aggregate';
  aggregate?: Maybe<Chat_Conversations_Aggregate_Fields>;
  nodes: Array<Chat_Conversations>;
};

export type Chat_Conversations_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Chat_Conversations_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Chat_Conversations_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Chat_Conversations_Aggregate_Bool_Exp_Count>;
};

export type Chat_Conversations_Aggregate_Bool_Exp_Bool_And = {
  arguments: Chat_Conversations_Select_Column_Chat_Conversations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Chat_Conversations_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Chat_Conversations_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Chat_Conversations_Select_Column_Chat_Conversations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Chat_Conversations_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Chat_Conversations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Chat_Conversations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Chat_Conversations_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "chat_conversations" */
export type Chat_Conversations_Aggregate_Fields = {
  __typename?: 'chat_conversations_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Chat_Conversations_Max_Fields>;
  min?: Maybe<Chat_Conversations_Min_Fields>;
};


/** aggregate fields of "chat_conversations" */
export type Chat_Conversations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chat_Conversations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "chat_conversations" */
export type Chat_Conversations_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chat_Conversations_Max_Order_By>;
  min?: InputMaybe<Chat_Conversations_Min_Order_By>;
};

/** input type for inserting array relation for remote table "chat_conversations" */
export type Chat_Conversations_Arr_Rel_Insert_Input = {
  data: Array<Chat_Conversations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Conversations_On_Conflict>;
};

/** Boolean expression to filter rows from the table "chat_conversations". All fields are combined with a logical 'AND'. */
export type Chat_Conversations_Bool_Exp = {
  _and?: InputMaybe<Array<Chat_Conversations_Bool_Exp>>;
  _not?: InputMaybe<Chat_Conversations_Bool_Exp>;
  _or?: InputMaybe<Array<Chat_Conversations_Bool_Exp>>;
  chat_messages?: InputMaybe<Chat_Messages_Bool_Exp>;
  chat_messages_aggregate?: InputMaybe<Chat_Messages_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_archived?: InputMaybe<Boolean_Comparison_Exp>;
  organization?: InputMaybe<Auth_Organization_Bool_Exp>;
  organization_id?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Auth_User_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
  visibility?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_conversations" */
export enum Chat_Conversations_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChatConversationsPkey = 'chat_conversations_pkey'
}

/** input type for inserting data into table "chat_conversations" */
export type Chat_Conversations_Insert_Input = {
  chat_messages?: InputMaybe<Chat_Messages_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_archived?: InputMaybe<Scalars['Boolean']['input']>;
  organization?: InputMaybe<Auth_Organization_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Auth_User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Chat_Conversations_Max_Fields = {
  __typename?: 'chat_conversations_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "chat_conversations" */
export type Chat_Conversations_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Conversations_Min_Fields = {
  __typename?: 'chat_conversations_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "chat_conversations" */
export type Chat_Conversations_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  organization_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chat_conversations" */
export type Chat_Conversations_Mutation_Response = {
  __typename?: 'chat_conversations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Conversations>;
};

/** input type for inserting object relation for remote table "chat_conversations" */
export type Chat_Conversations_Obj_Rel_Insert_Input = {
  data: Chat_Conversations_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Conversations_On_Conflict>;
};

/** on_conflict condition type for table "chat_conversations" */
export type Chat_Conversations_On_Conflict = {
  constraint: Chat_Conversations_Constraint;
  update_columns?: Array<Chat_Conversations_Update_Column>;
  where?: InputMaybe<Chat_Conversations_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_conversations". */
export type Chat_Conversations_Order_By = {
  chat_messages_aggregate?: InputMaybe<Chat_Messages_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_archived?: InputMaybe<Order_By>;
  organization?: InputMaybe<Auth_Organization_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_User_Order_By>;
  user_id?: InputMaybe<Order_By>;
  visibility?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chat_conversations */
export type Chat_Conversations_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "chat_conversations" */
export enum Chat_Conversations_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'is_archived',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Visibility = 'visibility'
}

/** select "chat_conversations_aggregate_bool_exp_bool_and_arguments_columns" columns of table "chat_conversations" */
export enum Chat_Conversations_Select_Column_Chat_Conversations_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsArchived = 'is_archived'
}

/** select "chat_conversations_aggregate_bool_exp_bool_or_arguments_columns" columns of table "chat_conversations" */
export enum Chat_Conversations_Select_Column_Chat_Conversations_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsArchived = 'is_archived'
}

/** input type for updating data in table "chat_conversations" */
export type Chat_Conversations_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_archived?: InputMaybe<Scalars['Boolean']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "chat_conversations" */
export type Chat_Conversations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chat_Conversations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chat_Conversations_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_archived?: InputMaybe<Scalars['Boolean']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "chat_conversations" */
export enum Chat_Conversations_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'is_archived',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Visibility = 'visibility'
}

export type Chat_Conversations_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chat_Conversations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chat_Conversations_Bool_Exp;
};

/** columns and relationships of "chat_messages" */
export type Chat_Messages = {
  __typename?: 'chat_messages';
  /** An object relationship */
  chat_conversation: Chat_Conversations;
  content: Scalars['jsonb']['output'];
  conversation_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  model: Scalars['String']['output'];
  provider_metadata: Scalars['jsonb']['output'];
  role: Scalars['String']['output'];
  token_usage: Scalars['jsonb']['output'];
};


/** columns and relationships of "chat_messages" */
export type Chat_MessagesContentArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "chat_messages" */
export type Chat_MessagesProvider_MetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "chat_messages" */
export type Chat_MessagesToken_UsageArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "chat_messages" */
export type Chat_Messages_Aggregate = {
  __typename?: 'chat_messages_aggregate';
  aggregate?: Maybe<Chat_Messages_Aggregate_Fields>;
  nodes: Array<Chat_Messages>;
};

export type Chat_Messages_Aggregate_Bool_Exp = {
  count?: InputMaybe<Chat_Messages_Aggregate_Bool_Exp_Count>;
};

export type Chat_Messages_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Chat_Messages_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "chat_messages" */
export type Chat_Messages_Aggregate_Fields = {
  __typename?: 'chat_messages_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Chat_Messages_Max_Fields>;
  min?: Maybe<Chat_Messages_Min_Fields>;
};


/** aggregate fields of "chat_messages" */
export type Chat_Messages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "chat_messages" */
export type Chat_Messages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chat_Messages_Max_Order_By>;
  min?: InputMaybe<Chat_Messages_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Chat_Messages_Append_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>;
  provider_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  token_usage?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "chat_messages" */
export type Chat_Messages_Arr_Rel_Insert_Input = {
  data: Array<Chat_Messages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Messages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "chat_messages". All fields are combined with a logical 'AND'. */
export type Chat_Messages_Bool_Exp = {
  _and?: InputMaybe<Array<Chat_Messages_Bool_Exp>>;
  _not?: InputMaybe<Chat_Messages_Bool_Exp>;
  _or?: InputMaybe<Array<Chat_Messages_Bool_Exp>>;
  chat_conversation?: InputMaybe<Chat_Conversations_Bool_Exp>;
  content?: InputMaybe<Jsonb_Comparison_Exp>;
  conversation_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  model?: InputMaybe<String_Comparison_Exp>;
  provider_metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  token_usage?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_messages" */
export enum Chat_Messages_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChatMessagesPkey = 'chat_messages_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Chat_Messages_Delete_At_Path_Input = {
  content?: InputMaybe<Array<Scalars['String']['input']>>;
  provider_metadata?: InputMaybe<Array<Scalars['String']['input']>>;
  token_usage?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Chat_Messages_Delete_Elem_Input = {
  content?: InputMaybe<Scalars['Int']['input']>;
  provider_metadata?: InputMaybe<Scalars['Int']['input']>;
  token_usage?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Chat_Messages_Delete_Key_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['String']['input']>;
  token_usage?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "chat_messages" */
export type Chat_Messages_Insert_Input = {
  chat_conversation?: InputMaybe<Chat_Conversations_Obj_Rel_Insert_Input>;
  content?: InputMaybe<Scalars['jsonb']['input']>;
  conversation_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  token_usage?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate max on columns */
export type Chat_Messages_Max_Fields = {
  __typename?: 'chat_messages_max_fields';
  conversation_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "chat_messages" */
export type Chat_Messages_Max_Order_By = {
  conversation_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Messages_Min_Fields = {
  __typename?: 'chat_messages_min_fields';
  conversation_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "chat_messages" */
export type Chat_Messages_Min_Order_By = {
  conversation_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chat_messages" */
export type Chat_Messages_Mutation_Response = {
  __typename?: 'chat_messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Messages>;
};

/** input type for inserting object relation for remote table "chat_messages" */
export type Chat_Messages_Obj_Rel_Insert_Input = {
  data: Chat_Messages_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Messages_On_Conflict>;
};

/** on_conflict condition type for table "chat_messages" */
export type Chat_Messages_On_Conflict = {
  constraint: Chat_Messages_Constraint;
  update_columns?: Array<Chat_Messages_Update_Column>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_messages". */
export type Chat_Messages_Order_By = {
  chat_conversation?: InputMaybe<Chat_Conversations_Order_By>;
  content?: InputMaybe<Order_By>;
  conversation_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  provider_metadata?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  token_usage?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chat_messages */
export type Chat_Messages_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Chat_Messages_Prepend_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>;
  provider_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  token_usage?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "chat_messages" */
export enum Chat_Messages_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Model = 'model',
  /** column name */
  ProviderMetadata = 'provider_metadata',
  /** column name */
  Role = 'role',
  /** column name */
  TokenUsage = 'token_usage'
}

/** input type for updating data in table "chat_messages" */
export type Chat_Messages_Set_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>;
  conversation_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  token_usage?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Streaming cursor of the table "chat_messages" */
export type Chat_Messages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chat_Messages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chat_Messages_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['jsonb']['input']>;
  conversation_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['jsonb']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  token_usage?: InputMaybe<Scalars['jsonb']['input']>;
};

/** update columns of table "chat_messages" */
export enum Chat_Messages_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Model = 'model',
  /** column name */
  ProviderMetadata = 'provider_metadata',
  /** column name */
  Role = 'role',
  /** column name */
  TokenUsage = 'token_usage'
}

export type Chat_Messages_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Chat_Messages_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Chat_Messages_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Chat_Messages_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Chat_Messages_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Chat_Messages_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chat_Messages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chat_Messages_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "auth.account" */
  delete_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** delete single row from the table: "auth.account" */
  delete_auth_account_by_pk?: Maybe<Auth_Account>;
  /** delete data from the table: "auth.invitation" */
  delete_auth_invitation?: Maybe<Auth_Invitation_Mutation_Response>;
  /** delete single row from the table: "auth.invitation" */
  delete_auth_invitation_by_pk?: Maybe<Auth_Invitation>;
  /** delete data from the table: "auth.member" */
  delete_auth_member?: Maybe<Auth_Member_Mutation_Response>;
  /** delete single row from the table: "auth.member" */
  delete_auth_member_by_pk?: Maybe<Auth_Member>;
  /** delete data from the table: "auth.organization" */
  delete_auth_organization?: Maybe<Auth_Organization_Mutation_Response>;
  /** delete single row from the table: "auth.organization" */
  delete_auth_organization_by_pk?: Maybe<Auth_Organization>;
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
  /** delete data from the table: "chat_conversations" */
  delete_chat_conversations?: Maybe<Chat_Conversations_Mutation_Response>;
  /** delete single row from the table: "chat_conversations" */
  delete_chat_conversations_by_pk?: Maybe<Chat_Conversations>;
  /** delete data from the table: "chat_messages" */
  delete_chat_messages?: Maybe<Chat_Messages_Mutation_Response>;
  /** delete single row from the table: "chat_messages" */
  delete_chat_messages_by_pk?: Maybe<Chat_Messages>;
  /** delete data from the table: "resource_events" */
  delete_resource_events?: Maybe<Resource_Events_Mutation_Response>;
  /** delete single row from the table: "resource_events" */
  delete_resource_events_by_pk?: Maybe<Resource_Events>;
  /** delete data from the table: "resource_versions" */
  delete_resource_versions?: Maybe<Resource_Versions_Mutation_Response>;
  /** delete single row from the table: "resource_versions" */
  delete_resource_versions_by_pk?: Maybe<Resource_Versions>;
  /** delete data from the table: "resources" */
  delete_resources?: Maybe<Resources_Mutation_Response>;
  /** delete single row from the table: "resources" */
  delete_resources_by_pk?: Maybe<Resources>;
  /** insert data into the table: "auth.account" */
  insert_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** insert a single row into the table: "auth.account" */
  insert_auth_account_one?: Maybe<Auth_Account>;
  /** insert data into the table: "auth.invitation" */
  insert_auth_invitation?: Maybe<Auth_Invitation_Mutation_Response>;
  /** insert a single row into the table: "auth.invitation" */
  insert_auth_invitation_one?: Maybe<Auth_Invitation>;
  /** insert data into the table: "auth.member" */
  insert_auth_member?: Maybe<Auth_Member_Mutation_Response>;
  /** insert a single row into the table: "auth.member" */
  insert_auth_member_one?: Maybe<Auth_Member>;
  /** insert data into the table: "auth.organization" */
  insert_auth_organization?: Maybe<Auth_Organization_Mutation_Response>;
  /** insert a single row into the table: "auth.organization" */
  insert_auth_organization_one?: Maybe<Auth_Organization>;
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
  /** insert data into the table: "chat_conversations" */
  insert_chat_conversations?: Maybe<Chat_Conversations_Mutation_Response>;
  /** insert a single row into the table: "chat_conversations" */
  insert_chat_conversations_one?: Maybe<Chat_Conversations>;
  /** insert data into the table: "chat_messages" */
  insert_chat_messages?: Maybe<Chat_Messages_Mutation_Response>;
  /** insert a single row into the table: "chat_messages" */
  insert_chat_messages_one?: Maybe<Chat_Messages>;
  /** insert data into the table: "resource_events" */
  insert_resource_events?: Maybe<Resource_Events_Mutation_Response>;
  /** insert a single row into the table: "resource_events" */
  insert_resource_events_one?: Maybe<Resource_Events>;
  /** insert data into the table: "resource_versions" */
  insert_resource_versions?: Maybe<Resource_Versions_Mutation_Response>;
  /** insert a single row into the table: "resource_versions" */
  insert_resource_versions_one?: Maybe<Resource_Versions>;
  /** insert data into the table: "resources" */
  insert_resources?: Maybe<Resources_Mutation_Response>;
  /** insert a single row into the table: "resources" */
  insert_resources_one?: Maybe<Resources>;
  /** update data of the table: "auth.account" */
  update_auth_account?: Maybe<Auth_Account_Mutation_Response>;
  /** update single row of the table: "auth.account" */
  update_auth_account_by_pk?: Maybe<Auth_Account>;
  /** update multiples rows of table: "auth.account" */
  update_auth_account_many?: Maybe<Array<Maybe<Auth_Account_Mutation_Response>>>;
  /** update data of the table: "auth.invitation" */
  update_auth_invitation?: Maybe<Auth_Invitation_Mutation_Response>;
  /** update single row of the table: "auth.invitation" */
  update_auth_invitation_by_pk?: Maybe<Auth_Invitation>;
  /** update multiples rows of table: "auth.invitation" */
  update_auth_invitation_many?: Maybe<Array<Maybe<Auth_Invitation_Mutation_Response>>>;
  /** update data of the table: "auth.member" */
  update_auth_member?: Maybe<Auth_Member_Mutation_Response>;
  /** update single row of the table: "auth.member" */
  update_auth_member_by_pk?: Maybe<Auth_Member>;
  /** update multiples rows of table: "auth.member" */
  update_auth_member_many?: Maybe<Array<Maybe<Auth_Member_Mutation_Response>>>;
  /** update data of the table: "auth.organization" */
  update_auth_organization?: Maybe<Auth_Organization_Mutation_Response>;
  /** update single row of the table: "auth.organization" */
  update_auth_organization_by_pk?: Maybe<Auth_Organization>;
  /** update multiples rows of table: "auth.organization" */
  update_auth_organization_many?: Maybe<Array<Maybe<Auth_Organization_Mutation_Response>>>;
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
  /** update data of the table: "chat_conversations" */
  update_chat_conversations?: Maybe<Chat_Conversations_Mutation_Response>;
  /** update single row of the table: "chat_conversations" */
  update_chat_conversations_by_pk?: Maybe<Chat_Conversations>;
  /** update multiples rows of table: "chat_conversations" */
  update_chat_conversations_many?: Maybe<Array<Maybe<Chat_Conversations_Mutation_Response>>>;
  /** update data of the table: "chat_messages" */
  update_chat_messages?: Maybe<Chat_Messages_Mutation_Response>;
  /** update single row of the table: "chat_messages" */
  update_chat_messages_by_pk?: Maybe<Chat_Messages>;
  /** update multiples rows of table: "chat_messages" */
  update_chat_messages_many?: Maybe<Array<Maybe<Chat_Messages_Mutation_Response>>>;
  /** update data of the table: "resource_events" */
  update_resource_events?: Maybe<Resource_Events_Mutation_Response>;
  /** update single row of the table: "resource_events" */
  update_resource_events_by_pk?: Maybe<Resource_Events>;
  /** update multiples rows of table: "resource_events" */
  update_resource_events_many?: Maybe<Array<Maybe<Resource_Events_Mutation_Response>>>;
  /** update data of the table: "resource_versions" */
  update_resource_versions?: Maybe<Resource_Versions_Mutation_Response>;
  /** update single row of the table: "resource_versions" */
  update_resource_versions_by_pk?: Maybe<Resource_Versions>;
  /** update multiples rows of table: "resource_versions" */
  update_resource_versions_many?: Maybe<Array<Maybe<Resource_Versions_Mutation_Response>>>;
  /** update data of the table: "resources" */
  update_resources?: Maybe<Resources_Mutation_Response>;
  /** update single row of the table: "resources" */
  update_resources_by_pk?: Maybe<Resources>;
  /** update multiples rows of table: "resources" */
  update_resources_many?: Maybe<Array<Maybe<Resources_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Auth_AccountArgs = {
  where: Auth_Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Account_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_InvitationArgs = {
  where: Auth_Invitation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Invitation_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_MemberArgs = {
  where: Auth_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Member_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_OrganizationArgs = {
  where: Auth_Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Organization_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_SessionArgs = {
  where: Auth_Session_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Session_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_UserArgs = {
  where: Auth_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_User_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_VerificationArgs = {
  where: Auth_Verification_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Verification_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Chat_ConversationsArgs = {
  where: Chat_Conversations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_Conversations_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Chat_MessagesArgs = {
  where: Chat_Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_Messages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Resource_EventsArgs = {
  where: Resource_Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Resource_Events_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Resource_VersionsArgs = {
  where: Resource_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Resource_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ResourcesArgs = {
  where: Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Resources_By_PkArgs = {
  id: Scalars['uuid']['input'];
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
export type Mutation_RootInsert_Auth_InvitationArgs = {
  objects: Array<Auth_Invitation_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Invitation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Invitation_OneArgs = {
  object: Auth_Invitation_Insert_Input;
  on_conflict?: InputMaybe<Auth_Invitation_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_MemberArgs = {
  objects: Array<Auth_Member_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Member_OneArgs = {
  object: Auth_Member_Insert_Input;
  on_conflict?: InputMaybe<Auth_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_OrganizationArgs = {
  objects: Array<Auth_Organization_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Organization_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Organization_OneArgs = {
  object: Auth_Organization_Insert_Input;
  on_conflict?: InputMaybe<Auth_Organization_On_Conflict>;
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
export type Mutation_RootInsert_Chat_ConversationsArgs = {
  objects: Array<Chat_Conversations_Insert_Input>;
  on_conflict?: InputMaybe<Chat_Conversations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Conversations_OneArgs = {
  object: Chat_Conversations_Insert_Input;
  on_conflict?: InputMaybe<Chat_Conversations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_MessagesArgs = {
  objects: Array<Chat_Messages_Insert_Input>;
  on_conflict?: InputMaybe<Chat_Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Messages_OneArgs = {
  object: Chat_Messages_Insert_Input;
  on_conflict?: InputMaybe<Chat_Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resource_EventsArgs = {
  objects: Array<Resource_Events_Insert_Input>;
  on_conflict?: InputMaybe<Resource_Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resource_Events_OneArgs = {
  object: Resource_Events_Insert_Input;
  on_conflict?: InputMaybe<Resource_Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resource_VersionsArgs = {
  objects: Array<Resource_Versions_Insert_Input>;
  on_conflict?: InputMaybe<Resource_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resource_Versions_OneArgs = {
  object: Resource_Versions_Insert_Input;
  on_conflict?: InputMaybe<Resource_Versions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ResourcesArgs = {
  objects: Array<Resources_Insert_Input>;
  on_conflict?: InputMaybe<Resources_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Resources_OneArgs = {
  object: Resources_Insert_Input;
  on_conflict?: InputMaybe<Resources_On_Conflict>;
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
export type Mutation_RootUpdate_Auth_InvitationArgs = {
  _set?: InputMaybe<Auth_Invitation_Set_Input>;
  where: Auth_Invitation_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Invitation_By_PkArgs = {
  _set?: InputMaybe<Auth_Invitation_Set_Input>;
  pk_columns: Auth_Invitation_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Invitation_ManyArgs = {
  updates: Array<Auth_Invitation_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_MemberArgs = {
  _set?: InputMaybe<Auth_Member_Set_Input>;
  where: Auth_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Member_By_PkArgs = {
  _set?: InputMaybe<Auth_Member_Set_Input>;
  pk_columns: Auth_Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Member_ManyArgs = {
  updates: Array<Auth_Member_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_OrganizationArgs = {
  _set?: InputMaybe<Auth_Organization_Set_Input>;
  where: Auth_Organization_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Organization_By_PkArgs = {
  _set?: InputMaybe<Auth_Organization_Set_Input>;
  pk_columns: Auth_Organization_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Organization_ManyArgs = {
  updates: Array<Auth_Organization_Updates>;
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


/** mutation root */
export type Mutation_RootUpdate_Chat_ConversationsArgs = {
  _set?: InputMaybe<Chat_Conversations_Set_Input>;
  where: Chat_Conversations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Conversations_By_PkArgs = {
  _set?: InputMaybe<Chat_Conversations_Set_Input>;
  pk_columns: Chat_Conversations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Conversations_ManyArgs = {
  updates: Array<Chat_Conversations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_MessagesArgs = {
  _append?: InputMaybe<Chat_Messages_Append_Input>;
  _delete_at_path?: InputMaybe<Chat_Messages_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Chat_Messages_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Chat_Messages_Delete_Key_Input>;
  _prepend?: InputMaybe<Chat_Messages_Prepend_Input>;
  _set?: InputMaybe<Chat_Messages_Set_Input>;
  where: Chat_Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Messages_By_PkArgs = {
  _append?: InputMaybe<Chat_Messages_Append_Input>;
  _delete_at_path?: InputMaybe<Chat_Messages_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Chat_Messages_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Chat_Messages_Delete_Key_Input>;
  _prepend?: InputMaybe<Chat_Messages_Prepend_Input>;
  _set?: InputMaybe<Chat_Messages_Set_Input>;
  pk_columns: Chat_Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Messages_ManyArgs = {
  updates: Array<Chat_Messages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Resource_EventsArgs = {
  _append?: InputMaybe<Resource_Events_Append_Input>;
  _delete_at_path?: InputMaybe<Resource_Events_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Resource_Events_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Resource_Events_Delete_Key_Input>;
  _prepend?: InputMaybe<Resource_Events_Prepend_Input>;
  _set?: InputMaybe<Resource_Events_Set_Input>;
  where: Resource_Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Resource_Events_By_PkArgs = {
  _append?: InputMaybe<Resource_Events_Append_Input>;
  _delete_at_path?: InputMaybe<Resource_Events_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Resource_Events_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Resource_Events_Delete_Key_Input>;
  _prepend?: InputMaybe<Resource_Events_Prepend_Input>;
  _set?: InputMaybe<Resource_Events_Set_Input>;
  pk_columns: Resource_Events_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Resource_Events_ManyArgs = {
  updates: Array<Resource_Events_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Resource_VersionsArgs = {
  _append?: InputMaybe<Resource_Versions_Append_Input>;
  _delete_at_path?: InputMaybe<Resource_Versions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Resource_Versions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Resource_Versions_Delete_Key_Input>;
  _inc?: InputMaybe<Resource_Versions_Inc_Input>;
  _prepend?: InputMaybe<Resource_Versions_Prepend_Input>;
  _set?: InputMaybe<Resource_Versions_Set_Input>;
  where: Resource_Versions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Resource_Versions_By_PkArgs = {
  _append?: InputMaybe<Resource_Versions_Append_Input>;
  _delete_at_path?: InputMaybe<Resource_Versions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Resource_Versions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Resource_Versions_Delete_Key_Input>;
  _inc?: InputMaybe<Resource_Versions_Inc_Input>;
  _prepend?: InputMaybe<Resource_Versions_Prepend_Input>;
  _set?: InputMaybe<Resource_Versions_Set_Input>;
  pk_columns: Resource_Versions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Resource_Versions_ManyArgs = {
  updates: Array<Resource_Versions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ResourcesArgs = {
  _append?: InputMaybe<Resources_Append_Input>;
  _delete_at_path?: InputMaybe<Resources_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Resources_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Resources_Delete_Key_Input>;
  _prepend?: InputMaybe<Resources_Prepend_Input>;
  _set?: InputMaybe<Resources_Set_Input>;
  where: Resources_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Resources_By_PkArgs = {
  _append?: InputMaybe<Resources_Append_Input>;
  _delete_at_path?: InputMaybe<Resources_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Resources_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Resources_Delete_Key_Input>;
  _prepend?: InputMaybe<Resources_Prepend_Input>;
  _set?: InputMaybe<Resources_Set_Input>;
  pk_columns: Resources_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Resources_ManyArgs = {
  updates: Array<Resources_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.account" */
  auth_account: Array<Auth_Account>;
  /** fetch aggregated fields from the table: "auth.account" */
  auth_account_aggregate: Auth_Account_Aggregate;
  /** fetch data from the table: "auth.account" using primary key columns */
  auth_account_by_pk?: Maybe<Auth_Account>;
  /** fetch data from the table: "auth.invitation" */
  auth_invitation: Array<Auth_Invitation>;
  /** fetch aggregated fields from the table: "auth.invitation" */
  auth_invitation_aggregate: Auth_Invitation_Aggregate;
  /** fetch data from the table: "auth.invitation" using primary key columns */
  auth_invitation_by_pk?: Maybe<Auth_Invitation>;
  /** fetch data from the table: "auth.member" */
  auth_member: Array<Auth_Member>;
  /** fetch aggregated fields from the table: "auth.member" */
  auth_member_aggregate: Auth_Member_Aggregate;
  /** fetch data from the table: "auth.member" using primary key columns */
  auth_member_by_pk?: Maybe<Auth_Member>;
  /** fetch data from the table: "auth.organization" */
  auth_organization: Array<Auth_Organization>;
  /** fetch aggregated fields from the table: "auth.organization" */
  auth_organization_aggregate: Auth_Organization_Aggregate;
  /** fetch data from the table: "auth.organization" using primary key columns */
  auth_organization_by_pk?: Maybe<Auth_Organization>;
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
  /** An array relationship */
  chat_conversations: Array<Chat_Conversations>;
  /** An aggregate relationship */
  chat_conversations_aggregate: Chat_Conversations_Aggregate;
  /** fetch data from the table: "chat_conversations" using primary key columns */
  chat_conversations_by_pk?: Maybe<Chat_Conversations>;
  /** An array relationship */
  chat_messages: Array<Chat_Messages>;
  /** An aggregate relationship */
  chat_messages_aggregate: Chat_Messages_Aggregate;
  /** fetch data from the table: "chat_messages" using primary key columns */
  chat_messages_by_pk?: Maybe<Chat_Messages>;
  /** An array relationship */
  resource_events: Array<Resource_Events>;
  /** An aggregate relationship */
  resource_events_aggregate: Resource_Events_Aggregate;
  /** fetch data from the table: "resource_events" using primary key columns */
  resource_events_by_pk?: Maybe<Resource_Events>;
  /** An array relationship */
  resource_versions: Array<Resource_Versions>;
  /** An aggregate relationship */
  resource_versions_aggregate: Resource_Versions_Aggregate;
  /** fetch data from the table: "resource_versions" using primary key columns */
  resource_versions_by_pk?: Maybe<Resource_Versions>;
  /** fetch data from the table: "resources" */
  resources: Array<Resources>;
  /** fetch aggregated fields from the table: "resources" */
  resources_aggregate: Resources_Aggregate;
  /** fetch data from the table: "resources" using primary key columns */
  resources_by_pk?: Maybe<Resources>;
};


export type Query_RootAuth_AccountArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Query_RootAuth_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Query_RootAuth_Account_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAuth_InvitationArgs = {
  distinct_on?: InputMaybe<Array<Auth_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Invitation_Order_By>>;
  where?: InputMaybe<Auth_Invitation_Bool_Exp>;
};


export type Query_RootAuth_Invitation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Invitation_Order_By>>;
  where?: InputMaybe<Auth_Invitation_Bool_Exp>;
};


export type Query_RootAuth_Invitation_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAuth_MemberArgs = {
  distinct_on?: InputMaybe<Array<Auth_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Member_Order_By>>;
  where?: InputMaybe<Auth_Member_Bool_Exp>;
};


export type Query_RootAuth_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Member_Order_By>>;
  where?: InputMaybe<Auth_Member_Bool_Exp>;
};


export type Query_RootAuth_Member_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAuth_OrganizationArgs = {
  distinct_on?: InputMaybe<Array<Auth_Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Organization_Order_By>>;
  where?: InputMaybe<Auth_Organization_Bool_Exp>;
};


export type Query_RootAuth_Organization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Organization_Order_By>>;
  where?: InputMaybe<Auth_Organization_Bool_Exp>;
};


export type Query_RootAuth_Organization_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAuth_SessionArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Query_RootAuth_Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Query_RootAuth_Session_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAuth_UserArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Query_RootAuth_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Query_RootAuth_User_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootAuth_VerificationArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Verification_Order_By>>;
  where?: InputMaybe<Auth_Verification_Bool_Exp>;
};


export type Query_RootAuth_Verification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Verification_Order_By>>;
  where?: InputMaybe<Auth_Verification_Bool_Exp>;
};


export type Query_RootAuth_Verification_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootChat_ConversationsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Conversations_Order_By>>;
  where?: InputMaybe<Chat_Conversations_Bool_Exp>;
};


export type Query_RootChat_Conversations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Conversations_Order_By>>;
  where?: InputMaybe<Chat_Conversations_Bool_Exp>;
};


export type Query_RootChat_Conversations_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootChat_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Query_RootChat_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Query_RootChat_Messages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootResource_EventsArgs = {
  distinct_on?: InputMaybe<Array<Resource_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Events_Order_By>>;
  where?: InputMaybe<Resource_Events_Bool_Exp>;
};


export type Query_RootResource_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Events_Order_By>>;
  where?: InputMaybe<Resource_Events_Bool_Exp>;
};


export type Query_RootResource_Events_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootResource_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Resource_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Versions_Order_By>>;
  where?: InputMaybe<Resource_Versions_Bool_Exp>;
};


export type Query_RootResource_Versions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Versions_Order_By>>;
  where?: InputMaybe<Resource_Versions_Bool_Exp>;
};


export type Query_RootResource_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootResourcesArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Query_RootResources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Query_RootResources_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "resource_events" */
export type Resource_Events = {
  __typename?: 'resource_events';
  actor_type: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  event_type: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  message_id: Scalars['uuid']['output'];
  metadata: Scalars['jsonb']['output'];
  resource_id: Scalars['uuid']['output'];
  resource_version_id: Scalars['uuid']['output'];
  user_id: Scalars['String']['output'];
};


/** columns and relationships of "resource_events" */
export type Resource_EventsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "resource_events" */
export type Resource_Events_Aggregate = {
  __typename?: 'resource_events_aggregate';
  aggregate?: Maybe<Resource_Events_Aggregate_Fields>;
  nodes: Array<Resource_Events>;
};

export type Resource_Events_Aggregate_Bool_Exp = {
  count?: InputMaybe<Resource_Events_Aggregate_Bool_Exp_Count>;
};

export type Resource_Events_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Resource_Events_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Resource_Events_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "resource_events" */
export type Resource_Events_Aggregate_Fields = {
  __typename?: 'resource_events_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Resource_Events_Max_Fields>;
  min?: Maybe<Resource_Events_Min_Fields>;
};


/** aggregate fields of "resource_events" */
export type Resource_Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Resource_Events_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "resource_events" */
export type Resource_Events_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Resource_Events_Max_Order_By>;
  min?: InputMaybe<Resource_Events_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Resource_Events_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "resource_events" */
export type Resource_Events_Arr_Rel_Insert_Input = {
  data: Array<Resource_Events_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Resource_Events_On_Conflict>;
};

/** Boolean expression to filter rows from the table "resource_events". All fields are combined with a logical 'AND'. */
export type Resource_Events_Bool_Exp = {
  _and?: InputMaybe<Array<Resource_Events_Bool_Exp>>;
  _not?: InputMaybe<Resource_Events_Bool_Exp>;
  _or?: InputMaybe<Array<Resource_Events_Bool_Exp>>;
  actor_type?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  event_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message_id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  resource_id?: InputMaybe<Uuid_Comparison_Exp>;
  resource_version_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "resource_events" */
export enum Resource_Events_Constraint {
  /** unique or primary key constraint on columns "id" */
  ResourceEventsPkey = 'resource_events_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Resource_Events_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Resource_Events_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Resource_Events_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "resource_events" */
export type Resource_Events_Insert_Input = {
  actor_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  event_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  resource_id?: InputMaybe<Scalars['uuid']['input']>;
  resource_version_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Resource_Events_Max_Fields = {
  __typename?: 'resource_events_max_fields';
  actor_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  event_type?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
  resource_id?: Maybe<Scalars['uuid']['output']>;
  resource_version_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "resource_events" */
export type Resource_Events_Max_Order_By = {
  actor_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  event_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  resource_version_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Resource_Events_Min_Fields = {
  __typename?: 'resource_events_min_fields';
  actor_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  event_type?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
  resource_id?: Maybe<Scalars['uuid']['output']>;
  resource_version_id?: Maybe<Scalars['uuid']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "resource_events" */
export type Resource_Events_Min_Order_By = {
  actor_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  event_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  resource_version_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "resource_events" */
export type Resource_Events_Mutation_Response = {
  __typename?: 'resource_events_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Resource_Events>;
};

/** on_conflict condition type for table "resource_events" */
export type Resource_Events_On_Conflict = {
  constraint: Resource_Events_Constraint;
  update_columns?: Array<Resource_Events_Update_Column>;
  where?: InputMaybe<Resource_Events_Bool_Exp>;
};

/** Ordering options when selecting data from "resource_events". */
export type Resource_Events_Order_By = {
  actor_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  event_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  resource_version_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: resource_events */
export type Resource_Events_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Resource_Events_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "resource_events" */
export enum Resource_Events_Select_Column {
  /** column name */
  ActorType = 'actor_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventType = 'event_type',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  ResourceVersionId = 'resource_version_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "resource_events" */
export type Resource_Events_Set_Input = {
  actor_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  event_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  resource_id?: InputMaybe<Scalars['uuid']['input']>;
  resource_version_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "resource_events" */
export type Resource_Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Resource_Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Resource_Events_Stream_Cursor_Value_Input = {
  actor_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  event_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  resource_id?: InputMaybe<Scalars['uuid']['input']>;
  resource_version_id?: InputMaybe<Scalars['uuid']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "resource_events" */
export enum Resource_Events_Update_Column {
  /** column name */
  ActorType = 'actor_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventType = 'event_type',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  ResourceVersionId = 'resource_version_id',
  /** column name */
  UserId = 'user_id'
}

export type Resource_Events_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Resource_Events_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Resource_Events_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Resource_Events_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Resource_Events_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Resource_Events_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Resource_Events_Set_Input>;
  /** filter the rows which have to be updated */
  where: Resource_Events_Bool_Exp;
};

/** columns and relationships of "resource_versions" */
export type Resource_Versions = {
  __typename?: 'resource_versions';
  /** An object relationship */
  chat_message: Chat_Messages;
  created_at: Scalars['timestamptz']['output'];
  file_name: Scalars['String']['output'];
  file_type: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  message_id: Scalars['uuid']['output'];
  metadata: Scalars['jsonb']['output'];
  mime_type?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  resource: Resources;
  /** An array relationship */
  resource_events: Array<Resource_Events>;
  /** An aggregate relationship */
  resource_events_aggregate: Resource_Events_Aggregate;
  resource_id: Scalars['uuid']['output'];
  size_bytes?: Maybe<Scalars['bigint']['output']>;
  storage_path: Scalars['String']['output'];
  version_number: Scalars['Int']['output'];
};


/** columns and relationships of "resource_versions" */
export type Resource_VersionsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "resource_versions" */
export type Resource_VersionsResource_EventsArgs = {
  distinct_on?: InputMaybe<Array<Resource_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Events_Order_By>>;
  where?: InputMaybe<Resource_Events_Bool_Exp>;
};


/** columns and relationships of "resource_versions" */
export type Resource_VersionsResource_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Events_Order_By>>;
  where?: InputMaybe<Resource_Events_Bool_Exp>;
};

/** aggregated selection of "resource_versions" */
export type Resource_Versions_Aggregate = {
  __typename?: 'resource_versions_aggregate';
  aggregate?: Maybe<Resource_Versions_Aggregate_Fields>;
  nodes: Array<Resource_Versions>;
};

export type Resource_Versions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Resource_Versions_Aggregate_Bool_Exp_Count>;
};

export type Resource_Versions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Resource_Versions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Resource_Versions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "resource_versions" */
export type Resource_Versions_Aggregate_Fields = {
  __typename?: 'resource_versions_aggregate_fields';
  avg?: Maybe<Resource_Versions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Resource_Versions_Max_Fields>;
  min?: Maybe<Resource_Versions_Min_Fields>;
  stddev?: Maybe<Resource_Versions_Stddev_Fields>;
  stddev_pop?: Maybe<Resource_Versions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Resource_Versions_Stddev_Samp_Fields>;
  sum?: Maybe<Resource_Versions_Sum_Fields>;
  var_pop?: Maybe<Resource_Versions_Var_Pop_Fields>;
  var_samp?: Maybe<Resource_Versions_Var_Samp_Fields>;
  variance?: Maybe<Resource_Versions_Variance_Fields>;
};


/** aggregate fields of "resource_versions" */
export type Resource_Versions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Resource_Versions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "resource_versions" */
export type Resource_Versions_Aggregate_Order_By = {
  avg?: InputMaybe<Resource_Versions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Resource_Versions_Max_Order_By>;
  min?: InputMaybe<Resource_Versions_Min_Order_By>;
  stddev?: InputMaybe<Resource_Versions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Resource_Versions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Resource_Versions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Resource_Versions_Sum_Order_By>;
  var_pop?: InputMaybe<Resource_Versions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Resource_Versions_Var_Samp_Order_By>;
  variance?: InputMaybe<Resource_Versions_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Resource_Versions_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "resource_versions" */
export type Resource_Versions_Arr_Rel_Insert_Input = {
  data: Array<Resource_Versions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Resource_Versions_On_Conflict>;
};

/** aggregate avg on columns */
export type Resource_Versions_Avg_Fields = {
  __typename?: 'resource_versions_avg_fields';
  size_bytes?: Maybe<Scalars['Float']['output']>;
  version_number?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "resource_versions" */
export type Resource_Versions_Avg_Order_By = {
  size_bytes?: InputMaybe<Order_By>;
  version_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "resource_versions". All fields are combined with a logical 'AND'. */
export type Resource_Versions_Bool_Exp = {
  _and?: InputMaybe<Array<Resource_Versions_Bool_Exp>>;
  _not?: InputMaybe<Resource_Versions_Bool_Exp>;
  _or?: InputMaybe<Array<Resource_Versions_Bool_Exp>>;
  chat_message?: InputMaybe<Chat_Messages_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  file_name?: InputMaybe<String_Comparison_Exp>;
  file_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message_id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mime_type?: InputMaybe<String_Comparison_Exp>;
  model?: InputMaybe<String_Comparison_Exp>;
  resource?: InputMaybe<Resources_Bool_Exp>;
  resource_events?: InputMaybe<Resource_Events_Bool_Exp>;
  resource_events_aggregate?: InputMaybe<Resource_Events_Aggregate_Bool_Exp>;
  resource_id?: InputMaybe<Uuid_Comparison_Exp>;
  size_bytes?: InputMaybe<Bigint_Comparison_Exp>;
  storage_path?: InputMaybe<String_Comparison_Exp>;
  version_number?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "resource_versions" */
export enum Resource_Versions_Constraint {
  /** unique or primary key constraint on columns "id" */
  ResourceVersionsPkey = 'resource_versions_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Resource_Versions_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Resource_Versions_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Resource_Versions_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "resource_versions" */
export type Resource_Versions_Inc_Input = {
  size_bytes?: InputMaybe<Scalars['bigint']['input']>;
  version_number?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "resource_versions" */
export type Resource_Versions_Insert_Input = {
  chat_message?: InputMaybe<Chat_Messages_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  file_name?: InputMaybe<Scalars['String']['input']>;
  file_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mime_type?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  resource?: InputMaybe<Resources_Obj_Rel_Insert_Input>;
  resource_events?: InputMaybe<Resource_Events_Arr_Rel_Insert_Input>;
  resource_id?: InputMaybe<Scalars['uuid']['input']>;
  size_bytes?: InputMaybe<Scalars['bigint']['input']>;
  storage_path?: InputMaybe<Scalars['String']['input']>;
  version_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Resource_Versions_Max_Fields = {
  __typename?: 'resource_versions_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  file_name?: Maybe<Scalars['String']['output']>;
  file_type?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
  mime_type?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['uuid']['output']>;
  size_bytes?: Maybe<Scalars['bigint']['output']>;
  storage_path?: Maybe<Scalars['String']['output']>;
  version_number?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "resource_versions" */
export type Resource_Versions_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file_name?: InputMaybe<Order_By>;
  file_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
  mime_type?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
  storage_path?: InputMaybe<Order_By>;
  version_number?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Resource_Versions_Min_Fields = {
  __typename?: 'resource_versions_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  file_name?: Maybe<Scalars['String']['output']>;
  file_type?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message_id?: Maybe<Scalars['uuid']['output']>;
  mime_type?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  resource_id?: Maybe<Scalars['uuid']['output']>;
  size_bytes?: Maybe<Scalars['bigint']['output']>;
  storage_path?: Maybe<Scalars['String']['output']>;
  version_number?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "resource_versions" */
export type Resource_Versions_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  file_name?: InputMaybe<Order_By>;
  file_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
  mime_type?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  resource_id?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
  storage_path?: InputMaybe<Order_By>;
  version_number?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "resource_versions" */
export type Resource_Versions_Mutation_Response = {
  __typename?: 'resource_versions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Resource_Versions>;
};

/** input type for inserting object relation for remote table "resource_versions" */
export type Resource_Versions_Obj_Rel_Insert_Input = {
  data: Resource_Versions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Resource_Versions_On_Conflict>;
};

/** on_conflict condition type for table "resource_versions" */
export type Resource_Versions_On_Conflict = {
  constraint: Resource_Versions_Constraint;
  update_columns?: Array<Resource_Versions_Update_Column>;
  where?: InputMaybe<Resource_Versions_Bool_Exp>;
};

/** Ordering options when selecting data from "resource_versions". */
export type Resource_Versions_Order_By = {
  chat_message?: InputMaybe<Chat_Messages_Order_By>;
  created_at?: InputMaybe<Order_By>;
  file_name?: InputMaybe<Order_By>;
  file_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message_id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mime_type?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  resource?: InputMaybe<Resources_Order_By>;
  resource_events_aggregate?: InputMaybe<Resource_Events_Aggregate_Order_By>;
  resource_id?: InputMaybe<Order_By>;
  size_bytes?: InputMaybe<Order_By>;
  storage_path?: InputMaybe<Order_By>;
  version_number?: InputMaybe<Order_By>;
};

/** primary key columns input for table: resource_versions */
export type Resource_Versions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Resource_Versions_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "resource_versions" */
export enum Resource_Versions_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileName = 'file_name',
  /** column name */
  FileType = 'file_type',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mime_type',
  /** column name */
  Model = 'model',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  SizeBytes = 'size_bytes',
  /** column name */
  StoragePath = 'storage_path',
  /** column name */
  VersionNumber = 'version_number'
}

/** input type for updating data in table "resource_versions" */
export type Resource_Versions_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  file_name?: InputMaybe<Scalars['String']['input']>;
  file_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mime_type?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['uuid']['input']>;
  size_bytes?: InputMaybe<Scalars['bigint']['input']>;
  storage_path?: InputMaybe<Scalars['String']['input']>;
  version_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Resource_Versions_Stddev_Fields = {
  __typename?: 'resource_versions_stddev_fields';
  size_bytes?: Maybe<Scalars['Float']['output']>;
  version_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "resource_versions" */
export type Resource_Versions_Stddev_Order_By = {
  size_bytes?: InputMaybe<Order_By>;
  version_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Resource_Versions_Stddev_Pop_Fields = {
  __typename?: 'resource_versions_stddev_pop_fields';
  size_bytes?: Maybe<Scalars['Float']['output']>;
  version_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "resource_versions" */
export type Resource_Versions_Stddev_Pop_Order_By = {
  size_bytes?: InputMaybe<Order_By>;
  version_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Resource_Versions_Stddev_Samp_Fields = {
  __typename?: 'resource_versions_stddev_samp_fields';
  size_bytes?: Maybe<Scalars['Float']['output']>;
  version_number?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "resource_versions" */
export type Resource_Versions_Stddev_Samp_Order_By = {
  size_bytes?: InputMaybe<Order_By>;
  version_number?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "resource_versions" */
export type Resource_Versions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Resource_Versions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Resource_Versions_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  file_name?: InputMaybe<Scalars['String']['input']>;
  file_type?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message_id?: InputMaybe<Scalars['uuid']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  mime_type?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  resource_id?: InputMaybe<Scalars['uuid']['input']>;
  size_bytes?: InputMaybe<Scalars['bigint']['input']>;
  storage_path?: InputMaybe<Scalars['String']['input']>;
  version_number?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Resource_Versions_Sum_Fields = {
  __typename?: 'resource_versions_sum_fields';
  size_bytes?: Maybe<Scalars['bigint']['output']>;
  version_number?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "resource_versions" */
export type Resource_Versions_Sum_Order_By = {
  size_bytes?: InputMaybe<Order_By>;
  version_number?: InputMaybe<Order_By>;
};

/** update columns of table "resource_versions" */
export enum Resource_Versions_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileName = 'file_name',
  /** column name */
  FileType = 'file_type',
  /** column name */
  Id = 'id',
  /** column name */
  MessageId = 'message_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mime_type',
  /** column name */
  Model = 'model',
  /** column name */
  ResourceId = 'resource_id',
  /** column name */
  SizeBytes = 'size_bytes',
  /** column name */
  StoragePath = 'storage_path',
  /** column name */
  VersionNumber = 'version_number'
}

export type Resource_Versions_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Resource_Versions_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Resource_Versions_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Resource_Versions_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Resource_Versions_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Resource_Versions_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Resource_Versions_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Resource_Versions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Resource_Versions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Resource_Versions_Var_Pop_Fields = {
  __typename?: 'resource_versions_var_pop_fields';
  size_bytes?: Maybe<Scalars['Float']['output']>;
  version_number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "resource_versions" */
export type Resource_Versions_Var_Pop_Order_By = {
  size_bytes?: InputMaybe<Order_By>;
  version_number?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Resource_Versions_Var_Samp_Fields = {
  __typename?: 'resource_versions_var_samp_fields';
  size_bytes?: Maybe<Scalars['Float']['output']>;
  version_number?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "resource_versions" */
export type Resource_Versions_Var_Samp_Order_By = {
  size_bytes?: InputMaybe<Order_By>;
  version_number?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Resource_Versions_Variance_Fields = {
  __typename?: 'resource_versions_variance_fields';
  size_bytes?: Maybe<Scalars['Float']['output']>;
  version_number?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "resource_versions" */
export type Resource_Versions_Variance_Order_By = {
  size_bytes?: InputMaybe<Order_By>;
  version_number?: InputMaybe<Order_By>;
};

/** columns and relationships of "resources" */
export type Resources = {
  __typename?: 'resources';
  /** An object relationship */
  chat_conversation: Chat_Conversations;
  conversation_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['String']['output'];
  /** An object relationship */
  current_version?: Maybe<Resource_Versions>;
  current_version_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  is_archived: Scalars['Boolean']['output'];
  metadata: Scalars['jsonb']['output'];
  /** An object relationship */
  organization: Auth_Organization;
  organization_id: Scalars['String']['output'];
  /** An array relationship */
  resource_versions: Array<Resource_Versions>;
  /** An aggregate relationship */
  resource_versions_aggregate: Resource_Versions_Aggregate;
  source: Scalars['String']['output'];
};


/** columns and relationships of "resources" */
export type ResourcesMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "resources" */
export type ResourcesResource_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Resource_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Versions_Order_By>>;
  where?: InputMaybe<Resource_Versions_Bool_Exp>;
};


/** columns and relationships of "resources" */
export type ResourcesResource_Versions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Versions_Order_By>>;
  where?: InputMaybe<Resource_Versions_Bool_Exp>;
};

/** aggregated selection of "resources" */
export type Resources_Aggregate = {
  __typename?: 'resources_aggregate';
  aggregate?: Maybe<Resources_Aggregate_Fields>;
  nodes: Array<Resources>;
};

/** aggregate fields of "resources" */
export type Resources_Aggregate_Fields = {
  __typename?: 'resources_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Resources_Max_Fields>;
  min?: Maybe<Resources_Min_Fields>;
};


/** aggregate fields of "resources" */
export type Resources_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Resources_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Resources_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "resources". All fields are combined with a logical 'AND'. */
export type Resources_Bool_Exp = {
  _and?: InputMaybe<Array<Resources_Bool_Exp>>;
  _not?: InputMaybe<Resources_Bool_Exp>;
  _or?: InputMaybe<Array<Resources_Bool_Exp>>;
  chat_conversation?: InputMaybe<Chat_Conversations_Bool_Exp>;
  conversation_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<String_Comparison_Exp>;
  current_version?: InputMaybe<Resource_Versions_Bool_Exp>;
  current_version_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_archived?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  organization?: InputMaybe<Auth_Organization_Bool_Exp>;
  organization_id?: InputMaybe<String_Comparison_Exp>;
  resource_versions?: InputMaybe<Resource_Versions_Bool_Exp>;
  resource_versions_aggregate?: InputMaybe<Resource_Versions_Aggregate_Bool_Exp>;
  source?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "resources" */
export enum Resources_Constraint {
  /** unique or primary key constraint on columns "id" */
  ResourcesPkey = 'resources_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Resources_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Resources_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Resources_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "resources" */
export type Resources_Insert_Input = {
  chat_conversation?: InputMaybe<Chat_Conversations_Obj_Rel_Insert_Input>;
  conversation_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  current_version?: InputMaybe<Resource_Versions_Obj_Rel_Insert_Input>;
  current_version_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_archived?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  organization?: InputMaybe<Auth_Organization_Obj_Rel_Insert_Input>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  resource_versions?: InputMaybe<Resource_Versions_Arr_Rel_Insert_Input>;
  source?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Resources_Max_Fields = {
  __typename?: 'resources_max_fields';
  conversation_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  current_version_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Resources_Min_Fields = {
  __typename?: 'resources_min_fields';
  conversation_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  current_version_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  organization_id?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "resources" */
export type Resources_Mutation_Response = {
  __typename?: 'resources_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Resources>;
};

/** input type for inserting object relation for remote table "resources" */
export type Resources_Obj_Rel_Insert_Input = {
  data: Resources_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Resources_On_Conflict>;
};

/** on_conflict condition type for table "resources" */
export type Resources_On_Conflict = {
  constraint: Resources_Constraint;
  update_columns?: Array<Resources_Update_Column>;
  where?: InputMaybe<Resources_Bool_Exp>;
};

/** Ordering options when selecting data from "resources". */
export type Resources_Order_By = {
  chat_conversation?: InputMaybe<Chat_Conversations_Order_By>;
  conversation_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  current_version?: InputMaybe<Resource_Versions_Order_By>;
  current_version_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_archived?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  organization?: InputMaybe<Auth_Organization_Order_By>;
  organization_id?: InputMaybe<Order_By>;
  resource_versions_aggregate?: InputMaybe<Resource_Versions_Aggregate_Order_By>;
  source?: InputMaybe<Order_By>;
};

/** primary key columns input for table: resources */
export type Resources_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Resources_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "resources" */
export enum Resources_Select_Column {
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  CurrentVersionId = 'current_version_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'is_archived',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Source = 'source'
}

/** input type for updating data in table "resources" */
export type Resources_Set_Input = {
  conversation_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  current_version_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_archived?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "resources" */
export type Resources_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Resources_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Resources_Stream_Cursor_Value_Input = {
  conversation_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  current_version_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  is_archived?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "resources" */
export enum Resources_Update_Column {
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  CurrentVersionId = 'current_version_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'is_archived',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  OrganizationId = 'organization_id',
  /** column name */
  Source = 'source'
}

export type Resources_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Resources_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Resources_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Resources_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Resources_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Resources_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Resources_Set_Input>;
  /** filter the rows which have to be updated */
  where: Resources_Bool_Exp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.account" */
  auth_account: Array<Auth_Account>;
  /** fetch aggregated fields from the table: "auth.account" */
  auth_account_aggregate: Auth_Account_Aggregate;
  /** fetch data from the table: "auth.account" using primary key columns */
  auth_account_by_pk?: Maybe<Auth_Account>;
  /** fetch data from the table in a streaming manner: "auth.account" */
  auth_account_stream: Array<Auth_Account>;
  /** fetch data from the table: "auth.invitation" */
  auth_invitation: Array<Auth_Invitation>;
  /** fetch aggregated fields from the table: "auth.invitation" */
  auth_invitation_aggregate: Auth_Invitation_Aggregate;
  /** fetch data from the table: "auth.invitation" using primary key columns */
  auth_invitation_by_pk?: Maybe<Auth_Invitation>;
  /** fetch data from the table in a streaming manner: "auth.invitation" */
  auth_invitation_stream: Array<Auth_Invitation>;
  /** fetch data from the table: "auth.member" */
  auth_member: Array<Auth_Member>;
  /** fetch aggregated fields from the table: "auth.member" */
  auth_member_aggregate: Auth_Member_Aggregate;
  /** fetch data from the table: "auth.member" using primary key columns */
  auth_member_by_pk?: Maybe<Auth_Member>;
  /** fetch data from the table in a streaming manner: "auth.member" */
  auth_member_stream: Array<Auth_Member>;
  /** fetch data from the table: "auth.organization" */
  auth_organization: Array<Auth_Organization>;
  /** fetch aggregated fields from the table: "auth.organization" */
  auth_organization_aggregate: Auth_Organization_Aggregate;
  /** fetch data from the table: "auth.organization" using primary key columns */
  auth_organization_by_pk?: Maybe<Auth_Organization>;
  /** fetch data from the table in a streaming manner: "auth.organization" */
  auth_organization_stream: Array<Auth_Organization>;
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
  /** An array relationship */
  chat_conversations: Array<Chat_Conversations>;
  /** An aggregate relationship */
  chat_conversations_aggregate: Chat_Conversations_Aggregate;
  /** fetch data from the table: "chat_conversations" using primary key columns */
  chat_conversations_by_pk?: Maybe<Chat_Conversations>;
  /** fetch data from the table in a streaming manner: "chat_conversations" */
  chat_conversations_stream: Array<Chat_Conversations>;
  /** An array relationship */
  chat_messages: Array<Chat_Messages>;
  /** An aggregate relationship */
  chat_messages_aggregate: Chat_Messages_Aggregate;
  /** fetch data from the table: "chat_messages" using primary key columns */
  chat_messages_by_pk?: Maybe<Chat_Messages>;
  /** fetch data from the table in a streaming manner: "chat_messages" */
  chat_messages_stream: Array<Chat_Messages>;
  /** An array relationship */
  resource_events: Array<Resource_Events>;
  /** An aggregate relationship */
  resource_events_aggregate: Resource_Events_Aggregate;
  /** fetch data from the table: "resource_events" using primary key columns */
  resource_events_by_pk?: Maybe<Resource_Events>;
  /** fetch data from the table in a streaming manner: "resource_events" */
  resource_events_stream: Array<Resource_Events>;
  /** An array relationship */
  resource_versions: Array<Resource_Versions>;
  /** An aggregate relationship */
  resource_versions_aggregate: Resource_Versions_Aggregate;
  /** fetch data from the table: "resource_versions" using primary key columns */
  resource_versions_by_pk?: Maybe<Resource_Versions>;
  /** fetch data from the table in a streaming manner: "resource_versions" */
  resource_versions_stream: Array<Resource_Versions>;
  /** fetch data from the table: "resources" */
  resources: Array<Resources>;
  /** fetch aggregated fields from the table: "resources" */
  resources_aggregate: Resources_Aggregate;
  /** fetch data from the table: "resources" using primary key columns */
  resources_by_pk?: Maybe<Resources>;
  /** fetch data from the table in a streaming manner: "resources" */
  resources_stream: Array<Resources>;
};


export type Subscription_RootAuth_AccountArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Subscription_RootAuth_Account_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Account_Order_By>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Subscription_RootAuth_Account_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuth_Account_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Account_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Account_Bool_Exp>;
};


export type Subscription_RootAuth_InvitationArgs = {
  distinct_on?: InputMaybe<Array<Auth_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Invitation_Order_By>>;
  where?: InputMaybe<Auth_Invitation_Bool_Exp>;
};


export type Subscription_RootAuth_Invitation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Invitation_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Invitation_Order_By>>;
  where?: InputMaybe<Auth_Invitation_Bool_Exp>;
};


export type Subscription_RootAuth_Invitation_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuth_Invitation_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Invitation_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Invitation_Bool_Exp>;
};


export type Subscription_RootAuth_MemberArgs = {
  distinct_on?: InputMaybe<Array<Auth_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Member_Order_By>>;
  where?: InputMaybe<Auth_Member_Bool_Exp>;
};


export type Subscription_RootAuth_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Member_Order_By>>;
  where?: InputMaybe<Auth_Member_Bool_Exp>;
};


export type Subscription_RootAuth_Member_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuth_Member_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Member_Bool_Exp>;
};


export type Subscription_RootAuth_OrganizationArgs = {
  distinct_on?: InputMaybe<Array<Auth_Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Organization_Order_By>>;
  where?: InputMaybe<Auth_Organization_Bool_Exp>;
};


export type Subscription_RootAuth_Organization_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Organization_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Organization_Order_By>>;
  where?: InputMaybe<Auth_Organization_Bool_Exp>;
};


export type Subscription_RootAuth_Organization_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuth_Organization_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Organization_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Organization_Bool_Exp>;
};


export type Subscription_RootAuth_SessionArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Subscription_RootAuth_Session_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Session_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Session_Order_By>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Subscription_RootAuth_Session_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuth_Session_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Session_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Session_Bool_Exp>;
};


export type Subscription_RootAuth_UserArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Subscription_RootAuth_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_User_Order_By>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Subscription_RootAuth_User_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuth_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_User_Bool_Exp>;
};


export type Subscription_RootAuth_VerificationArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Verification_Order_By>>;
  where?: InputMaybe<Auth_Verification_Bool_Exp>;
};


export type Subscription_RootAuth_Verification_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Verification_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Auth_Verification_Order_By>>;
  where?: InputMaybe<Auth_Verification_Bool_Exp>;
};


export type Subscription_RootAuth_Verification_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootAuth_Verification_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Auth_Verification_Stream_Cursor_Input>>;
  where?: InputMaybe<Auth_Verification_Bool_Exp>;
};


export type Subscription_RootChat_ConversationsArgs = {
  distinct_on?: InputMaybe<Array<Chat_Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Conversations_Order_By>>;
  where?: InputMaybe<Chat_Conversations_Bool_Exp>;
};


export type Subscription_RootChat_Conversations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Conversations_Order_By>>;
  where?: InputMaybe<Chat_Conversations_Bool_Exp>;
};


export type Subscription_RootChat_Conversations_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootChat_Conversations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Chat_Conversations_Stream_Cursor_Input>>;
  where?: InputMaybe<Chat_Conversations_Bool_Exp>;
};


export type Subscription_RootChat_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Subscription_RootChat_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Subscription_RootChat_Messages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootChat_Messages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Chat_Messages_Stream_Cursor_Input>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Subscription_RootResource_EventsArgs = {
  distinct_on?: InputMaybe<Array<Resource_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Events_Order_By>>;
  where?: InputMaybe<Resource_Events_Bool_Exp>;
};


export type Subscription_RootResource_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Events_Order_By>>;
  where?: InputMaybe<Resource_Events_Bool_Exp>;
};


export type Subscription_RootResource_Events_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootResource_Events_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Resource_Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Resource_Events_Bool_Exp>;
};


export type Subscription_RootResource_VersionsArgs = {
  distinct_on?: InputMaybe<Array<Resource_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Versions_Order_By>>;
  where?: InputMaybe<Resource_Versions_Bool_Exp>;
};


export type Subscription_RootResource_Versions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resource_Versions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resource_Versions_Order_By>>;
  where?: InputMaybe<Resource_Versions_Bool_Exp>;
};


export type Subscription_RootResource_Versions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootResource_Versions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Resource_Versions_Stream_Cursor_Input>>;
  where?: InputMaybe<Resource_Versions_Bool_Exp>;
};


export type Subscription_RootResourcesArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Subscription_RootResources_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Resources_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Resources_Order_By>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};


export type Subscription_RootResources_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootResources_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Resources_Stream_Cursor_Input>>;
  where?: InputMaybe<Resources_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type UpdateAuthSessionMutationVariables = Exact<{
  setObj: Auth_Session_Set_Input;
  sessionId: Scalars['String']['input'];
}>;


export type UpdateAuthSessionMutation = (
  { __typename?: 'mutation_root' }
  & { update_auth_session?: Maybe<(
    { __typename?: 'auth_session_mutation_response' }
    & Pick<Auth_Session_Mutation_Response, 'affected_rows'>
  )> }
);

export type GetAllOrganizationsByUserIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetAllOrganizationsByUserIdQuery = (
  { __typename?: 'query_root' }
  & { auth_member: Array<(
    { __typename?: 'auth_member' }
    & Pick<Auth_Member, 'organizationId' | 'role'>
  )> }
);

export type GetMemberByUserAndOrgQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type GetMemberByUserAndOrgQuery = (
  { __typename?: 'query_root' }
  & { auth_member: Array<(
    { __typename?: 'auth_member' }
    & Pick<
      Auth_Member,
      | 'userId'
      | 'organizationId'
      | 'role'
      | 'createdAt'
    >
  )> }
);

export type TestQueryVariables = Exact<{ [key: string]: never; }>;


export type TestQuery = (
  { __typename?: 'query_root' }
  & { auth_user: Array<(
    { __typename?: 'auth_user' }
    & Pick<Auth_User, 'name'>
  )> }
);

export type CreateConversationMutationVariables = Exact<{
  object: Chat_Conversations_Insert_Input;
}>;


export type CreateConversationMutation = (
  { __typename?: 'mutation_root' }
  & { insert_chat_conversations_one?: Maybe<(
    { __typename?: 'chat_conversations' }
    & Pick<
      Chat_Conversations,
      | 'id'
      | 'organization_id'
      | 'user_id'
      | 'title'
      | 'is_archived'
      | 'visibility'
      | 'created_at'
      | 'updated_at'
    >
  )> }
);

export type UpdateConversationMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  setObj: Chat_Conversations_Set_Input;
}>;


export type UpdateConversationMutation = (
  { __typename?: 'mutation_root' }
  & { update_chat_conversations_by_pk?: Maybe<(
    { __typename?: 'chat_conversations' }
    & Pick<
      Chat_Conversations,
      | 'id'
      | 'title'
      | 'is_archived'
      | 'updated_at'
    >
  )> }
);

export type InsertChatMessageMutationVariables = Exact<{
  object: Chat_Messages_Insert_Input;
}>;


export type InsertChatMessageMutation = (
  { __typename?: 'mutation_root' }
  & { insert_chat_messages_one?: Maybe<(
    { __typename?: 'chat_messages' }
    & Pick<
      Chat_Messages,
      | 'id'
      | 'conversation_id'
      | 'role'
      | 'content'
      | 'token_usage'
      | 'model'
      | 'provider_metadata'
      | 'created_at'
    >
  )> }
);

export type InsertChatMessagesMutationVariables = Exact<{
  objects: Array<Chat_Messages_Insert_Input> | Chat_Messages_Insert_Input;
}>;


export type InsertChatMessagesMutation = (
  { __typename?: 'mutation_root' }
  & { insert_chat_messages?: Maybe<(
    { __typename?: 'chat_messages_mutation_response' }
    & Pick<Chat_Messages_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'chat_messages' }
      & Pick<
        Chat_Messages,
        | 'id'
        | 'conversation_id'
        | 'role'
        | 'content'
        | 'created_at'
      >
    )> }
  )> }
);

export type GetConversationByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetConversationByIdQuery = (
  { __typename?: 'query_root' }
  & { chat_conversations_by_pk?: Maybe<(
    { __typename?: 'chat_conversations' }
    & Pick<
      Chat_Conversations,
      | 'id'
      | 'organization_id'
      | 'user_id'
      | 'title'
      | 'is_archived'
      | 'visibility'
      | 'created_at'
      | 'updated_at'
    >
  )> }
);

export type GetConversationsByUserQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type GetConversationsByUserQuery = (
  { __typename?: 'query_root' }
  & { chat_conversations: Array<(
    { __typename?: 'chat_conversations' }
    & Pick<
      Chat_Conversations,
      | 'id'
      | 'title'
      | 'visibility'
      | 'created_at'
      | 'updated_at'
    >
  )> }
);

export type GetConversationsByUserSubscriptionSubscriptionVariables = Exact<{
  userId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type GetConversationsByUserSubscriptionSubscription = (
  { __typename?: 'subscription_root' }
  & { chat_conversations: Array<(
    { __typename?: 'chat_conversations' }
    & Pick<
      Chat_Conversations,
      | 'id'
      | 'title'
      | 'visibility'
      | 'created_at'
      | 'updated_at'
    >
  )> }
);

export type GetMessagesByConversationQueryVariables = Exact<{
  conversationId: Scalars['uuid']['input'];
}>;


export type GetMessagesByConversationQuery = (
  { __typename?: 'query_root' }
  & { chat_messages: Array<(
    { __typename?: 'chat_messages' }
    & Pick<
      Chat_Messages,
      | 'id'
      | 'conversation_id'
      | 'role'
      | 'content'
      | 'token_usage'
      | 'model'
      | 'provider_metadata'
      | 'created_at'
    >
  )> }
);

export type GetConversationWithMessagesQueryVariables = Exact<{
  conversationId: Scalars['uuid']['input'];
}>;


export type GetConversationWithMessagesQuery = (
  { __typename?: 'query_root' }
  & { chat_conversations_by_pk?: Maybe<(
    { __typename?: 'chat_conversations' }
    & Pick<
      Chat_Conversations,
      | 'id'
      | 'organization_id'
      | 'user_id'
      | 'title'
      | 'is_archived'
      | 'visibility'
      | 'created_at'
      | 'updated_at'
    >
    & { messages: Array<(
      { __typename?: 'chat_messages' }
      & Pick<
        Chat_Messages,
        | 'id'
        | 'role'
        | 'content'
        | 'token_usage'
        | 'model'
        | 'provider_metadata'
        | 'created_at'
      >
    )> }
  )> }
);

export type ArchiveConversationMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type ArchiveConversationMutation = (
  { __typename?: 'mutation_root' }
  & { update_chat_conversations_by_pk?: Maybe<(
    { __typename?: 'chat_conversations' }
    & Pick<Chat_Conversations, 'id' | 'is_archived'>
  )> }
);

export type DeleteConversationMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteConversationMutation = (
  { __typename?: 'mutation_root' }
  & {
    delete_chat_messages?: Maybe<(
      { __typename?: 'chat_messages_mutation_response' }
      & Pick<Chat_Messages_Mutation_Response, 'affected_rows'>
    )>,
    delete_chat_conversations_by_pk?: Maybe<(
      { __typename?: 'chat_conversations' }
      & Pick<Chat_Conversations, 'id'>
    )>,
  }
);

export type InsertChatResourceMutationVariables = Exact<{
  data: Resources_Insert_Input;
}>;


export type InsertChatResourceMutation = (
  { __typename?: 'mutation_root' }
  & { insert_resources_one?: Maybe<(
    { __typename?: 'resources' }
    & Pick<Resources, 'id'>
  )> }
);

export type InsertChatResourceVersionMutationVariables = Exact<{
  data: Resource_Versions_Insert_Input;
}>;


export type InsertChatResourceVersionMutation = (
  { __typename?: 'mutation_root' }
  & { insert_resource_versions_one?: Maybe<(
    { __typename?: 'resource_versions' }
    & Pick<Resource_Versions, 'id'>
  )> }
);

export type GetLatestReourcesVersionByResourceIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetLatestReourcesVersionByResourceIdQuery = (
  { __typename?: 'query_root' }
  & { resource_versions: Array<(
    { __typename?: 'resource_versions' }
    & Pick<Resource_Versions, 'version_number'>
  )> }
);

export type UpdateChatResourceMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  data: Resources_Set_Input;
}>;


export type UpdateChatResourceMutation = (
  { __typename?: 'mutation_root' }
  & { update_resources?: Maybe<(
    { __typename?: 'resources_mutation_response' }
    & Pick<Resources_Mutation_Response, 'affected_rows'>
  )> }
);


export const UpdateAuthSession = gql`
    mutation updateAuthSession($setObj: auth_session_set_input!, $sessionId: String!) {
  update_auth_session(_set: $setObj, where: {id: {_eq: $sessionId}}) {
    affected_rows
  }
}
    `;
export const GetAllOrganizationsByUserId = gql`
    query getAllOrganizationsByUserId($userId: String!) {
  auth_member(where: {userId: {_eq: $userId}}) {
    organizationId
    role
  }
}
    `;
export const GetMemberByUserAndOrg = gql`
    query getMemberByUserAndOrg($userId: String!, $organizationId: String!) {
  auth_member(
    where: {userId: {_eq: $userId}, organizationId: {_eq: $organizationId}}
  ) {
    userId
    organizationId
    role
    createdAt
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
export const CreateConversation = gql`
    mutation createConversation($object: chat_conversations_insert_input!) {
  insert_chat_conversations_one(object: $object) {
    id
    organization_id
    user_id
    title
    is_archived
    visibility
    created_at
    updated_at
  }
}
    `;
export const UpdateConversation = gql`
    mutation updateConversation($id: uuid!, $setObj: chat_conversations_set_input!) {
  update_chat_conversations_by_pk(pk_columns: {id: $id}, _set: $setObj) {
    id
    title
    is_archived
    updated_at
  }
}
    `;
export const InsertChatMessage = gql`
    mutation insertChatMessage($object: chat_messages_insert_input!) {
  insert_chat_messages_one(object: $object) {
    id
    conversation_id
    role
    content
    token_usage
    model
    provider_metadata
    created_at
  }
}
    `;
export const InsertChatMessages = gql`
    mutation insertChatMessages($objects: [chat_messages_insert_input!]!) {
  insert_chat_messages(objects: $objects) {
    affected_rows
    returning {
      id
      conversation_id
      role
      content
      created_at
    }
  }
}
    `;
export const GetConversationById = gql`
    query getConversationById($id: uuid!) {
  chat_conversations_by_pk(id: $id) {
    id
    organization_id
    user_id
    title
    is_archived
    visibility
    created_at
    updated_at
  }
}
    `;
export const GetConversationsByUser = gql`
    query getConversationsByUser($userId: String!, $organizationId: String!) {
  chat_conversations(
    where: {user_id: {_eq: $userId}, organization_id: {_eq: $organizationId}, is_archived: {_eq: false}}
    order_by: {updated_at: desc}
  ) {
    id
    title
    visibility
    created_at
    updated_at
  }
}
    `;
export const GetConversationsByUserSubscription = gql`
    subscription getConversationsByUserSubscription($userId: String!, $organizationId: String!) {
  chat_conversations(
    where: {user_id: {_eq: $userId}, organization_id: {_eq: $organizationId}, is_archived: {_eq: false}}
    order_by: {updated_at: desc}
  ) {
    id
    title
    visibility
    created_at
    updated_at
  }
}
    `;
export const GetMessagesByConversation = gql`
    query getMessagesByConversation($conversationId: uuid!) {
  chat_messages(
    where: {conversation_id: {_eq: $conversationId}}
    order_by: {created_at: asc}
  ) {
    id
    conversation_id
    role
    content
    token_usage
    model
    provider_metadata
    created_at
  }
}
    `;
export const GetConversationWithMessages = gql`
    query getConversationWithMessages($conversationId: uuid!) {
  chat_conversations_by_pk(id: $conversationId) {
    id
    organization_id
    user_id
    title
    is_archived
    visibility
    created_at
    updated_at
    messages: chat_messages(order_by: {created_at: asc}) {
      id
      role
      content
      token_usage
      model
      provider_metadata
      created_at
    }
  }
}
    `;
export const ArchiveConversation = gql`
    mutation archiveConversation($id: uuid!) {
  update_chat_conversations_by_pk(
    pk_columns: {id: $id}
    _set: {is_archived: true}
  ) {
    id
    is_archived
  }
}
    `;
export const DeleteConversation = gql`
    mutation deleteConversation($id: uuid!) {
  delete_chat_messages(where: {conversation_id: {_eq: $id}}) {
    affected_rows
  }
  delete_chat_conversations_by_pk(id: $id) {
    id
  }
}
    `;
export const InsertChatResource = gql`
    mutation insertChatResource($data: resources_insert_input!) {
  insert_resources_one(object: $data) {
    id
  }
}
    `;
export const InsertChatResourceVersion = gql`
    mutation insertChatResourceVersion($data: resource_versions_insert_input!) {
  insert_resource_versions_one(object: $data) {
    id
  }
}
    `;
export const GetLatestReourcesVersionByResourceId = gql`
    query getLatestReourcesVersionByResourceId($id: uuid!) {
  resource_versions(
    where: {resource_id: {_eq: $id}}
    order_by: {version_number: desc}
    limit: 1
  ) {
    version_number
  }
}
    `;
export const UpdateChatResource = gql`
    mutation updateChatResource($id: uuid!, $data: resources_set_input!) {
  update_resources(where: {id: {_eq: $id}}, _set: $data) {
    affected_rows
  }
}
    `;
import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "query_root",
      "kind": "OBJECT"
    },
    "mutationType": {
      "name": "mutation_root",
      "kind": "OBJECT"
    },
    "subscriptionType": {
      "name": "subscription_root",
      "kind": "OBJECT"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "auth_account",
        "fields": [
          {
            "name": "accessToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "accessTokenExpiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "accountId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "idToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "providerId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "refreshToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "refreshTokenExpiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "scope",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_user",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_account_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "auth_account_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_account",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_account_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "auth_account_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "auth_account_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_account_max_fields",
        "fields": [
          {
            "name": "accessToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "accessTokenExpiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "accountId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "idToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "providerId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "refreshToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "refreshTokenExpiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "scope",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_account_min_fields",
        "fields": [
          {
            "name": "accessToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "accessTokenExpiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "accountId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "idToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "providerId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "refreshToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "refreshTokenExpiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "scope",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_account_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_account",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_invitation",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "expiresAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "inviterId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "organization",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_organization",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "organizationId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_user",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_invitation_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "auth_invitation_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_invitation",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_invitation_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "auth_invitation_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "auth_invitation_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_invitation_max_fields",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "expiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "inviterId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_invitation_min_fields",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "expiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "inviterId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_invitation_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_invitation",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_member",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "organization",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_organization",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "organizationId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_user",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_member_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "auth_member_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_member",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_member_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "auth_member_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "auth_member_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_member_max_fields",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_member_min_fields",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_member_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_member",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_organization",
        "fields": [
          {
            "name": "chat_conversations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "chat_conversations",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chat_conversations_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "chat_conversations_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "invitations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_invitation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "invitations_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_invitation_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "logo",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "members",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_member",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "members_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_member_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "metadata",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_organization_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "auth_organization_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_organization",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_organization_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "auth_organization_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "auth_organization_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_organization_max_fields",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "logo",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_organization_min_fields",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "logo",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "slug",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_organization_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_organization",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_session",
        "fields": [
          {
            "name": "activeOrganizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "expiresAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "hasuraToken",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "impersonatedBy",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ipAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "token",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_user",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "userAgent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_session_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "auth_session_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_session",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_session_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "auth_session_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "auth_session_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_session_max_fields",
        "fields": [
          {
            "name": "activeOrganizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "expiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hasuraToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impersonatedBy",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ipAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "token",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userAgent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_session_min_fields",
        "fields": [
          {
            "name": "activeOrganizationId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "expiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hasuraToken",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "impersonatedBy",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "ipAddress",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "token",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userAgent",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "userId",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_session_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_session",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_user",
        "fields": [
          {
            "name": "accounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_account",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "accounts_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_account_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "banExpires",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "banReason",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "banned",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "chat_conversations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "chat_conversations",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chat_conversations_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "chat_conversations_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "emailVerified",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "invitations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_invitation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "invitations_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_invitation_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "members",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_member",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "members_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_member_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "sessions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_session",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "sessions_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_session_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_user_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "auth_user_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_user",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_user_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "auth_user_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "auth_user_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_user_max_fields",
        "fields": [
          {
            "name": "banExpires",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "banReason",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_user_min_fields",
        "fields": [
          {
            "name": "banExpires",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "banReason",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "image",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_user_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_user",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_verification",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "expiresAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "identifier",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_verification_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "auth_verification_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_verification",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_verification_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "auth_verification_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "auth_verification_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_verification_max_fields",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "expiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "identifier",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_verification_min_fields",
        "fields": [
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "expiresAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "identifier",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "value",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "auth_verification_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_verification",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "chat_conversations",
        "fields": [
          {
            "name": "chat_messages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "chat_messages",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chat_messages_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "chat_messages_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "is_archived",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "organization",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_organization",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "organization_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_user",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "user_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "visibility",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "chat_conversations_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "chat_conversations_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "chat_conversations",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "chat_conversations_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "chat_conversations_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "chat_conversations_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "chat_conversations_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organization_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "visibility",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "chat_conversations_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organization_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "visibility",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "chat_conversations_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "chat_conversations",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "chat_messages",
        "fields": [
          {
            "name": "chat_conversation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "chat_conversations",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "content",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "conversation_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "model",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "provider_metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "role",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "token_usage",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "chat_messages_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "chat_messages_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "chat_messages",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "chat_messages_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "chat_messages_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "chat_messages_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "chat_messages_max_fields",
        "fields": [
          {
            "name": "conversation_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "model",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "chat_messages_min_fields",
        "fields": [
          {
            "name": "conversation_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "model",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "chat_messages_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "chat_messages",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "mutation_root",
        "fields": [
          {
            "name": "delete_auth_account",
            "type": {
              "kind": "OBJECT",
              "name": "auth_account_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_auth_account_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_account",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_auth_invitation",
            "type": {
              "kind": "OBJECT",
              "name": "auth_invitation_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_auth_invitation_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_invitation",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_auth_member",
            "type": {
              "kind": "OBJECT",
              "name": "auth_member_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_auth_member_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_member",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_auth_organization",
            "type": {
              "kind": "OBJECT",
              "name": "auth_organization_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_auth_organization_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_organization",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_auth_session",
            "type": {
              "kind": "OBJECT",
              "name": "auth_session_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_auth_session_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_session",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_auth_user",
            "type": {
              "kind": "OBJECT",
              "name": "auth_user_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_auth_user_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_user",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_auth_verification",
            "type": {
              "kind": "OBJECT",
              "name": "auth_verification_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_auth_verification_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_verification",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_chat_conversations",
            "type": {
              "kind": "OBJECT",
              "name": "chat_conversations_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_chat_conversations_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "chat_conversations",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_chat_messages",
            "type": {
              "kind": "OBJECT",
              "name": "chat_messages_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_chat_messages_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "chat_messages",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_resource_events",
            "type": {
              "kind": "OBJECT",
              "name": "resource_events_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_resource_events_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "resource_events",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_resource_versions",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_resource_versions_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_resources",
            "type": {
              "kind": "OBJECT",
              "name": "resources_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "delete_resources_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "resources",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "insert_auth_account",
            "type": {
              "kind": "OBJECT",
              "name": "auth_account_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_auth_account_one",
            "type": {
              "kind": "OBJECT",
              "name": "auth_account",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_auth_invitation",
            "type": {
              "kind": "OBJECT",
              "name": "auth_invitation_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_auth_invitation_one",
            "type": {
              "kind": "OBJECT",
              "name": "auth_invitation",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_auth_member",
            "type": {
              "kind": "OBJECT",
              "name": "auth_member_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_auth_member_one",
            "type": {
              "kind": "OBJECT",
              "name": "auth_member",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_auth_organization",
            "type": {
              "kind": "OBJECT",
              "name": "auth_organization_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_auth_organization_one",
            "type": {
              "kind": "OBJECT",
              "name": "auth_organization",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_auth_session",
            "type": {
              "kind": "OBJECT",
              "name": "auth_session_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_auth_session_one",
            "type": {
              "kind": "OBJECT",
              "name": "auth_session",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_auth_user",
            "type": {
              "kind": "OBJECT",
              "name": "auth_user_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_auth_user_one",
            "type": {
              "kind": "OBJECT",
              "name": "auth_user",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_auth_verification",
            "type": {
              "kind": "OBJECT",
              "name": "auth_verification_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_auth_verification_one",
            "type": {
              "kind": "OBJECT",
              "name": "auth_verification",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_chat_conversations",
            "type": {
              "kind": "OBJECT",
              "name": "chat_conversations_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_chat_conversations_one",
            "type": {
              "kind": "OBJECT",
              "name": "chat_conversations",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_chat_messages",
            "type": {
              "kind": "OBJECT",
              "name": "chat_messages_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_chat_messages_one",
            "type": {
              "kind": "OBJECT",
              "name": "chat_messages",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_resource_events",
            "type": {
              "kind": "OBJECT",
              "name": "resource_events_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_resource_events_one",
            "type": {
              "kind": "OBJECT",
              "name": "resource_events",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_resource_versions",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_resource_versions_one",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_resources",
            "type": {
              "kind": "OBJECT",
              "name": "resources_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "insert_resources_one",
            "type": {
              "kind": "OBJECT",
              "name": "resources",
              "ofType": null
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "update_auth_account",
            "type": {
              "kind": "OBJECT",
              "name": "auth_account_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_account_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_account",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_account_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_account_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_invitation",
            "type": {
              "kind": "OBJECT",
              "name": "auth_invitation_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_invitation_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_invitation",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_invitation_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_invitation_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_member",
            "type": {
              "kind": "OBJECT",
              "name": "auth_member_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_member_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_member",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_member_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_member_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_organization",
            "type": {
              "kind": "OBJECT",
              "name": "auth_organization_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_organization_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_organization",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_organization_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_organization_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_session",
            "type": {
              "kind": "OBJECT",
              "name": "auth_session_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_session_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_session",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_session_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_session_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_user",
            "type": {
              "kind": "OBJECT",
              "name": "auth_user_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_user_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_user",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_user_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_user_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_verification",
            "type": {
              "kind": "OBJECT",
              "name": "auth_verification_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_verification_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_verification",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_auth_verification_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_verification_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_chat_conversations",
            "type": {
              "kind": "OBJECT",
              "name": "chat_conversations_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_chat_conversations_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "chat_conversations",
              "ofType": null
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_chat_conversations_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "chat_conversations_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_chat_messages",
            "type": {
              "kind": "OBJECT",
              "name": "chat_messages_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_append",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_chat_messages_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "chat_messages",
              "ofType": null
            },
            "args": [
              {
                "name": "_append",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_chat_messages_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "chat_messages_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_resource_events",
            "type": {
              "kind": "OBJECT",
              "name": "resource_events_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_append",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_resource_events_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "resource_events",
              "ofType": null
            },
            "args": [
              {
                "name": "_append",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_resource_events_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "resource_events_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_resource_versions",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_append",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_resource_versions_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions",
              "ofType": null
            },
            "args": [
              {
                "name": "_append",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_inc",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_resource_versions_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "resource_versions_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "update_resources",
            "type": {
              "kind": "OBJECT",
              "name": "resources_mutation_response",
              "ofType": null
            },
            "args": [
              {
                "name": "_append",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_resources_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "resources",
              "ofType": null
            },
            "args": [
              {
                "name": "_append",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_at_path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_elem",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_delete_key",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_prepend",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "update_resources_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "resources_mutation_response",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "Any"
                      }
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "query_root",
        "fields": [
          {
            "name": "auth_account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_account",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_account_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_account_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_account_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_account",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "auth_invitation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_invitation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_invitation_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_invitation_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_invitation_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_invitation",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "auth_member",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_member",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_member_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_member_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_member_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_member",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "auth_organization",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_organization",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_organization_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_organization_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_organization_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_organization",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "auth_session",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_session",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_session_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_session_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_session_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_session",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "auth_user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_user",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_user_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_user_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_user_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_user",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "auth_verification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_verification",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_verification_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_verification_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_verification_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_verification",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "chat_conversations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "chat_conversations",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chat_conversations_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "chat_conversations_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chat_conversations_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "chat_conversations",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "chat_messages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "chat_messages",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chat_messages_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "chat_messages_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chat_messages_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "chat_messages",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "resource_events",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resource_events",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_events_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "resource_events_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_events_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "resource_events",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "resource_versions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resource_versions",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_versions_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "resource_versions_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_versions_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resources",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resources_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "resources_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resources_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "resources",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_events",
        "fields": [
          {
            "name": "actor_type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "event_type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "message_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "resource_version_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "user_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_events_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "resource_events_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resource_events",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_events_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "resource_events_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "resource_events_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_events_max_fields",
        "fields": [
          {
            "name": "actor_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "event_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "message_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "resource_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "resource_version_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_events_min_fields",
        "fields": [
          {
            "name": "actor_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "event_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "message_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "resource_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "resource_version_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_events_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resource_events",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions",
        "fields": [
          {
            "name": "chat_message",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "chat_messages",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "file_name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "file_type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "message_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "mime_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "model",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "resource",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "resources",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "resource_events",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resource_events",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_events_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "resource_events_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "size_bytes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "storage_path",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "version_number",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resource_versions",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_avg_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_min_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_stddev_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_stddev_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_stddev_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_sum_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_var_pop_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_var_samp_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions_variance_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions_avg_fields",
        "fields": [
          {
            "name": "size_bytes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "version_number",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "file_name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "file_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "message_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mime_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "model",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "resource_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "size_bytes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "storage_path",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "version_number",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "file_name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "file_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "message_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "mime_type",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "model",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "resource_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "size_bytes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "storage_path",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "version_number",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resource_versions",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions_stddev_fields",
        "fields": [
          {
            "name": "size_bytes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "version_number",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions_stddev_pop_fields",
        "fields": [
          {
            "name": "size_bytes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "version_number",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions_stddev_samp_fields",
        "fields": [
          {
            "name": "size_bytes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "version_number",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions_sum_fields",
        "fields": [
          {
            "name": "size_bytes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "version_number",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions_var_pop_fields",
        "fields": [
          {
            "name": "size_bytes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "version_number",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions_var_samp_fields",
        "fields": [
          {
            "name": "size_bytes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "version_number",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resource_versions_variance_fields",
        "fields": [
          {
            "name": "size_bytes",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "version_number",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resources",
        "fields": [
          {
            "name": "chat_conversation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "chat_conversations",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "conversation_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "created_by",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "current_version",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "current_version_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "is_archived",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "metadata",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "path",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "organization",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_organization",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "organization_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "resource_versions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resource_versions",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_versions_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "resource_versions_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "source",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resources_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "resources_aggregate_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resources",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resources_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "resources_max_fields",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "resources_min_fields",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resources_max_fields",
        "fields": [
          {
            "name": "conversation_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_by",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "current_version_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organization_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "source",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resources_min_fields",
        "fields": [
          {
            "name": "conversation_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "created_by",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "current_version_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "organization_id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "source",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "resources_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resources",
                    "ofType": null
                  }
                }
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "subscription_root",
        "fields": [
          {
            "name": "auth_account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_account",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_account_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_account_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_account_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_account",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "auth_account_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_account",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_invitation",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_invitation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_invitation_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_invitation_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_invitation_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_invitation",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "auth_invitation_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_invitation",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_member",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_member",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_member_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_member_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_member_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_member",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "auth_member_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_member",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_organization",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_organization",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_organization_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_organization_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_organization_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_organization",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "auth_organization_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_organization",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_session",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_session",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_session_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_session_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_session_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_session",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "auth_session_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_session",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_user",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_user_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_user_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_user_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_user",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "auth_user_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_user",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_verification",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_verification",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_verification_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "auth_verification_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "auth_verification_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "auth_verification",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "auth_verification_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "auth_verification",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chat_conversations",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "chat_conversations",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chat_conversations_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "chat_conversations_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chat_conversations_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "chat_conversations",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "chat_conversations_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "chat_conversations",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chat_messages",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "chat_messages",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chat_messages_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "chat_messages_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "chat_messages_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "chat_messages",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "chat_messages_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "chat_messages",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_events",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resource_events",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_events_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "resource_events_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_events_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "resource_events",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "resource_events_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resource_events",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_versions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resource_versions",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_versions_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "resource_versions_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resource_versions_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "resource_versions",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "resource_versions_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resource_versions",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resources",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resources",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resources_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "resources_aggregate",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "resources_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "resources",
              "ofType": null
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "resources_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "resources",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Any"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;