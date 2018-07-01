// All right reserved for SeniorJs.com
// copywrite 2018
// SeniorTween Plugin V-0.3.1


// ----------------------- Animation Functions --------------------
(function () {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
		var currTime = new Date().getTime();
		var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		var id = window.setTimeout(function () {
				callback(currTime + timeToCall);
			},
			timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	};

	if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
		clearTimeout(id);
	};
}());
var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
	hidden = "hidden";
	visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
	hidden = "mozHidden";
	visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
	hidden = "msHidden";
	visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
	hidden = "webkitHidden";
	visibilityChange = "webkitvisibilitychange";
}








TweenLite.lagSmoothing(0);
TweenLite.ticker.useRAF(false);
TweenLite.ticker.fps(250);

//	$('.el')[0].hasClass('p123')
Array.prototype.hasClass = function(className) {
	if (this.length <= 0)
		return false;
	for (var i=0; i<this.length; i++) {
		var lnE = this[i].classList,
			lnELength = lnE.length;
		for (var j=0; j<lnELength; j++) {
			if (lnE[j] == className) {
				return true;
			}
		}
	}
	return false;
}
HTMLElement.prototype.hasClass = function(className) {
	if (this == undefined)
		return false;
	var lnE = this.classList,
		lnELength = lnE.length;
	for (var i=0; i<lnELength; i++) {
		if (lnE[i] == className) {
			return true;
		}
	}
	return false;
}
//	$('.el')[0].addClass('p123')
Array.prototype.addClass = function(className) {
	if (this.length <= 0)
		return this;
	for (var i=0; i<this.length; i++) {
		if (!(this[i].hasClass(className)))
			this[i].classList.add(className);
	}
	return this;
}
HTMLElement.prototype.addClass = function(className) {
	if (this == undefined)
		return this;
	if (!(this.hasClass(className)))
		this.classList.add(className);
	return this;
}
//	$('.el')[0].removeClass('p123')
Array.prototype.removeClass = function(className) {
	if (this.length <= 0)
		return false;
	for (var i=0; i<this.length; i++) {
		if (this[i].hasClass(className))
			this[i].classList.remove(className);
	}
	return this;
}
HTMLElement.prototype.removeClass = function(className) {
	if (this == undefined)
		return this;
	if (this.hasClass(className))
		this.classList.remove(className);
	return this;
}
//	$('.el')[0].toggleClass('p123')
Array.prototype.toggleClass = function(className) {
	if (this.length <= 0)
		return false;
	for (var i=0; i<this.length; i++) {
		if (!(this[i].hasClass(className)))
			this[i].classList.add(className);
		else
			this[i].classList.remove(className);
	}
	return this;
}
HTMLElement.prototype.toggleClass = function(className) {
	if (this == undefined)
		return this;
	if (!(this.hasClass(className)))
		this.classList.add(className);
	else
		this.classList.remove(className);
	return this;
}
//	$('.el')[0].closestByClass('inputsDivOut')
Array.prototype.closestByClass = function(className) {
	var _this = this,
		_thisArr = [];
	if (_this.length <= 0)
		return false;
	for (var i=0; i<this.length; i++) {
		while (!(_this[i].parentNode.hasClass(className))) {
			_this[i] = _this[i].parentNode;
			if (_this[i].parentNode.nodeType !== 1) break;
		}
		if (_this[i].parentNode.nodeType === 1) {
			_thisArr.push( _this[i].parentNode );
		}
	}
	return(_thisArr);
}
HTMLElement.prototype.closestByClass = function(className) {
	var _this = this,
		_thisArr = [];
	if (_this == undefined)
		return this;

	while (!(_this.parentNode.hasClass(className))) {
		_this = _this.parentNode;
		if (_this.parentNode.nodeType !== 1) break;
	}
	if (_this.parentNode.nodeType === 1) {
		_thisArr.push( _this.parentNode );
	}
	return _thisArr;
}
//	$('.el')[0].closestByID('IDName')
Array.prototype.closestByID = function(IDName) {
	var _this = this,
		_thisArr = [];
	if (_this.length <= 0)
		return false;
	for (var i=0; i<this.length; i++) {
		while (!(_this[i].parentNode.id === IDName)) {
			_this[i] = _this[i].parentNode;
			if (_this[i].parentNode.nodeType !== 1) break;
		}
		if (_this[i].parentNode.nodeType === 1) {
			_thisArr.push( _this[i].parentNode );
		}
	}
	return(_thisArr);
}
HTMLElement.prototype.closestByID = function(IDName) {
	var _this = this,
		_thisArr = [];
	if (_this == undefined)
		return this;
	while (!(_this.parentNode.id === IDName)) {
		_this = _this.parentNode;
		if (_this.parentNode.nodeType !== 1) break;
	}
	if (_this.parentNode.nodeType === 1) {
		_thisArr.push( _this.parentNode );
	}
	return(_thisArr);
}
//	$('.el')[0].find('inputsDivOut')
Array.prototype.find = function (el) {
	var elements = this;
	var elements2 = [];
	for (var i = 0; i < elements.length; i++) {
		if ( (typeof elements[i] === 'object') && (elements[i].nodeType === 1) ) {
			var subI = elements[i].querySelectorAll(el);
			for (var j = 0; j < subI.length; j++) {
				elements2.push(subI[j]);
			}
		}
	}
	return elements2;
}
HTMLElement.prototype.find = function (el) {
	var element = this;
	var elements2 = [];
	if ( (typeof element === 'object') && (element.nodeType === 1) ) {
		var subI = element.querySelectorAll(el);
		for (var j = 0; j < subI.length; j++) {
			elements2.push(subI[j]);
		}
	}
	return elements2;
}
Array.prototype.findByClass = function(className) {
	var _this = this,
		thisChild = [];
	if (_this == undefined)
		return [];
	for (var i=0; i<this.length; i++) {
		for (var j = 0; j < _this[i].children.length; j++) {
			if (_this[i].children[j].hasClass(className))
				thisChild.push(_this[i].children[j])
		}
	}
	return thisChild;
}
HTMLElement.prototype.findByClass = function(className) {
	var _this = this,
		thisChild = [];
	if (_this == undefined)
		return this;
	for (var i=0; i<_this.children.length; i++) {
		if (_this.children[i].hasClass(className))
			thisChild.push(_this.children[i])
	}
	return thisChild;
}
//	_this.isInBox(e, thisW, thisH, wrapperW, wrapperH, wrapper.offsetLeft, wrapper.offsetTop);
HTMLElement.prototype.isInBox = function(e, thisW, thisH, wrapperW, wrapperH, wrapperLeft, wrapperTop) {
	var O = {
		X: 0,
		Y: 0,
		boolX: false,
		boolY: false,
	};

	if ((e.clientX - thisW) < wrapperLeft) {
		O.boolX = true;
		O.X = 0;
	}
	else if ((e.clientX + thisW) > (wrapperLeft + wrapperW)) {
		O.boolX = true;
		O.X = wrapperW - 2*thisW;
	}
	else {
		O.boolX = true;
		O.X = e.clientX - wrapperLeft - thisW;
	}

	if ((e.clientY - thisH) < wrapperTop) {
		O.boolY = true;
		O.Y = 0;
	}
	else if ((e.clientY + thisH) > (wrapperTop + wrapperH)) {
		O.boolY = true;
		O.Y = wrapperH - 2*thisH;
	}
	else {
		O.boolY = true;
		O.Y = e.clientY - wrapperTop - thisH;
	}

	return O;
}
//	$('.draggable').seniorDraggable({ handle: $('.handle'), wrapper: $('#wrapper'), onUpdate: callback, onComplete: onComplete });
Array.prototype.seniorDraggable = function(args) {
	var _this = this[0],
		handle = args.handle[0],
		wrapper = args.wrapper[0],
		onUpdate = (args.onUpdate != null)? args.onUpdate: false,
		onComplete = (args.onComplete != null)? args.onComplete: false,
		thisW = parseInt( getTheStyle(_this,'width') )/2,
		thisH = parseInt( getTheStyle(_this,'height') )/2,
		wrapperW = parseInt( getTheStyle(wrapper,'width') ),
		wrapperH = parseInt( getTheStyle(wrapper,'height') ),
		wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX,
		wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY,
		XY = {};
	window.addEventListener('resize', function(){
		setTimeout(function(){
			wrapperW = parseInt( getTheStyle(wrapper,'width') );
			wrapperH = parseInt( getTheStyle(wrapper,'height') );
			wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX;
			wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY;
		}, 100);
		setTimeout(function(){
			wrapperW = parseInt( getTheStyle(wrapper,'width') );
			wrapperH = parseInt( getTheStyle(wrapper,'height') );
			wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX;
			wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY;
		}, 1000);
	});
	var dragSweep = {
		x: 0,
		y:0
	};
	if (isThisMobile) {
		var dragMobileFunc = function(e){
			wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX;
			wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY;
			XY = _this.isInBox(e.touches[0], thisW, thisH, wrapperW, wrapperH, wrapperLeft, wrapperTop);
			if (XY.boolX)
				_this.style.right = 'auto';
			_this.style.left = XY.X + 'px';
			if (XY.boolY)
				_this.style.bottom = 'auto';
			_this.style.top = XY.Y + 'px';
			if (onUpdate != false)
				onUpdate(XY);
		}
		function touchStart(e) {
			e.preventDefault();
			dragSweep = {
				x: e.clientX,
				y: e.clientY
			};
			//		wrapper.style.position = 'relative';
			_this.style.position = 'absolute';
			_this.setAttribute('data-dragging', 'true');
			_this.addEventListener('touchmove', dragMobileFunc, true);
		}
		function touchEnd(e) {
			_this.removeEventListener('touchmove', dragMobileFunc, true);
			if ((onComplete != false) && (_this.getAttribute('data-dragging') == 'true')) onComplete(XY);
			_this.setAttribute('data-dragging', 'false');
		}
		function touchCancel(e) {
			_this.removeEventListener('touchmove', dragMobileFunc, true);
			if ((onComplete != false) && (_this.getAttribute('data-dragging') == 'true')) onComplete(XY);
			_this.setAttribute('data-dragging', 'false');
		}

		handle.addEventListener("touchstart", touchStart, true);
		handle.addEventListener("touchend", touchEnd, false);
		handle.addEventListener("touchcancel", touchCancel, false);
	}
	else {
		var dragFunc = function (e) {
			wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX;
			wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY;
			XY = _this.isInBox(e, thisW, thisH, wrapperW, wrapperH, wrapperLeft, wrapperTop);
			if (XY.boolX) _this.style.right = 'auto';
			_this.style.left = XY.X + 'px';
			if (XY.boolY) _this.style.bottom = 'auto';
			_this.style.top = XY.Y + 'px';
			if (onUpdate != false) onUpdate(XY);
		}
		handle.addEventListener('mousedown', function (e) {
			e.preventDefault();
			dragSweep = {
				x: e.clientX, y: e.clientY
			};
			//		wrapper.style.position = 'relative';
			_this.style.position = 'absolute';
			_this.setAttribute('data-dragging', 'true');
			window.addEventListener('mousemove', dragFunc, true);
		}, true);
		window.addEventListener('mouseup', function (e) {
			window.removeEventListener('mousemove', dragFunc, true);
			if ((onComplete != false) && (_this.getAttribute('data-dragging') == 'true')) onComplete(XY);
			_this.setAttribute('data-dragging', 'false');
		}, true);
	}
}
//	$('.draggable')[0].seniorDraggable({ handle: $('.handle')[0], wrapper: $('#wrapper')[0], onUpdate: callback, onComplete: onComplete });
HTMLElement.prototype.seniorDraggable = function(args) {
	var _this = this,
		handle = args.handle,
		wrapper = args.wrapper,
		onUpdate = (args.onUpdate != null)? args.onUpdate: false,
		onComplete = (args.onComplete != null)? args.onComplete: false,
		thisW = parseInt( getTheStyle(_this,'width') )/2,
		thisH = parseInt( getTheStyle(_this,'height') )/2,
		wrapperW = parseInt( getTheStyle(wrapper,'width') ),
		wrapperH = parseInt( getTheStyle(wrapper,'height') ),
		wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX,
		wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY,
		XY = {};
	window.addEventListener('resize', function(){
		setTimeout(function(){
			wrapperW = parseInt( getTheStyle(wrapper,'width') );
			wrapperH = parseInt( getTheStyle(wrapper,'height') );
			wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX;
			wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY;
		}, 100);
		setTimeout(function(){
			wrapperW = parseInt( getTheStyle(wrapper,'width') );
			wrapperH = parseInt( getTheStyle(wrapper,'height') );
			wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX;
			wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY;
		}, 1000);
	});
	var dragSweep = {
		x: 0,
		y:0
	};
	if (isThisMobile) {
		var dragMobileFunc = function(e){
			wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX;
			wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY;
			XY = _this.isInBox(e.touches[0], thisW, thisH, wrapperW, wrapperH, wrapperLeft, wrapperTop);
			if (XY.boolX)
				_this.style.right = 'auto';
			_this.style.left = XY.X + 'px';
			if (XY.boolY)
				_this.style.bottom = 'auto';
			_this.style.top = XY.Y + 'px';
			if (onUpdate != false)
				onUpdate(XY);
		}
		function touchStart(e) {
			e.preventDefault();
			dragSweep = {
				x: e.clientX,
				y: e.clientY
			};
			//		wrapper.style.position = 'relative';
			_this.style.position = 'absolute';
			_this.setAttribute('data-dragging', 'true');
			_this.addEventListener('touchmove', dragMobileFunc, true);
		}
		function touchEnd(e) {
			_this.removeEventListener('touchmove', dragMobileFunc, true);
			if ((onComplete != false) && (_this.getAttribute('data-dragging') == 'true')) onComplete(XY);
			_this.setAttribute('data-dragging', 'false');
		}
		function touchCancel(e) {
			_this.removeEventListener('touchmove', dragMobileFunc, true);
			if ((onComplete != false) && (_this.getAttribute('data-dragging') == 'true')) onComplete(XY);
			_this.setAttribute('data-dragging', 'false');
		}

		handle.addEventListener("touchstart", touchStart, true);
		handle.addEventListener("touchend", touchEnd, false);
		handle.addEventListener("touchcancel", touchCancel, false);
	}
	else {
		var dragFunc = function (e) {
			wrapperLeft = wrapper.getBoundingClientRect().left - window.scrollX;
			wrapperTop = wrapper.getBoundingClientRect().top - window.scrollY;
			XY = _this.isInBox(e, thisW, thisH, wrapperW, wrapperH, wrapperLeft, wrapperTop);
			if (XY.boolX) _this.style.right = 'auto';
			_this.style.left = XY.X + 'px';
			if (XY.boolY) _this.style.bottom = 'auto';
			_this.style.top = XY.Y + 'px';
			if (onUpdate != false) onUpdate(XY);
		}
		handle.addEventListener('mousedown', function (e) {
			e.preventDefault();
			dragSweep = {
				x: e.clientX, y: e.clientY
			};
			//		wrapper.style.position = 'relative';
			_this.style.position = 'absolute';
			_this.setAttribute('data-dragging', 'true');
			window.addEventListener('mousemove', dragFunc, true);
		}, true);
		window.addEventListener('mouseup', function (e) {
			window.removeEventListener('mousemove', dragFunc, true);
			if ((onComplete != false) && (_this.getAttribute('data-dragging') == 'true')) onComplete(XY);
			_this.setAttribute('data-dragging', 'false');
		}, true);
	}
}
//	$('#slider').seniorSlider({ bar: $('#slider .paBar'), handle: $('#slider .Handle'), Update: function (O, val) { console.log(O, val); }, Complete: function (O, val) { console.log(O, val); } });
Array.prototype.seniorSlider = function(args) {
	var _this = this[0],
		Update = args.Update,
		Complete = args.Complete,
		paBar = args.bar[0],
		paHandle = args.handle[0],
		Range = paBar.querySelector('.Range'),
		ShowValue = _this.querySelector('.ShowValue'),
		min = parseInt(_this.getAttribute('data-min')),
		max = parseInt(_this.getAttribute('data-max'));

	var paHandleW = parseInt( getTheStyle(paHandle,'width') )/2,
		thisW = parseInt( getTheStyle(_this,'width') ) - (2 * paHandleW),
		opacity = ( _this.getAttribute('data-val') != null && _this.getAttribute('data-val') != '' )? parseInt( _this.getAttribute('data-val') ) : min;
	Range.style.width = thisW * (opacity-min)/(max-min) + paHandleW + 'px';
	paHandle.style.left = thisW * (opacity-min)/(max-min) + 'px';
	if (isThisMobile) {
		_this.addEventListener("touchstart", function () {
			ShowValue.fadeIn(0.3);
		}, true);
		$('html, body').addEventListener("touchend", function () {
			ShowValue.fadeOut(0.2);
		}, false);
		$('html, body').addEventListener("touchcancel", function () {
			ShowValue.fadeOut(0.2);
		}, false);
	}
	else {
		_this.on('mousedown', function () {
			ShowValue.fadeIn(0.3);
		});
		$('html, body').on('mouseup', function () {
			ShowValue.fadeOut(0.2);
		});
	}
	paHandle.seniorDraggable({ handle: paHandle, wrapper: _this,
		onUpdate: function(O){
			// O = { X:'number', Y:'number', boolX:'number', boolY:'number' }
			Range.style.width = O.X + paHandleW + 'px';
			valTrans = parseInt( (O.X/thisW) * (max-min) + min );
			_this.setAttribute('data-val', valTrans);
			ShowValue.innerHTML = valTrans + '%';
			ShowValue.setAttribute('data-value', valTrans);
			Update(O, valTrans);
		}, onComplete: function(O){
			// O = { X:'number', Y:'number', boolX:'number', boolY:'number' }
			Range.style.width = O.X + paHandleW + 'px';
			valTrans = parseInt( (O.X/thisW) * (max-min) + min );
			_this.setAttribute('data-val', valTrans);
			ShowValue.innerHTML = valTrans + '%';
			ShowValue.setAttribute('data-value', valTrans);
			Complete(O, valTrans);
		}
	});
}
//	$('#slider')[0].seniorSlider({ bar: $('#slider .paBar')[0], handle: $('#slider .Handle')[0], Update: function (O, val) { console.log(O, val); }, Complete: function (O, val) { console.log(O, val); } });
HTMLElement.prototype.seniorSlider = function(args) {
	var _this = this,
		Update = args.Update,
		Complete = args.Complete,
		paBar = args.bar,
		paHandle = args.handle,
		Range = paBar.querySelector('.Range'),
		ShowValue = _this.querySelector('.ShowValue'),
		min = parseInt(_this.getAttribute('data-min')),
		max = parseInt(_this.getAttribute('data-max'));

	var paHandleW = parseInt( getTheStyle(paHandle,'width') )/2,
		thisW = parseInt( getTheStyle(_this,'width') ) - (2 * paHandleW),
		opacity = ( _this.getAttribute('data-val') != null && _this.getAttribute('data-val') != '' )? parseInt( _this.getAttribute('data-val') ) : min;
	Range.style.width = thisW * (opacity-min)/(max-min) + paHandleW + 'px';
	paHandle.style.left = thisW * (opacity-min)/(max-min) + 'px';
	if (isThisMobile) {
		_this.addEventListener("touchstart", function () {
			ShowValue.fadeIn(0.3);
		}, true);
		$('html, body').addEventListener("touchend", function () {
			ShowValue.fadeOut(0.2);
		}, false);
		$('html, body').addEventListener("touchcancel", function () {
			ShowValue.fadeOut(0.2);
		}, false);
	}
	else {
		_this.on('mousedown', function () {
			ShowValue.fadeIn(0.3);
		});
		$('html, body').on('mouseup', function () {
			ShowValue.fadeOut(0.2);
		});
	}
	paHandle.seniorDraggable({ handle: paHandle, wrapper: _this,
		onUpdate: function(O){
			// O = { X:'number', Y:'number', boolX:'number', boolY:'number' }
			Range.style.width = O.X + paHandleW + 'px';
			valTrans = parseInt( (O.X/thisW) * (max-min) + min );
			_this.setAttribute('data-val', valTrans);
			ShowValue.innerHTML = valTrans + '%';
			ShowValue.setAttribute('data-value', valTrans);
			Update(O, valTrans);
		}, onComplete: function(O){
			// O = { X:'number', Y:'number', boolX:'number', boolY:'number' }
			Range.style.width = O.X + paHandleW + 'px';
			valTrans = parseInt( (O.X/thisW) * (max-min) + min );
			_this.setAttribute('data-val', valTrans);
			ShowValue.innerHTML = valTrans + '%';
			ShowValue.setAttribute('data-value', valTrans);
			Complete(O, valTrans);
		}
	});
}
//	body.mobileTouch();
HTMLElement.prototype.mobileTouch = function(wrapID, touchLRUnit) {
	var _this = this,
		touchSweep = [],
		sweepsMobile = [],
		sweepsMobileX = [],
		sweepsRightIndex = [],
		sweepsLeftIndex = [],
		sweepsRightValue = [],
		sweepsLeftValue = [];
	var sweepFuncTouch = function(e){
		if (e.touches.length <= 1) {
			if ((touchSweep[0].x - e.touches[0].clientX) > touchLRUnit) {
				goLRNoAnimate(wrapID, 1, 2);
				sweepsMobileX[0] = touchSweep[0];
				touchSweep[0] = {
					x: parseInt(e.touches[0].clientX), y: parseInt(e.touches[0].clientY)
				}
				sweepsMobile[0] = 'sweepRight';
			}
			else if ((touchSweep[0].x - e.touches[0].clientX) < -touchLRUnit) {
				goLRNoAnimate(wrapID, -1, 2);
				sweepsMobileX[0] = touchSweep[0];
				touchSweep[0] = {
					x: parseInt(e.touches[0].clientX), y: parseInt(e.touches[0].clientY)
				}
				sweepsMobile[0] = 'sweepLeft';
			}
		}
		else {
			for(var i=0; i<e.touches.length; i++) {
				if ((touchSweep[i].x - e.touches[i].clientX) > touchLRUnit) {
					//					console.log('sweepRight[ ', i, ' ] : ', touchSweep[i].x - e.touches[i].clientX);
					sweepsMobileX[i] = touchSweep[i];
					touchSweep[i] = {
						x: parseInt(e.touches[i].clientX), y: parseInt(e.touches[i].clientY)
					}
					sweepsMobile[i] = 'sweepRight';
				}
				else if ((touchSweep[i].x - e.touches[i].clientX) < -touchLRUnit) {
					//					console.log('sweepLeft[ ', i, ' ] : ', touchSweep[i].x - e.touches[i].clientX);
					sweepsMobileX[i] = touchSweep[i];
					touchSweep[i] = {
						x: parseInt(e.touches[i].clientX), y: parseInt(e.touches[i].clientY)
					}
					sweepsMobile[i] = 'sweepLeft';
				}
			}
			if ( (sweepsMobile.indexOf("sweepLeft") >= 0) && (sweepsMobile.indexOf("sweepRight") >= 0) ) {
				sweepsMobile.forEach(function(element, index) {
					if (element == 'sweepRight') sweepsRightIndex.push(sweepsMobileX[index].x);
					else if (element == 'sweepLeft') sweepsLeftIndex.push(sweepsMobileX[index].x);
				});
				sweepsRightValue[0] = sweepsRightIndex.min2();
				sweepsRightValue[1] = sweepsRightIndex.max2();
				sweepsLeftValue[0] = sweepsLeftIndex.min2();
				sweepsLeftValue[1] = sweepsLeftIndex.max2();

				//				document.getElementById('ForPA').value = ( (sweepsRightValue[0] < sweepsLeftValue[0]) || (sweepsRightValue[1] < sweepsLeftValue[1]) ) + ' , ' + ( (sweepsRightValue[0] > sweepsLeftValue[0]) || (sweepsRightValue[1] > sweepsLeftValue[1]) ) + ' , ' + e.touches.length;
				if ( (sweepsRightValue[0] < sweepsLeftValue[0]) || (sweepsRightValue[1] < sweepsLeftValue[1]) ) {
					if (clickAllow)
						zoomInFunc(wrapID);
					//					console.log('Zoomed In');
					_this.removeEventListener('touchmove', sweepFuncTouch, true);
				}
				else if ( (sweepsRightValue[0] > sweepsLeftValue[0]) || (sweepsRightValue[1] > sweepsLeftValue[1]) ) {
					if (clickAllow)
						zoomOutFunc(wrapID);
					//					console.log('Zoomed Out');
					_this.removeEventListener('touchmove', sweepFuncTouch, true);
				} else {
					//					console.log(sweepsMobile);
				}
			} else {
				// Do Nothing
			}
		}
	}
	function touchStart(e) {
		for(var i=0; i<e.touches.length; i++) {
			touchSweep[i] = {
				x : parseInt(e.touches[i].clientX),
				y : parseInt(e.touches[i].clientY)
			}
		}
		//		console.log('Touch Started!');
		_this.addEventListener('touchmove', sweepFuncTouch, true);
		//		------------------ for Multi Touch ----------------
		if (e.touches.length > 1) {
			//			console.log('Multi touched');
			//			console.log(touchSweep);
		}
	}
	function touchEnd(e) {
		_this.removeEventListener('touchmove', sweepFuncTouch, true);
		touchSweep = [];
		sweepsMobile = [];
		sweepsMobileX = [];
		sweepsRightValue = [];
		sweepsLeftValue = [];
		sweepsRightIndex = [];
		sweepsLeftIndex = [];
		//		console.log('touch Ended');
	}
	function touchCancel(e) {
		_this.removeEventListener('touchmove', sweepFuncTouch, true);
		touchSweep = [];
		sweepsMobile = [];
		sweepsMobileX = [];
		sweepsRightValue = [];
		sweepsLeftValue = [];
		sweepsRightIndex = [];
		sweepsLeftIndex = [];
		//		console.log('Touch Canceled');
	}

	_this.addEventListener("touchstart", touchStart, true);
	_this.addEventListener("touchend", touchEnd, false);
	_this.addEventListener("touchcancel", touchCancel, false);
}
//	body.mouseTouch();
HTMLElement.prototype.mouseTouch = function(wrapID, mouseLRUnit) {
	var _this = this,
		sweep = {
			x: 0,
			y:0
		};
	sweepFunc = function(e){
		if ( (sweep.x - e.clientX) > mouseLRUnit ) {
			//			console.log('Sweep Right');
			goLRNoAnimate(wrapID, 1, 12);
			sweep = {
				x: e.clientX, y: e.clientY
			}
		}
		else if ( (sweep.x - e.clientX) < -mouseLRUnit ) {
			//			console.log('Sweep Left');
			goLRNoAnimate(wrapID, -1, 12);
			sweep = {
				x: e.clientX, y: e.clientY
			}
		}
	}
	_this.onmousedown = function(e){
		sweep = {
			x: e.clientX,
			y: e.clientY
		};
		this.addEventListener('mousemove', sweepFunc);
	}
	_this.onmouseup = function(e){
		this.removeEventListener('mousemove', sweepFunc);
	}
	_this.onmouseenter = function(e){
		if (e.buttons != 1) {
			this.removeEventListener('mousemove', sweepFunc);
		}
	}
}

