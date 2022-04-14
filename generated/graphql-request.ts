/* eslint-disable */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FormattedText = Paragraph & {
  __typename?: 'FormattedText';
  html: Scalars['String'];
  id: Scalars['ID'];
};

export type Media = {
  id: Scalars['ID'];
};

export type MediaImage = {
  __typename?: 'MediaImage';
  alt: Scalars['String'];
  id: Scalars['ID'];
  src: Scalars['String'];
};

export type Menu = {
  __typename?: 'Menu';
  items?: Maybe<Array<MenuItem>>;
  name: Scalars['String'];
};

export type MenuItem = {
  __typename?: 'MenuItem';
  description?: Maybe<Scalars['String']>;
  items?: Maybe<Array<MenuItem>>;
  label: Scalars['String'];
  url: Url;
};

export enum MenuType {
  Main = 'main'
}

export type Node = {
  id: Scalars['ID'];
  path: Scalars['String'];
  title: Scalars['String'];
};

export type Page = Node & {
  __typename?: 'Page';
  buildingBlocks: Array<Paragraph>;
  headerImage: MediaImage;
  id: Scalars['ID'];
  path: Scalars['String'];
  title: Scalars['String'];
};

export type Paragraph = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  menu: Menu;
  page?: Maybe<Page>;
};


export type QueryMenuArgs = {
  type: MenuType;
};


export type QueryPageArgs = {
  path: Scalars['String'];
};

export type RelatedPages = Paragraph & {
  __typename?: 'RelatedPages';
  id: Scalars['ID'];
  references: Array<Page>;
  title: Scalars['String'];
};

export type Schema = {
  __typename?: 'Schema';
  query?: Maybe<Query>;
};

export type Url = {
  __typename?: 'Url';
  path?: Maybe<Scalars['String']>;
};

export type MenusQueryVariables = Exact<{ [key: string]: never; }>;


export type MenusQuery = { __typename?: 'Query', menu: { __typename?: 'Menu', name: string, items?: Array<{ __typename?: 'MenuItem', label: string, url: { __typename?: 'Url', path?: string | null } }> | null } };

export type PageQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type PageQuery = { __typename?: 'Query', page?: { __typename?: 'Page', title: string, buildingBlocks: Array<{ __typename: 'FormattedText' } | { __typename: 'RelatedPages' }> } | null };

export type BasicPageFragment = { __typename?: 'Page', title: string, buildingBlocks: Array<{ __typename: 'FormattedText' } | { __typename: 'RelatedPages' }> };

type BuilingBlock_FormattedText_Fragment = { __typename: 'FormattedText' };

type BuilingBlock_RelatedPages_Fragment = { __typename: 'RelatedPages' };

export type BuilingBlockFragment = BuilingBlock_FormattedText_Fragment | BuilingBlock_RelatedPages_Fragment;

export const BuilingBlockFragmentDoc = gql`
    fragment builingBlock on Paragraph {
  __typename
}
    `;
export const BasicPageFragmentDoc = gql`
    fragment BasicPage on Page {
  title
  buildingBlocks {
    ...builingBlock
  }
}
    ${BuilingBlockFragmentDoc}`;
export const MenusDocument = gql`
    query Menus {
  menu(type: main) {
    name
    items {
      label
      url {
        path
      }
    }
  }
}
    `;
export const PageDocument = gql`
    query Page($path: String!) {
  page(path: $path) {
    ...BasicPage
  }
}
    ${BasicPageFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Menus(variables?: MenusQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MenusQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MenusQuery>(MenusDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Menus', 'query');
    },
    Page(variables: PageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageQuery>(PageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Page', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Media": [],
    "Node": [
      "Page"
    ],
    "Paragraph": [
      "FormattedText",
      "RelatedPages"
    ]
  }
};
      export default result;
    