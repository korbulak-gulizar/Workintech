import { beforeEach, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

let dom;
let document;
beforeEach(() => {
  dom = render(<App />);
  document = dom.container;
});

test("Yorumlar componenti çalışır hale getirilmiş.", async () => {
  const arama = screen.queryAllByTestId('yorum-area');
  expect(arama).toHaveLength(7);
});

test('Yorumlar doğru şekilde ekrana geliyor', async () => {
  const yorum1 = screen.queryByText(/We've got more than just coffees!/i);
  const yorum2 = screen.queryByText(
    /Epic Street Fighter action here in Vegas!/i
  );
  expect(yorum1).not.toBe(null);
  expect(yorum2).not.toBe(null);
});
