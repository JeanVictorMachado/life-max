import { useEffect, useState } from 'react'

import protectPrivacy from '~/assets/images/protect-privacy.png'

import * as S from './styles'

export const Header = () => {
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const date = new Date().toLocaleString().slice(0, 10)
    setCurrentDate(date)
  }, [])

  return (
    <S.Container>
      <S.HeaderText>
        Esse conteúdo ficará no ar
        <br />
        {`somente até o dia ${currentDate}`}
      </S.HeaderText>

      <S.ImageBox>
        <img src={protectPrivacy} alt="" />
      </S.ImageBox>
    </S.Container>
  )
}
