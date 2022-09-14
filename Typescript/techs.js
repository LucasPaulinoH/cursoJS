var techs;
(function (techs) {
    techs[techs["react"] = 0] = "react";
    techs[techs["angular"] = 1] = "angular";
    techs[techs["vue"] = 2] = "vue";
})(techs || (techs = {}));
var bestTech = techs.react;
console.log(bestTech);
