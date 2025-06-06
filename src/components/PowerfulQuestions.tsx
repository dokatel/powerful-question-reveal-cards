
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
    <section style={{ backgroundColor: '#F0F1F9' }} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#57478D' }}
          >
            🎁 BONUS N°3 : QUESTIONS PUISSANTES
          </h2>
          <div 
            className="text-lg max-w-4xl mx-auto mb-8 space-y-4"
            style={{ color: '#57478D' }}
          >
            <p className="font-medium">
              Ces questions sont conçues pour t'aider à développer une connexion plus profonde avec ton oracle, renforcer ton intuition et obtenir des réponses claires et éclairantes.
            </p>
            <div className="text-left max-w-2xl mx-auto">
              <p className="font-semibold mb-2">💡 Utilise-les :</p>
              <ul className="space-y-1 text-base">
                <li>• Avant un tirage, pour poser une question précise</li>
                <li>• En séance, pour explorer une problématique</li>
                <li>• En auto-tirage, pour te recentrer ou progresser</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {questions.map((question, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Carte principale */}
              <div 
                className="p-6 rounded-2xl shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl cursor-pointer min-h-[120px] flex items-center justify-center"
                style={{ backgroundColor: '#57478D' }}
              >
                <h3 className="text-lg font-bold text-white text-center leading-tight">
                  {question.title}
                </h3>
              </div>

              {/* Questions qui apparaissent au survol */}
              <div 
                className="absolute top-full left-0 right-0 mt-4 p-6 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-10"
                style={{ backgroundColor: '#F4C675' }}
              >
                <ul className="space-y-3">
                  {question.bullets.map((bullet, bulletIndex) => (
                    <li 
                      key={bulletIndex}
                      className="flex items-start"
                      style={{ color: '#57478D' }}
                    >
                      <span 
                        className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                        style={{ backgroundColor: '#57478D' }}
                      ></span>
                      <span className="text-sm font-medium leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Section d'astuce */}
        <div className="text-center">
          <div 
            className="inline-block p-8 rounded-2xl shadow-lg max-w-4xl"
            style={{ backgroundColor: '#F4C675' }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: '#57478D' }}
            >
              💬 Astuce EF
            </h3>
            <p 
              className="text-lg leading-relaxed"
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
