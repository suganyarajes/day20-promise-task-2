








function callApi(){


var res=fetch("https://data.covid19india.org/v4/min/data.min.json");

var selectedoption=document.getElementById('options').value;
//console.log(selectedoption);

res.then((data)=>data.json()).then((data1)=>{//console.log(data1)

for(var i in data1){
    //console.log(i)

    if(i==selectedoption){
        //console.log(data1[i]);
        
        var resultdata=document.getElementById('resultdata');
        resultdata.innerHTML=""
        //resultdata.innerHTML=`Name: ${i}<br>Total:${data1[i].total.confirmed}<br>`; 
        var covidResult = document.getElementById("covidResult");

        while (covidResult.rows.length > 0) {
            covidResult.deleteRow(0);
        }
        var row = covidResult.insertRow();
        row.insertCell(0).innerHTML = i;
        row.insertCell(1).innerHTML = data1[i].total.confirmed;
        nameCell.innerHTML = i;
        totalconfirmedCell.innerHTML = data1[i].total.confirmed
   
   


}
}
});
}



   
    
            











