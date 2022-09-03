import { useEffect, useState } from 'react'

import { BayButtonBox } from '~/components/BayButtonBox'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Testimonies } from '~/components/Testimonies'
import { TitlePage } from '~/components/TitlePage'
import { Video, VideoProps } from '~/components/Video'

import * as S from './styles'

export type SalesPageProps = VideoProps & {
  paymentMethodsImg: string
}

export const SalesPage = () => {
  const [showBayButton, setShowBayButton] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowBayButton(true)
    }, 3000)
  }, [])

  return (
    <S.Container>
      <Header />

      <S.Content>
        <TitlePage />

        <Video vslSrc="https://player.vimeo.com/video/675866377?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;h=7d6f99eb19#t=" />

        {showBayButton && <BayButtonBox />}

        <Testimonies />

        {showBayButton && <BayButtonBox />}
      </S.Content>

      <Footer />
    </S.Container>
  )
}
