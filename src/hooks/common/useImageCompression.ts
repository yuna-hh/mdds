import imageCompression from 'browser-image-compression';
import { Notify } from 'notiflix';

export async function handleCompression (file: File)  {
  const  options  =  { 
    maxSizeMB : 1, 
    maxWidthOrHeight : 1920, 
    useWebWorker : true,
    fileType: "image/webp"
  } 
  try  { 
    const compressedImage  = await imageCompression(file, options) ;
    const compressedImageUrl = await URL.createObjectURL(compressedImage)
    return { compressedImageUrl, compressedImage }
} catch (error) {
  console.error(error)
  Notify.failure("이미지 압축에 실패하였습니다. 다시 시도해주세요")
  return {
    compressedImageUrl: "",
    compressedImage: undefined
  }
}
}