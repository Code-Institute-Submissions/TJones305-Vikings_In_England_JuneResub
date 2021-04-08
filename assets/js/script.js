 window.onload = function() {
    const feedbackForm = document.getElementById('feedback-form');
            feedbackForm.addEventListener('submit', function(event) {
                event.preventDefault();
                emailjs.sendForm('gmail', 'vikings', this)
                    .then(function() {
                        console.log('SUCCESS!');
                        feedbackForm.reset();
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
            });
        }
//Google Map Co-ordinates for each region
/*East Anglia*/
/* //Suffolk {lat:52.1555477, lng:0.8305162}, //Norfolk {lat:52.6458602, lng:1.1001733},*/

/*Mercia*/
/*
//Hertfordshire:{lat:51.8024912, lng:-0.2273691},//Northamptonshire: {lat:52.3326223, lng:-0.8612687},//Gloucestershire:{lat:51.8812293, lng:-2.1034647},
//Shropshire:{lat:52.6422402, lng:-2.6755677},//Warwickshire:{lat:52.2605613, lng:-1.5047367},//Oxfordshire:{lat:51.7846263, lng:-1.3165567},
//Cambridgeshire:{lat:52.8558072, lng:-2.0336547},//Staffordshire:{lat:52.3161863, lng:0.0763663},//Cheshire:{lat:53.2058542, lng:-2.3560777},
//Derbyshire:{lat:53.0718692, lng:-1.5065807},//Leicestershire:{lat:52.6459512, lng:-1.1054757},//Herefordshire:{lat:52.0949103, lng:-2.6791307},
//Nottinghamshire:{lat:53.1314412, lng:-0.9775317},//Lincolnshire:{lat:53.1253312, lng:-0.1814947},//Rutland:{lat:52.6572112, lng:-0.6478657},
//Bedfordshire:{lat:52.0671493, lng:-0.4650577},//Buckinghamshire:{lat:51.7817283, lng:-0.7855967},//Berkshire:{lat:51.4045883, lng:-1.0161207},
/*Northumbria*/
/*
//Lancashire:{lat:53.8671211, lng:-2.6202687},//Yorkshire:{lat:53.9761501, lng:-1.1075017},//Northumberland:{lat:55.20421, lng:-2.0282457},
//Durham:{lat:54.7109391, lng:-1.7808717},//Cumbria:{lat:54.6007491, lng:-2.8466487},
/*wessex*/
/*
//Kent:{lat:51.2108663, lng:0.7759013},//Cornwall:{lat:50.4087534, lng:-4.8320077},//Sussex:{lat:50.933657,	lng:-0.212399},
//Surrey:{lat:51.2608723, lng:-0.4978297},//Hampshire:{lat:51.1042083, lng:-1.2324547},//Somerset:{lat:51.0893883, lng:-2.8357007},
//Devon:{lat:50.7888394, lng:-3.7310407},//Dorset:{lat:50.8112134, lng:-2.2800067},//Wiltshire:{lat:51.3069553, lng:-1.9239737},
//Essex:{lat:51.8208543, lng:0.5536933},//London{lat:51.5268959, lng:-0.3394719}];*/

//Google Maps:
//Sets map and markers
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7.25,
        center: {
            lat: 52.554647,
            lng: -1.262773,
            url: "null",
        },
    });
    setMarkers(map);
}
     const markers = [
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
      ["Buckinghamshire", 51.7817283, -0.7855967, 35, "assets/images/mercia-icon.png"],
      ["Berkshire", 51.4045883, -1.0161207, 36, "assets/images/mercia-icon.png"],
    ];

//Assigns marker positions and image
function setMarkers(map) {
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
}; 

//Changes color on accordion buttons when mouseenters and reverts when mouseleaves. On non-desktop colour remains until next tap.
function colorChange(event) {
    if (event.type === 'mouseenter') {
        let eastAnglia = document.getElementById("eastAnglia");
        let mercia = document.getElementById("mercia");
        let northumbria = document.getElementById("northumbria");
        let wessex = document.getElementById("wessex");
            if (event.target === eastAnglia){        
            eastAnglia.style.color = "rgb(148, 205, 238)";
            } else if (event.target === mercia) {
            mercia.style.color = "rgb(4, 6, 116)"; 
            } else if (event.target === northumbria){    
            northumbria.style.color = "rgb(119, 14, 45)";
            } else {
            event.target === wessex;
            wessex.style.color = "rgb(170, 3, 3)";
            }
    } else {
        $("#eastAnglia, #mercia, #northumbria, #wessex").css("color", "#eee");
    };
}
        
    /* ---- Timeline --- */
