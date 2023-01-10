import React, { Suspense, useEffect } from 'react';
import { Layout, Spin } from 'antd';
const PermissionContent = React.lazy(() => import('../middleware/PermissionContent'));

const { Content } = Layout;

const loading = () => <Spin />;

const DefaultLayout = () => {

  return (
    <Layout className="site-layout" style={{ minHeight: '100vh' }}>
      <Layout className="main-layout">
        <Content style={{ overflow: 'initial' }}>
          <div className="bg-main position-rel">
            <Suspense fallback={loading()}>
              <PermissionContent />
            </Suspense>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
