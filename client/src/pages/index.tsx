import React from 'react'

import { Col, Grid } from '@mantine/core'

import { Card } from '~/components'
import { useGetTracksNames } from '~/services/tracksQueries'

export default function Home() {
	const { data: focus } = useGetTracksNames('focus')
	const { data: relax } = useGetTracksNames('relax')
	const { data: sleep } = useGetTracksNames('sleep')

	return (
		<Grid justify='center' align='center' gutter={40}>
			<Col span={12} md={4}>
				<Card
					title={'Relax'}
					description={'Listen when taking a break, meditation, etc'}
					image={{ src: '/static/images/relax.svg', alt: 'some descrit' }}
					state={'relax'}
					music={{ amount: relax?.data.length || 0, names: relax?.data || [] }}
				/>
			</Col>

			<Col span={12} md={4}>
				<Card
					title={'Focus'}
					description={'Listen when working, doing creative work, etc'}
					image={{ src: '/static/images/focus.svg', alt: 'some descrit' }}
					state={'focus'}
					music={{ amount: focus?.data.length || 0, names: focus?.data || [] }}
				/>
			</Col>
			<Col span={12} md={4}>
				<Card
					title={'Sleep'}
					description={'Listen while taking a nap or sleeping'}
					image={{ src: '/static/images/sleep.svg', alt: 'some descrit' }}
					state={'sleep'}
					music={{ amount: sleep?.data.length || 0, names: sleep?.data || [] }}
				/>
			</Col>
		</Grid>
	)
}
