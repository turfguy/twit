import React, { useCallback, useState,useMemo } from "react";
import { Form , Input, Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import AppLayout  from "./AppLayout.js";
import {useDispatch} from 'react-redux';
import user from '../reducers/user'

const LoginForm = () => {
    const dispatch = useDispatch();
    const [id, setId] = useState ('');
    const [pw, setPw] = useState ('');
    const [pwCheck, setPwCheck] = useState ('');
    const onChangeId = useCallback((e)=>{
            
        setId(e.target.value);

    }, []);
const onChangePw = useCallback((e)=>{
            
        setPw(e.target.value);
        
    }, []);

const onSubmitForm = useCallback(()=>
    {       
            console.log(id,pw);
            dispatch(loginAction({id,pw}));    
    },[id,pw]);


    return (
        <Form onFinish={onSubmitForm}>
            <br></br>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br></br>
                <Input name="user-id" value={id} onChange={onChangeId} required/>
            </div>
            <div>
                
            <label htmlFor="user-pw">비밀번호</label>
                <br></br>
                <Input name="user-pw" value={pw}  type="password" onChange={onChangePw} required/>
            </div>
            <div style={{marginTop:20}}>
                <Button type="primary" htmlType="submit" loading={false} >Login</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>

        </Form>
    ); 
}

export default LoginForm;