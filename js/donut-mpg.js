// JavaScript Document

	// Data
    var value = 0.31
    var text = Math.round(value * 100) + ''
    var data = [value, 1 - value]
    
    // Settings
	var width = 180
    var height = 80
    var anglesRange = 0.5 * Math.PI
    var radis = Math.min(width, 2 * height) / 2
    var thickness = 30
    // Utility 
	// var colors = d3.scale.category10();
    var colors = ["#5EBBF8", "#F5F5F5"]
    
    var pies = d3.layout.pie()
    	.value( d => d)
    	.sort(null)
    	.startAngle( anglesRange * -1)
    	.endAngle( anglesRange)
    
		var arc = d3.svg.arc()
    	.outerRadius(radis)
    	.innerRadius(radis - thickness)
    
    var translation = (x, y) => `translate(${x}, ${y})`
    
    // Feel free to change or delete any of the code you see in this editor!
    var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
    	.attr("class", "half-donut")
			.append("g")
    	.attr("transform", translation(width / 2, height))
    
    
    svg.selectAll("path")
    	.data(pies(data))
    	.enter()
    	.append("path")
    	.attr("fill", (d, i) => colors[i])
    	.attr("d", arc)
    
		svg.append("text")
    	.text( d => text)
    	.attr("dy", "-2rem")
    	.attr("class", "label")
    	.attr("text-anchor", "middle")
