export const state = {
  data: {
    nombre: "default",
  },
  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },
  addItem(item: string) {
    const cb = this.getState();
    cb.nombre.push(item);
    this.setState(cb);
  },
};
