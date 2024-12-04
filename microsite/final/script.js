// Nav bar
    //load
$(function(){
    $("#nav-placeholder").load("nav.html");
    });

$(document).ready(function() {
    // open
        $('.tp_btn').click(function() {
            $('#nav-placeholder').slideToggle();
        });

    //close
        $(document).on('click', '.close_btn', function() {
            $('#nav-placeholder').slideUp();
        });
    });


    //highlight NOT WORKING
    $(function() {
        // Get the current file name from the URL
        let currentPath = window.location.pathname.split('/').pop(); // Get the last part of the URL
        console.log(currentPath)
        // Loop through all nav links and check if they match the current path
        $('nav .option a').each(function() {
            const href = $(this).attr('href'); // Get href of each link
            console.log(href);
            if (href === currentPath) {
                $(this).addClass('active'); // Add 'active' class to the matching link
                console.log('Added active to:', href); // Debug
            } else {
                $(this).removeClass('active'); // Remove 'active' class from non-matching links
                console.log('not added active to:', href);
            }
        });
    });

// End of Nav Bar


