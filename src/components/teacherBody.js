import React from 'react';
import './teacher.css'
import { Route, NavLink, Switch } from 'react-router-dom';
import axios from 'axios';

class TeacherBody extends React.Component {

    deleteTeacher = () => {
        axios.delete('http://localhost:7000/deleteuser/' + this.props.id);
        alert('deleted');
    }

    render() {
        return (<section>
        
            <div className="teacher">
                <h1>{this.props.name1}</h1>
                <p> 
                <NavLink to={"/singleuser/"+this.props.id}>SingleUser</NavLink>
                <NavLink to={"/update/"+this.props.id}>Update</NavLink>
                
                <button onClick={this.deleteTeacher}>Delete</button></p>
            </div>

        </section>)

    }


}


export default TeacherBody;