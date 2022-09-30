import styled from 'styled-components';
import { FiSearch, FiSettings } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <Container>
      <label>
        <Search placeholder='Search' />
        <FiSearch id='search-icon' aria-label='search' />
      </label>
      <FiSettings id='settings-icon' aria-label='settings' />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  #search-icon {
    position: absolute;
    right: 5px;
    top: 3px;
    transform: translate(-50%, 50%);
  }

  #settings-icon {
    margin-left: 26px;
    cursor: pointer;
  }

  label {
    position: relative;
  }
`;

const Search = styled.input`
  border: 0;
  border-radius: 20px;
  background-color: #ededed;
  width: 246px;
  height: 39px;
  padding-left: 1rem;
  font-size: 16px;

  &::placeholder {
    margin-left: 1rem;
    font-size: 16px;
    line-height: 1.5;
    color: #ccc;
  }
`;

export { SearchBar };
