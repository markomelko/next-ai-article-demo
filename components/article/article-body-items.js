import ArticleBodyItem from './article-body-item';

function ArticleBodyItems({ bodyItems }) {
  const { content } = bodyItems;

  return content.map((item) => (
    <ArticleBodyItem
      key={item.content[0].value}
      content={item.content[0].value}
    />
  ));
}

export default ArticleBodyItems;
