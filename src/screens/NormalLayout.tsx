import React from 'react';

const NormalLayout: React.FC = (props) => {
    console.log(props);
    return (
        <div>
            {props.children}
        </div>
    );
}

export default NormalLayout;
