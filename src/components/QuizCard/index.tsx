import { useNavigate } from 'react-router-dom'

import * as S from './styles'

type QuizCardProps = {
  route: string
}

export const QuizCard = ({ route }: QuizCardProps) => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.ButtonsBox>
        <S.QuizYesButton onClick={() => navigate(route)}>Sim</S.QuizYesButton>
        <S.QuizNotButton>Não</S.QuizNotButton>
      </S.ButtonsBox>
    </S.Container>
  )
}
