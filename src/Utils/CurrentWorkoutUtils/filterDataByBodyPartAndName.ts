

export const filterDataByBodyPartAndName = (data: any[], choosedBodyPart: string, searchValue: string) => {
    const formattedChoosedBodyPart = choosedBodyPart.toLowerCase();
    const formattedSearchValue = searchValue.toLowerCase();
    const filteredData = data.filter((exercise) =>
        exercise.bodyPart === formattedChoosedBodyPart &&
        exercise.name.includes(formattedSearchValue))
    return filteredData;
}