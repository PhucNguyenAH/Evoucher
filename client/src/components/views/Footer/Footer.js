import React from 'react';
import { Icon } from 'antd';
import styled from 'styled-components';
import { MDBBtn } from 'mdb-react-ui-kit';

function Footer() {
	return (
		<footer className='page-footer  mdb-color lighten-3 text-center font-small mt-4 wow fadeIn'>

			<hr className='my-4' />

			<div className='pb-4'>
				<a href='https://www.facebook.com/PhucNguyen4499/' target='_blank'>
					<i className='fab fa-facebook-f mr-3'></i>
				</a>

				<a href='https://www.youtube.com/channel/UC2Z0F-mo9VBIlVxoycxudjg/videos' target='_blank'>
					<i className='fab fa-youtube mr-3'></i>
				</a>

				<a href='https://github.com/PhucNguyenAH/Evoucher' target='_blank'>
					<i className='fab fa-github mr-3'></i>
				</a>

			</div>

			<div className='footer-copyright py-3'>
				<p>© 2021 Copyright:E-voucher selling system</p>

			</div>
		</footer >
	);
}

export default Footer;
