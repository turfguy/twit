import React, { useCallback }  from "react";
import {Avatar, Button, Card, Form} from 'antd';
import { useDispatch } from 'react-redux';
import { loginAction,logoutAction } from "../reducers";
import styled from "styled-components";

const style = styled.div`
    marginTop: 
`;
const UserProfile = () => {
const dispatch = useDispatch();

const onLogOut = useCallback(()=>{
    dispatch(logoutAction());
  
},[])

    return(
    <>
    <Card 
    style={{marginTop: '10px'}}
    actions={[
        <>
        <div key="twit">작성글<br/>0</div>
        <div key="followings">팔로잉<br/>0</div>
        <div key="followers">팔로워<br/>0</div>
        </>]}
     >
        <Card.Meta avatar={<Avatar>T</Avatar>} title="test"/>
        <br></br>
        <Button Button type="primary" onClick={onLogOut} loading={false}>로그아웃</Button>
            
    </Card>
    </>
    )};

export default UserProfile;