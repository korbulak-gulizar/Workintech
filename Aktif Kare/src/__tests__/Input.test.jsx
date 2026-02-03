import { beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../components/Input';

beforeEach(() => {
  render(<Input />);
});

test('Input alanına metin girdikçe hemen üstünde #output alanında metin görünüyor.', async () => {
  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: '1234' } });
  expect(
    await screen.findByText(/1234/, undefined, {
      timeout: 250,
    })
  ).toBeDefined();
});

test('Input alanına girilen metinler #output alanında büyük harfe dönüştürülüyor.', async () => {
  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: 'emre' } });
  expect(
    await screen.findByText(/EMRE/, undefined, {timeout: 250})
  ).toBeDefined();
});

test('Input alanına girilen metinler 10 karakterden küçükse yazı rengi royalblue oluyor', async () => {
  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: 'emre' } });
  const element = await screen.findByText(/EMRE/, undefined, {
    timeout: 250,
  });
  expect(getComputedStyle(element).color).toBe('rgb(65, 105, 225)'); //royalblue
});

test('Input alanına girilen metinler 10 karakterden büyükse yazı rengi crimson oluyor', async () => {
  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: 'emre5678901' } });
  const element = await screen.findByText(/EMRE5678901/, undefined, {
    timeout: 250,
  });
  expect(getComputedStyle(element).color).toBe('rgb(220, 20, 60)'); //crimson
});

test('Reset Butonu input alanının ve #output alanındaki metni sıfırlıyor', async () => {
  const input = screen.getByTestId('input');
  fireEvent.change(input, { target: { value: 'emre5678901' } });
  const element = await screen.findByText(/EMRE5678901/, undefined, {
    timeout: 250,
  });
  expect(element).toBeDefined();

  const reset = screen.getByText('Reset');
  fireEvent.click(reset);
  const elementfinal = screen.queryByText(/EMRE5678901/, undefined, {
    timeout: 250,
  });
  expect(elementfinal).toBe(null);
  expect(input.value).toBe('');
});

