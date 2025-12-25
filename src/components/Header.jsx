
const lists = [

    {
        id: 1,
        text: 'CHARACTERS',
        url: '#',
        active: false

    },
    {
        id: 2,
        text: 'COMICS',
        url: '#',
        active: true
    },
    {
        id: 3,
        text: 'MOVIES',
        url: '#',
        active: false
    },
    {
        id: 4,
        text: 'TV',
        url: '#',
        active: false
    },
    {
        id: 5,
        text: 'GAMES',
        url: '#',
        active: false
    },
    {
        id: 6,
        text: 'COLLECTIBLES',
        url: '#',
        active: false
    },
    {
        id: 7,
        text: 'VIDEOS',
        url: '#',
        active: false
    },
    {
        id: 8,
        text: 'FANS',
        url: '#',
        active: false
    },
    {
        id: 9,
        text: 'NEWS',
        url: '#',
        active: false
    },
    {
        id: 10,
        text: 'SHOP',
        url: '#',
        active: false
    }
];

function Header() {
    return (
        <header>
            <img id="logo" src="/img/dc-logo.png" alt="" />
            <nav>
                <ul>
                    {/*<li><a href="#"></a>CHARACTERS</li>
                    <li><a href="#"></a>COMICS</li>
                    <li><a href="#"></a>MOVIES</li>
                    <li><a href="#"></a>TV</li>
                    <li><a href="#"></a>GAMES</li>
                    <li><a href="#"></a>COLLECTIBLES</li>
                    <li><a href="#"></a>VIDEOS</li>
                    <li><a href="#"></a>FANS</li>
                    <li><a href="#"></a>NEWS</li>
                    <li><a href="#"></a>SHOP</li>
                   */}

                    {lists.map((item, index) => {

                        let classeDaggiungere = (item.active === true) ? "active" : "";

                        {/*
                        let classeDaggiungere = "";

                        {/*
                        if (item.active === true) {
                            classeDaggiungere = "active";
                        }
                        */}


                        return <li key={index} className={classeDaggiungere}><a href={item.url}>{item.text}</a></li>
                    })}
                </ul>
            </nav>
        </header>

    );
}

export default Header;