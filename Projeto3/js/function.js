window.onload = function(){
   var map;

   function initialize(){
        var mapProp = {
            center:new google.maps.LatLng(-27.648598, -48.577423),
            scrollwheel:false,
            zoom:8,
            mapTypeId:'satellite'
        }
        map = new google.maps.Map(document.getElementById("map"), mapProp);

    }   
   
    function addMarker(lat, long , icon , content){
        var LatLng = {
            
        }
    }
   
    initialize();


}