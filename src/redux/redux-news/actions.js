import axios from 'axios';

import * as actionTypes from './actionTypes';

export const loadNews = () => (dispatch, getState) => {
  const state = getState();

  const isCached = !!state.news.result.status;

  if (isCached) return;

  dispatch({
    type: actionTypes.LOAD_NEWS_START,
  });

  try {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=6e79e9674f0e45a9a909850ee8b32304'
      )
      .then(res => {
        dispatch({
          type: actionTypes.LOAD_NEWS_SUCCESS,
          payload: res.data,
        });
      });
  } catch (error) {
    dispatch({
      type: actionTypes.LOAD_NEWS_ERROR,
      payload: error,
    });
  }
};
