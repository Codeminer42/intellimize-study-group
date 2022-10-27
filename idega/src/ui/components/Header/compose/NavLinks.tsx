import Link from 'next/link';
import styled from 'styled-components';

const navItems = [
  {
    text: 'Wines',
    href: '#',
  },
  {
    text: 'Wineries',
    href: '#',
  },
  {
    text: 'Vineyards',
    href: '#',
  },
];

const NavLinks = () => {
  return (
    <Container>
      {navItems.map(({ href, text }) => (
        <Link key={text} href={href} passHref>
          <NavItem>{text}</NavItem>
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  gap: 40px;
  margin-left: 152px;
`;

const NavItem = styled.a`
  padding: 8px 16px;
  font-family: sans-serif;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  transition: background-color ease-in 100ms;
  border-radius: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export { NavLinks };
