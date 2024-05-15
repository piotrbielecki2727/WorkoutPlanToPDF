export const filterDataByBodyPart = (data: any[], choosedBodyPart: string) => {

    
    const formattedChoosedBodyPart = choosedBodyPart.toLowerCase(); 
    const filteredData = data.filter((exercise) => exercise.bodyPart === formattedChoosedBodyPart);
    return filteredData;
}