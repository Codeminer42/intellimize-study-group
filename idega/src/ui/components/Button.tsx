import { Button as ThemeUIButton } from 'theme-ui';

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  variant: string;
};

const Button = ({ children, variant }: ButtonProps) => {
  return (
    <ThemeUIButton variant={variant} sx={baseStyle}>
      {children}
    </ThemeUIButton>
  );
};

const baseStyle = {
  borderRadius: '12px',
  backgroundColor: 'primary',
  fontFamily: 'body',
  color: 'white',
  cursor: 'pointer',
};

export { Button };
