import { createClient } from 'contentful';

/**
 * Contentful CMS data client
 */
const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_SPACE_KEY,
});

/**
 * Contentful CMS API - get all items by content type e.g. 'aiStory'
 */
export const getContentItems = async (contentType) => {
  if (!contentType) {
    console.warn('getContentItems() - no contentType given');
    return {
      status: 'FAILED',
      dataResponse: null,
    };
  }

  try {
    const resp = await client.getEntries({ content_type: contentType });
    return {
      status: 'OK',
      dataResponse: resp,
    };
  } catch (err) {
    console.error('getContentTypeItems() - error', err);
    return {
      status: 'FAILED',
      dataResponse: null,
    };
  }
};

/**
 * Contentful CMS API - get single entrty by entryId
 */
export const getContentEntry = async (entryId) => {
  if (!entryId) {
    console.warn('getContentEntry() - no entryId given');
    return {
      status: 'FAILED',
      dataResponse: null,
    };
  }

  try {
    const resp = await client.getEntry(entryId);
    return {
      status: 'OK',
      dataResponse: resp,
    };
  } catch (err) {
    console.error('getContentEntry() - error', err);
    return {
      status: 'FAILED',
      dataResponse: null,
    };
  }
};