//Hides all images
    function hideAll() {
        const images = ["#imgHold", "#tl-img1", "#tl-img2", "#tl-img3", "#tl-img4", "#tl-img5", "#tl-img6", "#tl-img7", "#tl-img8", "#tl-img9", "#tl-img10", "#tl-img11", "#tl-img12"];
        $(images.join(', ')).css("display", "none");
    };

//Fills the written and image content for each timeline point
    function fillTimeline(clicked_id, point) {
        
        switch (clicked_id) {
            case "timeline-item1":
                document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading1").textContent;
                document.getElementById("timeline-para").innerText = document.getElementById("timeline-para1").textContent;
                hideAll();
                document.getElementById('tl-img1').style.display = "block";
                break;
            case "timeline-item2":
                document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading2").textContent;
                document.getElementById("timeline-para").innerText = document.getElementById("timeline-para2").textContent;
                hideAll();
                document.getElementById("tl-img2").style.display = "block";
                break;
            case "timeline-item3":
                document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading3").textContent;
                document.getElementById("timeline-para").innerText = document.getElementById("timeline-para3").textContent;
                hideAll();
                document.getElementById("tl-img3").style.display = "block";
                break;
            case "timeline-item4":
                document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading4").textContent;
                document.getElementById("timeline-para").innerText = document.getElementById("timeline-para4").textContent;
                hideAll();
                document.getElementById("tl-img4").style.display = "block";
                break;
            case "timeline-item5":
                document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading5").textContent;
                document.getElementById("timeline-para").innerText = document.getElementById("timeline-para5").textContent;
                hideAll();
                document.getElementById("tl-img5").style.display = "block";
                break;
            case "timeline-item6":
                document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading6").textContent;
                document.getElementById("timeline-para").innerText = document.getElementById("timeline-para6").textContent;
                hideAll();
                document.getElementById("tl-img6").style.display = "block";
                break;
            case "timeline-item7":
                document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading7").textContent;
                document.getElementById("timeline-para").innerText = document.getElementById("timeline-para7").textContent;
                hideAll();
                document.getElementById("tl-img7").style.display = "block";
                break;
            case "timeline-item8":
                document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading8").textContent;
                document.getElementById("timeline-para").innerText = document.getElementById("timeline-para8").textContent;
                hideAll();
                document.getElementById("tl-img8").style.display = "block";
                break;
            case "timeline-item9":
                document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading9").textContent;
                document.getElementById("timeline-para").innerText = document.getElementById("timeline-para9").textContent;
                hideAll();
                document.getElementById("tl-img9").style.display = "block";
                break;
            case "timeline-item10":
                document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading10").textContent;
                document.getElementById("timeline-para").innerText = document.getElementById("timeline-para10").textContent;
                hideAll();
                document.getElementById("tl-img10").style.display = "block";
                break;
            case "timeline-item11":
                document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading11").textContent;
                document.getElementById("timeline-para").innerText = document.getElementById("timeline-para11").textContent;
                hideAll();
                document.getElementById("tl-img11").style.display = "block";
                break;
            case "timeline-item12":
                document.getElementById("timeline-heading").innerText = document.getElementById("timeline-heading12").textContent;
                document.getElementById("timeline-para").innerText = document.getElementById("timeline-para12").textContent;
                hideAll();
                document.getElementById("tl-img12").style.display = "block";
                break;
            default:
                clicked_id === "reset";
                document.getElementById("timeline-heading").innerText = "";
                document.getElementById("timeline-para").innerText = "You've reset the timeline! Pick a year from above or admire the Viking Compass!";
                hideAll();
                document.getElementById("imgHold").style.display = "block";
        }
        animate(point);
    };

//Animates the viking longboat under timeline
    function animateLongboat(obj, from, to) {

        if(from >= to){
            return;

        } else { 
            let box = obj;
            box.style.marginLeft = from + "%";
            console.log(box.style.marginLeft);
            setTimeout(function(){
                animateLongboat(obj, from + 1, to);   
            }, 85)   
        }
    }

//Caluculates the start and end points for the animation
        function animate(point) {
        let boat = $('#longboat').position(); //gets position values of longboat img
        console.log(boat.left);
        let start = (point+7)-(0.16/boat.left * 100); // second bracket converts pixel value of left position to percentage value
        console.log(start);
        animateLongboat(document.getElementById("longboat"), start, point);
    }