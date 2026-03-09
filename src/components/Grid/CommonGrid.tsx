import { Container, SimpleGrid } from '@mantine/core'
import CommonCard, { CommonCardInterface } from '../Card/CommonCard'

export interface CommonGridInterface {
  list: CommonCardInterface[]
}

function CommonGrid(props: CommonGridInterface) {
  const { list } = props
  return (
    <div style={{ resize: 'horizontal', overflow: 'scroll', maxWidth: '75%', maxHeight: '70vh' }}>
      <SimpleGrid cols={5} style={{ width: '100%' }}>
        {list.map((data) => {
          return (
            <CommonCard
              text={data.text}
              subText={data.subText}
              hasButton={data.hasButton}
              buttonText={data.buttonText}
              img={data.img}
              cardWidth="80%"
              cardHeight="90%"
            />
          )
        })}
      </SimpleGrid>
    </div>
  )
}

export default CommonGrid
