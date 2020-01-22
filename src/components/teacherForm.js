import React from 'react';

const teacherForm = () => {
    return (<div>
        <form >
            <input type="text" name="first_name" placeholder="First Name" required /><br/>
            <input type="text" name="last_name" placeholder="Last Name" required /><br/>
            <input type="text" name="email_phone" placeholder="Email" required /><br/>
            <input type="password" name="password" placeholder="Password" required /><br/>
            <input type="date" name="birthday" placeholder="Birthday" required /><br/>
            <input type="text" name="gender" placeholder="Gender" required /><br/>
            <input type="submit" value="Submit" />
        </form>
    </div>)
}

export default teacherForm;