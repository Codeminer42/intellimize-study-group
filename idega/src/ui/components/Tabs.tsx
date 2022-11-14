import { Box, ThemeUICSSObject } from 'theme-ui';

type StyleOject = {
  [key: string]: ThemeUICSSObject;
};

type TabsProps = {
  active: boolean;
};

const Tabs = () => {
  return (
    <Box sx={sx.container}>
      <Tab active />
      <Tab active={false} />
    </Box>
  );
};

const Tab = ({ active }: TabsProps) => (
  <Box
    sx={{
      ...sx.tabs,
      backgroundColor: active ? 'black' : 'white',
      color: active ? 'white' : 'black',
    }}
  >
    All
  </Box>
);

const sx: StyleOject = {
  container: {
    display: 'flex',
    padding: '0 52px',
    width: '100%',
    borderBottom: (t) => `2px solid ${t.colors!.black}`,
  },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px 20px 0px 0px',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '28px',
    padding: '14px 46px',
    cursor: 'pointer',
    '& + &': {
      marginLeft: '12px',
    },
  },
};

export { Tabs };
