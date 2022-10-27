import styled from 'styled-components';
import { ActionButtons } from './compose/ActionButtons';
import { SearchBar } from './compose/SearchBar';

const ActionsMenu = () => {
  return (
    <Container>
      <ActionButtons />
      <SearchBar />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 52px 57px;
`;

export { ActionsMenu };
