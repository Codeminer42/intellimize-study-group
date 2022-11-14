import { Box, Label, Input, ThemeUICSSObject } from 'theme-ui';
import { FiSearch, FiSettings } from 'react-icons/fi';

type StyleOject = {
  [key: string]: ThemeUICSSObject;
};

const SearchBar = () => {
  return (
    <Box sx={sx.container}>
      <Label sx={sx.label}>
        <Input sx={sx.search} placeholder='Search' />
        <Box sx={sx.searchIcon}>
          <FiSearch id='search-icon' aria-label='search' />
        </Box>
      </Label>
      <Box sx={sx.settingsIcon}>
        <FiSettings id='settings-icon' aria-label='settings' />
      </Box>
    </Box>
  );
};

const sx: StyleOject = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    right: '5px',
    top: '3px',
    transform: 'translate(-50%, 50%)',
  },
  settingsIcon: {
    marginLeft: '26px',
    cursor: 'pointer',
  },

  search: {
    border: '0',
    borderRadius: '20px',
    backgroundColor: '#ededed',
    width: '246px',
    height: '39px',
    paddingLeft: '1rem',
    fontSize: '16px',
    '::placeholder': {
      marginLeft: '1rem',
      fontSize: '16px',
      lineHeight: '1.5',
      color: '#ccc',
    },
  },
};

export { SearchBar };
