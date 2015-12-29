ko.bindingHandlers.markupAttr = {
    init: function(element, valueAccessor, allBindings, viewModel) {
			var myObject=valueAccessor();
			for(var propertyName in myObject) {
				var value=element.attributes[propertyName].nodeValue;

				//get matching observable
				var matching = false;
				if(myObject[propertyName]){
					var observableToMatch = myObject[propertyName];
					if(viewModel[observableToMatch]){
						matching = viewModel[observableToMatch];
					}
				}

				if(matching){
					viewModel[propertyName] = matching;
				}
				//create the observable, if it doesn't exist 
				else if (!ko.isWriteableObservable(viewModel[propertyName])) {
					viewModel[propertyName] = ko.observable();
				}

				viewModel[propertyName](value);

				var attrBinding = {};
				attrBinding[propertyName] = viewModel[propertyName];

				ko.applyBindingsToNode(element, { attr: attrBinding });
			}
    }
};

var viewModel = function(){
	myData=ko.observable("another value");
	return {
		myData:myData
	};
};
var viewModelObject = new viewModel();
ko.applyBindings(viewModelObject);

