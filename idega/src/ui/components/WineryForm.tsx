import styled from 'styled-components';

import { Header } from './Header';
import { Button, ButtonVariants } from './Button';
import { useAddWineryForm } from '../hooks/useAddWineryForm';

const WineryForm = () => {
  const { winery, isInvalid, errors, handleSubmit, handleChange, handleBlur } = useAddWineryForm();

  return (
    <>
      <Header />

      <Container>
        <FormTitle>Add Winery</FormTitle>

        <Form onSubmit={handleSubmit} noValidate>
          <FormSection>
            <label htmlFor='wineryName'>Winery Name</label>
            <input
              id='wineryName'
              name='name'
              placeholder='new winery name'
              value={winery.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {isInvalid.name && <ErrorField>{errors.name}</ErrorField>}
          </FormSection>

          <FormSection>
            <label htmlFor='wineryLocation'>Winery Location</label>
            <input
              id='wineryLocation'
              name='location'
              placeholder='winery location'
              value={winery.location}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {isInvalid.location && <ErrorField>{errors.location}</ErrorField>}
          </FormSection>

          <ButtonSection>
            <Button variant='green' type='submit'>
              Submit
            </Button>
          </ButtonSection>
        </Form>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
`;

const FormTitle = styled.h1`
  font-size: 2em;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 15px;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin-bottom: 5px;

  label,
  span {
    font-size: 1.1rem;
  }

  input {
    height: 35px;
  }
`;

const ButtonSection = styled.div`
  button {
    width: 100px;
    height: 40px;

    font-size: 18px;
  }
`;

const ErrorField = styled.span`
  color: #853434;
`;
export { WineryForm };
