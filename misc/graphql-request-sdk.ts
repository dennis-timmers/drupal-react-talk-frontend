import { getSdk } from '../generated/graphql-request';
import { GraphQLClient } from 'graphql-request';
import { GetStaticPropsContext } from 'next';

const CMS_URL =
  'https://cms.drupal-react-talk.main-bvxea6i-bqa3nqwg4dpcc.de-2.platformsh.site/graphql/finished';

export function createGraphqlRequestSdk(
  ctx: GetStaticPropsContext = {}
): ReturnType<typeof getSdk> {
  const graphqlUrl = CMS_URL;
  const client = new GraphQLClient(graphqlUrl);
  return getSdk(client);
}
