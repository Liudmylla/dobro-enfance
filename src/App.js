import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Container } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
  return (
    <Container>
      {/* <Header /> */}
      <ImageList>
        <ImageListItem key="Subheader" cols={3}>
          <ListSubheader component="div" style={{ textAlign: "center" }}>
            {" "}
            <img
              src="https://i.ibb.co/pxbPV05/logo-web.jpg"
              alt="logo-web"
              border="0"
            />
          </ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Footer />
    </Container>
  );
}

const itemData = [
  {
    img: "https://i.ibb.co/qMhN3qc/Whats-App-Image-2022-03-03-at-09-46-04-1.jpg",
    title: "Confit de canard",
    author: "Тушенка",
  },
  {
    img: "https://i.ibb.co/LS1QM1y/Whats-App-Image-2022-03-04-at-18-06-48.jpg",
    title: "Le camion est partis pour la frontière polonaise",
    author: "Грузовик выехал к польской границе",
  },
  {
    img: "https://i.ibb.co/RTwf9vv/remerciement.jpg",
    title: "Un camion 20m3 préparé par les volontaires ",
    author: " et payé par la mairie de Bayonne est parti vendredi 04.03.22",
  },
  {
    img: "https://i.ibb.co/dfwcgP5/c4705daf-c02d-41bc-88bb-59bfe1f7b26c.jpg",
    title: "Aide pour les enfants ukrainiens",
    author: "Помощь детям Украины",
  },
  // {
  //   img: "https://i.ibb.co/dp4mVJT/1e90f60f-07d8-4208-b6c4-60dcecc38bb6.jpg",
  //   title: "Le camion est pret à partir",
  //   author: "Грузовик загружен и готова к выезду",
  //   rows: 2,
  //   cols: 2,
  //   featured: true,
  // },
  {
    img: "https://i.ibb.co/Kz28RYb/sig-image.jpg",
    title: "La mobilisation de gens était sans précédent",
    author: "Реакция людей была беспрецедентной",
  },

  {
    img: "https://i.ibb.co/sgCYFmR/Whats-App-Image-2022-03-04-at-17-38-48.jpg",
    title: "Les bénévoles",
    author: "Волонтеры",
  },

  // {
  //   img: "https://i.ibb.co/wdSmwDt/98c2cf77-d2a6-49c7-83cf-6b464b748908.jpg",
  //   title: "Dons en soutien aux populations ukrainiennes",
  //   author: "Помощь украинскому народу",
  //   rows: 2,
  //   cols: 2,
  //   featured: true,
  // },
  // {
  //   img: "https://i.ibb.co/W5p6sCP/e35ecf41-2ef1-4eb6-beee-25c8ac239571.jpg",
  //   title: "L'aide humanitaire",
  //   author: "Гуманитарная помощь",
  //   rows: 2,
  //   cols: 2,
  //   featured: true,
  // },
  // {
  //   img: "https://i.ibb.co/mGf2q63/bf29e783-0178-4152-b21e-d73591be32ec.jpg",

  //   title: "L'aide humanitaire",
  //   author: "Гуманитарная помощь",
  //   rows: 2,
  //   cols: 2,
  //   featured: true,
  // },
];
