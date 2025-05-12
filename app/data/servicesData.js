

import sistemesecuritate from "../../public/assets/Cards/sistemesecuritate.webp";
import supraveghere from "../../public/assets/Cards/supraveghere.webp";
import bariere from "../../public/assets/Cards/bariere.webp";
import porti from "../../public/assets/Cards/porti.webp";
import sistemeefractie from "../../public/assets/Cards/sistemeefractie.webp";
import sistemincendiu from "../../public/assets/Cards/sistemincendiu.webp";
import videointerfoane from "../../public/assets/Cards/videointerfoane.webp";
import casainteligenta from "../../public/assets/Cards/casainteligenta.webp";
import sistemeretea from "../../public/assets/Cards/sistemeretea.webp";
import proiectareSisteme from "./descriptionProiectareSisteme";
import proiectareSupraveghere from "./descriptionSistemeSupraveghere";

const servicesData = [
    {
        id: 1,
        SourceImage: sistemesecuritate,
        title: "Proiectare sisteme de securitate",
        Description: proiectareSisteme,
    },
    {
        id: 2,
        SourceImage: supraveghere,
        title: "Instalare și mentenanță supraveghere video",
        Description: proiectareSupraveghere,
    },
    { SourceImage: bariere, title: "Instalare și mentenanță bariere control acces" },
    { SourceImage: porti, title: "Instalare și mentenanță automatizări porți" },
    { SourceImage: sistemeefractie, title: "Instalare și mentenanță sistem efracție" },
    { SourceImage: sistemincendiu, title: "Instalare și mentenanță detectie incendiu" },
    { SourceImage: videointerfoane, title: "Instalare și mentenanță videointerfonie" },
    { SourceImage: casainteligenta, title: "Sisteme smart home și automatizări" },
    { SourceImage: sistemeretea, title: "Rețea voce-date (instalare și mentenanță)" },
];

export default servicesData;