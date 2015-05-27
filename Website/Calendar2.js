var cell =
 HTMLTableRowElement.insertCell(optional
index = -1);

function addCell("Cal0") {
var rowRef = document.getElementbyID("Cal0")
var newCell = rowRef.insertCell(0);
}

var rowNum = 0;
for(var d=1; d<8; d++){
    var 
   	var aDiv = document.createElement('td');
   	aDiv.className = "CalDate";
	aDiv.innerHTML = d;
   	document.getElementById('Cal' + rowNum).appendChild(aDiv);
  	if (d % 7 === 0){
		rowNum++;
  	}

}
