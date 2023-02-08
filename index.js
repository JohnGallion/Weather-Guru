let city = document.getElementById("city").value

//fetch call to turn location into lon lat 
const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8942028294msh261be75419f76e2p171bf3jsn134222a754ec',
		'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
	}
};

async function getCoordinates() {
    let table = document.getElementById("table-contents")
    fetch(`https://google-maps-geocoding.p.rapidapi.com/geocode/json?address=${city}&language=en`, options1)
	.then(response => response.json())
	.then(response => {
        
        data = {
        city: response.results[0].formatted_address,
        lat: response.results[0].geometry.location.lat,
        lon: response.results[0].geometry.location.lng
    }

       table.innerHTML = `<tr>
         <th id="city" scope="row">${data.city}</th>
         <td id="latitude">${data.lat}</td>
         <td id="longitude">${data.lon}</td>
        </tr>`
        
    



//fetch call for weather API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8942028294msh261be75419f76e2p171bf3jsn134222a754ec',
		'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
	}
};

async function getWeather() {
    fetch(`https://dark-sky.p.rapidapi.com/${data.lat},${data.lon}?lang=en&units=auto`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));}

getWeather()
})
.catch(err => console.error(err));}