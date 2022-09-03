import { Box, chakra, Flex, Text } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    width: '100%',
    padding: 8,
    marginTop: 10,
    background: 'background.800',
  },
})

export const FooterText = chakra(Text, {
  baseStyle: {
    fontSize: 14,
    textAlign: ['justify'],
    color: 'text.200',
  },
})

export const LinksBox = chakra(Flex, {
  baseStyle: {
    fontSize: 14,
    marginTop: 8,
    justifyContent: 'center',
  },
})

export const LinkContent = chakra(Flex, {
  baseStyle: {
    marginX: 4,
    color: 'text.200',
  },
})

export const Copyright = chakra(Text, {
  baseStyle: {
    fontSize: 14,
    marginTop: 8,
    textAlign: ['center'],
    color: 'text.200',
  },
})
