console.log('script is linked');


// Query Selectors


// global variables
let totalDays;
let startDate;
let endDate;
let pickUpTime;
let dropOffTime;
let pickUpLocation;
let dropOffLocation;
let modalTotalPrice;

// ===============================
// start of transport object-array
// ===============================
const transport = [
    {
        type: 'motorbike',
        id: 101,
        carouselId: 'carouselOne',
        modalCarouselId: 'modalCarouselOne',
        name: 'Suzuki V-Strom DL650',
        partner: 'NZBike.com',
        price: '199',
        transmission: 'Manual',
        efficiency: 'Excellent',
        tankCapacity: '2.4L',
        imageOneSmall: './img/101-s-suzuki-dl650-3.jpg',
        imageTwoSmall: './img/101-s-suzuki-dl650-2.jpg',
        imageThreeSmall: './img/101-s-suzuki-dl650-4.jpg',
        imageOne: './img/101-suzuki-dl650-3.jpeg',
        imageTwo: './img/101-suzuki-dl650-2.jpeg',
        imageThree: './img/101-suzuki-dl650-4.jpeg',
        minPeople: 1,
        maxPeople: 1,
        minTravelDays: 1,
        maxTravelDays: 5
    },
    {   
        type: 'motorbike',
        id: 105,
        carouselId: 'carouselFive',
        modalCarouselId: 'modalCarouselFive',
        name: 'Honda VT750S',
        partner: 'Te Waipounamu Motorcycle Tours',
        price: '120',
        transmission: 'Manual',
        efficiency: 'Good',
        tankCapacity: "2.4L",
        imageOneSmall: './img/105-s-honda-vt750s-e99a77097f9e9e2de2c6b9de30aaa065.jpg',
        imageTwoSmall: './img/105-s-1280px-Honda_VT750S_2011.jpg',
        imageThreeSmall: './img/105-s-honda-vt750s-1.jpg',
        imageOne: './img/105-honda-vt750s-e99a77097f9e9e2de2c6b9de30aaa065.jpeg',
        imageTwo: './img/105-1280px-Honda_VT750S_2011.jpeg',
        imageThree: './img/105-honda-vt750s-1.jpeg',
        minPeople: 1,
        maxPeople: 1,
        minTravelDays: 1,
        maxTravelDays: 5
    },
    {   
        type: 'motorbike',
        id: 106,
        carouselId: 'carouselSix',
        modalCarouselId: 'modalCarouselSix',
        name: 'FLHTK Ultra Limited',
        partner: 'Bularangi Motorbikes',
        price: '120',
        transmission: 'Manual',
        efficiency: 'Good',
        tankCapacity: '2.4L',
        imageOneSmall: './img/106-s-2021-ultra-limited-motorcycle-g2.jpg',
        imageTwoSmall: './img/106-s-5efdef3f07d0c724015511bd324391ed.jpg',
        imageThreeSmall: './img/106-s-flhtk-ultra-limited-harley.jpg',
        imageOne: './img/106-2021-ultra-limited-motorcycle-g2.jpg',
        imageTwo: './img/106-5efdef3f07d0c724015511bd324391ed.jpg',
        imageThree: './img/106-flhtk-ultra-limited-harley.jpg',
        minPeople: 1,
        maxPeople: 1,
        minTravelDays: 1,
        maxTravelDays: 5
    },
    {   
        type: 'motorbike',
        id: 107,
        carouselId: "carouselSeven",
        modalCarouselId: "modalCarouselSeven",
        name: "BMW R 1250 GS",
        partner: "Paradise Motorcycle Tours",
        price: "120",
        transmission: "Manual",
        efficiency: "Good",
        tankCapacity: "2.4L",
        imageOneSmall: './img/107-s-0704splbmwr1250gs_7.jpg',
        imageTwoSmall: './img/107-s-2019-bmw-r1250gs5.jpg',
        imageThreeSmall: './img/107-s-nsc-master-r1250gs-P0N0S_2560x1440.jpg',
        imageOne: './img/107-0704splbmwr1250gs_7.jpg',
        imageTwo: './img/107-2019-bmw-r1250gs5.jpg',
        imageThree: './img/107-nsc-master-r1250gs-P0N0S_2560x1440.jpg',
        minPeople: 1,
        maxPeople: 1,
        minTravelDays: 1,
        maxTravelDays: 5
    },
    {   
        type: 'motorbike',
        id: 108,
        carouselId: "carouselEight",
        modalCarouselId: "modalCarouselEight",
        name: "Honda CMX 500 Rebel",
        partner: "NZBike.com",
        price: "120",
        transmission: "Manual",
        efficiency: "Good",
        tankCapacity: "2.4L",
        imageOneSmall: './img/108-s-honda-cmx-500-3.jpg',
        imageTwoSmall: './img/108-s-honda-cmx-500-1.jpg',
        imageThreeSmall: './img/108-s-honda-cmx-500-4.jpg',
        imageOne: './img/108-honda-cmx-500-3.jpeg',
        imageTwo: './img/108-honda-cmx-500-1.jpeg',
        imageThree: './img/108-honda-cmx-500-4.jpeg',
        minPeople: 1,
        maxPeople: 1,
        minTravelDays: 1,
        maxTravelDays: 5
    },
    {   
        type: 'small car',
        id: 102,
        carouselId: "carouselTwo",
        modalCarouselId: "modalCarouselTwo",
        name: "Toyota Corolla Hatch",
        partner: "Eurocar",
        price: "129",
        transmission: "Automatic",
        efficiency: "Excellent",
        tankCapacity: "2.4L",
        imageOneSmall: './img/102-s-corolla-hatch-zr-hybrid-900x600.jpg',
        imageTwoSmall: './img/102-s-corollahatch-marketingmodel-interiordesign-feature-655x360.jpg',
        imageThreeSmall: './img/102-s-corollahatch-marketingmodel-techgallery-hero-1100x900.jpg',
        imageOne: './img/102-corolla-hatch-zr-hybrid-900x600.jpeg',
        imageTwo: './img/102-corollahatch-marketingmodel-interiordesign-feature-655x360.jpeg',
        imageThree: './img/102-corollahatch-marketingmodel-techgallery-hero-1100x900.jpeg',
        minPeople: 1,
        maxPeople: 2,
        minTravelDays: 1,
        maxTravelDays: 10
    },
    {   
        type: 'small car',
        id: 109,
        carouselId: "carouselNine",
        modalCarouselId: "modalCarouselNine",
        name: "Toyota Yaris",
        partner: "GO rentals",
        price: "116",
        transmission: "Automatic",
        efficiency: "Excellent",
        tankCapacity: "2.4L",
        imageOneSmall: './img/109-s-new-toyota-yaris-hatch-is-made-of-fun_meta_1200x630-1.jpg',
        imageTwoSmall: './img/109-s-toyota-yaris-hatch-mosaich-1100x900.jpg',
        imageThreeSmall: './img/109-s-GROUP-1-4-1.jpg',
        imageOne: './img/109-new-toyota-yaris-hatch-is-made-of-fun_meta_1200x630-1.jpg',
        imageTwo: './img/109-toyota-yaris-hatch-mosaich-1100x900.jpeg',
        imageThree: './img/109-GROUP-1-4-1.jpg',
        minPeople: 1,
        maxPeople: 2,
        minTravelDays: 1,
        maxTravelDays: 10
    },
    {   
        type: 'small car',
        id: 110,
        carouselId: "carouselTen",
        modalCarouselId: "modalCarouselTen",
        name: "Suzuki Swift",
        partner: "Avis",
        price: "116",
        transmission: "Automatic",
        efficiency: "Excellent",
        tankCapacity: "2.4L",
        imageOneSmall: './img/110-s-11.jpg',
        imageTwoSmall: './img/110-s-14.jpg',
        imageThreeSmall: './img/110-s-15.jpg',
        imageOne: './img/110-11.jpeg',
        imageTwo: './img/110-14.jpeg',
        imageThree: './img/110-15.jpeg',
        minPeople: 1,
        maxPeople: 2,
        minTravelDays: 1,
        maxTravelDays: 10
    },
    {   
        type: 'small car',
        id: 111,
        carouselId: "carouselEleven",
        modalCarouselId: "modalCarouselEleven",
        name: "Mazda Demio",
        partner: "Omega Rental Cars",
        price: "87",
        transmission: "Automatic",
        efficiency: "Excellent",
        tankCapacity: "2.4L",
        imageOneSmall: './img/111-s-999663895_1.jpg',
        imageTwoSmall: './img/111-s-Mazda_Demio_XD_Touring_L_Package_interior.jpg',
        imageThreeSmall: './img/111-s-MazdaDemio-interior.jpg',
        imageOne: './img/111-999663895_1.jpeg',
        imageTwo: './img/111-Mazda_Demio_XD_Touring_L_Package_interior.jpeg',
        imageThree: './img/111-MazdaDemio-interior.jpeg',
        minPeople: 1,
        maxPeople: 4,
        minTravelDays: 1,
        maxTravelDays: 4
    },
    {   
        type: 'small car',
        id: 112,
        carouselId: "carouselTwelve",
        modalCarouselId: "modalCarouselTweleve",
        name: "Subaru Impreza",
        partner: "RaD Car Hire",
        price: "73",
        transmission: "Automatic",
        efficiency: "Excellent",
        tankCapacity: "2.4L",
        imageOneSmall: './img/112-s-Impreza.jpg',
        imageTwoSmall: './img/112-s-impreza-interior.jpg',
        imageThreeSmall: './img/112-s-Impreza-CAMERA-RIG-HR-102_med-res_0.jpg',
        imageOne: './img/112-Impreza.jpeg',
        imageTwo: './img/112-impreza interior.jpeg',
        imageThree: './img/112-Impreza-CAMERA-RIG-HR-102_med-res_0.jpeg',
        minPeople: 1,
        maxPeople: 5,
        minTravelDays: 1,
        maxTravelDays: 7
    },
    {   
        type: 'large car',
        id: 103,
        carouselId: "carouselThree",
        modalCarouselId: "modalCarouselThree",
        name: "Toyota Highlander AWD",
        partner: "Hertz",
        price: "239",
        transmission: "Automatic",
        efficiency: "Excellent",
        tankCapacity: "2.4L",
        imageOneSmall: './img/103-s-toyota-highlander-2021-coming-soonzr--hybrid-1150x790-1.jpg',
        imageTwoSmall: './img/103-s-highlander_sunroof-1.jpg',
        imageThreeSmall: './img/103-s-toyota-highlander-2021-coming-soon-safety-1150x790.jpg',
        imageOne: './img/103-toyota-highlander-2021-coming-soonzr--hybrid-1150x790-1.jpg',
        imageTwo: './img/103-highlander_sunroof 1.jpg',
        imageThree: './img/103-toyota-highlander-2021-coming-soon-safety-1150x790.jpeg',
        minPeople: 1,
        maxPeople: 5,
        minTravelDays: 3,
        maxTravelDays: 10
    },
    {   
        type: 'large car',
        id: 113,
        carouselId: "carouselThirteen",
        modalCarouselId: "modalCarouselThirteen",
        name: "Kia Carnival",
        partner: "Hertz",
        price: "220",
        transmission: "Automatic",
        efficiency: "Good",
        tankCapacity: "2.4L",
        imageOneSmall: './img/113-s-home-feature-carnival-2.jpg',
        imageTwoSmall: './img/113-s-home-feature-carnival-1.jpg',
        imageThreeSmall: './img/113-s-Carnival-colours-small-VH-Panthera-Metal.jpg',
        imageOne: './img/113-home-feature-carnival-2.jpeg',
        imageTwo: './img/113-home-feature-carnival-1.jpeg',
        imageThree: './img/113-Carnival-colours-small-VH-Panthera-Metal.png',
        minPeople: 1,
        maxPeople: 8,
        minTravelDays: 3,
        maxTravelDays: 15
    },
    {   
        type: 'large car',
        id: 114,
        carouselId: "carouselFourteen",
        modalCarouselId: "modalCarouselFourteen",
        name: "SUV-Mazda CX9",
        partner: "NZ Rent A Car",
        price: "213",
        transmission: "Automatic",
        efficiency: "Good",
        tankCapacity: "2.4L",
        imageOneSmall: './img/114-s-mdz4739_mazda-web-video_cx-9_in-page-highlight-desktop-2-1.jpg',
        imageTwoSmall: './img/114-s-mazv1256_cx9_powertailgate_background_rgb-1.jpg',
        imageThreeSmall: './img/114-s-cx9gaw5tak25a_soulredcrystalm_1-1.jpg',
        imageOne: './img/114-mdz4739_mazda-web-video_cx-9_in-page-highlight-desktop-2-1.jpg',
        imageTwo: './img/114-mazv1256_cx9_powertailgate_background_rgb-1.jpg',
        imageThree: './img/114-cx9gaw5tak25a_soulredcrystalm_1-1.jpg.jpg',
        minPeople: 1,
        maxPeople: 7,
        minTravelDays: 3,
        maxTravelDays: 13
    },
    {   
        type: 'large car',
        id: 115,
        carouselId: "carouselFifteen",
        modalCarouselId: "modalCarouselFifteen",
        name: "Toyota RAV4",
        partner: "Mode Car & Camper Rentals",
        price: "206",
        transmission: "Automatic",
        efficiency: "Good",
        tankCapacity: "2.4L",
        imageOneSmall: './img/115-s-latest-toyota-rav4-hits-the-ground-running_940x450-1.jpg',
        imageTwoSmall: './img/115-s-RAV_MY19_0009_V005.jpg',
        imageThreeSmall: './img/115-s-RAV_MY19_0050_V001.jpg',
        imageOne: './img/115-latest-toyota-rav4-hits-the-ground-running_940x450-1.jpg',
        imageTwo: './img/115-RAV_MY19_0009_V005.jpeg',
        imageThree: './img/115-RAV_MY19_0050_V001.jpeg',
        minPeople: 1,
        maxPeople: 5,
        minTravelDays: 3,
        maxTravelDays: 8
    },
    {   
        type: 'large car',
        id: 116,
        carouselId: "carouselSixteen",
        modalCarouselId: "modalCarouselSixteen",
        name: "Toyota Prado VX",
        partner: "Snap Rentals",
        price: "186",
        transmission: "Automatic",
        efficiency: "Okay",
        tankCapacity: "2.4L",
        imageOneSmall: './img/116-s-hybrid-range-960x540.jpg',
        imageTwoSmall: './img/116-s-suv-range-960x540.jpg',
        imageThreeSmall: './img/116-s-land-cruiser-gjxt-si2-3r3-40-1.jpg',
        imageOne: './img/116-hybrid-range-960x540.jpeg',
        imageTwo: './img/116-suv-range-960x540.jpeg',
        imageThree: './img/116-land-cruiser-gjxt-si2-3r3-40-1.jpg',
        minPeople: 1,
        maxPeople: 7,
        minTravelDays: 3,
        maxTravelDays: 13
    },
    {   
        type: 'motor home',
        id: 104,
        carouselId: "carouselFour",
        modalCarouselId: "modalCarouselFour",
        name: "6 Berth SAM",
        partner: "GoSee",
        price: "200",
        transmission: "Automatic",
        efficiency: "Okay",
        tankCapacity: "2.4L",
        imageOneSmall: './img/104-s-1677214_1527644448.jpg',
        imageTwoSmall: './img/104-s-1677214_1527644450.jpg',
        imageThreeSmall: './img/104-s-1677214_1580410452.jpg',
        imageOne: './img/104-1677214_1527644448.jpeg',
        imageTwo: './img/104-1677214_1527644450.jpeg',
        imageThree: './img/104-1677214_1580410452.jpeg',
        minPeople: 2,
        maxPeople: 6,
        minTravelDays: 2,
        maxTravelDays: 15
    },
    {   
        type: 'motor home',
        id: 117,
        carouselId: "carouselSeventeen",
        modalCarouselId: "modalCarouselSeventeen",
        name: "Hitop Camper",
        partner: "Apollo",
        price: "188",
        transmission: "Automatic",
        efficiency: "Okay",
        tankCapacity: "2.4L",
        imageOneSmall: './img/117-s-Hitop_External_03_1200x80011.jpg',
        imageTwoSmall: './img/117-s-Hitop_Internal_1200x800_2.jpg',
        imageThreeSmall: './img/117-s-Hitop_Internal_1200x800_6.jpg',
        imageOne: './img/117-Hitop_External_03_1200x80011.jpeg',
        imageTwo: './img/117-Hitop_Internal_1200x800_2.jpeg',
        imageThree: './img/117-Hitop_Internal_1200x800_6.jpeg',
        minPeople: 2,
        maxPeople: 2,
        minTravelDays: 2,
        maxTravelDays: 12
    },
    {   
        type: 'motor home',
        id: 118,
        carouselId: "carouselEighteen",
        modalCarouselId: "modalCarouselEighteen",
        name: "Hippie Drift",
        partner: "Apollo",
        price: "168",
        transmission: "Manual",
        efficiency: "Okay",
        tankCapacity: "2.4L",
        imageOneSmall: './img/118-s-pla1occk-1.jpg',
        imageTwoSmall: './img/118-s-HCNZ_179A8078.jpg',
        imageThreeSmall: './img/118-s-NZHIPPYDR-1.jpg',
        imageOne: './img/118-pla1occk-1.jpg',
        imageTwo: './img/118-HCNZ_179A8078.jpeg',
        imageThree: './img/118-NZHIPPYDR-1.jpg',
        minPeople: 2,
        maxPeople: 2,
        minTravelDays: 2,
        maxTravelDays: 14
    },
    {   
        type: 'motor home',
        id: 119,
        carouselId: "carouselNineteen",
        modalCarouselId: "modalCarouselNineteen",
        name: "The Suite",
        partner: "Wilderness motorhome rentals",
        price: "538",
        transmission: "Automatic",
        efficiency: "Good",
        tankCapacity: "2.4L",
        imageOneSmall: './img/119-s-TheSuite-BurstnerLyseoTD7442018-exterior-1.jpg',
        imageTwoSmall: './img/119-s-rs-19042-lyseo-11-scr-1140x749-1.jpg',
        imageThreeSmall: './img/119-s-rs-19049-lyseo-18-scr-1140x749-1.jpg',
        imageOne: './img/119-TheSuite-BurstnerLyseoTD7442018-exterior-1.jpg',
        imageTwo: './img/119-rs-19042-lyseo-11-scr-1140x749-1.jpg',
        imageThree: './img/119-rs-19049-lyseo-18-scr-1140x749-1.jpg',
        minPeople: 2,
        maxPeople: 4,
        minTravelDays: 2,
        maxTravelDays: 20
    },
    {   
        type: 'motor home',
        id: 120,
        carouselId: "carouselTwenty",
        modalCarouselId: "modalCarouselTwenty",
        name: "Mighty Big Six",
        partner: "Discovery Campervans",
        price: "452",
        transmission: "Automatic",
        efficiency: "Okay",
        tankCapacity: "75L",
        imageOneSmall: './img/120-s-BigSix_NZ_Andrew-McIntosh---Queenstown-_-surrounds_A40R7066.jpg',
        imageTwoSmall: './img/120-s-Couple-in-motorhome.jpg',
        imageThreeSmall: './img/120-s-Mighty-Big-Six-AU-Australia-Clearcut.jpg',
        imageOne: './img/120-BigSix_NZ_Andrew-McIntosh---Queenstown-_-surrounds_A40R7066.jpeg',
        imageTwo: './img/120-Couple-in-motorhome.jpeg',
        imageThree: './img/120-Mighty-Big-Six-AU-Australia-Clearcut.jpeg',
        minPeople: 2,
        maxPeople: 6,
        minTravelDays: 2,
        maxTravelDays: 20
    },
    
];
// ===============================
// end of transport object-array
// ===============================

