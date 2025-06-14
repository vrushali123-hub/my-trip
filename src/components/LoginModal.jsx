
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const LoginModal = ({ show, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isLogin ? 'Login' : 'Create Account'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address or Mobile</Form.Label>
            <Form.Control type="email" placeholder="Enter email or mobile" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mb-2">
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </Form>

        <div className="text-center mt-2">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <Button variant="link" onClick={() => setIsLogin(false)}>
                Create Account
              </Button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <Button variant="link" onClick={() => setIsLogin(true)}>
                Login
              </Button>
            </>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;









