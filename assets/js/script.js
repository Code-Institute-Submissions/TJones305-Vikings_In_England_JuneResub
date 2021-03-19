
/*Required Functions: 
* onClick Functions will caused Goolge Maps to display Modern Day counties were Old England Regions use to be.
*timelineSlide will cause information about selected historical event to appear under the slider. 
 */

 /*Google Maps:
*Requires zoom on UK/England, Cluster funtionality needed to highlight required counties when onClickGoogleMaps function
is activated.
        */
function initMap() {
  const myLatLng = { lat: 52.3124563, lng: -0.079274 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7.5,
    center: myLatLng,
  });
  
  let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
  let markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
            });
        });
  let markerCluster = new MarkerClusterer(map, markers,{
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  }

  let locations = [
/*East Anglia*/
 //Suffolk
    {lat:52.1555477, lng:0.8305162},
//Norfolk
    {lat:52.6458602, lng:1.1001733},
/*Mercia*/
//Hertfordshire: 
    {lat:51.8024912, lng:-0.2273691},
//Northamptonshire:
	{lat:52.3326223, lng:-0.8612687},
//Gloucestershire:
	{lat:51.8812293, lng:-2.1034647},
//Shropshire: 
	{lat:52.6422402, lng:-2.6755677},
//Warwickshire:
	{lat:52.2605613, lng:-1.5047367},
//Oxfordshire:
	{lat:51.7846263, lng:-1.3165567},
//Cambridgeshire:
	{lat:52.8558072, lng:-2.0336547},
//Staffordshire: 
	{lat:52.3161863, lng:0.0763663},
//Cheshire:
	{lat:53.2058542, lng:-2.3560777},
//Derbyshire:
	{lat:53.0718692, lng:-1.5065807},
//Leicestershire: 
	{lat:52.6459512, lng:-1.1054757},
//Herefordshire:
	{lat:52.0949103, lng:-2.6791307},
//Nottinghamshire:
	{lat:53.1314412, lng:-0.9775317},
//Lincolnshire:
	{lat:53.1253312, lng:-0.1814947},
//Rutland:
	{lat:52.6572112, lng:-0.6478657},
//Bedfordshire:
	{lat:52.0671493, lng:-0.4650577},
//Buckinghamshire:
	{lat:51.7817283, lng:-0.7855967},
//Berkshire:
    {lat:51.4045883, lng:-1.0161207},
/*Northumbria*/
//Lancashire: 
	{lat:53.8671211, lng:-2.6202687},
//Yorkshire:
	{lat:53.9761501, lng:-1.1075017},
//Northumberland:
	{lat:55.20421, lng:-2.0282457},
//Durham:
	{lat:54.7109391, lng:-1.7808717},
//Cumbria:
    {lat:54.6007491, lng:-2.8466487},
/*wessex*/
//Kent: 
	{lat:51.2108663, lng:0.7759013},
//Cornwall:
	{lat:50.4087534, lng:-4.8320077},
//Sussex:
	{lat:50.933657,	lng:-0.212399},
//Surrey: 
	{lat:51.2608723, lng:-0.4978297},
//Hampshire:
	{lat:51.1042083, lng:-1.2324547},
//Somerset:
	{lat:51.0893883, lng:-2.8357007},
//Devon:
	{lat:50.7888394, lng:-3.7310407},
//Dorset:
    {lat:50.8112134, lng:-2.2800067},
//Wiltshire:
	{lat:51.3069553, lng:-1.9239737},
//Essex:
	{lat:51.8208543, lng:0.5536933},
//London
    {lat:51.5268959, lng:-0.3394719}
];
     
    
/* ---- Timeline --- */
//timelineSlide()

/* Potentially not required Functions:
*Initially  planned onClickTextSlide function, but not required as this funtionality is part of the accordion 
feature. */

//onClickTextSlideEast()
//onClickTextSlideMercia()
//onClickTextSlideNorth()
//onClickTextSlideWessex()
