import { useParams } from 'react-router-dom'

type CardEditorParams = {
	id: string
}

interface Props {

}

export const CardEditor = ({  }: Props) => {
	const { id } = useParams<CardEditorParams>()
	return (
		<div>
			Cardeditor {id}
		</div>
	)
}
