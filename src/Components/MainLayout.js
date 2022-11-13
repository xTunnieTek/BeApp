import {Layout} from 'antd';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const {Content} = Layout;


function MainLayout({children}) {
  return (
    <Layout>
        <Header></Header>
    <Layout>
      <Sidebar></Sidebar>
    <Layout>
      <Content>
        {children}
      </Content>
    </Layout>
    </Layout>
  </Layout>


  )
}

export default MainLayout