import { Footer } from '~/components/Footer'
import { QuizCard } from '~/components/QuizCard'

import * as S from './styles'

export const QuestionThree = () => {
  return (
    <S.Container>
      <S.Content>
        <QuizCard route="/famous-method" />
      </S.Content>

      <Footer marginTop={0} />
    </S.Container>
  )
}
