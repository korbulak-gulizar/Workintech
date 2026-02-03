import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const initialForm = {
  email: '',
  password: '',
};

export default function Login() {
  // localStorage'dan email çek
  const savedEmail = localStorage.getItem('email');
  initialForm.email = savedEmail ? savedEmail : '';

  const [form, setForm] = useState(initialForm);
  const history = useHistory();

  const handleChange = (event) => {
    let { name, value, type } = event.target;
    value = type === 'checkbox' ? event.target.checked : value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.email.length === 0 || form.password.length === 0) return;

    axios
      .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
      .then((res) => {
        const user = res.data.find(
          (item) => item.password === form.password && item.email === form.email
        );
        if (user) {
          // email'i localStorage'a kaydet
          localStorage.setItem('email', form.email);

          setForm(initialForm);
          history.push('/main');
          toast.success(`Merhaba ${user.name}, tekrar hoş geldin.`);
        } else {
          history.push('/error');
          toast.error('Girdiğiniz bilgilerle bir kullanıcı bulamadık.');
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
          value={form.email}
          data-testid="email-input"
          autoFocus={!savedEmail} // email yoksa autoFocus email input
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
          value={form.password}
          data-testid="password-input"
          autoFocus={!!savedEmail} // email varsa autoFocus password input
        />
      </FormGroup>
      <FormGroup className="text-center p-4">
        <Button
          disabled={form.email.length === 0 || form.password.length === 0}
          color="primary"
        >
          Sign In
        </Button>
      </FormGroup>
    </Form>
  );
}
