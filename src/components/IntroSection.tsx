import React from 'react';

export function IntroSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Welcome to Apartments Horvat Pag
            </h2>
            <div className="prose prose-sm md:prose-lg text-gray-600">
              <p className="mb-4">
                The Horvat family invites you to escape from the mainland to the island of surprises 
                and enter the renaissance oasis of the Town of Pag via a unique rock desert.
              </p>
              <p className="mb-4">
                You cannot help but enjoy the harmony of beauty and simplicity, the game of white 
                stone and the sun, where the modern successfully combines with the traditional. 
                27 km of beaches and isolated Pag coves are waiting for you to explore.
              </p>
              <p className="mb-4">
                Apartments Horvat Pag and its hospitable hosts will satisfy everyone looking to 
                get away from the daily routine and have a pleasant holiday with their offer of 
                4 apartments and affordable prices.
              </p>
              <p className="font-medium text-blue-600">
                Welcome to the Town of Pag - the town of tourism on the island of surprises!
              </p>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <img 
              src="./img/general/intro.jpg"
              alt="Pag Island View" 
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white py-3 md:py-4 px-4 md:px-6 rounded-lg shadow-lg">
              <div className="text-xl md:text-2xl font-semibold">★★★</div>
              <div className="text-xs md:text-sm">Three-Star Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}