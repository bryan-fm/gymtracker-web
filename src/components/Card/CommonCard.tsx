import { Card, Image, Text, Button, Group } from '@mantine/core'
import styles from './card.module.css'
import React, { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

export interface CommonCardInterface {
  text: string
  subText: string
  buttonText?: string
  hasButton?: boolean
  img?: string
  link?: string
  cardWidth?: string
  cardHeight?: string
  backgroundColor?: string
  icon?: ReactNode
}

function CommonCard(props: CommonCardInterface) {
  const navigate = useNavigate()
  const {
    text,
    subText,
    buttonText,
    hasButton = false,
    img = null,
    link = null,
    cardHeight,
    cardWidth,
    backgroundColor,
    icon,
  } = props
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        width: cardWidth || undefined,
        height: cardHeight || undefined,
        backgroundColor: backgroundColor || 'white',
      }}
      className={styles.card}
    >
      {props.img != null && <Image src={props?.img} fit="fill" className={styles.image} />}
      {props.icon != null && props.icon}

      <Group justify="space-between" mt="md" mb="xs" style={{ minHeight: '50px' }}>
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
          style={{ minHeight: '25px' }}
          onClick={(e) => {
            if (!props.link) {
              e.preventDefault()
              return
            }
            navigate(props.link)
          }}
        >
          {props?.buttonText}
        </Button>
      )}
    </Card>
  )
}

export default CommonCard
