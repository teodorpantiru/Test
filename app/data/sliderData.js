export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true, // ✅ must be true
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true, // ✅ must be true
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true, // ✅ enable on small screens too
            },
        },
    ],
    appendDots: dots => (
        <div className="mt-6 ">
            <ul className="flex justify-center align-center gap-3 pr-2">{dots}</ul>
        </div>
    ),
    customPaging: () => (
        <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-blue-500 transition" />
    ),
};
