import { Container, SimpleGrid } from '@mantine/core'
import CommonCard, { CommonCardInterface } from '../Card/CommonCard'
import { useMediaQuery } from '@mantine/hooks'

export interface CommonGridInterface {
  list: CommonCardInterface[]
}

function CommonGrid(props: CommonGridInterface) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { list } = props
  return (
    <div
      style={{
        resize: 'horizontal',
        overflow: 'scroll',
        maxWidth: '75%',
        width: '100vw',
        maxHeight: '70vh',
      }}
    >
      <SimpleGrid cols={isMobile ? 1 : 5} style={{ width: '100%' }}>
        {list.map((data) => {
          return (
            <CommonCard
              text={data.text}
              subText={data.subText}
              hasButton={data.hasButton}
              buttonText={data.buttonText}
              img={data.img}
              cardWidth={data.cardWidth || '100%'}
              cardHeight={data.cardHeight || '90%'}
            />
          )
        })}
      </SimpleGrid>
    </div>
  )
}

export default CommonGrid
