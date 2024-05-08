import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";

export default function Comp2() {
  return (
    <Card sx={{ width: 300 }}>
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginLeft: 12 }}
        >
          PLUS
        </Typography>
        <Typography sx={{ fontSize: 25, marginLeft: 7, marginTop: 1 }}>
          $9/month
        </Typography>
      </CardContent>
      <hr />
      <CardActions disableSpacing>
        <Typography>
          <CheckIcon /> Single User
        </Typography>
      </CardActions>
      <CardActions>
        <Typography disableSpacing>
          <CheckIcon /> 50GB Storage
        </Typography>
      </CardActions>
      <CardActions>
        <Typography disableSpacing>
          <CheckIcon /> Unlimited Public Projects
        </Typography>
      </CardActions>
      <CardActions>
        <Typography disableSpacing>
          <CheckIcon /> Community Access
        </Typography>
      </CardActions>
      <CardActions>
        <Typography disableSpacing>
          <CheckIcon /> Unlimited Private Projects
        </Typography>
      </CardActions>
      <CardActions>
        <Typography disableSpacing>
          <CheckIcon /> Dedicated Phone Support
        </Typography>
      </CardActions>
      <CardActions>
        <Typography disableSpacing>
          <CheckIcon /> Free Subdomain
        </Typography>
      </CardActions>
      <CardActions>
        <Typography disableSpacing>
          <CloseIcon /> Monthly Status Report
        </Typography>
      </CardActions>
      <CardActions>
        <Typography disableSpacing>
          <Button
            variant="contained"
            sx={{ width: 280, backgroundColor: "#4BA2FF", borderRadius: 10 }}
          >
            Button
          </Button>
        </Typography>
      </CardActions>
    </Card>
  );
}
