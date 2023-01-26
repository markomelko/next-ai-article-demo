import { getContentEntry } from '../../utils/data-handlers';

import ArticleItem from '../../components/article/article-item';

function ArticlePage({ articleData }) {
  if (!articleData) return <div>Article not found...</div>;

  return (
      <ArticleItem articleData={articleData} />
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
