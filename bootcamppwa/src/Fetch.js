import './Fetch.css';
import React from "react";

function Fetch() {

    const [url, setUrl] = React.useState([{ url: "No URL Found" }]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((response) => {
                return response.json();
            })
            .then((res) => {
                console.log(res);
                setUrl(res.data.memes);
            });
    }, []);



    return (
        <>
            <h1>Projet BootCamp 2022</h1>
            <div className="Grid">
                {url.map((MEMES) => {
                    return (
                        <div >
                            <div className='box'>
                            <p>{MEMES.name}</p>
                            <img width= "400vw" height="auto" src={MEMES.url} key={MEMES.id}></img>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );



}

export default Fetch;