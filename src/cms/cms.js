import CMS from 'netlify-cms-app';

import AboutPagePreview from './preview-templates/about-page-preview';
import BlogPostPreview from './preview-templates/blog-post-preview';
import IndexPagePreview from './preview-templates/index-page-preview';

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
