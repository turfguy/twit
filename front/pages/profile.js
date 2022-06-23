import AppLayout from "../components/AppLayout";
import NickNameEditForm  from "../components/NickNameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {

    const followerList =[{nickname : 'nick'},{nickname : 'bob'}, {nickname : 'jack'}]
    const followingList =[{nickname : 'nick'},{nickname : 'bob'}, {nickname : 'jack'}]

    return (
        <>
        <AppLayout>
            <NickNameEditForm/>
            <FollowList header="팔로워 목록" data={followerList}/>
            <FollowList header="팔로잉 목록" data={followingList}/>
                  
        </AppLayout>
            </>

           );
}

export default Profile