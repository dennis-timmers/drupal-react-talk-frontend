import { Header } from "../components/organisms/Header/Component";
import { Navigation } from "../components/organisms/Navigation/Component";

export default function Home(): JSX.Element {
  return (
    <>
      <Navigation
        links={[
          {href: '/', label: 'Home'},
          {href: '/', label: 'Products'},
          {href: '/', label: 'About'}
        ]}
      />
      <Header />
    </>
  );
};
