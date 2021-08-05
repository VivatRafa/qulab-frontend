import Image from "next/image";
import Slider from "react-slick";

const Arrow = ({ direction, onClick }) => {
    let style = {}

    if (direction === 'next') style = { right: '-82px' };
    if (direction === 'prev') style = { left: '-82px' };

    return (
        <div className="BaseSlider-Arrow" style={style} onClick={onClick}>
            <Image 
                src={`/static/img/referal-${direction}.svg`} 
                width="15" 
                height="26" 
            />
        </div>
    )
}

const BaseSlider = ({ children, className }) => {
    const settings = {
        className,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        nextArrow: <Arrow direction="next" />,
        prevArrow: <Arrow direction="prev" />,
        responsive: [
            {
              breakpoint: 650,
              settings: {
                  arrows: false,
                  nextArrow: null,
                  prevArrow: null,
                  dots: true,
              }
            },
        ]
    }
    
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    )
}

export default BaseSlider;