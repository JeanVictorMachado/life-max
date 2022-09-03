import { Box, chakra, Flex, Text } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {},
})

export const TitleBox = chakra(Flex, {
  baseStyle: {
    marginTop: 8,
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export const Title = chakra(Text, {
  baseStyle: {
    fontSize: [18, 18, 22],
    marginBottom: 2,
    paddingTop: 4,
    paddingX: 16,
    color: 'text.200',
    borderTop: '1px solid #404040',
  },
})

export const TestimoniesBox = chakra(Box, {
  baseStyle: {
    marginTop: 8,
    marginX: 'auto',
    borderRadius: 10,
    overflow: 'hidden',
  },
})
