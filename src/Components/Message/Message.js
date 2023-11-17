import axios from 'axios'
import React from 'react'
import { appUrl } from '../../Helpers';
import {Formik} from 'formik'
import { Schema } from '../Schema/Schema';
import './Message.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function Message() {
    const [phone, setPhone] = React.useState('98');

    function handleOnChangePhone(e){
        setPhone(e.target.value)
    }

    const handleSendMessage = async(message)=>{
        try {

            const res = await axios.post(`${appUrl}contact`, {...message});
            const data = await res.data;
            console.log(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = (values, action)=>{
        console.log(values)
        handleSendMessage(values);
        console.log('submitted');
        console.log(phone)
    }

   

  return (
    <Formik
        validationSchema={Schema}
        initialValues={{
            contactEmail:'',
            contactMessage:'',
            contactName:''
        }}

        onSubmit={onSubmit}
    >
        {({handleBlur, handleSubmit, touched, errors, handleChange, values, isSubmitting})=>(
                <form noValidate onSubmit={handleSubmit} className="contact-form">

                    <div className='name-field field'>
                        <label htmlFor="contactName">Your Name</label>
                        <input className='name-input input-field' type="text" name='contactName' id='contactName' value={values.contactName} onChange={handleChange} />
                        {errors.contactName && touched.contactName && <p className='message-error'>{errors.contactName}</p>}
                    </div>

                    <div className='email-field field'>
                        <label htmlFor="contactEmail">Email Address</label>
                        <input className='email-input input-field' type="email" name='contactEmail' id='contactEmail' value={values.contactEmail} onChange={handleChange}/>
                        {errors.contactEmail && touched.contactEmail && <p className='message-error'>{errors.contactEmail}</p>}
                    </div>

                    {/* <div className='phone-field field'>
                        <label htmlFor="contactPhone">Phone</label>
                        <input className='phone-input input-field' type="tel" name='contactPhone' id='contactPhone' value={values.contactPhone} onChange={handleChange} />
                        {errors.contactPhone && touched.contactPhone && <p className='message-error'>{errors.contactPhone}</p>}
                    </div> */}


                    <div className='message-field field'>
                        <div className='message-container'>
                            <label htmlFor="contactMessage">Message</label>
                            <textarea name="contactMessage"  id="contactMessage" className='message-input-field input-field comment-box' cols="1" rows="5" value={values.contactMessage} onChange={handleChange}/>
                            {errors.contactMessage && touched.contactMessage && <p className='message-error'>{errors.contactMessage}</p>}
                        </div>
                    
                        <button type='submit' className='send-btn'><i className="far send-icon fa-paper-plane"></i></button>
                    </div>

                </form>
        )}



    </Formik>
   
  )
}

export default Message