import React, {Fragment, useEffect, useState} from 'react';

import Home from './components/Home';
import Nav from "./components/Nav/Nav";
import {PCDiff} from "./components/PCDiff/PCDiff";

const initAOS = () => {
	const AOS = window.AOS;
	AOS.init({
		duration: 1200,
	});
};

function App() {

	const [isShow, setShow] = useState(false);

	useEffect(() => {
		initAOS();


		setTimeout(()=>{
			setShow(true);
		}, 3000);
	}, []);

	return (
		<Fragment>
			<Nav>
				{!isShow &&<Home/>}
				{isShow && <PCDiff/>}
			</Nav>
		</Fragment>
	);
}

export default App;
