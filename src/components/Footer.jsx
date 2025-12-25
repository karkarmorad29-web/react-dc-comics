function Footer() {

    const DcComicslists = [
        { id: 1, label: "Characters", href: "#" },
        { id: 2, label: "Comics", href: "#" },
        { id: 3, label: "Movies", href: "#" },
        { id: 4, label: "TV", href: "#" },
        { id: 5, label: "Games", href: "#" },
        { id: 6, label: "Videos", href: "#" },
        { id: 7, label: "News", href: "#" }
    ];

    const Shoplists = [
        { id: 8, label: "Shop DC", href: "#" },
        { id: 9, label: "Shop DC Collectibles", href: "#" }
    ];

    const DClists = [
        { id: 10, label: "Terms Of Use", href: "#" },
        { id: 11, label: "Privacy policy (New)", href: "#" },
        { id: 12, label: "Ad Choices", href: "#" },
        { id: 13, label: "Advertising", href: "#" },
        { id: 14, label: "Jobs", href: "#" },
        { id: 15, label: "Subscriptions", href: "#" },
        { id: 16, label: "Talent Workshops", href: "#" },
        { id: 17, label: "CPSC Certificates", href: "#" },
        { id: 18, label: "Ratings", href: "#" },
        { id: 19, label: "Shop Help", href: "#" },
        { id: 20, label: "Contact Us", href: "#" }
    ];
    const Siteslists = [
        { id: 21, label: "DC", href: "#" },
        { id: 22, label: "MAD Magazine", href: "#" },
        { id: 23, label: "DC Kids", href: "#" },
        { id: 24, label: "DC Universe", href: "#" },
        { id: 25, label: "DC Power Visa", href: "#" }
    ];


    const footerSections = [
        {
            title: "DC COMICS", items: [
                { id: 1, label: "Characters", href: "#" },
                { id: 2, label: "Comics", href: "#" },
                { id: 3, label: "Movies", href: "#" },
                { id: 4, label: "TV", href: "#" },
                { id: 5, label: "Games", href: "#" },
                { id: 6, label: "Videos", href: "#" },
                { id: 7, label: "News", href: "#" }
            ]
        },


        {
            title: "SHOP", items: [
                { id: 8, label: "Shop DC", href: "#" },
                { id: 9, label: "Shop DC Collectibles", href: "#" }
            ]
        },


        {
            title: "DC", items: [
                { id: 10, label: "Terms Of Use", href: "#" },
                { id: 11, label: "Privacy policy (New)", href: "#" },
                { id: 12, label: "Ad Choices", href: "#" },
                { id: 13, label: "Advertising", href: "#" },
                { id: 14, label: "Jobs", href: "#" },
                { id: 15, label: "Subscriptions", href: "#" },
                { id: 16, label: "Talent Workshops", href: "#" },
                { id: 17, label: "CPSC Certificates", href: "#" },
                { id: 18, label: "Ratings", href: "#" },
                { id: 19, label: "Shop Help", href: "#" },
                { id: 20, label: "Contact Us", href: "#" }
            ]
        },

        {
            title: "SITES", items: [
                { id: 21, label: "DC", href: "#" },
                { id: 22, label: "MAD Magazine", href: "#" },
                { id: 23, label: "DC Kids", href: "#" },
                { id: 24, label: "DC Universe", href: "#" },
                { id: 25, label: "DC Power Visa", href: "#" }
            ]
        }
    ];




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
                        <ul className="first-ul">
                            {sezione.items.map(item => {
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