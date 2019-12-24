import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../landing/Landing';
import Projects from '../projects/Projects';
import Contact from '../contact/Contact';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
    )
}

export default Main;