import { getContentEntry } from '../../utils/data-handlers';

function ArticlePage({ articleData }) {

  if (!articleData) return <div>Article not found...</div>;

  console.log('ArticlePage lots of todos', articleData);

  const { title, description } = articleData.fields;
  const { createdAt, updatedAt } = articleData.sys;

  return (
    <div>
      <div>Open AI Article</div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
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
