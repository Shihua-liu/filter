import "./Form.css"

import { useState } from "react";
import { useDispatch } from "react-redux";

import { games } from "../../data/games"

import { filterGamesByTitle, filteredGamesByPlatform } from "../../helper/filterGames"

const Form = () => {

    const dispatch = useDispatch()
    // elke object in de array geef is dingenmee en de filter die hij moet gebruiken.
    const [inputs, setinputs] = useState([
        {
            id: "title",
            value: "",
            label: "Title",
            filter: filterGamesByTitle
        },
        {
            id: "platfroms",
            value: "",
            label: "Platform",
            filter: filteredGamesByPlatform
        },
    ]);

    // zorgt ervoor dat je kan typen in de input veld en de goeie input veld in typ ipv dat het in beide veranderd
    const onInputChanged = (event) => {
        let copy = [...inputs]
        copy.map(input => {
            if (input.id === event.target.id) {
                input.value = event.target.value
            }
        })
        setinputs(copy)
    }


    //hier render hij de inputsvelden om de title en de platforms te filteren
    const inputsToBeRenderd = inputs.map(objectFromStateArray => {
        return (

            <div key={objectFromStateArray.id} className="form__wrapper" >
                <label className="form__label" htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
                <input className="form__input" onChange={onInputChanged} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value} />
            </div>

        )
    })



    // als je op enter klik, voert hij dit uit, filter hij de games en de platforms om de goeie games te laten zien
    const Submit = (event) => {
        event.preventDefault();
        let result = games
        inputs.forEach(input => {
            result = input.filter(input.value, result)
        })
        dispatch({
            type: "FILTEREDGAMES",
            payload: result
        })
    }

    return (
        <form className="form" onSubmit={Submit}>
            <div className="form__inputwrapper">
                {inputsToBeRenderd}
            </div>

            <button className="form__search" onClick={Submit}>Zoeken</button>
        </form>
    );
}

export default Form;