import { Divider, Typography } from "@mui/material";

const Hr = () => {
  return <Divider variant="middle" />;
};
const custom = {
  h1: (props) => <Typography {...props} color="primary.main" variant="h1" />,
  h2: (props) => <Typography {...props} variant="h2" />,
  h3: (props) => <Typography {...props} variant="h3" />,
  h4: (props) => <Typography {...props} variant="h4" />,
  h5: (props) => <Typography {...props} variant="h5" />,
  h6: (props) => <Typography {...props} variant="h6" />,
  p: (props) => <Typography {...props} variant="body1" />,
  p2: (props) => <Typography {...props} variant="body2" />,
  hr: (props) => <Divider {...props} variant="full" />,
  hr1: (props) => Hr,
};
export default custom;
