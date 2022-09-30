import Image from 'next/image';
import styled from 'styled-components';

const Logo = () => {
  return (
    <>
      <Image src="/assets/logo.svg" alt="glass of wine icon" width={40} height={40} />
      <Lettering>iDega</Lettering>
    </>
  );
};

const Lettering = styled.span`
  font-family: 'Poiret One';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 75px;
`;

export { Logo };
