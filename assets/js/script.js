
/*Required Functions: 
* onClick Functions will caused Goolge Maps to display Modern Day counties were Old England Regions use to be.
*timelineSlide will cause information about selected historical event to appear under the slider. 
 */
         function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 6,
                center: {
                    lat: 52.3124563,
                    lng: -0.079274
                }
            });
        }
//54.2288534,-4.2051138,5.75
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

/*Google Maps:
*Requires zoom on UK/England, Cluster funtionality needed to highlight required counties when onClickGoogleMaps funtion
is activated.
        */