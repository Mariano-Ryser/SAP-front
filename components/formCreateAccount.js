import React from 'react';

const FormCreateAccount = () => {
  return (
    <>
    <form className='form'>
    <h1>Create Account</h1>
        <span>Name</span><input></input>
        <br></br>
        <span>Email</span><input type='email'></input>
        <br></br>
        <span >Geburtsdatum</span><input type="date" placeholder='ej: 22.05.1991'></input>
        <br></br>
        <span>Password</span><input type='password'></input>
        <br></br>

        <button>Create</button>

        {/* <div className='alert'><b>Referenz-Nummer:</b>Bitte einen Wert eingeben.</div> */}
        
    </form>



   


<style jsx>{`
h1{
    color: #0670b7;
    font-size: 1.2rem;
    margin-bottom: 1.7rem;
}
    form{
        margin: auto;
        margin-top: 5rem;
        border-radius: 6px;
        width: 38rem;
        background-color: rgb(237, 237, 237);
        padding: 2rem;
        box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.15);
    }
    span{
        display: inline-block;
        width: 10rem;
        font-family: "HelveticaNeueLTW01_55Roman","Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 1em;
        font-weight: 400;
        margin-right: 1rem;
        margin-bottom: 0.3rem;
        color: #4c4c4c;
        
    }
    input{
        font-family: "HelveticaNeueLTW01_55Roman","Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 1em;
        display: inline-block;
        background: #f4f4f4;
        color: #4c4c4c;
        width: 15rem;
        height: 2.56rem;
        border:solid rgb(189, 189, 189) 1px;
        border-radius: 4px;
        transition: 0.2s;
        font-size: 1em;
        padding-left: 0.5rem;
        padding-top: 0.2rem;
        margin-bottom: 0.5rem;
    
    }
    input:hover{
        background-color: rgb(247, 245, 245);
        box-shadow: 0 1px 10px 0 rgba(88, 88, 88, 0.15);
    }
    input:focus {
        
        outline: none;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 1px 5px 0 rgba(175, 175, 175, 0.15);
        }
    {/* input:hover{
        background: #ffffff;
    } */}
    button{
        margin-top: 0.42rem;
        margin-left: 0.1rem;
        padding-top: 0.1em;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        font-size: 1em;
        border: solid rgb(170, 170, 170) 1px;
        border: 1px solid #0070bc;
        background: #0070bc;
        height: 2.45rem;
        width: 6rem;
        transition: 0.3s;
    }
    button:hover{
        cursor: pointer;
        background: #0182d8;
    }
    .alert{
        color: rgb(80, 80, 80);
        font-family: "HelveticaNeueLTW01_55Roman","Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 1em;
        position: absolute;
        left: 10rem;
        background-color: rgb(235, 235, 235);
        border: solid rgb(212, 212, 212) 1px;
        border-radius: 6px;
        width: 19.4rem;
        height: 5rem;
        padding: 1.3rem;
        box-shadow: 0 3px 10px 0 rgba(149, 149, 149, 0.15),
                    0 2px 10px 0 rgba(149, 149, 149, 0.15),
                    0 1px 10px 0 rgba(149, 149, 149, 0.15);
        ;
    }


`}
</style>

</>
  );
};

export default  FormCreateAccount;