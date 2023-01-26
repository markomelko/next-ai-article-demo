import Link from 'next/link';

import Image from 'next/image';
import moment from 'moment';

import classes from './teaser-item.module.css';

function TeaserItem({ item }) {
  const { title, description, image } = item.fields;

  const articleCreated = moment(item.sys.createdAt).format('DD.MM.YYYY');

  let imageElem = '';

  if (image.fields.file.url) {
    const imageUrl = `https:${image.fields.file.url}`;

    imageElem = (
      <Image
        alt="Image alt text"
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
    <div className={classes.teasercard}>
      {imageElem}
      <div className={classes.titletext}>{title}</div>
      <div className={classes.smalltext}>created: {articleCreated}</div>
      <div className={classes.defaulttext}>{description}</div>
      <Link
        href={{
          pathname: '/article/[id]',
          query: { id: item.sys.id },
        }}
      >
        Avaa artikkeli
      </Link>
    </div>
  );
}

export default TeaserItem;
