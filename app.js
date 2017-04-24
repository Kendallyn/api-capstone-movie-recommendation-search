$(document).ready(function () {
    $("#searchForm").submit(function (event) {
        event.preventDefault();
        var userSearch = $("#search").val();
        if (userSearch.length == 0) {
            alert("Please add movie title to search for it");
        } else {
            getSearchResults(userSearch);
        }
    });

    function getSearchResults(userEntry) {
        var params = {
            q: userEntry,
            type: 'movies',
            info: 1,
            limit: 18,
            k: '267623-Thinkful-76WV9F3O',
            callback: 'foo'
        };
        var result = $.ajax({
                /* update API end point */
                url: "https://tastedive.com/api/similar",
                data: params,
                dataType: "jsonp",
                /*set the call type GET / POST*/
                type: "GET"
            })
            /* if the call is successful (status 200 OK) show results */
            .done(function (output) {
                /* if the results are meaningful, we can just console.log them */
                //console.log(output.Similar.Results);
                if (output.Similar.Results.length == 0) {
                    alert("No results found for " + userEntry);
                } else {
                    displayResults(output.Similar.Results);
                }
            })
            /* if the call is NOT successful show errors */
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    }

    function displayResults(movieApiResults) {
        console.log(movieApiResults);
        var createHtmlList = "";

        $.each(movieApiResults, function (Key, Value) {
            console.log(Value.Name);
            console.log(Value.wTeaser);
            console.log(Value.yUrl);
            createHtmlList += "<li>";
            createHtmlList += "<h2>" + Value.Name + "</h2>";
            createHtmlList += "<a href='" + Value.yUrl + "' target='_blank'><img src='img/placeholder.jpg'></a>";
            createHtmlList += "<p>" + Value.wTeaser + "</p>";
            createHtmlList += "</li>";
            //                        createHtmlList += "<p>" + videoArrayValue.snippet.title + "</p>";
            //                        createHtmlList += "<a href='https://tastedive.com/api/similar" + videoArrayValue.id.videoId + "'>";
            //                        createHtmlList += "<img src='";
            //                        createHtmlList += "</a>";
            //                        createHtmlList += "</li>";
        });
        $("#searchResults ul").html(createHtmlList);
        console.log(createHtmlList);
    }
});
