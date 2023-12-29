 import { useState } from "react";
function Bgchanger () {

    const [color,setcolor] = useState("olive")
    
    return (
        <div className="container"
        style={{backgroundColor: color}}> 

        <div className="bottom_bar">
            <button className="red" onClick= {
                () => setcolor('red')} >
                Red
            </button>
            <button className="green"  onClick= {
                () => setcolor('green')}>
                green
            </button>
            <button className="white"  onClick= {
                () => setcolor('white')}>
                white
            </button>
            <button className="black"  onClick= {
                () => setcolor('black')}>
                black
            </button>
            <button className="olive"  onClick= {
                () => setcolor('olive')}>
                olive
            </button>
            <button className="orange"  onClick= {
                () => setcolor('orange')}>
                orange
            </button>
            <button className="pink"  onClick= {
                () => setcolor('pink')}>
                pink
            </button>
            <button className="grey"  onClick= {
                () => setcolor('grey')}>
                grey
            </button>
            <button className="blue"  onClick= {
                () => setcolor('blue')}>
                blue
            </button>
        </div>

        </div>

    );

}
export default Bgchanger;