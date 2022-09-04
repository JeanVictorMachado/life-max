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

export const MoreButtonContainer = chakra(Box, {
  baseStyle: {},
})

export const Divider = chakra(Text, {
  baseStyle: {
    width: '250px',
    marginX: 'auto',
    borderBottom: '1px solid #404040',
  },
})

export const MoreButtonBox = chakra(Flex, {
  baseStyle: {
    width: '205px',
    margin: 'auto',
    marginTop: 8,
    marginBottom: 8,
    paddingX: 4,
    paddingY: 3,
    borderRadius: 10,
    background: 'background.800',
    border: '1px solid',
    borderColor: 'background.700',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',

    _hover: {
      transition: 'all ease .3s',
      filter: ['brightness(.9)'],
    },
  },
})

export const MoreText = chakra(Text, {
  baseStyle: {
    marginRight: 2,
  },
})
