import Loading from "@/components/common/status/Loading";
import PostWriteForm from "@/components/features/board/posts/editor/PostWriteForm";
import React, { Suspense } from "react";

const PostWritePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="pt-[64px]">
        <PostWriteForm />
      </div>
    </Suspense>
  );
};

export default PostWritePage;
