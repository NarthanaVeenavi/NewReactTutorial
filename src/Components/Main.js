// const name = 'Narthana Veenavi'
// const position = 'Web Developer'

// const myObj = {
//     name: `${name}`,
//     position: `${position}`,
//     city:'Panadura'
// }

function Main({name, position, city, id}){
    // const { city } = myObj;
    return(
        <div>
            <img src="https://static.toiimg.com/thumb/msid-80753244,width-1280,resizemode-4/80753244.jpg" alt="cardImage" />
            <div>
                <h3>{name}</h3>
                <p><span>{city}</span></p>
                <p><span>{position}</span></p>
            </div>
        </div>
    )
}

export default Main;