import React from 'react';

export default ({ content }) => (
  <div className="html-content" dangerouslySetInnerHTML={{ __html: content }} />
);
