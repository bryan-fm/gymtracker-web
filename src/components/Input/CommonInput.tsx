import { Container, Input, SimpleGrid, Text } from '@mantine/core'
import CommonCard, { CommonCardInterface } from '../Card/CommonCard'
import { useMediaQuery } from '@mantine/hooks'

export interface CommonInputInterface {
  type: string
  required: boolean
  label: string
  onBlur: any
  width?: number | string
}

function CommonInput(props: CommonInputInterface) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { type = 'text', required, label, width, onBlur } = props
  return (
    <>
      <div>
        <Text c="white">{props.label}</Text>
        <Input
          type={props.type}
          required={props.required}
          style={{ width: props.width || 200 }}
          onBlur={(e) => onBlur(e)}
          styles={{
            input: { color: 'white', backgroundColor: '#0f172a' }, // Actual input field
          }}
        ></Input>
      </div>
    </>
  )
}

export default CommonInput
