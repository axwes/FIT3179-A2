var vg_1 = "Country_Origin/australia-visitor-country.vg.json";
var vg_2 = "Each_State_Visitors/australia-total-visitors.vg.json";

vegaEmbed("#country_origin_chart", vg_1).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);

vegaEmbed("#total_visitor_chart", vg_2).then(function(result) {
    // Access the Vega view instance as result.view
}).catch(console.error);