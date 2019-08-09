


/*jquery part**************************************************************************************************************************/

    $(document).ready(function() {
        /*external json file ajax******************************************************************/
       var exurl = "mycontact.json"
        $.getJSON(exurl, function(data) {

            $.each(data, function() {

                $.each(this, function(key, value) {

                    $("#cont").append(

                         "<h3>" + value.name + "</h3>"

                        + "<h3>" + value.phone + "</h3>"

                        + "<p>" + value.email + "</p>"



                    );

                });

            });

        });
        /*external website ajax******************************************************************/
        var url = "view-source:https://webpages.uncc.edu/apathak5/Mili'sPhotos/index.html"

        $.getJSON(url, function(data){

            var html = "";

            $.each(data.items, function(i, item){



                html += "<img src=" + item.media.m + " width=120 height=100>";


            });

            $('#locate').html(html);

        });
        /*********************************************************************/
        $( "#accordion" ).accordion({
            collapsible:true
        });
        /**********************************************/
        $("#slider").bxSlider({
            auto: true,
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 600,
            slideMargin: 10,
            randomStart:true,
            speed: 1000,
            pager: true


        });
        /***************************************************/
        var namepattern= /^[a-zA-Z]+$/;
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        $("#fname").focus();
        $("#reservation_form").submit(

        function(event) {
                var isValid = true;

                // validate the first name
                var first = $("#fname").val().trim();
                if (first == "")
                {
                    $("#fname").next().text("First name field is required.Refresh and enter again");
                    isValid = false;
                }
                else if ( !first.match(namepattern))
                {
                        $("#fname").next().text("Enter first name with correct fields. Refresh and enter again");
                    isValid = false;
                }
                else
                    {
                    $("#fname").next().text("");
                      }

                $("#fname").val(fname);

                //validate the lastname

                var last = $("#lname").val().trim();
                if (last == "")
                {
                    $("#fname").next().text("last name field is required.Refresh and enter again");
                    isValid = false;
                }
                else if ( !last.match(namepattern))
                {
                    $("#lname").next().text("Enter last name with correct fields.Refresh and enter again");
                    isValid = false;
                }
                else
                {
                    $("#lname").next().text("");
                }

                $("#lname").val(lname);

                //email validation******

                var email = $("#email").val().trim();
                if (email == "") {
                    $("#email").next().text("Email field is required.");
                    isValid = false;
                } else if ( !emailPattern.test(email) ) {
                    $("#email").next().text("Must be a valid email address.");
                    isValid = false;
                } else {
                    $("#email").next().text("");
                }
                $("#email").val(email);

                //prevent form from submitting if wrong fields entered
                if (isValid == false) {
                    event.preventDefault();
                }


            }//end of event

        );
    });//end of ready