function songSearch() {
    event.preventDefault()

    var searchQuery = $('#songName').val()
    var APIKey = 'd8787584df7098764cc35ab8cac2f60f'
    var songIdUrl = 'https://api.musixmatch.com/ws/1.1/track.search?s_track_rating=desc&q_track_artist=' + searchQuery + '&apikey=' + APIKey;

    $.ajax({
        url: songIdUrl,
        method: "GET",
    }).then(function (response) {

        var songID = response.message.body.track_list[1].track.track_id
        var songLyricsUrl = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=' + songID + '&apikey=' + APIKey;

        $.ajax({
            url: songLyricsUrl,
            method: "GET",
        }).then(function (response) {
           
            var lyrics = response.message.body.lyrics.lyrics_body
            $('#lyrics').text(lyrics)
        })
    })
}

