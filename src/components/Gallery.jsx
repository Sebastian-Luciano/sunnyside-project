import { Image } from "./Image"
import milkbottlesImgMobile from '../assets/mobile/image-gallery-milkbottles.jpg'
import milkbottlesImgDesktop from '../assets/desktop/image-gallery-milkbottles.jpg'

import orangeImgMobil from '../assets/mobile/image-gallery-orange.jpg'
import orangeImgDesktop from '../assets/desktop/image-gallery-orange.jpg'
import coneImgMobil from '../assets/mobile/image-gallery-cone.jpg'
import coneImgDesktop from '../assets/desktop/image-gallery-cone.jpg'
import sugarCubesImgMobil from '../assets/mobile/image-gallery-sugar-cubes.jpg'
import sugarCubesImgDesktop from '../assets/desktop/image-gallery-sugarcubes.jpg'

export const Gallery = () => {
    return (
        <div className="grid grid-cols-2 sm:flex">
            <Image
                imgMobile={milkbottlesImgMobile}
                imgDesktop={milkbottlesImgDesktop}
            />
            <Image
                imgMobile={orangeImgMobil}
                imgDesktop={orangeImgDesktop}
            />
            <Image
                imgMobile={coneImgMobil}
                imgDesktop={coneImgDesktop}
            />
            <Image
                imgMobile={sugarCubesImgMobil}
                imgDesktop={sugarCubesImgDesktop}
            />
        </div>

    )
}
