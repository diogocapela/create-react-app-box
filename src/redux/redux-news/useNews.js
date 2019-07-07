import { useContext, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { ReactReduxContext, useSelector } from 'react-redux';

import { loadNews } from './actions';

const useNews = () => {
  const {
    store: { dispatch },
  } = useContext(ReactReduxContext);

  const news = useSelector(state => state.news);

  const actions = useMemo(
    () =>
      bindActionCreators(
        {
          loadNews,
        },
        dispatch
      ),
    [dispatch]
  );

  return {
    ...actions,
    news: news.result,
    isLoading: news.isLoading,
    error: news.error,
  };
};

export default useNews;
