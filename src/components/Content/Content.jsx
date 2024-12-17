import Style from './Content.module.scss';
import Hero from '@assets/images/Hero.png';
const Content = () => {
    const {
        container,
        container_box,
        overplay,
        container_box_left_button,
        container_box_left,
        container_box_right,
        button_left,
        button_right,
    } = Style;
    return (
        <div className={container}>
            <div className={container_box}>
                <div className={container_box_left}>
                    <h1>
                        This Dark <br /> Road to Mercy
                    </h1>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, <br />
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi <br /> nesciunt.
                    </p>
                    <div className={container_box_left_button}>
                        <button className={button_left}>$6.75 – Purchase</button>
                        <button className={button_right}>READ ON KINDLE</button>
                    </div>
                </div>
                <div className={container_box_right}>
                    <img src={Hero} alt="Hero" />
                </div>
            </div>
        </div>
    );
};
export default Content;
