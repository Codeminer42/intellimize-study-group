import styled from 'styled-components';

import { Header } from './Header';
import { useAddWineryForm } from '../hooks/useAddWineryForm';

const WineryForm = () => {
  const { winery, handleSubmit, handleChange } = useAddWineryForm();

  return (
    <>
      <Header />

      <Container>
        <h1>Add Winery</h1>

        <Form onSubmit={handleSubmit} noValidate>
          <label htmlFor='wineryName'>Winery Name</label>
          <input
            id='wineryName'
            name='name'
            placeholder='your winery name'
            value={winery.name}
            onChange={handleChange}
          />

          <label htmlFor='wineryLocation'>Winery Name</label>
          <input
            id='wineryLocation'
            name='location'
            placeholder='winery location'
            value={winery.location}
            onChange={handleChange}
          />

          <button type='submit'>Submit</button>
        </Form>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export { WineryForm };
