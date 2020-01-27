import React from 'react';
import axios from 'axios';
import '../components/teacher.css';

class SingleTeacher extends React.Component {

    state = {
        user_data : []
    }

    componentDidMount() {
        axios.get("http://localhost:7000/users/singleuser/"+this.props.match.params.id).then(res => {
            this.setState({ user_data: res.data });
        });
    }

    render() {
       
        return (
            
            <div className="teacher">
                This is single user page.
                <p>{this.props.match.params.id}</p>
                <p>Full Name: {this.state.user_data.first_name} {this.state.user_data.last_name}</p>
                <p>Email or phone: {this.state.user_data.email_phone}</p>
                <p>Birthday: {this.state.user_data.birthday}</p>
                <p>Gender: {this.state.user_data.gender}</p>
               
            </div>
        )
    }
}

export default SingleTeacher;