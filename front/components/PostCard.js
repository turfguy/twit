import { EllipsisOutlined,HeartTwoTone, HeartOutlined, MessageOutlined, RetweetOutlined, MessageTwoTone } from "@ant-design/icons";
import { Avatar, Button, Card, List, Popover,Comment } from "antd";
import {ButtonGroup,  } from "antd/lib/button/button-group";
import { useSelector } from "react-redux";
import propTypes from 'prop-types';
import PostImages from "./PostImages";
import { useState } from "react";
import React from "react";
import CommentForm from "./CommentForm";


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
                commentFormOpened? <MessageTwoTone twoToneColor="#00BFFF" key="comment" onClick={onToggleComment}/>  
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
                <CommentForm post={post}/>
                
                <List
                    header={`${post.Comments.length}개의 댓글`}
                    itemLayout="horizontal"
                    dataSource={post.Comments}
                    renderItem= {(item)=>(
                        <li>
                            <Comment
                                author={item.User.nickname}
                                avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                content={item.content}
                            />
                        </li>
                )}
                 />
            </div>)
            }

        </div>
    );
}

PostCard.propTypes = {
    post : propTypes.shape({
        id : propTypes.number ,
        User : propTypes.object,
        content : propTypes.string,
        createdAt : propTypes.object,
        Comments : propTypes.arrayOf(propTypes.object),
        Images : propTypes.arrayOf(propTypes.object),
        
    }).isRequired,

};

export default PostCard;
