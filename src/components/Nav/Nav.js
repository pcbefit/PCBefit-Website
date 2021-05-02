import {createMedia} from '@artsy/fresnel';
import React from 'react';
import { useDispatch } from 'react-redux';
import {
	Button,
	Container,
	Menu,
} from 'semantic-ui-react';
import { showChart } from '../../reducers/chartSlice';

const {MediaContextProvider} = createMedia({
	breakpoints: {
		mobile: 0,
		tablet: 768,
		computer: 1024,
	},
})

const NavContainer = (props) => {
	const dispatch = useDispatch();
	const {children} = props;
	return (
		<>
				<Menu
					fixed={'top'}
					inverted
					pointing
					secondary
					size='large'
					style={{background: 'black'}}
				>
					<Container>
						<Menu.Item as='a' active style={{cursor:'default'}}>
							Home
						</Menu.Item>
						<Menu.Item position='right'>
							<Button as='a' inverted>
								Load
							</Button>
							<Button as='a' inverted primary style={{marginLeft: '0.5em'}} onClick={()=>{
								dispatch(showChart());
							}}>
								Chart(0)
							</Button>
						</Menu.Item>
					</Container>
				</Menu>

			{children}
		</>
	);

};

const Nav = (props) => {
	const {children} = props;
	return (
		<MediaContextProvider>
			<NavContainer>{children}</NavContainer>
		</MediaContextProvider>
	);
}

export default Nav
