import cx from '@styled-system/css';

const parseStyles = styles => props => {
  if (typeof styles === 'string') return styles;
  if (typeof styles === 'function') return parseStyles(styles(props));
  if (typeof styles === 'object') return cx(styles);
  return;
};

export const switchProp = (prop, switchMap, defaultPropValue) => props => {
  const propValue = props[prop];
  if (propValue === undefined) return;
  const styles = switchMap[propValue] || switchMap[defaultPropValue];
  return parseStyles(styles);
};

export const ifProp = (prop, styles) => props => {
  if (!props[prop]) return;
  return parseStyles(styles);
};

export const inline = props => cx(props.css);

export const css = cx;
