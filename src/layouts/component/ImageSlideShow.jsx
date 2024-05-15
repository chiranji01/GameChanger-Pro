import { useEffect } from 'react';

export function ImageSlideShow() {

    useEffect(() => {
        const defaultCarousel = document.getElementById('default-carousel');
        const carouselItems = defaultCarousel.querySelectorAll('[data-carousel-item]');
        const carouselButtons = defaultCarousel.querySelectorAll('[data-carousel-slide-to]');
        let currentIndex = 0;

        // Function to show a specific slide
        const showSlide = (index) => {
            carouselItems.forEach((item, i) => {
                if (i === index) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        };

        // Function to handle click on slide buttons
        const handleSlideClick = (index) => {
            showSlide(index);
            currentIndex = index;
        };

        // Attach click event listeners to slide buttons
        carouselButtons.forEach((button, index) => {
            button.addEventListener('click', () => handleSlideClick(index));
        });

        // Function to show next slide
        const showNextSlide = () => {
            currentIndex = (currentIndex + 1) % carouselItems.length;
            showSlide(currentIndex);
        };

        // Function to show previous slide
        const showPrevSlide = () => {
            currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
            showSlide(currentIndex);
        };

        // Attach click event listeners to prev and next buttons
        const prevButton = defaultCarousel.querySelector('[data-carousel-prev]');
        const nextButton = defaultCarousel.querySelector('[data-carousel-next]');
        prevButton.addEventListener('click', showPrevSlide);
        nextButton.addEventListener('click', showNextSlide);

        // Show the initial slide
        showSlide(currentIndex);

        // Cleanup event listeners on component unmount
        return () => {
            carouselButtons.forEach((button, index) => {
                button.removeEventListener('click', () => handleSlideClick(index));
            });
            prevButton.removeEventListener('click', showPrevSlide);
            nextButton.removeEventListener('click', showNextSlide);
        };
    }, []);


    return (
        <>


            <div id="default-carousel" className="relative w-full" data-carousel="slide">

                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_800,q_50/lsci/db/PICTURES/CMS/363700/363707.6.jpg"
                             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                             alt="..."/>
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://ichef.bbci.co.uk/live-experience/cps/1024/cpsprodpb/10403/production/_131536566_gettyimages-1757774247.jpg"
                             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                             alt="..."/>
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://c.ndtvimg.com/2023-07/5u23j5k_sri-lanka-afp_625x300_17_July_23.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675?im=FitAndFill=(800,400)"
                             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                             alt="..."/>
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://www.livemint.com/lm-img/img/2023/10/16/1600x900/India-Cricket-Wcup-123_1697473327114_1697473365198.jpg"
                             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                             alt="..."/>
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2023-10/nissanka-sri%20lanka-england-world%20cup.jpg?itok=sut_8S3g"
                             className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                             alt="..."/>
                    </div>
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
                            data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                            data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                            data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
                            data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
                            data-carousel-slide-to="4"></button>
                </div>
                <button type="button"
                        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev>
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
                </button>
                <button type="button"
                        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next>
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
                </button>
            </div>

        </>
    )
}