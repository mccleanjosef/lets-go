$(document).ready(function(){
    // ============================================
    // start of checkbox filter for inital sorting
    // ============================================

    let checkboxesI = $("input[type=checkbox][name=typeI]")
    let selectedTypeI = [];

    selectedTypeI = checkboxesI.filter(":checked").map(function() { 
        return this.value;
    }).get() 
    
    function CheckboxNoTravelDetails(){
        
        // Attach a change event handler to the checkboxes.
        checkboxesI.change(function() {
            // console.log("CheckboxNoTravelDetails");
            $('#cardContent').empty();

            selectedTypeI = checkboxesI.filter(":checked").map(function() { 
                return this.value;
            }).get()
            
            // console.log(selectedTypeI);
            // console.log(selectedType.length);
            let i = 0;
            for(i = 0; i < selectedTypeI.length; i++){
                if(selectedTypeI[i] === 'motorbike'){
                    let i = 0;
                    for(i = 0; i < transport.length; i++){
            
                        if(transport[i].type === 'motorbike'){
                            generateCard(i);
                        };
                    }
                }
                if(selectedTypeI[i] === 'small car'){
                    let i = 0;
                    for(i = 0; i < transport.length; i++){
            
                        if(transport[i].type === 'small car'){
                            generateCard(i);
                        };
                    }
                }
                if(selectedTypeI[i] === 'large car'){
                    let i = 0;
                    for(i = 0; i < transport.length; i++){
            
                        if(transport[i].type === 'large car'){
                            generateCard(i);
                        };
                    }
                }
                if(selectedTypeI[i] === 'motor home'){
                    let i = 0;
                    for(i = 0; i < transport.length; i++){
            
                        if(transport[i].type === 'motor home'){
                            generateCard(i);
                        };
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