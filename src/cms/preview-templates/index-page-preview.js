import React from 'react';
import { IndexPage } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  if (data) {
    return (
      <IndexPage
        html={widgetFor('body')}
        title={data.title}
        heading={data.heading}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default IndexPagePreview;
