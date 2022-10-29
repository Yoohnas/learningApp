import styled, {css} from 'styled-components/macro'

interface Props {
    onClick: () => void
    children: string
}

export const Button = ({onClick, children}: Props) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export const ButtonBase = css`
  border: none;
  border-radius: 8px;
  font-size: 20px;
  color: white;
  padding: 10px;
  margin: 10px;
`

export const DefaultButton = styled.button`
  ${ButtonBase};
  background: cadetblue;
  &:hover,
  &:focus {
    background: #73bec0;
  }
  &:active {
    color: #73bec0;
  }
`
export const DarkButton = styled.button`
  ${ButtonBase};
  width: 170px;
  background: #436e70;

  &:hover,
  &:focus {
    background: #73bec0;
  }

  &:active {
    color: #73bec0;
  }
`