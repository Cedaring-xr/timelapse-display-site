import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type ModalProps = {
	message: string
	closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({ message, closeModal }) => {
	return (
		<div
			id="overlay"
			className="w-full h-full fixed bg-slate-800 bg-opacity-90 flex justify-center items-center z-20"
			onClick={closeModal}
		>
			<div
				id="modal-container"
				className="absolute w-5/6 md:w-3/4 max-w-[1000px] h-4/5 top-[100px] bg-slate-200 border-2 border-neutral-900 opacity-100 rounded-3xl"
			>
				<AiOutlineCloseCircle
					onClick={closeModal}
					className="text-3xl text-red-600 absolute right-8 top-6 cursor-pointer"
				/>
				<h1 className="text-xl md:text-2xl text-center m-6 mt-16 lg:mt-6">{message}</h1>
				<div id="list">
					<ul className="mt-12 list-disc ml-8 lg:ml-20">
						<li className="my-2">Fix the video display on the different time lapse projects</li>
						<li className="my-2">Creating a more flexible display for the image slider component</li>
						<li className="my-2">
							Create a better source of organizaiton and sorting for different time lapse projects
						</li>
						<li className="my-2">Create an image upload features behind a source of authentication</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Modal
