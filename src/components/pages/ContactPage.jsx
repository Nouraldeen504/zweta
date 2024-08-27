// src/pages/ContactPage.js
import React from 'react';

const ContactPage = () => {
  return (
    <>
      <div className='container col-xxl-8 px-4 py-5'>
        <div class="px-4 py-5 my-5 text-center">
          <h1 class="display-5 fw-bold text-body-emphasis">اتصل بنا</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4">نحن هنا للإجابة على جميع استفساراتك ومساعدتك في كل ما تحتاجه</p>
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

      <div className='container col-xxl-8 px-4 py-5'>
        <div class="px-4 text-center">
          <h1 class="fw-bold text-body-emphasis">راسلنا</h1>
            <form class="">
              <div className='d-flex flex-column-sm justify-content-center gap-5'>
                <div class="d-flex flex-column col-4 gap-3">
                  <input type="text" class="form-control" id="formName" placeholder='الاسم'/>
                  <input type="text" class="form-control" id="formSubject" placeholder='الموضوع' />
                  <input type="email" class="form-control" id="formEmail" placeholder='البريد الالكتروني' />
                </div>
                <div className='col-4'>
                  <textarea name="content" id="formContent" className='w-100 h-100'></textarea>
                </div>
              </div>
              <div class="text-end">
                <button type="submit" class="btn btn-subtle me-2">Cancel</button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
        </div>
      </div>

    </>
  );
};

export default ContactPage;
