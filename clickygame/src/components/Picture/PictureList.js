import React from "react";

export const PictureList = ({ children }) => {
	return (
		<div className="pictures">
			<ul className="pictureList">
				{children}
			</ul>
		</div>
	);
};