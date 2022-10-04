import styled from 'styled-components';

import { Button, ButtonVariants } from '../../Button';

type ActionButtonsProps = ButtonVariants & {
  text: string;
  action: () => void;
};

const ActionButtons = () => {
  const navActionButtons: ActionButtonsProps[] = [
    {
      text: 'Add Wine',
      variant: 'wine',
      action: () => {},
    },
    {
      text: 'Add Winery',
      variant: 'green',
      action: () => {},
    },
    {
      text: 'Add Vineyard',
      variant: 'purple',
      action: () => {},
    },
  ];

  const renderActionButtons = navActionButtons.map(({ text, variant, action }) => (
    <Button key={text} variant={variant} onClick={action}>
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
