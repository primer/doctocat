import { Avatar, Box, Link, Text } from '@primer/react';
import { Tooltip } from '@primer/react/next';

test('check exports', () => {
  console.log('Avatar type:', typeof Avatar, Array.isArray(Avatar));
  console.log('Avatar keys:', Avatar && typeof Avatar === 'object' ? Object.keys(Avatar).slice(0,5) : 'N/A');
  console.log('Box type:', typeof Box, Box?.displayName);
  console.log('Tooltip type:', typeof Tooltip, Tooltip && typeof Tooltip === 'object' ? Object.keys(Tooltip).slice(0,5) : 'N/A');
  expect(typeof Avatar).not.toBe('undefined');
  expect(typeof Box).not.toBe('undefined');
  expect(typeof Tooltip).not.toBe('undefined');
});
