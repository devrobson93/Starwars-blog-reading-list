const API_URI = "https://www.swapi.tech/api/planets/"


export const getPlanets = async () => {
    try {
        const response = await fetch(API_URI);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        const actualData = await response.json();
        return actualData;
      } catch (err) {
        console.log(err.message);
      }
}