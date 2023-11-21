import { useState, useEffect } from 'react'

type imagesProps = {
	name: string
	description: string
	imageList: string[]
}

const ImageCarousel: React.FC<imagesProps> = ({ name, description, imageList }) => {
	const [images, setImages] = useState<string[]>([''])

	useEffect(() => {
		setImages(imageList)
	}, [images])

	return (
		<div className="">
			<h4>Images in the time lapse</h4>
			<div id="image slider" className="flex flex-row overflow-scroll w-full">
				{images.length > 1 &&
					images.map((image) => (
						<div id="image-container" className="w-[300px]">
							<img src={image} alt="" width="300" />
						</div>
					))}
			</div>
		</div>
	)
}

export default ImageCarousel
