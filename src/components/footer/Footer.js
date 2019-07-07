import React from 'react';
import styled from '@emotion/styled';

import { APP_NAME } from 'config/settings';
import Container from 'components/container';
import Link from 'components/link';

const WrapperFooter = styled.footer`
  padding: 7rem 0;
`;

const StyledContainer = styled(Container)`
  text-align: center;
`;

const Footer = ({ ...remainingProps }) => {
  return (
    <WrapperFooter {...remainingProps}>
      <StyledContainer>
        <Link to="/">{APP_NAME}</Link> © {new Date().getFullYear()}
      </StyledContainer>
    </WrapperFooter>
  );
};

export default Footer;
