import React from 'react';
/* import App from '../pages/App';
import About from '../pages/About';*/
import Home from '../pages/Home';
import New from '../pages/New';

const routes = [
	/* {
		Component: New,
		key: 'New',
		path: '/'
	}, */
	{
		Component: Home,
		key: 'Bookmarks',
		path: '/home'
	},
	{
		Component: New,
		key: 'New',
		path: '/'
	}
	/* {
		Component: App,
		key: 'App',
		path: '/'
	} */
	/* {
	Component: About,
	key: 'About',
	path: '/about'
	} */
];

export default routes;
