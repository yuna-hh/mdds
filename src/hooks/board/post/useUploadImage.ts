import { uploadImage } from '@/service/post'
import { useMutation } from '@tanstack/react-query'

const useUploadImage = () => {
  return useMutation({
    mutationFn: async (imageFile: FormData) => uploadImage(imageFile)
  })
}

export default useUploadImage