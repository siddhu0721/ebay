import React from 'react'
import { useParams,Link } from 'react-router-dom'

const Map = () => {

    const items =[
        { id:1 , 
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d717.6522708084594!2d80.23089672198473!3d26.509770496954786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c36ffc49927d9%3A0xdfa5ab71f0ad6e7a!2sBlock%20A%2C%20Sixth%20Ave%2C%20Nankari%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208016%2C%20India!5e0!3m2!1sen!2sau!4v1716068054020!5m2!1sen!2sau'
        },
        { id:2 ,
            location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1145.576423974492!2d80.22704948484724!3d26.508213997982196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c36f8accc5da7%3A0xdbea20c3e6f90acc!2sA-Block%2C%20Hall%209%20Inner%20Rd%2C%20Nankari%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208016%2C%20India!5e0!3m2!1sen!2sau!4v1716095728690!5m2!1sen!2sau'
        },
        { id:3 ,
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d717.6522708084594!2d80.23089672198473!3d26.509770496954786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c36ffc49927d9%3A0xdfa5ab71f0ad6e7a!2sBlock%20A%2C%20Sixth%20Ave%2C%20Nankari%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%20208016%2C%20India!5e0!3m2!1sen!2sau!4v1716068054020!5m2!1sen!2sau'
        }
    ]

    const {id}=useParams();
    const item = items.find(i => i.id === parseInt(id));

  return (
    <div className='map'>
        <Link className="back" to={`/product/${id}`}>BACK</Link>
        <iframe
        title='map'
        className='mapFrame'
        src={item.location} 
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        ></iframe>
    </div>
  )
}

export default Map