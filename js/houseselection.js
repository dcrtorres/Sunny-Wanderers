google.maps.event.addDomListener(window,'load',housefunction);
function housefunction (){
	
	$(document).ready(function(){
	   function initialize(){ 
	   
							var housedistrict= document.getElementsByName("checkbox-hd");
	                        var liftlist= document.getElementsByName("checkbox-hl");
								 
							var district_h;
						    var lift;
								
							check_hd=[];
                            check_l=[];
							urlhouselist=[];
								
							var min_year= $("#min_year").text();
							var max_year= $("#max_year").text();
							if (typeof min_year != "number") {
								min_year=1990;
							};
							if (typeof max_year != "number") {
								max_year=2000;
							};
							
							var min_value= $("#min_value").text();
							var max_value= $("#max_value").text();
							if (typeof min_value != "number") {
								min_value=60;
							};
							if (typeof max_value != "number") {
								max_value=100;
							};
							
							var min_price=min_value*1000;
						    var max_price=max_value*1000;
								
							for(k in housedistrict){
								if (housedistrict[k].checked)
								    check_hd.push(housedistrict[k].value); 
							}
								
							for(k in liftlist){
							    if (liftlist[k].checked)
								    check_l.push(liftlist[k].value);  
							}
								
						    if (check_hd.length==0){
								district_h= "Total";
							    for(k in check_l){
								    lift=check_l[k];
									url="http://198.13.44.188:8891/data/price/"+district_h+ "/" + max_year + "/" + min_year + "/"+ max_price + "/" + min_price +"/" + lift;
								    //console.log(url);
									urlhouselist.push(url);
									console.log(urlhouselist);
								}  	
							}else if(check_l.length==0){
								lift= "Total";
							    for(k in check_hd){
								    district_h= check_hd[k];
								    url="http://198.13.44.188:8891/data/price/"+district_h+ "/" + max_year + "/" + min_year + "/"+ max_price + "/" + min_price +"/" + lift;
									//console.log(url);
								    urlhouselist.push(url);
								    console.log(urlhouselist);
							    }	
							}else{							
								for (k in check_hd){
									district_h=check_hd[k];
									  for (k in check_l){
										  lift=check_l[k];
									      url="http://198.13.44.188:8891/data/price/"+district_h+ "/" + max_year + "/" + min_year + "/"+ max_price + "/" + min_price +"/" + lift;
										  //console.log(url);
										  urlhouselist.push(url);
										  console.log(urlhouselist);
										}
							    }
							};
								
	                        var map;   
                                var markerArray=[];
                                var dataArray= [];
                                var infowindow= new google.maps.InfoWindow({maxWidth:600});
								
								var mapOptions= {
				                    center:new google.maps.LatLng(39.912843, 116.397291),
				                    zoom: 14,
				                    styles:redMap
			                    };
			                    map= new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
			
			                            

								function getData(){
			                          setAllMap(null);
			                          markerArray=[];	
								      transArray=[];
										
                                      for (k in urlhouselist){ 
                                          $.getJSON(urlhouselist[k], function(data){

		                                       $.each(data, function(k,v){
					
			                                    var latlng = new google.maps.LatLng(v.glat,v.glon);
												dataArray.push(latlng);

			                                    var marker= new google.maps.Marker({
			                                       position: latlng,
			                                       icon:"./img/house.png"
			                                    });
		
					
		                                        google.maps.event.addListener(marker,'click',function(content){
				                                    return function(){
							var houseowprice = parseInt(v.unitprice);
							
							infowindow.setContent("");
							
						    //map.setCenter(new google.maps.LatLng(v.glat, v.glon));					    
							
						     var content = '<div id="houseiw-container">'+
							 
							 '<div class="houseiw-left">AVERAGE PRICE (/㎡)<br><a>¥'+houseowprice+
							'</a></div><div class="houseiw-right"><div class="houseiw-title"> '+v.Name+
							'</div><br/><div class="housew-content"><br>BUILT YEAR<br>LIFT<br>SCHOOL DISTRICT<br>NEAREST PRIMARY <br>SCHOOL<br>NEAREST PRIMARY SCHOOL QUALITY </div><div class="house-answer"></br>'
							+ v.age +'<br>'
							+ v.lift_yesorno + '<br>'
							+ v.schooldistrict + '<br>'
							+ v.Nearest_primary + '<br><br>'
							+ v.nearest_primary_quality		

							'</div></div>';	
														 
						                                infowindow.setContent(content);
						    
						                                infowindow.open(map,marker);
						    
							                            google.maps.event.addListener(infowindow, 'domready', function() {

 					                                     // Reference to the DIV that wraps the bottom of infowindow
 					                                        var iwOuter = $('.gm-style-iw');
 					                                       /* Since this div is in a position prior to .gm-div style-iw.
					                                        * We use jQuery and create a iwBackground variable,
					                                        * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
					                                        */
					                                        var iwBackground = iwOuter.prev();
					                                     // Removes white background DIV
					                                        iwBackground.children(':nth-child(4)').css({'display' : '', 'backgroundColor':'rgba(211,44,52,0.75)'});
 					                                     // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
 					                                        if($('.hiw-container').height() < 250){
      
                                                            }
                                                        });					
					                                }							
				                                }(""));
					
				                                markerArray.push(marker);
					
			                                   });		
                                             setAllMap(map);   	 
			                                });
											
										}	
		                            };
		
		                            
	                            getData();
								
								
								function createMarkers(){
		                            var marker = new google.maps.Marker({
  			                            position: latlng				
  		                            });
	                            }

	                            function setAllMap(map) {
		                            for (var i = 0; i < markerArray.length; i++) {
			                           markerArray[i].setMap(map);
		                            }
	                            }

	                            function clearMarkers() {
		                            setAllMarkers(null);
	                            }

	                            String.prototype.replaceAll = function(str1, str2, ignore) {
    	                            return decodeURIComponent( this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2) );
	                            } 
	                    };	
								
		var mapDiv = document.getElementById('houseapply');
        google.maps.event.addDomListener(mapDiv,"click",initialize);					
							
	});	
	
};