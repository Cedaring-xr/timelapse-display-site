import React, { useState, useEffect } from 'react'
import './globals.css'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import cloudIconTransparent from './assets/cloudIconTransparent.png'
import cameraIconTransparent from './assets/cameraIconTransparent.png'
import videoIconTransparent from './assets/videoIconTransparent.png'
import Footer from './components/Footer'
import DisplayProject from './components/DisplayProject'
import GearSetup from './components/GearSetup'
// import { Storage } from 'aws-amplify'

const images = require.context('./assets/timelapse/timeLapse1', true)
const imageList = images.keys().map((image: string) => images(image))

function App() {
	const [pictures, setPictures] = useState<string[]>([])

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

	const scrollDown = () => {
		const targetSection = document.getElementById('display-container')
		if (targetSection) {
			window.scrollTo({
				top: targetSection.offsetTop,
				behavior: 'smooth'
			})
		}
	}

	return (
		<>
			<div id="main-content" className="bg-slate-300 w-full border border-stone-800 bg-fixed bg-cover">
				<header className="bg-transparent flex flex-col">
					<h1 className="ablsolute text-4xl text-white font-bold m-2">Time Lapse Compilation</h1>
				</header>
				<div className="glass relative flex rounded-xl min-h-[60%] sm:max-w-[90%] md:max-w-[70%] mx-auto my-24 p-4">
					<div className="grid">
						<h1 className="main-header text-neutral-100 flex-col mx-1 md:mx-4">Welcome</h1>
						<div className="text flex-col">
							<p className="text-neutral-100 mx-1 md:mx-4">
								This is a display of different time lapse projects that I am recording. Thank you for
								checking it out. The time lapses are recorded using a Raspberry Pi 4 with the new camera
								module. Photos and videos are stored in AWS S3 and I am running a lambda function to
								resize images in order to make it easier to display.
							</p>
						</div>
						<div className="sub-section flex justify-around">
							<img src={cameraIconTransparent} className="w-[100px] lg:w-[180px] aspect-square" alt="" />
							<img
								src={videoIconTransparent}
								className="h-[80px] lg:h-[130px] aspect-square mt-6"
								alt=""
							/>
							<img
								src={cloudIconTransparent}
								className="h-[100px] lg:h-[160px] aspect-square mt-2"
								alt=""
							/>
						</div>
						<MdKeyboardDoubleArrowDown
							className="text-white text-5xl mx-auto hover:text-lime-300 bg-neutral-700 rounded-lg p-0"
							onClick={scrollDown}
						/>
					</div>
				</div>
			</div>
			<div className="w-full px-2 md:px-6 lg:px-12 py-8 bg-slate-800 flex flex-col">
				<GearSetup />
				<div id="display-container">
					<DisplayProject
						projectName="First Test Sunset"
						videoTitle="Bad Sunset Compilation"
						imageList={imageList}
					/>
					<DisplayProject projectName="second time lapse" videoTitle="" imageList={['']} />
					<DisplayProject projectName="third time lapse" videoTitle="" imageList={['']} />
				</div>
			</div>
			<div className=""></div>
			<Footer />
		</>
	)
}

export default App
