export type ActionProps = {
  name: string;
  action: () => void;
  type?: "danger" | "basic";
};
