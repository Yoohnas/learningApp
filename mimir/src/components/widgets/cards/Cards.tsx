import {Outlet} from 'react-router-dom'
interface Props {

}

export const Cards = ({}: Props) => {
    return (
        <div>
            <Outlet/>
        </div>
    )
}