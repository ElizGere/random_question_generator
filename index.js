const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener("click", () => {
  const visibility = navbar.getAttribute("data-visible");

  if(visibility === "false") {
    navbar.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    navbar.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
  console.log(visibility);
});






let btn = document.getElementById('btn');
let output = document.getElementById('output');
let introspective = document.getElementById('introspective');
let philosophical = document.getElementById('philosophical');
let getToKnow = document.getElementById('getToKnow');
let funQuiz = document.getElementById('funQuiz');


const introspectiveQuestions = [
  " What are my core values, and are they aligned with my actions? ",
  " What's the most significant regret I have, and how can I learn from it? ",
  " What are the things that make me feel most alive? ",
  " What's the biggest risk I've ever taken, and was it worth it? ",
  " What am I most proud of, and why? ",
  " What's the most challenging experience I've faced, and how did I overcome it? ",
  " What's the best advice I've ever received, and how has it shaped me? ",
  " What's the biggest lesson I've learned about myself in the past year? ",
  " What are my strengths, and how do I leverage them in my daily life? ",
  " What's the one thing I wish I could tell my younger self? ",
  " What's the most significant change I've made in my life, and what motivated it? ",
  " What's the thing I'm most looking forward to achieving in the next year? ",
  " What's the biggest sacrifice I've made for someone else, and was it worth it? ",
  " What's the most meaningful relationship in my life, and why is it so important to me? ",
  " What's the thing I'm most grateful for in my life right now? ",
  " What's the biggest fear I've overcome, and how did I do it? ",
  " What's the thing I'm most proud of accomplishing independently? ",
  " What's the most significant decision I've made recently, and how did it affect me? ",
  " What's the biggest misconception people have about me, and how do I plan to change that perception? ",
  " What's the thing I'm most passionate about outside of work or school? ",
  " What's the biggest step I need to take to achieve my goals, and what's holding me back from taking it? ",
  " What's the thing I'm most proud of accomplishing through hard work and dedication? ",
  " What's the biggest mistake I've made, and what did I learn from it? ",
  " What's the thing that makes me feel most connected to others? ",
  " What's the biggest goal I have for my future, and what steps can I take to achieve it? ",
  " What's the thing that brings me joy without fail, and why is that important to me? ",
  " What's the biggest challenge I'm currently facing, and what strategies can I use to overcome it? ",
  " What's the thing that makes me feel most confident, and why is that important to me? ",
  " What's the biggest impact someone else has had on my life, and how can I repay that kindness? ",
  " What's the thing that makes me feel most fulfilled at the end of a long day? ",
  " What's the most significant way I've grown as a person, and what triggered that growth? ",
  " What's the thing I'm most frustrated with about myself, and what steps can I take to improve it? ",
  " What's the most spontaneous thing I've ever done, and would I do it again? ",
  " What's the biggest misunderstanding I've had with someone, and how did we resolve it? ",
  " What's the thing I'm most looking forward to learning in the next year? ",
  " What's the biggest risk I'm willing to take in the next year, and why? ",
  " What's the most meaningful gift I've ever received, and why was it so special? ",
  " What's the thing I'm most proud of accomplishing in a team or group setting? ",
  " What's the biggest challenge I've faced in my relationships, and how did I overcome it? ",
  " What's the thing that makes me feel most nostalgic, and why is that important to me? ",
  " What's the biggest decision I've made based on intuition rather than logic, and did it work out well? ",
  " What's the thing I'm most passionate about in my free time, and how can I incorporate it into my daily routine? ",
  " What's the biggest lie I've ever told, and how did I justify it to myself? ",
  " What's the thing that makes me feel most grounded and centered? ",
  " What's the biggest sacrifice I've made for my loved ones, and was it worth it? ",
  " What's the most significant impact I've had on someone else's life, and how did they react to it? ",
  " What's the thing that makes me feel most anxious or stressed, and how do I cope with it? ",
  " What's the biggest misconception people have about a particular issue or topic, and what can we do to change that perception? ",
  " What's the thing that brings me joy without fail, even on my worst days? ",
  " What's the biggest lesson I've learned from failure, and how has it shaped me since then? ",
  " What's the thing that makes me feel most connected to my heritage or cultural background? ",
  " What's the biggest fear I have about getting older, and how can I address it proactively? ",
  " What's the thing that makes me feel most grateful for my family or upbringing? ",
  " What's the biggest regret I have about a past relationship, and what would I do differently if given another chance? ",
  " What's the thing that makes me feel most proud of my community or society as a whole? ",
  " What's the biggest impact social media has had on my life, both positively and negatively? ",
  " What's the thing that makes me feel most fulfilled at work or in my career? ",
  " What's the biggest lesson I've learned from a mentor or role model, and how has it inspired me? ",
  " What's the thing that makes me feel most excited about the future of humanity or technology? ",
  " What's the biggest misconception people have about mental health, and what can we do to break down stigmas around it? ",
  " What's the thing that brings me joy without fail when I'm alone or in solitude? ",
  " What's the biggest lesson I've learned from a difficult experience, and how has it shaped me since then? ",
  " What's the thing that makes me feel most connected to nature or the environment? ",
  " What's the biggest impact technology has had on my daily life, both positively and negatively? ",
  " What's the thing that makes me feel most confident when speaking up or sharing my opinions with others? ",
  " What's the biggest sacrifice I've made for my own personal growth or development, and was it worth it? ",
  " What's the thing that makes me feel most grateful for my health or physical well-being? ",
  " What's the biggest lesson I've learned from a near-miss or close call, and how has it changed my perspective since then? ",
  " What's the thing that brings me joy without fail when surrounded by loved ones or friends? ",
  " What's the biggest decision I've made based on logic rather than emotions, and was it a good one? "
];


const philosophicalQuestions = [
  "What do you think is the meaning of life?",
  "Do you believe in fate or free will?",
  "What is the most important virtue in your opinion?",
  "Would you rather be remembered for your achievements or your character?",
  "Is it better to have a life of comfort and security or a life of adventure and risk?",
  "Do you think technology is advancing too quickly or not quickly enough?",
  "What is the most pressing issue facing humanity today and how can we solve it?",
  "Is it possible to truly know oneself?",
  "Would you rather be able to communicate with animals or plants?",
  "Is it more important to be happy or to do good in the world?",
  "What is the nature of reality and how do you think we can understand it?",
  "Do you believe in an afterlife or reincarnation?",
  "Is it better to live a simple life or a complex one?",
  "What is the most significant challenge facing your generation and how can we overcome it?",
  "Do you think it's possible to change people's minds or are they too entrenched in their beliefs?",
  "Is it better to focus on individual rights or collective rights?",
  "What is the role of emotions in decision-making and should we prioritize logic over emotions?",
  "Do you believe in the concept of justice and if so, what does it mean to you?",
  "Is it more important to prioritize short-term gains or long-term consequences?",
  "Can artificial intelligence ever truly be conscious or is that just a myth?",
  "What is the most important thing we can do for our planet's future?",
  "Do you think there's a limit to human knowledge and if so, what is it?",
  "Is it better to learn from failure or success?",
  "Can morality be objective or is it always subjective?",
  "Is it possible to truly forgive someone who has wronged us or do grudges need to be held onto?",
  "What is the role of power and responsibility in society and how should they be balanced?",
  "Can we ever truly know what's going on in someone else's mind or are they inherently unknowable?",
  "Is there such a thing as absolute truth or are all truths relative?",
  "What is the most important lesson we can learn from history and how can we apply it today?",
  "Is there a point at which humanity becomes 'too' advanced and starts losing its humanity?",
  "Is it possible to truly understand someone else's perspective, or are we inherently limited by our own biases?",
  "Can a machine truly be creative, or is creativity a uniquely human trait?",
  "Is it better to focus on personal growth or helping others grow?",
  "Can we ever truly know what's real or is everything just a perception?",
  "Is the pursuit of happiness a selfish endeavor or a necessary one?",
  "Do you think it's possible to change the course of history, or is the future predetermined?",
  "Is it better to have a life of simplicity and contentment or a life of complexity and struggle?",
  "Can we ever truly forgive ourselves or do we always carry our mistakes with us?",
  "Is the concept of 'fairness' an illusion, or can we strive for true justice in the world?",
  "Is the human brain capable of experiencing multiple consciousnesses, or are we limited to one identity?",
  "Is it possible to communicate with beings from other dimensions or planes of existence?",
  "Can we ever truly know what's happening in the universe beyond our own planet?",
  "Is it better to be a part of a group or stand alone as an individual?",
  "Can we ever truly understand the nature of time or is it an illusion created by our brains?",
  "Is the concept of 'good' and 'evil' relative, or are there absolute moral truths?",
  "Can we ever truly know what another person is thinking, or do they always remain a mystery?",
  "Is it possible to create artificial intelligence that surpasses human intelligence, and if so, what would that mean for humanity?",
  "Can we ever truly understand the nature of love, or is it a mystery that transcends human comprehension?",
  "Is it better to have a life of adventure and exploration or a life of stability and routine?",
  "Can we ever truly know what's happening in the afterlife, or is that too a mystery beyond human understanding?",
  "Is the concept of 'self' an illusion created by our brains, or is it a fundamental aspect of reality?",
  "Can we ever truly know what's happening in other dimensions or parallel universes, if they exist?",
  "Is it better to prioritize individual rights or collective rights in society?",
  "Can we ever truly understand the nature of consciousness or is it still a mystery beyond human understanding?",
  "Is the concept of 'right' and 'wrong' relative, or are there absolute moral truths?",
  "Can we ever truly know what's happening in the collective unconscious, if such a thing exists?",
  "Is it possible to communicate with animals in their own language, and if so, what would that mean for our understanding of them?",
  "Can we ever truly know what's happening in the quantum realm or is that too a mystery beyond human understanding?",
  "Is it better to focus on short-term gains or long-term consequences when making decisions?",
  "Can we ever truly know what's happening in other galaxies, if they exist?",
  "Is it possible for humans to coexist peacefully with other intelligent species in the universe, and if so, how would that work?",
  "Can we ever truly understand the nature of reality TV shows like dreams and hallucinations from our brains, and how do they relate to reality itself?",
  "Is it better to be able to control your emotions or let them control you, and how do you think that affects your life overall?",
  "Can we ever truly know what's happening in other realms of existence beyond our own reality, if they exist at all?",
  "Are humans inherently selfish creatures driven by self-interest alone, and if so, how can we change that dynamic?",
  "Is there such a thing as a true neutral observer in any situation, and if so, how can you find one?",
  "Are there certain situations where killing is morally justifiable?",
  "Can you genuinely believe in two contradictory things at once?",
];

const getToKnowQuestions = [
  " What's your favorite way to spend a free day? ",
  " What's the best book/movie/TV show you've consumed recently and why did you enjoy it? ",
  " What's your favorite hobby and how did you get into it? ",
  " What's the most spontaneous thing you've ever done? ",
  " What's one thing you're proud of accomplishing in your personal life? ",
  " What's your favorite childhood memory? ",
  " What's something your parents taught you that's stuck with you? ",
  " Do you have any siblings? What's your relationship like with them? ",
  " What's the most important lesson your parents instilled in you? ",
  " What's your favorite family tradition? ",
  " What do you do for work? How did you get into that field? ",
  " What's the most challenging project you've worked on and how did you overcome obstacles? ",
  " What's something you're passionate about outside of work or school? ",
  " Who's someone you admire in your industry and why? ",
  " What's the most important skill you've learned in school or on the job? ",
  " Where's the most amazing place you've traveled to and what made it so special? ",
  " What's the best food you've ever eaten while traveling and why was it so good? ",
  " Have you ever gone on a solo trip? What was that like for you? ",
  " What's the most adventurous thing you've done while traveling? ",
  " Where do you hope to travel to next? ",
  " Who's someone who inspires you in your personal life? ",
  " How do you prioritize your relationships with friends and family? ",
  " What's the best advice someone has given you about relationships? ",
  " Who's someone you consider a role model and why? ",
  " How do you handle conflicts or disagreements with loved ones? ",
  " What's something unique or quirky about yourself that few people know? ",
  " What's your go-to karaoke song or party jam? ",
  " Do you have any hidden talents or skills? How did you develop them? ",
  " What's something that always makes you laugh or smile? ",
  " If you could switch lives with someone for a day, who would it be and why? ",
  " What's the most significant change you've made in your life in the past year? ",
  " What's something you're working on improving about yourself? ",
  " What's the best piece of advice you've received about personal growth? ",
  " How do you prioritize self-care and self-compassion? ",
  " What's something you're looking forward to learning or accomplishing in the next year? ",
  " What's your favorite type of cuisine and why do you love it? ",
  " What's the best meal you've ever had and who cooked it? ",
  " Do you have a go-to coffee order or favorite coffee shop? ",
  " What's your favorite type of music to listen to while eating or drinking? ",
  " Have you ever tried a new food or drink that surprised you with how much you loved it? ",
  " What was your favorite TV show or cartoon growing up? ",
  " What was your favorite book series as a kid and why did you love it? ",
  " Did you have a favorite game or activity as a child? What made it so fun? ",
  " What was your favorite family vacation as a kid and what made it special? ",
  " Did you have a favorite toy or stuffed animal growing up? Why was it so meaningful? ",
  " What's something you've always wanted to try but haven't had the chance yet? ",
  " What's your biggest goal for the next 5-10 years? ",
  " How do you stay motivated and focused on your goals? ",
  " What's something you're proud of accomplishing, but didn't think you could do at first? ",
  " Who's someone who inspires your goals and ambitions? ",
  " What's your favorite memory from the past year? ",
  " What's something that always brings back fond memories for you? ",
  " How do you reflect on past experiences or memories? ",
  " What's something that's helped shape your perspective on life? ",
  " Do you have a favorite way to remember important dates or anniversaries? ",
  " What's the most ridiculous thing you've ever done just for fun? ",
  " Do you have a secret talent for anything creative or artistic? ",
  " What's your go-to karaoke song or party jam? ",
  " Have you ever been on a crazy adventure or taken risks with friends? ",
  " Do you have a favorite board game or card game to play with friends? ",
  " If you could travel anywhere in the world right now, where would you go and why? ",
  " What's the most memorable part of a trip for you - the people, food, scenery, etc.? ",
  " Have you ever gone on an impromptu road trip? Where did you go and what was it like? ",
  " Do you prefer exploring new places solo or with others? ",
  " Have you ever tried extreme sports or activities while traveling? Which ones? ",
  " What's the most challenging project you've worked on in your career so far? How did you overcome obstacles? ",
  " Who's someone who inspires your work ethic or approach to your job? ",
  " How do you handle stress or pressure at work? ",
  " Have you ever had a mentor who helped guide your career path? Who was it and what did they teach you? ",
  " Do you have any side hustles or entrepreneurial endeavors outside of your main job? ",
];

const funQuizQuestions = [
  " Which planet in our solar system is known for being the largest? ",
  " Who is the main character in the novel 'To Kill a Mockingbird'? ",
  " Which musician wrote the song 'Imagine'? ",
  " What is the capital of France? ",
  " In what year did the first iPhone come out? ",
  " Which country is home to the ancient city of Petra? ",
  " Who played Luke Skywalker in the original Star Wars trilogy? ",
  " What is the chemical symbol for gold? ",
  " Who is the main villain in the Marvel movie 'The Avengers'? ",
  " Which artist painted the ceiling of the Sistine Chapel? ",
  " What is the largest mammal on Earth? ",
  " Who is the lead singer of the band Queen? ",
  " In what year did the first Harry Potter book come out? ",
  " Which chemical element has the symbol 'H' and atomic number 1? ",
  " Which author wrote the classic novel 'Pride and Prejudice'? ",
  " What is the largest living species of lizard? ",
  " What is the chemical symbol for oxygen? ",
  " What is the capital of Australia? ",
  " Who is the lead singer of the band Coldplay? ",
  " Which chemical element has the symbol 'C' and atomic number 6? ",
  " Who is the main villain in the Marvel movie 'Captain America'? ",
  " What is the smallest country in the world, both in terms of population and land area? ",
  " Who played the role of Ellen Ripley in the Alien franchise? ",
  " What is the chemical symbol for copper? ",
  " Which artist created the famous painting 'The Starry Night'? ",
  " What is the largest species of shark? ",
  " Who is the main character in the novel 'The Catcher in the Rye'? ",
  " What is the chemical symbol for silver? ",
  " Who played the role of James Bond in the movie 'Casino Royale'? ",
  " In what year did Apple release the first iPad? ",
  " Who is the lead singer of the band AC/DC? ",
  " What is the chemical symbol for iron? ",
  " Which artist created the famous sculpture 'David'? ",
  " What is the largest mammal that can fly? ",
  " What is the chemical symbol for carbon dioxide? ",
  " Which artist created the famous painting 'The Mona Lisa'? ",
  " What is the largest living species of bird? ",
  " Who played the role of Tony Stark/Iron Man in the Marvel Cinematic Universe? ",
  " What is the chemical symbol for nitrogen? ",
  " Who won the Nobel Prize in Literature in 2019? ",
  " Which author wrote the classic novel '1984'? ",
  " What is the largest species of squid? ",
  " What is the chemical symbol for potassium? ",
  " In what year did NASA's Mars Curiosity rover land on Mars? ",
  " What is the largest species of frog? ",
  " Who played the role of Hermione Granger in Harry Potter movies? ",
  " Which artist created the famous painting 'The Scream'? ",
  " What is the largest living species of fish? ",
  " What is the chemical symbol for boron? ",
  " Which author wrote the classic novel 'Jane Eyre'? ",
  " Who is a main character in The Lord of The Rings trilogy? ",
  " What is the chemical symbol for calcium? ",
  " What is the largest living species of bat? ",
  " Which artist created the famous painting 'The Night Café'? ",
  " What is the chemical symbol for phosphorus? ",
  " What is the largest living species of insect? ",
  " What is the chemical symbol for sulfur? ",
  " Who played the role of Sherlock Holmes in the movie 'Sherlock Holmes' (2009)? ",
  " Which artist created the famous sculpture 'The Thinker'? ",
  " What is the largest living species of snake? ",
  " What is the chemical symbol for silicon? ",
  " Who won the Nobel Prize in Physics in 2019? ",
  " Which artist created the famous painting 'The Birth of Venus'? ",
  " What is the largest living species of jellyfish? ",
  " What is the chemical symbol for manganese? ",
  " Which artist created the famous painting 'The Last Supper'? ",
  " What is the largest living species of octopus? ",
  " What is the chemical symbol for chlorine? ",
  " Which artist created the famous painting 'Guernica'? ",
  " What is the largest living species of lizard? ",
  " Who played the role of Captain America in the Marvel Cinematic Universe? ",
  " What is the chemical symbol for aluminum? ",
  " Which artist created the famous painting 'The Creation of Adam' from Michelangelo's Sistine Chapel ceiling? ",
  " What is the largest living species of shark (by weight)? ",
  " Which planet in our solar system is known for being the largest? ",
  " What is the capital city of Australia? ",
  " Who is the author of the famous novel 'To Kill a Mockingbird'? ",
  " What is the highest mountain peak in North America? ",
  " Which bird is known for its distinctive call that sounds like laughter? ",
  " What is the largest living species of insect? ",
  " Who was the first president of the United States? ",
  " What is the highest mountain peak in South America? ",
  " Which type of bird is known for its distinctive call that sounds like a laugh? ",
  " Who wrote the famous novel 'The Picture of Dorian Gray'? ",
  " What is the smallest country in Asia by population? ",
  " Who was a key figure in ancient Greece, credited with developing democracy? ",
  " What is the highest waterfall in Europe? ",
  " Which type of animal is known for its unique, shell-like armor? ",
  " Who wrote the famous poem 'The Tyger'? ",
  " What is the largest living species of mammal, by weight? ",
  " Who was the leader of the Roman Empire during its peak? ",
  " What is the highest mountain peak in North America? ",
  " Which type of fruit is often used in pies and desserts? ",
  " Who wrote the famous novel 'The Count of Monte Cristo'? ",
  " What is the smallest country in Europe by population? ",
  " Who was a key figure in ancient Rome, credited with building roads and bridges? ",
  " What is the highest mountain peak in Africa? ",
  " Which type of animal is known for its distinctive, long snout and striped fur? ",
  " Who wrote the famous play 'A Christmas Carol'? ",
  " What is the largest living species of fish, by length? ",
  " Who was a key figure in ancient Egypt, credited with building the pyramids? ",
  " What is the highest mountain peak in Asia? ",
  " Which type of fruit is often eaten as a snack, particularly among children? ",
  " Who wrote the famous novel 'The Adventures of Huckleberry Finn'? ",
  " What is the smallest country in Africa by area? ",
  " Who was the leader of the Soviet Union during the Cold War? ",
  " What is the highest mountain peak in Europe? ",
  " Which type of animal is known for its distinctive, long neck and sharp beak? ",
  " Who wrote the famous novel 'The Catcher in the Rye'? ",
  " What is the largest living species of bat? ",
  " Who was a key figure in ancient China, credited with developing Confucianism? ",
  " What is the highest mountain peak in South America? ",
  " Which type of fruit is often used in smoothies and juices? ",
  " Who wrote the famous novel 'The Scarlet Letter'? ",
  " What is the smallest country in Oceania by population? ",
  " Who was a key figure in ancient Greece, credited with developing philosophy? ",
  " What is the highest mountain peak in Asia? ",
  " Which type of animal is known for its distinctive, brightly colored feathers? ",
  " Who wrote the famous poem 'The Road Not Taken'? ",
  " What is the smallest country in the world, both in terms of population and land area? ",
  " Who is the founder of the ancient city of Babylon? ",
  " What is the largest living species of mammal? ",
  " Which river is the longest in South America? ",
  " Who is the main protagonist in Homer's epic poem 'The Odyssey'? ",
  " What is the capital city of China? ",
  " Who is the author of the famous novel 'Pride and Prejudice'? ",
  " Which type of tree is known for its unique, edible seeds that resemble berries? ",
  " Who is the main character in Jane Austen's novel 'Emma'? ",
  " What is the largest species of lizard that can be found in North America? ",
  " Who was the leader of the Soviet Union during World War II? ",
  " What is the smallest mammal in the world, by weight? ",
  " Which ancient city was destroyed by a volcanic eruption in 79 AD? ",
  " Who wrote the famous poem 'The Raven'? ",
  " What is the largest lake in Africa? ",
  " Who was the first president of South Africa after apartheid ended? ",
  " What is the highest waterfall in South America? ",
  " Which type of flower is often associated with Valentine's Day? ",
  " Who wrote the famous novel '1984'? ",
  " What is the smallest state in India by area? ",
  " Who was the leader of the French Resistance during World War II? ",
  " What is the largest living species of reptile? ",
  " Which ancient city was known for its extensive use of aqueducts? ",
  " Who wrote the famous play 'Hamlet'? ",
  " What is the largest island in Scandinavia? ",
  " Who was the first woman to fly solo across the Atlantic Ocean? ",
  " What is the highest mountain peak in Asia? ",
  " Which type of animal is known for its unique, long neck and legs? ",
  " Who wrote the famous novel 'The Lord of the Rings'? ",
  " What is the largest desert in South America? ",
  " Who was the leader of Nazi Germany during World War II? ",
  " What is the smallest country in Europe by area? ",
  " Which ancient city was known for its impressive architecture and engineering feats? ",
  " Who wrote the famous poem 'The Waste Land'? ",
  " What is the largest living species of fish? ",
  " Who was the first man to walk on the Moon? ",
  " What is the highest mountain peak in Africa? ",
  " Which type of fruit is often eaten for breakfast, particularly among Americans? ",
  " Who wrote the famous novel 'The Great Gatsby'? ",
  " What is the largest lake in Europe by surface area? ",
  " Who was a key figure in ancient Mesopotamia, ruling over Babylon and Assyria? ",
  " What is the smallest country in Asia by area? ",
  " Which ancient city was destroyed by earthquakes and tsunamis around 2000 BC? ",
  " Who wrote the famous play 'Romeo and Juliet'? "
];



function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

btn.addEventListener('click', () => {

  if(introspective.checked === true && philosophical.checked === true && getToKnow.checked === true && funQuiz.checked === true) {

    let combinedQuestions = [...introspectiveQuestions, ...philosophicalQuestions, ...getToKnowQuestions, ...funQuizQuestions];
    let index = getRandomNumber(0, combinedQuestions.length-1);
    output.innerText = combinedQuestions[index];

  } else if(introspective.checked === true && philosophical.checked === false && getToKnow.checked === false && funQuiz.checked === false) {
    
    let index = getRandomNumber(0, introspectiveQuestions.length-1);
    output.innerText = introspectiveQuestions[index];

  } else if(introspective.checked === true && philosophical.checked === true && getToKnow.checked === false && funQuiz.checked === true) {

    let combinedQuestions = [...introspectiveQuestions, ...philosophicalQuestions, ...funQuizQuestions];
    let index = getRandomNumber(0, combinedQuestions.length-1);
    output.innerText = combinedQuestions[index];

  } else if(introspective.checked === true && philosophical.checked === true && getToKnow.checked === false && funQuiz.checked === false) {

    let combinedQuestions = [...introspectiveQuestions, ...philosophicalQuestions];
    let index = getRandomNumber(0, combinedQuestions.length-1);
    output.innerText = combinedQuestions[index];

  } else if(introspective.checked === true && philosophical.checked === false && getToKnow.checked === true && funQuiz.checked === false) {

    let combinedQuestions = [...introspectiveQuestions, ...getToKnowQuestions];
    let index = getRandomNumber(0, combinedQuestions.length-1);
    output.innerText = combinedQuestions[index];

  }else if(introspective.checked === true && philosophical.checked === false && getToKnow.checked === true && funQuiz.checked === true) {

    let combinedQuestions = [...introspectiveQuestions, ...getToKnowQuestions, ...funQuizQuestions];
    let index = getRandomNumber(0, combinedQuestions.length-1);
    output.innerText = combinedQuestions[index];

  } else if(introspective.checked === true && philosophical.checked === false && getToKnow.checked === false && funQuiz.checked === true) {

    let combinedQuestions = [...introspectiveQuestions, ...funQuizQuestions];
    let index = getRandomNumber(0, combinedQuestions.length-1);
    output.innerText = combinedQuestions[index];

  } else if(introspective.checked === false && philosophical.checked === true && getToKnow.checked === true && funQuiz.checked === false) {

    let combinedQuestions = [...philosophicalQuestions, ...getToKnowQuestions];
    let index = getRandomNumber(0, combinedQuestions.length-1);
    output.innerText = combinedQuestions[index];

  } else if(introspective.checked === false && philosophical.checked === true && getToKnow.checked === false && funQuiz.checked === false) {

    let index = getRandomNumber(0, philosophicalQuestions.length-1);
    output.innerText = philosophicalQuestions[index];

  } else if(introspective.checked === false && philosophical.checked === false && getToKnow.checked === true && funQuiz.checked === false) {

    let index = getRandomNumber(0, getToKnowQuestions.length-1);
    output.innerText = getToKnowQuestions[index];

  } else if(introspective.checked === true && philosophical.checked === true && getToKnow.checked === true && funQuiz.checked === false) {

    let combinedQuestions = [...introspectiveQuestions, ...philosophicalQuestions, ...getToKnowQuestions];
    let index = getRandomNumber(0, combinedQuestions.length-1);
    output.innerText = combinedQuestions[index];
    
  } else if(introspective.checked === false && philosophical.checked === true && getToKnow.checked === true && funQuiz.checked === true) {

    let combinedQuestions = [...philosophicalQuestions, ...getToKnowQuestions, ...funQuizQuestions];
    let index = getRandomNumber(0, combinedQuestions.length-1);
    output.innerText = combinedQuestions[index];

  } else if(introspective.checked === false && philosophical.checked === true && getToKnow.checked === false && funQuiz.checked === true) {

    let combinedQuestions = [...philosophicalQuestions, ...funQuizQuestions];
    let index = getRandomNumber(0, combinedQuestions.length-1);
    output.innerText = combinedQuestions[index];

  } else if(introspective.checked === false && philosophical.checked === false && getToKnow.checked === true && funQuiz.checked === true) {

    let combinedQuestions = [...getToKnowQuestions, ...funQuizQuestions];
    let index = getRandomNumber(0, combinedQuestions.length-1);
    output.innerText = combinedQuestions[index];

  } else if(introspective.checked === false && philosophical.checked === false && getToKnow.checked === false && funQuiz.checked === true) {

    let index = getRandomNumber(0, funQuizQuestions.length-1);
    output.innerText = funQuizQuestions[index];

  } else if(introspective.checked === false && philosophical.checked === false && getToKnow.checked === false && funQuiz.checked === false) {
    output.innerText = "Please select a category."

  }else {
    output.innerText = "Please select a category."
  }
});




