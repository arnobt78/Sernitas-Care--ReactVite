import { motion } from "framer-motion";
import { useState } from "react";
import { slideUp } from "../../utility/animation";
import CachedImage from "../CachedImage";
import CardModal from "./CardModal";
import { cardsData } from "./cardData"; // Import card data

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpenModal = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <div className="bg-slate-100">
      <div className="container py-16">
        {/* Section Title */}
        <motion.h2
          variants={slideUp(0.2)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-primary mb-10"
        >
          Weil Fürsorge bei uns Herzenssache ist
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              variants={slideUp(index * 0.2)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-primary/80 shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <CachedImage
                src={card.image}
                alt={card.title}
                className="w-16 h-16 border-2 border-bg-white rounded-full object-contain p-3"
              />
              <p className="text-lg text-white font-semibold">{card.title}</p>
              <p className="text-sm text-white/80 leading-relaxed">
                {card.description}
              </p>
              <button
                onClick={() => handleOpenModal(card)}
                className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                WEITERLESEN
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <CardModal
          isOpen={!!selectedCard}
          onClose={handleCloseModal}
          cardData={selectedCard}
        />
      )}
    </div>
  );
};

export default Cards;
