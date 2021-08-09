const load_data = async () => {
    const data = await fetch("data.json").then(response => response.json());
    return data;
}

const add_procedures = async () => {
    const data = await load_data();
    console.log('adding procedures')
    const procedures = data['Procedures']['types'];
    $('#procedure-names').append(procedures.map((p, i) => {
        if (i === 0)
            return ('<li active class="list-group-item list-group-item-action proc-names" onclick=update_procedure(this)>' + p['name'] + '</li>')
        else
            return ('<li class="list-group-item list-group-item-action proc-names" onclick=update_procedure(this)>' + p['name'] + '</li>')
    }));
}

const update_procedure = async (li) => {
    const data = await load_data();
    const proc_type = li.innerHTML;
    let proc_desc = '';
    data['Procedures']['types'].forEach(p => {
        if (p['name'] === proc_type)
            proc_desc = p['desc'];
    });
    $('#proc-header').text(proc_type);
    $('#proc-text').text(proc_desc);
}

$(document).ready(async () => {

    $("#nav a").click((e) => {
        e.preventDefault();
        $('html, body').scrollTo(this.hash, this.hash); 
    });

    add_procedures();

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        // Take the user to a different screen here.
    }
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