// =====================================
// start of card generator
// =====================================
function generateCard(x){

    $('#cardContent').append(
        `
        <div class="card c-card">
            <div id="${transport[x].carouselId}" class="carousel slide c-card__carousel">
                <div class="carousel-icons">
                    <a class="carousel-control-prev" href="#${transport[x].carouselId}" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                    </a>
                    <ol class="carousel-indicators">
                    <li data-target="#${transport[x].carouselId}" data-slide-to="0" class="active"></li>
                    <li data-target="#${transport[x].carouselId}" data-slide-to="1"></li>
                    <li data-target="#${transport[x].carouselId}" data-slide-to="2"></li>
                    </ol>
                    <a class="carousel-control-next" href="#${transport[x].carouselId}" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="carousel-inner c-card__img-ctn">
                    <div class="carousel-item active">
                        <img class="d-block w-100 c-card__img" src="${transport[x].imageOneSmall}" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 c-card__img" src="${transport[x].imageTwoSmall}" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 c-card__img" src="${transport[x].imageThreeSmall}" alt="Third slide">
                    </div>
                </div>
            </div>
            <div class="c-card__card-body">
                <h5 class="c-card__title">${transport[x].name}</h5>
                <p class="c-card__partner">${transport[x].partner}</p>
                <div class="c-card__details">
                    <div class="c-card__left">
                        <div class="c-card__icons-left">
                            <img class="c-card__icon" src="./img/noun_Gear Stick_239618.svg" alt="transmission">
                            <p class="c-card__text">${transport[x].transmission}</p>
                            <img class="c-card__icon" src="./img/noun_fuel gauge_161088.svg" alt="fuel efficiency">
                            <p class="c-card__text">${transport[x].efficiency}</p>
                        </div>
                        <div class="c-card__icons-right">
                            <img class="c-card__icon" src="./img/noun_passenger_188591.svg" alt="max passengers">
                            <p class="c-card__text c-card__text--larger">${transport[x].maxPeople}</p>
                            <img class="c-card__icon" src="./img/noun_Fuel_3347121.svg" alt="fuel capacity">
                            <p class="c-card__text c-card__text--fuel">${transport[x].tankCapacity}</p>
                        </div>
                    </div>
                    <div class="c-card__right">
                        <p class="c-card__price"><span class="c-card__price--sign">$</span>${transport[x].price}<span class="c-card__price--day">/day</span></p>
                    </div>
                </div>
            </div>
            <div class="c-card__card-footer">
                <button id="${transport[x].id}" type="button" class="vehicleSelect c-card__select-btn" data-toggle="modal" data-target="#exampleModalCenter">
                    Select
                </button>
            </div>
        </div> 
        `
    );
}
// =====================================
// end of card generator
// =====================================

