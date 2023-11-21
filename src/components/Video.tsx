import React from 'react'
// import video from '../assets/timelapse/timeLapse1/timelapse1video.mp4'

type videoProps = {
	title: string
}

const Video: React.FC<videoProps> = ({ title }) => {
	return (
		<div>
			<p>{title}</p>
			<div id="video container">
				<video width="300" height="270" controls>
					<source src="" type="video/mp4"></source>
					Your browser does not support the video tag
				</video>
			</div>
		</div>
	)
}

export default Video
