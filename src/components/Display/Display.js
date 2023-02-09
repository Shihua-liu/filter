import "./Display.css"

import { useSelector } from "react-redux";


const Display = () => {

    const filteredGames = useSelector(state => { return state })

    let firstToBeRenderd = false;


    // gaat door de data heen en geeft de title terug
    const titleToBeRendered = filteredGames.map(game => {
        if(firstToBeRenderd === false){
            firstToBeRenderd = true
            return (
                <section className="display" key={game.title}>
                    <h4>{game.title}</h4>
                    <figure className="display__play">Play this!!</figure>
                </section>
            )

        }
        return (
            <section className="display" key={game.title}>
                <h4>{game.title}</h4>
            </section>
        )
    })

    return (
        <>
            {titleToBeRendered}
        </>
    );
}

export default Display;