// ===============================
// start of generating first cards
// ===============================
function objectsLoop(){
    let i = 0;
    for(i = 0; i < transport.length; i++){
        generateCard(i);
    }
    modal();
}
objectsLoop();
// ===============================
// end of generating first cards
// ===============================


// // ===============================
// // start of modal
// // ===============================
function modal(){

    $(".vehicleSelect").click(function(){

        let i = 0;
        for(i = 0; i < transport.length; i++){
            if(parseInt(this.id) === transport[i].id){
                $('#transportModalInfo').empty().append(
                    `
                    <div id="vehicleDetails" class="c-modal__content">
                        <div class="c-modal__carousel-wrap">
                            <div class="c-modal__side-carousel"></div>
                            <div id="${transport[i].modalCarouselId}" class="carousel slide c-modal__carousel">
                                <div class="carousel-inner c-modal__carousel-inner">
                                    <div class="carousel-item c-modal__carousel-item active">
                                        <img class="d-block w-100 c-modal__img" src="${transport[i].imageOne}" alt="First slide">
                                    </div>
                                    <div class="carousel-item c-modal__carousel-item">
                                        <img class="d-block w-100 c-modal__img" src="${transport[i].imageTwo}" alt="Second slide">
                                    </div>
                                    <div class="carousel-item c-modal__carousel-item">
                                        <img class="d-block w-100 c-modal__img" src="${transport[i].imageThree}" alt="Third slide">
                                    </div>
                                </div>
                                <div class="carousel-icons">
                                    <a class="carousel-control-prev" href="#${transport[i].modalCarouselId}" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                    </a>
                                    <ol class="carousel-indicators">
                                    <li data-target="#${transport[i].modalCarouselId}" data-slide-to="0" class="active"></li>
                                    <li data-target="#${transport[i].modalCarouselId}" data-slide-to="1"></li>
                                    <li data-target="#${transport[i].modalCarouselId}" data-slide-to="2"></li>
                                    </ol>
                                    <a class="carousel-control-next" href="#${transport[i].modalCarouselId}" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            <div class="c-modal__side-carousel"></div>
                        </div>
                        <h5 class="c-modal__title">${transport[i].name}</h5>
                        <p class="c-modal__partner">${transport[i].partner}</p>
                        <div class="c-modal__icons-ctn">
                            <div class="c-modal__icons-left">
                                <img class="c-modal__icon" src="./img/noun_Gear Stick_239618.svg" alt="transmission">
                                <p class="c-modal__text">${transport[i].transmission}</p>
                                <img class="c-modal__icon" src="./img/noun_fuel gauge_161088.svg" alt="fuel efficiency">
                                <p class="c-modal__text">${transport[i].efficiency}</p>
                            </div>
                            <div class="c-modal__icons-right">
                                <img class="c-modal__icon" src="./img/noun_passenger_188591.svg" alt="max passengers">
                                <p class="c-modal__text c-modal__text--larger">${transport[i].maxPeople}</p>
                                <img class="c-modal__icon" src="./img/noun_Fuel_3347121.svg" alt="fuel capacity">
                                <p class="c-modal__text c-modal__text--fuel">${transport[i].tankCapacity}</p>
                            </div>
                        </div>
                        <div class="c-modal__pricing-ctn">
                            <p class="c-modal__price"><span class="c-modal__price--sign">$</span>${transport[i].price}<span class="c-modal__price--day">&nbsp /day</span></p>
                            <div class="c-modal__line-wrap">
                                <label for="travel-days">Number of days: &nbsp</label>
                                <p id="travelDays"></p>
                            </div>
                            <div class="c-modal__line-wrap">
                                <label for="total-cost">Total Cost = </label>
                                <p>&nbsp $ &nbsp</p><p id="totalCost"></p>
                            </div>
                        </div>
                    </div>
                    <div id="contactInfo" class="c-modal__content">
                        <div class="c-modal__col-left">
                            <h3 class="c-modal__booking-title">Your booking</h3>
                            <img class="c-modal__contact-img" src="${transport[i].imageOne}" alt="selected vechicle photo">
                            <h5 class="c-modal__booking-title">${transport[i].name}</h5>
                            <p class="c-modal__booking-partner">${transport[i].partner}</p>
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">From&nbsp</p>
                            <p id="modalPickUpLocation" class="c-modal__booking-text"></p>
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">On&nbsp</p>
                            <p id="modalPickUpDate" class="c-modal__booking-text"></p>
                            <p class="c-modal__booking-text">&nbspat&nbsp</p>
                            <p id="modalPickUpTime" class="c-modal__booking-text"></p>
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">To&nbsp</p>
                            <p id="modalDropOffLocation" class="c-modal__booking-text">
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">On&nbsp</p>
                            <p id="modalDropOffDate" class="c-modal__booking-text"></p>
                            <p class="c-modal__booking-text">&nbspat&nbsp</p>
                            <p id="modalDropOffTime" class="c-modal__booking-text"></p>
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">Total Cost = $</p><p id="infoTotalCost" class="c-modal__booking-text"></p>
                        </div>
                        <div class="c-modal__col-right">
                            <form class="c-modal__form" action="">
                                <label class="c-modal__label" for="name">Your first name</label>
                                <input class="c-modal__input" type="text">
                                <label class="c-modal__label" for="name">Your last name</label>
                                <input class="c-modal__input" type="text">
                                <label class="c-modal__label" for="phone">Your phone number</label>
                                <input class="c-modal__input" type="text">
                                <label class="c-modal__label" for="email">Your email address</label>
                                <input class="c-modal__input" type="text">
                            </form>
                            <p class="c-modal__licence-text">At check out you will asked to present relevant licence</p>
                        </div>
                    </div>
                    <div id="payment" class="c-modal__content">
                        <div class="c-modal__col-left">
                            <h3 class="c-modal__booking-title">Your booking</h3>
                            <img class="c-modal__contact-img" src="${transport[i].imageOne}" alt="selected vechicle photo">
                            <h5 class="c-modal__booking-title">${transport[i].name}</h5>
                            <p class="c-modal__booking-partner">${transport[i].partner}</p>
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">From&nbsp</p>
                            <p id="modalPickUpLocationTwo" class="c-modal__booking-text"></p>
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">On&nbsp</p>
                            <p id="modalPickUpDateTwo" class="c-modal__booking-text"></p>
                            <p class="c-modal__booking-text">&nbspat&nbsp</p>
                            <p id="modalPickUpTimeTwo" class="c-modal__booking-text"></p>
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">To&nbsp</p>
                            <p id="modalDropOffLocationTwo" class="c-modal__booking-text">
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">On&nbsp</p>
                            <p id="modalDropOffDateTwo" class="c-modal__booking-text"></p>
                            <p class="c-modal__booking-text">&nbspat&nbsp</p>
                            <p id="modalDropOffTimeTwo" class="c-modal__booking-text"></p>
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">Total Cost = $</p><p id="payTotalCost" class="c-modal__booking-text"></p>
                        </div>
                        <div class="c-modal__col-right">
                            <form class="c-modal__form" action="">
                                <h3 class="c-modal__col-title">Payment details</h3>
                                <label class="c-modal__label" for="name">Cardholder name</label>
                                <input class="c-modal__input" type="text">
                                <label class="c-modal__label" for="name">Card number</label>
                                <input class="c-modal__input" type="text">
                                <div class="c-modal__card-expiry">
                                    <div class="c-modal__expiry-wrap">
                                        <label class="c-modal__label" for="phone">Expiry month</label>
                                        <br />
                                        <input class="c-modal__input" type="text">
                                    </div>
                                    <div class="c-modal__expiry-wrap">
                                        <label class="c-modal__label" for="email">Expiry year</label>
                                        <br />
                                        <input class="c-modal__input" type="text">
                                    </div>
                                    <div class="c-modal__expiry-wrap">
                                        <label class="c-modal__label" for="email">CCV</label>
                                        <br />
                                        <input class="c-modal__input" type="text">
                                    </div>
                                </div>
                                <div class="c-modal__card-expiry">
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id="summary" class="c-modal__content">
                        <div class="c-modal__summary-ctn">
                            <h3 class="c-modal__booking-title">Your booking</h3>
                            <img class="c-modal__contact-img" src="${transport[i].imageOne}" alt="selected vechicle photo">
                            <h5 class="c-modal__booking-title">${transport[i].name}</h5>
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-partner">${transport[i].partner}</p>
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">From&nbsp</p>
                            <p id="modalPickUpLocationThree" class="c-modal__booking-text"></p>
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">On&nbsp</p>
                            <p id="modalPickUpDateThree" class="c-modal__booking-text"></p>
                            <p class="c-modal__booking-text">&nbspat&nbsp</p>
                            <p id="modalPickUpTimeThree" class="c-modal__booking-text"></p>
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">To&nbsp</p>
                            <p id="modalDropOffLocationThree" class="c-modal__booking-text">
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">On&nbsp</p>
                            <p id="modalDropOffDateThree" class="c-modal__booking-text"></p>
                            <p class="c-modal__booking-text">&nbspat&nbsp</p>
                            <p id="modalDropOffTimeThree" class="c-modal__booking-text"></p>
                            <div class="c-modal__break"></div>
                            <p class="c-modal__booking-text">Total Cost = $</p><p id="sumTotalCost" class="c-modal__booking-text"></p>
                        </div>
                    </div>
                    `
                ); 
            }
            
        }
        modalContent(this.id);
    });
}


