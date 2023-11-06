type TProps = {
  src: string
  alt?: string
  className?: string
}

export default function Avatar(props: TProps) {
  const { src, alt, className = '' } = props

  const picture = new URL(src, import.meta.url).href

  const handleError = ({
    currentTarget
  }: {
    currentTarget: HTMLImageElement
  }) => {
    currentTarget.onerror = null
    currentTarget.src = '/vite.svg'
  }

  return (
    <figure className={`avatar ${className}`}>
      <img src={picture} alt={alt} onError={handleError} />
    </figure>
  )
}
