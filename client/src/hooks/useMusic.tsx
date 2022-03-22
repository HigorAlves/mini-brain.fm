import { useContext } from 'react'

import { MusicContext } from '~/context/musicContext'

export function useMusic() {
	const context = useContext(MusicContext)

	if (context === undefined) {
		throw new Error('useCount must be used within a CountProvider')
	}

	return context
}
