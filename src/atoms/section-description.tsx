import styled from 'styled-components';

interface SectionDescriptionProps {
  children?: React.ReactNode | React.ReactNode[];
  title: string;
}

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.1;
  margin: 0;
`;

const Container = styled.section`
  padding: 10vh 0 0;
  margin-bottom: 8vh;
`;

export const SectionDescription = ({ title, children }: SectionDescriptionProps) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      { children && (<p>{children}</p>) }
    </Container>
  );
};

export default SectionDescription;
