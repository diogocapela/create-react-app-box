import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import { useNews } from 'redux/redux-news';
import Container from 'components/container';
import theme from 'theme';

const WrapperDiv = styled.div`
  color: ${theme.colors.black};
`;

function Home() {
  const { loadNews, news } = useNews();

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  console.log(news);

  return (
    <WrapperDiv>
      <Container>Home</Container>
    </WrapperDiv>
  );
}

export default Home;
