import React from 'react';

const List = (props) => {
    return (
        <div>
            {props.data.map((items, index)=>(
                <div key={index}>{items.name}</div>
            ))}
        </div>    
    );
}

export default List;