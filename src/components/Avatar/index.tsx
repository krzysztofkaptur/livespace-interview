type TProps = {
  src: string
  alt?: string
}

export default function Avatar(props: TProps) {
  const { src, alt } = props

  const picture = new URL(src, import.meta.url).href

  const handleError = ({
    currentTarget
  }: {
    currentTarget: HTMLImageElement
  }) => {
    currentTarget.onerror = null
    currentTarget.src = '/vite.svg'
  }

  return <img src={picture} alt={alt} onError={handleError} />
}
