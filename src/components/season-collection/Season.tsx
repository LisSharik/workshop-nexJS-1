"use client";
import CategoryCard from "@/components/season-collection/CategoryCard";
import BtnViewMore from "@/components/Btn.viewmore";

export default function Season() {
  const categories = [
    {
      image:
        "https://img.freepik.com/foto-gratis/adolescente-sombrero-cubo-beige-sesion-moda-callejera_53876-105038.jpg",
      title: "Women's",
      items: 23,
    },
    {
      image:
        "https://img.freepik.com/foto-gratis/vista-angulo-joven-empresario-pie-contra-pared-mirando-lejos_23-2148176118.jpg",
      title: "Men's",
      items: 9,
    },
    {
      image:
        "https://img.freepik.com/foto-gratis/joven-modelo-demostrando-joyas-caras_7502-7043.jpg",
      title: "Jewelry",
      items: 31,
    },
    {
      image:
        "https://img.freepik.com/fotos-premium/par-comodos-zapatos-deportivos-azules-zapateria-fondo-azul_474717-65854.jpg",
      title: "Sneakers",
      items: 21,
    },
    {
      image:
        "https://img.freepik.com/foto-gratis/expositor-bolsos-mujer-levitando_23-2149817600.jpg",
      title: "Bags",
      items: 5,
    },
    {
      image:
        "https://img.freepik.com/foto-gratis/chica-guapa-posando-sensualmente-tocando-su-rostro-mano-caminando-calle-exotica-atractiva-mujer-joven-cabello-lacio-castano-descansando-resort-fin-semana-verano_197531-3048.jpg",
      title: "Glasses",
      items: 14,
    },
  ];

  return (
    <div className="season-content bg-[#f9f8f3] h-[75vh] flex flex-col justify-center items-center gap-20 px-12 py-20 ">
      <div className="w-full flex justify-between items-center ">
        <h2 className="text-3xl">Season Collection</h2>
        <BtnViewMore text="View all categories" color="neutral-900" />
        
      </div>

      <div className="flex h-4/5 w-full justify-around items-start">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            {...category}
          />
        ))}
      </div>
    </div>
  );
}
