import { FC } from 'react'
import { ArrowLeft } from 'react-feather'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

import { version } from '../../../package.json'
import { Input, Logo } from '../../global'
import { QUERIES } from '../../global/constant'

interface Props {
  isValidUser: boolean
  isLoading: boolean
  isSubmitted: boolean
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onBack: () => void
}

export const LoginView: FC<Props> = ({ isSubmitted, isLoading, isValidUser, onSubmit, onBack }) => {
  return (
    <Wrapper>
      <TopSphere />
      <BottomSphere />
      <Header>
        <Link to='/welcome'>
          <TouchDown>
            <Logo size='4rem' />
          </TouchDown>
          &nbsp;RockCat
        </Link>
      </Header>
      <LoginWrapper>
        {!isSubmitted ? (
          <>
            <SignOnHeader>Sign In</SignOnHeader>
            <Form onSubmit={onSubmit}>
              <EmailInputWrapper>
                <Input type='email' placeholder='email' name='email' required />
                <ErrorMsg>
                  {!isValidUser ? 'No registered user with this email address. Enroll to login.' : null}
                </ErrorMsg>
              </EmailInputWrapper>
              <LoginButton type='submit' disabled={isLoading}>
                Email a Login Link
              </LoginButton>
            </Form>
          </>
        ) : (
          <EmailWrapper>
            <EmailHeader>
              <BackButton>
                <ArrowLeft onClick={onBack} />
              </BackButton>
              <span>Email Sent</span>
              <span />
            </EmailHeader>
            <EmailText>
              A “magic link” has been emailed to you, containing a link you can click to log in. It should
              show up in your inbox within 30 seconds or so.
            </EmailText>
            <strong>You can close this tab now.</strong>
          </EmailWrapper>
        )}
      </LoginWrapper>
      <Version>v{version}</Version>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`

const Header = styled.div`
  align-self: center;
  width: clamp(500px, 80%, 800px);
  max-width: 100%;
  padding: 1.5rem;
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
`

const Landing = keyframes`
    0% {
      transform: rotate(-45deg) translateX(50px) translateY(-50px);
    }
    60% {
      transform: rotate(-45deg) translateX(10px)  translateY(-20px);
    }
    100% {
      transform: rotate(0deg) translateY(0px);
    }
`

const TouchDown = styled.div`
  display: inline-block;
  animation: ${Landing} 2s ease-out 1;
`

const SignOnHeader = styled.h2`
  font-size: 2.5rem;
`

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: clamp(400px, 65%, 500px);
  max-width: 100%;
  height: 300px;
  margin: auto;
  padding: 1rem;
  background-color: var(--color-gray-900);
  border-radius: 3rem;
  font-weight: var(--font-weight-bold);
`

const Animate = keyframes`
   0% {
     background-position: 0% 50%
   }
   50% {
     background-position: 100% 50%
   }
   100% {
     background-position: 0% 50%
   }
`

const LoginButton = styled.button`
  text-align: center;
  font-size: 1rem;
  font-weight: inherit;
  border-radius: 0.75rem;
  border: none;
  padding: 1rem 3rem;
  cursor: pointer;
  color: var(--color-gray-100);
  background: linear-gradient(
    -45deg,
    #e46bbb 0%,
    #eb78bd 29.89%,
    var(--color-primary-medium) 73.63%,
    var(--color-primary-dark) 100%
  );
  background-size: 250%;

  :hover {
    color: var(--color-white);
  }

  :disabled {
    cursor: default;
    opacity: 0.4;
  }

  animation: ${Animate} 5s linear infinite;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
`

const EmailInputWrapper = styled.div`
  margin-bottom: 1rem;
`

const ErrorMsg = styled.div`
  padding: 0.5rem;
  color: var(--color-danger);
  font-size: 0.7rem;
`

const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100%;
  padding: 1rem;
`

const EmailHeader = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 2.5rem;
`

const BackButton = styled.div`
  align-self: start;
  color: var(--color-gray-300);
  cursor: pointer;

  :hover {
    transform: scale(1.2);
    color: var(--color-white);
  }
`

const EmailText = styled.div`
  text-align: justify;
`

const TopSphere = styled.div`
  display: none;
  position: absolute;
  right: 5%;
  top: 5%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(
    79.91% 79.91% at 74.58% 16.62%,
    #e46bbb 0%,
    #eb78bd 29.89%,
    #b72eb2 73.63%,
    #81249a 100%
  );

  @media ${QUERIES.tabletAndUp} {
    display: block;
  }
`

const BottomSphere = styled.div`
  position: absolute;
  left: 25%;
  bottom: 5%;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(
    79.91% 79.91% at 74.58% 16.62%,
    #e46bbb 0%,
    #eb78bd 29.89%,
    #b72eb2 73.63%,
    #81249a 100%
  );
`

const Version = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
`

LoginView.displayName = 'LoginView'
