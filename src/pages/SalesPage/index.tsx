import { useEffect, useMemo, useState } from 'react'

import { BayButtonBox } from '~/components/BayButtonBox'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { SliderComponent, SliderProps } from '~/components/Slider'
import { Testimonies } from '~/components/Testimonies'
import { TitlePage } from '~/components/TitlePage'
import { Video, VideoProps } from '~/components/Video'

import beforeAndAfterImages from '~/utils/beforeAndAfter/before-and-after.json'

import * as S from './styles'

export type SalesPageProps = VideoProps & {
  paymentMethodsImg: string
}

export const SalesPage = () => {
  const [showBayButton, setShowBayButton] = useState(false)

  const beforeAndAfter = useMemo(() => {
    return beforeAndAfterImages as SliderProps[]
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setShowBayButton(true)
    }, 100000)
  }, [])

  return (
    <S.Container>
      <Header />

      <S.Content>
        {/* <Text marginTop={6} fontSize={36} fontWeight={600} textAlign={'center'}>
          "O segredo dos famosos foi revelado"
        </Text>

        <Text paddingX={20} marginTop={6} fontSize={36.5} fontWeight={600} textAlign={'center'}>
          É por isso que eles emagrecem tanto em tão pouco tempo
        </Text> */}

        <TitlePage />

        <Video vslSrc="https://player.vimeo.com/video/675866377?color&amp;autopause=0&amp;loop=0&amp;muted=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;h=7d6f99eb19#t=" />

        {showBayButton && <BayButtonBox />}

        <SliderComponent sliderParams={beforeAndAfter} />

        <Testimonies />

        {showBayButton && <BayButtonBox />}
      </S.Content>

      <Footer />
    </S.Container>
  )
}
