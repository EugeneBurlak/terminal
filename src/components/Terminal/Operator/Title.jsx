import React from 'react'

export default function Title(props) {
    let item = props.item;
    return (
        <div>
            <div className="operator-name">
                {item.icon && 
                    <div className="operator-icon">
                        <img src={item.icon} alt={item.name} />
                    </div>
                }
                {item.name}
            </div>
        </div>
    )
}
