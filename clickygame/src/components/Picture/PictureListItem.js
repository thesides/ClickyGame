import React from "react";


export const PictureListItem = (props) => {
	
	return (
	
		<div className="grid-item">
			<input name={props.name} width="100" height="100" type="image" src={props.src} onClick={props.onClick}></input>

		</div>

	);

}