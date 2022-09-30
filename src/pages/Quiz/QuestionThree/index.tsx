import { Footer } from '~/components/Footer'
import { QuizCard } from '~/components/QuizCard'

import * as S from './styles'

export const QuestionThree = () => {
  return (
    <S.Container>
      <S.Content>
        <QuizCard
          questionNumberText="Pergunta: 3 / 3"
          nextRoute="/famous-method"
          previousRoute="/question-two"
          nextButtonName="Próximo"
          previousButtonName="Voltar"
          description={`O SEGREDO QUE VOCÊ ESTÁ PRESTES A DESCOBRIR PODE MUDAR SUA VIDA. VOCÊ SE COMPROMETE ASSISTIR ATÉ O FINAL? CASO NÃO SE COMPROMETA, CLIQUE EM VOLTAR E DE ESSE OPORTUNIDADE A OUTRA PESSOA.`}
        />
      </S.Content>

      <Footer marginTop={0} />
    </S.Container>
  )
}
