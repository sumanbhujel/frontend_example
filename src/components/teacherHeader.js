import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import SingleTeacher from './singleTeacher';
import TeacherForm from './teacherForm';
import TeacherLogin from './teacherLogin';
import TeacherData from './teacherData';
import TeacherUpdate from './teacherUpdate';

const teacherHeader = () => {
    return (
        <div>
            <p>This is header section</p>
            <div>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/form">Form</NavLink>
                <NavLink to="/login">Login</NavLink>
                
            </div>

            <Switch>
                <Route path="/form" component={TeacherForm} />
                <Route path="/login" component={TeacherLogin} />
                <Route path="/users" component={TeacherData} />
                <Route path="/singleuser/:id" exact component={SingleTeacher} />
                <Route path="/update/:id" exact component={TeacherUpdate} />
                



            </Switch>


        </div>
    )

}

export default teacherHeader;