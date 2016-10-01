var zodiac = [
	{
		// index 0
		sign: "aquarius",
		fortune: "Knowledge, Humanitarian, Serious, Insightful, Duplicitous",
		image: "img/aquarius.jpg",
	},
	{
		// index 1
		sign: "aries",
		fortune: "Active, Demanding, Determined, Effective, Ambitious",
		image: "img/aries.jpg"
	},
	{
		// index 2
		sign: "cancer",
		fortune: "Emotion, Diplomatic, Intensity, Impulsive, Selective",
		image: "img/cancer.jpg"
	},
	{
		// index 3
		sign: "capricorn",
		fortune: "Determination, Dominance, Perservering, Practical, Willful",
		image: "img/capricorn.jpg"
	},
	{
		// index 4
		sign: "gemini",
		fortune: "Communication, Indecision, Inquisitive, Intelligent, Changeable",
		image: "img/gemini.jpg"
	},
	{
		// index 5
		sign: "leo",
		fortune: "Ruling, Warmth, Generosity, Faithful, Initiative",
		image: "img/leo.jpg"
	},
	{
		// index 6
		sign: "libra",
		fortune: "Balance, Justice, Truth, Beauty, Perfection",
		image: "img/libra.jpg"
	},
	{
		// index 7
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "img/pisces.jpg"
	},
	{
		// index 8
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "img/sagittarius.jpg"
	},
	{
		// index 9
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "img/scorpio.jpg"
	},
	{
		// index 10
		sign: "taurus",
		fortune: "	Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "img/taurus.jpg"
	},
	{
		// index 11
		sign: "virgo" , 
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "img/virgo.jpg"
	}
]

function zodiacF(){
var day = document.getElementById("day")
var month = document.getElementById("month")

	for(i = 0; i < zodiac.length; i = i + 1){

		if((month.value == 1 && day.value <= 20) || (month.value == 12 && day.value >=22)) {

    document.getElementById("icon").src = zodiac[3].image
	document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[3].fortune

  } else if ((month.value == 1 && day.value >= 21) || (month.value == 2 && day.value <= 18)) {

    document.getElementById("icon").src = zodiac[0].image
	document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[0].fortune

  } else if((month.value == 2 && day.value >= 19) || (month.value == 3 && day.value <= 20)) {
    document.getElementById("icon").src = zodiac[7].image
	document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[7].fortune

  } else if((month.value == 3 && day.value >= 21) || (month.value == 4 && day.value <= 20)) {

    document.getElementById("icon").src = zodiac[1].image
	document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[1].fortune

  } else if((month.value == 4 && day.value >= 21) || (month.value == 5 && day.value <= 20)) {
    
    document.getElementById("icon").src = zodiac[10].image
	document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[10].fortune

  } else if((month.value == 5 && day.value >= 21) || (month.value == 6 && day.value <= 20)) {
    
    document.getElementById("icon").src = zodiac[5].image
	document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[5].fortune

  } else if((month.value == 6 && day.value >= 22) || (month.value == 7 && day.value <= 22)) {
    
    document.getElementById("icon").src = zodiac[2].image
	document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[2].fortune

  } else if((month.value == 7 && day.value >= 23) || (month.value == 8 && day.value <= 23)) {
    
    document.getElementById("icon").src = zodiac[7].image
	document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[7].fortune

  } else if((month.value == 8 && day.value >= 24) || (month.value == 9 && day.value <= 23)) {
    
    document.getElementById("icon").src = zodiac[11].image
	document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[11].fortune

  } else if((month.value == 9 && day.value >= 24) || (month.value == 10 && day.value <= 23)) {
    
    document.getElementById("icon").src = zodiac[6].image
	document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[6].fortune

  } else if((month.value == 10 && day.value >= 24) || (month.value == 11 && day.value <= 22)) {
    
    document.getElementById("icon").src = zodiac[9].image
	document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[9].fortune

  } else if((month.value == 11 && day.value >= 23) || (month.value == 12 && day.value <= 21)) {
    
    document.getElementById("icon").src = zodiac[8].image
	document.getElementById("yourHoroscope").textContent = "You're best attributes are: " + zodiac[8].fortune

  }


	}


}





















