import { test, expect } from '@playwright/test';

const PUBLIC_ROUTES = [
  { path: '/', heading: /Lived-In Color/i },
  { path: '/services', heading: /Our Groovy Services/i },
  { path: '/gallery', heading: /Hair Services Gallery/i },
  { path: '/bridal', heading: /Bridal Hair Services/i },
  { path: '/about', heading: /Meet Raquel Nicole/i },
  { path: '/contact', heading: /Visit The Beauty Bar/i },
  { path: '/book', heading: /Book Your Appointment/i },
] as const;

test.describe('Public site smoke', () => {
  for (const { path, heading } of PUBLIC_ROUTES) {
    test(`${path} renders hero and primary booking CTA`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');

      await expect(page.getByRole('heading', { name: heading }).first()).toBeVisible();
      await expect(page.getByRole('link', { name: 'Beauty by Raquel Nicole home' })).toBeVisible();
      await expect(page.getByRole('link', { name: 'Book Appointment' }).first()).toBeVisible();
    });
  }

  test('homepage shows salon location context', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await expect(page.getByText(/The Beauty Bar, Floor 2/i).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: /Stay Groovy/i })).toBeVisible();
  });

  test('services page filters color work Raquel requested', async ({ page }) => {
    await page.goto('/services');
    await page.waitForLoadState('networkidle');

    const colorFilter = page.getByRole('button', { name: 'Color & Highlights' });
    if (!(await colorFilter.isVisible())) {
      await page.getByRole('button', { name: 'Show Filters' }).click();
    }
    await colorFilter.click();

    await expect(page.getByRole('heading', { name: 'Root Retouch and Haircut' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Money piece/face frame foils' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'The Full and Haircut' })).toBeVisible();
    await expect(page.getByText(/All over one solid color and haircut/i)).toBeVisible();
  });

  test('bridal page shows approved rates', async ({ page }) => {
    await page.goto('/bridal');
    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading', { name: 'Bridal Hair Rates' })).toBeVisible();
    await expect(page.getByText('$95').first()).toBeVisible();
    await expect(page.getByText('$80').first()).toBeVisible();
    await expect(page.getByText('$45').first()).toBeVisible();
    await expect(page.getByText(/4 people minimum/i)).toBeVisible();
  });

  test('contact page includes map and directions', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');

    await expect(page.getByText(/middle door on the front of the building/i).first()).toBeVisible();
    await expect(page.locator('iframe[title*="The Beauty Bar"]')).toBeVisible();
    await expect(page.getByRole('link', { name: /Open directions in Google Maps/i })).toHaveAttribute(
      'href',
      /google\.com\/maps/,
    );
  });

  test('book page supports Square booking and pre-booking questions', async ({ page }) => {
    await page.goto('/book');
    await page.waitForLoadState('networkidle');

    await expect(page.getByText(/Questions before you book/i)).toBeVisible();
    await expect(page.getByRole('link', { name: '(513) 330-2277' }).first()).toHaveAttribute(
      'href',
      'tel:+15133302277',
    );
    await expect(page.locator('#square-booking-widget')).toBeVisible();
  });

  test('footer contact details match Raquel review answers', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();

    await expect(footer.getByRole('link', { name: '(513) 330-2277' })).toHaveAttribute(
      'href',
      'tel:+15133302277',
    );
    await expect(footer.getByRole('link', { name: 'raquel.pmts2019@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:raquel.pmts2019@gmail.com',
    );
    await expect(footer.getByText(/The Beauty Bar, Floor 2/i)).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Instagram', exact: true })).toHaveAttribute(
      'href',
      /instagram\.com\/beauty_by_raquel_nicole/,
    );
  });

  test('primary book links point to Square with maroon theme', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const bookLink = page.getByRole('link', { name: 'Book Appointment' }).first();
    await expect(bookLink).toHaveAttribute('href', /book\.squareup\.com/);
    await expect(bookLink).toHaveAttribute('href', /color=a43716/);
  });

  test('404 page keeps site chrome', async ({ page }) => {
    await page.goto('/this-route-does-not-exist');
    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Back to home' })).toBeVisible();
  });
});

test.describe('Mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('mobile menu opens and navigates to services', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    await page.getByRole('button', { name: 'Toggle menu' }).click();
    await page.locator('header nav').getByRole('link', { name: 'Services' }).click();

    await expect(page).toHaveURL(/\/services$/);
    await expect(page.getByRole('heading', { name: /Our Groovy Services/i }).first()).toBeVisible();
  });
});