//	-------------------- FADE animates --------------------------------
//	--------- Choose animation here: https://greensock.com/docs/Easing --------------
//	$('.el')[0].fadeIn(0.5,Power1.easeInOut);
Array.prototype.fadeIn = function(time, Easing, callback) {
	var _this = this,
		Easing = (Easing != null)? Easing : 'Linear.easeNone';
	if (_this.length <= 0)
		return _this;
	for (var i=0; i<_this.length; i++) {
		var thisAttr = _this[i].getAttribute('data-ptr');

		_this[i].style.removeProperty('height');
		_this[i].style.removeProperty('overflow');
		var paddingT = 0,
			paddingB = 0,
			marginTop = 0,
			marginBottom = 0,
			Height = 0,
			display = '';
		if (_this[i].seniorAttrs == null) {
			paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
			paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
			marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
			marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
			if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
				Height = _this[i].offsetHeight - paddingT - paddingB;
			}
			else {
				Height = _this[i].offsetHeight;
			}
			if (getTheStyle(_this[i], 'display') == 'none') {
				display = 'block';
			}
			else {
				display = getTheStyle(_this[i], 'display');
			}

			_this[i].seniorAttrs = {
				paddingTop: paddingT,
				paddingBottom: paddingB,
				marginTop: marginTop,
				marginBottom: marginBottom,
				display: display,
				height: Height,
			}
		}
		else {
			var seniorAttrs = _this[i].seniorAttrs;
			paddingT = seniorAttrs.paddingTop;
			paddingB = seniorAttrs.paddingBottom;
			marginTop = seniorAttrs.marginTop;
			marginBottom = seniorAttrs.marginBottom;
			display = seniorAttrs.display;
			Height = seniorAttrs.height;
		}
		_this[i].seniorAttrs.animation = 'fadeIn';
		if ( (parseInt(getTheStyle(_this[i], 'height')) - paddingT - paddingB - parseInt(getTheStyle(_this[i], 'border-top-width')) - parseInt(getTheStyle(_this[i], 'border-bottom-width'))) <= 0) {
			_this[i].style.height = 'auto';
		}
		_this[i].style.paddingTop = paddingT + 'px';
		_this[i].style.paddingBottom = paddingB + 'px';
		_this[i].style.marginTop = marginTop + 'px';
		_this[i].style.marginBottom = marginBottom + 'px';

		if (_this[i].getAttribute('data-ptr') == null) {
			if (getTheStyle(_this[i],'display') == 'none' || getTheStyle(_this[i],'opacity') == 0 || getTheStyle(_this[i],'height') == 0) {
				TweenLite.killTweensOf(_this[i], true);
				if (getTheStyle(_this[i],'display') == 'none') {
					_this[i].style.opacity = 0;
					_this[i].style.removeProperty('display');
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.display = 'block';
					}
				}
				TweenLite.to(_this[i], time, {opacity: 1, onComplete:function () {
					if (getTheStyle(this.target, 'box-sizing') === 'content-box') {
						this.target.seniorAttrs.height = this.target.offsetHeight - paddingT - paddingB;
					}
					else {
						this.target.seniorAttrs.height = this.target.offsetHeight;
					}
					if (callback != null) {
						callback(this.target);
					}
				}, ease: Easing});
			}
			else {
				_this[i].setAttribute('data-ptr','visible');
				continue;
			}
		}
		else if ( thisAttr === 'invisible' ) {
			TweenLite.killTweensOf(_this[i], true);
			if (getTheStyle(_this[i],'display') == 'none') {
				_this[i].style.opacity = 0;
				_this[i].style.removeProperty('display');
				if (getTheStyle(_this[i],'display') == 'none') {
					_this[i].style.display = 'block';
				}
			}
			TweenLite.to(_this[i], time, {opacity: 1, onComplete:function () {
				if (getTheStyle(this.target, 'box-sizing') === 'content-box') {
					this.target.seniorAttrs.height = this.target.offsetHeight - paddingT - paddingB;
				}
				else {
					this.target.seniorAttrs.height = this.target.offsetHeight;
				}
				if (callback != null) {
					callback(this.target);
				}
			}, ease: Easing});
		}
		_this[i].setAttribute('data-ptr','visible');
	}
	return _this;
}
HTMLElement.prototype.fadeIn = function(time, Easing, callback) {
	var _this = this,
		Easing = (Easing != null)? Easing : 'Linear.easeNone';
	if (this == undefined)
		return this;
	var thisAttr = _this.getAttribute('data-ptr');

	_this.style.removeProperty('height');
	_this.style.removeProperty('overflow');
	var paddingT = 0,
		paddingB = 0,
		marginTop = 0,
		marginBottom = 0,
		Height = 0,
		display = '';
	if (_this.seniorAttrs == null) {
		paddingT = parseInt(getTheStyle(_this, 'padding-top'));
		paddingB = parseInt(getTheStyle(_this, 'padding-bottom'));
		marginTop = parseInt(getTheStyle(_this, 'margin-top'));
		marginBottom = parseInt(getTheStyle(_this, 'margin-bottom'));
		if (getTheStyle(_this, 'box-sizing') === 'content-box') {
			Height = _this.offsetHeight - paddingT - paddingB;
		}
		else {
			Height = _this.offsetHeight;
		}
		if (getTheStyle(_this, 'display') == 'none') {
			display = 'block';
		}
		else {
			display = getTheStyle(_this, 'display');
		}

		_this.seniorAttrs = {
			paddingTop: paddingT,
			paddingBottom: paddingB,
			marginTop: marginTop,
			marginBottom: marginBottom,
			display: display,
			height: Height,
		}
	}
	else {
		var seniorAttrs = _this.seniorAttrs;
		paddingT = seniorAttrs.paddingTop;
		paddingB = seniorAttrs.paddingBottom;
		marginTop = seniorAttrs.marginTop;
		marginBottom = seniorAttrs.marginBottom;
		display = seniorAttrs.display;
		Height = seniorAttrs.height;
	}
	_this.seniorAttrs.animation = 'fadeIn';
	if ( (parseInt(getTheStyle(_this, 'height')) - paddingT - paddingB - parseInt(getTheStyle(_this, 'border-top-width')) - parseInt(getTheStyle(_this, 'border-bottom-width'))) <= 0) {
		_this.style.height = 'auto';
	}
	_this.style.paddingTop = paddingT + 'px';
	_this.style.paddingBottom = paddingB + 'px';
	_this.style.marginTop = marginTop + 'px';
	_this.style.marginBottom = marginBottom + 'px';

	if (_this.getAttribute('data-ptr') == null) {
		if (getTheStyle(_this,'display') == 'none' || getTheStyle(_this,'opacity') == 0 || getTheStyle(_this,'height') == 0) {
			TweenLite.killTweensOf(_this, true);
			if (getTheStyle(_this,'display') == 'none') {
				_this.style.opacity = 0;
				_this.style.removeProperty('display');
				if (getTheStyle(_this,'display') == 'none') {
					_this.style.display = 'block';
				}
			}
			TweenLite.to(_this, time, {opacity: 1, onComplete:function () {
				if (getTheStyle(this.target, 'box-sizing') === 'content-box') {
					this.target.seniorAttrs.height = this.target.offsetHeight - paddingT - paddingB;
				}
				else {
					this.target.seniorAttrs.height = this.target.offsetHeight;
				}
				if (callback != null) {
					callback(this.target);
				}
			}, ease: Easing});
		}
		else {
			_this.setAttribute('data-ptr','visible');
			return this;
		}
	}
	else if ( thisAttr === 'invisible' ) {
		TweenLite.killTweensOf(_this, true);
		if (getTheStyle(_this,'display') == 'none') {
			_this.style.opacity = 0;
			_this.style.removeProperty('display');
			if (getTheStyle(_this,'display') == 'none') {
				_this.style.display = 'block';
			}
		}
		TweenLite.to(_this, time, {opacity: 1, onComplete:function () {
			if (getTheStyle(this.target, 'box-sizing') === 'content-box') {
				this.target.seniorAttrs.height = this.target.offsetHeight - paddingT - paddingB;
			}
			else {
				this.target.seniorAttrs.height = this.target.offsetHeight;
			}
			if (callback != null) {
				callback(this.target);
			}
		}, ease: Easing});
	}
	_this.setAttribute('data-ptr','visible');

	return this;
}
//	$('.el')[0].fadeOut(0.5,Power1.easeInOut);
Array.prototype.fadeOut = function(time, Easing, callback) {
	var _this = this,
		Easing = (Easing != null)? Easing : 'Linear.easeNone';
	if (_this.length <= 0)
		return _this;
	var fadeOutBool = false;
	for (var i=0; i<_this.length; i++) {
		var thisAttr = _this[i].getAttribute('data-ptr');
		if (_this[i].seniorAttrs == null) {
			fadeOutBool = false;
		}
		else {
			if (_this[i].seniorAttrs.animation == 'slideUp') {
				fadeOutBool = true;
			}
		}
		if ((thisAttr !== 'invisible') || fadeOutBool) {
			TweenLite.killTweensOf(_this[i], true);

			_this[i].style.removeProperty('height');
			_this[i].style.removeProperty('overflow');
			var paddingT = 0,
				paddingB = 0,
				marginTop = 0,
				marginBottom = 0,
				Height = 0,
				display = '';
			if (_this[i].seniorAttrs == null) {
				paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
				paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
				marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
				marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
				if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
					Height = _this[i].offsetHeight - paddingT - paddingB;
				}
				else {
					Height = _this[i].offsetHeight;
				}
				if (getTheStyle(_this[i], 'display') == 'none') {
					display = 'block';
				}
				else {
					display = getTheStyle(_this[i], 'display');
				}

				_this[i].seniorAttrs = {
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
					display: display,
					height: Height,
				}
			}
			else {
				var seniorAttrs = _this[i].seniorAttrs;
				paddingT = seniorAttrs.paddingTop;
				paddingB = seniorAttrs.paddingBottom;
				marginTop = seniorAttrs.marginTop;
				marginBottom = seniorAttrs.marginBottom;
				display = seniorAttrs.display;
				Height = seniorAttrs.height;
			}
			_this[i].seniorAttrs.animation = 'fadeOut';

			TweenLite.to(_this[i], time, {
				opacity: 0, onComplete: function () {
					this.target.style.display = 'none';
					if (callback != null)
						callback(this.target);
				}, ease: Easing
			});
		}
		_this[i].setAttribute('data-ptr', 'invisible');
	}
	return _this;
}
HTMLElement.prototype.fadeOut = function(time, Easing, callback) {
	var _this = this,
		Easing = (Easing != null)? Easing : 'Linear.easeNone';
	if (this == undefined)
		return this;
	var thisAttr = _this.getAttribute('data-ptr');
	var fadeOutBool = false;

	if (_this.seniorAttrs == null) {
		fadeOutBool = false;
	}
	else {
		if (_this.seniorAttrs.animation == 'slideUp') {
			fadeOutBool = true;
		}
	}
	if ((thisAttr !== 'invisible') || fadeOutBool) {
		TweenLite.killTweensOf(_this, true);

		_this.style.removeProperty('height');
		_this.style.removeProperty('overflow');
		var paddingT = 0,
			paddingB = 0,
			marginTop = 0,
			marginBottom = 0,
			Height = 0,
			display = '';
		if (_this.seniorAttrs == null) {
			paddingT = parseInt(getTheStyle(_this, 'padding-top'));
			paddingB = parseInt(getTheStyle(_this, 'padding-bottom'));
			marginTop = parseInt(getTheStyle(_this, 'margin-top'));
			marginBottom = parseInt(getTheStyle(_this, 'margin-bottom'));
			if (getTheStyle(_this, 'box-sizing') === 'content-box') {
				Height = _this.offsetHeight - paddingT - paddingB;
			}
			else {
				Height = _this.offsetHeight;
			}
			if (getTheStyle(_this, 'display') == 'none') {
				display = 'block';
			}
			else {
				display = getTheStyle(_this, 'display');
			}

			_this.seniorAttrs = {
				paddingTop: paddingT,
				paddingBottom: paddingB,
				marginTop: marginTop,
				marginBottom: marginBottom,
				display: display,
				height: Height
			}
		}
		else {
			var seniorAttrs = _this.seniorAttrs;
			paddingT = seniorAttrs.paddingTop;
			paddingB = seniorAttrs.paddingBottom;
			marginTop = seniorAttrs.marginTop;
			marginBottom = seniorAttrs.marginBottom;
			display = seniorAttrs.display;
			Height = seniorAttrs.height;
		}
		_this.seniorAttrs.animation = 'fadeOut';

		TweenLite.to(_this, time, {
			opacity: 0, onComplete: function () {
				this.target.style.display = 'none';
				if (callback != null)
					callback(this.target);
			}, ease: Easing
		});
	}
	_this.setAttribute('data-ptr', 'invisible');

	return _this;
}
//	$('.el')[0].fadeToggle(0.5,Power1.easeInOut);
Array.prototype.fadeToggle = function(time, Easing, callback) {
	var _this = this,
		Easing = (Easing != null)? Easing : 'Linear.easeNone';
	if (_this.length <= 0)
		return _this;

	for (var i=0; i<_this.length; i++) {
		var ifNullAttr = _this[i].getAttribute('data-ptr'),
			thisAttr = ptrVisibility(_this[i],ifNullAttr);

		_this[i].style.removeProperty('height');
		_this[i].style.removeProperty('overflow');
		var paddingT = 0,
			paddingB = 0,
			marginTop = 0,
			marginBottom = 0,
			Height = 0,
			display = '';
		if (_this[i].seniorAttrs == null) {
			paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
			paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
			marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
			marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
			if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
				Height = _this[i].offsetHeight - paddingT - paddingB;
			}
			else {
				Height = _this[i].offsetHeight;
			}
			if (getTheStyle(_this[i], 'display') == 'none') {
				display = 'block';
			}
			else {
				display = getTheStyle(_this[i], 'display');
			}

			_this[i].seniorAttrs = {
				paddingTop: paddingT,
				paddingBottom: paddingB,
				marginTop: marginTop,
				marginBottom: marginBottom,
				display: display,
				height: Height,
			}
		}
		else {
			var seniorAttrs = _this[i].seniorAttrs;
			paddingT = seniorAttrs.paddingTop;
			paddingB = seniorAttrs.paddingBottom;
			marginTop = seniorAttrs.marginTop;
			marginBottom = seniorAttrs.marginBottom;
			display = seniorAttrs.display;
			Height = seniorAttrs.height;
		}
		if (parseInt(getTheStyle(_this[i], 'height')) == 0) {
			_this[i].style.height = 'auto';
		}
		_this[i].style.paddingTop = paddingT + 'px';
		_this[i].style.paddingBottom = paddingB + 'px';
		_this[i].style.marginTop = marginTop + 'px';
		_this[i].style.marginBottom = marginBottom + 'px';

		if (ifNullAttr == null) {
			if (getTheStyle(_this[i], 'display') == 'none' || getTheStyle(_this[i], 'opacity') == 0 || getTheStyle(_this[i], 'height') == 0) {
				TweenLite.killTweensOf(_this[i], true);
				_this[i].seniorAttrs.animation = 'fadeIn';
				_this[i].setAttribute('data-ptr', 'visible');
				if (getTheStyle(_this[i],'display') == 'none') {
					_this[i].style.opacity = 0;
					_this[i].style.removeProperty('display');
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.display = 'block';
					}
				}
				if ( (parseInt(getTheStyle(_this[i], 'height')) - paddingT - paddingB - parseInt(getTheStyle(_this[i], 'border-top-width')) - parseInt(getTheStyle(_this[i], 'border-bottom-width'))) <= 0) {
					_this[i].style.height = 'auto';
				}
				TweenLite.to(_this[i], time, {
					opacity: 1, onComplete: function () {
						if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
							_this[i].seniorAttrs.height = _this[i].offsetHeight - paddingT - paddingB;
						}
						else {
							_this[i].seniorAttrs.height = _this[i].offsetHeight;
						}
						if (callback != null) callback(this.target);
					}, ease: Easing
				});
			}
			else {
				TweenLite.killTweensOf(_this[i], true);
				_this[i].seniorAttrs.animation = 'fadeOut';
				TweenLite.to(_this[i], time, {
					opacity: 0, onComplete: function () {
						this.target.style.display = 'none';
						if (callback != null) callback(this.target);
					}, ease: Easing
				});
				_this[i].setAttribute('data-ptr', 'invisible');
			}
		}
		else if (thisAttr === 'visible') {
			var firstDisplayNone = (getTheStyle(_this[i], 'display') == 'none')? true: false;
			if (_this[i].getAttribute('data-ptr') == null) {
				if (getTheStyle(_this[i], 'display') == 'none' || getTheStyle(_this[i], 'opacity') == 0 || getTheStyle(_this[i], 'height') == 0) {
					TweenLite.killTweensOf(_this[i], true);
					_this[i].seniorAttrs.animation = 'fadeIn';
					_this[i].setAttribute('data-ptr', 'visible');
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.opacity = 0;
						_this[i].style.removeProperty('display');
						if (getTheStyle(_this[i],'display') == 'none') {
							_this[i].style.display = 'block';
						}
					}
					if ( (parseInt(getTheStyle(_this[i], 'height')) - paddingT - paddingB - parseInt(getTheStyle(_this[i], 'border-top-width')) - parseInt(getTheStyle(_this[i], 'border-bottom-width'))) <= 0) {
						_this[i].style.height = 'auto';
					}
					TweenLite.to(_this[i], time, {
						opacity: 1, onComplete: function () {
							if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
								_this[i].seniorAttrs.height = _this[i].offsetHeight - paddingT - paddingB;
							}
							else {
								_this[i].seniorAttrs.height = _this[i].offsetHeight;
							}
							if (callback != null) callback(this.target);
						}, ease: Easing
					});
				}
				else {
					TweenLite.killTweensOf(_this[i], true);
					_this[i].seniorAttrs.animation = 'fadeOut';
					TweenLite.to(_this[i], time, {
						opacity: 0, onComplete: function () {
							this.target.style.display = 'none';
							if (callback != null) callback(this.target);
						}, ease: Easing
					});
					_this[i].setAttribute('data-ptr', 'invisible');
				}
			}
			else if ( (ifNullAttr === 'invisible') || (getTheStyle(_this[i], 'display') == 'none') ) {
				TweenLite.killTweensOf(_this[i], true);
				_this[i].seniorAttrs.animation = 'fadeIn';
				if (getTheStyle(_this[i],'display') == 'none') {
					_this[i].style.opacity = 0;
					_this[i].style.removeProperty('display');
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.display = 'block';
					}
				}
				if ( (parseInt(getTheStyle(_this[i], 'height')) - paddingT - paddingB - parseInt(getTheStyle(_this[i], 'border-top-width')) - parseInt(getTheStyle(_this[i], 'border-bottom-width'))) <= 0) {
					_this[i].style.height = 'auto';
				}
				TweenLite.to(_this[i], time, {
					opacity: 1, onComplete: function () {
						if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
							_this[i].seniorAttrs.height = _this[i].offsetHeight - paddingT - paddingB;
						}
						else {
							_this[i].seniorAttrs.height = _this[i].offsetHeight;
						}
						if (callback != null) callback(this.target);
					}, ease: Easing
				});
			}
		}
		else if (thisAttr === 'invisible') {
			TweenLite.killTweensOf(_this[i], true);
			_this[i].seniorAttrs.animation = 'fadeOut';
			TweenLite.to(_this[i], time, {
				opacity: 0, onComplete: function () {
					this.target.style.display = 'none';
					if (callback != null) callback(this.target);
				}, ease: Easing
			});
		}
	}
	return _this;
}
HTMLElement.prototype.fadeToggle = function(time, Easing, callback) {
	TweenLite.killTweensOf(this,true);
	var _this = this,
		Easing = (Easing != null)? Easing : 'Linear.easeNone';
	if (this == undefined)
		return this;

	var ifNullAttr = _this.getAttribute('data-ptr'),
		thisAttr = ptrVisibility(_this,ifNullAttr);

	_this.style.removeProperty('height');
	_this.style.removeProperty('overflow');
	var paddingT = 0,
		paddingB = 0,
		marginTop = 0,
		marginBottom = 0,
		Height = 0,
		display = '';
	if (_this.seniorAttrs == null) {
		paddingT = parseInt(getTheStyle(_this, 'padding-top'));
		paddingB = parseInt(getTheStyle(_this, 'padding-bottom'));
		marginTop = parseInt(getTheStyle(_this, 'margin-top'));
		marginBottom = parseInt(getTheStyle(_this, 'margin-bottom'));
		if (getTheStyle(_this, 'box-sizing') === 'content-box') {
			Height = _this.offsetHeight - paddingT - paddingB;
		}
		else {
			Height = _this.offsetHeight;
		}
		if (getTheStyle(_this, 'display') == 'none') {
			display = 'block';
		}
		else {
			display = getTheStyle(_this, 'display');
		}

		_this.seniorAttrs = {
			paddingTop: paddingT,
			paddingBottom: paddingB,
			marginTop: marginTop,
			marginBottom: marginBottom,
			display: display,
			height: Height,
		}
	}
	else {
		var seniorAttrs = _this.seniorAttrs;
		paddingT = seniorAttrs.paddingTop;
		paddingB = seniorAttrs.paddingBottom;
		marginTop = seniorAttrs.marginTop;
		marginBottom = seniorAttrs.marginBottom;
		display = seniorAttrs.display;
		Height = seniorAttrs.height;
	}
	if (parseInt(getTheStyle(_this, 'height')) == 0) {
		_this.style.height = 'auto';
	}
	_this.style.paddingTop = paddingT + 'px';
	_this.style.paddingBottom = paddingB + 'px';
	_this.style.marginTop = marginTop + 'px';
	_this.style.marginBottom = marginBottom + 'px';

	if (ifNullAttr == null) {
		if (getTheStyle(_this, 'display') == 'none' || getTheStyle(_this, 'opacity') == 0 || getTheStyle(_this, 'height') == 0) {
			TweenLite.killTweensOf(_this, true);
			_this.seniorAttrs.animation = 'fadeIn';
			_this.setAttribute('data-ptr', 'visible');
			if (getTheStyle(_this,'display') == 'none') {
				_this.style.opacity = 0;
				_this.style.removeProperty('display');
				if (getTheStyle(_this,'display') == 'none') {
					_this.style.display = 'block';
				}
			}
			if ( (parseInt(getTheStyle(_this, 'height')) - paddingT - paddingB - parseInt(getTheStyle(_this, 'border-top-width')) - parseInt(getTheStyle(_this, 'border-bottom-width'))) <= 0) {
				_this.style.height = 'auto';
			}
			TweenLite.to(_this, time, {
				opacity: 1, onComplete: function () {
					if (getTheStyle(_this, 'box-sizing') === 'content-box') {
						_this.seniorAttrs.height = _this.offsetHeight - paddingT - paddingB;
					}
					else {
						_this.seniorAttrs.height = _this.offsetHeight;
					}
					if (callback != null) callback(this.target);
				}, ease: Easing
			});
		}
		else {
			TweenLite.killTweensOf(_this, true);
			_this.seniorAttrs.animation = 'fadeOut';
			TweenLite.to(_this, time, {
				opacity: 0, onComplete: function () {
					this.target.style.display = 'none';
					if (callback != null) callback(this.target);
				}, ease: Easing
			});
			_this.setAttribute('data-ptr', 'invisible');
		}
	}
	else if (thisAttr === 'visible') {
		var firstDisplayNone = (getTheStyle(_this, 'display') == 'none')? true: false;
		if (_this.getAttribute('data-ptr') == null) {
			if (getTheStyle(_this, 'display') == 'none' || getTheStyle(_this, 'opacity') == 0 || getTheStyle(_this, 'height') == 0) {
				TweenLite.killTweensOf(_this, true);
				_this.seniorAttrs.animation = 'fadeIn';
				_this.setAttribute('data-ptr', 'visible');
				if (getTheStyle(_this,'display') == 'none') {
					_this.style.opacity = 0;
					_this.style.removeProperty('display');
					if (getTheStyle(_this,'display') == 'none') {
						_this.style.display = 'block';
					}
				}
				if ( (parseInt(getTheStyle(_this, 'height')) - paddingT - paddingB - parseInt(getTheStyle(_this, 'border-top-width')) - parseInt(getTheStyle(_this, 'border-bottom-width'))) <= 0) {
					_this.style.height = 'auto';
				}
				TweenLite.to(_this, time, {
					opacity: 1, onComplete: function () {
						if (getTheStyle(_this, 'box-sizing') === 'content-box') {
							_this.seniorAttrs.height = _this.offsetHeight - paddingT - paddingB;
						}
						else {
							_this.seniorAttrs.height = _this.offsetHeight;
						}
						if (callback != null) callback(this.target);
					}, ease: Easing
				});
			}
			else {
				TweenLite.killTweensOf(_this, true);
				_this.seniorAttrs.animation = 'fadeOut';
				TweenLite.to(_this, time, {
					opacity: 0, onComplete: function () {
						this.target.style.display = 'none';
						if (callback != null) callback(this.target);
					}, ease: Easing
				});
				_this.setAttribute('data-ptr', 'invisible');
			}
		}
		else if ( (ifNullAttr === 'invisible') || (getTheStyle(_this, 'display') == 'none') ) {
			TweenLite.killTweensOf(_this, true);
			_this.seniorAttrs.animation = 'fadeIn';
			if (getTheStyle(_this,'display') == 'none') {
				_this.style.opacity = 0;
				_this.style.removeProperty('display');
				if (getTheStyle(_this,'display') == 'none') {
					_this.style.display = 'block';
				}
			}
			if ( (parseInt(getTheStyle(_this, 'height')) - paddingT - paddingB - parseInt(getTheStyle(_this, 'border-top-width')) - parseInt(getTheStyle(_this, 'border-bottom-width'))) <= 0) {
				_this.style.height = 'auto';
			}
			TweenLite.to(_this, time, {
				opacity: 1, onComplete: function () {
					if (getTheStyle(_this, 'box-sizing') === 'content-box') {
						_this.seniorAttrs.height = _this.offsetHeight - paddingT - paddingB;
					}
					else {
						_this.seniorAttrs.height = _this.offsetHeight;
					}
					if (callback != null) callback(this.target);
				}, ease: Easing
			});
		}
	}
	else if (thisAttr === 'invisible') {
		TweenLite.killTweensOf(_this, true);
		_this.seniorAttrs.animation = 'fadeOut';
		TweenLite.to(_this, time, {
			opacity: 0, onComplete: function () {
				this.target.style.display = 'none';
				if (callback != null) callback(this.target);
			}, ease: Easing
		});
	}

	return _this;
}
//	$('.el')[0].animate({opacity: 0.2, width: '10px'},2,'Power1.easeInOut', function(){
//		console.log('ok');
//	});
Array.prototype.animate = function(animationObj, time, Easing, callback) {
	var _this = this,
		Easing = (Easing != null)? Easing : 'Linear.easeNone';
	if (_this.length <= 0)
		return _this;

	for (var i=0; i<_this.length; i++) {
		TweenLite.killTweensOf(_this[i],true);
		TweenLite.to(_this[i], time, {css: animationObj, ease: Easing, onComplete: function () {
			if (callback != null) callback(this.target);
		}});
	}

	return _this;
}
HTMLElement.prototype.animate = function(animationObj, time, Easing, callback) {
	TweenLite.killTweensOf(this,true);
	var _this = this,
		Easing = (Easing != null)? Easing : 'Linear.easeNone';
	if (this == undefined)
		return this;

	TweenLite.to(_this, time, {css: animationObj, ease: Easing, onComplete: function () {
		if (callback != null) callback(this.target);
	}});

	return _this;
}

