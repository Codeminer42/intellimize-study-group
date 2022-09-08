import type { NextPage } from 'next';

import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 48px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const Home: NextPage = () => {
  return <Heading>Neymar</Heading>;
};

export default Home;
