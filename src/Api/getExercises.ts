


export const getExercises = async (URL: string) => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const apiHost = process.env.REACT_APP_HOST;

    if (!apiKey || !apiHost) {
        throw new Error('API key or API host is not defined');
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
    };

    try {
        const response = await fetch(URL, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }



}