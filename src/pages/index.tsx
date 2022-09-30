import type { NextPage } from 'next';

import { Header, ActionsMenu, Tabs, WineList } from '../ui/components';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <ActionsMenu />
      <section>
        <Tabs />
        <WineList />
      </section>
    </>
  );
};

export default Home;
