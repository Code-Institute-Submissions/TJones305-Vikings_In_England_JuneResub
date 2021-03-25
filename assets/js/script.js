//Google Map Co-ordinates for each region
/*East Anglia*/
/* //Suffolk {lat:52.1555477, lng:0.8305162}, //Norfolk {lat:52.6458602, lng:1.1001733},*/

/*Mercia*//*
//Hertfordshire:{lat:51.8024912, lng:-0.2273691},//Northamptonshire: {lat:52.3326223, lng:-0.8612687},//Gloucestershire:{lat:51.8812293, lng:-2.1034647},
//Shropshire:{lat:52.6422402, lng:-2.6755677},//Warwickshire:{lat:52.2605613, lng:-1.5047367},//Oxfordshire:{lat:51.7846263, lng:-1.3165567},
//Cambridgeshire:{lat:52.8558072, lng:-2.0336547},//Staffordshire:{lat:52.3161863, lng:0.0763663},//Cheshire:{lat:53.2058542, lng:-2.3560777},
//Derbyshire:{lat:53.0718692, lng:-1.5065807},//Leicestershire:{lat:52.6459512, lng:-1.1054757},//Herefordshire:{lat:52.0949103, lng:-2.6791307},
//Nottinghamshire:{lat:53.1314412, lng:-0.9775317},//Lincolnshire:{lat:53.1253312, lng:-0.1814947},//Rutland:{lat:52.6572112, lng:-0.6478657},
//Bedfordshire:{lat:52.0671493, lng:-0.4650577},//Buckinghamshire:{lat:51.7817283, lng:-0.7855967},//Berkshire:{lat:51.4045883, lng:-1.0161207},
/*Northumbria*//*
//Lancashire:{lat:53.8671211, lng:-2.6202687},//Yorkshire:{lat:53.9761501, lng:-1.1075017},//Northumberland:{lat:55.20421, lng:-2.0282457},
//Durham:{lat:54.7109391, lng:-1.7808717},//Cumbria:{lat:54.6007491, lng:-2.8466487},
/*wessex*//*
//Kent:{lat:51.2108663, lng:0.7759013},//Cornwall:{lat:50.4087534, lng:-4.8320077},//Sussex:{lat:50.933657,	lng:-0.212399},
//Surrey:{lat:51.2608723, lng:-0.4978297},//Hampshire:{lat:51.1042083, lng:-1.2324547},//Somerset:{lat:51.0893883, lng:-2.8357007},
//Devon:{lat:50.7888394, lng:-3.7310407},//Dorset:{lat:50.8112134, lng:-2.2800067},//Wiltshire:{lat:51.3069553, lng:-1.9239737},
//Essex:{lat:51.8208543, lng:0.5536933},//London{lat:51.5268959, lng:-0.3394719}];*/

 //Google Maps:
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7.25,
    center: { lat: 52.554647, lng: -1.262773},
  });
  setMarkersEast(map);
  setMarkersNorth(map);
  setMarkersMercia(map);
  setMarkersWessex(map);
  //setMarkers(map);
}

//East Anglia Markers
const eastAngCouns = [
  ["Suffolk", 52.1555477, 0.8305162, 1],
  ["Norfolk", 52.6458602, 1.1001733, 2],
];

function setMarkersEast(map) {
  const imageEast = {
    url:
      "assets/images/eastanglia-icon.png",
    // Marker size in pixels (width, height).
    size: new google.maps.Size(40, 35),
    // Part of the image shown.
    origin: new google.maps.Point(0, 0),
    // Anchor for image (0, 32).
    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < eastAngCouns.length; i++) {
    const eastAngCoun = eastAngCouns[i];
    new google.maps.Marker({
      position: { lat: eastAngCoun[1], lng: eastAngCoun[2] },
      map,
      icon: imageEast,
      shape: shape,
      title: eastAngCoun[0],
      zIndex: eastAngCoun[3],
    });
  }
}

// Northumbria Markers
const northCouns = [
  ["Lancashire", 53.8671211,-2.6202687, 1],
  ["Yorkshire", 53.9761501,-1.1075017, 2],
  ["Northumberland", 55.20421, -2.0282457, 3],
  ["Durham", 54.7109391, -1.7808717, 4],
  ["Cumbria", 54.6007491, -2.8466487, 5],
];

function setMarkersNorth(map) {
  const imageNorth = {
    url:
      "assets/images/northumbria-icon.png",
    // Marker size in pixels (width, height).
    size: new google.maps.Size(40, 35),
    // Part of the image shown.
    origin: new google.maps.Point(0, 0),
    // Anchor for image (0, 32).
    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < northCouns.length; i++) {
    const northCoun = northCouns[i];
    new google.maps.Marker({
      position: { lat: northCoun[1], lng: northCoun[2] },
      map,
      icon: imageNorth,
      shape: shape,
      title: northCoun[0],
      zIndex: northCoun[3],
    });
  }
}

