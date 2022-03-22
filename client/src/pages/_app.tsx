import React from 'react'

import { MantineProvider } from '@mantine/core'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Layout, LayoutTypes } from '~/layouts'

type NextPageWithLayout = NextPage & {
	layout?: LayoutTypes
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function App(props: AppPropsWithLayout) {
	const { Component, pageProps } = props
	const queryClient = new QueryClient()

	const layoutType = Component.layout ?? 'base'

	return (
		<QueryClientProvider client={queryClient}>
			<MantineProvider withGlobalStyles withNormalizeCSS>
				<Layout type={layoutType}>
					<Component {...pageProps} />
				</Layout>
			</MantineProvider>
		</QueryClientProvider>
	)
}

export default App
