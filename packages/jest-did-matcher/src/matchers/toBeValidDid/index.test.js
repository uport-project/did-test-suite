import each from 'jest-each';

import matcher from './';

expect.extend(matcher);

describe('.toBeValidDid', () => {
  each([
    ["did:example:123"],
    ["did:example:123456789abcdefghi"],
    ["did:example:123456789-abcdefghi"],
    ["did:example:123456789_abcdefghi"],
    ["did:example:123456789%20abcdefghi"]
  ]).test('passes when the item is a valid DID: %s', given => {
    expect(given).toBeValidDid();
  });
});

describe('.not.toBeValidDid', () => {
  each([
    ["STRING"],
    [false],
    [0],
    [undefined],
    [null],
    [NaN],
    ["did:"],
    ["did:example"],
    ["did:example:123#ZC2jXTO6t4R501bfCXv3RxarZyUbdP2w_psLwMuY6ec"],
    ["did:example:123#keys-1"]
  ]).test('passes when the item is not a valid DID: %s', given => {
    expect(given).not.toBeValidDid();
  });
});
