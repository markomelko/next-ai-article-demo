import Head from 'next/head';

import { getContentItems } from '../utils/data-handlers';

import ContentArea from '../components/layout/content-area';
import TeaserList from '../components/teaser-list';

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
      <ContentArea>
        <TeaserList items={items} />
      </ContentArea>
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
