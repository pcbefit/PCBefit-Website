import React, {Fragment} from 'react';
import {
	Button, Container,
	Grid,
	Header, Icon,
	Segment,
} from 'semantic-ui-react';

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

const Home = () => (
	<Fragment>
		<Segment
			inverted
			textAlign='center'
			style={{minHeight: 700, padding: '1em 0em'}}
			vertical
		><HomepageHeading/>
		</Segment>
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
	</Fragment>
);

export default Home
