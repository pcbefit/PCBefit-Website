import React, {Fragment, useEffect} from 'react';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import Nav from "./components/Nav";
import PCDiff from "./components/PCDiff";

const initAOS = () => {
	const AOS = window.AOS;
	AOS.init({
		duration: 1200,
	});
};

function App() {

	const diff = useSelector(state => state.diff);
	const chart = useSelector(state => state.chart);

	useEffect(() => {
		initAOS();
	}, []);

	return (
		<Fragment>
			<Nav>
				{!diff.isShow && !chart.isShow && <Home/>}
				{(diff.isShow || chart.isShow) && <PCDiff/>}
			</Nav>
		</Fragment>
	);
}

export default App;
