import Link, { LinkProps } from "next/link"

export type NavigationLink = (LinkProps & { label: string }) | undefined

export interface NavigationProps {
  links: NavigationLink[]
}

export function Navigation(props: NavigationProps & React.HTMLAttributes<HTMLElement>): JSX.Element {
  const { links, ...rest } = props

  return (
    <nav className="fixed top-0 w-full p-2 pb-0" {...rest}>
      <ul className="flex justify-center bg-gray-800 rounded-md py-2 shadow-md shadow-cyan-700/50">
        {links.map(link => link && (
          <li key={link.label} className="transition-all mx-2 rounded-sm bg-cyan-700/40 shadow-md group-hover hover:bg-cyan-700/70 hover:shadow-cyan-300/30">
            <Link {...link}>
              <a className="inline-flex text-white px-4 py-2 hover:text-cyan-100">{link.label}</a>
            </Link>
        </li>
        ))}
      </ul>
    </nav>
  )
}