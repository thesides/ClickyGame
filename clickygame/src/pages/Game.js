import React, { Component } from "react"
import { Counter } from "../../src/components/Counter"
import { PictureList, PictureListItem } from "../../src/components/Picture";



class Game extends Component {

	state = {
		pictures: ["https://img.buzzfeed.com/buzzfeed-static/static/2015-06/3/15/enhanced/webdr05/enhanced-28600-1433359052-1.jpg?downsize=715:*&output-format=auto&output-quality=auto",
		"https://img.buzzfeed.com/buzzfeed-static/static/2015-06/3/15/enhanced/webdr03/enhanced-873-1433359232-20.jpg?downsize=715:*&output-format=auto&output-quality=auto",
		"https://img.buzzfeed.com/buzzfeed-static/static/2015-06/3/15/enhanced/webdr06/enhanced-10202-1433359077-8.jpg?downsize=715:*&output-format=auto&output-quality=auto",
		"https://img.buzzfeed.com/buzzfeed-static/static/2015-06/3/15/enhanced/webdr05/enhanced-31732-1433359214-2.jpg?downsize=715:*&output-format=auto&output-quality=auto",
		"https://img.buzzfeed.com/buzzfeed-static/static/2015-06/3/15/enhanced/webdr03/enhanced-873-1433359346-24.jpg?downsize=715:*&output-format=auto&output-quality=auto",
		"https://img.buzzfeed.com/buzzfeed-static/static/2015-06/3/15/enhanced/webdr08/enhanced-6271-1433359967-9.jpg?downsize=715:*&output-format=auto&output-quality=auto",
		"https://img.buzzfeed.com/buzzfeed-static/static/2015-06/3/15/enhanced/webdr03/enhanced-859-1433359572-14.jpg?downsize=715:*&output-format=auto&output-quality=auto",
		"https://img.buzzfeed.com/buzzfeed-static/static/2015-06/3/15/enhanced/webdr04/enhanced-17721-1433360010-14.jpg?downsize=715:*&output-format=auto&output-quality=auto",
		"https://img.buzzfeed.com/buzzfeed-static/static/2015-06/3/15/enhanced/webdr13/enhanced-18077-1433360538-6.jpg?downsize=715:*&output-format=auto&output-quality=auto"],
		pointCount: 0
	};

	componentDidMount () {
		console.log(this.state);
	}

	//this method should increase the score if user clicks an image for the first time
	handleClick = (event) => {

		event.preventDefault();

		//this will let us know which image they clicked
		const imageChosen = event.currentTarget.name
		console.log(imageChosen)

		//set a variable to false for a repeat image selection
		let secondClick = false

		//if the image chosen name is the the same as a previously stored name then set the listener for a repeat click to true
		if (imageChosen === imageChosen) {
			secondClick = true
		}

		//this will grab current score and store it in a variable
		let score = this.state.pointCount

		//if the user clicks the same image twice as indicated by the boolean secondClick then set score to 0; else increment score by 1
		if (secondClick === true) {
			score = 0
		}
		else {
			score++
		}
		
		//this will change state when image is clicked by increasing score ir setting it 0 depending on user selection
		this.setState({ pointCount: score })

		console.log(this.state.pointCount)

	}


	render () {
		return (
			<div>
				<Counter 
					score={this.state.pointCount}
				/>
				<PictureList>
				{this.state.pictures.map(picture => {
					
					return (
					<PictureListItem
						key={picture}
						name={picture}
						src={picture}
						onClick={this.handleClick}
					/>
					);
				})}
				</PictureList>

			</div>
		);
	}

}

export default Game;