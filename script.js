document.getElementById('myform').addEventListener('submit', function(e) {

    e.preventDefault();

    var city = document.getElementById('city').value;

    var apiKey = "949fe5534a2ddd2a11936c39064938a5";

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)

        .then(function(res) {

            console.log(res);

            var temperature = res.data.main.temp;
            var cityName = res.data.name;
            var country = res.data.sys.country;

            document.getElementById('result').innerHTML = `
                <h2>${cityName}, ${country}</h2>
                <h3>Temperature: ${temperature} °C</h3>
            `;

        })

        .catch(function(error) {

            console.log(error);

            document.getElementById('result').innerHTML = `
                <h3>City not found ❌</h3>
            `;

        });

});