//Mercia Markers
const merciaCouns = [
  ["Hertfordshire", 51.8024912, -0.2273691, 1],
  ["Northamptonshire", 52.3326223, -0.8612687, 2],
  ["Gloucestershire", 51.8812293, -2.1034647, 3],
  ["Shropshire", 52.6422402, -2.6755677, 4],
  ["Warwickshire", 52.2605613, -1.5047367, 5],
  ["Oxfordshire", 51.7846263, -1.3165567, 6],
  ["Staffordshire", 52.8558072, -2.0336547, 7],
  ["Cambridgeshire", 52.3161863, 0.0763663, 8],
  ["Cheshire", 53.2058542, -2.3560777, 9],
  ["Derbyshire", 53.0718692, -1.5065807, 10],
  ["Leicestershire", 52.6459512, -1.1054757, 11],
  ["Herefordshire", 52.0949103, -2.6791307, 12],
  ["Nottinghamshire", 53.1314412, -0.9775317, 13],
  ["Lincolnshire", 53.1253312, -0.1814947,14],
  ["Rutland", 52.6572112, -0.6478657, 15],
  ["Bedfordshire", 52.0671493, -0.4650577, 16],
  ["Buckinghamshire", 51.7817283, -0.7855967, 17],
  ["Berkshire", 51.4045883, -1.0161207, 18],
];

function setMarkersMercia(map) {
  const imageMercia = {
    url:
      "assets/images/mercia-icon.png",
    // Marker size in pixels (width, height).
    size: new google.maps.Size(40, 35),
    // Part of the image shown.
    origin: new google.maps.Point(0, 0),
    // Anchor for image (0, 32).
    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < merciaCouns.length; i++) {
    const merciaCoun = merciaCouns[i];
    new google.maps.Marker({
      position: { lat: merciaCoun[1], lng: merciaCoun[2] },
      map,
      icon: imageMercia,
      shape: shape,
      title: merciaCoun[0],
      zIndex: merciaCoun[3],
    });
  }
}

//Wessex Markers
const wessexCouns = [
  ["Kent", 51.2108663, 0.7759013, 1],
  ["Cornwall", 50.4087534, -4.8320077, 2],
  ["Sussex", 50.933657,	-0.212399, 3],
  ["Surrey", 51.2608723, -0.4978297, 4],
  ["Hampshire", 51.1042083, -1.2324547, 5],
  ["Somerset", 51.0893883, -2.8357007, 6],
  ["Devon", 50.7888394, -3.7310407, 7],
  ["Dorset", 50.8112134, -2.2800067, 8],
  ["Wiltshire", 51.3069553, -1.9239737, 9],
  ["Essex", 51.8208543, 0.5536933, 10],
  ["London", 51.5268959, -0.3394719, 11],
];
//combine locations in one array and call it "markers", add "region="add_region"
//Function change to setMarkers, create a variable called images
//inside images build if statement using region name, e.g(if region === "region_name"),
//src="url", else if and repeat
function setMarkersWessex(map) {
  const imageWessex = {
    url:
      "assets/images/wessex-icon.png",
    // Marker size in pixels (width, height).
    size: new google.maps.Size(40, 35),
    // Part of the image shown.
    origin: new google.maps.Point(0, 0),
    // Anchor for image (0, 32).
    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < wessexCouns.length; i++) {
    const wessexCoun = wessexCouns[i];
    new google.maps.Marker({
      position: { lat: wessexCoun[1], lng: wessexCoun[2] },
      map,
      icon: imageWessex,
      shape: shape,
      title: wessexCoun[0],
      zIndex: wessexCoun[3],
    });
  }
}

/*//combine to one function, use if statement to differentiate colours
function eastA(event, id) {
    if (event.type === 'mouseenter'){
            if (id === "eastAnglia"){
            this.id.style.color ="rgb(148, 205, 238)";
            }else if (id === "mercia"){
            this.style.color="rgb(4, 6, 116)";
            }else if (id === "northumbria") {
            this.style.color ="rgb(119, 14, 45)";
            } else {
            id === "wessex";
            this.style.color ="rgb(170, 3, 3)";
            }
    } else {
        this.style.color ="#eee";
    }
};*/


