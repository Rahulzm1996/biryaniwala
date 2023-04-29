import React from "react";
import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to biryaniwala</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          provident similique obcaecati. Sit a doloremque iste itaque! Facere
          totam perferendis, dolorum similique sequi consectetur nostrum
          delectus error quam! Voluptas pariatur modi vero esse numquam maiores
          aut. Recusandae, nobis incidunt sunt reiciendis minima commodi
          laudantium officiis ullam nostrum, eligendi corporis ea placeat
          dolores amet iste facilis? Aspernatur quos quaerat pariatur,
          asperiores itaque ea repellat natus enim, saepe ipsum quibusdam
          voluptates quis dolor sequi sit eaque. Asperiores molestias harum
          officia dolore eaque nemo praesentium voluptas quae aliquid
          dignissimos tempora ratione repudiandae debitis minus eius est
          excepturi eos impedit, blanditiis rem fugit. Molestiae.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, optio a
          similique expedita quod quaerat placeat sunt, totam ipsa earum natus.
          Aut iste quas, id commodi, ipsam illo eaque quos hic, rerum mollitia
          ad quo facilis. Blanditiis, repellendus tempore soluta molestias iste
          adipisci recusandae enim expedita odit facilis et exercitationem
          obcaecati alias sint excepturi consequatur perferendis? Reiciendis,
          doloribus ipsa. A veritatis corporis nostrum natus animi nihil placeat
          recusandae, aliquam consequatur? Id consequatur molestias facilis
          dignissimos vero numquam earum soluta quo, dolore omnis autem ipsam
          commodi eos nulla possimus reiciendis laudantium et architecto.
          Deleniti fugiat inventore molestias reprehenderit, laborum enim
          aliquam.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
