import styled from 'styled-components/macro'

interface Props {
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

export const Input = ({value, onChange, placeholder}: Props) => (
    <InputBase type="text" value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}/>
)

const InputBase = styled.input`
  flex-direction: column;
  display: flex;
  border: none;
  border-bottom: 3px solid cadetblue;
  width: 350px;
  font-size: 25px;
  color: cadetblue;
  margin: 15px;
`