function eastA(event) {
    if (event.type === 'mouseenter'){
    let eastAnglia = document.getElementById("eastAnglia");
    eastAnglia.style.color="rgb(148, 205, 238)";
    } else {
        eastAnglia.style.color ="#eee";
    }
} 
function merc(event) {
    if (event.type === 'mouseenter'){
    let mercia = document.getElementById("mercia");
    mercia.style.color="rgb(4, 6, 116)";
    } else {
        mercia.style.color ="#eee";
    }
} 

function north(event) {
    if (event.type === 'mouseenter'){
    let northumbria = document.getElementById("northumbria");
    northumbria.style.color ="rgb(119, 14, 45)";
    } else {
        northumbria.style.color ="#eee";
    }
} 

function wess(event) {
    if (event.type === 'mouseenter'){
    let wessex = document.getElementById("wessex");
    wessex.style.color ="rgb(170, 3, 3)";
    } else {
        wessex.style.color ="#eee";
    }
} 
    
/* ---- Timeline --- */
function fillTimeline(clicked_id) {

        switch (clicked_id) {
            case "timeline-item1":{
            document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading1").textContent;
            document.getElementById("timeline-para").innerText = document.getElementById("timeline-para1").textContent;
            document.getElementById("timeline-image1").style.display = "block";
            break;
            }
            case "timeline-item2":{
            document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading2").textContent;
            document.getElementById("timeline-para").innerText = document.getElementById("timeline-para2").textContent;
            break;
            }
            case "timeline-item3":{
            document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading3").textContent;
            document.getElementById("timeline-para").innerText = document.getElementById("timeline-para3").textContent;
            document.getElementById("timeline-image3").style.display = "block";
            break;
            }
            case "timeline-item4":{
            document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading4").textContent;
            document.getElementById("timeline-para").innerText = document.getElementById("timeline-para4").textContent;
            document.getElementById("timeline-image4").style.display = "block";
            break;
            }
            case "timeline-item5":{
            document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading5").textContent;
            document.getElementById("timeline-para").innerText = document.getElementById("timeline-para5").textContent;
            document.getElementById("timeline-image5").style.display = "block";
            break;
            }
            case "timeline-item6":{
            document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading6").textContent;
            document.getElementById("timeline-para").innerText = document.getElementById("timeline-para6").textContent;
            document.getElementById("timeline-image6").style.display = "block";
            break;
            }
            case "timeline-item7":{
            document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading7").textContent;
            document.getElementById("timeline-para").innerText = document.getElementById("timeline-para7").textContent;
            document.getElementById("timeline-image7").style.display = "block";
            break;
            }
            case "timeline-item8":{
            document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading8").textContent;
            document.getElementById("timeline-para").innerText = document.getElementById("timeline-para8").textContent;
            document.getElementById("timeline-image8").style.display = "block";
            break;
            }
            case "timeline-item9":{
            document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading9").textContent;
            document.getElementById("timeline-para").innerText = document.getElementById("timeline-para9").textContent;
            document.getElementById("timeline-image9").style.display = "block";
            break;
            }
            case "timeline-item10":{
            document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading10").textContent;
            document.getElementById("timeline-para").innerText = document.getElementById("timeline-para10").textContent;
            document.getElementById("timeline-image10").style.display = "block";
            break;
            }
            case "timeline-item11":{
            document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading11").textContent;
            document.getElementById("timeline-para").innerText = document.getElementById("timeline-para11").textContent;
            document.getElementById("timeline-image11").style.display = "block";
            break;
            }
            case "timeline-item12":{
            document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading12").textContent;
            document.getElementById("timeline-para").innerText = document.getElementById("timeline-para12").textContent;
            document.getElementById("timeline-image12").style.display = "block";
            break;
            }
            default:{
            clicked_id === "reset";
            document.getElementById("timeline-heading").innerText ="";
            document.getElementById("timeline-para").innerText = "Please pick a year from above";
            document.getElementById("timeline-image4").style.display = "none";
            }
        }
    }

