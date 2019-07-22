import React from 'react';
import { BlogPost } from '../../templates/blog-post';

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPost
    html={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default BlogPostPreview;