function modalContent(vehicleSelectedId){

    const hireBtn = document.querySelector('#hireBtn');
    const infoConfirmBtn = document.querySelector('#infoConfirmBtn');
    const paymentConfirmBtn = document.querySelector('#paymentConfirmBtn');
    const closeBtn = document.querySelector('#closeBtn');
    const exitBtn = document.querySelector('#exitBtn');

    $('#contactInfo').hide();
    $('#payment').hide();
    $('#summary').hide();
    $('#infoConfirmBtn').hide();
    $('#paymentConfirmBtn').hide();
    $('#closeBtn').hide();

    $('#contactTitle').addClass("c-modal__title-ctn--stacked-one");

    function infoConfirm(){
        $('#contactInfo').hide();
        $('#payment').show();
        $('#infoConfirmBtn').hide();
        $('#paymentConfirmBtn').show();

        $('#contactTitle').removeClass("c-modal__title-ctn--active");
        $('#paymentTitle').addClass("c-modal__title-ctn--active");
    }

    function payConfirm(){
        $('#payment').hide();
        $('#summary').show();
        $('#paymentConfirmBtn').hide();
        $('#closeBtn').show();

        $('#paymentTitle').removeClass("c-modal__title-ctn--active");
        $('#sumTitle').addClass("c-modal__title-ctn--active");
    }

    // in case of multiple purchases
    function close(){
        $('#summary').hide();
        $('#payment').hide();
        $('#contactInfo').hide();
        $('#vehicleDetails').show();
        $('#infoConfirmBtn').hide();
        $('#paymentConfirmBtn').hide();
        $('#closeBtn').hide();
        $('#hireBtn').show();

        $('#sumTitle').removeClass("c-modal__title-ctn--active");
        $('#contactTitle').removeClass("c-modal__title-ctn--active");
        $('#paymentTitle').removeClass("c-modal__title-ctn--active");
        $('#vecDetTitle').addClass("c-modal__title-ctn--active");
    }

    $('.carousel').carousel({
        interval: false
    });

    // number of days in modal
    $('#travelDays').text(totalDays);
    
    if (totalDays == undefined){
        $('#travelDays').text("--");
    }

    // total cost in modal
    let i = 0;
    for(i = 0; i < transport.length; i++){
        const totalPrice = totalDays * (transport[i].price);

        let modalTotalPrice = totalPrice;

        if(parseInt(vehicleSelectedId) === transport[i].id){
            // console.log(transport[i].price);
            
            $('#totalCost').text(totalPrice);
            $('#infoTotalCost').text(totalPrice);
            $('#payTotalCost').text(totalPrice);
            $('#sumTotalCost').text(totalPrice);

            console.log(typeof totalPrice, totalPrice);

            if( isNaN(totalPrice) ){
                $('#totalCost').empty().append(
                    "--"
                );
            }
        }
    }

    function selectHire(){
        // if ( isNaN(modalTotalPrice) ){
        //     $('.c-modal__vehicleDetsError').empty();
        //     $('#vehicleDetails').append(
        //         '<p class="c-modal__vehicleDetsError">To hire please input your travel information and search first</p>'
        //     );
        // } else {
        //     $('#vehicleDetails').hide();
        //     $('#contactInfo').show();
        //     $('#hireBtn').hide();
        //     $('#infoConfirmBtn').show();

        //     $('#vecDetTitle').removeClass("c-modal__title-ctn--active");
        //     $('#contactTitle').addClass("c-modal__title-ctn--active");
        //     $('#contactTitle').removeClass("c-modal__title-ctn--stacked-one");
        // }
        $('#vehicleDetails').hide();
        $('#contactInfo').show();
        $('#hireBtn').hide();
        $('#infoConfirmBtn').show();

        $('#vecDetTitle').removeClass("c-modal__title-ctn--active");
        $('#contactTitle').addClass("c-modal__title-ctn--active");
        $('#contactTitle').removeClass("c-modal__title-ctn--stacked-one");
    }

    // pick up date in modal
    $('#modalPickUpDate').text(startDate);
    $('#modalPickUpDateTwo').text(startDate);
    $('#modalPickUpDateThree').text(startDate);

    // drop off date in modal
    $('#modalDropOffDate').text(endDate);
    $('#modalDropOffDateTwo').text(endDate);
    $('#modalDropOffDateThree').text(endDate);

    // pick up time in modal
    $('#modalPickUpTime').text(pickUpTime);
    $('#modalPickUpTimeTwo').text(pickUpTime);
    $('#modalPickUpTimeThree').text(pickUpTime);


    // drop off time in modal
    $('#modalDropOffTime').text(dropOffTime);
    $('#modalDropOffTimeTwo').text(dropOffTime);
    $('#modalDropOffTimeThree').text(dropOffTime);

    // pick up location
    $('#modalPickUpLocation').text(pickUpLocation);
    $('#modalPickUpLocationTwo').text(pickUpLocation);
    $('#modalPickUpLocationThree').text(pickUpLocation);
    console.log(pickUpLocation);

    // drop off location
    $('#modalDropOffLocation').text(dropOffLocation);
    $('#modalDropOffLocationTwo').text(dropOffLocation);
    $('#modalDropOffLocationThree').text(dropOffLocation);

    

    hireBtn.addEventListener("click", selectHire);
    infoConfirmBtn.addEventListener("click", infoConfirm);
    paymentConfirmBtn.addEventListener("click", payConfirm);
    closeBtn.addEventListener("click", close);
    exitBtn.addEventListener("click", close);
}
// ===============================
// end of modal
// ===============================


