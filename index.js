$(() => {
    console.log('FIRST');
    $("#nav a").click(function(e){
        e.preventDefault();
        $('html, body').scrollTo(this.hash,this.hash); 
    });

    console.log("SECOND")
    $.getJSON("./data.json", (data) => {  
        console.log('HERE');
        const procedures = data['procedures'];
        $('#procedure-names').append(procedures.map((p) => ('<li class="list-group-item">' + p + '</li>')));
    });

});

let map = new mapboxgl.Map({
    container: 'contact-map',
    center: [-72.58974314433803, 42.17231111435387],
    zoom: 10,
    style:
    'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiY2NjZGVuaGFydCIsImEiOiJja2JpbmRsaHEwZWg3MnNuY2x3emRjMjlqIn0.WboFvPx3QcT9kSifRexnaw'
});

map.addControl(new mapboxgl.NavigationControl());
