import { useEffect, useState } from 'react'
import { useMediaQuery, Spinner } from '@chakra-ui/react'

import testimonies from '~/assets/images/testimonies.png'
import testimoniesP1 from '~/assets/images/testimonies-mobile-p1.png'
import testimoniesP2 from '~/assets/images/testimonies-mobile-p2.png'

import { ImArrowDown, ImArrowUp } from 'react-icons/im'

import * as S from './styles'

export const Testimonies = () => {
  const [isFetching, setIsfetching] = useState(false)
  const [moreTestimoniesQuantity, setMoreTestimoniesQuantity] = useState(1)
  const [moreTestimoniesMobile, setMoreTestimoniesMobile] = useState([
    {
      testimonies: testimoniesP1,
    },
    {
      testimonies: testimoniesP2,
    },
  ])

  const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
    '(max-width: 700px)',
    '(display-mode: browser)',
  ])

  useEffect(() => {
    if (isLargerThanHD && !isDisplayingInBrowser) {
      setMoreTestimoniesMobile([
        {
          testimonies: testimoniesP1,
        },
        {
          testimonies: testimoniesP2,
        },
      ])
    } else {
      setMoreTestimoniesMobile([
        {
          testimonies: testimonies,
        },
      ])
    }
  }, [])

  const handleFetch = (quantity: number) => {
    setIsfetching(true)

    setTimeout(() => {
      if (isLargerThanHD && !isDisplayingInBrowser) {
        quantity === 1 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimoniesP1,
            },
            {
              testimonies: testimoniesP2,
            },
          ])

        quantity === 2 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimoniesP1,
            },
            {
              testimonies: testimoniesP2,
            },
          ])

        quantity === 3 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimoniesP1,
            },
            {
              testimonies: testimoniesP2,
            },
          ])
      } else {
        quantity === 1 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimonies,
            },
          ])

        quantity === 2 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimonies,
            },
          ])

        quantity === 3 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimonies,
            },
          ])
      }

      setIsfetching(false)
    }, 300)
  }

  return (
    <S.Container>
      {!!moreTestimoniesMobile.length && (
        <S.TitleBox>
          <S.Title>Comentários</S.Title>
          <ImArrowDown size={24} color="#C3C3C3" />
        </S.TitleBox>
      )}

      <S.TestimoniesBox>
        {moreTestimoniesMobile?.map((item, index) => (
          <img key={`testimonies-${index + 1}`} src={item.testimonies} alt="" />
        ))}
      </S.TestimoniesBox>

      <S.MoreButtonContainer>
        {moreTestimoniesMobile.length > 0 ? (
          moreTestimoniesQuantity === 3 ? (
            <S.MoreButtonBox
              width={205}
              onClick={() => {
                setMoreTestimoniesMobile([])
                setMoreTestimoniesQuantity(0)
              }}
            >
              <S.MoreText>Fechar comentários</S.MoreText>

              {isFetching ? <Spinner size="sm" /> : <ImArrowUp size={18} color="#C3C3C3" />}
            </S.MoreButtonBox>
          ) : (
            <S.MoreButtonBox
              onClick={() => {
                handleFetch(moreTestimoniesQuantity + 1)
                setMoreTestimoniesQuantity(moreTestimoniesQuantity + 1)
              }}
            >
              <S.MoreText>Mais comentários</S.MoreText>

              {isFetching ? <Spinner size="sm" /> : <ImArrowDown size={18} color="#C3C3C3" />}
            </S.MoreButtonBox>
          )
        ) : (
          <S.MoreButtonBox
            onClick={() => {
              handleFetch(moreTestimoniesQuantity + 1)
              setMoreTestimoniesQuantity(moreTestimoniesQuantity + 1)
            }}
          >
            <S.MoreText>Ver comentários</S.MoreText>

            {isFetching ? <Spinner size="sm" /> : <ImArrowDown size={18} color="#C3C3C3" />}
          </S.MoreButtonBox>
        )}

        <S.Divider />
      </S.MoreButtonContainer>
    </S.Container>
  )
}
