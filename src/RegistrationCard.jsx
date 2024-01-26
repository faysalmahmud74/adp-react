import React, { useState } from 'react';
import Card from './component/Card';
import ButtonComponent from './component/customButton';
import CustomInput from './component/customInput';



const RegistrationCard = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const isValid = () => {
    return username.length > 0 &&
    email.length > 0 && password.length > 0; 
}

    const handleRegistration = () => {
        if(isValid()){
            alert("Registration Successful");
        }
        else{
            alert("Field are required");
        }
        
    };

    return (
        <Card title="Registration" description="Fill out the form to register for the project">


            <CustomInput label="Username"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                value={username} />

            <CustomInput label="Email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email} />

            <CustomInput label="Password"
                placeholder="Enter your password"
                type="password" onChange={(e) => setPassword(e.target.value)}
                value={password} />

            <ButtonComponent
                label="Register"
                onClick={handleRegistration}
                type="save" />
        </Card>
    );
};

export default RegistrationCard;
