export const getDataCard  = async (API_URI_CHAR) => {
    try {
        const response = await fetch(API_URI_CHAR);
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