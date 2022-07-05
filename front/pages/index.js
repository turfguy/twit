import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard'

const Home = ()=>{
    const {isLog} = useSelector((state)=> state.user);
    const {mainPosts} = useSelector((state)=>state.post);
    return (
        <AppLayout>
            {isLog && <PostForm/> }
            {mainPosts.map( (post) => <PostCard key={post.id} post={post}/> )}
        </AppLayout>
    );
}

export default Home;