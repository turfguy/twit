import PropTypes  from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Space, Row, Col} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, SearchOutlined, AudioOutlined, ExperimentTwoTone, ProfileTwoTone, IdcardTwoTone} from '@ant-design/icons';
import 'antd/dist/antd.css';



const AppLayout = ({children}) =>
{
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
            <Row>
                <Col xs={24} md={6}>
                    왼쪽메뉴
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    오른쪽메뉴
                </Col>

            </Row>
  
        </div>
    );
};

AppLayout.propTypes = {
    children : PropTypes.node.isRequired,


};


export default AppLayout ;