google.maps.event.addDomListener(window,'load',schoolfunction);
function schoolfunction(){
	           
   $(document).ready(function(){
	   function initialize(){ 

	                        var schooldistrict= document.getElementsByName("checkbox-d");
	                        var schoolslist =document.getElementsByName("checkbox-sc");
			                var qualitylist= document.getElementsByName("checkbox-sq");
						    var showsdlist= document.getElementsByName("checkbox-ssd");
								 
							var district_s;
							var schools_s;
							var quality_s;
							var showsd_s;
								
 
							check_d=[];
						    check_sc=[];
						    check_sq=[];
							urllist=[];
							url_sdlist=[];
								
							for(k in schooldistrict){
								if (schooldistrict[k].checked)
								    check_d.push(schooldistrict[k].value); 
							}
								
							for(k in schoolslist){
							    if (schoolslist[k].checked)
								    check_sc.push(schoolslist[k].value);  
							}
								
							for (k in qualitylist){
								if (qualitylist[k].checked)
								    check_sq.push(qualitylist[k].value);  
						    }

							if (check_d.length==0){
								district_s= "Total";
							    for(k in check_sc){
								    schools_s=check_sc[k];
								    for(k in check_sq){
								        quality_s=check_sq[k];
										url="http://198.13.44.188:8891/data/"+district_s+"/"+schools_s+"/"+quality_s;
										//console.log(url);
										urllist.push(url);
										console.log(urllist);
								    }
							    }	
									
							}else if(check_sc.length==0){
								schools_s= "Total";
								for(k in check_d){
								    district_s= check_d[k];
									for(k in check_sq){
								        quality_s=check_sq[k];
										url="http://198.13.44.188:8891/data/"+district_s+"/"+schools_s+"/"+quality_s;
										//console.log(url);
										urllist.push(url);
										console.log(urllist);
								    }
								}
									
							}else if(check_sq.length==0){
								quality_s= "Total";	
								for(k in check_d){
								    district_s= check_d[k];
									for(k in check_sc){
								        schools_s=check_sc[k];
										url="http://198.13.44.188:8891/data/"+district_s+"/"+schools_s+"/"+quality_s;
										//console.log(url);
										urllist.push(url);
										console.log(urllist);
								    }
								}	
							}else {

								for(k in check_d){
								    district_s= check_d[k];
									for(k in check_sc){
								        schools_s=check_sc[k];
										for(k in check_sq){
								           quality_s=check_sq[k];
										   url="http://198.13.44.188:8891/data/"+district_s+"/"+schools_s+"/"+quality_s;
										   //console.log(url);
										   urllist.push(url);
										   console.log(urllist);
										}
								    }

								}
							};
							
							
							if(showsdlist[0].checked)
								for(k in check_d){
								    district_s= check_d[k];
									url="http://198.13.44.188:8892/"+district_s;
									//console.log(url);
									url_sdlist.push(url);
										//console.log(url_sdlist);
								}
	
							var map;   
                                var markerArray=[];
                                var dataArray= [];
                                var infowindow= new google.maps.InfoWindow({maxWidth:600});
								var infoWindow1 =  new google.maps.InfoWindow({content:"",});

		                        var mapOptions= {
				                    center:new google.maps.LatLng(39.912843, 116.397291),
				                    zoom: 14,
				                    styles:redMap
			                    };
			                    map= new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
			                    
								function getData(){
			                        setAllMap(null);
			                        markerArray=[];	
	  
							        for (k in url_sdlist){
										var dis = new google.maps.Data();
								        dis.loadGeoJson(url_sdlist[k]);
			
			                            dis.setStyle(function(feature){
				                            var color;
				                            color= "#8D6E6F";
				
				                          return{
					                        fillColor: color,
					                        fillOpacity: 0.3,
					                        strokeColor: color,
					                        //strokeOpacity: 1,
					                        strokeWeight:1.5
				                          };

			                            });
			
			                            dis.addListener('mouseover', function(event) {				                   
				                           dis.overrideStyle(event.feature, {
					                          strokeWeight:4.5,
											  fillColor:"#D1C5C5",
											  fillOpacity:0.3
				                           });
			                            });
			
			                            dis.addListener('mouseout', function(event) {
				                           dis.revertStyle();

			                           });
									   
									   
									   
									   dis.addListener('click', function(event) {
			                            	var houseprice = parseInt(event.feature.getProperty('meanprc'));
											var sdngps = parseFloat(event.feature.getProperty('prmrynb')).toFixed(2);
											var sdaps = parseFloat(event.feature.getProperty('prmrydn')).toFixed(2);
											var sdngms = parseFloat(event.feature.getProperty('mddlnbd')).toFixed(2);
											var sdams = parseFloat(event.feature.getProperty('mddldns')).toFixed(2);
											
											infowindow.close();
											infoWindow1.setContent('<div id="sdiw-container">'+
											
											'<div class="sdiw-left"><div class="sdiw-district">['+event.feature.getProperty('distrct')+
				                            ']</div><div class="sdiw-average"><br><a>AVERAGE HOUSING PRICE <br>(/㎡）<br><br><p>¥'+houseprice+											
											'</p></a></div></div>   <div class="sdiw-right"><div class="sdiw-title"><a> '+event.feature.getProperty('NAME')+
											
											'</a></div><div class="sdiw-right-content">DENSITY OF NON-GENERAL PRIMARY SCHOOL (Number/km2)<div class="sdiw-right-answer"><a>'+sdngps+
											'</a></div></div><div class="sdiw-right-content">DENSITY OF ALL PRIMARY SCHOOL (Number/km2)<div class="sdiw-right-answer"><a>'+sdaps+
											'</a></div></div><div class="sdiw-right-content">DENSITY OF NON-GENERAL MIDDLE SCHOOL (Number/km2)<div class="sdiw-right-answer"><a>'+sdngms+
											'</a></div></div><div class="sdiw-right-content">DENSITY OF ALL MIDDLE SCHOOL(Number/km2)<div class="sdiw-right-answer"><a>'+sdams+
											'</a></div></div></div>'
											);
				
				                           var anchor = new google.maps.MVCObject();
				                           anchor.set("position", event.latLng);
				                           infoWindow1.open(map, anchor);
						                   google.maps.event.addListener(infowindow, 'domready', function() {

 					                        // Reference to the DIV that wraps the bottom of infowindow
 					                         var iwOuter = $('.sdiw-container');
 					                         /* Since this div is in a position prior to .gm-div style-iw.
					                          * We use jQuery and create a iwBackground variable,
					                          * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
					                          */
					                         var iwBackground = iwOuter.prev();
					                         // Removes white background DIV
						 
					                         iwBackground.children(':nth-child(4)').css({'display' : '', 'backgroundColor':'rgba(145, 29,34,0.8)'});
 					                         // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
 					                         if($('.sdiw-container').height() < 250){
      
                                                }
                                            });											   
							            });
                                       dis.setMap(map);
									};
										
                                    for (k in urllist){ 
                                        $.getJSON(urllist[k], function(data){

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
													infoWindow1.close();
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
		
		                            };
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
      							
        var mapDiv = document.getElementById('schoolapply');
        google.maps.event.addDomListener(mapDiv,"click",initialize);
	});						
     
};