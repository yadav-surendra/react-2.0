function Random(){

let num = Math.random() * 100;

return <div>
    <h3 style={{'background-color': '#0077'}}>the random number is {Math.round(num)}. </h3>
</div>

}

export default Random;