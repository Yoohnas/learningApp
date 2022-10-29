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
  background: cadetblue;
  font-size: 22px;
  color: white;
  padding: 4px 8px;
`

export const DefaultButton = styled.button`
  ${ButtonBase};
`