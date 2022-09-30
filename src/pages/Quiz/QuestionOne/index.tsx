import { useEffect } from 'react'
import ReactPixel, { AdvancedMatching, Options } from 'react-facebook-pixel'

import { Footer } from '~/components/Footer'
import { QuizCard } from '~/components/QuizCard'

import * as S from './styles'

export const QuestionOne = () => {
  useEffect(() => {
    const advancedMatching = { em: '' } as AdvancedMatching
    const options = {
      autoConfig: true,
      debug: false,
    } as Options

    ReactPixel.init('2210584405767877', advancedMatching, options)
    ReactPixel.revokeConsent()
    ReactPixel.pageView()
  }, [])

  return (
    <>
      <S.Container>
        <S.Content>
          <QuizCard
            nextRoute="/question-two"
            previousRoute="/question-two"
            description="VOCÊ ESTÁ ACIMA DO PESO?"
          />
        </S.Content>

        <Footer marginTop={0} />
      </S.Container>
    </>
  )
}
