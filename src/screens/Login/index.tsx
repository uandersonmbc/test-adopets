import React, { useEffect, useState } from 'react';

const Login: React.FC = () => {
    const [test, setTest] = useState({
        name: 'Uanderson'
    })
    useEffect(() => {
        alert('Test' + test.name)
    });
    return (
        <div>
            Login
        </div>
    );
}

export default Login;
