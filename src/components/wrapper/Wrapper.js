import React from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Layout from '../layout/Layout';
import AboutUs from '../pages/aboutUs';
import GnomeList from '../pages/gnomeList';

const Wrapper = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/gnomeList" exact component={GnomeList} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route path="*" component={AboutUs} />
      </Switch>
    </Layout>
  );
};

export default Wrapper;
