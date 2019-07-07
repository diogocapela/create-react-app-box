import React from 'react';
import styled from '@emotion/styled';

import Container from 'components/container';
import theme from 'theme';

const WrapperDiv = styled.div`
  color: ${theme.colors.black};
`;

function About() {
  return (
    <WrapperDiv>
      <Container>About</Container>
    </WrapperDiv>
  );
}

export default About;