//	-------------------- SLIDE animate --------------------------------
//	$('.el')[0].slideDown(0.3,Power1.easeInOut);
Array.prototype.slideDown = function(time, Easing, callback) {
	var _this = this;
	time = (time != null)? time : 0;
	Easing = (Easing != null)? Easing : 'Linear.easeNone';

	for (var i=0; i<_this.length; i++) {
		var thisAttr = _this[i].getAttribute('data-ptr');
		var firstDisplayNone = (getTheStyle(_this[i], 'display') == 'none')? true: false;
		if (_this[i].getAttribute('data-ptr') == null) {
			if (getTheStyle(_this[i], 'display') == 'none' || getTheStyle(_this[i], 'opacity') == 0 || getTheStyle(_this[i], 'height') == 0) {
				TweenLite.killTweensOf(_this[i], true);
				if (parseInt(getTheStyle(_this[i], 'height')) == 0) {
					_this[i].style.height = 'auto';
				}
				if (_this[i].seniorAttrs != null) {
					if ( (_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut') ) {
						_this[i].style.removeProperty('opacity');
					}
				}
				if (getTheStyle(_this[i], 'opacity') == 0) {
					_this[i].style.opacity = 1;
				}

				var paddingT = 0,
					paddingB = 0,
					marginTop = 0,
					marginBottom = 0,
					Height = 0,
					display = '';
				if (_this[i].seniorAttrs == null) {
					display = (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display');
					_this[i].style.display = display;
					paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
					paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
					marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
					marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
					borderTop = parseInt(getTheStyle(_this[i], 'border-top'));
					borderBottom = parseInt(getTheStyle(_this[i], 'border-bottom'));
					if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
						Height = _this[i].offsetHeight - paddingT - paddingB;
					}
					else {
						Height = _this[i].offsetHeight;
					}

					_this[i].seniorAttrs = {
						paddingTop: paddingT,
						paddingBottom: paddingB,
						marginTop: marginTop,
						marginBottom: marginBottom,
						display: display,
						height: Height,
					}
				}
				else {
					var seniorAttrs = _this[i].seniorAttrs;
					display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display') ): seniorAttrs.display;
					_this[i].style.display = display;
					paddingT = seniorAttrs.paddingTop;
					paddingB = seniorAttrs.paddingBottom;
					marginTop = seniorAttrs.marginTop;
					marginBottom = seniorAttrs.marginBottom;
					Height = seniorAttrs.height;
				}
				if (_this[i].seniorAttrs.animation == 'fadeOut') {
					_this[i].style.removeProperty('opacity');
					if (getTheStyle(_this[i], 'opacity') == 0) {
						_this[i].style.opacity = 1;
					}
					_this[i].style.height = 0;
					_this[i].style.paddingTop = 0;
					_this[i].style.paddingBottom = 0;
					_this[i].style.marginTop = 0;
					_this[i].style.marginBottom = 0;
				}
				_this[i].seniorAttrs.animation = 'slideDown';

				var thisHeight = 0,
					thisPaddingT = 0,
					thisPaddingB = 0,
					thisMarginB = 0,
					thisMarginT = 0;
				if (!firstDisplayNone) {
					thisHeight = getTheStyle(_this[i], 'height');
					thisPaddingT = getTheStyle(_this[i], 'padding-top');
					thisPaddingB = getTheStyle(_this[i], 'padding-bottom');
					thisMarginT = getTheStyle(_this[i], 'margin-top');
					thisMarginB = getTheStyle(_this[i], 'margin-bottom');
				}
				_this[i].style.overflow = 'hidden';
				if (getTheStyle(_this[i],'display') == 'none') {
					_this[i].style.removeProperty('display');
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.display = 'block';
					}
				}
				Height = (Height == 0)? 'auto': Height;

				TweenLite.set(_this[i], {
					height: Height,
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
				});
				TweenLite.from(_this[i], time, {
					height: thisHeight,
					paddingTop: thisPaddingT,
					paddingBottom: thisPaddingB,
					marginTop: thisMarginT,
					marginBottom: thisMarginB,
					onComplete: function () {
						this.target.style.removeProperty('overflow');
						this.target.style.height = 'auto';
						if (callback != null) callback(this.target);
					}, ease: Easing
				});
			}
			else {
				_this[i].setAttribute('data-ptr', 'visible');
				continue;
			}
		}
		else if ( (thisAttr === 'invisible') || (getTheStyle(_this[i], 'display') == 'none') ) {
			TweenLite.killTweensOf(_this[i], true);
			if (parseInt(getTheStyle(_this[i], 'height')) == 0) {
				_this[i].style.height = 'auto';
			}
			if (_this[i].seniorAttrs != null) {
				if ( (_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut') ) {
					_this[i].style.removeProperty('opacity');
				}
			}
			if (getTheStyle(_this[i], 'opacity') == 0) {
				_this[i].style.opacity = 1;
			}

			var paddingT = 0,
				paddingB = 0,
				marginTop = 0,
				marginBottom = 0,
				Height = 0,
				display = '';
			if (_this[i].seniorAttrs == null) {
				display = (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display');
				_this[i].style.display = display;
				paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
				paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
				marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
				marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
				if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
					Height = _this[i].offsetHeight - paddingT - paddingB;
				}
				else {
					Height = _this[i].offsetHeight;
				}

				_this[i].seniorAttrs = {
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
					display: display,
					height: Height,
				}
			}
			else {
				var seniorAttrs = _this[i].seniorAttrs;
				display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display') ): seniorAttrs.display;
				_this[i].style.display = display;
				paddingT = seniorAttrs.paddingTop;
				paddingB = seniorAttrs.paddingBottom;
				marginTop = seniorAttrs.marginTop;
				marginBottom = seniorAttrs.marginBottom;
				Height = seniorAttrs.height;
			}
			if (_this[i].seniorAttrs.animation == 'fadeOut') {
				_this[i].style.removeProperty('opacity');
				if (getTheStyle(_this[i], 'opacity') == 0) {
					_this[i].style.opacity = 1;
				}
				_this[i].style.height = 0;
				_this[i].style.paddingTop = 0;
				_this[i].style.paddingBottom = 0;
				_this[i].style.marginTop = 0;
				_this[i].style.marginBottom = 0;
			}
			_this[i].seniorAttrs.animation = 'slideDown';

			var thisHeight = 0,
				thisPaddingT = 0,
				thisPaddingB = 0,
				thisMarginB = 0,
				thisMarginT = 0;
			if (!firstDisplayNone) {
				thisHeight = getTheStyle(_this[i], 'height');
				thisPaddingT = getTheStyle(_this[i], 'padding-top');
				thisPaddingB = getTheStyle(_this[i], 'padding-bottom');
				thisMarginT = getTheStyle(_this[i], 'margin-top');
				thisMarginB = getTheStyle(_this[i], 'margin-bottom');
			}
			_this[i].style.overflow = 'hidden';
			if (getTheStyle(_this[i],'display') == 'none') {
				_this[i].style.removeProperty('display');
				if (getTheStyle(_this[i],'display') == 'none') {
					_this[i].style.display = 'block';
				}
			}
			Height = (Height == 0)? 'auto': Height;

			TweenLite.set(_this[i], {
				height: Height,
				paddingTop: paddingT,
				paddingBottom: paddingB,
				marginTop: marginTop,
				marginBottom: marginBottom,
			});
			TweenLite.from(_this[i], time, {
				height: thisHeight,
				paddingTop: thisPaddingT,
				paddingBottom: thisPaddingB,
				marginTop: thisMarginT,
				marginBottom: thisMarginB,
				onComplete: function () {
					this.target.style.removeProperty('overflow');
					this.target.style.height = 'auto';
					if (callback != null) callback(this.target);
				}, ease: Easing
			});
		}
		_this[i].setAttribute('data-ptr', 'visible');
	}
	return _this;
}
HTMLElement.prototype.slideDown = function(time, Easing, callback) {
	var _this = this;
	time = (time != null)? time : 0;
	Easing = (Easing != null)? Easing : 'Linear.easeNone';
	var thisAttr = _this.getAttribute('data-ptr');
	var firstDisplayNone = (getTheStyle(_this, 'display') == 'none')? true: false;

	if (_this.getAttribute('data-ptr') == null) {
		if (getTheStyle(_this, 'display') == 'none' || getTheStyle(_this, 'opacity') == 0 || getTheStyle(_this, 'height') == 0) {
			TweenLite.killTweensOf(_this, true);
			if (parseInt(getTheStyle(_this, 'height')) == 0) {
				_this.style.height = 'auto';
			}
			if (_this.seniorAttrs != null) {
				if ( (_this.seniorAttrs.animation == 'fadeIn') || (_this.seniorAttrs.animation == 'fadeOut') ) {
					_this.style.removeProperty('opacity');
				}
			}
			if (getTheStyle(_this, 'opacity') == 0) {
				_this.style.opacity = 1;
			}

			var paddingT = 0,
				paddingB = 0,
				marginTop = 0,
				marginBottom = 0,
				Height = 0,
				display = '';
			if (_this.seniorAttrs == null) {
				display = (getTheStyle(_this, 'display') == 'none')? 'block': getTheStyle(_this, 'display');
				_this.style.display = display;
				paddingT = parseInt(getTheStyle(_this, 'padding-top'));
				paddingB = parseInt(getTheStyle(_this, 'padding-bottom'));
				marginTop = parseInt(getTheStyle(_this, 'margin-top'));
				marginBottom = parseInt(getTheStyle(_this, 'margin-bottom'));
				if (getTheStyle(_this, 'box-sizing') === 'content-box') {
					Height = _this.offsetHeight - paddingT - paddingB;
				}
				else {
					Height = _this.offsetHeight;
				}

				_this.seniorAttrs = {
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
					display: display,
					height: Height,
				}
			}
			else {
				var seniorAttrs = _this.seniorAttrs;
				display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this, 'display') == 'none')? 'block': getTheStyle(_this, 'display') ): seniorAttrs.display;
				_this.style.display = display;
				paddingT = seniorAttrs.paddingTop;
				paddingB = seniorAttrs.paddingBottom;
				marginTop = seniorAttrs.marginTop;
				marginBottom = seniorAttrs.marginBottom;
				Height = seniorAttrs.height;
			}
			if (_this.seniorAttrs.animation == 'fadeOut') {
				_this.style.removeProperty('opacity');
				if (getTheStyle(_this, 'opacity') == 0) {
					_this.style.opacity = 1;
				}
				_this.style.height = 0;
				_this.style.paddingTop = 0;
				_this.style.paddingBottom = 0;
				_this.style.marginTop = 0;
				_this.style.marginBottom = 0;
			}
			_this.seniorAttrs.animation = 'slideDown';

			var thisHeight = 0,
				thisPaddingT = 0,
				thisPaddingB = 0,
				thisMarginB = 0,
				thisMarginT = 0;
			if (!firstDisplayNone) {
				thisHeight = getTheStyle(_this, 'height');
				thisPaddingT = getTheStyle(_this, 'padding-top');
				thisPaddingB = getTheStyle(_this, 'padding-bottom');
				thisMarginT = getTheStyle(_this, 'margin-top');
				thisMarginB = getTheStyle(_this, 'margin-bottom');
			}
			_this.style.overflow = 'hidden';
			if (getTheStyle(_this,'display') == 'none') {
				_this.style.removeProperty('display');
				if (getTheStyle(_this,'display') == 'none') {
					_this.style.display = 'block';
				}
			}
			Height = (Height == 0)? 'auto': Height;

			TweenLite.set(_this, {
				height: Height,
				paddingTop: paddingT,
				paddingBottom: paddingB,
				marginTop: marginTop,
				marginBottom: marginBottom,
			});
			TweenLite.from(_this, time, {
				height: thisHeight,
				paddingTop: thisPaddingT,
				paddingBottom: thisPaddingB,
				marginTop: thisMarginT,
				marginBottom: thisMarginB,
				onComplete: function () {
					this.target.style.removeProperty('overflow');
					this.target.style.height = 'auto';
					if (callback != null) callback(this.target);
				}, ease: Easing
			});
		}
		else {
			_this.setAttribute('data-ptr', 'visible');
			return _this;
		}
	}
	else if ( (thisAttr === 'invisible') || (getTheStyle(_this, 'display') == 'none') ) {
		TweenLite.killTweensOf(_this, true);
		if (parseInt(getTheStyle(_this, 'height')) == 0) {
			_this.style.height = 'auto';
		}
		if (_this.seniorAttrs != null) {
			if ( (_this.seniorAttrs.animation == 'fadeIn') || (_this.seniorAttrs.animation == 'fadeOut') ) {
				_this.style.removeProperty('opacity');
			}
		}
		if (getTheStyle(_this, 'opacity') == 0) {
			_this.style.opacity = 1;
		}

		var paddingT = 0,
			paddingB = 0,
			marginTop = 0,
			marginBottom = 0,
			Height = 0,
			display = '';
		if (_this.seniorAttrs == null) {
			display = (getTheStyle(_this, 'display') == 'none')? 'block': getTheStyle(_this, 'display');
			_this.style.display = display;
			paddingT = parseInt(getTheStyle(_this, 'padding-top'));
			paddingB = parseInt(getTheStyle(_this, 'padding-bottom'));
			marginTop = parseInt(getTheStyle(_this, 'margin-top'));
			marginBottom = parseInt(getTheStyle(_this, 'margin-bottom'));
			if (getTheStyle(_this, 'box-sizing') === 'content-box') {
				Height = _this.offsetHeight - paddingT - paddingB;
			}
			else {
				Height = _this.offsetHeight;
			}

			_this.seniorAttrs = {
				paddingTop: paddingT,
				paddingBottom: paddingB,
				marginTop: marginTop,
				marginBottom: marginBottom,
				display: display,
				height: Height,
			}
		}
		else {
			var seniorAttrs = _this.seniorAttrs;
			display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this, 'display') == 'none')? 'block': getTheStyle(_this, 'display') ): seniorAttrs.display;
			_this.style.display = display;
			paddingT = seniorAttrs.paddingTop;
			paddingB = seniorAttrs.paddingBottom;
			marginTop = seniorAttrs.marginTop;
			marginBottom = seniorAttrs.marginBottom;
			Height = seniorAttrs.height;
		}
		if (_this.seniorAttrs.animation == 'fadeOut') {
			_this.style.removeProperty('opacity');
			if (getTheStyle(_this, 'opacity') == 0) {
				_this.style.opacity = 1;
			}
			_this.style.height = 0;
			_this.style.paddingTop = 0;
			_this.style.paddingBottom = 0;
			_this.style.marginTop = 0;
			_this.style.marginBottom = 0;
		}
		_this.seniorAttrs.animation = 'slideDown';

		var thisHeight = 0,
			thisPaddingT = 0,
			thisPaddingB = 0,
			thisMarginB = 0,
			thisMarginT = 0;
		if (!firstDisplayNone) {
			thisHeight = getTheStyle(_this, 'height');
			thisPaddingT = getTheStyle(_this, 'padding-top');
			thisPaddingB = getTheStyle(_this, 'padding-bottom');
			thisMarginT = getTheStyle(_this, 'margin-top');
			thisMarginB = getTheStyle(_this, 'margin-bottom');
		}
		_this.style.overflow = 'hidden';
		if (getTheStyle(_this,'display') == 'none') {
			_this.style.removeProperty('display');
			if (getTheStyle(_this,'display') == 'none') {
				_this.style.display = 'block';
			}
		}
		Height = (Height == 0)? 'auto': Height;

		TweenLite.set(_this, {
			height: Height,
			paddingTop: paddingT,
			paddingBottom: paddingB,
			marginTop: marginTop,
			marginBottom: marginBottom,
		});
		TweenLite.from(_this, time, {
			height: thisHeight,
			paddingTop: thisPaddingT,
			paddingBottom: thisPaddingB,
			marginTop: thisMarginT,
			marginBottom: thisMarginB,
			onComplete: function () {
				this.target.style.removeProperty('overflow');
				this.target.style.height = 'auto';
				if (callback != null) callback(this.target);
			}, ease: Easing
		});
	}
	_this.setAttribute('data-ptr', 'visible');

	return _this;
}
//	$('.el')[0].slideUp(0.3,Power1.easeInOut);
Array.prototype.slideUp = function(time, Easing, callback) {
	var _this = this;
	time = (time != null)? time : 0;
	Easing = (Easing != null)? Easing : 'Linear.easeNone';

	for (var i=0; i<_this.length; i++) {
		if (_this[i].seniorAttrs != null) {
			if ((_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut')) {
				_this[i].style.removeProperty('opacity');
			}
		}
		if (getTheStyle(_this[i], 'opacity') == 0) {
			_this[i].style.opacity = 1;
		}
		var thisAttr = _this[i].getAttribute('data-ptr');
		if ( (thisAttr !== 'invisible') && (getTheStyle(_this[i], 'display') != 'none') ) {
			TweenLite.killTweensOf(_this[i], true);
			_this[i].style.overflow = 'hidden';
			var paddingT = 0,
				paddingB = 0,
				marginTop = 0,
				marginBottom = 0,
				Height = 0,
				display = '';
			if (_this[i].seniorAttrs == null) {
				paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
				paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
				marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
				marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
				if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
					Height = _this[i].offsetHeight - paddingT - paddingB;
				}
				else {
					Height = _this[i].offsetHeight;
				}
				if (getTheStyle(_this[i], 'display') == 'none') {
					display = 'block';
				}
				else {
					display = getTheStyle(_this[i], 'display');
				}

				_this[i].seniorAttrs = {
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
					display: display,
					height: Height
				}
			}
			else {
				var seniorAttrs = _this[i].seniorAttrs;
				paddingT = seniorAttrs.paddingTop;
				paddingB = seniorAttrs.paddingBottom;
				marginTop = seniorAttrs.marginTop;
				marginBottom = seniorAttrs.marginBottom;
				display = seniorAttrs.display;
				Height = seniorAttrs.height;
			}
			_this[i].seniorAttrs.animation = 'slideUp';
			_this[i].style.removeProperty('height');

			TweenLite.to(_this[i], time, {
				height: 0,
				paddingTop: 0,
				paddingBottom: 0,
				marginTop: 0,
				marginBottom: 0,
				onComplete: function () {
					this.target.style.display = 'none';
					this.target.style.removeProperty('overflow');
					if (callback != null) callback(this.target);
				}, ease: Easing
			});
		}
		else {
			if (callback != null) callback(_this[i]);
		}
		_this[i].setAttribute('data-ptr', 'invisible');
	}
	return _this;
}
HTMLElement.prototype.slideUp = function(time, Easing, callback) {
	var _this = this;
	time = (time != null)? time : 0;
	Easing = (Easing != null)? Easing : 'Linear.easeNone';
	var thisAttr = _this.getAttribute('data-ptr');

	if (_this.seniorAttrs != null) {
		if ((_this.seniorAttrs.animation == 'fadeIn') || (_this.seniorAttrs.animation == 'fadeOut')) {
			_this.style.removeProperty('opacity');
		}
	}
	if (getTheStyle(_this, 'opacity') == 0) {
		_this.style.opacity = 1;
	}
	if ( (thisAttr !== 'invisible') && (getTheStyle(_this, 'display') != 'none') ) {
		TweenLite.killTweensOf(_this, true);
		_this.style.overflow = 'hidden';
		var paddingT = 0,
			paddingB = 0,
			marginTop = 0,
			marginBottom = 0,
			Height = 0,
			display = '';
		if (_this.seniorAttrs == null) {
			paddingT = parseInt(getTheStyle(_this, 'padding-top'));
			paddingB = parseInt(getTheStyle(_this, 'padding-bottom'));
			marginTop = parseInt(getTheStyle(_this, 'margin-top'));
			marginBottom = parseInt(getTheStyle(_this, 'margin-bottom'));
			if (getTheStyle(_this, 'box-sizing') === 'content-box') {
				Height = _this.offsetHeight - paddingT - paddingB;
			}
			else {
				Height = _this.offsetHeight;
			}
			if (getTheStyle(_this, 'display') == 'none') {
				display = 'block';
			}
			else {
				display = getTheStyle(_this, 'display');
			}

			_this.seniorAttrs = {
				paddingTop: paddingT,
				paddingBottom: paddingB,
				marginTop: marginTop,
				marginBottom: marginBottom,
				display: display,
				height: Height,
			}
		}
		else {
			var seniorAttrs = _this.seniorAttrs;
			paddingT = seniorAttrs.paddingTop;
			paddingB = seniorAttrs.paddingBottom;
			marginTop = seniorAttrs.marginTop;
			marginBottom = seniorAttrs.marginBottom;
			display = seniorAttrs.display;
			Height = seniorAttrs.height;
		}
		_this.seniorAttrs.animation = 'slideUp';
		_this.style.removeProperty('height');

		TweenLite.to(_this, time, {
			height: 0,
			paddingTop: 0,
			paddingBottom: 0,
			marginTop: 0,
			marginBottom: 0,
			onComplete: function () {
				this.target.style.display = 'none';
				this.target.style.removeProperty('overflow');
				if (callback != null) callback(this.target);
			}, ease: Easing
		});
	}
	else {
		if (callback != null) callback(_this[i]);
	}
	_this.setAttribute('data-ptr', 'invisible');

	return _this;
}
//	$('.el')[0].slideToggle(0.3,Power1.easeInOut);
Array.prototype.slideToggle = function(time, Easing, callback ) {
	var _this = this,
		Easing = (Easing != null)? Easing : 'Linear.easeNone';

	for (var i=0; i<_this.length; i++) {
		var ifNullAttr = _this[i].getAttribute('data-ptr'),
			thisAttr = ptrVisibility(_this[i],ifNullAttr);
		if (ifNullAttr == null) {
			if (getTheStyle(_this[i], 'display') == 'none' || getTheStyle(_this[i], 'opacity') == 0 || getTheStyle(_this[i], 'height') == 0) {
				var firstDisplayNone = (getTheStyle(_this[i], 'display') == 'none')? true: false;

				TweenLite.killTweensOf(_this[i],true);
				if (parseInt(getTheStyle(_this[i], 'height')) == 0) {
					_this[i].style.height = 'auto';
				}
				if (_this[i].seniorAttrs != null) {
					if ((_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut')) {
						_this[i].style.removeProperty('opacity');
					}
				}
				if (getTheStyle(_this[i], 'opacity') == 0) {
					_this[i].style.opacity = 1;
				}

				var paddingT = 0,
					paddingB = 0,
					marginTop = 0,
					marginBottom = 0,
					Height = 0,
					display = '';
				if (_this[i].seniorAttrs == null) {
					display = (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display');
					_this[i].style.display = display;
					paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
					paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
					marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
					marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
					if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
						Height = _this[i].offsetHeight - paddingT - paddingB;
					}
					else {
						Height = _this[i].offsetHeight;
					}

					_this[i].seniorAttrs = {
						paddingTop: paddingT,
						paddingBottom: paddingB,
						marginTop: marginTop,
						marginBottom: marginBottom,
						display: display,
						height: Height,
					}
				}
				else {
					var seniorAttrs = _this[i].seniorAttrs;
					display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display') ): seniorAttrs.display;
					_this[i].style.display = display;
					paddingT = seniorAttrs.paddingTop;
					paddingB = seniorAttrs.paddingBottom;
					marginTop = seniorAttrs.marginTop;
					marginBottom = seniorAttrs.marginBottom;
					Height = seniorAttrs.height;
				}
				if (_this[i].seniorAttrs.animation == 'fadeOut') {
					_this[i].style.removeProperty('opacity');
					if (getTheStyle(_this[i], 'opacity') == 0) {
						_this[i].style.opacity = 1;
					}
					_this[i].style.height = 0;
					_this[i].style.paddingTop = 0;
					_this[i].style.paddingBottom = 0;
					_this[i].style.marginTop = 0;
					_this[i].style.marginBottom = 0;
				}
				_this[i].seniorAttrs.animation = 'slideDown';

				var thisHeight = 0,
					thisPaddingT = 0,
					thisPaddingB = 0,
					thisMarginB = 0,
					thisMarginT = 0;
				if (!firstDisplayNone) {
					thisHeight = getTheStyle(_this[i], 'height');
					thisPaddingT = getTheStyle(_this[i], 'padding-top');
					thisPaddingB = getTheStyle(_this[i], 'padding-bottom');
					thisMarginT = getTheStyle(_this[i], 'margin-top');
					thisMarginB = getTheStyle(_this[i], 'margin-bottom');
				}
				_this[i].style.overflow = 'hidden';
				if (getTheStyle(_this[i],'display') == 'none') {
					_this[i].style.removeProperty('display');
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.display = 'block';
					}
				}
				Height = (Height == 0)? 'auto': Height;

				_this[i].setAttribute('data-ptr', 'visible');
				TweenLite.set(_this[i], {
					height: Height,
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
				});
				TweenLite.from(_this[i], time, {
					height: thisHeight,
					paddingTop: thisPaddingT,
					paddingBottom: thisPaddingB,
					marginTop: thisMarginT,
					marginBottom: thisMarginB,
					onComplete: function () {
						this.target.style.removeProperty('overflow');
						this.target.style.height = 'auto';
						if (callback != null) callback(this.target);
					}, ease: Easing
				});
			}
			else {
				TweenLite.killTweensOf(_this[i],true);
				if (_this[i].seniorAttrs != null) {
					if ((_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut')) {
						_this[i].style.removeProperty('opacity');
					}
				}
				if (getTheStyle(_this[i], 'opacity') == 0) {
					_this[i].style.opacity = 1;
				}
				_this[i].style.overflow = 'hidden';
				var paddingT = 0,
					paddingB = 0,
					marginTop = 0,
					marginBottom = 0,
					Height = 0,
					display = '';
				if (_this[i].seniorAttrs == null) {
					paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
					paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
					marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
					marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
					if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
						Height = _this[i].offsetHeight - paddingT - paddingB;
					}
					else {
						Height = _this[i].offsetHeight;
					}
					if (getTheStyle(_this[i], 'display') == 'none') {
						display = 'block';
					}
					else {
						display = getTheStyle(_this[i], 'display');
					}

					_this[i].seniorAttrs = {
						paddingTop: paddingT,
						paddingBottom: paddingB,
						marginTop: marginTop,
						marginBottom: marginBottom,
						display: display,
						height: Height,
					}
				}
				else {
					var seniorAttrs = _this[i].seniorAttrs;
					paddingT = seniorAttrs.paddingTop;
					paddingB = seniorAttrs.paddingBottom;
					marginTop = seniorAttrs.marginTop;
					marginBottom = seniorAttrs.marginBottom;
					display = seniorAttrs.display;
					Height = seniorAttrs.height;
				}
				_this[i].seniorAttrs.animation = 'slideUp';
				_this[i].style.removeProperty('height');

				TweenLite.to(_this[i], time, {
					height: 0,
					paddingTop: 0,
					paddingBottom: 0,
					marginTop: 0,
					marginBottom: 0,
					onComplete: function () {
						this.target.style.display = 'none';
						this.target.style.removeProperty('overflow');
						if (callback != null) callback(this.target);
					}, ease: Easing
				});
				_this[i].setAttribute('data-ptr', 'invisible');
			}
		}
		else if (thisAttr === 'visible') {
			var firstDisplayNone = (getTheStyle(_this[i], 'display') == 'none')? true: false;
			if (_this[i].getAttribute('data-ptr') == null) {
				if (getTheStyle(_this[i], 'display') == 'none' || getTheStyle(_this[i], 'opacity') == 0 || getTheStyle(_this[i], 'height') == 0) {
					TweenLite.killTweensOf(_this[i],true);
					if (parseInt(getTheStyle(_this[i], 'height')) == 0) {
						_this[i].style.height = 'auto';
					}
					if (_this[i].seniorAttrs != null) {
						if ((_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut')) {
							_this[i].style.removeProperty('opacity');
						}
					}
					if (getTheStyle(_this[i], 'opacity') == 0) {
						_this[i].style.opacity = 1;
					}

					var paddingT = 0,
						paddingB = 0,
						marginTop = 0,
						marginBottom = 0,
						Height = 0,
						display = '';
					if (_this[i].seniorAttrs == null) {
						display = (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display');
						_this[i].style.display = display;
						paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
						paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
						marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
						marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
						if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
							Height = _this[i].offsetHeight - paddingT - paddingB;
						}
						else {
							Height = _this[i].offsetHeight;
						}

						_this[i].seniorAttrs = {
							paddingTop: paddingT,
							paddingBottom: paddingB,
							marginTop: marginTop,
							marginBottom: marginBottom,
							display: display,
							height: Height,
						}
					}
					else {
						var seniorAttrs = _this[i].seniorAttrs;
						display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display') ): seniorAttrs.display;
						_this[i].style.display = display;
						paddingT = seniorAttrs.paddingTop;
						paddingB = seniorAttrs.paddingBottom;
						marginTop = seniorAttrs.marginTop;
						marginBottom = seniorAttrs.marginBottom;
						Height = seniorAttrs.height;
					}
					if (_this[i].seniorAttrs.animation == 'fadeOut') {
						_this[i].style.removeProperty('opacity');
						if (getTheStyle(_this[i], 'opacity') == 0) {
							_this[i].style.opacity = 1;
						}
						_this[i].style.height = 0;
						_this[i].style.paddingTop = 0;
						_this[i].style.paddingBottom = 0;
						_this[i].style.marginTop = 0;
						_this[i].style.marginBottom = 0;
					}
					_this[i].seniorAttrs.animation = 'slideDown';

					var thisHeight = 0,
						thisPaddingT = 0,
						thisPaddingB = 0,
						thisMarginB = 0,
						thisMarginT = 0;
					if (!firstDisplayNone) {
						thisHeight = getTheStyle(_this[i], 'height');
						thisPaddingT = getTheStyle(_this[i], 'padding-top');
						thisPaddingB = getTheStyle(_this[i], 'padding-bottom');
						thisMarginT = getTheStyle(_this[i], 'margin-top');
						thisMarginB = getTheStyle(_this[i], 'margin-bottom');
					}
					_this[i].style.overflow = 'hidden';
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.removeProperty('display');
						if (getTheStyle(_this[i],'display') == 'none') {
							_this[i].style.display = 'block';
						}
					}
					Height = (Height == 0)? 'auto': Height;

					TweenLite.set(_this[i], {
						height: Height,
						paddingTop: paddingT,
						paddingBottom: paddingB,
						marginTop: marginTop,
						marginBottom: marginBottom,
					});
					TweenLite.from(_this[i], time, {
						height: thisHeight,
						paddingTop: thisPaddingT,
						paddingBottom: thisPaddingB,
						marginTop: thisMarginT,
						marginBottom: thisMarginB,
						onComplete: function () {
							this.target.style.removeProperty('overflow');
							this.target.style.height = 'auto';
							if (callback != null) callback(this.target);
						}, ease: Easing
					});
				}
				else {
					_this[i].setAttribute('data-ptr', 'visible');
					continue;
				}
			}
			else if ( (ifNullAttr === 'invisible') || (getTheStyle(_this[i], 'display') == 'none') ) {
				TweenLite.killTweensOf(_this[i],true);
				if (parseInt(getTheStyle(_this[i], 'height')) == 0) {
					_this[i].style.height = 'auto';
				}
				if (_this[i].seniorAttrs != null) {
					if ((_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut')) {
						_this[i].style.removeProperty('opacity');
					}
				}
				if (getTheStyle(_this[i], 'opacity') == 0) {
					_this[i].style.opacity = 1;
				}

				var paddingT = 0,
					paddingB = 0,
					marginTop = 0,
					marginBottom = 0,
					Height = 0,
					display = '';
				if (_this[i].seniorAttrs == null) {
					display = (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display');
					_this[i].style.display = display;
					paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
					paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
					marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
					marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
					if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
						Height = _this[i].offsetHeight - paddingT - paddingB;
					}
					else {
						Height = _this[i].offsetHeight;
					}

					_this[i].seniorAttrs = {
						paddingTop: paddingT,
						paddingBottom: paddingB,
						marginTop: marginTop,
						marginBottom: marginBottom,
						display: display,
						height: Height,
					}
				}
				else {
					var seniorAttrs = _this[i].seniorAttrs;
					display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this[i], 'display') == 'none')? 'block': getTheStyle(_this[i], 'display') ): seniorAttrs.display;
					_this[i].style.display = display;
					paddingT = seniorAttrs.paddingTop;
					paddingB = seniorAttrs.paddingBottom;
					marginTop = seniorAttrs.marginTop;
					marginBottom = seniorAttrs.marginBottom;
					Height = seniorAttrs.height;
				}
				if (_this[i].seniorAttrs.animation == 'fadeOut') {
					_this[i].style.removeProperty('opacity');
					if (getTheStyle(_this[i], 'opacity') == 0) {
						_this[i].style.opacity = 1;
					}
					_this[i].style.height = 0;
					_this[i].style.paddingTop = 0;
					_this[i].style.paddingBottom = 0;
					_this[i].style.marginTop = 0;
					_this[i].style.marginBottom = 0;
				}
				_this[i].seniorAttrs.animation = 'slideDown';

				var thisHeight = 0,
					thisPaddingT = 0,
					thisPaddingB = 0,
					thisMarginB = 0,
					thisMarginT = 0;
				if (!firstDisplayNone) {
					thisHeight = getTheStyle(_this[i], 'height');
					thisPaddingT = getTheStyle(_this[i], 'padding-top');
					thisPaddingB = getTheStyle(_this[i], 'padding-bottom');
					thisMarginT = getTheStyle(_this[i], 'margin-top');
					thisMarginB = getTheStyle(_this[i], 'margin-bottom');
				}
				_this[i].style.overflow = 'hidden';
				if (getTheStyle(_this[i],'display') == 'none') {
					_this[i].style.removeProperty('display');
					if (getTheStyle(_this[i],'display') == 'none') {
						_this[i].style.display = 'block';
					}
				}
				Height = (Height == 0)? 'auto': Height;

				TweenLite.set(_this[i], {
					height: Height,
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
				});
				TweenLite.from(_this[i], time, {
					height: thisHeight,
					paddingTop: thisPaddingT,
					paddingBottom: thisPaddingB,
					marginTop: thisMarginT,
					marginBottom: thisMarginB,
					onComplete: function () {
						this.target.style.removeProperty('overflow');
						this.target.style.height = 'auto';
						if (callback != null) callback(this.target);
					}, ease: Easing
				});
			}
		}
		else if (thisAttr === 'invisible') {
			TweenLite.killTweensOf(_this[i],true);
			if (_this[i].seniorAttrs != null) {
				if ((_this[i].seniorAttrs.animation == 'fadeIn') || (_this[i].seniorAttrs.animation == 'fadeOut')) {
					_this[i].style.removeProperty('opacity');
				}
			}
			if (getTheStyle(_this[i], 'opacity') == 0) {
				_this[i].style.opacity = 1;
			}
			_this[i].style.overflow = 'hidden';
			var paddingT = 0,
				paddingB = 0,
				marginTop = 0,
				marginBottom = 0,
				Height = 0,
				display = '';
			if (_this[i].seniorAttrs == null) {
				paddingT = parseInt(getTheStyle(_this[i], 'padding-top'));
				paddingB = parseInt(getTheStyle(_this[i], 'padding-bottom'));
				marginTop = parseInt(getTheStyle(_this[i], 'margin-top'));
				marginBottom = parseInt(getTheStyle(_this[i], 'margin-bottom'));
				if (getTheStyle(_this[i], 'box-sizing') === 'content-box') {
					Height = _this[i].offsetHeight - paddingT - paddingB;
				}
				else {
					Height = _this[i].offsetHeight;
				}
				if (getTheStyle(_this[i], 'display') == 'none') {
					display = 'block';
				}
				else {
					display = getTheStyle(_this[i], 'display');
				}

				_this[i].seniorAttrs = {
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
					display: display,
					height: Height,
				}
			}
			else {
				var seniorAttrs = _this[i].seniorAttrs;
				paddingT = seniorAttrs.paddingTop;
				paddingB = seniorAttrs.paddingBottom;
				marginTop = seniorAttrs.marginTop;
				marginBottom = seniorAttrs.marginBottom;
				display = seniorAttrs.display;
				Height = seniorAttrs.height;
			}
			_this[i].seniorAttrs.animation = 'slideUp';
			_this[i].style.removeProperty('height');

			TweenLite.to(_this[i], time, {
				height: 0,
				paddingTop: 0,
				paddingBottom: 0,
				marginTop: 0,
				marginBottom: 0,
				onComplete: function () {
					this.target.style.display = 'none';
					this.target.style.removeProperty('overflow');
					if (callback != null) callback(this.target);
				}, ease: Easing
			});
		}
	}
	return _this;
}
HTMLElement.prototype.slideToggle = function(time, Easing, callback ) {
	var _this = this,
		ifNullAttr = _this.getAttribute('data-ptr'),
		thisAttr = ptrVisibility(_this,ifNullAttr);
	TweenLite.killTweensOf(_this,true);
	Easing = (Easing != null)? Easing : 'Linear.easeNone';

	if (ifNullAttr == null) {
		if (getTheStyle(_this, 'display') == 'none' || getTheStyle(_this, 'opacity') == 0 || getTheStyle(_this, 'height') == 0) {
			var firstDisplayNone = (getTheStyle(_this, 'display') == 'none')? true: false;

			TweenLite.killTweensOf(_this,true);
			if (parseInt(getTheStyle(_this, 'height')) == 0) {
				_this.style.height = 'auto';
			}
			if (_this.seniorAttrs != null) {
				if ((_this.seniorAttrs.animation == 'fadeIn') || (_this.seniorAttrs.animation == 'fadeOut')) {
					_this.style.removeProperty('opacity');
				}
			}
			if (getTheStyle(_this, 'opacity') == 0) {
				_this.style.opacity = 1;
			}

			var paddingT = 0,
				paddingB = 0,
				marginTop = 0,
				marginBottom = 0,
				Height = 0,
				display = '';
			if (_this.seniorAttrs == null) {
				display = (getTheStyle(_this, 'display') == 'none')? 'block': getTheStyle(_this, 'display');
				_this.style.display = display;
				paddingT = parseInt(getTheStyle(_this, 'padding-top'));
				paddingB = parseInt(getTheStyle(_this, 'padding-bottom'));
				marginTop = parseInt(getTheStyle(_this, 'margin-top'));
				marginBottom = parseInt(getTheStyle(_this, 'margin-bottom'));
				if (getTheStyle(_this, 'box-sizing') === 'content-box') {
					Height = _this.offsetHeight - paddingT - paddingB;
				}
				else {
					Height = _this.offsetHeight;
				}

				_this.seniorAttrs = {
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
					display: display,
					height: Height,
				}
			}
			else {
				var seniorAttrs = _this.seniorAttrs;
				display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this, 'display') == 'none')? 'block': getTheStyle(_this, 'display') ): seniorAttrs.display;
				_this.style.display = display;
				paddingT = seniorAttrs.paddingTop;
				paddingB = seniorAttrs.paddingBottom;
				marginTop = seniorAttrs.marginTop;
				marginBottom = seniorAttrs.marginBottom;
				Height = seniorAttrs.height;
			}
			if (_this.seniorAttrs.animation == 'fadeOut') {
				_this.style.removeProperty('opacity');
				if (getTheStyle(_this, 'opacity') == 0) {
					_this.style.opacity = 1;
				}
				_this.style.height = 0;
				_this.style.paddingTop = 0;
				_this.style.paddingBottom = 0;
				_this.style.marginTop = 0;
				_this.style.marginBottom = 0;
			}
			_this.seniorAttrs.animation = 'slideDown';

			var thisHeight = 0,
				thisPaddingT = 0,
				thisPaddingB = 0,
				thisMarginB = 0,
				thisMarginT = 0;
			if (!firstDisplayNone) {
				thisHeight = getTheStyle(_this, 'height');
				thisPaddingT = getTheStyle(_this, 'padding-top');
				thisPaddingB = getTheStyle(_this, 'padding-bottom');
				thisMarginT = getTheStyle(_this, 'margin-top');
				thisMarginB = getTheStyle(_this, 'margin-bottom');
			}
			_this.style.overflow = 'hidden';
			if (getTheStyle(_this,'display') == 'none') {
				_this.style.removeProperty('display');
				if (getTheStyle(_this,'display') == 'none') {
					_this.style.display = 'block';
				}
			}
			Height = (Height == 0)? 'auto': Height;

			_this.setAttribute('data-ptr', 'visible');
			TweenLite.set(_this, {
				height: Height,
				paddingTop: paddingT,
				paddingBottom: paddingB,
				marginTop: marginTop,
				marginBottom: marginBottom,
			});
			TweenLite.from(_this, time, {
				height: thisHeight,
				paddingTop: thisPaddingT,
				paddingBottom: thisPaddingB,
				marginTop: thisMarginT,
				marginBottom: thisMarginB,
				onComplete: function () {
					this.target.style.removeProperty('overflow');
					this.target.style.height = 'auto';
					if (callback != null) callback(this.target);
				}, ease: Easing
			});
		}
		else {
			TweenLite.killTweensOf(_this,true);
			if (_this.seniorAttrs != null) {
				if ((_this.seniorAttrs.animation == 'fadeIn') || (_this.seniorAttrs.animation == 'fadeOut')) {
					_this.style.removeProperty('opacity');
				}
			}
			if (getTheStyle(_this, 'opacity') == 0) {
				_this.style.opacity = 1;
			}
			_this.style.overflow = 'hidden';
			var paddingT = 0,
				paddingB = 0,
				marginTop = 0,
				marginBottom = 0,
				Height = 0,
				display = '';
			if (_this.seniorAttrs == null) {
				paddingT = parseInt(getTheStyle(_this, 'padding-top'));
				paddingB = parseInt(getTheStyle(_this, 'padding-bottom'));
				marginTop = parseInt(getTheStyle(_this, 'margin-top'));
				marginBottom = parseInt(getTheStyle(_this, 'margin-bottom'));
				if (getTheStyle(_this, 'box-sizing') === 'content-box') {
					Height = _this.offsetHeight - paddingT - paddingB;
				}
				else {
					Height = _this.offsetHeight;
				}
				if (getTheStyle(_this, 'display') == 'none') {
					display = 'block';
				}
				else {
					display = getTheStyle(_this, 'display');
				}

				_this.seniorAttrs = {
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
					display: display,
					height: Height,
				}
			}
			else {
				var seniorAttrs = _this.seniorAttrs;
				paddingT = seniorAttrs.paddingTop;
				paddingB = seniorAttrs.paddingBottom;
				marginTop = seniorAttrs.marginTop;
				marginBottom = seniorAttrs.marginBottom;
				display = seniorAttrs.display;
				Height = seniorAttrs.height;
			}
			_this.seniorAttrs.animation = 'slideUp';
			_this.style.removeProperty('height');

			TweenLite.to(_this, time, {
				height: 0,
				paddingTop: 0,
				paddingBottom: 0,
				marginTop: 0,
				marginBottom: 0,
				onComplete: function () {
					this.target.style.display = 'none';
					this.target.style.removeProperty('overflow');
					if (callback != null) callback(this.target);
				}, ease: Easing
			});
			_this.setAttribute('data-ptr', 'invisible');
		}
	}
	else if (thisAttr === 'visible') {
		var firstDisplayNone = (getTheStyle(_this, 'display') == 'none')? true: false;
		if (_this.getAttribute('data-ptr') == null) {
			if (getTheStyle(_this, 'display') == 'none' || getTheStyle(_this, 'opacity') == 0 || getTheStyle(_this, 'height') == 0) {
				TweenLite.killTweensOf(_this,true);
				if (parseInt(getTheStyle(_this, 'height')) == 0) {
					_this.style.height = 'auto';
				}
				if (_this.seniorAttrs != null) {
					if ((_this.seniorAttrs.animation == 'fadeIn') || (_this.seniorAttrs.animation == 'fadeOut')) {
						_this.style.removeProperty('opacity');
					}
				}
				if (getTheStyle(_this, 'opacity') == 0) {
					_this.style.opacity = 1;
				}

				var paddingT = 0,
					paddingB = 0,
					marginTop = 0,
					marginBottom = 0,
					Height = 0,
					display = '';
				if (_this.seniorAttrs == null) {
					display = (getTheStyle(_this, 'display') == 'none')? 'block': getTheStyle(_this, 'display');
					_this.style.display = display;
					paddingT = parseInt(getTheStyle(_this, 'padding-top'));
					paddingB = parseInt(getTheStyle(_this, 'padding-bottom'));
					marginTop = parseInt(getTheStyle(_this, 'margin-top'));
					marginBottom = parseInt(getTheStyle(_this, 'margin-bottom'));
					if (getTheStyle(_this, 'box-sizing') === 'content-box') {
						Height = _this.offsetHeight - paddingT - paddingB;
					}
					else {
						Height = _this.offsetHeight;
					}

					_this.seniorAttrs = {
						paddingTop: paddingT,
						paddingBottom: paddingB,
						marginTop: marginTop,
						marginBottom: marginBottom,
						display: display,
						height: Height,
					}
				}
				else {
					var seniorAttrs = _this.seniorAttrs;
					display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this, 'display') == 'none')? 'block': getTheStyle(_this, 'display') ): seniorAttrs.display;
					_this.style.display = display;
					paddingT = seniorAttrs.paddingTop;
					paddingB = seniorAttrs.paddingBottom;
					marginTop = seniorAttrs.marginTop;
					marginBottom = seniorAttrs.marginBottom;
					Height = seniorAttrs.height;
				}
				if (_this.seniorAttrs.animation == 'fadeOut') {
					_this.style.removeProperty('opacity');
					if (getTheStyle(_this, 'opacity') == 0) {
						_this.style.opacity = 1;
					}
					_this.style.height = 0;
					_this.style.paddingTop = 0;
					_this.style.paddingBottom = 0;
					_this.style.marginTop = 0;
					_this.style.marginBottom = 0;
				}
				_this.seniorAttrs.animation = 'slideDown';

				var thisHeight = 0,
					thisPaddingT = 0,
					thisPaddingB = 0,
					thisMarginB = 0,
					thisMarginT = 0;
				if (!firstDisplayNone) {
					thisHeight = getTheStyle(_this, 'height');
					thisPaddingT = getTheStyle(_this, 'padding-top');
					thisPaddingB = getTheStyle(_this, 'padding-bottom');
					thisMarginT = getTheStyle(_this, 'margin-top');
					thisMarginB = getTheStyle(_this, 'margin-bottom');
				}
				_this.style.overflow = 'hidden';
				if (getTheStyle(_this,'display') == 'none') {
					_this.style.removeProperty('display');
					if (getTheStyle(_this,'display') == 'none') {
						_this.style.display = 'block';
					}
				}
				Height = (Height == 0)? 'auto': Height;

				TweenLite.set(_this, {
					height: Height,
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
				});
				TweenLite.from(_this, time, {
					height: thisHeight,
					paddingTop: thisPaddingT,
					paddingBottom: thisPaddingB,
					marginTop: thisMarginT,
					marginBottom: thisMarginB,
					onComplete: function () {
						this.target.style.removeProperty('overflow');
						this.target.style.height = 'auto';
						if (callback != null) callback(this.target);
					}, ease: Easing
				});
			}
			else {
				_this.setAttribute('data-ptr', 'visible');
				return _this;
			}
		}
		else if ( (ifNullAttr === 'invisible') || (getTheStyle(_this, 'display') == 'none') ) {
			TweenLite.killTweensOf(_this,true);
			if (parseInt(getTheStyle(_this, 'height')) == 0) {
				_this.style.height = 'auto';
			}
			if (_this.seniorAttrs != null) {
				if ((_this.seniorAttrs.animation == 'fadeIn') || (_this.seniorAttrs.animation == 'fadeOut')) {
					_this.style.removeProperty('opacity');
				}
			}
			if (getTheStyle(_this, 'opacity') == 0) {
				_this.style.opacity = 1;
			}

			var paddingT = 0,
				paddingB = 0,
				marginTop = 0,
				marginBottom = 0,
				Height = 0,
				display = '';
			if (_this.seniorAttrs == null) {
				display = (getTheStyle(_this, 'display') == 'none')? 'block': getTheStyle(_this, 'display');
				_this.style.display = display;
				paddingT = parseInt(getTheStyle(_this, 'padding-top'));
				paddingB = parseInt(getTheStyle(_this, 'padding-bottom'));
				marginTop = parseInt(getTheStyle(_this, 'margin-top'));
				marginBottom = parseInt(getTheStyle(_this, 'margin-bottom'));
				if (getTheStyle(_this, 'box-sizing') === 'content-box') {
					Height = _this.offsetHeight - paddingT - paddingB;
				}
				else {
					Height = _this.offsetHeight;
				}

				_this.seniorAttrs = {
					paddingTop: paddingT,
					paddingBottom: paddingB,
					marginTop: marginTop,
					marginBottom: marginBottom,
					display: display,
					height: Height,
				}
			}
			else {
				var seniorAttrs = _this.seniorAttrs;
				display = (seniorAttrs.display == 'none')? ( (getTheStyle(_this, 'display') == 'none')? 'block': getTheStyle(_this, 'display') ): seniorAttrs.display;
				_this.style.display = display;
				paddingT = seniorAttrs.paddingTop;
				paddingB = seniorAttrs.paddingBottom;
				marginTop = seniorAttrs.marginTop;
				marginBottom = seniorAttrs.marginBottom;
				Height = seniorAttrs.height;
			}
			if (_this.seniorAttrs.animation == 'fadeOut') {
				_this.style.removeProperty('opacity');
				if (getTheStyle(_this, 'opacity') == 0) {
					_this.style.opacity = 1;
				}
				_this.style.height = 0;
				_this.style.paddingTop = 0;
				_this.style.paddingBottom = 0;
				_this.style.marginTop = 0;
				_this.style.marginBottom = 0;
			}
			_this.seniorAttrs.animation = 'slideDown';

			var thisHeight = 0,
				thisPaddingT = 0,
				thisPaddingB = 0,
				thisMarginB = 0,
				thisMarginT = 0;
			if (!firstDisplayNone) {
				thisHeight = getTheStyle(_this, 'height');
				thisPaddingT = getTheStyle(_this, 'padding-top');
				thisPaddingB = getTheStyle(_this, 'padding-bottom');
				thisMarginT = getTheStyle(_this, 'margin-top');
				thisMarginB = getTheStyle(_this, 'margin-bottom');
			}
			_this.style.overflow = 'hidden';
			if (getTheStyle(_this,'display') == 'none') {
				_this.style.removeProperty('display');
				if (getTheStyle(_this,'display') == 'none') {
					_this.style.display = 'block';
				}
			}
			Height = (Height == 0)? 'auto': Height;

			TweenLite.set(_this, {
				height: Height,
				paddingTop: paddingT,
				paddingBottom: paddingB,
				marginTop: marginTop,
				marginBottom: marginBottom,
			});
			TweenLite.from(_this, time, {
				height: thisHeight,
				paddingTop: thisPaddingT,
				paddingBottom: thisPaddingB,
				marginTop: thisMarginT,
				marginBottom: thisMarginB,
				onComplete: function () {
					this.target.style.removeProperty('overflow');
					this.target.style.height = 'auto';
					if (callback != null) callback(this.target);
				}, ease: Easing
			});
		}
	}
	else if (thisAttr === 'invisible') {
		TweenLite.killTweensOf(_this,true);
		if (_this.seniorAttrs != null) {
			if ((_this.seniorAttrs.animation == 'fadeIn') || (_this.seniorAttrs.animation == 'fadeOut')) {
				_this.style.removeProperty('opacity');
			}
		}
		if (getTheStyle(_this, 'opacity') == 0) {
			_this.style.opacity = 1;
		}
		_this.style.overflow = 'hidden';
		var paddingT = 0,
			paddingB = 0,
			marginTop = 0,
			marginBottom = 0,
			Height = 0,
			display = '';
		if (_this.seniorAttrs == null) {
			paddingT = parseInt(getTheStyle(_this, 'padding-top'));
			paddingB = parseInt(getTheStyle(_this, 'padding-bottom'));
			marginTop = parseInt(getTheStyle(_this, 'margin-top'));
			marginBottom = parseInt(getTheStyle(_this, 'margin-bottom'));
			if (getTheStyle(_this, 'box-sizing') === 'content-box') {
				Height = _this.offsetHeight - paddingT - paddingB;
			}
			else {
				Height = _this.offsetHeight;
			}
			if (getTheStyle(_this, 'display') == 'none') {
				display = 'block';
			}
			else {
				display = getTheStyle(_this, 'display');
			}

			_this.seniorAttrs = {
				paddingTop: paddingT,
				paddingBottom: paddingB,
				marginTop: marginTop,
				marginBottom: marginBottom,
				display: display,
				height: Height,
			}
		}
		else {
			var seniorAttrs = _this.seniorAttrs;
			paddingT = seniorAttrs.paddingTop;
			paddingB = seniorAttrs.paddingBottom;
			marginTop = seniorAttrs.marginTop;
			marginBottom = seniorAttrs.marginBottom;
			display = seniorAttrs.display;
			Height = seniorAttrs.height;
		}
		_this.seniorAttrs.animation = 'slideUp';
		_this.style.removeProperty('height');

		TweenLite.to(_this, time, {
			height: 0,
			paddingTop: 0,
			paddingBottom: 0,
			marginTop: 0,
			marginBottom: 0,
			onComplete: function () {
				this.target.style.display = 'none';
				this.target.style.removeProperty('overflow');
				if (callback != null) callback(this.target);
			}, ease: Easing
		});
	}

	return _this;
}
//	Append or Prepend el to another DOM Element
//	outerEl.prepend(innerEl);
Array.prototype.prepend = function(el) {
	if (this.length >= 0)
		for (var i=0; i<this.length; i++)
			this[i].insertBefore(el, this[i].childNodes[0]);
	return this;
}
HTMLElement.prototype.prepend = function(el) {
	this.insertBefore(el, this.childNodes[0]);
	return this;
}
//	outerEl.append(innerEl);
Array.prototype.append = function(el) {
	if (this.length >= 0)
		for (var i=0; i<this.length; i++)
			this[i].appendChild(el);
	return this;
}
HTMLElement.prototype.append = function(el) {
	this.appendChild(el);
	return this;
}
//	$('.el').html('String: (text and html tags)');
Array.prototype.html = function(theString) {
	if ( (theString === null) || (typeof theString === 'undefined') ) {
		if (this.length >= 0)
			for (var i=0; i<this.length; i++)
				return this[i].innerHTML;
		return this;
	}
	else {
		if (this.length >= 0)
			for (var i=0; i<this.length; i++)
				this[i].innerHTML = theString;
		return this;
	}
}
HTMLElement.prototype.html = function(theString) {
	if ( (theString === null) || (typeof theString === 'undefined') ) {
		return this.innerHTML;
	}
	else {
		this.innerHTML = theString;
		return this;
	}
}
//	$('.el').text('String');
Array.prototype.text = function(theString) {
	if ( (theString === null) || (typeof theString === 'undefined') ) {
		if (this.length >= 0)
			for (var i=0; i<this.length; i++)
				return this[i].innerText;
		return this;
	}
	else {
		if (this.length >= 0)
			for (var i=0; i<this.length; i++)
				this[i].innerText = theString;
		return this;
	}
}
HTMLElement.prototype.text = function(theString) {
	if ( (theString === null) || (typeof theString === 'undefined') ) {
		return this.innerText;
	}
	else {
		this.innerText = theString;
		return this;
	}
}
//	$('.el').html('String: (text and html tags)');
Array.prototype.html = function(theString) {
	if ( (theString === null) || (typeof theString === 'undefined') ) {
		if (this.length >= 0)
			for (var i=0; i<this.length; i++)
				return this[i].innerHTML;
		return this;
	}
	else {
		if (this.length >= 0)
			for (var i=0; i<this.length; i++)
				this[i].innerHTML = theString;
		return this;
	}
}
HTMLElement.prototype.html = function(theString) {
	if ( (theString === null) || (typeof theString === 'undefined') ) {
		return this.innerHTML;
	}
	else {
		this.innerHTML = theString;
		return this;
	}
}
//	$('.el').html('String: (text and html tags)');
Array.prototype.val = function(theString) {
	if ( (theString === null) || (typeof theString === 'undefined') ) {
		if (this.length >= 0)
			for (var i=0; i<this.length; i++)
				return this[i].value;
		return this;
	}
	else {
		if (this.length >= 0)
			for (var i=0; i<this.length; i++)
				this[i].value = theString;
		return this;
	}
}
HTMLElement.prototype.val = function(theString) {
	if ( (theString === null) || (typeof theString === 'undefined') ) {
		return this.value;
	}
	else {
		this.value = theString;
		return this;
	}
}
// var p = document.createElement("p"); p.innerHTML = 'OK'; p.clone(true)
HTMLElement.prototype.clone = function(deep) {
	return this.cloneNode(deep);
}

