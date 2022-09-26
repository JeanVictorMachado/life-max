import { Footer } from '~/components/Footer'
import { QuizCard } from '~/components/QuizCard'

import * as S from './styles'

export const QuestionOne = () => {
  return (
    <S.Container>
      <S.Content>
        <QuizCard route="/question-two" />
      </S.Content>

      <Footer marginTop={0} />
    </S.Container>
  )
}
