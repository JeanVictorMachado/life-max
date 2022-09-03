import { Box, chakra } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    height: '100%',
    background: 'background.900',
  },
})

export const Content = chakra(Box, {
  baseStyle: {
    maxWidth: 800,
    paddingX: 4,
    marginX: 'auto',
  },
})
