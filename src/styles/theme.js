import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    background: {
      default: 'transparent',
    },
    primary: {
      light: '#3E50B4',
      main: '#2F3E9E',
      contrastText: '#FFF',
    },
    secondary: {
      light: '',
      main: '#ffdb00',
      contrastText: '#FFF',
    },
    error: {
      light: '',
      main: '#FFF',
      contrastText: '#FFF',
    },
    sns: {
      facebook: '#2F3E9E',
    },
    action: {
      selected: 'rgba(255, 255, 255, 0.08)',
      hover: 'rgba(255, 255, 255, 0.04)',
    },
    grey: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#EEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    blueGrey: {
      25: '#F5F7F8',
      50: '#ECEFF1',
      100: '#CFD8DC',
      200: '#B0BEC5',
      300: '#90A4AE',
      400: '#78909C',
      500: '#607D8B',
      600: '#546E7A',
      700: '#455A64',
      800: '#37474F',
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
      'Noto Sans KR',
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
    h1: {
      color: '#000',
      fontSize: '1.375rem',
      fontWeight: 500,
    },
    h2: {
      color: '#000',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h3: {
      color: '#212121',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1,
    },
    subtitle1: {
      color: 'rgba(0, 0, 0, 0.87)',
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      color: '#FFF',
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
    button: {
      fontSize: '0.875rem',
      textTransform: 'initial',
    },
    caption: {
      color: '#424242',
      fontSize: '0.75rem',
    },
  },
  overrides: {
    MuiButton: {
      text: {},
      outlined: {
        borderColor: '#C6C6C6',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
  },
});
