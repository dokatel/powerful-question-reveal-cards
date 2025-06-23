
import React from 'react';

const PowerfulQuestions = () => {
  const questions = [
    {
      title: "🌟 Abondance et Réalisation",
      bullets: [
        "Comment attirer davantage d'abondance dans ma vie ?",
        "Que dois-je faire pour débloquer mon potentiel d'abondance ?",
        "Quelle leçon devrais-je apprendre pour avancer ?",
        "Que puis-je faire concrètement pour améliorer mon bien-être quotidien ?",
        "Que puis-je attendre de ce prochain trimestre dans ma vie ?"
      ]
    },
    {
      title: "💔 Relations et Vie Amoureuse",
      bullets: [
        "Pourquoi suis-je encore célibataire ? Qu'est-ce qui m'en empêche ?",
        "Comment puis-je attirer mon âme sœur dans ma vie ?",
        "Pourquoi me retrouve-je toujours dans des relations similaires ?",
        "Ma relation avec [X] est-elle saine ? Comment la renforcer ?",
        "Pourquoi est-ce que je suis toujours célibataire ?"
      ]
    },
    {
      title: "🌿 Blessures, Blocages et Émotions",
      bullets: [
        "Comment retrouver la confiance en moi ?",
        "Comment puis-je me libérer de mes blessures passées ?",
        "Quelles croyances limitantes m'empêchent d'avancer sereinement ?",
        "Pourquoi me sens-je triste ou fatigué(e) en ce moment ?",
        "D'où proviennent mes blessures profondes ?",
        "Comment retrouver la paix intérieure et apaiser mon esprit ?",
        "Comment puis-je couper les liens toxiques avec une personne spécifique ?"
      ]
    },
    {
      title: "🔮 Spiritualité, Intuition et Mission",
      bullets: [
        "Quelle est la prochaine étape dans mon cheminement spirituel ?",
        "Comment augmenter mon taux vibratoire pour attirer le positif ?",
        "Comment puis-je me reconnecter plus profondément à mon âme ?",
        "De quoi mon âme a-t-elle réellement besoin en ce moment ?",
        "Quel est le nœud karmique qui me freine dans mon évolution ?",
        "Quel message mes guides spirituels souhaitent-ils que je reçoive ?",
        "Quelle est ma véritable mission dans la vie ?",
        "Suis-je sur la bonne voie actuellement ?"
      ]
    },
    {
      title: "🧭 Clarté, Décision et Alignement",
      bullets: [
        "Que puis-je faire pour sortir de cette période de stagnation ?",
        "Comment être plus efficace et aligné(e) dans mon travail ?",
        "Mon travail actuel est-il vraiment aligné avec mes aspirations ?",
        "Que puis-je faire pour avancer sereinement dans la direction que je désire ?"
      ]
    }
  ];

  return (
    <section style={{ backgroundColor: '#F0F1F9' }} className="py-8 sm:py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            style={{ color: '#57478D' }}
          >
            🎁 BONUS N°3 : QUESTIONS PUISSANTES
          </h2>
          <div 
            className="text-sm sm:text-base md:text-lg max-w-4xl mx-auto mb-6 sm:mb-8 space-y-3 sm:space-y-4"
            style={{ color: '#57478D' }}
          >
            <p className="font-medium">
              Ces questions sont conçues pour t'aider à développer une connexion plus profonde avec ton oracle, renforcer ton intuition et obtenir des réponses claires et éclairantes.
            </p>
            <div className="text-left max-w-2xl mx-auto">
              <p className="font-semibold mb-2">💡 Utilise-les :</p>
              <ul className="space-y-1 text-sm sm:text-base">
                <li>• Avant un tirage, pour poser une question précise</li>
                <li>• En séance, pour explorer une problématique</li>
                <li>• En auto-tirage, pour te recentrer ou progresser</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {questions.slice(0, 4).map((question, index) => (
            <div
              key={index}
              className="group relative [perspective:1000px] h-64 sm:h-80 md:h-96"
            >
              {/* Container avec effet flip */}
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Face avant - Titre */}
                <div 
                  className="absolute inset-0 p-4 sm:p-6 rounded-2xl shadow-lg flex items-center justify-center [backface-visibility:hidden]"
                  style={{ backgroundColor: '#57478D' }}
                >
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white text-center leading-tight">
                    {question.title}
                  </h3>
                </div>

                {/* Face arrière - Questions */}
                <div 
                  className="absolute inset-0 p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-y-auto"
                  style={{ backgroundColor: '#F4C675' }}
                >
                  <ul className="space-y-1 sm:space-y-2 md:space-y-3 h-full flex flex-col justify-center">
                    {question.bullets.map((bullet, bulletIndex) => (
                      <li 
                        key={bulletIndex}
                        className="flex items-start"
                        style={{ color: '#57478D' }}
                      >
                        <span 
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0"
                          style={{ backgroundColor: '#57478D' }}
                        ></span>
                        <span className="text-xs sm:text-sm font-medium leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cinquième carte centrée */}
        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
          <div
            className="group relative [perspective:1000px] w-full max-w-md h-64 sm:h-80 md:h-96"
          >
            {/* Container avec effet flip */}
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* Face avant - Titre */}
              <div 
                className="absolute inset-0 p-4 sm:p-6 rounded-2xl shadow-lg flex items-center justify-center [backface-visibility:hidden]"
                style={{ backgroundColor: '#57478D' }}
              >
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white text-center leading-tight">
                  {questions[4].title}
                </h3>
              </div>

              {/* Face arrière - Questions */}
              <div 
                className="absolute inset-0 p-3 sm:p-4 md:p-6 rounded-2xl shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-y-auto"
                style={{ backgroundColor: '#F4C675' }}
              >
                <ul className="space-y-1 sm:space-y-2 md:space-y-3 h-full flex flex-col justify-center">
                  {questions[4].bullets.map((bullet, bulletIndex) => (
                    <li 
                      key={bulletIndex}
                      className="flex items-start"
                      style={{ color: '#57478D' }}
                    >
                      <span 
                        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 mt-1 sm:mt-2 flex-shrink-0"
                        style={{ backgroundColor: '#57478D' }}
                      ></span>
                      <span className="text-xs sm:text-sm font-medium leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section d'astuce */}
        <div className="text-center">
          <div 
            className="inline-block p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg max-w-4xl"
            style={{ backgroundColor: '#F4C675' }}
          >
            <h3 
              className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4"
              style={{ color: '#57478D' }}
            >
              💬 Astuce EF
            </h3>
            <p 
              className="text-sm sm:text-base md:text-lg leading-relaxed"
              style={{ color: '#57478D' }}
            >
              Tire une carte par question ou choisis une thématique par semaine pour nourrir ta pratique et explorer tes véritables réponses intérieures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerfulQuestions;
