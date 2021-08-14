import React, { useState, useEffect } from 'react';
export default function App(props) {
	const [bookmarks, setBookmarks] = useState([]);
	const [singleBookmark, setBookmark] = useState({
		titleInput: '',
		url: ''
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
		<div className="NewPage">
			New bookmark
			<form onSubmit={handleSubmit}>
				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-default">
							Title
						</span>
					</div>
					<input
						type="text"
						id="title"
						value={singleBookmark.title}
						onChange={handleChange}
						className="form-control"
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
					/>
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span className="input-group-text" id="inputGroup-sizing-default">
							URL
						</span>
					</div>
					<input
						type="text"
						id="url"
						value={singleBookmark.url}
						onChange={handleChange}
						className="form-control"
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
					/>
				</div>
				<br />
				<input
					type="submit"
					value="Add"
					className="btn btn-secondary btn-lg btn-block"
				/>
			</form>
			<ul>
				{bookmarks.map(bookmark => {
					return (
						<li key={bookmark._id}>
							The bookmark you added is {bookmark.title} => {bookmark.url}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
