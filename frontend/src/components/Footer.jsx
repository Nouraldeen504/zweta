import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import {Link} from 'react-router-dom';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
    <footer>
      <Container className='bg-dark text-white p-4' fluid>
        <Row style={{ gap: '2rem' }}>
          <Col xs={12} md={6}>
            <Stack>
              <h2>زويتة</h2>
              <p>نبذة عن زويتة</p>
            </Stack>
          </Col>
          <Col xs={12} md={6}>
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
          <Col xs={12} md={6} style={{ maxWidth: '400px' }}>
            <h4>تواصل معنا</h4>
            <div className="p-2">
              <p>البريد الإلكتروني</p>
              <p>التليفون</p>
              <p>العنوان</p>
            </div>
          </Col>
        </Row>
        <div className='text-center pt-5'><hr /><Link to="/admin" style={{textDecoration: 'none', color: 'white'}}>&copy;</Link> {year} زويتة، جميع الحقوق محفوظة </div>
      </Container>
    </footer>

    </>
  )
}

export default Footer