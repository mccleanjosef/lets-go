// =======================================================
// start of checkbox filter before inputing travel details
// =======================================================

// function CheckboxNoTravelDetails(){
    
//     // Attach a change event handler to the checkboxes.
//     checkboxes.change(function() {
//         console.log("CheckboxNoTravelDetails");
//         $('#cardContent').empty();
//         selectedType = checkboxes
//         // Filter out unchecked boxes.
//         .filter(":checked")
//         // Extract values using jQuery map. 
//         .map(function() { 
//         return this.value;
//         }) 
//         // Get array.
//         .get() 
        
//         console.log(selectedType);
//         // console.log(selectedType.length);
//         let i = 0;
//         for(i = 0; i < selectedType.length; i++){
//             if(selectedType[i] === 'motorbike'){
//                 let i = 0;
//                 for(i = 0; i < transport.length; i++){
        
//                     if(transport[i].type === 'motorbike'){
//                         generateCard(i);
//                     };
//                 }
//             }
//             if(selectedType[i] === 'small car'){
//                 let i = 0;
//                 for(i = 0; i < transport.length; i++){
        
//                     if(transport[i].type === 'small car'){
//                         generateCard(i);
//                     };
//                 }
//             }
//             if(selectedType[i] === 'large car'){
//                 let i = 0;
//                 for(i = 0; i < transport.length; i++){
        
//                     if(transport[i].type === 'large car'){
//                         generateCard(i);
//                     };
//                 }
//             }
//             if(selectedType[i] === 'motor home'){
//                 let i = 0;
//                 for(i = 0; i < transport.length; i++){
        
//                     if(transport[i].type === 'motor home'){
//                         generateCard(i);
//                     };
//                 }
//             }
//         }
//         modal();
//     }); 
// }



// =======================================================
// end of checkbox filter before inputing travel details
// =======================================================

// trying to stop calling CheckboxNoTravelDetails when travel details are inputed.

// function CbCallCondition(){
//     AfterTravelDetailsCheckbox();

//     // if( $('#travelDetails').hasClass('activated') ){
//     //     console.log("not calling CBnoTD");
//     // } else {
//     //     console.log("calling CBnoTD");
//     //     CheckboxNoTravelDetails();
//     // };
// }
// CbCallCondition();


// feedback message to fill in Travel details before filtering

// if( !$('#travelDetails').hasClass('activated') ){
//     $('#sortBy').change(function(){
//         console.log("change");
//         $('#completeTD').html("<b>Please fill in your details before filtering</b>");
//     });
// };



// // ==============================
//     // start of alphabetical sorting
//     // ==============================
//     $('#sortBtn').change(function(){
//         // console.log("testing");
//         let sortValue = ($('#sortBtn').val()).toLowerCase();
//         console.log(sortValue);
//         if ((sortValue === 'title') || (sortValue === 'brand')){
//             // console.log('is equal');
//             sortByAscending(sortValue);
//         }
//     });

    

//     function sortByAscending(sortOrder){
//         // console.log(sortOrder);
//         transport.sort(function(a,b){
//             switch(sortOrder){
//                 case 'title':
//                     var itemA = a.title.toLowerCase(), itemB = b.title.toLowerCase();
//                     break;
//                 case 'brand':
//                     var itemA = a.brand.toLowerCase(), itemB = b.brand.toLowerCase();
//                     break;
//                 default:
//                     console.log('not matching');
//             };
    
//             if(itemA < itemB){
//                 return -1;
//             }
//             if(itemA > itemB){
//                 return 1;
//             }
//         });
//         aphaSortBy(dayDifference, numberOfPeople);
//     }

//     function aphaSortBy(daysOfTravel, peopleBooked){
//         // let checkboxes = $("input[type=checkbox][name=type]")
//         // let selectedType = [];
//         $('#cardContent').empty();
        
        
//         let i = 0;
//         for(i = 0; i < selectedType.length; i++){
//             // console.log(selectedType.length);
//             // generateCard(i);
            
