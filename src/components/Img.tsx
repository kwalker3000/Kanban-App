import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ImgProps } from '../@types/app'

import placeholderImg from '../../public/vercel.svg'

export const Img = ({ imgSrc, isRemote, text }: ImgProps) => {
  type Layout = 'fill' | 'responsive'
  let layout: Layout = isRemote ? 'fill' : 'responsive'

  const [imageSrc, setImageSrc] = useState(placeholderImg)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1149) {
        setImageSrc(() => imgSrc)
      } else if (window.innerWidth < 1150 && window.innerWidth > 684) {
        setImageSrc(() => imgSrc)
      } else {
        setImageSrc(() => imgSrc)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [imgSrc])

  return <Image src={imageSrc} alt={text} layout={layout} />
}

// Img.propTypes = {
//   defaultImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
//     .isRequired,
//   descr: PropTypes.string.isRequired,
//   mobImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   tabImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   desImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   remote: PropTypes.bool,
// }
