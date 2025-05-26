import { commentListData } from "@/types/comment";
import CommentAction from "../editor/CommentAction";
import { authStore } from "@/zustand/authStore";
import { useState } from "react";
import { formatKST } from "@/utils/format/date";
import CommentForm from "../editor/CommentForm";
import PaginateButton from "@/components/common/paginate/PaginateButton";

type CommentProps = {
  data: commentListData;
  postId: string;
  limit: number;
  page: number;
  onPageChange: (selectedPage: { selected: number }) => void;
  currentPage: number;
};

function CommentList({
  data,
  postId,
  limit,
  page,
  onPageChange,
  currentPage,
}: CommentProps) {
  const { user } = authStore();
  const [selectId, setSelectId] = useState("");
  const handleEditMode = (id: string) => {
    setSelectId(id);
  };
  const { data: comments, count } = data;
  return (
    <>
      <ul className="flex flex-col justify-center items-center gap-3">
        {comments.map((comment) =>
          selectId === comment.id ? (
            <CommentForm
              postId={postId}
              key={comment.id}
              comment={comment}
              handleEditMode={handleEditMode}
            />
          ) : (
            <li
              key={comment.id}
              className="w-full px-[16px] py-[12px] border border-main-1 rounded-lg"
            >
              <div className="flex flex-row items-center mb-[6px]">
                <span className="inline-block font-semibold ">
                  {comment.user.name}
                </span>
                <span className="ml-2 text-[14px] text-main-2">
                  {formatKST(comment.created_at)}
                </span>
                {comment.is_edited && (
                  <span className="ml-auto text-[14px] text-main-2">
                    ( 수정됨 )
                  </span>
                )}
              </div>
              <p className="whitespace-pre-wrap break-words">
                {comment.content}
              </p>
              {user?.id === comment.author && (
                <CommentAction
                  postId={comment.post_id}
                  commentId={comment.id}
                  handleEditMode={handleEditMode}
                />
              )}
            </li>
          )
        )}
      </ul>
      <PaginateButton
        pageCount={Math.ceil((data?.count ?? 0) / limit)}
        currentPage={currentPage}
        onPageChange={onPageChange}
        isReverse={true}
      />
    </>
  );
}

export default CommentList;
