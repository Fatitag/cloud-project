export const getArticle = (addArticle) => {
  return {
    type: 'ADD_ARTICLE',
    payload: addArticle,
  };
};

export const deleteArticle = (deleteArticle) => {
  return {
    type: 'DELETE_ARTICLE',
    payload: deleteArticle,
  };
};
