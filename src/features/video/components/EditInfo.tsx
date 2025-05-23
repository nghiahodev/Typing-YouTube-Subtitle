import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Typography,
} from '@mui/material'
import TextEditor from '~/common/components/TextEditor'
import { Controller, useForm } from 'react-hook-form'
import { formatDuration } from '../videoUtil'
import { zodResolver } from '@hookform/resolvers/zod'
import videoSchemas, { EditInfoInput } from '../videoSchemas'
import { VideoType } from '~/common/types'

interface EditInfoProps {
  video: VideoType
}

const EditInfo = ({ video }: EditInfoProps) => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(videoSchemas.editInfo),
    defaultValues: {
      summary: video.summary,
    },
  })

  const onSubmit = async (input: EditInfoInput) => {
    console.log(input)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl fullWidth margin='normal'>
        <FormLabel>Tiêu đề</FormLabel>
        <Typography
          variant='body1'
          sx={{
            bgcolor: 'action.disabledBackground',
            px: 2,
            py: 1,
            borderRadius: 1,
            pointerEvents: 'none', // tránh tương tác
            '&:hover': {
              bgcolor: 'action.disabledBackground', // giữ nguyên khi hover
            },
          }}
        >
          {video.title}
        </Typography>
      </FormControl>

      <FormControl fullWidth margin='normal'>
        <FormLabel>Danh mục</FormLabel>
        <Typography
          variant='body1'
          sx={{
            bgcolor: 'action.disabledBackground',
            px: 2,
            py: 1,
            borderRadius: 1,
            pointerEvents: 'none', // tránh tương tác
            '&:hover': {
              bgcolor: 'action.disabledBackground', // giữ nguyên khi hover
            },
          }}
        >
          {video.categories.join(', ') || 'Không có danh mục'}
        </Typography>
      </FormControl>

      <FormControl fullWidth margin='normal'>
        <FormLabel>Thời lượng</FormLabel>
        <Typography
          variant='body1'
          sx={{
            bgcolor: 'action.disabledBackground',
            px: 2,
            py: 1,
            borderRadius: 1,
            pointerEvents: 'none', // tránh tương tác
            '&:hover': {
              bgcolor: 'action.disabledBackground', // giữ nguyên khi hover
            },
          }}
        >
          {formatDuration(video.duration + 1)}
        </Typography>
      </FormControl>
      <Controller
        control={control}
        name='summary'
        render={({ field, fieldState }) => (
          <FormControl fullWidth margin='normal' error={!!fieldState?.error}>
            <FormLabel sx={{ marginBottom: '8px', fontWeight: 500 }}>
              Nội dung chính
            </FormLabel>
            <TextEditor
              onChange={field.onChange}
              value={field.value}
              placeholder='Nội dung chính của video...'
            />
            {fieldState?.error && (
              <FormHelperText>{fieldState.error.message}</FormHelperText>
            )}
          </FormControl>
        )}
      />
      <FormControl
        margin='normal'
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Button variant='outlined' type='submit'>
          {`Chỉnh sửa thông tin`}
        </Button>
      </FormControl>
    </form>
  )
}

export default EditInfo
