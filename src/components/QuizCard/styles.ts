import { Box, Button, chakra, Flex, Image, Text } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    width: '100%',
  },
})

export const QuestionNumber = chakra(Text, {
  baseStyle: {
    textAlign: 'right',
    marginBottom: 4,
    fontSize: 20,
    fontWeight: 600,
  },
})

export const Content = chakra(Flex, {
  baseStyle: {
    width: '100%',
    padding: 8,
    borderRadius: 10,
    background: 'background.700',
    boxShadow: '0 3px 5px rgba(0, 0, 0, 1)',
    flexDirection: 'column',
  },
})

export const Description = chakra(Text, {
  baseStyle: {
    fontSize: 24,
    fontWeight: 800,
    color: 'white',
    marginBottom: 8,
    textAlign: ['justify'],
  },
})

export const ButtonsBox = chakra(Flex, {
  baseStyle: {
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

export const ScientificStudyContainer = chakra(Box, {
  baseStyle: {
    maxWidth: 550,
    margin: 'auto',
  },
})

export const ScientificStudyTitle = chakra(Text, {
  baseStyle: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
    paddingBottom: 4,
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
  },
})

export const ScientificStudyBox = chakra(Flex, {
  baseStyle: {
    width: '100%',
    flexDirection: ['column', 'row', 'row'],
    justifyContent: ['center'],
    alignItems: ['center'],
  },
})

export const ScientificStudyLogo = chakra(Image, {
  baseStyle: {
    width: '200px',
    marginTop: 4,
    marginX: 8,
  },
})
