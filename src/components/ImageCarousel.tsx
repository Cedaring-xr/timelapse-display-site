import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

type imagesProps = {
	name: string
	description: string
	imageList: string[]
}

const ImageCarousel: React.FC<imagesProps> = ({ name, description, imageList }) => {
	const [images, setImages] = useState<string[]>([''])
	const [activeImage, setActiveImage] = useState(0)

	useEffect(() => {
		setImages(imageList)
	}, [imageList])

	const active = activeImage && 'z-10'

	const viewImage = () => {}

	return (
		<div className="relative overflow-hidden h-[600px]  border-2 border-black rounded-lg">
			<div id="image slider" className="slider-container flex flex-row overflow-scroll w-full">
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					pagination={{ el: '.swiper-pagination', clickable: true }}
					slidesPerView={'auto'}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2.5
					}}
					modules={[EffectCoverflow, Pagination, Navigation]}
					className="swiper_container"
				>
					{images.length > 1 &&
						images.map((image, index) => (
							<SwiperSlide className="swiper_slide">
								<img src={image} alt="" className="swiper_image" onMouseEnter={viewImage} />
							</SwiperSlide>
						))}
					<div className="slider-controler"></div>
				</Swiper>
			</div>
		</div>
	)
}

export default ImageCarousel
