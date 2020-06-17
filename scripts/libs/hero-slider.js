//ヒーロースライダークラス
class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }
//コンストラクター
    _initSwiper() {
        return new Swiper(this.el, {
            // Optional parameters
            // direction: 'vertical',
            loop: true, //ループする。最初に戻らずそのまま
            grabCursor: true, //カーソルはグラブで
            effect: 'coverflow', //エフェクトはカバーフローで
            centeredSlides: true,//スライドをセンターに合わせる
            slidesPerView: 1, //1枚ずつの表示
            speed: 1000, //1000ミリ毎秒の速さで

            breakpoints: {
                1024: {
                    slidesPerView: 2,
                }//画面サイズが1024以上の場合は、画面上にスライドを2枚表示
            },
        });
    }

    start(options = {}) {
        options = Object.assign({
            delay: 4000,
            autoplayDisableOnInteraction:false,//フリック後もスライドが止まらいないように
            // disableOnInteraction: false
        }, options);
        
        this.swiper.params.autoplay = options;
        this.swiper.autoplay.start();
    }
    stop() {
        this.swiper.autoplay.stop();
    }
}