//	----------------------- Process Array ---------------------
//	arrayName.max2();
Array.prototype.max2 = function () {
	return Math.max.apply(Math, this.map(function (o) {
		return o;
	}))
};
//	arrayName.min2();
Array.prototype.min2 = function () {
	return Math.min.apply(Math, this.map(function (o) {
		return o;
	}))
};
//	$('#ts1').on('click', function(e){ do this;});
Array.prototype.on = function(event,callback) {
	if (this.length >= 0)
		for (var i=0; i<this.length; i++)
			this[i].addEventListener(event, callback, this[i]);
}
HTMLElement.prototype.on = function(event,callback) {
	if (this == undefined)
		return this;
	this.addEventListener(event, callback, this);
}
// $(SELECTOR).one('click', function(e){ do this;});
Array.prototype.one = function(event, callback) {
	var tempFunc = function(e) {
		callback(e);
		e.target.removeEventListener(event, tempFunc);
	}
	if (this.length > 0) {
		for (var i = 0; i < this.length; i++) {
			this[i].addEventListener(event, tempFunc, this[i]);
		}
	}
}
HTMLElement.prototype.one = function(event, callback) {
	var tempFunc = function(e) {
		callback(e);
		e.target.removeEventListener(event, tempFunc);
	}
	if (this == undefined)
		return this;
	this[i].addEventListener(event, tempFunc, this[i]);
}
//	$('#ts1').hover(enterCallback, outCallback);
Array.prototype.hover = function(enter,out) {
	var enter = (enter != null)? enter : false,
		out = (out != null)? out : false;
	if (this.length >= 0)
		for (var i=0; i<this.length; i++) {
			if (enter !== false)
				this[i].addEventListener("mouseenter", enter);
			if (out !== false)
				this[i].addEventListener("mouseleave", out);
		}
}
HTMLElement.prototype.hover = function(enter,out) {
	var enter = (enter != null)? enter : false,
		out = (out != null)? out : false;
	if (this == undefined)
		return this;

	if (enter !== false)
		this.addEventListener("mouseenter", enter);
	if (out !== false)
		this.addEventListener("mouseleave", out);

	return this;
}
//	getTheStyle(this,'display')
function getTheStyle(el,prop){
	return window.getComputedStyle(el,null).getPropertyValue(prop);
}
//	ptrVisibility( _this, _this.getAttribute('data-ptr') );
function ptrVisibility(el, field){
	if ( field === 'visible' ) {
		el.setAttribute('data-ptr','invisible');
	}
	else if ( field === 'invisible' ) {
		el.setAttribute('data-ptr','visible');
	} else {
		el.setAttribute('data-ptr','visible');
	}
	return el.getAttribute('data-ptr');
}
// --------- isThisMobileFunc() ----------
function isThisMobileFunc() {
	if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
	){
		return true;
	}
	else {
		return false;
	}
}
var isThisMobile = isThisMobileFunc();


