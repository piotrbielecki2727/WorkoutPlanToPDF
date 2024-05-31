import { Exercise, FetchedExercise } from "../Types";



export const getExercises = async (URL: string) => {

    const apiKey = process.env.REACT_APP_API_KEY;
    const apiHost = process.env.REACT_APP_HOST;

    const exercises: FetchedExercise[] = [
        {
            bodyPart: "chest",
            equipment: "body weight",
            gifUrl: "https://v2.exercisedb.io/image/UcvY9fRgNeiV4m",
            id: 1,
            instructions: [
                "Lie flat on your back with your knees bent and feet flat on the ground.",
                "Place your hands behind your head with your elbows pointing outwards.",
                "Engaging your abs, slowly lift your upper body off the ground and curl forward until your torso is at a 45-degree angle.",
                "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ],
            name: "3/4 sit-up",
            secondaryMuscles: ["hip flexors", "lower back"],
            target: "abs"
        },
        {
            bodyPart: "waist",
            equipment: "body weight",
            gifUrl: "https://v2.exercisedb.io/image/I-Of0Ev43i4Zt7",
            id: 2,
            instructions: [
                "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
                "Keeping your back straight and your core engaged, bend to one side, lowering your hand towards your knee.",
                "Pause for a moment at the bottom, then slowly return to the starting position.",
                "Repeat on the other side.",
                "Continue alternating sides for the desired number of repetitions."
            ],
            name: "45° side bend",
            secondaryMuscles: ["obliques"],
            target: "abs"
        },
        {
            bodyPart: "upper legs",
            equipment: "body weight",
            gifUrl: "https://v2.exercisedb.io/image/I-Of0Ev43i4Zt7",
            id: 3,
            instructions: [
                "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
                "Keeping your back straight and your core engaged, bend to one side, lowering your hand towards your knee.",
                "Pause for a moment at the bottom, then slowly return to the starting position.",
                "Repeat on the other side.",
                "Continue alternating sides for the desired number of repetitions."
            ],
            name: "squat",
            secondaryMuscles: ["obliques"],
            target: "abs"
        },
        {
            bodyPart: "lower legs",
            equipment: "body weight",
            gifUrl: "https://v2.exercisedb.io/image/I-Of0Ev43i4Zt7",
            id: 4,
            instructions: [
                "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
                "Keeping your back straight and your core engaged, bend to one side, lowering your hand towards your knee.",
                "Pause for a moment at the bottom, then slowly return to the starting position.",
                "Repeat on the other side.",
                "Continue alternating sides for the desired number of repetitions."
            ],
            name: "lydki",
            secondaryMuscles: ["obliques"],
            target: "abs"
        },
        {
            bodyPart: "shoulders",
            equipment: "body weight",
            gifUrl: "https://v2.exercisedb.io/image/I-Of0Ev43i4Zt7",
            id: 5,
            instructions: [
                "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
                "Keeping your back straight and your core engaged, bend to one side, lowering your hand towards your knee.",
                "Pause for a moment at the bottom, then slowly return to the starting position.",
                "Repeat on the other side.",
                "Continue alternating sides for the desired number of repetitions."
            ],
            name: "ohp",
            secondaryMuscles: ["obliques"],
            target: "abs"
        },
        {
            bodyPart: "back",
            equipment: "body weight",
            gifUrl: "https://v2.exercisedb.io/image/I-Of0Ev43i4Zt7",
            id: 6,
            instructions: [
                "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
                "Keeping your back straight and your core engaged, bend to one side, lowering your hand towards your knee.",
                "Pause for a moment at the bottom, then slowly return to the starting position.",
                "Repeat on the other side.",
                "Continue alternating sides for the desired number of repetitions."
            ],
            name: "pull up",
            secondaryMuscles: ["obliques"],
            target: "abs"
        }
    ];




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
        //const response = await fetch(URL, options);
        //const result = await response.json();
        const result = exercises;
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }



}