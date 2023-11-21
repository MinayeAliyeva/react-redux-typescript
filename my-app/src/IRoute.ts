export interface IRoute {
    path: string;
    element: React.ComponentType | React.ReactNode;
    children?: Array<IRoute>;
  }
  