import { EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined } from "@ant-design/icons";
import { Button, Card, Popover } from "antd";
import {ButtonGroup,  } from "antd/lib/button/button-group";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

const PostCard = ({post})=>
{
    const id = useSelector((state)=> state.user.me?.id);

    return(
        <div>
            <Card
            cover={post.Images[0] && <PostImages images={post.Images}/>}
            actions={[
                <RetweetOutlined key="retweet"/>,
                <HeartOutlined key="heart"/>,
                <MessageOutlined key="comment"/>,
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
               
                    title = {post.User.nickname}
                    description={post.content}     
                />
            </Card>
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
