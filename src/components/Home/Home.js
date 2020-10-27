import {createMedia} from '@artsy/fresnel';
import React, {Component} from 'react';
import {
	Button,
	Container,
	Grid,
	Header,
	Icon,
	Menu,
	Segment,
} from 'semantic-ui-react';

const {MediaContextProvider} = createMedia({
	breakpoints: {
		mobile: 0,
		tablet: 768,
		computer: 1024,
	},
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({mobile}) => (
	<Container text>
		<Header
			as='h1'
			content='PCBefit'
			inverted
			style={{
				fontSize: mobile ? '2em' : '4em',
				fontWeight: 'normal',
				marginBottom: 0,
				marginTop: mobile ? '1.5em' : '3em',
			}}
		/>
		<Header
			as='h2'
			content='Get your PC components fitted'
			inverted
			style={{
				fontSize: mobile ? '1.5em' : '1.7em',
				fontWeight: 'normal',
				marginTop: mobile ? '0.5em' : '1.5em',
			}}
		/>
		<Button primary size='huge'>
			Get Started
			<Icon name='right arrow'/>
		</Button>
	</Container>
)

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
	render() {
		const {children} = this.props;

		return (
				<>
					<Segment
						inverted
						textAlign='center'
						style={{minHeight: 700, padding: '1em 0em'}}
						vertical
					>
						<Menu
							fixed={'top'}
							inverted
							pointing
							secondary
							size='large'
							style={{background:'black'}}
						>
							<Container >
								<Menu.Item as='a' active>
									Home
								</Menu.Item>
								<Menu.Item position='right'>
									<Button as='a' inverted>
										Load
									</Button>
									<Button as='a' inverted primary style={{marginLeft: '0.5em'}}>
										Save
									</Button>
								</Menu.Item>
							</Container>
						</Menu>
						<HomepageHeading/>
					</Segment>

				{children}
				</>
		)
	}
}

const ResponsiveContainer = ({children}) => (
	/* Heads up!
	 * For large applications it may not be best option to put all page into these containers at
	 * they will be rendered twice for SSR.
	 */
	<MediaContextProvider>
		<DesktopContainer>{children}</DesktopContainer>
	</MediaContextProvider>
)

const Home = () => (
	<ResponsiveContainer>
		<Segment style={{padding: '8em 0em'}} vertical>
			<Grid container stackable verticalAlign='middle'>
				<Grid.Row>
					<Grid.Column width={8}>
						<Header as='h3' style={{fontSize: '2em'}}>
							Text PlaceHolder
						</Header>
						<p style={{fontSize: '1.33em'}}>
							Text PlaceHolder
						</p>
						<Header as='h3' style={{fontSize: '2em'}}>
							Text PlaceHolder
						</Header>
						<p style={{fontSize: '1.33em'}}>
							Text PlaceHolder
						</p>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column textAlign='center'>
						<Button size='huge'>Check Them Out</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>

	</ResponsiveContainer>
)

export default Home
