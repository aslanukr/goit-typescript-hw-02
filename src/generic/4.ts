/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {
    this.props = props;
  }
}

interface PageInfo {
  title: string;
}

class Page extends Component<PageInfo> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
