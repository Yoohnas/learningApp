import { Outlet } from 'react-router-dom'
import styled from 'styled-components/macro'
import {AppBar} from "../widgets/AppBar";

export function Layout() {
	return (
		<Container>
			<AppBar />
			<Outlet />
		</Container>
	)
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`
