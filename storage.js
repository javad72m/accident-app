// storage.js
const smartStorage = {
  async set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (err) {
      console.error("❌ خطا در ذخیره:", err);
      return false;
    }
  },
  async get(key) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : null;
    } catch (err) {
      console.error("❌ خطا در خواندن:", err);
      return null;
    }
  },
  async remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error("❌ خطا در حذف:", err);
    }
  },
  async clear() {
    localStorage.clear();
  }
};