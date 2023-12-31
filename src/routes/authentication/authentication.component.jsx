
import SignInForm from '../../components/signin-form/signin-form.component';
import SignUpForm from '../../components/signup-form/signup-form.component';

import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
       </AuthenticationContainer>
    )

};

export default Authentication;