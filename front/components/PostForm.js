import {Button, Form, Input} from 'antd'
import { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../reducers/post'

const PostForm = () =>
{   
    const {imagePaths} =  useSelector((state)=> state.post);
    const dispatch = useDispatch();
    const imageInput = useRef();
    const [text, setText] = useState('');
    const onChangeText = useCallback((e)=>{
        setText(e.target.value);
    },[]);
    const onSubmit = useCallback(()=>{
        dispatch(addPost);
        setText ('');
    },[]);
    const onClickImageUpload = useCallback(()=>{
        imageInput.current.click();
    },[imageInput.current]);
    return(
        <Form style={{margin: '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={1000} placeholder="마 한마디해라"/>
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button style={{marginTop: '3px'}} onClick={onClickImageUpload}> 이미지 업로드 </Button>
                <Button type="primary" style={{ float: 'right', marginTop: '3px' }} htmlType="submit">작성</Button>    
            </div>
            <div>
                {imagePaths.map((v)=>{
                    <>
                    <div key={v} style={{ display: 'inline-block'}}>
                        <img src={v} sytle={{width: '200px'}} alt={v} />
                    </div>
                    <div>
                        <Button>제거</Button>
                    </div>
                    </>
                })}
            </div>
        </Form>
    )
}

export default PostForm;
