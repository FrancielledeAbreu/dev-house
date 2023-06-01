// jest.setup.js

// Mock global para TextEncoder
jest.mock("text-encoding", () => ({
  TextEncoder: class {
    encode() {
      return {
        length: 0,
        buffer: new ArrayBuffer(0),
      };
    }
  },
}));

// Outras configurações ou imports globais
