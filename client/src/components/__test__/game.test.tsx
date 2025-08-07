/**
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react-dom/test-utils'
import Game from '../game';

vi.mock('../../../supabaseClient', () => ({
  supabase: {
    from: () => ({
      select: () => ({
        eq: () => Promise.resolve({ data: [{ words: 'cat' }], error: null }),
      }),
    }),
  },
}));

beforeEach(() => {
  window.alert = vi.fn();
});

describe('Wordlotl game test', () => {
  let container: HTMLElement;
  let root: Root;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    vi.useFakeTimers();
  });

  afterEach(() => {
    root.unmount();
    document.body.removeChild(container);
    vi.useRealTimers();
    vi.clearAllMocks();
  });

  it('renders LEVEL 1 and an empty 3 x 6 grid', async () => {
    await act(async () => {
      root.render(<Game />);
    });
    await vi.runAllTimersAsync();
    await Promise.resolve();
    const h2 = container.querySelector('h2');
    expect(h2?.textContent).toBe('LEVEL 1');

    const tiles = container.querySelectorAll('.tile');
    expect(tiles.length).toBe(3 * 6);
    tiles.forEach((t) => expect(t.textContent).toBe(''));
  });
});
