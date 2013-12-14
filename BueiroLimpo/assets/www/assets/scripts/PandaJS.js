PandaJS = {
    /*
     * Options:
     *   - url:     URL do webservice;
     *   - data:    parâmetros passados para o webservice;
     *   - success: função executada se houver sucesso na requisição;
     *   - error:   função executada se houver erro na requisição
     */
    webService: function(options) {
        $.ajax({
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            jsonpCallback: 'jsonCallback',
            dataType: 'jsonp',
            data: options.data,
            url: options.url + "/" + options.method,
            success: options.success,
            error: options.error
        });
        /*
        $.ajax({
            type: "GET",
            url: "http://localhost:7909/WSBL.asmx/VerifyLogin",
            data: {username: "\"" + usuario + "\"", password: "\"" + senha + "\""},
            jsonpCallback: 'jsonCallback',
            contentType: "application/json; charset=utf-8",
            dataType: 'jsonp',
            success: function (data) {
                alert("Success: " + data.d);
                console.debug("Success: " + data.d);
            },
            error: function (data) {
                console.debug("Error: ");
                console.debug(data);
            }
        });*/
    }
}

$(function() {
    $(".checkbox").click(function() {
        var checked = $(this).find("input").val();
        
        console.debug(checked);
        
        if(checked == "on") {
            $(this).removeClass("checked");
            $(this).find("input").val("off");
        } else {
            $(this).addClass("checked");
            $(this).find("input").val("on");
        }
    });
});