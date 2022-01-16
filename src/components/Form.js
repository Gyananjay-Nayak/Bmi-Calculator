import React, { useState } from "react";
//import TextInput from "./TextInput";
//import Button from "./Button";
import '../styles/Form.css'




function Form() {

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setbmi] = useState('');
    const [message, setmessage] = useState('');


    let calculateBmi = (e) => {
        e.preventDefault()

        if (weight == 0 || height == 0) {
            alert('Please enter a valid height and weight')
        }
        else {
            let h = height / 100;
            let bmi = (weight / (h * h));
            setbmi(bmi.toFixed(2));

            if (bmi < 18.5) {
                setmessage("This is considered Underweight");
            }
            else if (bmi >= 18.5 && bmi < 25) {
                setmessage("This is considered Normal");
            }
            else if (bmi >= 25 && bmi < 30) {
                setmessage("This is considered Overweight");
            }
            else {
                setmessage("This is considered Obese");
            }
        }
    }

    const Reload = () => {
        window.location.reload();
    }


    return (
        <>
            <div>
                <div className='container'>
                    <h2 className='center'> BMI Calculator </h2>
                    <form>
                        <div className="row">
                            <div>
                                <label>Height (in Cm)</label>
                                <input value={height} onChange={(e) => setHeight(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div>
                                <label>Weight (in Kg)</label>
                                <input value={weight} onChange={(e) => setWeight(e.target.value)} />
                            </div>
                        </div>

                        <div>
                            <button className="btn" onClick={calculateBmi}>Calculate</button>
                            <button className="btn btn-reload" onClick={Reload} >Reload</button>
                        </div>
                    </form>
                    <div className='center'>
                        <h3>Your BMI index : {bmi}</h3>
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </>


        // <>
        //     <div>
        //         <div className="row">
        //             <div>
        //                 <label>{props.label}</label>
        //                 <input type='text' value={state.value} placeholder={props.placeholder} onChange={handelChange} />
        //             </div>
        //             {/* <TextInput label='Height' placeholder='Enter height in meters' onChange={this.heightChange} /> */}
        //         </div>
        //         <div className="row">
        //             <div>
        //                 <label>{props.label}</label>
        //                 <input type='text' value={this.state.value} placeholder={props.placeholder} onChange={handelChange} />
        //             </div>
        //             {/* <TextInput label='Weight' placeholder='Enter weight in kg' onChange={this.weightChange} /> */}
        //         </div>
        //     </div>
        //     <Button />
        // </>
    );
}

export default Form;