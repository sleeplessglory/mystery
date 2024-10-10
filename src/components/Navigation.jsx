import navIcon from '../assets/main.jpg';
export default function Navigation() {
    return(
        <div className="nav">
            <div className="nav__shop">
                <div className="nav__text nav__text--shop">Shop</div>
                <img src={navIcon} className="nav__img nav__img--shop" />
                <div className="nav__soon">Coming soon</div>
            </div>
            <div className="nav__friends">
                <div className="nav__text">Friends</div>
                <img src={navIcon} className="nav__img" />
            </div>
            <div className="nav__main">
                <div className="nav__text">Main</div>
                <img src={navIcon} className="nav__img nav__img--main" />
            </div>
            <div className="nav__earn">
                <div className="nav__text">Earn</div>
                <img src={navIcon} className="nav__img nav__im" />
            </div>
            <div className="nav__rating">
                <div className="nav__text">Rating</div>
                <img src={navIcon} className="nav__img nav__img--shop" />
            </div>
        </div>
    );
};