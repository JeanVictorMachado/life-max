import { Box, chakra, Flex } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    height: '100vh',
    background: 'background.200',
  },
})

export const Content = chakra(Flex, {
  baseStyle: {
    height: '100%',
    maxWidth: 800,
    paddingX: 4,
    marginX: 'auto',
    alignItems: 'center',
  },
})
