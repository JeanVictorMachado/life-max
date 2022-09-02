import { BayButton } from '../BayButton'

import textButton from '~/assets/images/text-button.png'
import paymentMethods from '~/assets/images/payment-methods.png'
import paymentMethodsText from '~/assets/images/payment-methods-text.png'

import * as S from './styles'

export const BayButtonBox = () => {
  return (
    <S.Container>
      <S.BayButtonBox>
        <S.BayTextBox>
          <img src={paymentMethodsText} alt="" />
        </S.BayTextBox>

        <BayButton>
          <img src={textButton} alt="" />
        </BayButton>
      </S.BayButtonBox>

      <S.PaymentMethodsBox>
        <img src={paymentMethods} alt="" />
      </S.PaymentMethodsBox>
    </S.Container>
  )
}
