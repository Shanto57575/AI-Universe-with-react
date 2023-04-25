/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Modal = ({ singleData }) => {
	console.log(singleData);
	const { image_link, features, integrations, description, pricing } =
		singleData;
	return (
		<div>
			<input type="checkbox" id="my-modal-5" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box w-11/12 max-w-5xl">
					<div className="card card-side bg-base-100">
						<div className="card-body w-[50%]">
							<h2 className="text-xl font-bold">
								{description ? description : "Not found"}
							</h2>
							<div className="flex justify-between">
								<div className="font-bold">
									<h1>Features</h1>
									<div className="font-normal">
										{Object.values(features || {}) &&
											Object.values(features || {}).map((val) => (
												<p>
													{val.feature_name ? val.feature_name : "Not found"}
												</p>
											))}
									</div>
								</div>
								<div className="font-bold">
									Integrations
									<div className="font-normal">
										{integrations &&
											integrations.map((inti) => <p>{inti ? inti : " "}</p>)}
									</div>
								</div>
							</div>
						</div>
						<figure className="w-[50%] h-full">
							<img src={image_link ? image_link : "Not found"} alt="Movie" />
						</figure>
					</div>
					<div className="modal-action">
						<label htmlFor="my-modal-5" className="btn">
							Yay!
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
