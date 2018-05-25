google.maps.event.addDomListener(window,'load',disctirctfunction);
function disctirctfunction(){
	
	$(document).ready(function(){
	function initialize(){
		var district = document.getElementsByName("checkbox-dd");
		var priormid = document.getElementsByName("checkbox-scd");
		var quality = document.getElementsByName("checkbox-sqd");
		
		
		
		
		var endpoint;
		var urlmiddle;
		var prinumber;
		var qualitynumber;
		var getcolorfrom;
		
		
		
		
		 check_dd = [];
		 urllist=[];
		
		for ( k in district) {
			if (district[k].checked)
				check_dd.push(district[k].value);		
			
		}
		for ( k in check_dd ) {
			endpoint = check_dd[k];
			urlmiddle="http://198.13.44.188:8892/"+endpoint;
			urllist.push(urlmiddle);	
		}
		
		for  ( k in priormid){
			if (priormid[k].checked)
				prinumber = priormid[k].value;
		}
		console.log(prinumber);
		
		for ( k in quality){
			if (quality[k].checked)
				qualitynumber = quality[k].value;
		
		
		}
		console.log(qualitynumber);
		
		//一类小学
		if ( prinumber == "primary" && qualitynumber ==1 ){
			getcolorfrom = "prmry1d";
			$("#legend").attr("src","./img/legend-1.svg");
			console.log(getcolorfrom);
			function getColor(fi) {
                                                       var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 0.2 ? colors[4] :
                                                       fi > 0.15 ? colors[3] :
                                                     fi > 0.1 ? colors[2] :
                                                    fi > 0.05 ? colors[1] :
                                                          colors[0];
                                                                        }
			
		};
		
		//二类小学
		if ( prinumber == "primary" && qualitynumber ==2 ){
			getcolorfrom = "prmry2d";
			$("#legend").attr("src","./img/legend-1.svg");
			console.log(getcolorfrom);
			
			
			   function getColor(fi) {
                                                       var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 0.2 ? colors[4] :
                                                       fi > 0.15 ? colors[3] :
                                                     fi > 0.1 ? colors[2] :
                                                    fi > 0.05 ? colors[1] :
                                                          colors[0];
                                                                        }
			
			
			
			
			
		};
		
		//三类小学
	
		if ( prinumber == "primary" && qualitynumber ==3 ){
			getcolorfrom = "prmry3d";
			console.log(getcolorfrom);
			$("#legend").attr("src","./img/legend-1.svg");
			
			
			   function getColor(fi) {
                                                       var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 0.2 ? colors[4] :
                                                       fi > 0.15 ? colors[3] :
                                                     fi > 0.1 ? colors[2] :
                                                    fi > 0.05 ? colors[1] :
                                                          colors[0];
                                                                        }
			
			
			
			
			
		};
		
		//四类小学
		if ( prinumber == "primary" && qualitynumber ==4 ){
			getcolorfrom = "prmry4d";
			console.log(getcolorfrom);
			$("#legend").attr("src","./img/legend-2.svg");
			
			   function getColor(fi) {
                                                       var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 0.8 ? colors[4] :
                                                       fi > 0.6 ? colors[3] :
                                                     fi > 0.4 ? colors[2] :
                                                    fi > 0.2 ? colors[1] :
                                                          colors[0];
                                                                        }
			
			
			
			
			
		};
		
			//五类小学
		if ( prinumber == "primary" && qualitynumber ==5 ){
			getcolorfrom = "prmry5d";
			console.log(getcolorfrom);
			$("#legend").attr("src","./img/legend-2.svg");

			
			
			   function getColor(fi) {
                                                       var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 0.8 ? colors[4] :
                                                       fi > 0.6 ? colors[3] :
                                                     fi > 0.4 ? colors[2] :
                                                    fi > 0.2 ? colors[1] :
                                                          colors[0];
                                                                        }
			
			
			
			
			
		};
		
		
		//所有非普通
		if ( prinumber == "primary" && qualitynumber ==6 ){
			getcolorfrom = "prmrynb";
			console.log(getcolorfrom);
			$("#legend").attr("src","./img/legend-3.svg");

			
			
			   function getColor(fi) {
                                                       var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 1 ? colors[4] :
                                                       fi > 0.75 ? colors[3] :
                                                     fi > 0.5 ? colors[2] :
                                                    fi > 0.25 ? colors[1] :
                                                          colors[0];
                                                                        }
			
			
			
			
			
		};
		
		
		
			
		
		
		
		
		//所有小学
		if ( prinumber == "primary" && qualitynumber ==7 ){
			getcolorfrom = "prmrydn";
			console.log(getcolorfrom);
		    $("#legend").attr("src","./img/legend-4.svg");

			
			
			   function getColor(fi) {
                                                       var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 1.5 ? colors[4] :
                                                       fi > 1.125 ? colors[3] :
                                                     fi > 0.75 ? colors[2] :
                                                    fi > 0.375 ? colors[1] :
                                                          colors[0];
                                                                        }
			
			
			
			
			
		};
		
		
		//1级中学
		if ( prinumber == "middle" && qualitynumber ==1 ){
			getcolorfrom = "mddl1dn";
			console.log(getcolorfrom);
			$("#legend").attr("src","./img/legend-5.svg");
			
			
			   function getColor(fi) {
                                 var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 0.1 ? colors[4] :
                                                       fi > 0.075 ? colors[3] :
                                                     fi > 0.05 ? colors[2] :
                                                    fi > 0.025 ? colors[1] :
                                                          colors[0];
                                               }
			
			
			
			
			
		};
		
		
			//2级中学
		if ( prinumber == "middle" && qualitynumber ==2 ){
			getcolorfrom = "mddl2dn";
			console.log(getcolorfrom);
			$("#legend").attr("src","./img/legend-5.svg");
			
			
			   function getColor(fi) {
                                                       var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 0.1 ? colors[4] :
                                                       fi > 0.075 ? colors[3] :
                                                     fi > 0.05 ? colors[2] :
                                                    fi > 0.025 ? colors[1] :
                                                          colors[0];
                                                                        }
			
			
			
			
			
		};
		
		
			//3级中学
		if ( prinumber == "middle" && qualitynumber ==3 ){
			getcolorfrom = "mddl3dn";
			console.log(getcolorfrom);
			$("#legend").attr("src","./img/legend-5.svg");
			
			
			   function getColor(fi) {
                                                       var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 0.1 ? colors[4] :
                                                       fi > 0.075 ? colors[3] :
                                                     fi > 0.05 ? colors[2] :
                                                    fi > 0.025 ? colors[1] :
                                                          colors[0];
                                                                        }
			
			
			
			
			
		};
		
			//4级中学
		if ( prinumber == "middle" && qualitynumber ==4 ){
			getcolorfrom = "mddl4dn";
			console.log(getcolorfrom);
			$("#legend").attr("src","./img/legend-5.svg");
			
			
			   function getColor(fi) {
                                                       var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 0.1 ? colors[4] :
                                                       fi > 0.075 ? colors[3] :
                                                     fi > 0.05 ? colors[2] :
                                                    fi > 0.025 ? colors[1] :
                                                          colors[0];
                                                                        }
			
			
			
			
			
		};
		
			//5级中学
		if ( prinumber == "middle" && qualitynumber ==5 ){
			getcolorfrom = "mddl5dn";
			console.log(getcolorfrom);
			$("#legend").attr("src","./img/legend-2.svg");
			
			
			   function getColor(fi) {
                                                       var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 0.8 ? colors[4] :
                                                       fi > 0.6 ? colors[3] :
                                                     fi > 0.4 ? colors[2] :
                                                    fi > 0.2 ? colors[1] :
                                                          colors[0];
                                                                        }
			
			
			
			
			
		};
		
		
			//非普通中学
		if ( prinumber == "middle" && qualitynumber ==6 ){
			getcolorfrom = "mddlnbd";
			console.log(getcolorfrom);
			$("#legend").attr("src","./img/legend-1.svg");
			
			   function getColor(fi) {
                                                       var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 0.2 ? colors[4] :
                                                       fi > 0.15 ? colors[3] :
                                                     fi > 0.1 ? colors[2] :
                                                    fi > 0.05 ? colors[1] :
                                                          colors[0];
                                                                        }
			
			
			
			
			
		};
		
		
			//所有中学
		if ( prinumber == "middle" && qualitynumber ==7 ){
			getcolorfrom = "mddldns";
			console.log(getcolorfrom);
			$("#legend").attr("src","./img/legend-3.svg");
			
			
			   function getColor(fi) {
                                                       var colors = ["#F2DCDC","#E59A9C","#D8676B","#CB353A","#8F0207"];

                                              return fi >= 1 ? colors[4] :
                                                       fi > 0.75 ? colors[3] :
                                                     fi > 0.5 ? colors[2] :
                                                    fi > 0.25 ? colors[1] :
                                                          colors[0];
                                                                        }
			
			
			
			
			
		};
		
		
		
		
		
		
		
		
		 var map;   
         var markerArray=[];
         var dataArray= [];
         var infowindow= new google.maps.InfoWindow({maxWidth:300});

		 var mapOptions= {
				 center:new google.maps.LatLng(39.912843, 116.397291),
				 zoom: 11,
				 styles:redMap
			     };
		 map= new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		 
		 function getpolygon(){
			 
			 //画图
			 
			 
			  for (k in urllist){
										var dis = new google.maps.Data();
								        dis.loadGeoJson(urllist[k]);
										
										
										 //GET COLOR
										   
										   
										 
										   
										   
										   //GET COLOR
										
			
			                            dis.setStyle(function(feature){
				                            var color;
				                            //color= "LightSkyBlue";
				
				                          return{
											fillColor: getColor(feature.getProperty(getcolorfrom)),
					                        //fillColor: color,
					                        fillOpacity: 0.8,
					                        strokeColor: "White",
					                        //strokeOpacity: 1,
					                        strokeWeight:2
				                          };

			                            });
			
			                            dis.addListener('mouseover', function(event) {				                   
				                           dis.overrideStyle(event.feature, {
					                          strokeWeight:4.5
				                           });
			                            });
			
			                            dis.addListener('mouseout', function(event) {
				                           dis.revertStyle();

			                           });
									   
									   var infoWindow1 =  new google.maps.InfoWindow({content:"",});
									   
									   dis.addListener('click', function(event) {
				                            //infoWindow1.setContent('<b> School District: </b>'+
				                            //event.feature.getProperty('NAME'));
											
											var houseprice = parseInt(event.feature.getProperty('meanprc'));
											var sdngps = parseFloat(event.feature.getProperty('prmrynb')).toFixed(2);
											var sdaps = parseFloat(event.feature.getProperty('prmrydn')).toFixed(2);
											var sdngms = parseFloat(event.feature.getProperty('mddlnbd')).toFixed(2);
											var sdams = parseFloat(event.feature.getProperty('mddldns')).toFixed(2);
											
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
							           });
                                       dis.setMap(map);
									};
			 
			 
			 //画图结束
			 
			 
			 
			 
			 
		 };
		 
		 
		 getpolygon()
		 
		 
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
	var mapdiv = document.getElementById("districtapply");
    google.maps.event.addDomListener(mapdiv,"click",initialize);	
	
	});
	           
   				
     
};