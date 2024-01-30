
var app = module.exports = require('derby').createApp('widgets', __filename);
app.serverUse(module, 'derby-stylus');
app.use(require('d-bootstrap'));
app.loadViews(__dirname);
app.loadStyles(__dirname);
app.component(require('d-connection-alert'));
app.component(require('d-before-unload'));

var rhbim;
var lhbim;
var xpos1;
var ypos1;
var xpos2;
var ypos2;
app.get('/', function(page, model, params, next) {
  var data = model.at('widgets.data');
  data.subscribe(function(err) {
    if (err) return next(err);
    data.createNull({color: 'Purple'});
    model.set('_page.numbers', [
      {content: 'First'},
      {content: 'Second'},
      {content: 'Third'}
    ]);
    model.set('_page.colors', [
      {content: 'Red'},
      {content: 'Orange'},
      {content: 'Purple'}
    ]);
	
    page.render();
  });
});
var E;
var F;
var ptox;
var ptoy;
var pttx;
var ptty;
var circx;
var circy;
var xpos2f;
var ypos2f;

app.proto.playerlightblue = function(e){
rhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/IND_RHB_3KfbY2sm7r.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737730659';
lhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/IND_LHB_Uvq8UaJov.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737730595';
	app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.imgopacl', '0');
			app.model.set('widgets.data.mainimg', rhbim);
					app.model.set('widgets.data.mainimgl', lhbim);
					app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/btemp_5iKxbxy-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665238020281');

}
app.proto.playerdarkblue = function(e){
rhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/SL_RHB_RFkcPNCmay.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737733239';
lhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/SL_LHB_msKWsvlL_S.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737733249';
	app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.imgopacl', '0');
			app.model.set('widgets.data.mainimg', rhbim);
					app.model.set('widgets.data.mainimgl', lhbim);
					app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/btemp_5iKxbxy-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665238020281');

}
app.proto.playeryellow = function(e){
rhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/AUS_RHB_9pJYFWFPq_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737730644';
lhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/AUS_LHB__R8tkoBm1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737730188';
	app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.imgopacl', '0');
			app.model.set('widgets.data.mainimg', rhbim);
					app.model.set('widgets.data.mainimgl', lhbim);
					app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/btemp_5iKxbxy-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665238020281');

}
app.proto.playergreen = function(e){
rhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/PAK_RHB_woDOMZY3n.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737732760';
lhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/PAK_LHB_8Vy8Jh2Xx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737732395';
	app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.imgopacl', '0');
			app.model.set('widgets.data.mainimg', rhbim);
					app.model.set('widgets.data.mainimgl', lhbim);
					app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/btemp_5iKxbxy-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665238020281');

}
app.proto.playerred = function(e){
rhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/ENG_RHB_CYef2nL6e.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737730596';
lhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/ENG_LHB_ql_K_MTKH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737730509';
	app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.imgopacl', '0');
			app.model.set('widgets.data.mainimg', rhbim);
					app.model.set('widgets.data.mainimgl', lhbim);
					app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/btemp_5iKxbxy-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665238020281');

}
app.proto.playerdarkred = function(e){
rhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/WI_RHB_0LQGO_zkXI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737732916';
lhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/WI_LHB_axeLaxrmCI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737733270';
	app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.imgopacl', '0');
			app.model.set('widgets.data.mainimg', rhbim);
					app.model.set('widgets.data.mainimgl', lhbim);
					app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/btemp_5iKxbxy-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665238020281');

}
app.proto.playergrey = function(e){
rhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/NZ_RHB_uNZNslef3X.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737730782';
lhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/NZ_LHB_xh-syqu8d2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737730625';
	app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.imgopacl', '0');
			app.model.set('widgets.data.mainimg', rhbim);
					app.model.set('widgets.data.mainimgl', lhbim);
					app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/btemp_5iKxbxy-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665238020281');

}
app.proto.playerpurple = function(e){
rhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/SCO_RHB_HVB30a30Di.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737733179';
lhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/SCO_LHB_84x-CS2dz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737732883';
	app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.imgopacl', '0');
			app.model.set('widgets.data.mainimg', rhbim);
					app.model.set('widgets.data.mainimgl', lhbim);
					app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/btemp_5iKxbxy-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665238020281');

}

