// import { deletePost } from '@/service/post'
// import { useRouter } from 'next/navigation'
// import Notiflix, { Notify } from 'notiflix'

// export function useDeletePost() {
//   const router = useRouter()
//   const handleDeletePost = async(postId: string) => {
//     const response = await deletePost(postId)
//     Notiflix.Confirm.show(
//       "mmds",
//       "게시글을 삭제하시겠습니까?",
//             "Yes",
//             "No",
//             () => {
//               Notify.success("게시글 삭제를 완료했습니다")
//               router.push("/");
//             },
//             () => {
//               return;
//             }
//     )
//     if(response.message === "게시글 삭제를 실패하였습니다") {
//       return Notify.failure("게시글 삭제를 실패하였습니다")
//     }
//     router.push("/")
//   }
//   return handleDeletePost
// }