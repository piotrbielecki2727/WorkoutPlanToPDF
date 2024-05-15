

export const namesToUpperCase = (data: string[]) => {
    const formattedData = data.map((data: string) => data.charAt(0).toUpperCase() + data.slice(1));
    return formattedData;


}