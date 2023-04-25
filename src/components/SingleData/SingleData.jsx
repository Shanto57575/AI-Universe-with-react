/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SingleData = ({ singleData, setUniqueId }) => {
	const { id, image, name, published_in, features } = singleData;
	return (
		<div>
			<div className="card h-full bg-base-100 shadow-2xl">
				<figure>
					<img className="w-full h-full rounded-sm" src={image} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title font-bold">Features</h2>
					{features.map((feature, index) => (
						<p>
							{index + 1}. {feature}
						</p>
					))}
					<hr className="border border-slate-300" />
					<h3 className="font-bold text-2xl">{name}</h3>
					<div className="flex justify-between items-center">
						<div className="flex gap-2 items-center">
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
							<p>{published_in}</p>
						</div>
						<div>
							<label
								onClick={() => setUniqueId(id)}
								htmlFor="my-modal-5"
								className="cursor-pointer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</label>
						</div>
					</div>
					<div className="card-actions justify-end"></div>
				</div>
			</div>
		</div>
	);
};

export default SingleData;
