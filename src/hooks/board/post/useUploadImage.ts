import { uploadImage } from '@/service/post'
import { useMutation } from '@tanstack/react-query'

export default function useUploadImage() {
  return useMutation({
    mutationFn: async (imageFile: FormData) => uploadImage(imageFile)
  })
}