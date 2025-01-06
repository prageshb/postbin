

import ApiConfig from "../api/apiConfig";
import PostCard from "../components/PostCard";
import PostPromptCard from "../components/PostPromptCard";



const Home = () =>{   
        return (
            <div className="flex flex-col items-center justify-center h-screen">
             
            <PostPromptCard />
            <ApiConfig />
            
          </div>   
  );




}

export default Home