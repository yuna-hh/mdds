import ListHeader from "@/components/features/board/posts/list/ListHeader";
import MobilePostList from "@/components/features/board/posts/list/MobilePostList";
import PostList from "@/components/features/board/posts/list/PostList";

const MainPage = () => {
  return (
    <div className="w-full mx-[30px] py-[40px] sm:py-[73px]">
      <div className="hidden sm:block">
        <ListHeader />
        <PostList />
      </div>
      <div className="sm:hidden">
        <MobilePostList />
      </div>
      {/* 639이하로 노출 */}
    </div>
  );
};

export default MainPage;
