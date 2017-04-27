$(document).ready(function () {
    $("#searchForm").submit(function (event) {
        event.preventDefault();
        var userSearch = $("#search").val();
        if (userSearch.length == 0) {
            alert("Please enter a type of movie");
        } else {
            getSearchResults(userSearch);
        }
    });

    function getSearchResults(userEntry) {
        var params = {
            q: userEntry,
            type: 'movies',
            info: 1,
            limit: 20,
            k: '267623-Thinkful-76WV9F3O',
            callback: 'foo'
        };
        var result = $.ajax({
                url: "https://tastedive.com/api/similar",
                data: params,
                dataType: "jsonp",
                type: "GET"
            })
            .done(function (output) {
                if (output.Similar.Results.length == 0) {
                    alert("No results found for " + userEntry);
                } else {
                    displayResults(output.Similar.Results);
                }
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
            });
    }

    function displayResults(movieApiResults) {
        var createHtmlList = "";

        $.each(movieApiResults, function (Key, Value) {
            createHtmlList += "<li>";
            createHtmlList += "<h2>" + Value.Name + "</h2>";
            createHtmlList += "<a href='" + Value.yUrl + "' target='_blank'><img src='https://img.youtube.com/vi/" + Value.yID + "/maxresdefault.jpg'></a>";
            createHtmlList += "<p>" + Value.wTeaser + "</p>";
            createHtmlList += "</li>";
        });
        $("#searchResults ul").html(createHtmlList);
    }
});
