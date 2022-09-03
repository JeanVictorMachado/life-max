import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import { AppRoutes } from './routes'

import theme from '../src/styles/theme'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </ChakraProvider>
  )
}
