const theme = {
  sizes: [12, 14, 16, 24, 32, 48, 64, 96, 128, 256, 512, 1024],
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  containerWidths: [512, 1024],
  gutter: [{ px: [2, 3] }, { px: [3, 4] }, { px: [4, 5] }],
  colors: {
    grey: ['#eee', '#888', '#444'],
    blue: '#07c',
    red: '#e10',
    yellow: '#f5cc14',
    green: '#14b526',
    flag: [
      '#14b526',
      '#4aad3e',
      '#7ebf1d',
      '#f5cc14',
      '#f59f14',
      '#e3543b',
      '#e10',
    ],
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

// Default values
theme.gutter[true] = theme.gutter[1];
theme.containerWidths[true] = theme.containerWidths[1];

export default theme;
