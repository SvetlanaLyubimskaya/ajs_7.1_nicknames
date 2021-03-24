import Validator from '../app';

const validator = new Validator(); // созд новый класс
validator.validateUsername(); // присв ему метод

test('Validator1', () => {
  expect(validator.validateUsername('Svetlana')).toBe(true);
});

test('Validator2', () => {
  expect(validator.validateUsername('1Svetlana')).toBe(false);
});

test('Validator3', () => {
  expect(validator.validateUsername('Svetlana_')).toBe(false);
});

test('Validator4', () => {
  expect(validator.validateUsername('Svet-lana')).toBe(true);
});

test('Validator5', () => {
  expect(validator.validateUsername('svet_lana')).toBe(true);
});

test('Validator6', () => {
  expect(validator.validateUsername('Svet1234lana')).toBe(false);
});

test('Validator7', () => {
  expect(validator.validateUsername('SvetlanaЛю')).toBe(false);
});
