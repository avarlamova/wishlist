import React from 'react';
import {connect} from 'react-redux';

const ShoppingCart = ({items, total, onIncrease, onDecrease, onDelete}) => {
    return (
        <>
        <div> Shopping cart </div>
        <table>
            <thead> Your order</thead>
            <tbody>
                {items.map((item, index)=> {
                    const {id, title, count, total} = item;
                    return (
                    <tr key={id}> 
                    <td> {index+1} </td>
                    <td> {title} </td>
                    <td>{count} </td>
                    <td> ${total} </td>
                    <td>
                        <button onClick={()=>onIncrease(id)}></button>
                    </td>
                    <td>
                        <button onClick={()=>onDecrease(id)}></button>
                    </td>
                    <td>
                        <button onClick={()=>onDelete(id)}></button>
                    </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
        <div> Total: ${total} </div>
        </>
    )
}
//подключение к Redux
const mapStateToProps = ({cartItems, orderTotal}) => {
    return { items: cartItems, total: orderTotal}
}

const mapDispatchToProps = () => { 
    return {
        onIncrease: (id) => { console.log('increase')},
        onDecrease: (id) => { console.log('decrease')},
        onDelete: (id) => { console.log('deleted')}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)