import { Box, chakra, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const Container = chakra(motion(Flex), {
  baseStyle: {
    width: '100%',
    height: ['70px', '80px', '80px'],
    borderRadius: '40px',
    backgroundImage: 'linear-gradient(180deg, #29c424, #1e7e1b)',
    boxShadow: '0 0 8px rgba(0, 0, 0, 0.7)',

    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const Content = chakra(Box, {
  baseStyle: {
    width: '75%',
  },
})
