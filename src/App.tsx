import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import ReactActivation from './react-activation';
import HRMTest from './hrm';
import AntdTest from './antd';
import UmiHook from './umi-hook';
import DecoratorTest from './decorators';
import SourcemapTest from './sourcemap';
import PrebuildTest from './pre-build';
import {Menu,Row, Col} from 'antd';

function Sidebar() {
  return (
    <Menu
        style={{ width: 256 }}
        mode="inline"
      >
        <Menu.Item key='umi'>
          <Link to={'/umi'}>Umi</Link>
        </Menu.Item>
        <Menu.Item key='antd'>
          <Link to={'/antd'}>Antd</Link>
        </Menu.Item>
        <Menu.Item key='decorator'>
          <Link to={'/decorator'}>Decorator</Link>
        </Menu.Item>
        <Menu.Item key='hrm'>
          <Link to={'/hrm'}>hrm</Link>
        </Menu.Item>
        <Menu.Item key='sourcemap'>
          <Link to={'/sourcemap'}>Sourcemap</Link>
        </Menu.Item>
        <Menu.Item key='prebuild'>
          <Link to={'/prebuild'}>PrebuildTest</Link>
        </Menu.Item>
      </Menu>
  )
}

function App() {
  return (
    <Suspense fallback="loading">
      <Router>
        <Row>
          <Col span={4}>
            <Sidebar></Sidebar>
          </Col>
          <Col span={20}>
            <Switch>
              <Route path={'/umi'} component={UmiHook} exact />
              <Route path={'/antd'} component={AntdTest} exact />
              <Route path={'/decorator'} component={DecoratorTest} exact />
              <Route path={'/hrm'} component={HRMTest} exact />
              <Route path={'/sourcemap'} component={SourcemapTest} exact />
              <Route path={'/prebuild'} component={PrebuildTest} exact />
            </Switch>
          </Col>
        </Row>
      </Router>
      

      
      {/* <ReactActivation></ReactActivation>
      <HRM></HRM>
      <AntdTest></AntdTest>
      <UmiHook></UmiHook> */}
    </Suspense>
  );
}

export default App;
