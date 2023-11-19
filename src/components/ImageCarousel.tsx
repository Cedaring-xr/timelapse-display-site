import { useState, useEffect } from 'react'

type imagesProps = {
	name: string
	description: string
}

const ImageCarousel: React.FC<imagesProps> = ({ name, description }) => {
	const [images, setImages] = useState<string[]>([])

	useEffect(() => {}, [])

	return (
		<div>
			<h4>Images in the time lapse</h4>
			<div id="image slider">
				{/* {images.map((image) => {
					<img src={image.name} alt={image.description} />
				})} */}
			</div>
		</div>
	)
}

export default ImageCarousel
