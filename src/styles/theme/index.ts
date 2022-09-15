import { extendTheme, theme } from '@chakra-ui/react'

const customTheme = {
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    ...theme.colors,
    background: {
      700: '#464646',
      800: '#252525',
      900: '#121212',
    },
    text: {
      100: '#DCDCDC',
      200: '#C3C3C3',
    },
    green: {
      200: '#29c424',
      400: '#1e7e1b',
    },
  },
}

export default extendTheme(customTheme)
