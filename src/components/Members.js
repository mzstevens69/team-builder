import React from 'react';

const Members = props => {
    return (
        <div className='members-list'>
            {props.member.map(member => (
            <div className='member' key={member.id}>
                <div>{member.name}</div>
                <div>{member.email}</div>
                <div>{member.role}</div>
            </div>
            ))}
        </div>
    );
};
export default Members;