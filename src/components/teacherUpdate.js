import React from 'react';
import axios from 'axios';
import '../components/teacher.css';

class TeacherUpdate extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        emailPhone: '',
        gender: '',
        user_data: []
    }

    componentDidMount() {
        axios.get("http://localhost:7000/users/singleuser/" + this.props.match.params.id).then(res => {
            this.setState({
                firstName: res.data.first_name,
                lastName: res.data.last_name,
                emailPhone: res.data.email_phone,
                gender: res.data.gender,
                //user_data: res.data
            });
        });
    }
    updateData = () => {
        const data = {
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email_phone: this.state.emailPhone,
            gender: this.state.gender
        }
        console.log(data);

        axios.put("http://localhost:7000/updateteacher/" + this.props.match.params.id, data);
    }

    render() {

        return (

            <div className="teacher">
                Update Teacher
                <form>
                    <p><label>First Name:</label>
                        <input type="text" value={this.state.firstName}
                            onChange={(event) => this.setState({ firstName: event.target.value })} />
                    </p>
                    <p><label>Last Name:</label>
                        <input type="text" value={this.state.lastName}
                            onChange={(event) => this.setState({ lastName: event.target.value })} />
                    </p>
                    <p><label>Email or Phone:</label>
                        <input type="text" value={this.state.emailPhone}
                            onChange={(event) => this.setState({ emailPhone: event.target.value })} />
                    </p>
                    <p><label>Gender</label>
                        <input type="text" value={this.state.gender}
                            onChange={(event) => this.setState({ gender: event.target.value })} />
                    </p>
                    <p>
                        <button onClick={this.updateData}>Update</button>
                    </p>

                </form>
            </div>
        )
    }
}

export default TeacherUpdate;