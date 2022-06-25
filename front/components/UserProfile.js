import React, { useCallback }  from "react";
import {Avatar, Button, Card} from 'antd';
import { useDispatch } from 'react-redux';
import { loginAction,logoutAction } from "../reducers";

const UserProfile = () => {
    const dispatch = useDispatch();

const onLogOut = useCallback(()=>{
    dispatch(logoutAction());
    console.log('clicked');
},[])

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
        <Button Button type="primary" htmlType="submit" loading={false}>로그아웃</Button>
            
    </Card>

    )};

export default UserProfile;