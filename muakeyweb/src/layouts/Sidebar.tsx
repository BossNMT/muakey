import React from 'react';
import { Layout } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import PermissionRoute from '../middleware/PermissionRoute';
import './styles/_sidebar.scss';
import { collapseSidebar } from '../store/common/commonSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hookStore';

const Sidebar = () => {
  const collapse = useAppSelector((state: any) => state.common.isCloseSidebar);
  const dispatch = useAppDispatch();

  const toggleLayout = (): void => {
    dispatch(collapseSidebar());
  };

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapse}
      style={{ position: 'sticky', zIndex: '999', height: '100vh' }}
      className="position-rel top-0"
    >
      <div className="display-flex justify-content-center logo">
        <div className="logo" />
      </div>
      <PermissionRoute />
      <div className="collapse-sidebar display-flex-center justify-content-center">
        <button className="toggleLayout border-none full-width cursor-pointer btn-toggle" onClick={toggleLayout}>
          {collapse ? (
            <RightOutlined className="font-size-20 primary-color" />
          ) : (
            <LeftOutlined className="font-size-20 primary-color" />
          )}
        </button>
      </div>
    </Layout.Sider>
  );
};

export default React.memo(Sidebar);
