
import PostCard from "../components/PostCard";
import PostPromptCard from "../components/PostPromptCard";
const Home = () =>{   
        return (
            <div className="flex flex-col items-center justify-center h-screen">
            <PostPromptCard />
            {/* <PostCard /> Calling and display the PostPromptCard here */}
            
          </div>
  );




}

export default Home