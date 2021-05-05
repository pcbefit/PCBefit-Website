import { createMedia } from '@artsy/fresnel';
import React from 'react';
import {
	Grid,
	Segment,
	Container
} from 'semantic-ui-react';

const {MediaContextProvider, Media} = createMedia({
	breakpoints: {
		mobile: 0,
		tablet: 768,
		computer: 1024,
	},
});

const ChartButton = () => {
	return <Media greaterThan={'mobile'} className="grid">
		<Grid centered columns={2}>
			<OptionButton>Chart</OptionButton>
		</Grid>
	</Media>;
};

const OptionButton = (props) => {
	return <Grid.Column>
		<div data-aos="fade-right">
			<Segment textAlign="center">
				{props.children}
			</Segment>
		</div>
	</Grid.Column>;
};

export const PCDiff = () => {
	return <MediaContextProvider>
		<Segment inverted
		         textAlign="center"
		         style={{minHeight: 700, padding: '1em 0em'}}
		         vertical>

			<Container style={{margin: '4em 0em 1em 0em'}}>
				<div>Options:</div>
			</Container>

			<Grid centered columns={2}>
				<Grid.Row>
					<OptionButton>Add New</OptionButton>
				</Grid.Row>
				<Grid.Row>
					<OptionButton>Save</OptionButton>
				</Grid.Row>
			</Grid>
			<ChartButton/>
		</Segment>
	</MediaContextProvider>;
};
