import * as S from './styles'

export type VideoProps = {
  vslSrc: string
}

export const Video = ({ vslSrc }: VideoProps) => {
  return (
    <S.Container>
      <iframe
        src={vslSrc}
        allowFullScreen
        title="Player de Vídeo vimeo"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          borderRadius: '10px',
        }}
      />
    </S.Container>
  )
}
