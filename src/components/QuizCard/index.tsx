import { useNavigate } from 'react-router-dom'

import harvardLogo from '~/assets/logos/harvard-university.png'
import stanfordLogo from '~/assets/logos/stanford-university.png'

import * as S from './styles'

type QuizCardProps = {
  nextRoute: string
  previousRoute: string
  description: string
  nextButtonName?: string
  previousButtonName?: string
  questionNumberText?: string
}

export const QuizCard = ({
  nextRoute,
  previousRoute,
  description,
  nextButtonName = 'Sim',
  previousButtonName = 'Não',
  questionNumberText = 'Pergunta: 1 / 3',
}: QuizCardProps) => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.QuestionNumber>{questionNumberText}</S.QuestionNumber>

      <S.Content>
        <S.Description>{description}</S.Description>

        <S.ButtonsBox>
          <S.QuizYesButton onClick={() => navigate(nextRoute)}>{nextButtonName}</S.QuizYesButton>
          <S.QuizNotButton onClick={() => navigate(previousRoute)}>
            {previousButtonName}
          </S.QuizNotButton>
        </S.ButtonsBox>
      </S.Content>

      <S.ScientificStudyContainer>
        <S.ScientificStudyTitle>Estudos Ciêntificos</S.ScientificStudyTitle>

        <S.ScientificStudyBox>
          <S.ScientificStudyLogo width={230} src={harvardLogo} />
          <S.ScientificStudyLogo src={stanfordLogo} />
        </S.ScientificStudyBox>
      </S.ScientificStudyContainer>
    </S.Container>
  )
}