//Change below to switch/ case

          // when lciked id = x, then show picture with id y, otherwise keep hidden 
        /*function show(clicked_id) { 
        if(this.id === "timeline-item4") { 
            document.getElementsByClassName("timeImage").style.display="none";
            document.getElementById( clicked id).style.display='block'; 
        } 
        false;

        function hide(clicked_id) { 
        if(document.getElementById(clicked_id).style.display=='block') { 
            document.getElementById(clicked_id).style.display='none'; 
        } 
        false;
    } 
    */
    
    /*function imageClick (clicked_id) {
        document.getElementsByClassName("timeImage");
        
        if (document.getElementById(clicked_id) === "timeline-item4") {
            document.getElementById("timeline-image4").style.display = "block";
        }else {
            document.getElementById("timeline-image4").style.display = "none";
        }

    }*/


    /*const markers = [
  ["Suffolk", 52.1555477, 0.8305162, 1, "assets/images/eastanglia-icon.png"],
  ["Norfolk", 52.6458602, 1.1001733, 2, "assets/images/eastanglia-icon.png"],
  ["Lancashire", 53.8671211,-2.6202687, 3, "assets/images/northumbria-icon.png"],
  ["Yorkshire", 53.9761501,-1.1075017, 4, "assets/images/northumbria-icon.png"],
  ["Northumberland", 55.20421, -2.0282457, 5, "assets/images/northumbria-icon.png"],
  ["Durham", 54.7109391, -1.7808717, 6, "assets/images/northumbria-icon.png"],
  ["Cumbria", 54.6007491, -2.8466487, 7, "assets/images/northumbria-icon.png"],
  ["Kent", 51.2108663, 0.7759013, 8, "assets/images/wessex-icon.png"],
  ["Cornwall", 50.4087534, -4.8320077, 9, "assets/images/wessex-icon.png"],
  ["Sussex", 50.933657,	-0.212399, 10, "assets/images/wessex-icon.png"],
  ["Surrey", 51.2608723, -0.4978297, 11, "assets/images/wessex-icon.png"],
  ["Hampshire", 51.1042083, -1.2324547, 12, "assets/images/wessex-icon.png"],
  ["Somerset", 51.0893883, -2.8357007, 13, "assets/images/wessex-icon.png"],
  ["Devon", 50.7888394, -3.7310407, 14, "assets/images/wessex-icon.png"],
  ["Dorset", 50.8112134, -2.2800067, 15, "assets/images/wessex-icon.png"],
  ["Wiltshire", 51.3069553, -1.9239737, 16, "assets/images/wessex-icon.png"],
  ["Essex", 51.8208543, 0.5536933, 17, "assets/images/wessex-icon.png"],
  ["London", 51.5268959, -0.3394719, 18, "assets/images/wessex-icon.png"],
  ["Hertfordshire", 51.8024912, -0.2273691, 19, "assets/images/mercia-icon.png"],
  ["Northamptonshire", 52.3326223, -0.8612687, 20, "assets/images/mercia-icon.png"],
  ["Gloucestershire", 51.8812293, -2.1034647, 21, "assets/images/mercia-icon.png"],
  ["Shropshire", 52.6422402, -2.6755677, 22, "assets/images/mercia-icon.png"],
  ["Warwickshire", 52.2605613, -1.5047367, 23, "assets/images/mercia-icon.png"],
  ["Oxfordshire", 51.7846263, -1.3165567, 24, "assets/images/mercia-icon.png"],
  ["Staffordshire", 52.8558072, -2.0336547, 25, "assets/images/mercia-icon.png"],
  ["Cambridgeshire", 52.3161863, 0.0763663, 26, "assets/images/mercia-icon.png"],
  ["Cheshire", 53.2058542, -2.3560777, 27, "assets/images/mercia-icon.png"],
  ["Derbyshire", 53.0718692, -1.5065807, 28, "assets/images/mercia-icon.png"],
  ["Leicestershire", 52.6459512, -1.1054757, 29, "assets/images/mercia-icon.png"],
  ["Herefordshire", 52.0949103, -2.6791307, 30, "assets/images/mercia-icon.png"],
  ["Nottinghamshire", 53.1314412, -0.9775317, 31, "assets/images/mercia-icon.png"],
  ["Lincolnshire", 53.1253312, -0.1814947,32, "assets/images/mercia-icon.png"],
  ["Rutland", 52.6572112, -0.6478657, 33, "assets/images/mercia-icon.png"], 
  ["Bedfordshire", 52.0671493, -0.4650577, 34, "assets/images/mercia-icon.png"],
  ["Buckinghamshire", 51.7817283, -0.7855967, 35], "assets/images/mercia-icon.png",
  ["Berkshire", 51.4045883, -1.0161207, 36, "assets/images/mercia-icon.png"],
];*/

 /*function setMarkers(map) {
  const image=
	 {
    url: /*need 5th item in array to go here,

    // Marker size in pixels (width, height).
    size: new google.maps.Size(40, 35),
    // Part of the image shown.
    origin: new google.maps.Point(0, 0),
    // Anchor for image (0, 32).
    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < markers.length; i++) {
    const marker = markers[i];
    new google.maps.Marker({
      position: { lat: marker[1], lng: marker[2] },
      map,
      icon: marker[4],
      shape: shape,
      title: marker[0],
      zIndex: marker[3],
    });
  }
}*/