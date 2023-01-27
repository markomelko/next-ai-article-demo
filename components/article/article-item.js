import moment from 'moment';

import Image from 'next/image';
import ArticleBodyItems from './article-body-items';

import classes from './article-item.module.css';

function ArticleItem({ articleData }) {

  const { title, description, image, bodyText } = articleData.fields;
  const { sys } = articleData;
  const author = 'ChatGPT and Questions by Marko';
  const imageAuthor = 'https://www.pexels.com/';

  const articleCreated = moment(sys.createdAt).format('DD.MM.YYYY');
  const articleUpdated = moment(sys.updatedAt).format('DD.MM.YYYY');

  let imageElem = '';

  if (image.fields.file.url) {
    const imageUrl = `https:${image.fields.file.url}`;

    imageElem = (
      <Image
        alt={title}
        src={imageUrl}
        width={350}
        height={200}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    );
  }

  return (
    <div className={classes.articleContainer}>
      <h1 className={classes.titletext}>{title}</h1>
      <div className={classes.smalltext}>created: {articleCreated}</div>
      <div className={classes.smalltext}>updated: {articleUpdated}</div>
      <div className={classes.smalltext}>{author}</div>
      <div>{imageElem}</div>
      <div className={classes.smalltext}>{imageAuthor}</div>
      <div className={classes.defaulttext}>{description}</div>
      <div><ArticleBodyItems bodyItems={bodyText}/></div>
    </div>
  );
}

export default ArticleItem;
