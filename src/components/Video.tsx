import React from 'react'
// import video from '../assets/timelapse/timeLapse1/timelapse1video.mp4'

type videoProps = {
	title: string
}

const Video: React.FC<videoProps> = ({ title }) => {
	return (
		<div id="video container" className="mx-auto">
			<h3 className="absolute">{title}</h3>
			<iframe
				title="test-video"
				width="525"
				height="344"
				src="https://mattraylongtermtimelapsecontainer.s3.us-east-2.amazonaws.com/timeLapse1/timelapse1video.mp4"
			></iframe>
		</div>
	)
}

export default Video
