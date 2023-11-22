import { useEffect } from 'react'
import ImageCarousel from './ImageCarousel'
import Video from './Video'

type projectProps = {
	projectName: string
	videoTitle: string
	imageList: string[]
}

const DisplayProject: React.FC<projectProps> = ({ projectName, videoTitle, imageList }) => {
	useEffect(() => {
		fetchImages()
	})

	const fetchImages = () => {}

	return (
		<div className="w-full border-neutral-100 border-opacity-80 border-4 rounded-xl bg-transparent items-center justify-center my-8 overflow-hidden">
			<div className="w-full rounded-md bg-stone-700 text-white justify-center flex flex-col">
				<h2 className="sans-font text-3xl text-center mt-1">{projectName}</h2>
				<Video title={videoTitle} />
				<ImageCarousel name="sunset" description="adsfasdfasd" imageList={imageList} />
			</div>
		</div>
	)
}

export default DisplayProject
