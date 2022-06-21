import React, { useCallback, useState } from "react";
import { Form , Input, Button} from 'antd';
import Link from 'next/link';

const LoginForm = () => {
    const [id, setId] = useState ('');
    const [pw, setPw] = useState ('');
    const [pwCheck, setPwCheck] = useState ('');
    const onChangeId = useCallback(()=>{
            
        setId(e.target.value);

    }, []);
    const onChangePw = useCallback(()=>{
            
        setPw(e.target.value);
        
    }, []);


    return (
        <Form>
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
            <div>
                    <br></br>
                    <Button type="primary" htmlType="submit" loading={false} >Login</Button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>

        </Form>
    ); 
}

export default LoginForm;