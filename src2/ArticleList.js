import React from 'react';
import { useSelector } from 'react-redux';

const ArticleList = () => {
  const articles = useSelector((state) => state.articles);

  return (
    <div>
      <h2>Liste des articles:</h2>
      {articles.length > 0 ? (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              ID: {article.id}, Designation: {article.designation}, Prix: {article.prix}
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun article ajouté.</p>
      )}
    </div>
  );
};

export default ArticleList;
