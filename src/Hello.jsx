import './Hello.css';

import React from 'react';

function hello() {
	function formatName(user) {
		return user.firstName + ' ' + user.lastName;
	}

	const user = {
		firstName: 'Harper',
		lastName: 'Perez'
	};

	/**
	 *
	 * @param {*} props
	 */
	function playWithProps(props) {}

	return (
		<div className="columnHello">
			<h1>Hello, {formatName(user)}!</h1>
			<p>{user.firstName}</p>
		</div>
	);
}

export default hello;
