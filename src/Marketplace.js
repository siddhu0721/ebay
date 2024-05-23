import React from 'react'
import cooler1 from './cooler1.jpg'
import cooler2 from './cooler2.jpg'
import cooler3 from './cooler3.jpg'
import { Link } from 'react-router-dom'

const Marketplace = () => {

    const items =[
        { id:1 , title:'Cooler' , description: 'very good quality' , thumbnail:cooler1 , price:'2000',
            brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nobis est mollitia! Fuga vel accusamus illum harum numquam sequi, labore magni incidunt placeat rem natus. Dolore cupiditate atque perspiciatis necessitatibus, corporis excepturi rerum ipsam suscipit.',
            seller: 'Rohit'
        },
        { id:2 , title:'Cooler' , description: 'very good quality' , thumbnail:cooler2 , price:'2500',
            brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nobis est mollitia! Fuga vel accusamus illum harum numquam sequi, labore magni incidunt placeat rem natus. Dolore cupiditate atque perspiciatis necessitatibus, corporis excepturi rerum ipsam suscipit.',
            seller: 'Mohit'
        },
        { id:3 , title:'Cooler' , description: 'very good quality' , thumbnail:cooler3 , price:'3000',
            brief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nobis est mollitia! Fuga vel accusamus illum harum numquam sequi, labore magni incidunt placeat rem natus. Dolore cupiditate atque perspiciatis necessitatibus, corporis excepturi rerum ipsam suscipit.',
            seller: 'John'
        }
    ]

  return (
    <div className='marketplace'>
        {items.map((item)=>(
            <Link className='details' to={`/product/${item.id}`}>
                <div className="item" key={item.id}>
                    <img className='thumbnail' src={item.thumbnail} alt="item.title" />
                    <div className="title">{item.title}</div>
                    <div className="description">{item.description}</div>
                    <div className="price">Price- Rs {item.price}/-</div>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default Marketplace