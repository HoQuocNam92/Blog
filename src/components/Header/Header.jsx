import Styles from './Header.module.scss';
const Header = () => {
    const {
        wrapper,
        bars,
        checkbox,
        wrapper_box,
        overplay,
        wrapper_box_left,
        wrapper_box_right,
        wrapper_box_middle,
        wrapper_bars,
    } = Styles;
    return (
        <div className={wrapper}>
            <div className={wrapper_box}>
                <div className={wrapper_box_left}>
                    <h1>NamEasy</h1>
                </div>
                <label className={bars} htmlFor="checkbox">
                    <i class="fa-solid fa-bars"></i>
                </label>
                <input className={checkbox} type="checkbox" id="checkbox" hidden />
                <label htmlFor="checkbox" className={overplay}></label>
                <div className={wrapper_box_middle}>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Books</a>
                        </li>
                        <li>
                            <a href="#">Bio</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className={wrapper_box_right}>
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>
        </div>
    );
};
export default Header;
