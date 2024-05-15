export const getExercises = async (URL: string) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': ''
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