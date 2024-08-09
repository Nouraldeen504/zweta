import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
    <footer>
      <Container className='bg-dark text-white p-4' fluid>
        <Row>
          <Col className='pe-5'>
            <Stack>
              <h2>زويتة</h2>
              <p>نبذة عن زويتة</p>
            </Stack>
          </Col>
          <Col>
            <Stack>
              <h2>الأقسام الرئيسية</h2>
              <div className='d-flex p-2' style={{gap: '3rem'}}>
                <div>
                  <p>ملابس</p>
                  <p>أحذية</p>
                  <p>منزلية</p>
                </div>
                <div>
                  <p>كهرومنزلية</p>
                  <p>مفروشات</p>
                  <p>اكسسوارات</p>
                </div>
              </div>
            </Stack>
          </Col>
          <Col style={{ maxWidth: '400px' }}>
            <h4>تواصل معنا</h4>
            <div className="p-2">
              <p>البريد الإلكتروني</p>
              <p>التليفون</p>
              <p>العنوان</p>
            </div>
          </Col>
        </Row>
        <div className='text-center pt-5'><hr />&copy; {year} زويتة، جميع الحقوق محفوظة </div>
      </Container>
    </footer>

    </>
  )
}

export default Footer