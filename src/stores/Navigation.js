import { action, observable } from 'mobx';


class Navigation {

  @observable active = 'home';

  isActive(name) {
    return this.active === name;
  }

  @action.bound
  setActive(name) {
    this.active = name;
  }
}

export default Navigation;
