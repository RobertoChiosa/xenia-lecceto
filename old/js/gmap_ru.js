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
	var contentString = '<div><img src="../img/logo.png"  alt="Casa del Leccetto" /></div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 200
	});
	infowindow.open(map,marker);
