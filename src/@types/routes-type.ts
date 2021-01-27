export type Route = {
  component: React.FC;
  path: string;
  exact: boolean;
  name: string;
};
