import Image from 'next/image';

import { Container } from '../Container';
import { NavLinks } from './compose/NavLinks';

const Header = () => {
  return (
    <Container as='header' bgColor='#4A1C1C'>
      <Image src='/assets/logo.svg' width={253} height={83} layout='fixed' alt='iDega' />
      <NavLinks />
    </Container>
  );
};

export { Header };
