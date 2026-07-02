import { Group, Text } from '@mantine/core'
import { IconUpload, IconX, IconPolaroid } from '@tabler/icons-react'
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone'

export function FileDialog(props: Partial<DropzoneProps>) {
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
      w={'100%'}
      h={'16vh'}
    >
      <Group justify="center" gap="xl" mih={'16vh'} style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload size={52} color="var(--mantine-color-blue-6)" />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX size={52} color="var(--mantine-color-red-6)" />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconPolaroid size={52} color="var(--mantine-color-dimmed)" />
        </Dropzone.Idle>

        <div style={{ cursor: 'pointer', marginBottom: '2vh' }}>
          <Text size="xl" inline>
            Arraste ou clique para adicionar uma imagem.
          </Text>
        </div>
      </Group>
    </Dropzone>
  )
}
