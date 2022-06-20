import PropTypes  from 'prop-types';
import Link from 'next/link';
import {Menu} from 'antd';

import 'antd/dist/antd.css';

const AppLayout = ({children}) =>
{
    return(
        <div>
            <Menu mode='horizontal'>
                <Menu.Item>
                <Link href="/">
                    <a>메인페이지</a>
                </Link>
               
                </Menu.Item>
            <Menu.Item>
                
            <Link href="/profile">
                        <a>프로필</a>
                </Link>

            </Menu.Item>
            <Menu.Item>
            <Link href="/signup">
                <a>회원가입</a>
                </Link>


            </Menu.Item>
            
            </Menu>
            {children}
        </div>
    );
};

AppLayout.propTypes = {
    children : PropTypes.node.isRequired,


};

export default AppLayout ;