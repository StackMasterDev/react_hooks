"use client"
import React, { useState } from "react";
import styles from "./style.module.css"
import {useInput} from "@/app/customHooks/useInputHook";

export default function CustomHooks() {
   /* const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");*/
/*const [inputs,setInputs]=useState({name:"",age:"",email:""})*/

/*    const handleChange=(event)=>{
    setInputs({...inputs, [event.target.name]:event.target.value})

    };*/

const [inputs,setInputs]=useInput({name:"",age:"",email:""});

    return (
        <div className={styles.App}>
            <h1>React Dersleri</h1>
            <h2>Özel hook nasıl yazılır?</h2>

            { /* prettier-ignore */}
            <form className={styles.form}>
                <label className={styles.label} htmlFor="name">
                    Name: <input className={styles.input} name="name" value={inputs.name} onChange={setInputs} />
                </label>
                <label className={styles.label} htmlFor="age">
                    Age: <input className={styles.input}  name="age" value={inputs.age} onChange={setInputs} />
                </label>
                <label className={styles.label} htmlFor="email">
                    Email: <input className={styles.input} name="email" value={inputs.email} onChange={setInputs} />
                </label>
            </form>
        </div>
    );
}