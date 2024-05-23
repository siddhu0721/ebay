import { useContext, useState } from 'react';
import pic from './pic.jpg';
import { UserContext } from './UserContext';


function UserProfile() {

    const {profile}=useContext(UserContext);

    const [edit,setEdit]=useState(false);
    
    const [name,setName]=useState('Robert Downey Jr.');
    const [email,setEmail]=useState('rdj@gmail.com');
    const [phone,setPhone]=useState(1234567890);

    const [listings, setListings] = useState([
      { id: 1, title: 'Cooler', description: 'Almost new cooler', price: '2500' },
      { id: 2, title: 'Mattress', description: 'Comfortable mattress', price: '3000' }
    ]);

    const [boughtItems, setBoughtItems] = useState([
      { id: 1, title: 'Fan', description: 'Portable fan', price: 3000 }
    ]);

    const soldItemsCount = listings.length;
    const boughtItemsCount= profile.boughtItems.length;
    const soldItemsValue = listings.reduce((total, item) => total + parseFloat(item.price.replace('Rs', '')), 0);
    const boughtItemsValue = profile.boughtItems.reduce((total, item) => total + parseFloat(item.price.replace('Rs', '')), 0);


    const handleEdit = () =>{
      setEdit(!edit);
    };

    const handleChange1 = (e) =>{
      const value=e.target.value;
      setName(value);
    };

    const handleChange2 = (e) =>{
      const value=e.target.value;
      setEmail(value);
    };

    const handleChange3 = (e) =>{
      const value=e.target.value;
      setPhone(value);
    };

    const handleSave = () =>{
      setEdit(false);
    };
 

  return (
    <div className="userprofile">
      <div className='upper'>
        <img src={pic} alt={name} className='photoProfile' />
        {edit ? (
          <div className='profileEdit'>
            <input type="text" value={name} onChange={handleChange1} className='nameEdit'/>
            <input type="text" value={email} onChange={handleChange2} className='emailEdit'/>
            <input type='numeric' value={phone} onChange={handleChange3} className='phoneEdit'/>
            <div className="button">
            <button onClick={handleSave} className='save'>Save</button>
            <button onClick={handleEdit} className='cancel'>Cancel</button>
            </div>
          </div>
        ):(
          <div className='profile'>
            <div className="profileText">
              <div className="nameProfile"><strong>Name: </strong>{name}</div>
              <div className="emailProfile"><strong>Email: </strong>{email}</div>
              <div className="phoneProfile"><strong>Phone: </strong>{phone}</div>
            </div>
            <button className="edit" onClick={handleEdit}>Edit</button>
          </div>
        )
        }
      </div>
      <div className="buyAndSell">
        <div className="summary">Summary of Buying and Selling Activities:</div>
        <div className="sb">
          <div className="sold">
            <strong>Items Sold: </strong>{soldItemsCount} (Total Value: Rs {soldItemsValue.toFixed(2)})
          </div>
          <div className="bought">
            <strong>Items Bought: </strong>{boughtItemsCount} (Total Value: Rs {boughtItemsValue.toFixed(2)})
          </div>
        </div>
      </div>
      
      <div>
        <div className="boughtItemsList">Bought Items List:</div>
        <ul className="buyList">
        
          {profile.boughtItems.map((item)=>(
            <li key={item.id} className='buyItem'>
              <div className="boughtTitle"><strong>Item Name:</strong> {item.title}</div>
              <div className="boughtPrice"><strong>Value:</strong> Rs {item.price}</div>
            </li>
          ))}
        </ul>
      </div>
        
    </div>
  );
}

export default UserProfile;

