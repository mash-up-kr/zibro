import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    background: {
      default: 'transparent',
    },
    primary: {
      light: '',
      main: '#330099',
      contrastText: '#fff',
    },
    secondary: {
      light: '',
      main: '#fff',
      contrastText: '#fff',
    },
    error: {
      light: '',
      main: '#fff',
      contrastText: '#fff',
    },
    sns: {
      kakao: '#ffdb00',
      facebook: '#4267b2',
      naver: '#00d73b',
    },
    action: {
      selected: 'rgba(255, 255, 255, 0.08)',
      hover: 'rgba(255, 255, 255, 0.04)',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    blueGrey: {
      25: '#f5f7f8',
      50: '#eceff1',
      100: '#cfd8dc',
      200: '#b0bec5',
      300: '#90a4ae',
      400: '#78909c',
      500: '#607d8b',
      600: '#546e7a',
      700: '#455a64',
      800: '#37474f',
      900: '#263238',
    },
  },
  typography: {
    useNextVariants: true,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1280,
        lg: 1334,
        xl: 1600,
      },
    },
    fontFamily: [
      '"Apple SD Gothic Neo"',
      '"Nanum Gothic"',
      '"나눔고딕"',
      'NanumGothic',
      '"돋움"',
      'Dotum',
      '"굴림"',
      'Gulim',
      'Helvetica',
      'sans-serif',
    ].join(','),
    button: {
      textTransform: 'initial',
    },
  },
  overrides: {
    MuiButton: {
      text: {},
      outlined: {},
      contained: {
        boxShadow: 'none',
      },
    },
  },
});
