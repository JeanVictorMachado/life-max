import { Footer } from '~/components/Footer'
import { QuizCard } from '~/components/QuizCard'

import * as S from './styles'

export const QuestionTwo = () => {
  return (
    <S.Container>
      <S.Content>
        <QuizCard
          questionNumberText="Pergunta: 2 / 3"
          nextRoute="/question-three"
          previousRoute="/question-one"
          nextButtonName="Próximo"
          previousButtonName="Voltar"
          description={`O VÍDEO A SEGUIR TEM UM NÚMERO LIMITADO DE ACESSOS. POR FAVOR SÓ PASSE ADIANTE SE VOCÊ REALMENTE PRECISA EMAGRECER.`}
        />
      </S.Content>

      <Footer marginTop={0} />
    </S.Container>
  )
}
