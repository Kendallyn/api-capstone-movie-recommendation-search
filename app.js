$(document).ready(function () {
    $("#searchForm").submit(function (event) {
        event.preventDefault();
        var userSearch = $("#search").val();
        getSearchResults(userSearch);
    });

    function getSearchResults(userEntry) {
        $.getJSON("https://tastedive.com/api/similar") {
                q: userEntry,
                type: 'movies',
                info: 1,
                limit: 20,
                k: '267623-Thinkful-76WV9F3O',
                //callback: 'foo'
            },
            function (apiData) {
                console.log(apiData);
                if (apiData.pageInfo.totalResults == 0) {
                    alert("No results found");
                } else {
                    displayResults(apiData.items);
                }
            });

    function displayResults(videoArray) {
        var createHtmlList = "";
        //space
        $.each(videoArray, function (videoArrayKey, videoArrayValue) {
            createHtmlList += "<li>";
            //space
            createHtmlList += "<p>" + //videoArrayValue.snippet.title + "</p>";
                createHtmlList += "<a href='https://tastedive.com/api/similar" + //videoArrayValue.id.videoId + "'>";
                //shows movie description
                //createHtmlList += "<img src='"
                createHtmlList += "</a>";
            createHtmlList += "</li>";
        });
        $("#searchResults ul").append(createHtmlList);
        console.log(createHtmlList);
    }
});
