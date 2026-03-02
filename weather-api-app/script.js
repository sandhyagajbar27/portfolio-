const apiKey = "b7934afb6eca3b6a9e0cde86ba55d9c9";

async function getWeather() {
    let city = document.getElementById("cityInput").value.trim();
    if (city === "") {
        alert("Please enter city name");
        return;
    }

    // Automatically add ,IN if no country is specified
    if (!city.includes(",")) {
        city += ",IN";
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        // Show weather info
        const weatherBox = document.getElementById("weatherBox");
        weatherBox.classList.remove("hidden");

        document.getElementById("cityName").innerText = data.name + ", " + data.sys.country;
        document.getElementById("temperature").innerText = "Temperature: " + data.main.temp + "°C";
        document.getElementById("condition").innerText = "Condition: " + data.weather[0].main;

        // Change background dynamically (fixed for all possible cases)
        const weatherType = data.weather[0].main.toLowerCase();

        if (weatherType.includes("clear")) {
            document.body.style.background = "linear-gradient(to right, #4facfe, #00f2fe)";
        } else if (weatherType.includes("cloud")) {
            document.body.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)";
        } else if (weatherType.includes("rain") || weatherType.includes("drizzle")) {
            document.body.style.background = "linear-gradient(to right, #00c6ff, #0072ff)";
        } else if (weatherType.includes("snow")) {
            document.body.style.background = "linear-gradient(to right, #e6dada, #274046)";
        } else if (weatherType.includes("mist") || weatherType.includes("fog") || weatherType.includes("haze")) {
            document.body.style.background = "linear-gradient(to right, #d7d2cc, #304352)";
        } else if (weatherType.includes("thunderstorm")) {
            document.body.style.background = "linear-gradient(to right, #373b44, #4286f4)";
        } else {
            document.body.style.background = "linear-gradient(to right, #4facfe, #00f2fe)";
        }

    } catch (error) {
        alert(error.message);
    }
}