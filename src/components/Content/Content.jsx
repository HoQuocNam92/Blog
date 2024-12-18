import Style from './Content.module.scss';
import Hero from '@assets/images/Hero.png';
import about from '@assets/images/about.png';
const Content = () => {
    const {
        container,
        container_box,
        container_box_left_button,
        container_box_left,
        container_box_right,
        button_left,
        button_right,
        container_box_content,
        container_box_content_content,
        container_box_content_content_left,
        container_box_content_content_right,
        border_box,
        read_more,
        container_box_content_icons,
    } = Style;
    return (
        <>
            <div className={container}>
                <div className={container_box}>
                    <div className={container_box_left}>
                        <h1>
                            Store Book <br /> Quốc Nam
                        </h1>
                        <p>
                            Welcome mọi người đến website về sách đa dạng của nhà Quốc Nam <br />
                        </p>
                        <div className={container_box_left_button}>
                            <button className={button_left}>
                                <a href="">$6.75 – Book</a>
                            </button>
                            <button className={button_right}>
                                <a href="">Đọc thêm</a>
                            </button>
                        </div>
                    </div>
                    <div className={container_box_right}>
                        <img src={Hero} alt="Hero" />
                    </div>
                </div>
            </div>
            <div className={container_box_content}>
                <div className={container_box_content_content}>
                    <div className={container_box_content_content_left}>
                        <img src={about} alt="about" />
                    </div>
                    <div className={container_box_content_content_right}>
                        <h2>A Word From The Author</h2>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                            est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                        <div className={read_more}>
                            <a href="#">
                                <span>READ MORE</span>
                            </a>
                        </div>
                        <div className={border_box}></div>
                        <h5>Kathryn Moris</h5>
                        <span>Entrepreneur, Writer and Speaker.</span>
                        <div className={container_box_content_icons}>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-google"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Content;
