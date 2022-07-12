import { EllipsisOutlined,HeartTwoTone, HeartOutlined, MessageOutlined, RetweetOutlined, MessageTwoTone } from "@ant-design/icons";
import { Avatar, Button, Card, Popover } from "antd";
import {ButtonGroup,  } from "antd/lib/button/button-group";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import PostImages from "./PostImages";
import { useState } from "react";
import React from "react";


const PostCard = ({post})=>
{
    const id = useSelector((state)=> state.user.me?.id);
    const [liked,setLiked] = useState(false);
    const [commentFormOpened, setCommmentFormOpened] =  useState(false);

    function onToggleLike ()
    {
        liked? setLiked(false): setLiked(true)
    };
    function onToggleComment ()
    {
        commentFormOpened? setCommmentFormOpened(false) : setCommmentFormOpened(true)
    };
    return(
        <div style={{marginBottom : 20 }}>
            <Card
            cover={post.Images[0] && <PostImages images={post.Images}/>}
            actions={[
                <RetweetOutlined key="retweet"/>,
                liked? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} /> : 
                <HeartOutlined key="heart" onClick={onToggleLike}/> ,
                commentFormOpened? <MessageTwoTone twoToneColor="#eb2f96" key="comment" onClick={onToggleComment}/>  
                :<MessageOutlined key="comment" onClick={onToggleComment} />,
                <Popover key="more" content={(
                    <Button.Group>
                        {id && post.User.id === id ?
                            (   
                                <> 
                                <Button type="dashed">수정</Button>
                                <Button type="dashed">삭제</Button>
                                </>
                            ) :  
                                <>
                                <Button type="danger">신고</Button> 
                                </>
                        }
                    </Button.Group>
                )}>
                    <EllipsisOutlined/>
                </Popover>
            ]}
            >
                <Card.Meta
                    avatar = {<Avatar>{post.User.nickname[0]}</Avatar>}
                    title = {post.User.nickname}
                    description={post.content}     
                />
            </Card>
            {commentFormOpened && 
            (<div>
                댓글창 열림
            </div>)
            }

        </div>
    );
}

PostCard.PropTypes = {
    post : PropTypes.shape({
        id : PropTypes.number ,
        User : PropTypes.object,
        content : PropTypes.string,
        createdAt : PropTypes.object,
        Comments : PropTypes.arrayOf(PropTypes.object),
        Images : PropTypes.arrayOf(PropTypes.object),
        
    }).isRequired,

};

export default PostCard;