app.proto.playerorange = function(e){
rhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/ORANGE_RHB_B82fntwDcP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737730707';
lhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/ORANGE_LHB_o249dWJU3K.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665737730698';
	app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.imgopacl', '0');
			app.model.set('widgets.data.mainimg', rhbim);
					app.model.set('widgets.data.mainimgl', lhbim);
					app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/btemp_5iKxbxy-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665238020281');

}
app.proto.playerpink = function(e){
rhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/PINK_RHB_SZXHf7IxjG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665749480187';
lhbim='https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/PINK_LHB_8mefK4sbd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1665749479840';
	app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.imgopacl', '0');
			app.model.set('widgets.data.mainimg', rhbim);
					app.model.set('widgets.data.mainimgl', lhbim);
					app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/btemp_5iKxbxy-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665238020281');

}
 var count = 0;
app.proto.clickity = function(e){
	console.log(count);
	 switch(count) {
		 case 0:
	 xpos1= event.clientX - target.offsetLeft - target.offsetWidth/2 + 20,
     ypos1= event.clientY - target.offsetTop - target.offsetHeight/2 + 22,
		circx=xpos1+2;
		circy=ypos1+4;
		
		ptox=985+xpos1;
		ptoy=558+ypos1;
			 this.model.set('widgets.data.statustransition','all 0.1s ease-in-out');
	 this.model.set('widgets.data.statcol','orange');
		  this.model.set('widgets.data.statustext','Waiting for second click');
  console.log("hp");
  console.log("hp");
		 break;
		 case 1:
		 xpos2= event.clientX - target.offsetLeft - target.offsetWidth/2 + 19,
     ypos2= event.clientY - target.offsetTop - target.offsetHeight/2 + 19,
	 	pttx=986+xpos2;
		ptty=564+ypos2;
		xpos2f=xpos2+12;
		ypos2f=ypos2+12;
		console.log(xpos2);
		console.log(xpos2f);
			 this.model.set('widgets.data.translb', "translate("+ xpos1 + "px," + ypos1 + "px)");
  this.model.set('widgets.data.transrb', "translate("+ xpos1 + "px," + ypos1 + "px)");
    this.model.set('widgets.data.width','40px');
	  this.model.set('widgets.data.height','40px');
	    this.model.set('widgets.data.bgsize','40px');
		 this.model.set('widgets.data.circpitch', "translate("+ circx + "px," + circy + "px)");
		  this.model.set('widgets.data.shadowpos1', "translate("+ circx + "px," + circy + "px)");
		  		  this.model.set('widgets.data.shadowpos2', "translate("+ circx + "px," + circy + "px)");
		 console.log("circx="+circx+"   "+"circy="+circy);
		 this.model.set('widgets.data.l1offset','0');
		  this.model.set('widgets.data.line1x2',ptox);
		    this.model.set('widgets.data.line1y2',ptoy);
				  this.model.set('widgets.data.statustransition','all 0.1s ease-in-out');
			  this.model.set('widgets.data.statcol','orange');
		  this.model.set('widgets.data.statustext','In use');
		 
	 const myTimeouttry = setTimeout(testn, 1200);
		 function testn(){
  app.model.set('widgets.data.translb', "translate("+ xpos2f + "px," + ypos2f + "px)");
  app.model.set('widgets.data.transrb', "translate("+ xpos2f + "px," + ypos2f + "px)");
    app.model.set('widgets.data.width','32px');
	  app.model.set('widgets.data.height','32px');
	    app.model.set('widgets.data.bgsize','32px');
		app.model.set('widgets.data.l2offset','0');
		app.model.set('widgets.data.line1x2',ptox);
		    app.model.set('widgets.data.line1y2',ptoy);
			app.model.set('widgets.data.line2x2',pttx);
		    app.model.set('widgets.data.line2y2',ptty);
			app.model.set('widgets.data.circpitchopac', '100');
		 const myTimeout = setTimeout(waifoopac, 1200);
		 }
		 
		 function waifoopac() {
			 app.model.set('widgets.data.ballzoom','crescendo 1s alternate infinite ease-in')
			app.model.set('widgets.data.line1opac','1');
		  app.model.set('widgets.data.line2opac','1');
		 
		 const myTimeout = setTimeout(myGreeting, 9000);
		 }
		 
		 
		 function myGreeting() {
			 app.model.set('widgets.data.width','0px');
				app.model.set('widgets.data.height','0px');
					app.model.set('widgets.data.bgsize','0px');
					app.model.set('widgets.data.line1x2','0');
		    app.model.set('widgets.data.line1y2','0');
			app.model.set('widgets.data.line2x2','0');
		    app.model.set('widgets.data.line2y2','0');
			app.model.set('widgets.data.l1offset','2000');
			app.model.set('widgets.data.l2offset','2000');
			app.model.set('widgets.data.line1opac','0');
		  app.model.set('widgets.data.line2opac','0');
		   app.model.set('widgets.data.ballzoom','none')
		   app.model.set('widgets.data.circpitchopac', '0');
		   app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/btemp_5iKxbxy-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665238020281');
		app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.imgopacl', '0');
		   app.model.set('widgets.data.lbopac', '0');
		app.model.set('widgets.data.rbopac', '0');
		app.model.set('widgets.data.shadow1scale', '0');
		app.model.set('widgets.data.shadow2scale', '0');
			app.model.set('widgets.data.shadow1opacity', '0');
		app.model.set('widgets.data.shadow2opacity', '0');
		app.model.set('widgets.data.rhblbstroke', '2px solid white');
		app.model.set('widgets.data.rhbrbstroke', '2px solid white');
		app.model.set('widgets.data.lhbrbstroke', '2px solid white');
		app.model.set('widgets.data.lhblbstroke', '2px solid white');
				const myTimeouttwo = setTimeout(myGreetingtwo, 500);
				
		 }
		
		 function myGreetingtwo() {
			app.model.set('widgets.data.translb', 'translate(-695px, -595px)');
			app.model.set('widgets.data.transrb', 'translate(40px, -595px)');
			  app.model.set('widgets.data.shadowpos1', 'translate(-695px, 325px)');
			   app.model.set('widgets.data.shadowpos2', 'translate(40px, 325px)');
			const myTimeoutthree = setTimeout(myGreetingthree, 500);
			}
			
		 function myGreetingthree() {
			app.model.set('widgets.data.width','90px');
				app.model.set('widgets.data.height','90px');
				app.model.set('widgets.data.bgsize','90px');
					  app.model.set('widgets.data.statustransition','all 9s ease-in-out');
					  app.model.set('widgets.data.statcol','#2fff00');
		  app.model.set('widgets.data.statustext','Ready');
				
				const myTimeout = setTimeout(myGreetingrel, 100);
		 }
		 function myGreetingrel() {
		location.reload()
		}
		break;
	 }
		count = count<5?count+1:5;
}


