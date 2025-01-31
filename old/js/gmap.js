var latlng = new google.maps.LatLng(43.03606,10.613214);
	var myOptions = {
		zoom: 18,
		center: new google.maps.LatLng(43.03606, 10.613214),
		panControl: true,
		zoomControl: true,
		mapTypeControl: true,
		scaleControl: false,
		streetViewControl: true,
		overviewMapControl: false,
		mapTypeId: google.maps.MapTypeId.SATELLITE
	}
	var map = new google.maps.Map(document.getElementById("map"), myOptions);
	var marker = new google.maps.Marker({
		position: latlng,
		map: map
	});
	var contentString = '<div><img src="../img/logo.png"  alt="Casa del Leccetto B&B Casa Vacanze Toscana Italia" /><br />Calcola percorso da:<br /><form action="http://maps.google.com/maps" method="get" target="_blank"><input type="text" size="20" name="saddr" id="saddr" value="" /> <button>Calcola</button><input type="hidden" name="daddr" value="43.03624548, 10.61307782" /></form></div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 200
	});
	infowindow.open(map,marker);