import { useEffect, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'

import { BayButtonBox } from '~/components/BayButtonBox'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Video, VideoProps } from '~/components/Video'

import titleMobile from '~/assets/images/title-mobile.png'
import testimonies from '~/assets/images/testimonies.png'
import testimoniesP1 from '~/assets/images/testimonies-mobile-p1.png'
import testimoniesP2 from '~/assets/images/testimonies-mobile-p2.png'

import * as S from './styles'

export type SalesPageProps = VideoProps & {
  paymentMethodsImg: string
}

export const SalesPage = () => {
  const [showBayButton, setShowBayButton] = useState(false)

  const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
    '(max-width: 700px)',
    '(display-mode: browser)',
  ])

  useEffect(() => {
    setTimeout(() => {
      setShowBayButton(true)
    }, 3000)
  }, [])

  return (
    <S.Container>
      <Header />

      <S.Content>
        <S.TitleBox>
          <img src={titleMobile} alt="" />
        </S.TitleBox>

        <Video vslSrc="https://player.vimeo.com/video/675866377?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;h=7d6f99eb19#t=" />

        {showBayButton && <BayButtonBox />}

        <S.TestimoniesBox>
          {!isLargerThanHD && !isDisplayingInBrowser ? (
            <img src={testimonies} alt="" />
          ) : (
            <>
              <img src={testimoniesP1} alt="" />
              <img src={testimoniesP2} alt="" />
            </>
          )}
        </S.TestimoniesBox>

        {showBayButton && <BayButtonBox />}
      </S.Content>

      <Footer />
    </S.Container>
  )
}
