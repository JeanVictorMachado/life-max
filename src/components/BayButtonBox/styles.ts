import { Box, chakra } from '@chakra-ui/react'

export const Container = chakra(Box, {
  baseStyle: {
    width: '100%',
    marginTop: 8,
  },
})

export const BayButtonBox = chakra(Box, {
  baseStyle: {
    maxWidth: 500,
    marginX: 'auto',
    marginY: 2.5,
  },
})

export const BayTextBox = chakra(Box, {
  baseStyle: {
    maxWidth: [300, 350, 400],
    marginX: 'auto',
    marginBottom: 2,
  },
})

export const PaymentMethodsBox = chakra(Box, {
  baseStyle: {
    maxWidth: '600px',
    marginX: 'auto',
  },
})
