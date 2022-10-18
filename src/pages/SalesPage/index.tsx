import { useEffect, useMemo, useState } from 'react'

import { BayButtonBox } from '~/components/BayButtonBox'
import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { SliderComponent, SliderProps } from '~/components/Slider'
import { Testimonies } from '~/components/Testimonies'
import { TitlePage } from '~/components/TitlePage'
import { Video } from '~/components/Video'

import beforeAndAfterImages from '~/utils/beforeAndAfter/before-and-after.json'

import * as S from './styles'

export type SalesPageProps = {
  paymentMethodsImg: string
}

export const SalesPage = () => {
  const [showBayButton, setShowBayButton] = useState(false)

  const beforeAndAfter = useMemo(() => {
    return beforeAndAfterImages as SliderProps[]
  }, [])

  useEffect(() => {
    const oneMinute = 60000
    const vslPith = 20.4

    setTimeout(() => {
      setShowBayButton(true)
    }, oneMinute * vslPith)
  }, [])

  return (
    <S.Container>
      <Header />

      <S.Content>
        <TitlePage />

        <Video />

        {showBayButton && <BayButtonBox />}

        {showBayButton && <SliderComponent sliderParams={beforeAndAfter} />}

        <Testimonies />

        {showBayButton && <BayButtonBox />}
      </S.Content>

      <Footer />
    </S.Container>
  )
}
