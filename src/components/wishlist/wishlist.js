import React, { Component } from 'react'
import WishlistItem from '../wishlist-item/wishlist-item';
import { connect } from 'react-redux';
import { wishlistLoaded } from '../../actions/index';
import withWishlistService from '../hoc/with-wishlistservice';
import compose  from '../../utilities/compose';


class Wishlist extends Component {
    
    componentDidMount(){
        const {wishlistService} = this.props;
        const data = wishlistService.getWishlist();
        this.props.wishlistLoaded(data);
    }
    
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

const mapStateToProps = ({wishes}) => {
    return {wishes}
}

const mapDispatchToProps = {
    wishlistLoaded
  };

  export default compose(
    withWishlistService(),
    connect(mapStateToProps, mapDispatchToProps)
  )(Wishlist);
  