PromoZombie.Embedder = (function() {
    function initialize() {
        AppendStyles();
        CreateWrapper();
    }

    function CreateWrapper() {
        var pzWrapper = document.createElement('div');
        var wrapperValues = {
            id: 'wrapper',
            class_name: 'wrapper',
            style: {
                background: 'lightgray'
            }
        };

        pzWrapper.id = wrapperValues.id;
        pzWrapper.className = wrapperValues.class_name;
        pzWrapper.style.background = wrapperValues.style.background;
        document.getElementsByTagName('body')[0].appendChild(pzWrapper);

        CreateHeading(pzWrapper);
    }

    function CreateHeading(pzWrapper) {
        var pzHeading = document.createElement('div');
        var headingValues = {
            id: 'heading',
            class_name: 'heading',
            style: {
                fontSize: '20px'
            }
        };

        pzHeading.id = headingValues.id;
        pzHeading.className = headingValues.class_name;
        pzHeading.style.fontSize = headingValues.style.fontSize;

        pzWrapper.appendChild(pzHeading);
        pzHeading.innerHTML = "Welcome to Promozombie!";

        CreateButton(pzHeading);

    }

    function CreateButton(pzHeading) {
        var pzButton = document.createElement("button");
        var buttonValues = {
            id: 'btn',
            class_name: 'btn',
            text: 'CLICK ME',
            redirect: 'http://www.ecommercewebsites.com.au'
        };

        pzButton.id = buttonValues.id;
        pzButton.className = buttonValues.class_name;

        var text = document.createTextNode(buttonValues.text);
        pzButton.appendChild(text);
        pzHeading.appendChild(pzButton);

        document.getElementById("btn").onclick = function () {
            window.open(buttonValues.redirect);
        };
    }

    function ExtendedWrapper() {}
    function GetWidget() {}
    function AppendStyles() {
        var pzStyles = document.createElement("link");
        pzStyles.rel = "stylesheet";
        pzStyles.type = "text/css";
        pzStyles.href = window.location + '/snippet/stylesheets/promozombie.css';
        document.getElementsByTagName("head")[0].appendChild(pzStyles)
    }

    return{
        init: function(config) {
            // var  = PromoZombie.ajaxRequest("/api-zombie/user-config", config);
            var options = config || {};
            initialize();
        }
    }
})();
