
import React from 'react';

const PowerfulQuestions = () => {
  const questions = [
    {
      title: "Questions de découverte",
      bullets: [
        "Qu'est-ce qui vous passionne vraiment ?",
        "Quels sont vos plus grands défis actuels ?",
        "Que feriez-vous si vous étiez certain de réussir ?",
        "Qu'est-ce qui vous empêche d'agir maintenant ?"
      ]
    },
    {
      title: "Questions de réflexion",
      bullets: [
        "Que vous dit votre intuition ?",
        "Comment cette situation vous fait-elle grandir ?",
        "Quelles leçons pouvez-vous en tirer ?",
        "Qu'est-ce qui est vraiment important pour vous ?"
      ]
    },
    {
      title: "Questions d'action",
      bullets: [
        "Quelle est la première étape concrète ?",
        "De quoi avez-vous besoin pour avancer ?",
        "Qui pourrait vous accompagner ?",
        "Comment mesurerez-vous vos progrès ?"
      ]
    },
    {
      title: "Questions de perspective",
      bullets: [
        "Comment verriez-vous cela dans 5 ans ?",
        "Que feriez-vous à la place de votre mentor ?",
        "Quelles opportunités cachées voyez-vous ?",
        "Comment transformer ce défi en force ?"
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
            Bonus n°3 : Questions Puissantes
          </h2>
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: '#57478D' }}
          >
            Découvrez des questions transformatrices qui révèlent des insights profonds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {questions.map((question, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Carte principale */}
              <div 
                className="p-8 rounded-2xl shadow-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl cursor-pointer"
                style={{ backgroundColor: '#57478D' }}
              >
                <h3 className="text-xl font-bold text-white text-center">
                  {question.title}
                </h3>
              </div>

              {/* Bullets points qui apparaissent au survol */}
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

        {/* Section d'appel à l'action */}
        <div className="text-center mt-16">
          <div 
            className="inline-block p-8 rounded-2xl shadow-lg"
            style={{ backgroundColor: '#F4C675' }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: '#57478D' }}
            >
              Prêt à transformer votre approche ?
            </h3>
            <p 
              className="text-lg mb-6"
              style={{ color: '#57478D' }}
            >
              Ces questions puissantes sont vos clés vers de nouveaux insights
            </p>
            <button 
              className="px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: '#57478D' }}
            >
              Commencer maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerfulQuestions;
