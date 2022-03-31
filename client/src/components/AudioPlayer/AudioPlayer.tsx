import React, { useEffect, useRef, useState } from 'react'

import { Badge, Button, Group, Paper } from '@mantine/core'
import { useMutation } from 'react-query'

import { useMusic } from '~/hooks/useMusic'
import {
	postFavoriteTrack,
	useFavoriteTracks,
	useGetTracksNames
} from '~/services/tracksQueries'

import useStyles from './styles.audioPlayer'

export function AudioPlayer() {
	const { state, setState } = useMusic()
	const { classes } = useStyles({ showPlayer: state.show })
	// @ts-ignore
	const { data: music } = useGetTracksNames(state.music?.state)
	const [soundUrl, setSoundUrl] = useState<string>()
	const audioPlayer = useRef<HTMLAudioElement>(null)
	const mutation = useMutation((musicName: string) =>
		postFavoriteTrack(musicName)
	)

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
					state: state.music?.state as any,
					name: randomMusic
				}
			})
		}
	}

	function setAsFavorite() {
		mutation.mutate(state.music?.name as string)
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
				<Button color={'cyan'} variant='light' onClick={setAsFavorite}>
					Favorite
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
