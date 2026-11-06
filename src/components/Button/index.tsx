import { ButtonProps } from './type';
import { StyledButton } from './styles';

const Button = ({ variant = 'primary', fullWidth = false, type = 'button', children, ...rest }: ButtonProps) => (
  <StyledButton $variant={variant} $fullWidth={fullWidth} type={type} {...rest}>
    {children}
  </StyledButton>
);

export default Button;
