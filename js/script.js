console.log("script is linked");


// Query Selectors


// global variables
let totalDays;

// ===============================
// start of transport object-array
// ===============================
const transport = [
    {   
        type: 'motorbike',
        id: 101,
        carouselId: "carouselOne",
        modalCarouselId: "modalCarouselOne",
        name: "mb name a",
        partner: "Eurocar",
        price: "199",
        transmission: "Automatic",
        efficiency: "Excellent",
        tankCapacity: "2.4L",
        imageOne: './img/suzuki-dl650-v-strom.jpeg',
        imageTwo: './img/suzuki-dl650-v-strom.jpeg',
        imageThree: './img/suzuki-dl650-v-strom.jpeg',
        minPeople: 1,
        maxPeople: 1,
        minTravelDays: 1,
        maxTravelDays: 5
    },
    {   
        type: 'motorbike',
        id: 105,
        carouselId: "carouselFive",
        modalCarouselId: "modalCarouselFive",
        name: "mb name b",
        partner: "d",
        price: "120",
        transmission: "Automatic",
        efficiency: "Excellent",
        tankCapacity: "2.4L",
        imageOne: './img/suzuki-dl650-v-strom.jpeg',
        imageTwo: './img/suzuki-dl650-v-strom.jpeg',
        imageThree: './img/suzuki-dl650-v-strom.jpeg',
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
        imageOne: './img/toyota-corolla-hatch-gx-ng-2018-1.png',
        imageTwo: './img/toyota-corolla-hatch-gx-ng-2018-1.png',
        imageThree: './img/toyota-corolla-hatch-gx-ng-2018-1.png',
        minPeople: 1,
        maxPeople: 2,
        minTravelDays: 1,
        maxTravelDays: 10
    },
    {   
        type: 'large car',
        id: 103,
        carouselId: "carouselThree",
        modalCarouselId: "modalCarouselThree",
        name: "lc name",
        partner: "b",
        price: "144",
        transmission: "Automatic",
        efficiency: "Excellent",
        tankCapacity: "2.4L",
        imageOne: './img/suv.jpeg',
        imageTwo: './img/suv.jpeg',
        imageThree: './img/suv.jpeg',
        minPeople: 1,
        maxPeople: 5,
        minTravelDays: 3,
        maxTravelDays: 10
    },
    {   
        type: 'motor home',
        id: 104,
        carouselId: "carouselFour",
        modalCarouselId: "modalCarouselFour",
        name: "mh name",
        partner: "a",
        price: "200",
        transmission: "Automatic",
        efficiency: "Excellent",
        tankCapacity: "2.4L",
        imageOne: './img/apollo-euro-camper-4-berth-white-background.jpeg',
        imageTwo: './img/apollo-euro-camper-4-berth-white-background.jpeg',
        imageThree: './img/apollo-euro-camper-4-berth-white-background.jpeg',
        minPeople: 2,
        maxPeople: 6,
        minTravelDays: 2,
        maxTravelDays: 15
    }
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
            <div id="${transport[x].carouselId}" class="carousel slide">
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
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 c-card__img" src="${transport[x].imageOne}" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 c-card__img" src="${transport[x].imageTwo}" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 c-card__img" src="${transport[x].imageThree}" alt="Third slide">
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
    };
    modal();
};
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
                            <img class="c-modal__contact-img" src="./img/toyota-corolla-hatch-gx-ng-2018-1.png" alt="">
                        </div>
                        <div class="c-modal__col-right">
                            <form class="c-modal__form" action="">
                                <label class="c-modal__label" for="name">Your name</label>
                                <br />
                                <input class="c-modal__input" type="text">
                                <br />
                                <label class="c-modal__label" for="phone">Your phone number</label>
                                <br />
                                <input class="c-modal__label" type="text">
                                <br />
                                <label class="c-modal__label" for="email">Your email address</label>
                                <br />
                                <input class="c-modal__label" type="text">
                            </form>
                        </div>
                    </div>
                    <div id="payment" class="c-modal__content"></div>
                    <div id="summary" class="c-modal__content"></div>
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

    $('#contactInfo').hide();
    $('#payment').hide();
    $('#summary').hide();
    $('#infoConfirmBtn').hide();
    $('#paymentConfirmBtn').hide();
    $('#closeBtn').hide();

    $('#contactTitle').addClass("c-modal__title-ctn--stacked-one");

    function hire(){
        $('#vehicleDetails').hide();
        $('#contactInfo').show();
        $('#hireBtn').hide();
        $('#infoConfirmBtn').show();

        $('#vecDetTitle').removeClass("c-modal__title-ctn--active");
        $('#contactTitle').addClass("c-modal__title-ctn--active");
        $('#contactTitle').removeClass("c-modal__title-ctn--stacked-one");
    }

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
        $('#vehicleDetails').show();
        $('#closeBtn').hide();
        $('#hireBtn').show();

        $('#sumTitle').removeClass("c-modal__title-ctn--active");
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
        const totalPrice = totalDays * (transport[i].price)

        if(parseInt(vehicleSelectedId) === transport[i].id){
            // console.log(transport[i].price);
            
            $('#totalCost').text(totalPrice);

            // console.log(typeof totalPrice, totalPrice);

            if ( isNaN(totalPrice) ){
                $('#totalCost').empty().append(
                    "--"
                ); 
            }
        } 
        
    }

    


    hireBtn.addEventListener("click", hire);
    infoConfirmBtn.addEventListener("click", infoConfirm);
    paymentConfirmBtn.addEventListener("click", payConfirm);
    closeBtn.addEventListener("click", close);
}
// // ===============================
// // end of modal
// // ===============================


