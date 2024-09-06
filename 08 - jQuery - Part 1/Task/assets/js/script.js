$(document).ready(function () {
    $.ajax({
        url: "https://api.edu.skuflic.com/users",
        dataType: "json",
        success: function (data) {
            const template = document.getElementById("template").innerHTML;
            const compiled_template = Handlebars.compile(template);
            const rendered = compiled_template({
                user: data,
                tableClass: "table",
            });
            document.getElementById("users").innerHTML = rendered;
            $('tr:nth-child(even)').addClass('striped');
            $('th').css('color', 'blue');
            },

            
    });

    $('td').mouseover( function () {
        $('tr').removeClass('striped');
        $(this).css('background-color', 'yellow');

    })
   
});
