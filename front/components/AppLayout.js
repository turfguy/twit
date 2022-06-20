import PropTypes  from 'prop-types';
import Link from 'next/link';

const AppLayout = ({children}) =>
{
    return(
        <>
        <Link href="/">
            <a>메인페이지</a>
        </Link>
        <Link href="/profile">
            <a>프로필</a>
        </Link>
        <Link href="/signup">
            <a>회원가입</a>
        </Link>
        {children}
        </>
    );
};

AppLayout.propTypes = {
    children : PropTypes.node.isRequired,


};

export default AppLayout ;