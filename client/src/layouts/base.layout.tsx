import React, { ReactNode } from 'react'

import { Container } from '@mantine/core'

import { AppShell, AudioPlayer } from '~/components'
import { MusicProvider } from '~/context/musicContext'

interface Props {
	children: ReactNode
}

function BaseLayout({ children }: Props): JSX.Element {
	return (
		<MusicProvider>
			<>
				<AppShell>
					<Container size={'lg'}>{children}</Container>
				</AppShell>
				<AudioPlayer />
			</>
		</MusicProvider>
	)
}

export default BaseLayout
