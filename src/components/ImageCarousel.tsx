import { useState, useEffect } from 'react'

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
		<div className="relative overflow-hidden h-[200px]  border-2 border-black rounded-lg">
			<div id="image slider" className="flex flex-row overflow-scroll w-full">
				{images.length > 1 &&
					images.map((image, index) => (
						<div id="image-container" key={index} className="w-[300px]">
							<img src={image} alt="" width="300" className="absolute" onMouseEnter={viewImage} />
						</div>
					))}
			</div>
		</div>
	)
}

export default ImageCarousel
