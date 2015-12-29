var Images=function(){
	var imageList = ko.observableArray([]);
	var load=function(images){
		imageList(images);
		return imageList;
	};
	return {
		load:load,
		imageList:imageList
	};
};
var Image=function(url){return {url:url};};
var viewModel = function(){
	var images=ko.observable(new Images());
	var current=0;
	var data=[
	[new Image('http://cache4.asset-cache.net/xt/146670061.jpg?v=1&g=fs1|0|TSIR|70|061&s=1'),
	new Image('http://cache4.asset-cache.net/xt/109393787.jpg?v=1&g=fs1|0|TSIR|93|787&s=1')],
	[new Image('http://cache4.asset-cache.net/xt/128500238.jpg?v=1&g=fs1|0|ICO|00|238&s=1'),
	new Image('http://cache3.asset-cache.net/xt/168613096.jpg?v=1&g=fs1|0|FKF|13|096&s=1'),
	new Image('http://cache2.asset-cache.net/xt/149248104.jpg?v=1&g=fs1|0|DV|48|104&s=1'),
	new Image('http://cache3.asset-cache.net/xt/457069553.jpg?v=1&g=fs1|0|FKF|69|553&s=1')],
	[new Image('http://cache4.asset-cache.net/xt/173180018.jpg?v=1&g=fs1|0|FKS|80|018&s=1'),
	new Image('http://cache1.asset-cache.net/xt/160082036.jpg?v=1&g=fs1|0|TSIR|82|036&s=1'),
	new Image('http://cache2.asset-cache.net/xt/454022031.jpg?v=1&g=fs1|0|FPG|22|031&s=1')]
	];
	var change=function(){
		current++;

		images().load(data[current%data.length]);
	};
	return {
		images:images,
		change:change
	};
};

var viewModelObject = new viewModel();
ko.applyBindings(viewModelObject);