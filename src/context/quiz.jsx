import { createContext, useReducer } from "react";
import questions from "../data/questions";

const Stages = ["Start", "Playing", "End"];

// referente ao useReducer
const initialState = {
    gameStage: Stages[0],
    questions
}

const quizReducer = (state, action) => {
    console.log(state, action);

    switch (action.type) {
        case "CHANGE_STATE":
            return state

        default:
            return state;
    }

}
//

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {

    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};