import NextLink from 'next/link';
import { Box, Link } from 'theme-ui';

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
    <Box sx={sx.container}>
      {navItems.map(({ href, text }) => (
        <NextLink key={text} href={href} passHref>
          <Link sx={sx.navLink}>{text}</Link>
        </NextLink>
      ))}
    </Box>
  );
};

const sx = {
  container: {
    display: 'flex',
    gap: '40px',
    marginLeft: '152px',
  },
  navLink: {
    padding: '8px 16px',
    fontFamily: 'sans-serif',
    fontWeight: '400',
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
    borderRadius: '12px',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
};

export { NavLinks };
