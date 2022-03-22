import React, { useEffect, useRef, useState } from 'react'

import { Badge, Button, Group, Paper } from '@mantine/core'

import { useMusic } from '~/hooks/useMusic'
import { useGetTracksNames } from '~/services/tracksQueries'

import useStyles from './styles.audioPlayer'

export function AudioPlayer() {
	const { state, setState } = useMusic()
	const { classes } = useStyles({ showPlayer: state.show })
	const { data: music } = useGetTracksNames(state.music?.state)
	const [soundUrl, setSoundUrl] = useState<string>()
	const audioPlayer = useRef<HTMLAudioElement>(null)

	function playOrPausePlayer() {
		if (audioPlayer.current && setState) {
			setState({
				...state,
				isPlaying: !state.isPlaying
			})

			if (state.isPlaying) {
				audioPlayer.current.pause()
			} else {
				audioPlayer.current.play()
			}
		}
	}

	function skipMusic() {
		if (music?.data && setState) {
			const randomMusic =
				music.data[Math.floor(Math.random() * music.data.length)]

			setState({
				isPlaying: true,
				show: true,
				music: {
					state: state.music?.state,
					name: randomMusic
				}
			})
		}
	}

	useEffect(() => {
		if (state.isPlaying && audioPlayer.current) {
			audioPlayer.current.play()
			setSoundUrl(
				`http://localhost:3001/tracks/${state.music?.state}/${state.music?.name}`
			)
		}
	}, [state.isPlaying, state.music?.name])

	return (
		<Paper shadow='xs' p='md' className={classes.container}>
			<Group spacing={'xs'}>
				<Button color={'grape'} variant='light' onClick={playOrPausePlayer}>
					{state.isPlaying ? 'Pause' : 'Play'}
				</Button>
				<Button color={'indigo'} variant='light' onClick={skipMusic}>
					Skip song
				</Button>
			</Group>

			<Group direction='column' spacing='xs'>
				<Badge color='indigo' variant='light'>
					Mental State: {state.music?.state || 'none'}
				</Badge>
				<Badge color='grape' variant='light'>
					Playing now: {state.music?.name || 'none'}
				</Badge>
			</Group>

			<audio
				ref={audioPlayer}
				style={{ display: 'none' }}
				controls
				autoPlay
				src={soundUrl}
			>
				Your browser does not support the
				<code>audio</code> element.
			</audio>
		</Paper>
	)
}