// ====================================
// start of jqueryUi Datepicker
// ====================================
let script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key +'&callback=initMap&libraries=places&v=weekly" async defer >';
// console.log(script);

let checkboxes = $("input[type=checkbox][name=type]");
let selectedType = [];

$(document).ready(function(){
    $('body').append(script);

    $('.c-final-sorting').hide();

    $('.carousel').carousel({
        interval: false
        // pause: 'hover',
    });

    $('#myModal').modal({
        keyboard: true
    });

    // start of fuel calculator display
    $("#FuelCalBtn").click(function(){
        $('#fuelCalContent').toggleClass('active');
    });

    $("#fuelCalClose").click(function(){
        $('#fuelCalContent').toggleClass('active');
    });
    // end of fuel calculator display

    // start of number of people input
    $( "#moreAdult" ).click(function() {
        var qtt = parseInt($('#quantityAdults').val(), 10);
        $('#quantityAdults').val(qtt+1);
    });
      
    $( "#lessAdult" ).click(function() {
        var qtt = parseInt($('#quantityAdults').val(), 10);
        if (qtt > 0) {
            $('#quantityAdults').val(qtt-1);
        }
    });

    $( "#moreChild" ).click(function() {
        var qtt = parseInt($('#quantityChildren').val(), 10);
        $('#quantityChildren').val(qtt+1);
    });
      
    $( "#lessChild" ).click(function() {
        var qtt = parseInt($('#quantityChildren').val(), 10);
        if (qtt > 0) {
            $('#quantityChildren').val(qtt-1);
        }
    });
    // end of number of people input

    // start of drop off location different to pick up checkbox
    let locationcheckBox = $("input[type=checkbox][name=return-trip]");
    
    locationcheckBox.prop('checked', true);

    locationcheckBox.change(function() { 
        $('#displayTwoLocations').toggleClass('show-locations');
        $('#pickUpLocLabel').toggleClass('show-label');
        $('#returnLocLabel').toggleClass('hide-label');
        $('#returnLocation').toggleClass('hide-location');

        // let locationReturnTrip = $('#returnLocation').val();
        // console.log(locationReturnTrip);
        // reseting selection for correct feedback
        $('#returnLocation').val('');
        $('#pickUpLocation').val('');
        $('#dropOffLocation').val('');
        
    });
    // end of drop off location different to pick up checkbox
    
    // Pick up time
    $('#pickUpTime').change(function(){
        pickUpTime = $('#pickUpTime').val();
        console.log(pickUpTime);
    });

    // Drop off time
    $('#dropOffTime').change(function(){
        dropOffTime = $('#dropOffTime').val();
        console.log(dropOffTime);
    });




    // ============================================
    // start of checkbox filter for inital sorting
    // ============================================

    let checkboxesI = $("input[type=checkbox][name=typeI]");
    let selectedTypeI = [];

    selectedTypeI = checkboxesI.filter(":checked").map(function() { 
        return this.value;
    }).get();
    
    function CheckboxNoTravelDetails(){
        
        // Attach a change event handler to the checkboxes.
        checkboxesI.change(function() {
            // console.log("CheckboxNoTravelDetails");
            $('#cardContent').empty();

            selectedTypeI = checkboxesI.filter(":checked").map(function() { 
                return this.value;
            }).get();
            
            // console.log(selectedTypeI);
            // console.log(selectedType.length);
            let i = 0;
            for(i = 0; i < selectedTypeI.length; i++){
                if(selectedTypeI[i] === 'motorbike'){
                    let i = 0;
                    for(i = 0; i < transport.length; i++){
            
                        if(transport[i].type === 'motorbike'){
                            generateCard(i);
                        }
                    }
                }
                if(selectedTypeI[i] === 'small car'){
                    let i = 0;
                    for(i = 0; i < transport.length; i++){
            
                        if(transport[i].type === 'small car'){
                            generateCard(i);
                        }
                    }
                }
                if(selectedTypeI[i] === 'large car'){
                    let i = 0;
                    for(i = 0; i < transport.length; i++){
            
                        if(transport[i].type === 'large car'){
                            generateCard(i);
                        }
                    }
                }
                if(selectedTypeI[i] === 'motor home'){
                    let i = 0;
                    for(i = 0; i < transport.length; i++){
            
                        if(transport[i].type === 'motor home'){
                            generateCard(i);
                        }
                    }
                }
            }
            modal();
        }); 
    }
    CheckboxNoTravelDetails();
    // ============================================
    // end of checkbox filter for inital sorting
    // ============================================

    // =========================================
    // start of price filter for inital sorting
    // =========================================
    $('#sortBtn').change(function(){
        let sortValue = ($('#sortBtn').val()).toLowerCase();
        // console.log(sortValue);
        if (sortValue === 'low'){

            const sortLow = (transport = []) => {
                const sorter = (a, b) => {
                return +a.price - +b.price;
                };
                transport.sort(sorter);
            };
            
            sortLow(transport);
            console.log(transport);
            displayPriceFilter();

        } else if (sortValue === 'high'){

            const sortHigh = (transport = []) => {
                const sorter = (a, b) => {
                return +b.price - +a.price;
                };
                transport.sort(sorter);
            };

            sortHigh(transport);
            console.log(transport);
            displayPriceFilter();
        }
    });


    function displayPriceFilter(){
        $('#cardContent').empty();
        // console.log(selectedTypeI);

        // let i = 0;
        // for(i = 0; i < selectedTypeI.length; i++){
        //     if(selectedTypeI[i] === 'motorbike'){
        //         let i = 0;
        //         for(i = 0; i < transport.length; i++){
        //             if(transport[i].type === 'motorbike'){
        //                 generateCard(i);
        //             };
        //         }
        //     }
        //     if(selectedTypeI[i] === 'small car'){
        //         let i = 0;
        //         for(i = 0; i < transport.length; i++){
        
        //             if(transport[i].type === 'small car'){
        //                 generateCard(i);
        //             };
        //         }
        //     }
        //     if(selectedTypeI[i] === 'large car'){
        //         let i = 0;
        //         for(i = 0; i < transport.length; i++){
        
        //             if(transport[i].type === 'large car'){
        //                 generateCard(i);
        //             };
        //         }
        //     }
        //     if(selectedTypeI[i] === 'motor home'){
        //         let i = 0;
        //         for(i = 0; i < transport.length; i++){
        
        //             if(transport[i].type === 'motor home'){
        //                 generateCard(i);
        //             };
        //         }
        //     }
        // }

        // Instead of looping through transport array loop through new array of filtered vehicles
        let i = 0;
        for(i = 0; i < transport.length; i++){
            // console.log(selectedTypeI[i]);
            // if(selectedTypeI[i] === 'motorbike'){
            //     // let i = 0;
            //     // for(i = 0; i < transport.length; i++){
            //     //     if(transport[i].type === 'motorbike'){
            //     //         generateCard(i);
            //     //     };
            //     // }
            //     generateCard(i);
            // }
            generateCard(i);
        }
        modal();
    }
    // =========================================
    // end of price filter for inital sorting
    // =========================================


});


