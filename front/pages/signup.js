import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import { useCallback, useState } from "react";
import { Checkbox, Form, Input,  Button} from 'antd';
import styled from 'styled-components';
import Password from "antd/lib/input/Password";
import useInput from "../hooks/useInput";

const errorMessage = styled.div`
    color : red;

`;

const SignUp = () => {
    const [id,onChangeId] = useInput('');
    const [nick,onChangeNick] = useInput('');
    const [pw,onChangePw] = useInput('');
    const [pwCheck, setPwCheck] = useState('');
    const [pwError,setPwError] = useState(false);
    const [termError, setTermError] = useState(false);
    const onChangePwCheck = useCallback((e)=>{
        setPwCheck(e.target.value);
        setPwError(e.target.value !== pw );

    },[pw]);
    const [term, setTerm] = useState('');
    const onChangeTerm = useCallback((e)=>
    {
        setTerm(e.target.checked);
        setTermError(false);

    })
    const onSubmit = useCallback ((e)=>{
        if (pw !== pwCheck)
        {
            return setPwError(true);
        }
        if(!term)
        {
            return setTermError(true);
        }
        console.log(id, nick, pw);
    },[pw,pwCheck,term]);

    return (
        <AppLayout>
        <Head>
            <title>회원가입</title>
        </Head>
        <Form onFinish={onSubmit}>
            <div>
                <label htmlFor="user-id" >아이디</label> 
                <br/>
                <Input name="user-id" value={id} required onChange={onChangeId} />
            </div>
            <div>
                <label htmlFor="user-nick" >닉네임</label> 
                <br/>
                <Input name="user-nick" value={nick} required onChange={onChangeNick} />
            </div>
            <div>
                <label htmlFor="user-id" >비밀번호</label> 
                <br/>
                <Input name="user-pw" value={pw}  type="password" required onChange={onChangePw} />
            </div>
            <div>
                <label htmlFor="user-id" >비밀번호확인</label> 
                <br/>
                <Input
                  name = "user-pw-check"
                  type="password"
                  value={pwCheck}
                  required
                  onChange={onChangePwCheck}
                  />
                {pwError && <errorMessage>비밀번호가 일치하지 않습니다!</errorMessage>}
            </div>
            <div>
                <br></br>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>개인정보 유출에 동의합니다.</Checkbox>
                {termError && <errorMessage >약관에 동의하셔야 합니다. </errorMessage> 
                }
            </div>
            <div stle={{marginTop : 10 }}>
                    <Button type="primary" htmlType="submit"> 가입하기 </Button>
            </div>
        </Form>
        </AppLayout>
    );
}

export default SignUp;