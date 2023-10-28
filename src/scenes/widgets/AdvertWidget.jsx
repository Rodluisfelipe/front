import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Patrocinado
        </Typography>
        <Typography color={medium}>Crear Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Go Burger</Typography>
        <Typography color={medium}>@goburger.col</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      🤩¡ES LA HORA DE UNA GO BURGER!🤩

Para el amor, para la felicidad y para disfrutar. 💛

¿Qué esperas para pedirla?

Escríbenos: 3105753538
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
