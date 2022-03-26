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
import config from '../config';

const { Header, Content, Footer } = Layout;

const LayoutPage = ({ section, children }) => {


    const goSection = ({ key }) => {
        navigate(key)
    }

    return (
        <Layout className='h-screen'>
            <Header style={{ position: 'fixed', zIndex: 20, width: '100%' }}>
                <div className="logo"></div>
                <Menu style={{zIndex: 40}} theme="dark" mode="horizontal" selectedKeys={`${[section]}`}>
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
            <Layout className="site-layout" style={{zIndex: 0}}>
                <Content className='overflow-y-auto overflow-x-hidden' style={{ margin: '24px 16px 0', zIndex: 0}}>
                    <div className="site-layout-background" style={{ padding: 24, textAlign: 'center', height: "100%"}}>
                        <br />
                        {children}
                        <br />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                        <p className="mb-0 -my-4 cursor-default">Alemania ©2006 Creado por <a className="cursor-pointer" href="https://twitter.com/zet_mfa" target="_blank">@Zet_MFA</a></p>
                        <p onClick={() => navigate("/notas")} className="mb-0 -my-4 font-semibold text-zinc-600 italic text-right cursor-pointer">{config.version}</p>
                </Footer>
            </Layout>
        </Layout>
    )
}

export default LayoutPage