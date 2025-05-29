import ListHeader from "@/components/features/board/posts/list/ListHeader";
import PostList from "@/components/features/board/posts/list/PostList";

const MainPage = () => {
  return (
    <div className="w-full mx-[30px] pt-[40px] sm:pt-[73px]">
      <ListHeader />
      <PostList />
    </div>
  );
};

export default MainPage;
