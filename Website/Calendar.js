var rowNum = 0;
for(var d=1; d<32; d++){
   	var aDiv = document.createElement('td');
   	aDiv.className = "CalDate";
	aDiv.innerHTML = d;
   	document.getElementById('Cal' + rowNum).appendChild(aDiv);
  	if (d % 7 === 0){
		rowNum++;
  	}

}

// Check Calendar.HTML for Object JavaScript Code & Live Time Code