import Link from 'next/link';
import styled from 'styled-components';

const NavLinks = () => {
  return (
    <Container>
      <Link href="/wines">
        <a>Wines</a>
      </Link>

      <Link href="/wineries">
        <a>Wineries</a>
      </Link>

      <Link href="/vineyards">
        <a>Vineyards</a>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  font-size: 40px;
  line-height: 58px;

  display: flex;
  flex-direction: column;

  margin-top: 40px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export { NavLinks };
