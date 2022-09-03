import protectPrivacy from '~/assets/images/protect-privacy.png'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Container>
      <S.HeaderText>
        {/* Confidencial!
        <br />
        Por favor não compartilhe essas informações. */}
      </S.HeaderText>

      <S.ImageBox>
        <img src={protectPrivacy} alt="" />
      </S.ImageBox>
    </S.Container>
  )
}
