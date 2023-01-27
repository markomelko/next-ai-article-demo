import Head from 'next/head';

import { getContentItems } from '../utils/data-handlers';

import ContentArea from '../components/layout/content-area';
import TeaserList from '../components/teaser-list';

// import styles from '@/styles/Home.module.css';

/**
 * Home component as a root page.
 * Page will fetch all the articles data on SSR side.
 * After the data is fetched it renders all the items on screen.
 */
export default function Home({ data }) {
  const { items } = data.dataResponse;

  return (
    <>
      <Head>
        <title>Demo App for showing OpenAI generated test articles.</title>
        <meta
          name="description"
          content="Demo App for showing OpenAI generated test articles."
        />
        <meta property='og:title' content="Demo App for showing OpenAI generated test articles"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/future-image.jpg"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TeaserList items={items} />
    </>
  );
}

// Fetch all the available articles on server side
export async function getServerSideProps() {
  const resp = await getContentItems('aiStory');

  if (resp.status === 'OK') {
    return {
      props: {
        data: resp,
      },
    };
  } else {
    return {
      props: {
        items: [],
      },
    };
  }
}
