var map;
    $(document).ready(function(){
		function initialize(){
			
			var mapOptions= {
				center:new google.maps.LatLng(39.912843, 116.397291),
				zoom: 12,
				styles:redMap
			};
			var infowindow= new google.maps.InfoWindow({
				content:"",
				maxWidth:300
			});
			
			map= new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
            //setAllMap(null);

            map.data.loadGeoJson('http://198.13.44.188:8892/Haidian');
			
			map.data.setStyle(function(feature){
				var color;
				color= "LightSkyBlue";
				
				return{
					fillColor: color,
					fillOpacity: 0.3,
					strokeColor: color,
					//strokeOpacity: 1,
					strokeWeight:2
				};

			});
			
			map.data.addListener('mouseover',function(event){
				map.data.revertStyle();
				map.data.overrideStyle(event.feature,{
					strokeWeight:4.5
				});
			});
			
			map.data.addListener('mouseout',function(event){
				map.data.revertStyle();
			});
			
			map.data.addListener('click',function(event){
				infowindow.setContent('<div style="line-height:1.00;overflow:hidden;white-space:nowrap;> <b> School District:</b>'+ 
				event.feature.getProperty('NAME')+'</div>');
				
				var anchor= new google.maps.MVCObject();
				anchor.set("position",event.LatLng);
				infowindow.open(map, anchor);
			});
			
			//setAllMap(map);
			
			//map.data.loadGeoJson('http://dev.spatialdatacapture.org:8811/Xicheng');
			
			//map.data.loadGeoJson('http://dev.spatialdatacapture.org:8811/Dongcheng');
			
			//map.data.loadGeoJson('http://dev.spatialdatacapture.org:8811/Chaoyang');
			
			
			
		}	
			
        google.maps.event.addDomListener(window,'load',initialize);
		
	});