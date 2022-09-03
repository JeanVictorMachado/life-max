import { chakra, Flex, Text } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    width: '100%',
    height: ['70px', '80px', '80px'],
    padding: 4,
    background: 'background.800',
    boxShadow: '0 0 10px rgba(148, 148, 148, 0.653)',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export const ImageBox = chakra(Flex, {
  baseStyle: {
    height: '30px',
  },
})

export const HeaderText = chakra(Text, {
  baseStyle: {},
})
