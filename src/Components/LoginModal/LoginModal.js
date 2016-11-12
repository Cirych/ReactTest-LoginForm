import React, { PropTypes } from 'react';
import { Modal, Glyphicon } from 'react-bootstrap/lib';
import './LoginModal.css';

const LoginModal = ({ title, children, ...params }) => (
	<Modal
		{...params}
		aria-labelledby="contained-modal-title-lg"
		dialogClassName="LoginModal">
		<Modal.Header closeButton>
			<Modal.Title className='LoginModal-Title text-center'>
				<Glyphicon glyph="fire" className='LoginModal-Logo' /> {title}
			</Modal.Title>
		</Modal.Header>
		<Modal.Body className='text-center'>
			{children}
		</Modal.Body>
	</Modal>
);

LoginModal.propTypes = {
	title: React.PropTypes.string,
	bsSize: React.PropTypes.string,
	show: PropTypes.bool.isRequired,
	onHide: PropTypes.func.isRequired,
	children: React.PropTypes.element.isRequired
};

LoginModal.defaultProps = {
	title: "Login",
	bsSize: "small",
	show: false
};

export default LoginModal;