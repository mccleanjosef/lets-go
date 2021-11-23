console.log("script is linked");


// Query Selectors

// ===============================
// start of transport object-array
// ===============================
let transport = [
    {   
        type: 'motorbike',
        id: 101,
        name: "mb name a",
        brand: "d",
        price: "199",
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
        id: 101,
        name: "mb name b",
        brand: "d",
        price: "120",
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
        name: "sc name",
        brand: "c",
        price: "129",
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
        name: "lc name",
        brand: "b",
        price: "144",
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
        name: "mh name",
        brand: "a",
        price: "200",
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
        <div class="card card--style">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="${transport[x].imageOne}" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="${transport[x].imageTwo}" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="${transport[x].imageThree}" alt="Third slide">
                </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="card-body">
                <h5 class="card-title">${transport[x].name}</h5>
                <p class="card-text">${transport[x].type}</p>
                <p class="card-text">$${transport[x].price}</p>
                <button id="${transport[x].id}" type="button" class="btn btn-primary vehicleSelect" data-toggle="modal" data-target="#exampleModalCenter">
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
                    <div id="vehicleDetails" class="c-modal__content"></div>
                    <div id="review" class="c-modal__content modal-hide"></div>
                    <div id="summary" class="c-modal__content"></div>
                    `
                );
                modalContent();
            }
        }
    });
}

function modalContent(){
    $('#review').hide();
    $('#summary').hide();
    $('#confirmBtn').hide();
    $('#closeBtn').hide();

    const hireBtn = document.querySelector('#hireBtn');
    const confirmBtn = document.querySelector('#confirmBtn');
    const closeBtn = document.querySelector('#closeBtn');

    function hire(){
        $('#vehicleDetails').hide();
        $('#review').show();
        $('#hireBtn').hide();
        $('#confirmBtn').show();

        $('#vecDetTitle').removeClass("c-modal__title-ctn--active");
        $('#revTitle').addClass("c-modal__title-ctn--active");
    }

    function confirm(){
        $('#review').hide();
        $('#summary').show();
        $('#confirmBtn').hide();
        $('#closeBtn').show();

        $('#revTitle').removeClass("c-modal__title-ctn--active");
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

    hireBtn.addEventListener("click", hire);
    confirmBtn.addEventListener("click", confirm);
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

    $('.l-finalSorting').hide();

    $('.carousel').carousel({
        interval: false
        // pause: 'hover',
    })

    $('#myModal').modal({
        keyboard: true
    })

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
            let stDate = new Date(selectDate.getTime() + 0 * msecInADay);

            $('#dropOffDate').datepicker('option','minDate', stDate);
            let enDate = new Date(selectDate.getTime() + 60 * msecInADay)
            // +60 restricts the selection to 60 days
            $('#dropOffDate').datepicker('option','maxDate', enDate)
        }
    });

    $('#dropOffDate').datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth:true
    });

    // start of number of days feedback
    $('#submitInfo').click(function(){
        dateDiff();
    });

    function dateDiff(){
        let start = $(pickUpDate).datepicker('getDate');
        let end = $(dropOffDate).datepicker('getDate');

        // calculation to get readable days
        let days = ((end - start)/1000/60/60/24) + 1
        $('#days').html(days);
    }
    // end of number of days feedback
}
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
    let dayDifference = (difference/msDay) + 1;
    // console.log(dayDifference);

    let numberOfPeople = parseInt($('#adults').val()) + parseInt($('#children').val());
    // console.log(typeof numberOfPeople, numberOfPeople);

    // start of number of people feedback
    $('#submitInfo').click(function(){
        people();
    });

    function people(){
        $('#numberOfPeople').html(numberOfPeople);
    }
    // end of number of people feedback

    // CbCallCondition();

    // see BtnCheckboxFilter(dayDifference, numberOfPeople); no longer working
    // if( selectedTypeI.length > 0 ){
    //     BtnCheckboxFilter(dayDifference, numberOfPeople);
    // } else{
    //     travelDetailsNoVehicle(dayDifference, numberOfPeople);
    // };
    travelDetailsNoVehicle(dayDifference, numberOfPeople);

    AfterTravelDetailsCheckbox(dayDifference, numberOfPeople);

    $('.l-initalSorting').hide();
    $('.l-finalSorting').show();
    
};


function travelDetailsNoVehicle(daysOfTravel, peopleBooked){
    // console.log(typeof daysOfTravel, daysOfTravel);
    // console.log(typeof peopleBooked, peopleBooked);

    //filtering by people booked and days of travel if no vehicle checkboxes are clicked
    console.log("no vehicles clicked");
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
    // let checkboxes = $("input[type=checkbox][name=type]")
    // let selectedType = [];

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
        
        // console.log(daysOfTravel);
        // console.log(peopleBooked);

        console.log("AfterCheckboxFilter");
        // console.log(selectedType);

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