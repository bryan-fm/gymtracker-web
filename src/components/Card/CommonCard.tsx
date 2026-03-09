import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'

export interface CommonCardInterface {
  text: string
  subText: string
  buttonText: string
  hasButton?: boolean
  img?: string
  link?: string
  cardWidth?: string
  cardHeight?: string
}

function CommonCard(props: CommonCardInterface) {
  const {
    text,
    subText,
    buttonText,
    hasButton = false,
    img = null,
    link = null,
    cardHeight,
    cardWidth,
  } = props
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ width: props?.cardWidth || '40%' }}
    >
      {props.img != null && (
        <Card.Section>
          <Image src={props?.img} height={props?.cardHeight || '250'} fit="cover" />
        </Card.Section>
      )}

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{props.text}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {props.subText}
      </Text>

      {props.hasButton && (
        <Button
          color="orange"
          fullWidth
          mt="md"
          radius="md"
          component="a"
          href={props.link ? props.link : ''}
        >
          {props?.buttonText}
        </Button>
      )}
    </Card>
  )
}

export default CommonCard
