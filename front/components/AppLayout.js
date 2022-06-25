import Link from 'next/link';
import {Menu, Input, Space, Row, Col} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, SearchOutlined, AudioOutlined, ExperimentTwoTone, ProfileTwoTone, IdcardTwoTone, TwitterCircleFilled, TwitterSquareFilled} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useState, useCallback } from 'react';
import UserProfile from '../components/UserProfile.js'
import LoginForm from '../components/LoginForm.js'
import { useSelector } from 'react-redux';
import wrapper from '../store/configureStore.js';



const AppLayout = ({children}) =>
{
    const isLog = useSelector((state)=> state.user.isLog);

    return(
        <div>
            <Menu mode='horizontal'>
                <Menu.Item  icon={<TwitterSquareFilled />}>
                <Link href="/">
                    <a>
                        트위터맛
                    </a>
                </Link>
               
                </Menu.Item>
            <Menu.Item icon={<ProfileTwoTone />}>
                
            <Link href="/profile">
                        <a>프로필</a>
                </Link>

            </Menu.Item>

            <Menu.Item >
                <Input.Search enterButton style={{ marginTop : '6px'}} />
            </Menu.Item>

            <Menu.Item icon={<IdcardTwoTone />}>
            <Link href="/signup">
              
                <a>회원가입</a>
                </Link>


            </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLog ? <UserProfile  /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/turfguy" target="_blank" rel='noopener norefferer'> Made by @turfguy </a>
                </Col>

            </Row>
  
        </div>
    );
};




export default wrapper.withRedux(AppLayout);