// ============================
// start of init map function
// ============================
function initMap(){

    // datepicker from jqueryui
    $('#pickUpDate').datepicker({
        // date format formats the date
        dateFormat: 'yy-mm-dd',
        // lets us change the month
        changeMonth: true,
        minDate: new Date(),
        maxDate: '+1y',
        // on select function will run once the start date has been selected
        onSelect: function(date){
            let selectDate = new Date(date);
            // ms in a day
            let msecInADay = 86400000;
            let stDate = new Date(selectDate.getTime() + msecInADay);

            $('#dropOffDate').datepicker('option','minDate', stDate);
            let enDate = new Date(selectDate.getTime() + 8 * msecInADay);
            // +8 (or what ever number you enter) will restrict the selection to the specified number eg.. in this case it will be 8 days
            $('#dropOffDate').datepicker('option','maxDate', enDate);
        }
    });

    $('#dropOffDate').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth:true
    });

    // $('#calculateDays').click(function(){
    //     dateDiff();
    // });

    // function dateDiff(){
    //     let start = $(pickUpDate).datepicker('getDate');
    //     let end = $(dropOffDate).datepicker('getDate');

    //     // calculation to get readable days
    //     let days = (end - start)/1000/60/60/24
    //     $('#days').val(days);
    // }
    // dateDiff();

    // auto complete form
    let start = new google.maps.places.Autocomplete(
        document.getElementById('start'),
        {
            types: ['(cities)']
        }
    ); // autocomplete start

    let end = new google.maps.places.Autocomplete(
        document.getElementById('end'),
        {
            types: ['(cities)'],
        }
    );

    // directions distance and duration
    // initiate a direction request to the Direction service
    // https://developers.google.com/maps/documentation/javascript/directions
    const directionService = new google.maps.DirectionsService();

    // direction service render handels the display of lines and any associated markers
    const directionsRenderer = new google.maps.DirectionsRenderer();

    // setting custom map markers
    let nelson = { lat:-41.296991491466464, lng:173.22235323849344 };

    const image = {
        url: "./img/location-marker.svg",
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0,0) 
    };

    // calling the map function
    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 6,
        center: nelson,
    });

    // // locations for custom map markers
    // let locations = [
    //     ["aucklandAirport",-37.00583037363098,174.78537816193244, 1],
    //     ["wellingtonAirport",-41.32995285285088,174.81191968956364,2],
    //     ["queenstownAirport", -45.01820081582348, 168.74516306285938,3]
    // ];

    // let i = 0;
    // for(i = 0; i <locations.length; i++){
    //     const location = locations[i];
    //     // console.log(location);
    //     new google.maps.Marker({
    //         position: {lat:location[1],lng:location[2]},
    //         map,
    //         icon:image,
    //         title: location[0],
    //         zIndex:location[3]
    //     });
    // }


    directionsRenderer.setMap(map);

    document.getElementById('submit').addEventListener('click', () => {
        calculateAndDisplayRoute(directionService, directionsRenderer);
    });

}
// ============================
// end of init map function
// ============================


