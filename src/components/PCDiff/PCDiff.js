import React, {Fragment} from 'react';
import {
	Segment,
	Container
} from 'semantic-ui-react';

export const PCDiff = () => {
	return <Fragment>
		<Segment inverted
		         textAlign='center'
		         style={{minHeight: 700, padding: '1em 0em'}}
		         vertical>

			<Container style={{margin: 50}}>
				<div data-aos="fade-right">PCDiff container</div>
			</Container>
		</Segment>
	</Fragment>;
};
