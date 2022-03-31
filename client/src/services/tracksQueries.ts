import { useMutation, useQuery } from 'react-query'

import { API } from '~/config/httpClient'

async function getTracksName(type: string) {
	return API.get(`/tracks/${type}`)
}

export async function postFavoriteTrack(musicName: string) {
	return API.post(`/tracks/favorite`, {
		musicName
	})
}

export function useGetTracksNames(type: string) {
	return useQuery(['tracks-name', type], () => getTracksName(type))
}

export function useFavoriteTracks(musicName: string) {
	return useMutation(['favorite-tracks', musicName], () =>
		postFavoriteTrack(musicName)
	)
}
