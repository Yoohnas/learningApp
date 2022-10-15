import styled from 'styled-components/macro'

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
            <StyledButton onClick={onClick} disabled={disabled} className={className}>
                {children}
            </StyledButton>
    )
}

const StyledButton = styled.button`
  background: white;
`
