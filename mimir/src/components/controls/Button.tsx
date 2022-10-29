import styled, { css } from 'styled-components/macro'

interface Props {
    onClick: () => void
    disabled?: boolean
    children: string
}

export const Button = ({onClick, disabled, children}: Props) => {
    let className = ''
    if (disabled) {
        className += ' button--disabled'
    }

    return (
        <button onClick={onClick} disabled={disabled} className={className}>
            {children}
        </button>
    )
}

export const ButtonBase = css`
  border: none;
  border-radius: 4px;
  font-size: 20px;
  color: white;
  padding: 10px;
  margin: 10px;
`

export const DefaultButton = styled.button`
  ${ButtonBase};
  background: cadetblue;

`
export const BrightButton = styled.button`
  ${ButtonBase};
  background: #73bec0;
`