import { ChakraProvider } from '@chakra-ui/react'

import { SalesPage } from './pages/SalesPage'

import theme from '../src/styles/theme'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <SalesPage />
    </ChakraProvider>
  )
}
