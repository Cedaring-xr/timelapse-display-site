import setupImage from '../assets/piCamera2.png'

function GearSetup() {
	return (
		<div className="p-0 border-white border-2 lg:w-[80%] mx-auto">
			<h2 className="text-white text-2xl text-center">About the camera setup</h2>
			<hr className="m-2" />
			<div className="text-white w-full mx-auto flex flex-col md:flex-row">
				<div className="md:w-1/3">
					<h3 className="text-2xl text-center text-purple-400 mb-4">Tech specs</h3>
					<ul className="flex flex-col items-center">
						<li>Raspberry Pi 4 model B</li>
						<li>Raspberry Pi camera module</li>
						<li>16mm 5mp camera lens</li>
						<li>7" LCD HDMI portable screen</li>
						<li>30,000mh power bank</li>
						<li>USB mouse and keyboard</li>
					</ul>
				</div>
				<div className="md:w-1/3 justify-center">
					<h3 className="text-2xl text-center text-purple-400 mb-4">Camera</h3>
					<img
						src={setupImage}
						alt="camera setup"
						className="aspect-square rounded-lg border-[1px] border-black mx-auto"
					/>
				</div>
				<div className="justify-center md:w-1/3 p-3">
					<h3 className="text-2xl text-center text-purple-400 mb-4">Description</h3>
					<p className="text-center">
						The Raspberry Pi is running a small Python script that configures the settings on the camera,
						takes a series of pictures on a set interval, and then aves the pictures on the device. After
						the camera is done, the pictures are compiled into a short video, then both the video and
						pictures are uploaded to AWS S3 for cloud storage. A Lambda function is run on the S3 bucket
						upon upload to resize the images and create a thumbnail of the video. The images are then
						imported into the website for viewing.
					</p>
				</div>
			</div>
		</div>
	)
}

export default GearSetup
