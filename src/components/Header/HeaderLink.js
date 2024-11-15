import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLink = ({ linkUrl, linkName }) => (
	<li className="nav-item">
		<Link className="nav-link js-scroll-trigger" to={linkUrl}>{linkName}</Link>
	</li>
);

export default HeaderLink;

