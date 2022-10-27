import styled, { css } from 'styled-components';

export type ButtonVariants = {
  variant?: keyof typeof variants;
};

type ButtonProps = ButtonVariants & React.ComponentPropsWithoutRef<'button'>;

const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <BaseButton variant={variant} {...props}>
      {children}
    </BaseButton>
  );
};

const variants = {
  wine: css`
    border: 1px solid #b15757;
    background-color: #b15757;
    color: #fff;
  `,
  green: css`
    border: 1px solid #889459;
    background-color: #889459;
    color: #fff;
  `,
  purple: css`
    border: 1px solid #5d5177;
    background-color: #5d5177;
    color: #fff;
  `,
};

const BaseButton = styled.button<ButtonVariants>`
  display: inline;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 68px;

  border: 1px solid #363636;
  border-radius: 20px;

  font-size: 24px;
  line-height: 1.5;
  color: #363636;
  cursor: pointer;

  ${({ variant }) => variant && variants[variant]}
`;

export { Button };
