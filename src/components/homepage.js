import React from 'react';
import Button from '@material-ui/core/Button';
import './homepage.css';
import MinigameMenu from './MinigameMenu';
import Chalkboard from './Chalkboard.js';

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	message() {
		console.log(1);
	}

	render() {
		return (
			<div className = "homepage-container">
        
				<div className="img-mainpage">
					<div className="side-button-mainpage">
						<Button
							style={{ marginRight: '10px' }}
							size="small"
							variant="contained"
							color="secondary"
							onClick={() => this.message()}
						>
							{' '}
							sign in{' '}
						</Button>
						<Button size="small" variant="contained" color="secondary" onClick={() => this.message()}>
							{' '}
							log in{' '}
						</Button>
					</div>
					<h1 className="title-mainpage"> WISER </h1>
					<div className="button-mainpage">
						<Button size="large" variant="contained" color="primary" onClick={() => this.message()}>
							{' '}
							start{' '}
						</Button>
					</div>
					<div className="button-mainpage">
						<Button size="large" variant="contained" color="primary" onClick={() => this.message()}>
							{' '}
							select{' '}
						</Button>
					</div>
					<div className="button-mainpage">
						<Button size="large" variant="contained" color="primary" onClick={() => this.message()}>
							{' '}
							record{' '}
						</Button>
					</div>
					<div className="button-mainpage">
						<Button size="large" variant="contained" color="primary" onClick={() => this.message()}>
							{' '}
							setting{' '}
						</Button>
					</div>
          
				</div>
        <MinigameMenu/>
			</div>
		);
	}
}
export default Homepage;
