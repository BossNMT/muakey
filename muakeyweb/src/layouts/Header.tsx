import { Avatar, Col, Dropdown, Menu, Row, Space, Typography } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { destroyLogged, saveAuth } from '../utils/jwt';
import './styles/_header.scss';
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuProfile: JSX.Element = (
    <Menu onClick={() => logout()}>
      <Menu.Item>Đăng xuất</Menu.Item>
    </Menu>
  );
  const logout = async () => {
    await destroyLogged();
    saveAuth(null);
    navigate('/login');
  };

  return (
    <>
      <header
        style={{ position: 'sticky', zIndex: '998' }}
        className="header d-flex justify-content-between bg-color-light top-0"
      >
        <Row>
          <Col span={12}>
            <Typography.Title level={3} className="margin-0">
              {location.pathname === '/order' ? 'Danh sách đơn hàng' : ''}
            </Typography.Title>
          </Col>
          <Col span={12} className="text-right">
            <Space>
              <Dropdown overlay={menuProfile} placement="topRight" arrow>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<i className="icon icon-bell2" />} />
              </Dropdown>
            </Space>
          </Col>
        </Row>
      </header>
    </>
  );
};

export default Header;
