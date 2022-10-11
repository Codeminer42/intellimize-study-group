import React from 'react';
import styled from 'styled-components';

// todo: add ratings component
const TastingNotes = () => {
  return (
    <Container>
      <Icon src='/assets/wineIcon.svg' alt='Wine Icon'></Icon>
      <Text>Tasting notes - insert here short text about wines. 2 lines of text max. </Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 540px;
  height: 140px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: #ededed;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 20px;
`;

const Icon = styled.img`
  width: 120px;
  height: 100px;

  margin: 20px;
  padding: 26px;

  background: #541f1f;
  border-radius: 50%;
`;

const Text = styled.p`
  padding-right: 20px;

  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 18px;
`;

export default TastingNotes;
