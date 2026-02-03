import { beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SideBar from '../components/SideBar';
import fs from 'fs';
import path from 'path';

let dom;
let document;
const html = fs.readFileSync(
  path.resolve(__dirname, '../components/SideBar.jsx'),
  'utf8'
);
const codes = html.replaceAll(/(?:\r\n|\r|\n| )/g, '');

beforeEach(() => {
  dom = render(<SideBar />);
  document = dom.container;
});

/* test("4 categori de SideBar'da görünüyor.", async () => {
  await screen.findByText('electronics');
  await screen.findByText('jewelery');
  await screen.findByText("men's clothing");
  await screen.findByText("women's clothing");
}); */

test('SideBarda useEffect kullanılmış ve sayfa mount olduğunda kategoriler yükleniyor.', () => {
  expect(codes.includes('useEffect(')).toBe(true);
  expect(codes.includes(',[])')).toBe(true);
});

test('useEffect ve axios import edilmiş ve kullanılmış.', () => {
  expect(codes.includes('axios.get(')).toBe(true);
  expect(codes.includes('importaxiosfrom')).toBe(true);
  expect(codes.includes('https://fakestoreapi.com/products/categories')).toBe(
    true
  );
});

test('useEffect içinde axios kullanılmış.', () => {
  expect(codes.includes('axios.get(')).toBe(true);
  expect(codes.includes('https://fakestoreapi.com/products/categories')).toBe(
    true
  );
});

test('Başlangıç değeri boş array olan bir state tanımlanmış', () => {
  expect(codes.includes('useState([])')).toBe(true);
});

test('CategoryList componentine categories propu ile kategoriler iletiliyor', () => {
  expect(codes.includes('<CategoryListcategories=')).toBe(true);
});
