import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CarCard({ car }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {car.brand}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {car.model}
        </Typography>
        <Typography variant="body2">{`Dealer: ${car.dealer}`}</Typography>
        <Typography variant="body2">
          {`Mileage: ${car.min_mileage}-${car.max_mileage}`}
        </Typography>
      </CardContent>
    </Card>
  );
}
