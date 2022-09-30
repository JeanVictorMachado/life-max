import { chakra, Flex, Text } from '@chakra-ui/react'

export const Container = chakra(Flex, {
  baseStyle: {
    width: '100%',
    height: ['70px', '80px', '80px'],
    padding: 4,
    background: 'background.900',
    borderBottom: '1px solid #36485D',
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
  baseStyle: {
    fontSize: [12, 14, 14],
    marginTop: -0.5,
    color: 'text.200',
  },
})
