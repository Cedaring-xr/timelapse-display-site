import setupImage from '../assets/piCamera2.png'

function GearSetup() {
	return (
		<div className="text-white md:w-[75%] mx-auto">
			<h4>About the camera setup</h4>
			<span>tech specs</span>
			<img src={setupImage} alt="camera setup" width={300} />
		</div>
	)
}

export default GearSetup
