function getCals(){
	var foodData = {
		"Борщ красный"   : 200,
		"Борщ зеленый"   : 190,
		"Бульен куриный" : 150, 
		"Гречневая каша" : 137,
		"Картошка"       : 112,
		"Рис"            : 96,
		"Чай"            : 45,
		"Кофе"           : 70,
		"Компот"         : 65
	},

		dish1  		= document.getElementById("dish1").value,
		weight1 	= document.getElementById("weight1").value,
		dish2 		= document.getElementById("dish2").value,
		weight2 	= document.getElementById("weight2").value,
		dish3 		= document.getElementById("dish3").value,
		weight3 	= document.getElementById("weight3").value,
		result 		= document.getElementById("result"),
		cals        = 0;

	;
	
	cals += (foodData[dish1] * weight1 / 100) + (foodData[dish2] * weight2 / 100) + (foodData[dish3] * weight3 / 100);

		result.value = Math.round(cals);	
		console.log(result);
		console.log(foodData[dish1]);
}

btn   = document.getElementById("btn")
btn.onclick = getCals; 



