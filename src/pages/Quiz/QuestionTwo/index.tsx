import { Footer } from '~/components/Footer'
import { QuizCard } from '~/components/QuizCard'

import * as S from './styles'

export const QuestionTwo = () => {
  return (
    <S.Container>
      <S.Content>
        <QuizCard route="/question-three" />
      </S.Content>

      <Footer marginTop={0} />
    </S.Container>
  )
}
