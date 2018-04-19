function createSerialGenerator(number = 0) {
  return function nextSerial() {
    return number++;
  }
}

const serial = createSerialGenerator();

export default serial;