app.proto.fulltoss = function(e){
	this.model.set('widgets.data.translb', "translate("+ xpos1 + "px," + ypos1 + "px)");
  this.model.set('widgets.data.transrb', "translate("+ xpos1 + "px," + ypos1 + "px)");
    this.model.set('widgets.data.width','45px');
	  this.model.set('widgets.data.height','45px');
	    this.model.set('widgets.data.bgsize','45px');
		  this.model.set('widgets.data.line1x2',ptox);
		    this.model.set('widgets.data.line1y2',ptoy);
	this.model.set('widgets.data.buttonclick','clicken 0.2s 1 ease-in');
		this.model.set('widgets.data.l1offset','0');
		const myTimeoutaww = setTimeout(waifoopacc, 700);
		function waifoopacc() {
			
		app.model.set('widgets.data.line1opac','100');
		const myTimeoutaw = setTimeout(waifoopac, 1000);}
		
		 function waifoopac() {
			 app.model.set('widgets.data.ballzoom','crescendo 1s alternate infinite ease-in')
			
		 
		 const myTimeouttye = setTimeout(myGreeting, 9000);
		 }
		 
		 
		 function myGreeting() {
			 app.model.set('widgets.data.width','0px');
				app.model.set('widgets.data.height','0px');
					app.model.set('widgets.data.bgsize','0px');
					app.model.set('widgets.data.line1x2','0');
		    app.model.set('widgets.data.line1y2','0');
			app.model.set('widgets.data.line2x2','0');
		    app.model.set('widgets.data.line2y2','0');
			app.model.set('widgets.data.l1offset','2000');
			app.model.set('widgets.data.l2offset','2000');
			app.model.set('widgets.data.line1opac','0');
		  app.model.set('widgets.data.line2opac','0');
		   app.model.set('widgets.data.ballzoom','none')
		   app.model.set('widgets.data.circpitchopac', '0');
		   app.model.set('widgets.data.buttonclick', 'none');
		   		   app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/btemp_5iKxbxy-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665238020281');
		app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.imgopacl', '0');
		   app.model.set('widgets.data.lbopac', '0');
		app.model.set('widgets.data.rbopac', '0');
		app.model.set('widgets.data.rhblbstroke', '2px solid white');
		app.model.set('widgets.data.rhbrbstroke', '2px solid white');
		app.model.set('widgets.data.lhbrbstroke', '2px solid white');
		app.model.set('widgets.data.lhblbstroke', '2px solid white');
				const myTimeouttwodfg = setTimeout(myGreetingtwo, 1600);
				
		 }
		
		 function myGreetingtwo() {
			app.model.set('widgets.data.translb', 'translate(-695px, -595px)');
			app.model.set('widgets.data.transrb', 'translate(40px, -595px)');
			const myTimeoutthreesewe = setTimeout(myGreetingthree, 1600);
			}
			
		 function myGreetingthree() {
			app.model.set('widgets.data.width','70px');
				app.model.set('widgets.data.height','70px');
				app.model.set('widgets.data.bgsize','70px');
				 app.model.set('widgets.data.statustransition','all 9s ease-in-out');
				app.model.set('widgets.data.statcol','#2fff00');
		  app.model.set('widgets.data.statustext','Ready');
		  
				const myTimeoutaregb = setTimeout(myGreetingrel, 500);
		 }
		 function myGreetingrel() {
		location.reload()
		}
	
}
app.proto.rhbleftball = function(e){
		app.model.set('widgets.data.line1x1', '300');
		app.model.set('widgets.data.line1y1', '0');
		app.model.set('widgets.data.imgopac', '100');
		app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/lengthsrhb_SMBcDbCmb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665743170181');
			app.model.set('widgets.data.imgopacl', '0');
		app.model.set('widgets.data.rhblbstroke', '8px solid red');
			app.model.set('widgets.data.rhbrbstroke', '2px solid white');
		app.model.set('widgets.data.lhbrbstroke', '2px solid white');
		app.model.set('widgets.data.lhblbstroke', '2px solid white');
		app.model.set('widgets.data.lbopac', '100');
		app.model.set('widgets.data.rbopac', '0');
		app.model.set('widgets.data.shadow1scale', '1');
			app.model.set('widgets.data.shadow1opacity', '100');
		
		

	
}
app.proto.rhbrightball = function(e){
		app.model.set('widgets.data.line1x1', '1000');
		app.model.set('widgets.data.line1y1', '0');
		app.model.set('widgets.data.imgopac', '100');
		app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/lengthsrhb_SMBcDbCmb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665743170181');
		app.model.set('widgets.data.imgopacl', '0');
		app.model.set('widgets.data.rhbrbstroke', '8px solid red');
			app.model.set('widgets.data.lhbrbstroke', '2px solid white');
		app.model.set('widgets.data.lhblbstroke', '2px solid white');
		app.model.set('widgets.data.rhblbstroke', '2px solid white');
		app.model.set('widgets.data.lbopac', '0');
		app.model.set('widgets.data.rbopac', '100');
		app.model.set('widgets.data.shadow2scale', '1');
			app.model.set('widgets.data.shadow2opacity', '100');

	
}
app.proto.lhbrightball = function(e){
		app.model.set('widgets.data.line1x1', '1000');
		app.model.set('widgets.data.line1y1', '0');
	app.model.set('widgets.data.imgopacl', '100');
	app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/lengthslhb_4al_pOBzG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665743170188');
		app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.rhbrbstroke', '2px solid white');
		app.model.set('widgets.data.lhbrbstroke', '8px solid red');
			app.model.set('widgets.data.lhblbstroke', '2px solid white');
		app.model.set('widgets.data.rhblbstroke', '2px solid white');
		app.model.set('widgets.data.lbopac', '0');
		app.model.set('widgets.data.rbopac', '100');
		app.model.set('widgets.data.shadow2scale', '1');
			app.model.set('widgets.data.shadow2opacity', '100');
		

	
}
app.proto.lhbleftball = function(e){
		app.model.set('widgets.data.line1x1', '300');
		app.model.set('widgets.data.line1y1', '0');
		app.model.set('widgets.data.imgopacl', '100');
		app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/HAWKEYE_PLAYERS/lengthslhb_4al_pOBzG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665743170188');
				app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.lhblbstroke', '8px solid red');
		app.model.set('widgets.data.rhblbstroke', '2px solid white');
		app.model.set('widgets.data.rhbrbstroke', '2px solid white');
		app.model.set('widgets.data.lhbrbstroke', '2px solid white');
		app.model.set('widgets.data.lbopac', '100');
		app.model.set('widgets.data.rbopac', '0');
		app.model.set('widgets.data.shadow1scale', '1');
			app.model.set('widgets.data.shadow1opacity', '100');

	
}
app.proto.slateclean = function(e){
		 app.model.set('widgets.data.width','0px');
				app.model.set('widgets.data.height','0px');
					app.model.set('widgets.data.bgsize','0px');
					app.model.set('widgets.data.line1x2','0');
		    app.model.set('widgets.data.line1y2','0');
			app.model.set('widgets.data.line2x2','0');
		    app.model.set('widgets.data.line2y2','0');
			app.model.set('widgets.data.l1offset','2000');
			app.model.set('widgets.data.l2offset','2000');
			app.model.set('widgets.data.line1opac','0');
		  app.model.set('widgets.data.line2opac','0');
		   app.model.set('widgets.data.ballzoom','none')
		   app.model.set('widgets.data.circpitchopac', '0');
		   app.model.set('widgets.data.imgopac', '0');
		app.model.set('widgets.data.imgopacl', '0');
		   app.model.set('widgets.data.lbopac', '0');
		app.model.set('widgets.data.rbopac', '0');
			app.model.set('widgets.data.shadow1scale', '0');
			app.model.set('widgets.data.shadow2scale', '0');
			app.model.set('widgets.data.shadow1opacity', '0');
		app.model.set('widgets.data.shadow2opacity', '0');
		app.model.set('widgets.data.lengthtra', 'https://ik.imagekit.io/ctmfcct2/btemp_5iKxbxy-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665238020281');
		app.model.set('widgets.data.rhblbstroke', '2px solid white');
		app.model.set('widgets.data.rhbrbstroke', '2px solid white');
		app.model.set('widgets.data.lhbrbstroke', '2px solid white');
		app.model.set('widgets.data.lhblbstroke', '2px solid white');
				const myTimeouttwo = setTimeout(myGreetingtwo, 100);
				
		 }
		
		 function myGreetingtwo() {
			app.model.set('widgets.data.translb', 'translate(-695px, -595px)');
			app.model.set('widgets.data.transrb', 'translate(40px, -595px)');
				  app.model.set('widgets.data.shadowpos1', 'translate(-695px, 325px)');
				    app.model.set('widgets.data.shadowpos2', 'translate(40px, 325px)');
			const myTimeoutthree = setTimeout(myGreetingthree, 100);
			}
			
		 function myGreetingthree() {
			app.model.set('widgets.data.width','90px');
				app.model.set('widgets.data.height','90px');
				app.model.set('widgets.data.bgsize','90px');
				 app.model.set('widgets.data.statustransition','all 9s ease-in-out');
				app.model.set('widgets.data.statcol','#2fff00');
		  app.model.set('widgets.data.statustext','Ready');
				
				const myTimeout = setTimeout(myGreetingrel, 100);
		 }
		 function myGreetingrel() {
		location.reload()
		}
