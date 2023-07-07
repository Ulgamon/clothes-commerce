import { useState } from "react";
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './signin-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields((prevState) => ({...prevState, [name]: value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            setFormFields(defaultFormFields);
        } catch (error) {
            if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                alert('Wrong email or password');
            }
            console.log(error);
        }

    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                    label="Email"
                    type="email" 
                    name="email"
                    required
                    onChange={handleChange}
                    value={email}
                />

                <FormInput 
                    label="Password"
                    type="password" 
                    name="password"
                    required
                    onChange={handleChange}
                    value={password}
                />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button onClick={signInWithGoogle} type="button" buttonType="google">Sign In With Google</Button>
                </div>
            </form>
        </div>
    )
};

export default SignInForm;