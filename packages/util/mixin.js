function createId() {
  return Math.random().toString(36).substring(3, 8);
}
export default {
  data() {
    return {
      uuid: createId(),
    };
  },
};
