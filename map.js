var svg = d3.select("#map");

var states = [
	{id:"ME", x:10, y:0},
	{id:"AK", x:0, y:1},
	{id:"WI", x:6, y:1},
	{id:"VT", x:9, y:1},
	{id:"NH", x:10, y:1},
	{id:"WA", x:1, y:2},
	{id:"ID", x:2, y:2},
	{id:"MT", x:3, y:2},
	{id:"ND", x:4, y:2},
	{id:"MN", x:5, y:2},
	{id:"IL", x:6, y:2},
	{id:"MI", x:7, y:3},
	{id:"NY", x:8, y:2},
	{id:"MA", x:9, y:2},
	{id:"OR", x:1, y:3},
	{id:"NV", x:2, y:3},
	{id:"WY", x:3, y:3},
	{id:"SD", x:4, y:3},
	{id:"IA", x:5, y:3},
	{id:"IN", x:6, y:3},
	{id:"OH", x:7, y:4},
	{id:"PA", x:8, y:3},
	{id:"NJ", x:9, y:3},
	{id:"CT", x:10, y:3},
	{id:"RI", x:11, y:3},
	{id:"CA", x:1, y:4},
	{id:"UT", x:2, y:4},
	{id:"CO", x:3, y:4},
	{id:"NE", x:4, y:4},
	{id:"MO", x:5, y:4},
	{id:"KY", x:6, y:4},
	{id:"WV", x:7, y:5},
	{id:"VA", x:8, y:4},
	{id:"MD", x:9, y:4},
	{id:"DE", x:10, y:4},
	{id:"AZ", x:2, y:5},
	{id:"NM", x:3, y:5},
	{id:"KS", x:4, y:5},
	{id:"AR", x:5, y:5},
	{id:"TN", x:6, y:5},
	{id:"NC", x:8, y:5},
	{id:"SC", x:8, y:6},
	{id:"OK", x:3, y:6},
	{id:"LA", x:4, y:6},
	{id:"MS", x:5, y:6},
	{id:"AL", x:6, y:6},
	{id:"GA", x:7, y:6},
	{id:"HI", x:0, y:7},
	{id:"TX", x:3, y:7},
	{id:"FL", x:9, y:7}
];

for (var i = 0; i < states.length; i++) {
	svg.append("rect")
	.attr("x", 75 * states[i].x)
	.attr("y", 75 * states[i].y)
	.attr("width", 75)
	.attr("height", 75)
	.attr("fill", "#2dcad8")
	.attr("stroke", "#ffffff")
	.attr("stroke-width", 4);

	svg.append("text")
	.attr("x", 75 * states[i].x + 75/2)
	.attr("y", 75 * states[i].y + 75/2)
	.attr("text-anchor", "middle")
	.attr("alignment-baseline", "central")
	.attr("font-family", "'Open Sans', sans-serif")
	.attr("font-size", 24)
	.attr("fill", "#ffffff")
	.text(states[i].id);
}