function calculateAndDisplayRoute(directionService, directionsRenderer){
    console.log(directionService);
    console.log(directionsRenderer);
    const waypts = [];
    const checkboxArray = document.getElementById('waypoints');

    for (let i = 0; i < checkboxArray.length; i++){
        if(checkboxArray.options[i].selected){
            waypts.push({
                // gets the lat and lng in degrees, contains one lat and long subfield
                // https://developers.google.com/maps/documentation/geolocation/overview
                location: checkboxArray[i].value,
                // stop over is boolean and it indicates a stop over on the route
                stopover: true,
            });
        }
    }
    console.log(waypts);

    // need to make a request to get the distance
    // directionService
    // allows us to - routes out the direction of selected locations
    directionService.route({
        // specifies the start location from which to calculate directions
        origin: document.getElementById('start').value,
        // destination specifies the end location
        destination: document.getElementById('end').value,
        // way points specifies an array of directions waypoints - waypoints alter the route
        waypoints: waypts,
        // to specify more efficient order of travel - rearange/optimise our way points
        optimizeWaypoints: true,
        // specify what mode of travel
        // https://developers.google.com/maps/documentation/javascript/examples/directions-travel-modes
        travelMode: google.maps.TravelMode.DRIVING,
        // travelMode: google.maps.TravelMode.TRANSIT,
        // transitOptions: {
        //     modes: ['TRAIN'],
        // },
    },
    (response, status) =>{
        // the OK indicates that no errors have occurred
        if (status === "OK"){
            console.log(response);
            // geocoding
            // https://developers.google.com/maps/documentation/javascript/geocoding
            // creates the render of the given directions
            // https://developers.google.com/maps/documentation/javascript/reference/directions
            directionsRenderer.setDirections(response);
            const route = response.routes[0];
            const summaryPanel = document.getElementById('directions-panel');

            summaryPanel.innerHTML = "";
            let totalDistance = 0;
            // for each route, display summary information.
            for(let i = 0; i < route.legs.length; i++){
                const routeSegment = i + 1;

                summaryPanel.innerHTML +=
                "<p class='fuel-calculator__route-title'>Route Segment: " + routeSegment + "</p>";
                summaryPanel.innerHTML += "<p class='fuel-calculator__route'>" + route.legs[i].start_address + " to&nbsp" + "</p>";
                summaryPanel.innerHTML += "<p class='fuel-calculator__route'>" + route.legs[i].end_address + "</p>";
                summaryPanel.innerHTML += "<p class='fuel-calculator__route'>" + route.legs[i].distance.text + " taking approximately " + route.legs[i].duration.text + " to complete." + "</p>";
                totalDistance += parseFloat(route.legs[i].distance.text);
            }
            fuelCalculation(totalDistance);
            estFuelCost(totalDistance, vehicleFuelEff, fuelPrice);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    }
    );

    // start of fuel efficiency selection
    let vehicleFuelEff = parseFloat($('#vehicleSel').val());
    // console.log(vehicleFuelEff);

    $('#fuelEfficiency').val(vehicleFuelEff + ' l/100km');
    // end of fuel efficiency selection

    // start of average fuel price selection
    let fuelPrice = parseFloat($('#fuelSel').val());
    console.log(fuelPrice);

    $('#fuelPrice').val( '$' + fuelPrice + " /l" );
    // end of average fuel price selection

    

}

function fuelCalculation(distance){
    // console.log(distance);

    $('#totalDist').val(distance + ' km');
}

function estFuelCost(distance, fuelEfficiency, price){
    let liters = (fuelEfficiency/100)*distance;
    const fuelCost = price*liters;
    console.log(fuelEfficiency);
    console.log(price);
    console.log(fuelCost);

    $('#fuelCost').val( '$' + fuelCost.toFixed(2) );
}

$('#start,#end').click(function(){
    $(this).val('');
});
// ====================================
// end of jqueryUi Datepicker
// ====================================





// ====================================
// start of filtering by travel details
// ====================================
const submitInfo = document.querySelector('#submitInfo');

let msDay = 1000 * 3600 * 24;

// setting checkboxes as checked initally
$('input[name="type"]').prop('checked', true);

// setting checkboxes as checked initally
$('input[name="typeI"]').prop('checked', true);

function calculateDates(event){
    $('#cardContent').empty();
    event.preventDefault();

    // $('.c-inital-filters').addClass('activated');
    
    // getting data from date input
    const pickUpDate = new Date($('#pickUpDate').val());
    const dropOffDate = new Date($('#dropOffDate').val());
    // const checkIn = document.querySelector('#checkIn');
    // console.log(pickUpDate);
    // console.log(dropOffDate);

    // getting the individual data of day,month and year
    let pickUpDay = pickUpDate.getDate(),
        pickUpMonth = pickUpDate.getMonth(),
        pickUpYear = pickUpDate.getFullYear(),
        dropOffDay = dropOffDate.getDate(),
        dropOffMonth = dropOffDate.getMonth(),
        dropOffYear = dropOffDate.getFullYear();

    // joining the data - join function turns an array into a string
    let pickUpDetails = [pickUpDay,pickUpMonth,pickUpYear].join('/');
    let dropOffDetails = [dropOffDay,dropOffMonth,dropOffYear].join('/');
    // console.log(pickUpDetails);
    // console.log(dropOffDetails);

    startDate = pickUpDetails;
    endDate = dropOffDetails;

    // calculating the difference
    let difference = dropOffDate.getTime() - pickUpDate.getTime();
    let dayDifference = (difference/msDay);
    console.log(dayDifference);
    totalDays = dayDifference;

    // start of final sorting days feedback
    $('#days').text(dayDifference);
    if ( isNaN(dayDifference) ){
        $('#days').empty().append(
            "--"
        ); 
    }
    // end of final sorting days feedback

    
    // modalTravelDays(dayDifference);
    
    


    // start of pick up and drop off feedback
    $('#dayTimeFeedback').val("");
    if( pickUpDate == "Invalid Date" ){
        $('#dayTimeFeedback').val("Please select your pick up day and time");
    }

    $('#dayTimeFeedback').val("");
    if( dropOffDate == "Invalid Date" ){
        $('#dayTimeFeedback').val("Please select your drop off day and time");
    }
    // end of pick up and drop off feedback



    let numberOfPeople = parseInt($('#quantityAdults').val()) + parseInt($('#quantityChildren').val());
    let adults = parseInt($('#quantityAdults').val());
    // console.log(typeof numberOfPeople, numberOfPeople);

    // start of number of people feedback
    $('#numberOfPeople').html(numberOfPeople);

    $('#peopleFeedback').val("");
    if( adults === 0 ){
        $('#peopleFeedback').val("Sorry, adults are required to drive the vehicle");
    }

    if( numberOfPeople === 0 ){
        $('#peopleFeedback').val("Please select number of people in the vehicle");
    }
    // end of number of people feedback

    // start of location feedback
    let locationReturnTrip = $('#returnLocation').val();
    let locationPickUp = $('#pickUpLocation').val();
    let locationDropOff = $('#dropOffLocation').val();

    $('#locationFeedback').val("");
    if( locationReturnTrip == "" && locationPickUp == "" && locationDropOff == ""){
        $('#locationFeedback').val("Please select your pick up and drop off location");
    } else if( locationReturnTrip == "" && locationDropOff == ""){
        $('#locationFeedback').val("Please select your drop off location");
    } else if( locationReturnTrip == "" && locationPickUp == ""){
        $('#locationFeedback').val("Please select your pick up location");
    }
    // end of location feedback

    // start of no results feedback
    if( numberOfPeople === 0 || adults === 0 || pickUpDate == "Invalid Date" ||dropOffDate == "Invalid Date" || (locationReturnTrip == "" && (locationPickUp == "" || locationDropOff == ""))){
        console.log("not valid details");
        $('#feedbackMessage').html('<p class="l-feedback__text">Invalid search. Please check your travel details</p>');
    } else {
        $('#feedbackMessage').empty();
    }
    // end of no results feedback

    // Assigning location values to global variables
    if( locationPickUp == "" &&  locationDropOff == ""){
        
        pickUpLocation = locationReturnTrip;
        dropOffLocation = locationReturnTrip;
        console.log(pickUpLocation);
        console.log(dropOffLocation);
    } else {
        pickUpLocation = locationPickUp;
        // console.log(pickUpLocation);
        dropOffLocation = locationDropOff;
        // console.log(dropOffLocation);
    }

    

    // CbCallCondition();

    // see BtnCheckboxFilter(dayDifference, numberOfPeople); no longer working
    // if( selectedTypeI.length > 0 ){
    //     BtnCheckboxFilter(dayDifference, numberOfPeople);
    // } else{
    //     travelDetailsNoVehicle(dayDifference, numberOfPeople);
    // };

    travelDetailsNoVehicle(dayDifference, numberOfPeople, adults, locationReturnTrip, locationPickUp, locationDropOff);

    AfterTravelDetailsCheckbox(dayDifference, numberOfPeople);

    $('.c-inital-sorting').hide();
    $('.c-final-sorting').show();
    
}

submitInfo.addEventListener("click", calculateDates);


function travelDetailsNoVehicle(daysOfTravel, peopleBooked, peopleAdult, bothWaysLocation, firstLocation, secondLocation){
    console.log(typeof daysOfTravel, daysOfTravel);
    console.log(typeof peopleBooked, peopleBooked);

    //filtering by people booked and days of travel if no vehicle checkboxes are clicked
    console.log("no vehicles clicked");
    $('#cardContent').empty();

    if( numberOfPeople === 0 || peopleAdult === 0 || pickUpDate == "Invalid Date" ||dropOffDate == "Invalid Date" || (bothWaysLocation == "" && (firstLocation == "" || secondLocation == "")) ){
    } else {
        let i = 0;
        for(i = 0; i < transport.length; i++){
            if ((peopleBooked === 1) && (daysOfTravel >= 1 && daysOfTravel <= 5) && (transport[i].type === 'motorbike')){
                generateCard(i);
            }
            if ((peopleBooked >= 1 && peopleBooked <= 2) && (daysOfTravel >= 1 && daysOfTravel <= 10) && (transport[i].type === 'small car')){
                generateCard(i);
            }
            if ((peopleBooked >= 1 && peopleBooked <= 5) && (daysOfTravel >= 3 && daysOfTravel <= 10) && (transport[i].type === 'large car')){
                generateCard(i);
            }
            if ((peopleBooked >= 2 && peopleBooked <= 6) && (daysOfTravel >= 2 && daysOfTravel <= 15) && (transport[i].type === 'motor home')){
                generateCard(i);
            }
        }
        modal();
    }
}

submitInfo.addEventListener("click", calculateDates);
// ====================================
// end of filtering by travel details
// ====================================

// =======================================================
// start of changing vehicle checkbox after initial search
// =======================================================
function AfterTravelDetailsCheckbox(daysOfTravel, peopleBooked){
    console.log("AfterCheckboxFilter");
    // let checkboxes = $("input[type=checkbox][name=type]")
    // let selectedType = [];

    // console.log(selectedType);

    // Attach a change event handler to the checkboxes.
    checkboxes.change(function() {
        $('#cardContent').empty();
        selectedType = checkboxes
        // Filter out unchecked boxes.
        .filter(":checked")
        // Extract values using jQuery map. 
        .map(function() { 
        return this.value;
        }) 
        // Get array.
        .get();
        
        console.log(daysOfTravel);
        console.log(peopleBooked);

        console.log("AfterCheckboxFilter");
        console.log(selectedType);

        let i = 0;
        for(i = 0; i < selectedType.length; i++){
            if(selectedType[i] === 'motorbike'){
                let i = 0;
                for(i = 0; i < transport.length; i++){
        
                    if ((peopleBooked === 1) && (daysOfTravel >= 1 && daysOfTravel <= 5) && (transport[i].type === 'motorbike')){
                        generateCard(i);
                    }
                }
            }
            if(selectedType[i] === 'small car'){
                let i = 0;
                for(i = 0; i < transport.length; i++){
        
                    if ((peopleBooked >= 1 && peopleBooked <= 2) && (daysOfTravel >= 1 && daysOfTravel <= 10) && (transport[i].type === 'small car')){
                        generateCard(i);
                    }
                }
            }
            if(selectedType[i] === 'large car'){
                let i = 0;
                for(i = 0; i < transport.length; i++){
        
                    if ((peopleBooked >= 1 && peopleBooked <= 5) && (daysOfTravel >= 3 && daysOfTravel <= 10) && (transport[i].type === 'large car')){
                        generateCard(i);
                    }
                }
            }
            if(selectedType[i] === 'motor home'){
                let i = 0;
                for(i = 0; i < transport.length; i++){
        
                    if ((peopleBooked >= 2 && peopleBooked <= 6) && (daysOfTravel >= 2 && daysOfTravel <= 15) && (transport[i].type === 'motor home')){
                        generateCard(i);
                    }
                }
            }
        }
        modal();
    }); 
}
// =======================================================
// end of changing vehicle checkbox after initial search
// =======================================================


// =========================================
// start of price filter for inital sorting
// =========================================
$('#sortBtnFin').change(function(){
    let sortValue = ($('#sortBtnFin').val()).toLowerCase();
    console.log(sortValue);
    if (sortValue === 'low'){

        const sortLow = (transport = []) => {
            const sorter = (a, b) => {
            return +a.price - +b.price;
            };
            transport.sort(sorter);
        };
        
        sortLow(transport);
        console.log(transport);
        displayPriceFilter();

    } else if (sortValue === 'high'){

        const sortHigh = (transport = []) => {
            const sorter = (a, b) => {
            return +b.price - +a.price;
            };
            transport.sort(sorter);
        };

        sortHigh(transport);
        console.log(transport);
        displayPriceFilter();
    }
});


function displayPriceFilter(){
    $('#cardContent').empty();
    // console.log(selectedType);
    let i = 0;
    for(i = 0; i < transport.length; i++){
        generateCard(i);
    }
    modal();
}
// =========================================
// end of price filter for inital sorting
// =========================================

// Event Listeners