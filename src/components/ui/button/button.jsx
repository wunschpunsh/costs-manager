import {StyledButton} from './style';

export default function Button({children, link, className}) {
  return (
    <StyledButton
      {...(link ? {href: link} : {as: 'button', type: 'button'})}
      className={className}
    >
      {children}
    </StyledButton>
  );
}
