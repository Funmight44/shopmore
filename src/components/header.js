import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useCart } from '../context';
import { useState } from 'react';


const Header = () => {
    const {cart} = useCart();

    const [cartToggle, setCartToggle] = useState(false) 



    return ( 
        <header>
            <div className="logo-div">
                <img src={logo} alt='logo' className='logo'/>
                <h2>Lahyor Ventures</h2> 
            </div>

            <nav>
                <Link to="/"><p>Home</p></Link>  
                <Link to="men"><p>Men</p></Link>
                <Link to="women"><p>Women</p></Link>
                <Link to="kids"><p>Kids</p></Link>
            </nav>

            <div className='search-div'>
              <i class="bi bi-search"></i>
              <input type='text' placeholder='search'/>
            </div>

            <div className='actions'>
                <i class="bi bi-balloon-heart"></i>
                <i class="bi bi-person"></i>
                <div className='cart-div' onClick={() => setCartToggle(!cartToggle)}>
                   <Link to="cart"><i class="bi bi-cart" ></i></Link>
                   <span>{cart.length}</span>
                </div>
                
            </div>
        </header>
     );
}
 
export default Header;