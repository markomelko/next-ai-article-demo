import React from 'react';

function TeaserItem({ item }) {
  const { title, bodyText } = item.fields;

  return (
    <div>
      <div>{title}</div>
      <div>{bodyText}</div>
    </div>
  );
}

export default TeaserItem;
