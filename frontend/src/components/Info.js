import React from 'react';

const Info = ({ data }) => {    
    return (
        <div>
            {data.profile && data.profile.map((item,i) => <p key={i}>{item}</p>)}
        </div>
    );
};

export default Info;