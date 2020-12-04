import React from 'react';
import FooterFile from './Footer_file.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaMediumM,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <MDBFooter color='blue' className='font-small pt-4 mt-4'>
      <MDBContainer fluid className='text-center text-md-left'>
        <MDBRow>
          <MDBCol md='6'>
            <h4 className='title'>Follow Here</h4>

            <ul className='icons'>
              <li>
                <a href='https://www.linkedin.com/in/asitdebata/'>
                  <FaLinkedinIn color='DarkSlateBlue' size='20px' />
                </a>
              </li>
              <li>
                <a href='https://github.com/dev-asit96'>
                  <FaGithub color='DarkSlateBlue' size='20px' />
                </a>
              </li>
              <li>
                <a href='https://medium.com/@devasit'>
                  <FaMediumM color='DarkSlateBlue' size='20px' />
                </a>
              </li>
              <li>
                <a href='https://twitter.com/asitdebata'>
                  <FaTwitter color='DarkSlateBlue' size='20px' />
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/asitdebata96'>
                  <FaFacebookF color='DarkSlateBlue' size='20px' />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/dev_asit/'>
                  <FaInstagram color='DarkSlateBlue' size='20px' />
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href='https://asitdebata-portfolio.netlify.app/'> Asit Debata </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
