import { chakra, Flex } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    width: '100%',
    height: ['70px', '80px', '80px'],
    background: 'background.800',
    boxShadow: '0 0 10px rgba(148, 148, 148, 0.653)',
  },
})
