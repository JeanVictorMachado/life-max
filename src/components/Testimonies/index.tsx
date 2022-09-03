import { useMediaQuery } from '@chakra-ui/react'

import testimonies from '~/assets/images/testimonies.png'
import testimoniesP1 from '~/assets/images/testimonies-mobile-p1.png'
import testimoniesP2 from '~/assets/images/testimonies-mobile-p2.png'

import { ImArrowDown } from 'react-icons/im'

import * as S from './styles'

export const Testimonies = () => {
  const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
    '(max-width: 700px)',
    '(display-mode: browser)',
  ])

  return (
    <S.Container>
      <S.TitleBox>
        <S.Title>Comentários</S.Title>
        <ImArrowDown size={24} color="#C3C3C3" />
      </S.TitleBox>

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
    </S.Container>
  )
}
