export default class WishlistService {

    data = [
      {
        id: 1,
        title: 'iPhone 12',
        price: 400,
        picture: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&hei=1112&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1604021663000'},
      {
        id: 2,
        title: 'devon rex cat',
        price: 100,
        picture: 'https://i.pinimg.com/originals/de/d4/bf/ded4bf3af97c235e56aa2b6a27c0a445.jpg'}
    ];
  
    getWishlist() {
      return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(this.data)
        }, 600);
    })
  };
} 