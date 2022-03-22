import React, { Dispatch, useState } from 'react'

interface State {
	isPlaying: boolean
	show: boolean
	music: {
		name: string | null
		state: 'focus' | 'relax' | 'sleep' | null
	} | null
}

const DEFAULT_STATE: State = {
	isPlaying: false,
	show: false,
	music: null
}

export const MusicContext = React.createContext<{
	state: State
	setState: Dispatch<State> | undefined
}>({ state: DEFAULT_STATE, setState: undefined })

export function MusicProvider({ children }: { children: JSX.Element }) {
	const [state, setState] = useState<State>(DEFAULT_STATE)
	const value = { state, setState }

	return <MusicContext.Provider value={value}>{children}</MusicContext.Provider>
}
