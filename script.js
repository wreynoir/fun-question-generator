const localQuestions = [
    "What's your favorite ice cream flavor?",
    "If you could travel anywhere, where would you go?",
    "What is your best hot take?",
    "You’re pushed into the middle of a wedding dance circle. What move to your break out?",
    "What is the biggest red flag about yourself?",
    "Which fictional world (movie, TV show, book, etc.) would you want to be in, and what role would you play?",
    "What is one super niche skill you are sneakily elite at? I’m talking top 1% of humanity.",
    "If money wasn’t an obstacle, where would you travel to for 2-4 weeks?",
    "What was your road-trip movie growing up?",
    "Who is your favorite Disney princess/prince? Who do you think is the hottest Disney princess/prince?",
    "You are on a road trip and you can only select one snack at a gas station/convenience store. What are you selecting?",
    "Jessie’s girl, or Stacy’s mom?",
    "What is your death row meal?",
    "What book do you want on your coffee table when guests come over?",
    "Is there one instrument you want to learn how to play and what is the first song you would want to learn?",
    "What is your favorite story that a song portrays?",
    "What song are you singing to get a chair to turn on The Voice?",
    "Who is your celebrity pass (aka, the one celebrity you are allowed to get with if the opportunity presents itself)?",
    "You’re a professional baseball player. What is your walkout song?",
    "Rank your college semesters 1-8.",
    "What song growing up did you make up the wrong lyrics to?",
    "You’re at a stadium event and you can only get one snack or food, what are you getting?",
    "Was there one big news story or piece of info that you knew before anyone else?",
    "What is the weirdest wake-up moment you ever had?",
    "What is your most under-the-gun moment driving a car?",
    "What was the biggest rush you’ve ever been in?",
    "If you could get one exotic pet, and it wouldn’t kill you, what would you get?",
    "What thing would make you the happiest if you found it? What thing would make you the saddest if you lost it?",
    "Tell me about a dream you vividly remember. Did you have a recurring dream growing up?",
    "The craziest way you lost a tooth growing up?",
    "What was your best or funniest zoom memory?",
    "What is the craziest ‘small world’ moment you’ve ever had?",
    "What is the one thing someone would have to wear that would make you stand up and leave on a first date?",
    "What was your closest near-death experience?",
    "Who is the one person you would call if they had to pick up? Who is the one person you would not call?",
    "If you can have dinner with one person dead or alive, who would it be?",
    "What is the one superpower you wish you had? What would you do with it?",
    "Tell the shortened story of the time you were the most scared in your life.",
    "Tell the shortened story of the happiest moment in your life.",
    "What's the worst injury you have ever received (or if you're closer) / what is the closest near-death experience you've had? What happened? What did you learn from that?",
    "If you could be an animal, real or fictional, what would you be? Why did you choose that?",
    "If you could change or eliminate one event in your past that wouldn't impact the outcomes of your life now, what event would that be?",
    "What do you see as the most significant event that changed the course of your life?",
    "What do you see as the most significant event that changed your outlook on life in general?",
    "If you could provide one piece of advice to someone (three questions) younger/peer/older, what would that piece of advice be and why did you choose that?",
    "If you could get away with anyone one crime, what would it be....and why?",
    "What are your three wishes if you were Aladdin?",
    "What song do you relate to the most?",
    "What food will you not eat at all?",
    "What is your favorite ‘scrolling through the TV channels’ movie?",
    "What was the best meal that you shared with someone where neither person exchanged words?",
    "What would you give a TED talk on?",
    "If you could be anyone for a day, who would you be?",
    "What’s your favorite TV game show?",
    "What is your dream home and what does it look like?",
    "What is your most embarrassing fear?",
    "If you had a tiny angel and devil on your shoulders influencing your decisions, what fictional characters would you want them to be? (From UVA Lauren who I met in DC)",
    "If you could have a small apartment/shack, decent condo/house, and dream home in any city, what 3 cities would you choose for each one? (Em from NYC)",
    "What was your best vacation ever?",
    "When and how did you learn Santa is not real? (Claudia)",
    "Would you like to be famous, and if so, in what way?",
    "Who is your favorite movie, TV, and book characters of all time?",
    "You’re by yourself for an entire year (not stranded island, still have food, water, and shelter) and you can only bring one movie, one book, and one album, what are you bringing?",
    "What was your ‘welcome to college’ moment?",
    "What is something you are passionate about, and how did you discover that passion?",
    "Tell me about a person who had a significant influence in your life and why are they important to you.",
    "What is the most memorable book you’ve ever read, and what impact did it have on you?",
    "Tell me about a time you took a risk and it paid off.",
    "What is something you’ve always wanted to learn or try, but haven’t had the opportunity to do so?",
    "What is the dream piece of art you’d want to own in your home?",
    "If you wrote a book about yourself, what would it be called?",
    "What’s a snack that once you start eating, you can’t stop?",
    "If you could have a dream concert with an opener, middle act, and main act, what 3 artists are you choosing?",
    "If you could put any franchise restaurant in your house, what would it be?",
    "If you were in a loop for eternity, and could only do one thing, what would it be?",
    "Favorite movie theme song/soundtrack?",
    "What is the best theme song scene in movies?",
    "Would you want to know when, and how you die or not?",
    "Do you think you’re more fun or funnier?",
    "What conversation would you want to be a fly on the wall in?",
    "What character do you pick when playing Mario Kart?",
    "What is more appropriate to judge someone on getting with a different person, age or stage in life?",
    "If you could grow up in a different time than what you’re in, what would you choose?",
    "If you owned a race horse, what would its name be?",
    "If you had a friend that was on a game show and they used their “phone a friend” on you, what topic would you expect the question to be about?",
    // Add more questions as needed
];

let snowTimeout;

document.getElementById('generateQuestion').addEventListener('click', function() {
    const questionBox = document.getElementById('questionDisplay');
    const randomIndex = Math.floor(Math.random() * localQuestions.length);
    const question = localQuestions[randomIndex];
    
    questionBox.textContent = question;

    // Add the shake class and remove it after animation
    questionBox.classList.add('shake');
    setTimeout(() => questionBox.classList.remove('shake'), 500); // Corresponds to animation duration

    // JavaScript for creating falling snowflakes
    function createSnowflake() {
        const snowFlake = document.createElement('div');
        snowFlake.classList.add('snowflake');
        snowFlake.textContent = '❄';
        snowFlake.style.left = Math.random() * 100 + 'vw';
        snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Randomize speed
        snowFlake.style.opacity = Math.random();
        snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';
    
        document.getElementById('snowflakesContainer').appendChild(snowFlake);
    
        setTimeout(() => {
            snowFlake.remove();
        }, 5000);
    }
    
    setInterval(createSnowflake, 300); // Adjust frequency of falling snowflakes    

});