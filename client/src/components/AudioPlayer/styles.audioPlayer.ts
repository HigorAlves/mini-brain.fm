import { createStyles } from '@mantine/core'

interface Props {
	showPlayer: boolean
}

export default createStyles((theme, { showPlayer }: Props) => ({
	container: {
		width: '100vw',
		display: showPlayer ? 'flex' : 'none',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
		position: 'fixed',
		bottom: 0,
		height: 80,
		backgroundColor: 'rgb(0 0 0 / 5%)'
	}
}))
