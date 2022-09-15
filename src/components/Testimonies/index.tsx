import { useEffect, useState } from 'react'
import { Spinner } from '@chakra-ui/react'

import testimonies from '~/assets/images/dep-desktop-1.png'
import testimonies2 from '~/assets/images/dep-desktop-2.png'
import testimonies3 from '~/assets/images/dep-desktop-3.png'
import testimonies4 from '~/assets/images/dep-desktop-4.png'
import testimonies5 from '~/assets/images/dep-desktop-5.png'

import testimoniesM1 from '~/assets/images/dep-mobile-1.png'
import testimoniesM2 from '~/assets/images/dep-mobile-2.png'
import testimoniesM3 from '~/assets/images/dep-mobile-3.png'
import testimoniesM4 from '~/assets/images/dep-mobile-4.png'
import testimoniesM5 from '~/assets/images/dep-mobile-5.png'
import testimoniesM6 from '~/assets/images/dep-mobile-6.png'
import testimoniesM7 from '~/assets/images/dep-mobile-7.png'
import testimoniesM8 from '~/assets/images/dep-mobile-8.png'
import testimoniesM9 from '~/assets/images/dep-mobile-9.png'
import testimoniesM10 from '~/assets/images/dep-mobile-10.png'

import { ImArrowDown, ImArrowUp } from 'react-icons/im'

import * as S from './styles'

export const Testimonies = () => {
  const [isFetching, setIsfetching] = useState(false)
  const [sizeScreen, setSizeScreen] = useState(0)
  const [moreTestimoniesQuantity, setMoreTestimoniesQuantity] = useState(1)
  const [moreTestimoniesMobile, setMoreTestimoniesMobile] = useState([
    {
      testimonies: testimoniesM1,
    },
    {
      testimonies: testimoniesM2,
    },
  ])

  useEffect(() => {
    setSizeScreen(window.screen.width)

    if (window.screen.width < 650) {
      setMoreTestimoniesMobile([
        {
          testimonies: testimoniesM1,
        },
        {
          testimonies: testimoniesM2,
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
      if (sizeScreen < 650) {
        quantity === 1 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimoniesM1,
            },
            {
              testimonies: testimoniesM2,
            },
          ])

        quantity === 2 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimoniesM3,
            },
            {
              testimonies: testimoniesM4,
            },
          ])

        quantity === 3 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimoniesM5,
            },
            {
              testimonies: testimoniesM6,
            },
          ])

        quantity === 4 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimoniesM7,
            },
            {
              testimonies: testimoniesM8,
            },
          ])

        quantity === 5 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimoniesM9,
            },
            {
              testimonies: testimoniesM10,
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
              testimonies: testimonies2,
            },
          ])

        quantity === 3 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimonies3,
            },
          ])

        quantity === 4 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimonies4,
            },
          ])

        quantity === 5 &&
          setMoreTestimoniesMobile([
            ...moreTestimoniesMobile,
            {
              testimonies: testimonies5,
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
          moreTestimoniesQuantity === 5 ? (
            <S.MoreButtonBox
              width={205}
              onClick={() => {
                setMoreTestimoniesMobile([])
                setMoreTestimoniesQuantity(0)
              }}
            >
              <S.MoreText>Fechar comentários</S.MoreText>

              {isFetching ? (
                <Spinner size="sm" color="#C3C3C3" />
              ) : (
                <ImArrowUp size={18} color="#C3C3C3" />
              )}
            </S.MoreButtonBox>
          ) : (
            <S.MoreButtonBox
              onClick={() => {
                handleFetch(moreTestimoniesQuantity + 1)
                setMoreTestimoniesQuantity(moreTestimoniesQuantity + 1)
              }}
            >
              <S.MoreText>Mais comentários</S.MoreText>

              {isFetching ? (
                <Spinner size="sm" color="#C3C3C3" />
              ) : (
                <ImArrowDown size={18} color="#C3C3C3" />
              )}
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

            {isFetching ? (
              <Spinner size="sm" color="#C3C3C3" />
            ) : (
              <ImArrowDown size={18} color="#C3C3C3" />
            )}
          </S.MoreButtonBox>
        )}
      </S.MoreButtonContainer>
    </S.Container>
  )
}
