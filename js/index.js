
// title animation
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
	
	
// canvas animation	
	
;(function() {
  
  'use strict'
  
  var c = document.getElementById('c');
  var ctx = c.getContext('2d');
  var w = c.width = window.innerWidth;
  var h = c.height = window.innerHeight;
  var cx = w / 2;
  var cy = h / 2;
  var Box = function(x, y, vx, color) {
    this.color = color;
    this.vx = vx;
    this.x = x;
    this.y = y;
    this.w = 10 + Math.random() * 50;
    this.h = 5 + Math.random() * 200;
  };
  Box.prototype = {
    constructor: Box,
    update: function() {
      this.x += this.vx;
      if(this.x < -this.w / 2) {
        this.x = w + this.w / 2;
      }
    },
    render: function(ctx) {
      ctx.save();
      ctx.fillStyle = this.color;
      ctx.translate(this.x, this.y);
      ctx.fillRect(-this.w/2, -this.h, this.w, this.h);
      ctx.restore();
    }
  };
  
  var ctr = 50;
  var boxes = [];
  var boxes2 = [];
  var boxes3 = [];
  var box; 
  var speed = -2;
  
  for(var i = 0; i < ctr; i++) {
    box = new Box(Math.random() * w, h, speed * 0.5, '#e5e5e5');
    boxes.push(box);
  }
  for(var i = 0; i < ctr; i++) {
    box = new Box(Math.random() * w, h, speed * 0.8, '#cccccc');
    boxes2.push(box);
  }  
  for(var i = 0; i < ctr; i++) {
    box = new Box(Math.random() * w, h, speed, '#999999');
    boxes3.push(box);
  }    
  
  requestAnimationFrame(function loop() {
    requestAnimationFrame(loop);
    ctx.clearRect(0, 0, w, h);
    ctx.globalAlpha = 0.9;
    for(var i = 0, len = boxes.length; i < len; i++) {
      box = boxes[i];
      box.update();
      box.render(ctx);
    }
    for(var i = 0, len = boxes2.length; i < len; i++) {
      box = boxes2[i];
      box.update();
      box.render(ctx);
    }
    for(var i = 0, len = boxes3.length; i < len; i++) {
      box = boxes3[i];
      box.update();
      box.render(ctx);
    }    
  });
  
})();	
	
	
	
	
	
	
	