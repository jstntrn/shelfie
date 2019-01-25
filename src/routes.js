import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import EditForm from './component/Form/EditForm';

export default (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/product/add" component={Form} />
        <Route path="/product/edit/:id" component={EditForm} />
    </Switch>
)