function initializeLocalizacaoNoMapa() {
    var myLatLngDefaultBrasilia = { lat: -15.77972, lng: -47.92972};

    var mapOptions = {
        center: myLatLngDefaultBrasilia,
        zoom: 2,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    var hiddenEndereco = $('#HiddenEndereco').text().split('#');
    var hiddenEnderecoDed = [];
    var i = 0;
    var j = 0;
    var latitude = parseFloat(0);
    var longitude = parseFloat(0);
    var string = '';
    var existe = false;

    for (i = 0; i < hiddenEndereco.length; i++) {
        if (hiddenEndereco[i] !== null && hiddenEndereco[i] !== '') {
            latitude = parseFloat(hiddenEndereco[i].split('|')[0]);
            longitude = parseFloat(hiddenEndereco[i].split('|')[1]);
            if (latitude !== 0 && longitude !== 0) {
                //Verificar se a latitude e a longitude já esta no array
                string = latitude.toString() + '|' + longitude.toString();
                existe = false;

                for (j = 0; j < hiddenEnderecoDed.length; j++) {
                    if (hiddenEnderecoDed[j].indexOf(string) >= 0) {
                        existe = true;
                    }
                    if (existe === true) {
                        break;
                    }
                }

                if (existe === false) {
                    hiddenEnderecoDed.push(hiddenEndereco[i]);
                }
            }
        }
    }

    var registros = [];
    for (i = 0; i < hiddenEnderecoDed.length; i++) {
        if (hiddenEnderecoDed[i] !== '') {
            registros.push([hiddenEnderecoDed[i].split('|')[0],
            hiddenEnderecoDed[i].split('|')[1],
            hiddenEnderecoDed[i].split('|')[2],
            hiddenEnderecoDed[i].split('|')[3],
            hiddenEnderecoDed[i].split('|')[4]]);
        }
    }

    if (registros !== null && registros.length > 0) {
        //fim array
        var markers = [];

        //InfoWindow
        var iw = null;
        iw = new google.maps.InfoWindow({
            content: ''
        });

        var latlngbounds = new google.maps.LatLngBounds();
        for (i = 0; i < registros.length; i++) {
            latlngbounds.extend(new google.maps.LatLng(registros[i][0], registros[i][1]));
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(registros[i][0], registros[i][1]),
                map: map,
                title: registros[i][2],
                html: registros[i][4]
            });


            google.maps.event.addListener(marker, "click", function (e) {
                iw.setContent(this.html);
                iw.open(map, this);
            });
            markers.push(marker);
        }
        //var markerCluster = new MarkerClusterer(map, markers);
        map.setCenter(latlngbounds.getCenter());
        map.fitBounds(latlngbounds);
    }
    else {
        alert("Infelizmente não foi encontrado nenhum marcador para o Google Maps.");
    }
}