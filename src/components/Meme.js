import React, {useState, useEffect} from 'react'


export default function Meme(){

/*const [memeImage, setMemeImage] = useState("")*/

const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
})

useEffect(()=>{
    async function getMemes(){
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMemes(data.data.memes)
    }
    getMemes()
}, [])

const [allMemes, setAllMemes] = useState([])
    
function getMemeImage(){
    
    const randomNumber = Math.floor(Math.random()*allMemes.length)  
    const url = allMemes[randomNumber].url 
    /*setMemeImage(elementOfData[randomNumber].url)*/

    setMeme(prevMeme =>{
        return{
            ...prevMeme,
            randomImage: url
        }
    })
}

function handleChange(event){
    const {name, value} = event.target
    setMeme(prevMeme=>({
        ...prevMeme,
        [name] : value
    }))
}
    
    return(
    <main>
        <div className="meme-form">
            <input
            type="text"
            placeholder="Top Text"
            name = "topText"
            value={meme.topText}
            onChange={handleChange}
            className="form-input">
            
            
            </input>
            <input
            type="text"
            placeholder="Bottom text"
            name = "bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            className="form-input">
            </input>
            <button
            className="form-button" onClick={getMemeImage}>
            Get a new meme image 🖼
            </button>
        </div>
        <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </main>
    )
}