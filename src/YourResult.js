function YourResult({corrects}) {



    return (
        <>
        <div className="YourResult">Nəticəniz:<b style={corrects>5 ? {color: "#22FF00DD"} : {color : "red"}} >{corrects} </b> doğru cavab</div>
            <div style={{display:"flex",justifyContent:"center"}} className="buttons"><button onClick={()=>window.location.reload()} >Yenidən başla</button></div>
        </>

    )}

export default YourResult;