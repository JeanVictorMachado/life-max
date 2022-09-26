import { Link } from 'react-router-dom'

import * as S from './styles'

type FooterProps = {
  marginTop?: number | string
}

export const Footer = ({ marginTop = 10 }: FooterProps) => {
  return (
    <S.Container marginTop={marginTop}>
      <S.FooterText>
        Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você
        sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os
        esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados
        reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros, jamais fazemos
        nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o e-mail de
        contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 ás 18h00. Lemos e
        respondemos todas as mensagens por ordem de chegada.
      </S.FooterText>

      <S.LinksBox>
        <S.LinkContent>
          <Link to="/politica-de-privacidade">Política de privacidade</Link>
        </S.LinkContent>

        <S.Bar>|</S.Bar>

        <S.LinkContent>
          <Link to="/termos-de-uso">Termos de uso</Link>
        </S.LinkContent>
      </S.LinksBox>

      <S.Copyright>
        2022 TODOS OS DIREITOS RESERVADOS
        <br /> Desenvolvido por Architecture Technology
      </S.Copyright>
    </S.Container>
  )
}
