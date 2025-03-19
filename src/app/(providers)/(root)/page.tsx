import ListHeader from "@/components/features/board/posts/list/ListHeader";
import PostList from "@/components/features/board/posts/list/PostList";
// export const revalidate = 0
const MainPage = () => {
  return (
    <div className="w-full">
      <ListHeader />
      <PostList />
    </div>
  );
};

export default MainPage;
