import React, { Component } from 'react';
import JoinRoomPage from './JoinRoomPage';
import CreateRoomPage from './CreateRoomPage';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	Routes,
} from 'react-router-dom';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<Routes>
					<Route exact path="/" element={<p> This is the Home Page </p>} />
					<Route path="/join" element={<JoinRoomPage />} />
					<Route path="/create" element={<CreateRoomPage />} />
				</Routes>
			</Router>
		);
	}
}
