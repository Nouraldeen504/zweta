// src/pages/ContactPage.js
import React from 'react';
import whatsIcon from '../../assets/images/whatsapp.png';
import faceIcon from '../../assets/images/facebook.png';
import instaIcon from '../../assets/images/instagram.png';

const ContactPage = () => {
  return ( 
    <>
      <style>{
      `
        .map-container {
          width: 80%;
          margin: auto;
          position: relative;
          padding-top: 56.25%; /* 16:9 Aspect Ratio */
        }
        .map {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .icon img{
          width: 100%;
        }

        .icon{
          width: 90px;
        }

      `  
      }</style>
      <div className='container col-xxl-8 px-4 py-5' >
        <div class="px-4 py-5 my-5 text-center">
          <h1 class="display-5 fw-bold text-body-emphasis">اتصل بنا</h1>
            <div class="col-lg-6 mx-auto" >
              <p class="lead mb-4" >نحن هنا للإجابة على جميع استفساراتك ومساعدتك في كل ما تحتاجه</p>
            </div>
        </div>
      </div>

      <hr />

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg align-items-start g-3 py-3">
          <div class="col-lg-6 mx-auto text-center">
              <h2 class="fw-bold text-body-emphasis lh-1 mb-3">ساعات العمل</h2>
              <p class="lead">10:00-19:00</p>
          </div>
          <div class="col-lg-6 mx-auto text-center">
            <h2 class="fw-bold text-body-emphasis lh-1 mb-3">العنوان</h2>
            <p class="lead">شارع بن عاشور</p>
          </div>
        </div>
        <div class="row flex-lg align-items-start g-3 py-3">
          <div class="col-lg-6 mx-auto text-center">
              <h2 class="fw-bold text-body-emphasis lh-1 mb-3">البريد الالكتروني</h2>
              <p class="lead">info@zweta.ly</p>
          </div>
          <div class="col-lg-6 mx-auto text-center">
            <h2 class="fw-bold text-body-emphasis lh-1 mb-3">ارقامنا</h2>
            <div className='lh-1' dir="ltr">
              <p class="lead">00 123456789</p>
              <p class="lead">00 123456789</p>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className='container col-xxl-8 px-4 py-3'>
        <div class="px-4 text-center">
          <h1 class="fw-bold text-body-emphasis mb-5">راسلنا</h1>
            <form class="mx-auto" style={{maxWidth:"350px"}}>
              <div className='d-flex flex-column flex-md-row justify-content-center gap-5 mb-3'>
                <div class="d-flex flex-column col-4 gap-3 w-100">
                  <input type="text" class="form-control" id="formName" placeholder='الاسم'/>
                  <input type="text" class="form-control" id="formSubject" placeholder='الموضوع' />
                  <input type="email" class="form-control" id="formEmail" placeholder='البريد الالكتروني' />
                </div>
                <div className='col-4 w-100'>
                  <textarea name="content" id="formContent" className='w-100 h-100'></textarea>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-dark">ارسل</button>
              </div>
            </form>
        </div>
      </div>

      <hr />

      <div className='container col-xxl-8 px-4 py-3'>
        <div class="px-4 text-center">
          <h1 class="fw-bold text-body-emphasis mb-3">موقعنا</h1>
          <div className="map-container">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26826.39682485505!2d13.266670178051763!3d32.810825778147105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a89750fdb6e479%3A0x740e3658337e414a!2z2LLZiNmK2KrYqSDZhdmI2YQg2LnZitmGINiy2KfYsdip!5e0!3m2!1sen!2sly!4v1725035386303!5m2!1sen!2sly"
             allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      <hr />

      <div className='container col-xxl-8 px-4 py-3 mb-5'>
        <div class="px-4 text-center">
          <h1 class="fw-bold text-body-emphasis mb-5">تابعنا على منصات التواصل الاجتماعي</h1>
          <div className="images d-flex justify-content-between col-lg-8 m-auto">
            <div className="icon">
              <a href="https://www.facebook.com/zwita.mall.for.clothes" target='_blank'>
                <img src={faceIcon} alt="facebook icon" />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.instagram.com/m.z.zwaita/?hl=ar" target='_blank'>
                <img src={instaIcon} alt="instagram icon" />
              </a>
            </div>
            <div className="icon">
              <a href="https://wa.me/+218920386000" target='_blank'>
                <img src={whatsIcon} alt="whatsapp icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ContactPage;
