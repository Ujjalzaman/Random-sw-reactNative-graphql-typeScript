import { gql } from '@apollo/client';

export const listData = [
    {
        name: "Lorem ipsum dolor sit",
        img: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
        name: "amet consectetur adipisicing",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwiKRPFXGeydO5g8s2JTWd6O0r4vGch87Dv2tWX374S0Y0fXW3qObUTKwc6dNuNNCGkzM&usqp=CAU"
    },
    {
        name: "amet consectetur adipisicing",
        img: "https://static.remove.bg/remove-bg-web/a76316286d09b12be1ebda3b400e3f44716c24d0/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
    },
    {
        name: " consectetur adipisicing elit.",
        img: "https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg",
    },
    {
        name: " consectetur adipisicing elit.",
        img: "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg",
    },
    {
        name: " adipisicing elit.",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg"
    },
    {
        name: "consectetur adipisicing",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
    },
]

export const AllFilms = gql`
query GetPlanetFilms {
    allPlanets(first: 15) {
      edges {
        node {
          id
          name
          filmConnection {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      }
    }
  }
`;