//             if(selectedType[i] === 'motorbike'){
//                 console.log("apha");
//                 let i = 0;
//                 for(i = 0; i < transport.length; i++){
                    
//                     if ((peopleBooked === 1) && (daysOfTravel >= 1 && daysOfTravel <= 5) && (transport[i].type === 'motorbike')){
//                         generateCard(i);
//                     }
//                 }
//             }
//             if(selectedType[i] === 'small car'){
//                 let i = 0;
//                 for(i = 0; i < transport.length; i++){
        
//                     if ((peopleBooked >= 1 && peopleBooked <= 2) && (daysOfTravel >= 1 && daysOfTravel <= 10) && (transport[i].type === 'small car')){
//                         generateCard(i);
//                     }
//                 }
//             }
//             if(selectedType[i] === 'large car'){
//                 let i = 0;
//                 for(i = 0; i < transport.length; i++){
        
//                     if ((peopleBooked >= 1 && peopleBooked <= 5) && (daysOfTravel >= 3 && daysOfTravel <= 10) && (transport[i].type === 'large car')){
//                         generateCard(i);
//                     }
//                 }
//             }
//             if(selectedType[i] === 'motor home'){
//                 let i = 0;
//                 for(i = 0; i < transport.length; i++){
        
//                     if ((peopleBooked >= 2 && peopleBooked <= 6) && (daysOfTravel >= 2 && daysOfTravel <= 15) && (transport[i].type === 'motor home')){
//                         generateCard(i);
//                     }
//                 }
//             }
//         };
//         modal();
//     }
//     // ==============================
//     // end of alphabetical sorting
//     // ==============================


// no longer works as it would need the selectedTypeI from CheckboxNoTravelDetails and travel data
// // ===================================================================
// // start of checkbox filter if selected before inputing travel deatils
// // ===================================================================
// function BtnCheckboxFilter(daysOfTravel, peopleBooked){
//     // function uses the already filled selectedType array
//     // and is called on submitInfo button not checkbox change

//     $('#cardContent').empty();
//     // console.log(daysOfTravel);
//     // console.log(peopleBooked);

//     console.log("BtnCheckboxFilter");
//     console.log(selectedTypeI);

//     let i = 0;
//     for(i = 0; i < selectedTypeI.length; i++){
//         if(selectedTypeI[i] === 'motorbike'){
//             let i = 0;
//             for(i = 0; i < transport.length; i++){
    
//                 if ((peopleBooked === 1) && (daysOfTravel >= 1 && daysOfTravel <= 5) && (transport[i].type === 'motorbike')){
//                     generateCard(i);
//                 }
//             }
//         }
//         if(selectedTypeI[i] === 'small car'){
//             let i = 0;
//             for(i = 0; i < transport.length; i++){
    
//                 if ((peopleBooked >= 1 && peopleBooked <= 2) && (daysOfTravel >= 1 && daysOfTravel <= 10) && (transport[i].type === 'small car')){
//                     generateCard(i);
//                 }
//             }
//         }
//         if(selectedTypeI[i] === 'large car'){
//             let i = 0;
//             for(i = 0; i < transport.length; i++){
    
//                 if ((peopleBooked >= 1 && peopleBooked <= 5) && (daysOfTravel >= 3 && daysOfTravel <= 10) && (transport[i].type === 'large car')){
//                     generateCard(i);
//                 }
//             }
//         }
//         if(selectedTypeI[i] === 'motor home'){
//             let i = 0;
//             for(i = 0; i < transport.length; i++){
    
//                 if ((peopleBooked >= 2 && peopleBooked <= 6) && (daysOfTravel >= 2 && daysOfTravel <= 15) && (transport[i].type === 'motor home')){
//                     generateCard(i);
//                 }
//             }
//         }
//     }
//     modal();
// }
// // ===================================================================
// // end of checkbox filter if selected before inputing travel deatils
// // ===================================================================