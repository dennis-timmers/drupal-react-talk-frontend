import { getSdk } from '../generated/graphql-request';
import { GraphQLClient } from 'graphql-request';
import { GetStaticPropsContext } from 'next';

const CMS_URL =
  'http://cms.drupal-react-talk.localhost/graphql/finished';

export function createGraphqlRequestSdk(
  ctx: GetStaticPropsContext = {}
): ReturnType<typeof getSdk> {
  const graphqlUrl = CMS_URL;
  const client = new GraphQLClient(graphqlUrl);
  return getSdk(client);
}
