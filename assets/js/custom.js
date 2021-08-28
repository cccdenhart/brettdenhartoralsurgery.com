const load_data = async () => {
    const data = await fetch("data.json").then(response => response.json());
    return data;
}

const add_procedures = async () => {
    const data = await load_data();
    console.log('adding procedures')
    const procedures = data['Procedures']['types'];
    $('#procedure-names').append(procedures.map((p) => ('<li class="list-group-item">' + p['name'] + '</li>')));
}

$(document).ready(async () => {

    $("#nav a").click((e) => {
        e.preventDefault();
        $('html, body').scrollTo(this.hash,this.hash); 
    });

    add_procedures();
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
