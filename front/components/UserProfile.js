import React  from "react";
import {Avatar, Button, Card} from 'antd';

const UserProfile = () => {
    return(
    <Card 
    actions={[
        <>
        <div key="twit">작성글<br/>0</div>
        <div key="followings">팔로잉<br/>0</div>
        <div key="followers">팔로워<br/>0</div>
        </>]}
     >
        <Card.Meta avatar={<Avatar>T</Avatar>} title="test"/>
        <br></br>
        <Button>로그아웃</Button>
            
    </Card>

    )};

export default UserProfile;