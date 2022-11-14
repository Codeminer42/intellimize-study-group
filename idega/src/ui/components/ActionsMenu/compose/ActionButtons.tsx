import styled from 'styled-components';

import { Button } from '../../Button';

const ActionButtons = () => {
  const navActionButtons = [
    {
      text: 'Add Wine',
      action: () => {},
    },
    {
      text: 'Add Winery',
      action: () => {},
    },
    {
      text: 'Add Vineyard',
      action: () => {},
    },
  ];

  const renderActionButtons = navActionButtons.map(({ text, action }) => (
    <Button key={text} variant='primary' onClick={action}>
      {text}
    </Button>
  ));

  return <ButtonsContainer>{renderActionButtons}</ButtonsContainer>;
};

const ButtonsContainer = styled.div`
  display: flex;
  gap: 26px;
`;

export { ActionButtons };
