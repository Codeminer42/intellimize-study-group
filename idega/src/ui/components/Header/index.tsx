import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Container } from '../Container';
import { NavLinks } from './compose/NavLinks';

const Header = () => {
  return (
    <Container as='header' bgColor='#4A1C1C'>
      <Link href='/'>
        <a>
          <Image src='/assets/logo.svg' width={253} height={83} layout='fixed' alt='iDega' />
        </a>
      </Link>
      <NavLinks />
    </Container>
  );
};

export { Header };
