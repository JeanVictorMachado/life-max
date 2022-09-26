import { Box, Button, chakra, Flex } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    width: '100%',
    height: '300px',
    padding: 8,
    borderRadius: 10,
    background: 'background.700',
    boxShadow: '0 3px 5px rgba(0, 0, 0, 1)',
  },
})

export const ButtonsBox = chakra(Flex, {
  baseStyle: {
    height: '100%',
    alignItems: ['end'],
  },
})

export const QuizYesButton = chakra(Button, {
  baseStyle: {
    width: '100%',
    fontWeight: 800,
    marginRight: 4,
    background: 'green.300',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',

    _hover: {
      transition: 'all ease 0.3s',
      background: 'green.300',
      filter: 'brightness(0.9)',
    },
  },
})

export const QuizNotButton = chakra(Button, {
  baseStyle: {
    width: '100%',
    fontWeight: 800,
    marginLeft: 4,
    background: 'blue.300',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',

    _hover: {
      transition: 'all ease 0.3s',
      background: 'blue.300',
      filter: 'brightness(0.9)',
    },
  },
})
