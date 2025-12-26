import footerSections from "../data/footerItems.js";
import DcComicslists from "../data/footerItems.js";
import Shoplists from "../data/footerItems.js";
import DClists from "../data/footerItems.js";
import Siteslists from "../data/footerItems.js";

function Footer() {

    return (
        <footer>
            <div className="flex-container boxed justify-content-space-between">
                <div className="flex-container align-items-center">
                    <div className="imag">
                        <img src="/img/buy-comics-digital-comics.png" alt="" />
                        <img src="/img/buy-comics-merchandise.png" alt="" />
                        <img src="/img/buy-comics-subscriptions.png" alt="" />
                        <img src="/img/buy-comics-shop-locator.png" alt="" />
                        <img src="/img/buy-dc-power-visa.svg" alt="" />
                    </div>

                </div>

                <div className="footer-Column">
                    <img src="/img/dc-logo-bg.png" alt="" />
                </div>

                {footerSections.map(sezione => {
                    <div>
                        <h4>{sezione.title}</h4>
                        <ul>{
                            sezione.items.map(item => {
                                return <li><a href={item.href} key={item.id}>{item.label}</a></li>
                            })}
                        </ul>
                    </div>
                })}

                <div className="footer-Column">
                    <h4>DC COMICS</h4>
                    <ul className="first-ul">
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>TV</li>
                        <li>Games</li>
                        <li>Videos</li>
                        <li>News</li>
                    </ul>


                </div>



                <ul className="first-ul">
                    {DcComicslists.map(item => {
                        return <li><a href={item.href} key={item.id}>{item.label}</a></li>
                    })}
                </ul>

                <div className="footer-Column">

                    <h4>SHOP</h4>
                    <ul className="first-ul">
                        <li>Shop DC</li>
                        <li>Shop DC Collectibles</li>

                        {Shoplists.map(item => {
                            return <li><a href={item.href} key={item.id}>{item.label}</a></li>
                        })}

                    </ul>
                </div>

                <div className="footer-Column">
                    <h4>DC</h4>
                    <ul className="first-ul">

                        <li>Terms Of Use</li>
                        <li>Privacy policy (New)</li>
                        <li>Ad Choices</li>
                        <li>Advertising</li>
                        <li>Jobs</li>
                        <li>Subscriptions</li>
                        <li>Talent Workshops</li>
                        <li>CPSC Certificates</li>
                        <li>Ratings</li>
                        <li>Shop Help</li>
                        <li>Contact Us</li>

                        {DClists.map(item => {
                            return <li><a href={item.href} key={item.id}>{item.label}</a></li>
                        })}
                    </ul>

                    <div className="footer-Column">
                        <h4>SITES</h4>
                        <ul className="first-ul">

                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>

                            {Siteslists.map(item => {
                                return <li><a href={item.href} key={item.id}>{item.label}</a></li>
                            })}
                        </ul>
                    </div>


                </div>
            </div>

        </footer >
    )
}
export default Footer;