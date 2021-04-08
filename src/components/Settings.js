import React, {useRef} from 'react'

export default function Settings(user) {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const pswdChangeRef = useRef()
    const pswdConfirmRef = useRef()

    function handleSave(e){
        const firstName   = firstNameRef.current.value
        const lastName   = lastNameRef.current.value
        const email  = emailRef.current.value
        const pswd   = pswdChangeRef.current.value
        const pswdConfirm  = pswdConfirmRef.current.value

        console.log(firstName)
        console.log(lastName)
        console.log(email)
        if(pswd !== pswdConfirm){
            alert("Passwords do not match")
            return
        }

       // updateUserInfo(firstName, lastName, email)
    }
/* 
    function handleBack(e) {
        <HomePage/>
    }
    
    function updateUserInfo(firstName, lastName, email, ){

    }
    
    */
    
    return (
        <>
            <h1>
                {/* <button onClick={handleBack}> Back </button> */}
                Settings
            </h1>

            <form>
                <div>
                    First Name:
                    <input ref={firstNameRef} type="text" value="user.firstName"/>
                </div>
                <div>
                    Last Name:
                    <input ref={lastNameRef} type="text" value="user.lastName"/>
                </div>
                <div>
                    Email:
                    <input ref={emailRef} type="text" value="user.email"/>
                </div>
                <div>
                    Password:
                    <input ref={pswdChangeRef} type="text" placeholder="Enter new password"/>
                    <input ref={pswdConfirmRef} type="text" placeholder="Confirm password"/>
                </div>
                <div>
                    <button onClick={handleSave}> Save </button>
                </div>
            </form>
        </>
    )
}
