import React from 'react'

 const WineCard = (props) => {
     console.log(props.wine);
     
return (
    <div>
    {props.wine.id}
    </div>
)
}

export default WineCard