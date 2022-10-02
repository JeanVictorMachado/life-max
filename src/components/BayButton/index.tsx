import { ReactNode } from 'react'
import { keyframes, Link } from '@chakra-ui/react'

import * as S from './styles'

export type BayButtonProps = {
  children: ReactNode
}

const animationKeyframes = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

const animation = `${animationKeyframes} 1.5s ease-in-out infinite`

export const BayButton = ({ children }: BayButtonProps) => {
  return (
    <Link href="https://pay.kiwify.com.br/OpYrLnf">
      <S.Container to="" animation={animation}>
        <S.Content>{children}</S.Content>
      </S.Container>
    </Link>
  )
}
