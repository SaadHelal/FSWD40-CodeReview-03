function calculateInsurance () {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var country = document.getElementById("country").value;
	var Horsepower	= document.getElementById("Horsepower").value;
	if(country=="Austria" || country=="austria"){
		var insurance = (Horsepower*100)/(Number(age)+50);
		document.getElementById("result").innerHTML=
		" Your insurance costs in "+country+" is: "+Math.floor(insurance)+"€";
	}
	else if(country=="Italy" || country=="italy"){
		var insurance2 = (Horsepower*120)/(Number(age)+100);
		document.getElementById("result").innerHTML=
		" Your insurance costs in "+country+" is : "+Math.floor(insurance2)+"€";
	}
	else if(country=="Germany" || country=="germany") {
		var insurance3 = (Horsepower*150)/(Number(age+2)+150);
		document.getElementById("result").innerHTML=
		" Your insurance costs in "+country+" is : "+Math.floor(insurance3)+"€";
	}

	else {
		document.getElementById("result").innerHTML=
	
	"we don't have any informations about this country";
	}
	return false;
} 