import type { NextPage } from 'next';

import styled from 'styled-components';
import { useModal } from '../hooks/useModal';

const Heading = styled.h1`
  font-size: 48px;
  font-family: ${({ theme }) => theme.fontFamily};
`;

const Home: NextPage = () => {
  const openModal = useModal({
    content: "hello"
  })

  return <Heading onClick={openModal}>Neymar</Heading>;
};

export default Home;
