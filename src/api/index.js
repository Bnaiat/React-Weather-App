async function getWeather(city) {
  if (city.length) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1ada35d5f8654934bbc0425ec3be972e&units=metric`
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error("Something went Wrong");
  }
  throw new Error("Something went Wrong");
}

export { getWeather };
