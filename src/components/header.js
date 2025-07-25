import { Link, useNavigate, useSearchParams} from 'react-router-dom';
import logo from '../images/logo.png';
import { useCart } from '../context';
import { useState } from 'react';


const Header = () => {
    const {cart} = useCart();
    const [cartToggle, setCartToggle] = useState(false)
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const [query, setQuery] = useState(searchParams.get("query") || "");

    const [showNav, setShowNav] = useState(false)
    

    console.log("Query from searchParams:", query);

    
   const handleSubmit = (e) => {
      e.preventDefault();
      if (!query.trim()) return;
      navigate(`/search?query=${encodeURIComponent(query)}`);
};

   
    return ( 
        <header>
            <div className="logo-div">
                <img src={logo} alt='logo' className='logo'/>
                <h2>Lahyor Ventures</h2> 
            </div>

            <nav  className={showNav ? "show-nav" : ''}>
                <Link to="/" onClick={() => setShowNav(false)}><p>Home</p></Link>  
                <Link to="men" onClick={() => setShowNav(false)}><p>Men</p></Link>
                <Link to="women" onClick={() => setShowNav(false)}><p>Women</p></Link>
                <Link to="kids" onClick={() => setShowNav(false)}><p>Kids</p></Link>
           
                <form className='search-div' onSubmit={handleSubmit}>
                    <input type='text' placeholder='search' value={query} onChange={(e) => setQuery(e.target.value)}/>
                    <button type='submit' > <i class="bi bi-search"></i></button>
                </form>
             </nav>

            <button className="menu-icon" onClick={() => setShowNav(!showNav)}>
                   <i className="bi bi-list"></i>
            </button>

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