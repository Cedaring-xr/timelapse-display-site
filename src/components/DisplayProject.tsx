import { useEffect } from 'react'
import ImageCarousel from './ImageCarousel'
import Video from './Video'

type projectProps = {
	projectName: string
}

const DisplayProject: React.FC<projectProps> = ({ projectName }) => {
	useEffect(() => {
		fetchImages()
	})

	const fetchImages = () => {}

	return (
		<div className="w-full border-neutral-100 border-opacity-80 border-4 rounded-xl bg-transparent flex items-center justify-center m-8">
			<div className="w-full mx-4 min-h-[175px] rounded-md bg-stone-700 text-white flex justify-center pt-8">
				<span>{projectName}</span>
				<Video />
				<ImageCarousel name="sunset" description="adsfasdfasd" />
			</div>
		</div>
	)
}

export default DisplayProject
