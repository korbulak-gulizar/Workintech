import { beforeEach, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import IletisimFormu from './IletisimFormu';

beforeEach(() => {
  render(<IletisimFormu />);
});

test('[1] hata olmadan render ediliyor', () => {
  expect(screen.getByText('İletişim Formu')).toBeInTheDocument();
});

test('[2] iletişim formu headerı render ediliyor', () => {
  const title = screen.getByText('İletişim Formu');
  expect(title).toBeInTheDocument();
});

test('[3] kullanıcı adını 5 karakterden az girdiğinde BİR hata mesajı render ediyor.', async () => {
  const name = screen.getByLabelText('Ad*');
  userEvent.type(name, '123');

  const error = await screen.findAllByTestId('error');
  expect(error).toHaveLength(1);
});

test('[4] kullanıcı inputları doldurmadığında ÜÇ hata mesajı render ediliyor.', async () => {
  const button = screen.getByRole('button');
  userEvent.click(button);

  const error = await screen.findAllByTestId('error');
  expect(error).toHaveLength(3);
});

test('[5] kullanıcı doğru ad ve soyad girdiğinde ama email girmediğinde BİR hata mesajı render ediliyor.', async () => {
  const name = screen.getByTestId('name-input');
  const lastname = screen.getByTestId('lastName-input');
  const button = screen.getByRole('button');

  userEvent.type(name, '12345');
  userEvent.type(lastname, '12345');
  userEvent.click(button);

  const error = await screen.findAllByTestId('error');
  expect(error).toHaveLength(1);
});

test('[6] geçersiz bir mail girildiğinde doğru hata mesajı render ediliyor', async () => {
  const name = screen.getByTestId('name-input');
  const lastname = screen.getByTestId('lastName-input');
  const email = screen.getByTestId('email-input');
  const button = screen.getByRole('button');

  // ✅ ad ve soyad doğru giriliyor
  userEvent.type(name, '12345');
  userEvent.type(lastname, '12345');

  // ❌ email geçersiz
  userEvent.type(email, 'abc');

  userEvent.click(button);

  // ✅ artık sadece 1 hata var → email hatası
  const error = await screen.findByText(
    'Hata: email geçerli bir email adresi olmalıdır.'
  );
  expect(error).toBeInTheDocument();
});

test('[7] soyad girilmeden gönderilirse "Hata: soyad gereklidir." mesajı render ediliyor', async () => {
  const name = screen.getByTestId('name-input');
  const email = screen.getByTestId('email-input');
  const button = screen.getByRole('button');

  userEvent.type(name, '12345');
  userEvent.type(email, 'test@test.com');
  userEvent.click(button);

  const error = await screen.findByText('Hata: soyad gereklidir.');
  expect(error).toBeInTheDocument();
});

test('[8] ad, soyad, email doğru girildiğinde mesaj boş olsa bile hata mesajı render edilmiyor.', async () => {
  const name = screen.getByTestId('name-input');
  const lastname = screen.getByTestId('lastName-input');
  const email = screen.getByTestId('email-input');
  const button = screen.getByRole('button');

  userEvent.type(name, '12345');
  userEvent.type(lastname, '12345');
  userEvent.type(email, 'test@test.com');
  userEvent.click(button);

  const error = screen.queryByTestId('error');
  expect(error).not.toBeInTheDocument();
});

test('[9] form gönderildiğinde girilen tüm değerler render ediliyor.', async () => {
  const name = screen.getByTestId('name-input');
  const lastname = screen.getByTestId('lastName-input');
  const email = screen.getByTestId('email-input');
  const message = screen.getByTestId('message-input');
  const button = screen.getByRole('button');

  userEvent.type(name, 'Gülizar');
  userEvent.type(lastname, 'Test');
  userEvent.type(email, 'test@test.com');
  userEvent.type(message, 'Merhaba');
  userEvent.click(button);

  expect(screen.getByText('Gülizar')).toBeInTheDocument();
  expect(screen.getByText('Test')).toBeInTheDocument();
  expect(screen.getByText('test@test.com')).toBeInTheDocument();
  expect(screen.getByText('Merhaba')).toBeInTheDocument();
});
