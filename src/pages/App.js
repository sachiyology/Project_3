import React, { useState, useEffect } from 'react';
export default function App(props) {
	const [bookmarks, setBookmarks] = useState([]);
	const [singleBookmark, setBookmark] = useState({
		name: '',
		role: ''
	});
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/bookmarks'); // <===== Postman Query
				const data = await response.json(); // Receive data turn it into a js object or array
				setBookmarks(data); // Store that JS Object or Array
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
	const handleClick = async e => {
		try {
			const response = await fetch('/api/bookmarks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: 'Santos',
					role: 'Super Awesome Student'
				})
			});
			const data = await response.json();
			setBookmarks([...bookmarks, data]);
			setBookmark(data);
		} catch (error) {
			console.error(error);
		}
	};
	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/bookmarks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(singleBookmark)
			});
			const data = await response.json();
			setBookmarks([...bookmarks, data]);
			setBookmark({
				name: '',
				role: ''
			});
		} catch (error) {
			console.error(error);
		}
	};
	const handleChange = e => {
		setBookmark({ ...singleBookmark, [e.target.id]: e.target.value });
	};
	return (
		<div className="AppPage">
			This is the {props.page} page
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					id="name"
					value={singleBookmark.title}
					onChange={handleChange}
				/>
				<input
					type="text"
					id="role"
					value={singleBookmark.url}
					onChange={handleChange}
				/>
				<input type="submit" value="Submit" />
			</form>
			<ul>
				{bookmarks.map(bookmark => {
					return (
						<li key={bookmark._id}>
							The bookmark is named {bookmark.title} and its role is {bookmark.url}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
