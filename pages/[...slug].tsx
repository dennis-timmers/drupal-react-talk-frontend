import { GetStaticPaths, GetStaticProps } from "next/types";
import { NavigationParagraph } from "../components/organisms/Navigation/Paragraph";
import { BasicPageFragment, MenusQuery } from "../generated/graphql-request";
import { createGraphqlRequestSdk } from "../misc/graphql-request-sdk";

interface Props {
  menus?: MenusQuery
  result?: BasicPageFragment
}

export default function Page(props: Props): JSX.Element {
  const { result } = props

  return (
    <>
      <NavigationParagraph paragraph={props.menus?.menu} />
      <h1>{result?.title}</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const sdk = createGraphqlRequestSdk(ctx)

  const menus = await sdk.Menus()
  const result = await sdk.Page({ path: `/${ctx.params?.slug}` ?? '/' })

  if (result.page === undefined || result.page === null) {
    return {
      revalidate: 1,
      notFound: true
    }
  }

  return {
    revalidate: 1,
    props: {
      menus,
      result: result.page
    }
  }
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [],
    fallback: true
  }
}
