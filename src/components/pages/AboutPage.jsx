import React from 'react';
import shop from '../../assets/images/shop.jpeg';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <div className='container col-xxl-8 px-4 py-5'>
        <div class="px-4 py-5 my-5 text-center">
          <h1 class="display-5 fw-bold text-body-emphasis">زويتة</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4">وجهتك المثالية للأناقة، الراحة، والابتكار</p>
            </div>
        </div>
      </div>

      <hr />

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5 mx-auto">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={shop} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="400" height="300" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">من نحن</h1>
            <p class="lead">في زويتة، نقدم مجموعة مختارة بعناية من الملابس، الأحذية، الأجهزة المنزلية، المكياج، والإكسسوارات. مهمتنا هي تقديم أفضل ما في الموضة والوظائف إلى باب منزلك.</p>
          </div>
        </div>
      </div>

      <hr />

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg align-items-start g-5 py-5 mx-auto">
          <div class="col-lg-6">
              <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">قصتنا</h1>
              <p class="lead">تأسست زويتة في عام [السنة]، وبدأ كمشروع عائلي صغير بشغف لتقديم منتجات عالية الجودة بأسعار معقولة. على مر السنين، نمونا لنصبح سوقًا موثوقًا به ومعروفًا بتنوع منتجاتنا وخدمة العملاء الاستثنائية.</p>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">قيمنا</h1>
            <p class="lead">نؤمن بالجودة، الاستدامة، ورضا العملاء. يعمل فريقنا بجد لتوفير منتجات ليست فقط جميلة ولكنها تؤدي أداءً متميزًا.</p>
          </div>
        </div>
      </div>

      <hr />

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg align-items-center py-5 text-center">
          <h1 class="display-5 fw-bold text-body-emphasis">اتصل بنا</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead">نحن نحب أن نسمع منك! تواصل معنا على [البريد الإلكتروني] أو تابعنا على [روابط وسائل التواصل الاجتماعي].</p>
            <Link to="/contact" style={{textDecoration: 'none'}}>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-dark btn-lg px-4 me-sm-3 fw-bold">اعرف المزيد</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
