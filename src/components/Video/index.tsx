import * as S from './styles'

export const Video = () => {
  return (
    <S.Container>
      <iframe
        id="panda-6da7d9f0-c5b3-4565-ad2d-7afd54edf545"
        src="https://player-vz-5115ab41-ebb.tv.pandavideo.com.br/embed/?v=6da7d9f0-c5b3-4565-ad2d-7afd54edf545"
        allowFullScreen
        title="Max Life"
        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '0',
        }}
      />
    </S.Container>
  )
}