// ====================================
// start of jqueryUi Datepicker
// ====================================
let script = '<script src="https://maps.googleapis.com/maps/api/js?key=' + key +'&callback=initMap&libraries=places&v=weekly" async defer >'
// console.log(script);

let checkboxes = $("input[type=checkbox][name=type]")
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
    })

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
    let locationcheckBox = $("input[type=checkbox][name=return-trip]")
    
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
    
    
});

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
            let enDate = new Date(selectDate.getTime() + 8 * msecInADay)
            // +8 (or what ever number you enter) will restrict the selection to the specified number eg.. in this case it will be 8 days
            $('#dropOffDate').datepicker('option','maxDate', enDate)
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
        },
    );

    // directions distance and duration
    // initiate a direction request to the Direction service
    // https://developers.google.com/maps/documentation/javascript/directions
    const directionService = new google.maps.DirectionsService();

    // direction service render handels the display of lines and any associated markers
    const directionsRenderer = new google.maps.DirectionsRenderer();



    // calling the map function
    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 7,
        center: {lat:-36.605778019891645, lng:175.7904390304845},
    })


    directionsRenderer.setMap(map);

    document.getElementById('submit').addEventListener('click', () => {
        calculateAndDisplayRoute(directionService, directionsRenderer);
    });

}

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
            directionsRenderer.setDirections(response)
            const route = response.routes[0];
            const summaryPanel = document.getElementById('directions-panel');

            summaryPanel.innerHTML = "";
            let totalDistance = 0;
            // for each route, display summary information.
            for(let i = 0; i < route.legs.length; i++){
                const routeSegment = i + 1;

                summaryPanel.innerHTML +=
                "<b>Route Segment:" + routeSegment + "</><br>";
                summaryPanel.innerHTML += route.legs[i].start_address + " to ";
                summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
                summaryPanel.innerHTML +=
                route.legs[i].distance.text + " and it take " + route.legs[i].duration.text + " to reach."
                + "<br><br>";
                totalDistance += parseFloat(route.legs[i].distance.text)
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
    console.log(pickUpDetails);
    console.log(dropOffDetails);

    // calculating the difference
    let difference = dropOffDate.getTime() - pickUpDate.getTime();
    let dayDifference = (difference/msDay);
    console.log(dayDifference);
    totalDays = dayDifference;

    // start of final sorting days feedback
    $('#days').text(dayDifference);
    // end of final sorting days feedback

    
    // modalTravelDays(dayDifference);
    
    


    // start of pick up and drop off feedback
    if( pickUpDate == "Invalid Date" ){
        $('#dayTimeFeedback').val("Please select your pick up day and time");
    };

    if( dropOffDate == "Invalid Date" ){
        $('#dayTimeFeedback').val("Please select your drop off day and time");
    };
    // end of pick up and drop off feedback



    let numberOfPeople = parseInt($('#quantityAdults').val()) + parseInt($('#quantityChildren').val());
    let adults = parseInt($('#quantityAdults').val());
    // console.log(typeof numberOfPeople, numberOfPeople);

    // start of number of people feedback
    $('#numberOfPeople').html(numberOfPeople);

    if( adults === 0 ){
        $('#peopleFeedback').val("Sorry, adults are required to drive the vehicle");
    };

    if( numberOfPeople === 0 ){
        $('#peopleFeedback').val("Please select number of people in the vehicle");
    };
    // end of number of people feedback

    // start of location feedback
    let locationReturnTrip = $('#returnLocation').val();
    let locationPickUp = $('#pickUpLocation').val();
    let locationDropOff = $('#dropOffLocation').val();

    if( locationReturnTrip == "" && locationPickUp == "" && locationDropOff == ""){
        $('#locationFeedback').val("Please select your pick up and drop off location");
    } else if( locationReturnTrip == "" && locationDropOff == ""){
        $('#locationFeedback').val("Please select your drop off location");
    } else if( locationReturnTrip == "" && locationPickUp == ""){
        $('#locationFeedback').val("Please select your pick up location");
    };
    // end of location feedback

    // start of no results feedback
    if( numberOfPeople === 0 || adults === 0 || pickUpDate == "Invalid Date" ||dropOffDate == "Invalid Date" || (locationReturnTrip == "" && (locationPickUp == "" || locationDropOff == ""))){
        console.log("not valid details")
        $('#feedbackMessage').html('<p class="l-feedback__text">Invalid search. Please check your travel details</p>');
    }
    // end of no results feedback


    // CbCallCondition();

    // see BtnCheckboxFilter(dayDifference, numberOfPeople); no longer working
    // if( selectedTypeI.length > 0 ){
    //     BtnCheckboxFilter(dayDifference, numberOfPeople);
    // } else{
    //     travelDetailsNoVehicle(dayDifference, numberOfPeople);
    // };

    travelDetailsNoVehicle(dayDifference, numberOfPeople);

    AfterTravelDetailsCheckbox(dayDifference, numberOfPeople);

    $('.c-inital-sorting').hide();
    $('.c-final-sorting').show();
    
};

submitInfo.addEventListener("click", calculateDates);


function travelDetailsNoVehicle(daysOfTravel, peopleBooked){
    console.log(typeof daysOfTravel, daysOfTravel);
    console.log(typeof peopleBooked, peopleBooked);

    //filtering by people booked and days of travel if no vehicle checkboxes are clicked
    console.log("no vehicles clicked");
    $('#cardContent').empty();
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
    };
    modal();
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
        .get() 
        
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