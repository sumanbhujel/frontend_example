import React from "react";
import axios from 'axios';
import TeacherBody from '../components/teacherBody';

class TeacherData extends React.Component {

    state = {
        mydata: []
    }

    componentDidMount() {
        axios.get("http://localhost:7000/users").then(res => {
            this.setState({ mydata: res.data });
        });
    }

    render() {
        const mydata222 = this.state.mydata.map(userList => {
            return <TeacherBody name1={userList.first_name} id={userList._id} />
        });

        return (
            <section>
                {mydata222}
            </section>)
    }

}

export default TeacherData;