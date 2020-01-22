import React from 'react';

const TeacherLogin = () => {
    return (<div>
        <form >
            <input type="text" name="email_phone" placeholder="Email" required /><br />
            <input type="password" name="password" placeholder="Password" required /><br />

            <input type="submit" value="Login" />
        </form>
    </div>)
}

export default TeacherLogin;