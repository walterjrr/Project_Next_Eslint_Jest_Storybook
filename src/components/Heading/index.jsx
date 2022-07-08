import P from 'prop-types';
import * as Styled from './style';

export const Heading = ({ children, light = false }) => {
  return (
    <Styled.Container light={light}>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
};
