import Services from "../components/services";
import FAQ from "../components/FAQ";
import NewArrivals from "./newArrivals"
import UseTitle from "../hooks/useTitle";

const Hero = () => {
   UseTitle("hero session")

    return ( 
        <>
        <div className="hero" id="shop">
            <div className="hero-text">
                <div className="hero-text-top">
                    <h3>Shop in Style & Celebrate with Sweetness! Lahyor 
                        Ventures has everything</h3>            
                </div>
                {/* <div className="hero-text-down">
                    <p> Delicious Cakes for All Occasions, 
                       Stunning Decorations that Wow, 
                       Trendy Male & Female Wears,
                        Joggers, Sneakers, Cover Shoes, Jeans & More! 
                         One-stop shop for fashion & celebrations!</p>
                </div>  */}
                <button className="shop-btn">Shop Now</button>
            </div>
        </div>
            <Services/>
            <NewArrivals/>
            <FAQ/>
        </>
     );
}
 
export default Hero;