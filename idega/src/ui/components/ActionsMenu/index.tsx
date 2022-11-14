import { Box } from 'theme-ui';
import { ActionButtons } from './compose/ActionButtons';
import { SearchBar } from './compose/SearchBar';

const ActionsMenu = () => {
  return (
    <Box sx={sx.container}>
      <ActionButtons />
      <SearchBar />
    </Box>
  );
};

const sx = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '52px 57px',
  },
};

export { ActionsMenu };
