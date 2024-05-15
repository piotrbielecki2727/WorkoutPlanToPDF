export const filterData = (data: any[], choosedBodyPart: string | undefined, searchValue: string | undefined) => {
    const formattedChoosedBodyPart = choosedBodyPart?.toLowerCase();
    const formattedSearchValue = searchValue?.toLowerCase();

    if (formattedChoosedBodyPart && formattedSearchValue) {
        return data.filter(exercise =>
            exercise.bodyPart === formattedChoosedBodyPart &&
            exercise.name.includes(formattedSearchValue)
        );
    } else if (formattedChoosedBodyPart && !formattedSearchValue) {

        return data.filter(exercise =>
            exercise.bodyPart === formattedChoosedBodyPart
        );
    } else if (!formattedChoosedBodyPart && formattedSearchValue) {

        return data.filter(exercise =>
            exercise.name.includes(formattedSearchValue)
        );
    } else {
        return data;
    }
}