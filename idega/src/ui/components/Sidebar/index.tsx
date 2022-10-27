import styled from 'styled-components';

import { Logo } from './compose/Logo';
import { NavLinks } from './compose/NavLinks';

const Sidebar = () => {
  return (
    <Container>
      <Logo />
      <NavLinks />
    </Container>
  );
};

const Container = styled.div`
  background-color: #4a1c1c;
  color: #ffffff;

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { Sidebar };
