/*Credit to EmailJS for below function template*/ 
window.onload = function() {
    const feedbackForm = document.getElementById('feedback-form');
            feedbackForm.addEventListener('submit', function(event) {
                event.preventDefault();
                emailjs.sendForm('gmail', 'vikings', this)
                    .then(function() {
                        alert("Thank You for your feedback!");
                        feedbackForm.reset();
                    }, function(error) {
                        alert("Apologies something wasn't right. Make sure you have filled all the fields");
                    });
            });
        }

//Google Maps:
/*Credit to Google Maps for init Map function*/
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
};

//Co-ordinates and marker image for each county
const markers = [
        ["Suffolk", 52.1555477, 0.8305162, "assets/images/eastanglia-icon.png", "east anglia"],
        ["Norfolk", 52.6458602, 1.1001733, "assets/images/eastanglia-icon.png", "east anglia"],
        ["Lancashire", 53.8671211,-2.6202687, "assets/images/northumbria-icon.png", "northumbria"],
        ["Yorkshire", 53.9761501,-1.1075017, "assets/images/northumbria-icon.png", "northumbria"],
        ["Northumberland", 55.20421, -2.0282457, "assets/images/northumbria-icon.png", "northumbria"],
        ["Durham", 54.7109391, -1.7808717, "assets/images/northumbria-icon.png", "northumbria"],
        ["Cumbria", 54.6007491, -2.8466487, "assets/images/northumbria-icon.png", "northumbria"],
        ["Kent", 51.2108663, 0.7759013, "assets/images/wessex-icon.png", "wessex"],
        ["Cornwall", 50.4087534, -4.8320077, "assets/images/wessex-icon.png", "wessex"],
        ["Sussex", 50.933657,	-0.212399, "assets/images/wessex-icon.png", "wessex"],
        ["Surrey", 51.2608723, -0.4978297, "assets/images/wessex-icon.png", "wessex"],
        ["Hampshire", 51.1042083, -1.2324547, "assets/images/wessex-icon.png", "wessex"],
        ["Somerset", 51.0893883, -2.8357007, "assets/images/wessex-icon.png", "wessex"],
        ["Devon", 50.7888394, -3.7310407, "assets/images/wessex-icon.png", "wessex"],
        ["Dorset", 50.8112134, -2.2800067, "assets/images/wessex-icon.png", "wessex"],
        ["Wiltshire", 51.3069553, -1.9239737, "assets/images/wessex-icon.png", "wessex"],
        ["Essex", 51.8208543, 0.5536933, "assets/images/wessex-icon.png", "wessex"],
        ["London", 51.5268959, -0.3394719, "assets/images/wessex-icon.png", "wessex"],
        ["Hertfordshire", 51.8024912, -0.2273691, "assets/images/mercia-icon.png", "mercia"],
        ["Northamptonshire", 52.3326223, -0.8612687, "assets/images/mercia-icon.png", "mercia"],
        ["Gloucestershire", 51.8812293, -2.1034647, "assets/images/mercia-icon.png", "mercia"],
        ["Shropshire", 52.6422402, -2.6755677, "assets/images/mercia-icon.png", "mercia"],
        ["Warwickshire", 52.2605613, -1.5047367, "assets/images/mercia-icon.png", "mercia"],
        ["Oxfordshire", 51.7846263, -1.3165567, "assets/images/mercia-icon.png", "mercia"],
        ["Staffordshire", 52.8558072, -2.0336547, "assets/images/mercia-icon.png", "mercia"],
        ["Cambridgeshire", 52.3161863, 0.0763663, "assets/images/mercia-icon.png", "mercia"],
        ["Cheshire", 53.2058542, -2.3560777, "assets/images/mercia-icon.png", "mercia"],
        ["Derbyshire", 53.0718692, -1.5065807, "assets/images/mercia-icon.png", "mercia"],
        ["Leicestershire", 52.6459512, -1.1054757, "assets/images/mercia-icon.png", "mercia"],
        ["Herefordshire", 52.0949103, -2.6791307, "assets/images/mercia-icon.png", "mercia"],
        ["Nottinghamshire", 53.1314412, -0.9775317, "assets/images/mercia-icon.png", "mercia"],
        ["Lincolnshire", 53.1253312, -0.1814947, "assets/images/mercia-icon.png", "mercia"],
        ["Rutland", 52.6572112, -0.6478657, "assets/images/mercia-icon.png", "mercia"], 
        ["Bedfordshire", 52.0671493, -0.4650577, "assets/images/mercia-icon.png", "mercia"],
        ["Buckinghamshire", 51.7817283, -0.7855967, "assets/images/mercia-icon.png", "mercia"],
        ["Berkshire", 51.4045883, -1.0161207, "assets/images/mercia-icon.png", "mercia"],
        ];

// Working Code:
   /*
        const gmarker = new google.maps.Marker({
            position: {lat: marker[1], lng: marker[2] },
            map,
            title: "Click to zoom",
            icon: marker[3],
            shape: shape,
            title: marker[0],
        });

        map.addListener("center_changed", () => {
            window.setTimeout(() => {
                map.panTo(gmarker.getPosition());
            }, 3000);
        });

        gmarker.addListener("click", () => {
            map.setZoom(10);
            map.setCenter(gmarker.getPosition());
        }); */
     

    var gMarkers = [];

//Assigns marker positions and image
function setMarkers(map) {

    const shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: "poly",
    };

    for (let i = 0; i < markers.length; i++) {
        const county = markers[i];
        const category = markers[i][4];
        let marker = new google.maps.Marker({
            position: { lat: county[1], lng: county[2] },
            map,
            title: "Click to zoom",
            icon: county[3],
            shape: shape,
            title: county[0],
            category: category
        });

        gMarkers.push(marker);

        marker.addListener("click", () => {

            window.setTimeout(() => {
            map.setZoom(9);
            map.setCenter(marker.getPosition());
        }, 500);
        });
    }
};



// Filter markers on map
function filterMarkers(category) {
    for (i = 0; i < gMarkers.length; i++) {
        marker = gMarkers[i];
        //if same category or category not picked
        if (marker.category == category || category.length === 0) {
            marker.setVisible(true);
        }
        //Categories don't match
        else {
            marker.setVisible(false);
        }
    }
}


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
    }
}
        
    /* ---- Timeline --- */
//Hides all images
function hideAll() {
    const images = ["#imgHold", "#tl-img1", "#tl-img2", "#tl-img3", "#tl-img4", "#tl-img5", 
     "#tl-img6", "#tl-img7", "#tl-img8", "#tl-img9", "#tl-img10", "#tl-img11", "#tl-img12"];
     $(images.join(', ')).css("display", "none");
}

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
    }

//Animates the viking longboat under timeline
function animateLongboat(obj, from, to) {
        if(from >= to){
            return;
        } else { 
                let box = obj;
                box.style.marginLeft = from + "%";
                setTimeout(function(){
                    animateLongboat(obj, from + 1, to);   
                }, 85);   
        }
}

//Caluculates the start and end points for the animation
function animate(point) {
        let boat = $('#longboat').position(); //gets position values of longboat img
        let start = (point+7)-(0.16/boat.left * 100); // second bracket converts pixel value of left position to percentage value
        animateLongboat(document.getElementById("longboat"), start, point);
}
