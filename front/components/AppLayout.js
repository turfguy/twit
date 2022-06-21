import PropTypes  from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Space, Row, Col} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, SearchOutlined, AudioOutlined, ExperimentTwoTone, ProfileTwoTone, IdcardTwoTone} from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useState } from 'react';
import UserProfile from '../components/UserProfile.js'
import LoginForm from '../components/LoginForm.js'


const AppLayout = ({children}) =>
{
    const [isLog,setLog] = useState(false);

    return(
        <div>
            <Menu mode='horizontal'>
                <Menu.Item  icon={<ExperimentTwoTone />}>
                <Link href="/">
                    <a>
                        실험실
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
                    {isLog ? <UserProfile/> : <LoginForm/>}
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

AppLayout.propTypes = {
    children : PropTypes.node.isRequired,


};


export default AppLayout ;