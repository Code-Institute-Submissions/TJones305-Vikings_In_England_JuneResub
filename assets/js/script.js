
/*Required Functions: 
* onClick Functions will caused Goolge Maps to display Modern Day counties were Old England Regions use to be.
*timelineSlide will cause information about selected historical event to appear under the slider. 
 */

 /*Google Maps:
*Requires zoom on UK/England, Cluster funtionality needed to highlight required counties when onClickGoogleMaps function
is activated.
        */
         function initMap() {
            let map = new google.maps.Map(document.getElementById("map"), {
                zoom: 6,
                center: {
                    lat: 52.3124563,
                    lng: -0.079274
                }
            });
        }

function onClickGoogleMaps () {

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let eastAnglia = [
//Suffolk
        {lat:52.2358344,
        lng:-0.0666801},
//Norfolk
        {lat:52.6687466, 
        lng:-0.171606}
    ];

    let mercia = [
//Hertfordshire: 
    {lat:51.8347302, 
    lng:-1.3962391},
//Northamptonshire:
	{lat:52.305134,
	lng:-1.9580972},
//Gloucestershire:
	{lat:51.8397288,
	lng:-3.2724975},
//Shropshire: 
	{lat:52.6470409,
	lng:-3.8553464},
//Warwickshire:
	{lat:52.3199926,
	lng:-2.1275127},
//Oxfordshire:
	{lat:51.8126104,
	lng:-1.8552331},
//Cambridgeshire:
	{lat:52.3675758,
	lng:-1.1138455},
//Staffordshire: 
	{lat:52.8194524,
	lng:-3.149266},
//Cheshire:
	{lat:53.2087709,
	lng:-3.672641},
//Derbyshire:
	{lat:53.1171519,
	lng:-2.1607295},
//Leicestershire: 
	{lat:52.6796183,
	lng:-2.251943},
//Herefordshire:
	{lat:52.1093796,
	lng:-3.3003807},
//Nottinghamshire:
	{lat:53.1446192,
	lng:-1.565864},
//Lincolnshire:
	{lat:53.1230266,
	lng:-1.35247},
//Rutland:
	{lat:52.6383279,
	lng:-0.8256757},
//Bedfordshire:
	{lat:52.0626837,
	lng:-0.9835095},
//Buckinghamshire:
	{lat:51.8395709,
	lng:-1.3690974},
//Berkshire:
	{lat:51.4480557,
	lng:-2.1602006}
    ];

    let northumbria = [
       
//Lancashire: 
	{lat:53.8559373,
	lng:-3.6859045},
//Yorkshire:
	{lat:53.9109609,
	lng:-3.4503445},
//Northumberland:
	{lat:55.2918812,
	lng:-3.1961203},
//Durham:
	{lat:54.7817348,
	lng:-1.622277},
//Cumbria:
	{lat:54.6091293,
	lng:-4.0209014}
    ];

    let wessex = [
//Kent: 
	{lat:51.191039,
	lng:-0.3784946},
//Cornwall:
	{lat:50.4379558,
	lng:-6.0771768},
//Sussex:
	{lat:50.933657,
	lng:-0.212399},
//Surrey: 
	{lat:51.2661606,
	lng:-1.5164938},
//Hampshire:
	{lat:51.0394658,
	lng:-2.4644518},
//Somerset:
	{lat:51.0715592,
	lng:-4.1632592},
//Devon:
	{lat:50.7026262,
	lng:-6.0267974},
//Dorset:
    {lat:50.7915572,
	lng:-3.4427742},
//Wiltshire:
	{lat:51.318715,
	lng:-3.0467989},
//Essex:
	{lat:51.7913785,
	lng:-0.4827174},
//London
	{lat:51.5273066,
	lng:-0.6620407}
    ];

    //let locations = 
    /*for () {

    } if {

    } else if {

    }else if {

    } else if {

    } else*/
}

//onClickGoolgeMapsEast()
//onClickGoolgeMapsMercia()
//onClickGoolgeMapsNorth()
//onClickGoolgeMapsWessex()
//timelineSlide()

/* Potentially not required Functions:
*Unsure whether onClickTextSlide functions are needed at this stage, as it appears this fintionality is part of the accordion 
feature, although they were initially thought required. 
Functionality will cause accordion text to expand for selected region and close other regions*/

//onClickTextSlideEast()
//onClickTextSlideMercia()
//onClickTextSlideNorth()
//onClickTextSlideWessex()

