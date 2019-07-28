const theme = {
  sizes: [12, 14, 16, 24, 32, 48, 64, 96, 128, 256, 512, 1024],
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    blue: '#07c',
    red: '#e10',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
};

theme.sizes.maxLineLength = theme.sizes[11];

export default theme;
