import React from 'react';
import styled from '@emotion/styled';

import { APP_NAME, NAVBAR_LINKS } from 'config/settings';
import Container from 'components/container';
import Link from 'components/link';
import theme from 'theme';

const WrapperNav = styled.nav`
  background: ${theme.colors.lightGrey1};
  margin-bottom: 2rem;
`;

const StyledContainer = styled(Container)`
  height: ${theme.variables.navbarHeight};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 3rem;
`;

const LogoSpan = styled.span`
  padding-left: 0.5rem;
  font-weight: ${theme.weights.bold};
`;

const Ul = styled.ul`
  display: flex;
`;

const Li = styled.li`
  :not(:last-child) {
    margin-right: 0.75rem;
  }
`;

const LogoStyledLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: ${theme.colors.black};
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Navbar = ({ ...remainingProps }) => {
  return (
    <WrapperNav {...remainingProps}>
      <StyledContainer>
        <LogoStyledLink to="/">
          <LogoImg src="/img/favicon.ico" alt={APP_NAME} />
          <LogoSpan>{APP_NAME}</LogoSpan>
        </LogoStyledLink>
        <Ul>
          {NAVBAR_LINKS.map(({ url, title }, i) => (
            <Li key={i}>
              <StyledLink to={url}>{title}</StyledLink>
            </Li>
          ))}
        </Ul>
      </StyledContainer>
    </WrapperNav>
  );
};

export default Navbar;
