import React from 'react'
import { Layout, Menu } from 'antd';
import {
    CalendarOutlined,
    FlagOutlined,
    GroupOutlined,
    HomeOutlined,
    PartitionOutlined,
    DoubleLeftOutlined,
    ExperimentOutlined,
    QuestionCircleOutlined,
} from '@ant-design/icons';
import { navigate } from 'gatsby';

const { Header, Content, Footer, Sider } = Layout;

const LayoutPage = ({ section, children }) => {


    const goSection = ({ key }) => {
        navigate(key)
    }

    return (
        <Layout className='h-screen'>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo"></div>
                <Menu theme="dark" mode="horizontal" selectedKeys={`${[section]}`}>
                    <Menu.Item onClick={goSection} key="/home" icon={<HomeOutlined />}>
                        Home
                    </Menu.Item>
                    <Menu.Item onClick={goSection} key="/about-germany" icon={<FlagOutlined />}>
                        Acerca de Alemania
                    </Menu.Item>
                    <Menu.Item onClick={goSection} key="/groups" icon={<GroupOutlined />}>
                        Grupos
                    </Menu.Item>
                    <Menu.Item onClick={goSection} key="/countries" icon={<PartitionOutlined />}>
                        Paises
                    </Menu.Item>
                    <Menu.Item onClick={goSection} key="/calendar" icon={<CalendarOutlined />}>
                        Calendario
                    </Menu.Item>
                    <Menu.Item onClick={goSection} key="/mexico-en-el-mundial" icon={<QuestionCircleOutlined />}>
                        México en el mundial
                    </Menu.Item>
                    <Menu.Item onClick={goSection} key="/history" icon={<DoubleLeftOutlined />}>
                        Historia
                    </Menu.Item>
                    <Menu.Item onClick={goSection} key="/legends" icon={<ExperimentOutlined />}>
                        Leyendas
                    </Menu.Item>
                </Menu>
            </Header>
            <Layout className="site-layout">
                <Content className='overflow-y-auto overflow-x-hidden' style={{ margin: '24px 16px 0'}}>
                    <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                        <br />
                        {children}
                        <br />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Alemania ©2006 Creado por @Zet_MFA</Footer>
            </Layout>
        </Layout>
    )
}

export default LayoutPage