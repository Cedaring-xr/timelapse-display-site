import React, { useState, useEffect } from 'react'
import './globals.css'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import mapIcons4transparent from './assets/mapIcons4Transparent.png'
import cameraIconTransparent from './assets/cameraIconTransparent.png'
import videoIconTransparent from './assets/videoIconTransparent.png'
import Footer from './components/Footer'
import DisplayProject from './components/DisplayProject'
// import { Storage } from 'aws-amplify'

function App() {
	const [pictures, setPictures] = useState<string[]>([])
	const [count, setCount] = useState(0)

	useEffect(() => {
		fetchPictures()
	}, [])

	const fetchPictures = async () => {
		const params = {
			Bucket: 'bucketName',
			Key: 'OjbectName'
		}
		try {
			const picData = ['']
			// const picData = await s3.getObject(params, (err, data) => {})
			const picList = picData
			console.log(picList)
			setPictures(picList)
		} catch (error) {
			console.log('error fetching pictures from S3', error)
		}
	}

	const scrollDown = () => {}

	return (
		<>
			<div id="main-content" className="bg-slate-300 w-full border border-stone-800 bg-fixed bg-cover">
				<header className="bg-transparent flex flex-col">
					<h1 className="ablsolute text-4xl text-white font-bold m-2">Time Lapse Compilation</h1>
				</header>
				<div className="glass relative flex rounded-xl min-h-[60%] max-w-[70%] mx-auto my-24 p-4">
					<div className="grid">
						<h1 className="main-header text-neutral-100 flex-col mx-4">Welcome</h1>
						<div className="text flex-col">
							<p className="text-neutral-100 mx-4">
								This is a display of different time lapse projects that I am recording. Thank you for
								checking it out. The time lapses are recorded using a Raspberry Pi 4 with the new camera
								module. Photos and videos are stored in AWS S3 and I am running a lambda function to
								collection thumbnails from the videos.
							</p>
						</div>
						<div className="sub-section flex justify-around">
							<img src={cameraIconTransparent} className="icon-image" />
							<img src={videoIconTransparent} className="icon-image" />
							<img src={mapIcons4transparent} className="icon-image" />
						</div>
						<MdKeyboardDoubleArrowDown
							className="text-white text-5xl mx-auto hover:text-lime-300 bg-neutral-700 rounded-lg p-0"
							onClick={scrollDown}
						/>
					</div>
				</div>
			</div>
			<div className="w-full px-12 bg-slate-800 flex flex-col">
				<DisplayProject projectName="first time lapse" />
				<DisplayProject projectName="second time lapse" />
				<DisplayProject projectName="third time lapse" />
			</div>
			<div className=""></div>
			<Footer />
		</>
	)
}

export default App
