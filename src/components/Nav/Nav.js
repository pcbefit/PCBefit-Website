import {createMedia} from '@artsy/fresnel';
import React from 'react';
import {
	Button,
	Container,
	Menu,
} from 'semantic-ui-react';

const {MediaContextProvider} = createMedia({
	breakpoints: {
		mobile: 0,
		tablet: 768,
		computer: 1024,
	},
})

const NavContainer = (props) => {
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
						<Menu.Item as='a' active>
							Home
						</Menu.Item>
						<Menu.Item position='right'>
							<Button as='a' inverted>
								Load
							</Button>
							{/*<Button as='a' inverted primary style={{marginLeft: '0.5em'}}>*/}
							{/*Save*/}
							{/*</Button>*/}
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
