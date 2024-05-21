import { FetchedExercise } from "../../Types";

export const exerciseNamesToUpperCase = (data: FetchedExercise[]): FetchedExercise[] => {
  const formattedData = data.map((exercise) => {
    const capitalizedName = exercise.name.charAt(0).toUpperCase() + exercise.name.slice(1);
    const capitalizedBodyPart = exercise.bodyPart.charAt(0).toUpperCase() + exercise.bodyPart.slice(1);
        return {
      ...exercise,
      name: capitalizedName,
      bodyPart: capitalizedBodyPart,
    };
  });

  return formattedData;
};