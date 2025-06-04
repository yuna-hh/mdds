import { Notify } from 'notiflix';

export async function handleCompression (file: File)  {
  const imageCompression = (await import('browser-image-compression')).default
  const heic2any = (await import("heic2any")).default

  const  options  =  { 
    maxSizeMB : 1, 
    maxWidthOrHeight : 1920, 
    useWebWorker : true,
    fileType: "image/webp"
  }
  try  { 
    if (file.type.endsWith("heic")) {
      await heic2any({blob: file, toType : "image/jpg"})
      .then((resultBlob) => {
        file = new File([resultBlob as Blob], file.name.split(".")[0]+".jpg", {type: "image/jpg"})
      })
    }
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