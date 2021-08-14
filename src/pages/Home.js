import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
	const [bookmarks, setBookmarks] = useState([]); // <==== Bookmarks State
	// const src = `https://www.google.com/s2/favicons?domain=`;

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/bookmarks');
				const data = await response.json();
				setBookmarks(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="HomePage">
			<ul className="list-group list-group-flush">
				{bookmarks.map(bookmark => {
					return (
						<li key={bookmark._id} className="list-group-item">
							<Link to={`/${bookmark._id}`}>
								<h3 className="container">{bookmark.title}</h3>
							</Link>

							<img
								src={`https://www.google.com/s2/favicons?domain=${bookmark.url}`}
								alt="icon"
							/>

							<a href={`${bookmark.url}`}>{bookmark.url}</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
