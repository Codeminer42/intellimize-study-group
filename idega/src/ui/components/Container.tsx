import { ReactNode } from 'react';

import styled from 'styled-components';

type BaseComponentProps = {
  children: ReactNode;
};

type ContainerProps = BaseComponentProps & {
  as?: 'div' | 'header' | 'section' | 'article' | 'nav' | 'main' | 'aside' | 'footer';
  bgColor: string;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 34px 54px;

  background-color: ${({ bgColor }) => bgColor ?? 'transparent'};
`;

export { Container };
