import React from 'react';
import { AboutPage } from '../../templates/about-page';

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPage title={entry.getIn(['data', 'title'])} html={widgetFor('body')} />
);

export default AboutPagePreview;
