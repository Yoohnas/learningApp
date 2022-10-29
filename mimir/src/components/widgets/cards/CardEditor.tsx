import {useParams} from 'react-router-dom'

type CardEditorParams = {
    id: string
}

export const CardEditor = () => {
    const {id} = useParams<CardEditorParams>()
    return (
        <div>
            Cardeditor {id}
        </div>
    )
}
