import React from 'react';

import { getContentEntry } from '../../utils/data-handlers';

function ArticlePage({ article }) {
  console.log('ArticlePage', article);

  const { title, bodyText, descriptionText } = article.fields;
  const { createdAt, updatedAt } = article.sys;

  return (
    <div>
      <div>Open AI Page</div>
      <div>{title}</div>
      <div>{bodyText}</div>
      <div>{descriptionText}</div>
      <div>{createdAt}</div>
      <div>{updatedAt}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const articleId = context.query.id;

  if (articleId) {
    const respObj = await getContentEntry(articleId);
    if (respObj.status === 'OK') {
      // status OK
      return {
        props: {
          article: respObj.dataResponse,
        },
      };
    } else {
      // status not OK
      return {
        props: {
          article: { id: articleId },
        },
      };
    }
  } else {
    return {
      props: {
        article: {},
      },
    };
  }
}

export default ArticlePage;
