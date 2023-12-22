import * as React from 'react';
import {useForm} from 'react-hook-form';
import './style.css'

type FormInputs = {
    firstName: string,
    lastName: string,
    category: [],
    age:number,
    showAge: boolean,
    email: string
}

let renderCount = 0;

const FormHook: React.FC = () => {
    const { register, watch, handleSubmit, formState: {errors, isDirty, isSubmitting, touchedFields, submitCount}} = useForm<FormInputs>()

    const watchShowage = watch("showAge", false);
    const watchAllFields = watch();
    const watchFields = watch(['showAge','age'])

    const onSubmit = (data:FormInputs) => {
        console.log(JSON.stringify(data));
    }
    
    console.log("touched", touchedFields);
    console.log("watchAllFields", watchAllFields);
    console.log("watchFields", watchFields);
    renderCount++;
    return (
        <div>
            <span className="counter">Render Count: {renderCount}</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", {required: "First name is not valid."})} required placeholder='First name'/>
                <input {...register("lastName",{minLength: 2})} placeholder='Last name'/>

                <label>Show age</label>
                <input {...register("showAge")} type="checkbox"/>
                {watchShowage && (
                    <>
                        <label>Age</label>
                        <input type="number" {...register("age",{min: 50})} />
                        {errors.age && <p>{"The number must be greater than 49"}</p>}
                    </>
                )}

                <label>Email</label>
                <input
                    {...register("email")}
                    placeholder="bluebill1049@hotmail.com"
                    type="email"
                />

                <input type="submit" />
            </form>
        </div>
    )
}

export default FormHook;