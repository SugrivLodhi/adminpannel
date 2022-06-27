import React from 'react';

const FormDatas = () => {
   const formHandle =(e)=>{
            e.preventDefault();
       const formData = new FormData(e.target)
       for (const [key,value] of formData.entries()){
        console.log(key,value);  
        }
     
   }

    return (
        <div>
          <form  onSubmit={(e)=>formHandle(e)}>
          <div className='personal_btn'>
          <input type="radio" value='personal'   name="user-type2"     id="user-type2" />
          <label htmlFor='user-type2'>Personal</label>
          </div>
          <div className='company_btn'>
          <input type="radio" value='company'   name="user-type3" id="user-type3"/>
          <label htmlFor='user-type3'>company</label>
          </div>
          <div className='name'>
          <input type="text"  placeholder='enter your name' name='name'/>
          <label>Name</label>
          </div>  
          <div className='name'>
          <input type="text"  placeholder='Please enter your complete lastname' name="lastname"/>
          <label>LastName</label>
          </div>  
          <div className='email'>
          <input type="email"  placeholder='Please enter your email address' name='eamil'/>
          <label>Email</label>
          </div>  
          <div className='mobile'>
          <input type="numer"  placeholder='Please enter your mobile number' name='mobile' />
          <label>Mobile Number</label>
          </div>  
          <div className='address'>
          <input type="text" placeholder='please enter your complete address' name='addres'/>
          <label>Complete Address</label>
          </div>  
          <button type='submit'>Submit</button>
         </form>
            
        </div>
    );
}

export default FormDatas;
