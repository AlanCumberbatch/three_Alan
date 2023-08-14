export type LinkGroup = {
  id: String,
  name: String,
  children: LinkType
  // icon: React.HTMLProps<HTMLImageElement>,
  icon: JSX.IntrinsicElements['img'],
};
export type LinkType = {
  name: String,
  value: String
};