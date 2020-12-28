import React, { Component } from 'react'
import WishlistItem from '../wishlist-item/wishlist-item';

export default class Wishlist extends Component {
    render() {

        const {wishlist} = this.props;

        return (
            <ul>
                {wishlist.map((wish)=> {
                return (
                    <li><WishlistItem wish = {wish}/></li>
                )    
                })}
            </ul>
        )
    }
}
