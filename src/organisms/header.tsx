import styled from 'styled-components';

import Logo from '../atoms/logo';
import colors from '../constants/colors';

const Container = styled.header`
  background: ${colors.gray.shade900};
  padding: 1rem 1.5rem;
`;

interface HeaderProps {
  className?: string;
}

export const Header = ({ className = '' }: HeaderProps) => {
  return (
    <Container className={className}>
      <Logo height={36} />
    </Container>
  );
};

export default Header;
