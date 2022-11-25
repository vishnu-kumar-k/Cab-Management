import { Row,Col,Container } from 'react-bootstrap';
import { signInWithGoogle } from "../../fire";
function LoginForm(props)
{
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;
    return (
    <>
            <div className='container-center'>
          <div className='container-center-wrapper'>
            <Container>            <Row>
              <Col md={3} xs={1} sm={2} ></Col>
              <Col md={6} xs={10} sm={8} >
                <div className='center-form'>
              <h1> Rido</h1><br /><br />

                <form>
              <label>Username :</label>{"  " }
                  <input type="text"  required autoFocus value={email} onChange={e => setEmail(e.target.value)}></input>
                  <p >{emailError}</p>
          
                  <label>Password :</label>{"  "}
                  <input type="password" required autoFocus value={password} onChange={e => setPassword(e.target.value)}></input>
                  <p >{passwordError}</p>
                  <div className='btnContainer'>
                    {hasAccount ? (
                      <>
                        <button className="btn btn-primary" onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account ?<s> <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></s></p>
                      </>
                    ) : (<>
                      <button className="btn btn-primary"  onClick={handleSignup}>Sign up</button>
                      <p>Have an account ? <s><span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></s></p>
                  </>)}
                
                  </div>
                  </form >
                  <div>
                  <button className="btn btn-primary" onClick={signInWithGoogle}>Sign in with Google</button>
                  </div>
                  </div>
              </Col>
              <Col md={3} xs={1} sm={2}></Col>
            </Row>
              </Container>

              </div >
            </div >
    
    
          </>
        );
}
export default LoginForm;