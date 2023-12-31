import "../styles/contacto.css"
import emailjs from "@emailjs/browser"
import {useForm} from "react-hook-form"

const Contacto= () => {

  const {register,handleSubmit} = useForm()

  const sendEmail = (e)=>{
  e.preventDefault()
  
  emailjs.sendForm(`service_co0kr3c`,`template_4rqype2`,e.target,`YbG5ZzENOPLyxZmfn`)
  .then(resp=> {
    console.log(resp)
    alert("mensaje enviado correctamente")})
  .catch(error=> console.error(error))
}

    return (
      <main className="main-contact">
        <section className='contact section' id="contacto">
            <h2 className='section__title'>
              contactate <span>conmigo</span>
            </h2>
            
            <form className="form-mail" onSubmit={sendEmail}>
            <div className="section__textarea">
                <label><span className='info__description'>Nombre completo</span></label>
                <div className="input__section">
                  <input type="text" name="user_name" {...register("user_name",{ required: true })} className="input"/>
                </div>
              </div>
              
              <hr />

              <div className="section__textarea">
                <label><span className='info__description'>Email</span></label>
                <div className="input__section">
                  <input type="email" name="user_email" {...register("user_email",{ required: true })} className="input"/>
                </div>
              </div>
              
              <hr />

              <div className="section__textarea">
                <label><span className='info__description'>mensaje</span></label>
                <div className="text__area__section">
                  <textarea name="message" {...register("message",{ required: true })} className="text__area"/>
                </div>
              </div>
              
              <hr />

              <button className='info__description button_form'>enviar</button>
            </form>
            
        </section>
        
      </main>
    )
  }
  
  export default Contacto