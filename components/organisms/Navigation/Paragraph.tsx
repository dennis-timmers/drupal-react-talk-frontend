import { MenusQuery } from "../../../generated/graphql-request";
import { Navigation } from "./Component";

interface Props {
  paragraph?: MenusQuery['menu']
}

export function NavigationParagraph (props: Props): JSX.Element | null {
  const { paragraph } = props

  if (!paragraph?.items) {
    return null
  }

  return (
    <Navigation
      links={paragraph?.items?.map(item => {
        return (item.url.path !== undefined && item.url.path !== null)
          ? ({
              label: item.label,
              href: item.url.path
            })
          : undefined
      })}
    />
  )
}