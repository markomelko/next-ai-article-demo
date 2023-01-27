import { Fragment } from 'react';
import Head from 'next/head';

import { getContentEntry } from '../../utils/data-handlers';
import ArticleItem from '../../components/article/article-item';

function ArticlePage({ articleData }) {
  if (!articleData) return <div>Article not found...</div>;
  
  const { title, description, image } = articleData.fields;

  // TODO set placeholder if there is no image set
  const imageUrl = `https:${image.fields.file.url}`;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={imageUrl} />
      </Head>
      <ArticleItem articleData={articleData} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const articleId = context.query.id;

  if (articleId) {
    const respObj = await getContentEntry(articleId);
    if (respObj.status === 'OK') {
      return {
        props: {
          articleData: respObj.dataResponse,
        },
      };
    } else {
      return {
        props: {
          articleData: null,
        },
      };
    }
  } else {
    return {
      props: {
        articleData: null,
      },
    };
  }
}

export default ArticlePage;
