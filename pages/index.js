import Head from 'next/head';

import { getContentItems } from '../utils/data-handlers';

import TeaserList from '../components/TeaserList';

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
        <title>Demo, OpenAI tech articles 2023</title>
        <meta
          name="description"
          content="Simple NextJS Demo app for OpenAI tech articles"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
