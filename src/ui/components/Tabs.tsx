import styled from 'styled-components';

const Tabs = () => {
  return (
    <Container>
      <Tab active={true}>All</Tab>
      <Tab active={false}>In Cellar</Tab>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  padding: 0 52px;

  width: 100%;

  border-bottom: 2px solid #363636;
`;

const Tab = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ active }) => (active ? '#363636' : '#FAF9F9')};
  border-radius: 20px 20px 0px 0px;
  color: ${({ active }) => (active ? '#FFFFFF' : '#000000')};

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  padding: 14px 46px;
  cursor: pointer;

  & + & {
    margin-left: 12px;
  }
`;

export { Tabs };
