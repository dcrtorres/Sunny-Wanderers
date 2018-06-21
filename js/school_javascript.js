var map;
    var markerArray=[];
    var dataArray= [];
    var infowindow= new google.maps.InfoWindow({maxWidth:250});
	
    $(document).ready(function(){
		function initialize(){
			
			var mapOptions= {
				center:new google.maps.LatLng(39.912843, 116.397291),
				zoom: 12,
				styles:redMap
			};
			map= new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

			getData(map.getCenter().lat(), map.getCenter().lng()); 
		}
		
		function getData(lat,lng){
			
			setAllMap(null);
			markerArray=[];
			
			var url ="http://198.13.44.188:8891/data/all";
			
			$.getJSON(url, function(data){
				$.each(data, function(k,v){
					
					var latlng = new google.maps.LatLng(v.glat,v.glon);
					dataArray.push(latlng);
					
					var schinfo=v.Primaryormiddle;
					var quainfo=v.Quality;
			  		                          
					var iconitem;
											  
             		    if(schinfo=="Primary"&&quainfo==1){
						   iconitem="./img/a1.svg";
			            };
											  
						if(schinfo=="Primary"&&quainfo=="2"){
						   iconitem="./img/a2.svg";
						};
											  
						if(schinfo=="Primary"&&quainfo=="3"){
						   iconitem="./img/a3.svg";
						};
											  
						if(schinfo=="Primary"&&quainfo=="4"){
						   iconitem="./img/a4.svg";
					    };
											  
						if(schinfo=="Primary"&&quainfo=="5"){
						   iconitem="./img/a5.svg";
						};
											  
					    if(schinfo=="Middle"&&quainfo=="1"){
						   iconitem="./img/b1.svg";
						};
											  
					    if(schinfo=="Middle"&&quainfo=="2"){
						   iconitem="./img/b2.svg";
						};
											  
					    if(schinfo=="Middle"&&quainfo=="3"){
						   iconitem="./img/b3.svg";
						};
											  
					    if(schinfo=="Middle"&&quainfo=="4"){
						   iconitem="./img/b4.svg";
						};
											  
					    if(schinfo=="Middle"&&quainfo=="5"){
						   iconitem="./img/b5.svg";
					    };  
					
					var marker= new google.maps.Marker({
					   position: latlng,
					   icon:iconitem
				    });
					
					google.maps.event.addListener(marker,'click',function(content){
						return function(){
						   infowindow.setContent("");				    
						
						   if(quainfo=="1"){
						    var content = '<div id="schooliw-container">'+
													
							                        '<div class="schooliw-left">QUALITY<br><a class="a-2"></a><img src="./img/1-01.svg" alt="Description"></div><div class="schooliw-right"><div class="schooliw-title">'+v.Name+
							                        '</div><div class="schooliw-address">'+v.Address+						
							                        '</div><br><div class="schooliw-content">Transition Approach<br>Corresponding Middle School<br>Corresponding Middle School Quality<br>Rate Of Transition</div><div class="schooliw-content-answer">'+v.Assignmode+'<br>'
							                        +v.Correspondmiddle+ '<br><br>'
							                        +v.Correspondmiddle_quality_show+ '<br>'
							                        +v.Correspondmiddle_promoterate
							                        '</div></div>';
							
						    infowindow.setContent(content);
						   }; 
						   
						   if(quainfo=="2"){
						    var content = '<div id="schooliw-container">'+
													
							                        '<div class="schooliw-left">QUALITY<br><a class="a-2"></a><img src="./img/2-01.svg" alt="Description"  ></div><div class="schooliw-right"><div class="schooliw-title">'+v.Name+
							                        '</div><div class="schooliw-address">'+v.Address+						
							                        '</div><br><div class="schooliw-content">Transition Approach<br>Corresponding Middle School<br>Corresponding Middle School Quality<br>Rate Of Transition</div><div class="schooliw-content-answer">'+v.Assignmode+'<br>'
							                        +v.Correspondmiddle+ '<br><br>'
							                        +v.Correspondmiddle_quality_show+ '<br>'
							                        +v.Correspondmiddle_promoterate
							                        '</div></div>';
							
						    infowindow.setContent(content);
						   }; 
						   
						   if(quainfo=="3"){
						    var content = '<div id="schooliw-container">'+
													
								                        '<div class="schooliw-left">QUALITY<br><a class="a-2"></a><img src="./img/3-01.svg" alt="Description"></div><div class="schooliw-right"><div class="schooliw-title">'+v.Name+
							                        '</div><div class="schooliw-address">'+v.Address+						
							                        '</div><br><div class="schooliw-content">Transition Approach<br>Corresponding Middle School<br>Corresponding Middle School Quality<br>Rate Of Transition</div><div class="schooliw-content-answer">'+v.Assignmode+'<br>'
							                        +v.Correspondmiddle+ '<br><br>'
							                        +v.Correspondmiddle_quality_show+ '<br>'
							                        +v.Correspondmiddle_promoterate
							                        '</div></div>';
							
						    infowindow.setContent(content);
						   }; 
						   
						   if(quainfo=="4"){
						    var content = '<div id="schooliw-container">'+
													
							                        '<div class="schooliw-left">QUALITY<br><a class="a-2"></a><img src="./img/4-01.svg" alt="Description"></div><div class="schooliw-right"><div class="schooliw-title">'+v.Name+
							                        '</div><div class="schooliw-address">'+v.Address+						
							                        '</div><br><div class="schooliw-content">Transition Approach<br>Corresponding Middle School<br>Corresponding Middle School Quality<br>Rate Of Transition</div><div class="schooliw-content-answer">'+v.Assignmode+'<br>'
							                        +v.Correspondmiddle+ '<br><br>'
							                        +v.Correspondmiddle_quality_show+ '<br>'
							                        +v.Correspondmiddle_promoterate
							                        '</div></div>';
							
						    infowindow.setContent(content);
						   }; 
						   
						   if(quainfo=="5"){
						    var content = '<div id="schooliw-container">'+
													
							                        '<div class="schooliw-left">QUALITY<br><a class="a-2"></a><img src="./img/5-01.svg" alt="Description"></div><div class="schooliw-right"><div class="schooliw-title">'+v.Name+
							                        '</div><div class="schooliw-address">'+v.Address+						
							                        '</div><br><div class="schooliw-content">Transition Approach<br>Corresponding Middle School<br>Corresponding Middle School Quality<br>Rate Of Transition</div><div class="schooliw-content-answer">'+v.Assignmode+'<br>'
							                        +v.Correspondmiddle+ '<br><br>'
							                        +v.Correspondmiddle_quality_show+ '<br>'
							                        +v.Correspondmiddle_promoterate
							                        '</div></div>';
							
						    infowindow.setContent(content);
						   }; 
						   
						   
							
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
					          iwBackground.children(':nth-child(4)').css({'display' : '', 'backgroundColor':'rgba(145, 29,34,0.8)'});
 					        // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
 					          if($('.schooliw-container').height() < 250){
      
                                }
                             });	
						}							
					}(""));
					
					markerArray.push(marker);
					
					
				});

		      setAllMap(map);   	 
			});
			
	    
			
		}
		
		google.maps.event.addDomListener(window,'load',initialize);
		
	});
	
	
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