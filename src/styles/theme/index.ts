import { extendTheme, theme } from '@chakra-ui/react'

const customTheme = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    ...theme.colors,
    background: {
      800: '#252525',
      900: '#121212',
    },
    green: {
      200: '#29c424',
      400: '#1e7e1b',
    },
  },
}

export default extendTheme(customTheme)
