export default class Registry {

  private dependencies: {
    [name: string]: any
  }

  static instance: Registry;

  private constructor() {
    this.dependencies = {}
  }
  provide(name: string, dependecy: any) {
    this.dependencies[name] = dependecy
  }
  inject(name: string) {
    return this.dependencies[name];
  }
  static getIntance() {
    if (!Registry.instance) {
      Registry.instance = new Registry()
    }
    return Registry.instance
  }
}