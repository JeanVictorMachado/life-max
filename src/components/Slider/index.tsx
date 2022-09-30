import { useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'

import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

import './styles.css'
import { Box } from '@chakra-ui/react'

export type SliderSettings = Settings

export interface SliderProps {
  img: string
  name: string
  age: string
  lostWeight: string
  description: string
}

export interface SliderComponentProps {
  sliderParams: SliderProps[]
}

export const SliderComponent = ({ sliderParams }: SliderComponentProps) => {
  const sliderRef = useRef<Slider>(null)

  const [position, setPosition] = useState(0)

  const settings: SliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: setPosition,
  }

  const handleNext = () => sliderRef.current?.slickNext()

  const handlePrev = () => sliderRef.current?.slickPrev()

  return (
    <Box paddingX={[4, 4, 0]}>
      <div className="slider__container">
        <Slider ref={sliderRef} {...settings}>
          {sliderParams.map((item, index) => (
            <>
              <div key={index}>
                <p className="slider__pearson-name">{`${item.name} - ${item.age} anos`}</p>

                <div className="slider__img-container">
                  <img src={item.img} alt={item.description} className="slider__img" />

                  <div className="slider__quantity-weight">
                    <span>{item.lostWeight}</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        </Slider>

        <section className="slider__left-icon-box">
          {position !== 0 && (
            <Box onClick={handlePrev}>
              <FaAngleLeft color="rgb(227, 227, 227)" size={30} />
            </Box>
          )}
        </section>

        <section className="slider__right-icon-box">
          <Box onClick={handleNext}>
            <FaAngleRight color="rgb(227, 227, 227)" size={30} />
          </Box>
        </section>
      </div>
    </Box>
  )
}
