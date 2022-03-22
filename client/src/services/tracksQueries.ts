import { useQuery } from 'react-query'

import { API } from '~/config/httpClient'

async function getTracksName(type: string) {
	return API.get(`/tracks/${type}`)
}

export function useGetTracksNames(type: string) {
	return useQuery(['tracks-name', type], () => getTracksName(type))
}
