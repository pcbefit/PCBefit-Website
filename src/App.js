import React, {Fragment, useEffect} from 'react';

import Home from './components/Home';

const initAOS = () => {
	const AOS = window.AOS;
	AOS.init({
		duration: 1200,
	});
};

function App() {

	useEffect(() => {
		initAOS();
	}, []);

	return (
		<Fragment>
			<Home/>
		</Fragment>
	);
}

export default App;
