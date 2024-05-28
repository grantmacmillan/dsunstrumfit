import Image from 'next/image';
import Link from 'next/link';

import { Container, Row, Col } from 'react-bootstrap';

export const metadata = {
  title: 'DsunstrumFit - Home',
  description: 'Generated by create next app',
};

export default function Home() {
  return (
    <div className="landing">
      <Container className="h-100 d-flex align-items-center">
        <Row className="w-100">
          <Col md={6} className="text-content">
            <h1>Transform Your Health</h1>
            <p>Achieve your fitness goals with personalized training and expert support. Join us today for a healthier, stronger you.</p>

            <Link href="/contact">
              <span className="btn-flip" data-back="Contact Me" data-front="Get Started"></span>
            </Link>
          </Col>
          <Col md={6} className="image-container d-flex justify-content-center align-items-center">
            <div className="masked-image">
              <Image
                src="/images/landing-small.jpg" // Replace with the actual path to the client's image
                alt="Client Image"
                width={400}
                height={400}
                layout="intrinsic"
                className="clientImage"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}