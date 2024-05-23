import React, { useState,useContext } from 'react'
import {useParams,Link} from 'react-router-dom'
import cooler1 from './cooler1.jpg'
import cooler2 from './cooler2.jpg'
import cooler3 from './cooler3.jpg'
import p1 from './p1.jpg'
import p2 from './p2.jpg'
import p3 from './p3.jpg'
import { UserContext } from './UserContext'

const ProductPreview = () => {
    const { addBoughtItem,addReview,reviews } = useContext(UserContext);

    const items =[
        { id:1 , title:'Cooler' , description: 'very good quality' , thumbnail:[cooler1,p1] , price:'2000',
            brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nobis est mollitia! Fuga vel accusamus illum harum numquam sequi, labore magni incidunt placeat rem natus. Dolore cupiditate atque perspiciatis necessitatibus, corporis excepturi rerum ipsam suscipit.',
            seller: { sname:'Rohit', semail:'rohit@gmail.com'}, 
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d717.6522708084594!2d80.23089672198473!3d26.509770496954786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c36ffc49927d9%3A0xdfa5ab71f0ad6e7a!2sBlock%20A%2C%20Sixth%20Ave%2C%20Nankari%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208016%2C%20India!5e0!3m2!1sen!2sau!4v1716068054020!5m2!1sen!2sau'
        },
        { id:2 , title:'Cooler' , description: 'very good quality' , thumbnail:[cooler2,p2] , price:'2500',
            brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nobis est mollitia! Fuga vel accusamus illum harum numquam sequi, labore magni incidunt placeat rem natus. Dolore cupiditate atque perspiciatis necessitatibus, corporis excepturi rerum ipsam suscipit.',
            seller: { sname:'Mohit', semail:'mohit@gmail.com'},
            location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1145.576423974492!2d80.22704948484724!3d26.508213997982196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c36f8accc5da7%3A0xdbea20c3e6f90acc!2sA-Block%2C%20Hall%209%20Inner%20Rd%2C%20Nankari%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208016%2C%20India!5e0!3m2!1sen!2sau!4v1716095728690!5m2!1sen!2sau'
        },
        { id:3 , title:'Cooler' , description: 'very good quality' , thumbnail:[cooler3,p3] , price:'3000',
            brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nobis est mollitia! Fuga vel accusamus illum harum numquam sequi, labore magni incidunt placeat rem natus. Dolore cupiditate atque perspiciatis necessitatibus, corporis excepturi rerum ipsam suscipit.',
            seller: { sname:'John', semail:'john@gmail.com'},
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d717.6522708084594!2d80.23089672198473!3d26.509770496954786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c36ffc49927d9%3A0xdfa5ab71f0ad6e7a!2sBlock%20A%2C%20Sixth%20Ave%2C%20Nankari%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208016%2C%20India!5e0!3m2!1sen!2sau!4v1716068054020!5m2!1sen!2sau'
        }
    ]

    const {id}= useParams();
    const item = items.find(i => i.id === parseInt(id));

    const [newReview,setNewReview]=useState({username:'',rating:0,comment:''});

      const handleBuyItem = () => {
        addBoughtItem({
          id: new Date().getTime(),
          title: item.title,
          description: item.description,
          price: item.price,
        })
      };

      const Reviews = reviews.filter(review => review.productId === item.id);



  return (
    <div className='productpreview'>
        <Link className="back" to="/">BACK</Link>
        <div className="productDetails">
            <div className="itemPics">
                {item.thumbnail.map((src,index)=>(
                    <img className="productPhoto" src={src} alt={item.title} />
                ))}
            </div>
            <div>
                <div className="itemTitle">{item.title}</div>
                <div className="itemBrief"><b>Description : </b>{item.brief}</div>
                <div className="itemPrice">Price :- Rs {item.price}/-</div>
                <Link className='buy' to={`/product/${id}/chat`} onClick={handleBuyItem}>BUY</Link>
            </div>
        </div>
        <div className="lower">
            <div className="sellerInfo">
                <div className="sellerinfo">Seller's Information:</div>
                <div className="sellerText">
                    <div className="sellerName"><strong>Name: </strong>{item.seller.sname}</div>
                    <div className="sellerEmail"><strong>Contact: </strong>{item.seller.semail}</div>
                </div>
                <Link className='mapLink' to={`/product/${item.id}/location`}>Seller's Location</Link>
            </div>

            <div className="reviewBlock">
                <div className="costRev">Costumer Reviews:</div>
                <ul className='reviews'>
                    {Reviews.map((review,index)=>(
                        <li className='review' key={index}>
                            <div className="firstL">{review.username.charAt(0)}</div>
                            <div className="usernameReview">{review.username}</div>
                            <div className="ratingReview">Rating: {review.rating}/5</div>
                            <div className="commentReview">Comment: {review.comment}</div>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
        
    </div>
  )
}

export default ProductPreview