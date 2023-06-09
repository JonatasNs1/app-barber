import React from 'react';
import 
{
    Container, 
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';
import BarberLogo from '../../assets/barber.svg';

import SignInput from '../../components/SignInput';

export default () =>{
    return(
        <Container>
           <BarberLogo width="100%" height="160"/>
        <InputArea>
          
          <SignInput/>

          <SignInput/>
    
            <CustomButton>
                <CustomButtonText>
                    LOGIN
                </CustomButtonText>
            </CustomButton>
        </InputArea>
        
        <SignMessageButton>
            <SignMessageButtonText> Ainda não possui uma conta:</SignMessageButtonText>
            <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
        </SignMessageButton>

        </Container>
    );
}