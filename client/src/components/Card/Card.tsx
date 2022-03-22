import React from 'react'

import { Badge, Button, Card as Container, Group, Text } from '@mantine/core'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useMusic } from '~/hooks/useMusic'

type Props = {
	title: string
	description: string
	state: 'focus' | 'relax' | 'sleep'
	music: {
		amount: number
		names: Array<string>
	}
	image: {
		src: string
		alt: string
	}
}

export function Card({ title, description, image, state, music }: Props) {
	const router = useRouter()
	const { setState } = useMusic()

	async function selectMindState() {
		const randomMusic =
			music.names[Math.floor(Math.random() * music.names.length)]

		if (setState) {
			setState({
				isPlaying: true,
				show: true,
				music: {
					state,
					name: randomMusic
				}
			})
			await router.push('/player')
		}
	}

	return (
		<Container shadow='md' p='lg'>
			<Container.Section>
				<Image
					src={image.src}
					width={300}
					height={200}
					alt={image.alt}
					priority
				/>
			</Container.Section>

			<Group position='apart' style={{ marginBottom: 5, marginTop: 10 }}>
				<Text weight={500}>{title}</Text>
				<Badge color='grape' variant='light'>
					{music.amount} Musics
				</Badge>
			</Group>

			<Text size='sm'>{description}</Text>

			<Button
				variant='light'
				color='grape'
				fullWidth
				mt={20}
				onClick={selectMindState}
			>
				Start the session
			</Button>
		</Container>
	)
}