//----------------------------- START: Added to Lib ------------------------------
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "seniorJs requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

	// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	"use strict";

	var seniorJs = function (el) {
		if (el.nodeType === 1) return el;
		var elements = document.querySelectorAll(el);
		var result = [];
		for( var x in elements) {
			if (elements[x].nodeType === 1) {
				result.push(elements[x]);
			}
		}
		//	var result = Array.from(elements);
		return result;
	}
	//	isNumber(659)
	seniorJs.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	//	setCookie('dragged', 'true');
	seniorJs.setCookie = function(cName, cValue, exDays) {
		var d = new Date();
		d.setTime(d.getTime() + (exDays*24*60*60*1000));
		var expires = "expires="+ d.toUTCString();
		if (exDays != null) {
			document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
		}
		else {
			document.cookie = cName + "=" + cValue + ";path=/";
		}
	}
	//	deleteCookie('dragged');
	seniorJs.deleteCookie = function(cName) {
		document.cookie = cName + '=; expires=Thu, 01-Jan-70 00:00:01 GMT;path=/';
	}
	//	getCookie('dragged')
	seniorJs.getCookie = function(cName) {
		var name = cName + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i <ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}
	//	$.ajax('POST', URL, data[Object], callback);
	seniorJs.ajax = function(Method, URL, data, callback){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open(Method, URL);
		xmlhttp.setRequestHeader('Content-Type', 'application/json');
		xmlhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		xmlhttp.send(JSON.stringify(data));
		xmlhttp.onreadystatechange = function() {
			var statusSuccess = xmlhttp.status >= 200 && xmlhttp.status < 300 || xmlhttp.status === 304;
			var status = statusSuccess? 'success': 'unsuccess';
			if (xmlhttp.readyState == 4 && statusSuccess == true) {
				var response = JSON.parse(xmlhttp.responseText);
				callback(response, status);
			}
			return;
		}
	};

	window.seniorJs = window.$ = seniorJs;
	return seniorJs;
});
//----------------------------- END: Added to Lib   ------------------------------