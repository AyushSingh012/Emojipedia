const emojipedia = [
  {
    id: 1,
    emoji: "😂",
    name: "Face with Tears of Joy",
    meaning:
      "A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard.",
  },
  {
    id: 2,
    emoji: "❤️",
    name: "Red Heart",
    meaning:
      "A classic red love heart emoji, used for expressions of love, romance, and affection.",
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling on the Floor Laughing",
    meaning:
      "A smiling face rolling on the floor, laughing uncontrollably. Represents extreme amusement.",
  },
  {
    id: 4,
    emoji: "👍",
    name: "Thumbs Up",
    meaning:
      "A thumbs-up gesture indicating approval, acceptance, or agreement.",
  },
  {
    id: 5,
    emoji: "😭",
    name: "Loudly Crying Face",
    meaning:
      "A yellow face with an open mouth wailing and streams of heavy tears flowing from closed eyes.",
  },
  {
    id: 6,
    emoji: "🙏",
    name: "Folded Hands",
    meaning:
      "Two hands pressed together, used to express please, thank you, prayer, or high fives.",
  },
  {
    id: 7,
    emoji: "😘",
    name: "Face Blowing a Kiss",
    meaning:
      "A yellow face winking with puckered lips blowing a kiss, depicted as a small, red heart.",
  },
  {
    id: 8,
    emoji: "🥰",
    name: "Smiling Face with Hearts",
    meaning:
      "A smiling face with smiling eyes and three hearts around it, showing love and affection.",
  },
  {
    id: 9,
    emoji: "😍",
    name: "Smiling Face with Heart-Eyes",
    meaning:
      "A smiling face with heart-shaped eyes, expressing adoration, love, or extreme liking.",
  },
  {
    id: 10,
    emoji: "😊",
    name: "Smiling Face with Smiling Eyes",
    meaning:
      "A friendly, warm smile with smiling eyes, showing happiness, positivity, or gratitude.",
  },
  {
    id: 11,
    emoji: "♻️",
    name: "Recycling Symbol",
    meaning:
      "The universal symbol for recycling, representing environmental consciousness and sustainability.",
  },
  {
    id: 12,
    emoji: "🎉",
    name: "Party Popper",
    meaning:
      "A colorful party popper exploding with confetti, used for celebrations and exciting announcements.",
  },
  {
    id: 13,
    emoji: "😁",
    name: "Beaming Face with Smiling Eyes",
    meaning:
      "A happy face with a wide, open smile and smiling eyes, showing excitement or mischief.",
  },
  {
    id: 14,
    emoji: "🤔",
    name: "Thinking Face",
    meaning:
      "A face with a slightly furrowed brow and finger on chin, indicating thought, curiosity, or skepticism.",
  },
  {
    id: 15,
    emoji: "😆",
    name: "Grinning Squinting Face",
    meaning:
      "A yellow face with a broad, open smile and scrunched, X-shaped eyes, laughing hysterically.",
  },
  {
    id: 16,
    emoji: "🔥",
    name: "Fire",
    meaning:
      'A flame representing something hot, popular, excellent, or exciting ("on fire").',
  },
  {
    id: 17,
    emoji: "😔",
    name: "Pensive Face",
    meaning:
      "A face with a slightly frowning mouth and downcast eyes, showing sadness or regret.",
  },
  {
    id: 18,
    emoji: "🙄",
    name: "Face with Rolling Eyes",
    meaning:
      "A face with eyes rolled upward, showing disbelief, annoyance, or impatience.",
  },
  {
    id: 19,
    emoji: "💕",
    name: "Two Hearts",
    meaning:
      "Two pink love hearts, representing love, affection, or being in love.",
  },
  {
    id: 20,
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    meaning:
      "A cool, confident smile with sunglasses, showing something is awesome or you feel great.",
  },
  {
    id: 21,
    emoji: "👏",
    name: "Clapping Hands",
    meaning:
      "Two hands clapping to show applause, approval, or praise for someone or something.",
  },
  {
    id: 22,
    emoji: "😢",
    name: "Crying Face",
    meaning:
      "A sad face with a single tear, showing disappointment, sadness, or pain.",
  },
  {
    id: 23,
    emoji: "🤷",
    name: "Person Shrugging",
    meaning:
      "A person shrugging their shoulders to indicate uncertainty, indifference, or lack of knowledge.",
  },
  {
    id: 24,
    emoji: "🎂",
    name: "Birthday Cake",
    meaning:
      "A frosted cake with candles, used for birthdays, celebrations, or special occasions.",
  },
  {
    id: 25,
    emoji: "😡",
    name: "Pouting Face",
    meaning:
      "A red-faced, angry expression with a frowning mouth and furrowed brows, showing rage.",
  },
  {
    id: 26,
    emoji: "🤗",
    name: "Hugging Face",
    meaning:
      "A smiling face with open hands, as if giving a hug, showing affection or comfort.",
  },
  {
    id: 27,
    emoji: "😴",
    name: "Sleeping Face",
    meaning:
      "A face with closed eyes and a blue snot bubble, indicating sleep, tiredness, or boredom.",
  },
  {
    id: 28,
    emoji: "😃",
    name: "Grinning Face with Big Eyes",
    meaning:
      "A happy face with a big grin and wide open eyes, showing excitement or joy.",
  },
  {
    id: 29,
    emoji: "👀",
    name: "Eyes",
    meaning:
      "A pair of eyes glancing to the side, often used to represent looking, watching, or noticing.",
  },
  {
    id: 30,
    emoji: "😳",
    name: "Flushed Face",
    meaning:
      "A face with wide eyes and red cheeks, showing embarrassment, surprise, or awkwardness.",
  },
  {
    id: 31,
    emoji: "🤪",
    name: "Zany Face",
    meaning:
      "A silly face with a big grin and crazy eyes, showing goofiness or excitement.",
  },
  {
    id: 32,
    emoji: "😏",
    name: "Smirking Face",
    meaning:
      "A face with a sly, smug, or suggestive smirk, often used flirtatiously or sarcastically.",
  },
  {
    id: 33,
    emoji: "🤩",
    name: "Star-Struck",
    meaning:
      "A face with starry eyes and a big grin, showing excitement, admiration, or being starstruck.",
  },
  {
    id: 34,
    emoji: "😋",
    name: "Face Savoring Food",
    meaning:
      "A face with its tongue out and eyes closed, relishing delicious food or looking tasty.",
  },
  {
    id: 35,
    emoji: "😤",
    name: "Face with Steam from Nose",
    meaning:
      "A face with furrowed brows and steam coming from its nose, showing frustration or determination.",
  },
  {
    id: 36,
    emoji: "🥺",
    name: "Pleading Face",
    meaning:
      "A face with big puppy-dog eyes, used to beg or ask for something cutely.",
  },
  {
    id: 37,
    emoji: "😈",
    name: "Smiling Face with Horns",
    meaning:
      "A purple face with devil horns and a mischievous smile, representing mischief or evil.",
  },
  {
    id: 38,
    emoji: "😌",
    name: "Relieved Face",
    meaning:
      "A face with closed eyes and a gentle smile, showing peace, relief, or contentment.",
  },
  {
    id: 39,
    emoji: "🤯",
    name: "Exploding Head",
    meaning:
      "A face with its head exploding, representing mind-blowing ideas or shocking information.",
  },
  {
    id: 40,
    emoji: "😇",
    name: "Smiling Face with Halo",
    meaning:
      "A smiling face with a halo, representing angelic behavior or innocence.",
  },
  {
    id: 41,
    emoji: "🙃",
    name: "Upside-Down Face",
    meaning:
      "A face turned upside down, often used to convey sarcasm, irony, or silliness.",
  },
  {
    id: 42,
    emoji: "😉",
    name: "Winking Face",
    meaning:
      "A face with one eye winking, often used to indicate a joke, flirtation, or hidden meaning.",
  },
  {
    id: 43,
    emoji: "🥳",
    name: "Partying Face",
    meaning:
      "A face with a party hat and horn, celebrating and having a good time.",
  },
  {
    id: 44,
    emoji: "😱",
    name: "Face Screaming in Fear",
    meaning:
      "A face screaming in fear with wide eyes and an open mouth, showing shock or terror.",
  },
  {
    id: 45,
    emoji: "🤭",
    name: "Face with Hand Over Mouth",
    meaning:
      "A face with its hand covering its mouth, showing surprise, shyness, or suppressed laughter.",
  },
  {
    id: 46,
    emoji: "🤤",
    name: "Drooling Face",
    meaning:
      "A face with its tongue out and drool dripping, showing desire (often for food).",
  },
  {
    id: 47,
    emoji: "😫",
    name: "Tired Face",
    meaning:
      "A face with closed eyes, a furrowed brow, and an open mouth, showing exhaustion or frustration.",
  },
  {
    id: 48,
    emoji: "🥲",
    name: "Smiling Face with Tear",
    meaning:
      "A smiling face with a single tear, representing gratitude, bittersweet feelings, or touched emotions.",
  },
  {
    id: 49,
    emoji: "🤫",
    name: "Shushing Face",
    meaning:
      "A face with its finger over its lips, asking for silence or secrecy.",
  },
  {
    id: 50,
    emoji: "😮",
    name: "Face with Open Mouth",
    meaning: "A face with its mouth open in surprise, shock, or awe.",
  },
  {
    id: 51,
    emoji: "😝",
    name: "Squinting Face with Tongue",
    meaning:
      "A face with its tongue out and eyes scrunched, showing playful silliness.",
  },
  {
    id: 52,
    emoji: "😒",
    name: "Unamused Face",
    meaning:
      "A face with a flat, unimpressed expression, showing disappointment or annoyance.",
  },
  {
    id: 53,
    emoji: "🙂",
    name: "Slightly Smiling Face",
    meaning:
      "A subtle smile that can be genuine or used to mask frustration (sometimes passive-aggressive).",
  },
  {
    id: 54,
    emoji: "😞",
    name: "Disappointed Face",
    meaning:
      "A face with a sad frown and downcast eyes, showing disappointment or sadness.",
  },
  {
    id: 55,
    emoji: "😓",
    name: "Downcast Face with Sweat",
    meaning:
      "A face with a blue sweat drop, showing relief after nervousness or stress.",
  },
  {
    id: 56,
    emoji: "🤮",
    name: "Face Vomiting",
    meaning:
      "A green face vomiting, representing disgust, sickness, or something revolting.",
  },
  {
    id: 57,
    emoji: "😨",
    name: "Fearful Face",
    meaning:
      "A face with wide, open eyes and a small open mouth, showing fear or concern.",
  },
  {
    id: 58,
    emoji: "🤢",
    name: "Nauseated Face",
    meaning:
      "A green face with a disgusted expression, representing sickness or disgust.",
  },
  {
    id: 59,
    emoji: "🤑",
    name: "Money-Mouth Face",
    meaning:
      "A face with dollar signs for eyes and a tongue sticking out, representing money or greed.",
  },
  {
    id: 60,
    emoji: "🤠",
    name: "Cowboy Hat Face",
    meaning:
      "A face wearing a cowboy hat, representing the Wild West, country music, or confidence.",
  },
  {
    id: 61,
    emoji: "😵",
    name: "Dizzy Face",
    meaning:
      "A face with X's for eyes and a swirling mouth, representing dizziness or confusion.",
  },
  {
    id: 62,
    emoji: "🤧",
    name: "Sneezing Face",
    meaning:
      "A face with closed eyes sneezing, representing allergies or illness.",
  },
  {
    id: 63,
    emoji: "🥵",
    name: "Hot Face",
    meaning:
      "A red face with its tongue out and sweat drops, representing heat, exhaustion, or attraction.",
  },
  {
    id: 64,
    emoji: "🥶",
    name: "Cold Face",
    meaning:
      "A blue face with icicles, representing freezing temperatures or being left out in the cold.",
  },
  {
    id: 65,
    emoji: "😐",
    name: "Neutral Face",
    meaning:
      "A face with a straight mouth and neutral eyes, representing indifference or lack of emotion.",
  },
  {
    id: 66,
    emoji: "🤓",
    name: "Nerd Face",
    meaning:
      "A face with glasses and buck teeth, representing nerdy interests or intelligence.",
  },
  {
    id: 67,
    emoji: "👻",
    name: "Ghost",
    meaning:
      "A playful white ghost, representing Halloween, spookiness, or something invisible.",
  },
  {
    id: 68,
    emoji: "💀",
    name: "Skull",
    meaning:
      'A human skull, representing death, danger, or something "deadly" funny.',
  },
  {
    id: 69,
    emoji: "👽",
    name: "Alien",
    meaning:
      "A green alien with large black eyes, representing extraterrestrial life or strangeness.",
  },
  {
    id: 70,
    emoji: "🤖",
    name: "Robot",
    meaning:
      "A silver robot face, representing technology, AI, or something mechanical.",
  },
  {
    id: 71,
    emoji: "💩",
    name: "Pile of Poo",
    meaning:
      "A brown, smiling poop emoji, used humorously to represent mess or nonsense.",
  },
  {
    id: 72,
    emoji: "👾",
    name: "Alien Monster",
    meaning:
      "A purple space invader, representing video games or retro technology.",
  },
  {
    id: 73,
    emoji: "🤡",
    name: "Clown Face",
    meaning:
      "A face with clown makeup, representing humor, foolishness, or something scary.",
  },
  {
    id: 74,
    emoji: "👹",
    name: "Ogre",
    meaning:
      "A Japanese ogre (oni) with horns, representing something fierce or scary.",
  },
  {
    id: 75,
    emoji: "👺",
    name: "Goblin",
    meaning:
      "A Japanese goblin (tengu) with a red face and long nose, representing mischief.",
  },
  {
    id: 76,
    emoji: "💯",
    name: "Hundred Points",
    meaning:
      'A red "100" mark, representing perfection, full marks, or being 100% correct.',
  },
  {
    id: 77,
    emoji: "✅",
    name: "Check Mark Button",
    meaning:
      "A green box with a white check mark, representing approval, completion, or correctness.",
  },
  {
    id: 78,
    emoji: "✨",
    name: "Sparkles",
    meaning:
      "Glittering stars, representing magic, celebration, or something shiny and special.",
  },
  {
    id: 79,
    emoji: "🎶",
    name: "Musical Notes",
    meaning:
      "Three eighth notes, representing music, singing, or something melodious.",
  },
  {
    id: 80,
    emoji: "🏆",
    name: "Trophy",
    meaning:
      "A gold trophy cup, representing winning, achievement, or success.",
  },
  {
    id: 81,
    emoji: "⚡",
    name: "High Voltage",
    meaning:
      "A yellow lightning bolt, representing electricity, speed, or power.",
  },
  {
    id: 82,
    emoji: "🌈",
    name: "Rainbow",
    meaning:
      "A colorful arc in the sky, representing LGBTQ+ pride, hope, or diversity.",
  },
  {
    id: 83,
    emoji: "🍕",
    name: "Pizza",
    meaning:
      "A slice of pepperoni pizza, representing food, parties, or Italian cuisine.",
  },
  {
    id: 84,
    emoji: "🍔",
    name: "Hamburger",
    meaning:
      "A cheeseburger with lettuce, representing fast food or American cuisine.",
  },
  {
    id: 85,
    emoji: "🍟",
    name: "French Fries",
    meaning:
      "Golden french fries in a red container, representing snacks or fast food.",
  },
  {
    id: 86,
    emoji: "🍦",
    name: "Soft Ice Cream",
    meaning:
      "A swirl of vanilla soft-serve ice cream in a cone, representing dessert or summer.",
  },
  {
    id: 87,
    emoji: "🍿",
    name: "Popcorn",
    meaning:
      "A red-and-white striped box of popcorn, representing movies or snacks.",
  },
  {
    id: 88,
    emoji: "☕",
    name: "Hot Beverage",
    meaning:
      "A steaming cup of coffee or tea, representing breakfast, energy, or warmth.",
  },
  {
    id: 89,
    emoji: "🍺",
    name: "Beer Mug",
    meaning:
      "A frosty mug of beer with foam, representing drinking, parties, or relaxation.",
  },
  {
    id: 90,
    emoji: "🍷",
    name: "Wine Glass",
    meaning:
      "A glass of red wine, representing sophistication, dining, or relaxation.",
  },
  {
    id: 91,
    emoji: "🍎",
    name: "Red Apple",
    meaning:
      "A shiny red apple, representing health, teachers, or the forbidden fruit.",
  },
  {
    id: 92,
    emoji: "🏀",
    name: "Basketball",
    meaning:
      "An orange basketball, representing sports, the NBA, or athleticism.",
  },
  {
    id: 93,
    emoji: "⚽",
    name: "Soccer Ball",
    meaning:
      "A black-and-white soccer ball, representing football (soccer) or sports.",
  },
  {
    id: 94,
    emoji: "🎮",
    name: "Video Game",
    meaning:
      "An old game controller, representing gaming, esports, or entertainment.",
  },
  {
    id: 95,
    emoji: "📱",
    name: "Mobile Phone",
    meaning:
      "A smartphone, representing technology, communication, or social media.",
  },
  {
    id: 96,
    emoji: "💻",
    name: "Laptop",
    meaning:
      "A personal computer, representing work, technology, or the internet.",
  },
  {
    id: 97,
    emoji: "🎧",
    name: "Headphone",
    meaning:
      "Over-ear headphones, representing music, podcasts, or audio entertainment.",
  },
  {
    id: 98,
    emoji: "📚",
    name: "Books",
    meaning:
      "A stack of three books, representing education, reading, or knowledge.",
  },
  {
    id: 99,
    emoji: "✈️",
    name: "Airplane",
    meaning: "A flying airplane, representing travel, vacations, or aviation.",
  },
  {
    id: 100,
    emoji: "🚀",
    name: "Rocket",
    meaning:
      "A space rocket blasting off, representing speed, ambition, or space exploration.",
  },

  {
    id: 101,
    emoji: "🫠",
    name: "Melting Face",
    meaning: "I'm cringing so hard I'm melting",
  },
  {
    id: 102,
    emoji: "🫡",
    name: "Saluting Face",
    meaning: "Respectfully acknowledging something dumb",
  },
  {
    id: 103,
    emoji: "🫢",
    name: "Face with Open Eyes and Hand Over Mouth",
    meaning: "Omg I can't believe I just said/did that",
  },
  {
    id: 104,
    emoji: "🫣",
    name: "Face with Peeking Eye",
    meaning: "Watching drama unfold but trying to stay hidden",
  },
  {
    id: 105,
    emoji: "🫥",
    name: "Dotted Line Face",
    meaning: "I've mentally checked out",
  },
  {
    id: 106,
    emoji: "🫶",
    name: "Heart Hands",
    meaning: "Sending love (more casual than ❤️)",
  },
  {
    id: 107,
    emoji: "👁️‍🗨️",
    name: "Eye in Speech Bubble",
    meaning: "I'm watching you/we need to talk",
  },
  {
    id: 108,
    emoji: "💀",
    name: "Skull",
    meaning: "This is so funny it killed me",
  },
  {
    id: 109,
    emoji: "🔥",
    name: "Fire",
    meaning: "Amazing/savage (context dependent)",
  },
  {
    id: 110,
    emoji: "✨",
    name: "Sparkles",
    meaning: "Adding emphasis or sarcastic shine",
  },
  {
    id: 111,
    emoji: "‼️",
    name: "Double Exclamation",
    meaning: "Urgent reaction to drama",
  },
  {
    id: 112,
    emoji: "🦅",
    name: "Eagle",
    meaning: "America/patriotism meme reference",
  },
  {
    id: 113,
    emoji: "🍃",
    name: "Leaf Fluttering in Wind",
    meaning: "Relaxed vibes or 🍃🌿🍀 alternative",
  },
  {
    id: 114,
    emoji: "🧌",
    name: "Troll",
    meaning: "Purposely stirring up drama",
  },
  {
    id: 115,
    emoji: "🪿",
    name: "Goose",
    meaning: "Calling someone silly or chaotic",
  },
  {
    id: 116,
    emoji: "🧚",
    name: "Fairy",
    meaning: "Delulu/main character energy",
  },
  {
    id: 117,
    emoji: "🫎",
    name: "Moose",
    meaning: "Canadian meme culture",
  },
  {
    id: 118,
    emoji: "🐦‍⬛",
    name: "Black Bird",
    meaning: "Twitter/X reference",
  },
  {
    id: 119,
    emoji: "🍄",
    name: "Mushroom",
    meaning: "Trippy vibes or cottagecore aesthetic",
  },
  {
    id: 120,
    emoji: "🫨",
    name: "Shaking Face",
    meaning: "Shook/overwhelmed",
  },
  {
    id: 121,
    emoji: "😮‍💨",
    name: "Face Exhaling",
    meaning: "Tired of this nonsense",
  },
  {
    id: 122,
    emoji: "🥱",
    name: "Yawning Face",
    meaning: "Bored/unimpressed",
  },
  {
    id: 123,
    emoji: "🧍",
    name: "Person Standing",
    meaning: "Awkward silence/left on read",
  },
  {
    id: 124,
    emoji: "🦦",
    name: "Otter",
    meaning: "Being silly/goofy",
  },
  {
    id: 125,
    emoji: "🐸",
    name: "Frog",
    meaning: "Weird/funny meme culture",
  },
  {
    id: 126,
    emoji: "👻",
    name: "Ghost",
    meaning: "Being sneaky/ghosting someone",
  },
  {
    id: 127,
    emoji: "🕴️",
    name: "Levitating Man",
    meaning: "Flexing/doing something impressive",
  },
  {
    id: 128,
    emoji: "🧃",
    name: "Juice Box",
    meaning: "Childish/nostalgic vibes",
  },
  {
    id: 129,
    emoji: "🎀",
    name: "Ribbon",
    meaning: "Girly aesthetic",
  },
  {
    id: 130,
    emoji: "👹",
    name: "Ogre",
    meaning: "Calling someone toxic",
  },
  {
    id: 131,
    emoji: "🫵",
    name: "Pointing at You",
    meaning: "Calling someone out",
  },
  {
    id: 132,
    emoji: "🤸",
    name: "Cartwheel",
    meaning: "Celebrating small wins",
  },
  {
    id: 133,
    emoji: "🫳",
    name: "Palm Down",
    meaning: "Dropping mic/truth bombs",
  },
  {
    id: 134,
    emoji: "🫲",
    name: "Leftwards Hand",
    meaning: "Giving/receiving something",
  },
  {
    id: 135,
    emoji: "🧎",
    name: "Kneeling Person",
    meaning: "Begging/apologizing",
  },
  {
    id: 136,
    emoji: "🤌",
    name: "Pinched Fingers",
    meaning: "Italian gesture/meme culture",
  },
  {
    id: 137,
    emoji: "🫦",
    name: "Biting Lip",
    meaning: "Flirting/temptation",
  },
  {
    id: 138,
    emoji: "👅",
    name: "Tongue",
    meaning: "Sassy response",
  },
  {
    id: 139,
    emoji: "🫸",
    name: "Palm Pushing",
    meaning: "Rejecting energy",
  },
  {
    id: 140,
    emoji: "🫷",
    name: "Palm Facing Left",
    meaning: "Blocking negativity",
  },
  {
    id: 141,
    emoji: "🤙",
    name: "Call Me Hand",
    meaning: "Surfer dude approval",
  },
  {
    id: 142,
    emoji: "✌️",
    name: "Victory Hand",
    meaning: "Peace out/chill vibes",
  },
  {
    id: 143,
    emoji: "🤏",
    name: "Pinching Hand",
    meaning: "Small amount/sarcasm",
  },
  {
    id: 144,
    emoji: "🫰",
    name: "Hand with Finger Crossed",
    meaning: "Flirting/money gesture",
  },
  {
    id: 145,
    emoji: "👐",
    name: "Open Hands",
    meaning: "Hugging virtually",
  },
  {
    id: 146,
    emoji: "🙈",
    name: "See-No-Evil Monkey",
    meaning: "Can't handle the cringe",
  },
  {
    id: 147,
    emoji: "🙉",
    name: "Hear-No-Evil Monkey",
    meaning: "Ignoring drama",
  },
  {
    id: 148,
    emoji: "🙊",
    name: "Speak-No-Evil Monkey",
    meaning: "Shouldn't say this but...",
  },
  {
    id: 149,
    emoji: "🫵",
    name: "Index Pointing at Viewer",
    meaning: "Direct callout",
  },
  {
    id: 150,
    emoji: "🧏",
    name: "Deaf Person",
    meaning: "I'm not listening",
  },

  {
    id: 151,
    emoji: "🚗",
    name: "Car",
    meaning: "Automobile or transportation",
  },
  {
    id: 152,
    emoji: "🚲",
    name: "Bicycle",
    meaning: "Bike or cycling activity",
  },
  {
    id: 153,
    emoji: "📱",
    name: "Mobile Phone",
    meaning: "Smartphone or communication",
  },
  {
    id: 154,
    emoji: "🍶",
    name: "Bottle",
    meaning: "Drink container",
  },
  {
    id: 155,
    emoji: "🪑",
    name: "Chair",
    meaning: "Seating furniture",
  },
  {
    id: 156,
    emoji: "🛏️",
    name: "Bed",
    meaning: "Sleeping furniture",
  },
  {
    id: 157,
    emoji: "📚",
    name: "Books",
    meaning: "Reading or education",
  },
  {
    id: 158,
    emoji: "✏️",
    name: "Pencil",
    meaning: "Writing or drawing",
  },
  {
    id: 159,
    emoji: "💻",
    name: "Laptop",
    meaning: "Computer or work",
  },
  {
    id: 160,
    emoji: "⌚",
    name: "Watch",
    meaning: "Time or punctuality",
  },
  {
    id: 161,
    emoji: "☕",
    name: "Hot Beverage",
    meaning: "Coffee or tea break",
  },
  {
    id: 162,
    emoji: "🍽️",
    name: "Fork and Knife",
    meaning: "Dining or meal time",
  },
  {
    id: 163,
    emoji: "🚪",
    name: "Door",
    meaning: "Entry or exit",
  },
  {
    id: 164,
    emoji: "🪟",
    name: "Window",
    meaning: "View or ventilation",
  },
  {
    id: 165,
    emoji: "🚿",
    name: "Shower",
    meaning: "Bathing or cleaning",
  },
  {
    id: 166,
    emoji: "🛁",
    name: "Bathtub",
    meaning: "Relaxation or self-care",
  },
  {
    id: 167,
    emoji: "🧴",
    name: "Lotion Bottle",
    meaning: "Skincare or hygiene",
  },
  {
    id: 168,
    emoji: "🧹",
    name: "Broom",
    meaning: "Cleaning or chores",
  },
  {
    id: 169,
    emoji: "🧺",
    name: "Laundry Basket",
    meaning: "Laundry day",
  },
  {
    id: 170,
    emoji: "📺",
    name: "Television",
    meaning: "Entertainment or news",
  },
  {
    id: 171,
    emoji: "🔦",
    name: "Flashlight",
    meaning: "Light source or emergency",
  },
  {
    id: 172,
    emoji: "🧳",
    name: "Luggage",
    meaning: "Travel or vacation",
  },
  {
    id: 173,
    emoji: "⏰",
    name: "Alarm Clock",
    meaning: "Wake up or reminder",
  },
  {
    id: 174,
    emoji: "🛒",
    name: "Shopping Cart",
    meaning: "Groceries or shopping",
  },
  {
    id: 175,
    emoji: "🎒",
    name: "Backpack",
    meaning: "School or hiking",
  },
  {
    id: 176,
    emoji: "🧦",
    name: "Socks",
    meaning: "Clothing or feet warmth",
  },
  {
    id: 177,
    emoji: "👔",
    name: "Necktie",
    meaning: "Formal wear or business",
  },
  {
    id: 178,
    emoji: "👓",
    name: "Glasses",
    meaning: "Vision or style",
  },
  {
    id: 179,
    emoji: "🧤",
    name: "Gloves",
    meaning: "Hand protection",
  },
  {
    id: 180,
    emoji: "🧢",
    name: "Billed Cap",
    meaning: "Casual headwear",
  },
  {
    id: 181,
    emoji: "🎧",
    name: "Headphone",
    meaning: "Music or audio",
  },
  {
    id: 182,
    emoji: "📷",
    name: "Camera",
    meaning: "Photography",
  },
  {
    id: 183,
    emoji: "🔌",
    name: "Electric Plug",
    meaning: "Power or charging",
  },
  {
    id: 184,
    emoji: "💡",
    name: "Light Bulb",
    meaning: "Idea or illumination",
  },
  {
    id: 185,
    emoji: "🔑",
    name: "Key",
    meaning: "Security or access",
  },
  {
    id: 186,
    emoji: "🚽",
    name: "Toilet",
    meaning: "Bathroom necessity",
  },
  {
    id: 187,
    emoji: "🧻",
    name: "Roll of Paper",
    meaning: "Toilet paper",
  },
  {
    id: 188,
    emoji: "🧼",
    name: "Soap",
    meaning: "Cleaning or hygiene",
  },
  {
    id: 189,
    emoji: "🪥",
    name: "Toothbrush",
    meaning: "Dental care",
  },
  {
    id: 190,
    emoji: "🧽",
    name: "Sponge",
    meaning: "Cleaning tool",
  },
  {
    id: 191,
    emoji: "🧯",
    name: "Fire Extinguisher",
    meaning: "Safety equipment",
  },
  {
    id: 192,
    emoji: "🛎️",
    name: "Bellhop Bell",
    meaning: "Service or attention",
  },
  {
    id: 193,
    emoji: "🧸",
    name: "Teddy Bear",
    meaning: "Comfort or childhood",
  },
  {
    id: 194,
    emoji: "🛋️",
    name: "Couch",
    meaning: "Living room furniture",
  },
  {
    id: 195,
    emoji: "💺",
    name: "Seat",
    meaning: "Chair or spot",
  },
  {
    id: 196,
    emoji: "🗑️",
    name: "Wastebasket",
    meaning: "Trash or disposal",
  },
  {
    id: 197,
    emoji: "🖊️",
    name: "Pen",
    meaning: "Writing instrument",
  },
  {
    id: 198,
    emoji: "📝",
    name: "Memo",
    meaning: "Note-taking",
  },
  {
    id: 199,
    emoji: "📁",
    name: "File Folder",
    meaning: "Organization",
  },
  {
    id: 200,
    emoji: "📌",
    name: "Pushpin",
    meaning: "Important note",
  },

  {
    id: 201,
    emoji: "🫨",
    name: "Shaking Face",
    meaning: "Shock or vibration",
  },
  {
    id: 202,
    emoji: "🫷",
    name: "Leftward Hand Push",
    meaning: "Blocking or rejection",
  },
  {
    id: 203,
    emoji: "🫸",
    name: "Rightward Hand Push",
    meaning: "Pushing forward",
  },
  {
    id: 204,
    emoji: "🫎",
    name: "Moose",
    meaning: "Canada or wilderness",
  },
  {
    id: 205,
    emoji: "🫏",
    name: "Donkey",
    meaning: "Stubbornness or work",
  },
  {
    id: 206,
    emoji: "🪽",
    name: "Wing",
    meaning: "Freedom or angels",
  },
  {
    id: 207,
    emoji: "🪿",
    name: "Goose",
    meaning: "Silly aggression",
  },
  {
    id: 208,
    emoji: "🪼",
    name: "Jellyfish",
    meaning: "Delicate or stinging",
  },
  {
    id: 209,
    emoji: "🪻",
    name: "Hyacinth",
    meaning: "Spring flowers",
  },
  {
    id: 210,
    emoji: "🪺",
    name: "Nest with Eggs",
    meaning: "New beginnings",
  },
  {
    id: 211,
    emoji: "🪹",
    name: "Empty Nest",
    meaning: "Empty nest syndrome",
  },
  {
    id: 212,
    emoji: "🪸",
    name: "Coral",
    meaning: "Ocean conservation",
  },
  {
    id: 213,
    emoji: "🪷",
    name: "Lotus",
    meaning: "Spiritual growth",
  },
  {
    id: 214,
    emoji: "🪶",
    name: "Feather",
    meaning: "Lightness or writing",
  },
  {
    id: 215,
    emoji: "🪵",
    name: "Wood",
    meaning: "Nature or material",
  },
  {
    id: 216,
    emoji: "🪴",
    name: "Potted Plant",
    meaning: "Houseplants or growth",
  },
  {
    id: 217,
    emoji: "🪳",
    name: "Cockroach",
    meaning: "Resilience or pests",
  },
  {
    id: 218,
    emoji: "🪲",
    name: "Beetle",
    meaning: "Nature or collection",
  },
  {
    id: 219,
    emoji: "🪰",
    name: "Fly",
    meaning: "Annoyance or decay",
  },
  {
    id: 220,
    emoji: "🪱",
    name: "Worm",
    meaning: "Soil health or fishing",
  },
  {
    id: 221,
    emoji: "🪯",
    name: "Khanda",
    meaning: "Sikhism symbol",
  },
  {
    id: 222,
    emoji: "🪮",
    name: "Hair Pick",
    meaning: "Black hair culture",
  },
  {
    id: 223,
    emoji: "🪭",
    name: "Folding Hand Fan",
    meaning: "Asian culture",
  },
  {
    id: 224,
    emoji: "🪬",
    name: "Hamsa",
    meaning: "Protection symbol",
  },
  {
    id: 225,
    emoji: "🪫",
    name: "Low Battery",
    meaning: "Need to recharge",
  },
  {
    id: 226,
    emoji: "🪪",
    name: "ID Card",
    meaning: "Identification",
  },
  {
    id: 227,
    emoji: "🪧",
    name: "Signpost",
    meaning: "Directions or protest",
  },
  {
    id: 228,
    emoji: "🪦",
    name: "Headstone",
    meaning: "Memorial or death",
  },
  {
    id: 229,
    emoji: "🪥",
    name: "Toothbrush",
    meaning: "Oral hygiene",
  },
  {
    id: 230,
    emoji: "🪣",
    name: "Bucket",
    meaning: "Tools or containers",
  },
  {
    id: 231,
    emoji: "🪨",
    name: "Rock",
    meaning: "Solidarity or nature",
  },
  {
    id: 232,
    emoji: "🪡",
    name: "Sewing Needle",
    meaning: "Crafting or repair",
  },
  {
    id: 233,
    emoji: "🪢",
    name: "Knot",
    meaning: "Connection or sailing",
  },
  {
    id: 234,
    emoji: "🪣",
    name: "Bucket",
    meaning: "Work or cleaning",
  },
  {
    id: 235,
    emoji: "🪙",
    name: "Coin",
    meaning: "Money or decisions",
  },
  {
    id: 236,
    emoji: "🪜",
    name: "Ladder",
    meaning: "Progress or work",
  },
  {
    id: 237,
    emoji: "🪝",
    name: "Hook",
    meaning: "Fishing or hanging",
  },
  {
    id: 238,
    emoji: "🪞",
    name: "Mirror",
    meaning: "Reflection or vanity",
  },
  {
    id: 239,
    emoji: "🪟",
    name: "Window",
    meaning: "View or architecture",
  },
  {
    id: 240,
    emoji: "🪠",
    name: "Plunger",
    meaning: "Plumbing or humor",
  },
  {
    id: 241,
    emoji: "🪤",
    name: "Mouse Trap",
    meaning: "Catching or danger",
  },
  {
    id: 242,
    emoji: "🪣",
    name: "Bucket",
    meaning: "Work or cleaning",
  },
  {
    id: 243,
    emoji: "🪆",
    name: "Nesting Dolls",
    meaning: "Russian culture",
  },
  {
    id: 244,
    emoji: "🪔",
    name: "Diya Lamp",
    meaning: "Indian festivals",
  },
  {
    id: 245,
    emoji: "🪕",
    name: "Banjo",
    meaning: "Country music",
  },
  {
    id: 246,
    emoji: "🪖",
    name: "Military Helmet",
    meaning: "War or safety",
  },
  {
    id: 247,
    emoji: "🪗",
    name: "Accordion",
    meaning: "Folk music",
  },
  {
    id: 248,
    emoji: "🪘",
    name: "Long Drum",
    meaning: "African culture",
  },
  {
    id: 249,
    emoji: "🪚",
    name: "Carpentry Saw",
    meaning: "Construction",
  },
  {
    id: 250,
    emoji: "🪛",
    name: "Screwdriver",
    meaning: "Tools or repair",
  },

  {
    id: 251,
    emoji: "🦄",
    name: "Unicorn",
    meaning: "Magic or uniqueness",
  },
  {
    id: 252,
    emoji: "🦋",
    name: "Butterfly",
    meaning: "Transformation or beauty",
  },
  {
    id: 253,
    emoji: "🦕",
    name: "Sauropod",
    meaning: "Dinosaurs or ancient times",
  },
  {
    id: 254,
    emoji: "🦖",
    name: "T-Rex",
    meaning: "Power or prehistoric",
  },
  {
    id: 255,
    emoji: "🦚",
    name: "Peacock",
    meaning: "Beauty or vanity",
  },
  {
    id: 256,
    emoji: "🦜",
    name: "Parrot",
    meaning: "Talking or tropical",
  },
  {
    id: 257,
    emoji: "🦢",
    name: "Swan",
    meaning: "Grace or elegance",
  },
  {
    id: 258,
    emoji: "🦩",
    name: "Flamingo",
    meaning: "Tropical vibes",
  },
  {
    id: 259,
    emoji: "🦔",
    name: "Hedgehog",
    meaning: "Cuteness or defense",
  },
  {
    id: 260,
    emoji: "🦫",
    name: "Beaver",
    meaning: "Hard work or construction",
  },
  {
    id: 261,
    emoji: "🦦",
    name: "Otter",
    meaning: "Playfulness",
  },
  {
    id: 262,
    emoji: "🦨",
    name: "Skunk",
    meaning: "Stink or warning",
  },
  {
    id: 263,
    emoji: "🦮",
    name: "Guide Dog",
    meaning: "Assistance or loyalty",
  },
  {
    id: 264,
    emoji: "🦥",
    name: "Sloth",
    meaning: "Slow movement",
  },
  {
    id: 265,
    emoji: "🦒",
    name: "Giraffe",
    meaning: "Height or uniqueness",
  },
  {
    id: 266,
    emoji: "🦘",
    name: "Kangaroo",
    meaning: "Australia or jumping",
  },
  {
    id: 267,
    emoji: "🦙",
    name: "Llama",
    meaning: "Andes or spitting",
  },
  {
    id: 268,
    emoji: "🦛",
    name: "Hippopotamus",
    meaning: "Water or size",
  },
  {
    id: 269,
    emoji: "🦏",
    name: "Rhinoceros",
    meaning: "Strength or endangered",
  },
  {
    id: 270,
    emoji: "🦓",
    name: "Zebra",
    meaning: "Stripes or safari",
  },
  {
    id: 271,
    emoji: "🦌",
    name: "Deer",
    meaning: "Gentleness or forest",
  },
  {
    id: 272,
    emoji: "🦬",
    name: "Bison",
    meaning: "North America or strength",
  },
  {
    id: 273,
    emoji: "🦍",
    name: "Gorilla",
    meaning: "Strength or jungle",
  },
  {
    id: 274,
    emoji: "🦧",
    name: "Orangutan",
    meaning: "Intelligence or rainforest",
  },
  {
    id: 275,
    emoji: "🦅",
    name: "Eagle",
    meaning: "Freedom or vision",
  },
  {
    id: 276,
    emoji: "🦉",
    name: "Owl",
    meaning: "Wisdom or night",
  },
  {
    id: 277,
    emoji: "🦤",
    name: "Dodo",
    meaning: "Extinction or foolishness",
  },
  {
    id: 278,
    emoji: "🦩",
    name: "Flamingo",
    meaning: "Tropical or balance",
  },
  {
    id: 279,
    emoji: "🦪",
    name: "Oyster",
    meaning: "Pearls or seafood",
  },
  {
    id: 280,
    emoji: "🦞",
    name: "Lobster",
    meaning: "Seafood or luxury",
  },
  {
    id: 281,
    emoji: "🦐",
    name: "Shrimp",
    meaning: "Small or seafood",
  },
  {
    id: 282,
    emoji: "🦑",
    name: "Squid",
    meaning: "Ocean or tentacles",
  },
  {
    id: 283,
    emoji: "🦀",
    name: "Crab",
    meaning: "Sideways movement or zodiac",
  },
  {
    id: 284,
    emoji: "🦆",
    name: "Duck",
    meaning: "Quacking or water",
  },
  {
    id: 285,
    emoji: "🦢",
    name: "Swan",
    meaning: "Grace or transformation",
  },
  {
    id: 286,
    emoji: "🦚",
    name: "Peacock",
    meaning: "Showiness or beauty",
  },
  {
    id: 287,
    emoji: "🦜",
    name: "Parrot",
    meaning: "Talking or pirate",
  },
  {
    id: 288,
    emoji: "🦩",
    name: "Flamingo",
    meaning: "Tropical or pink",
  },
  {
    id: 289,
    emoji: "🦔",
    name: "Hedgehog",
    meaning: "Spiky or cute",
  },
  {
    id: 290,
    emoji: "🦫",
    name: "Beaver",
    meaning: "Building or Canada",
  },
  {
    id: 291,
    emoji: "🦦",
    name: "Otter",
    meaning: "Playful or water",
  },
  {
    id: 292,
    emoji: "🦨",
    name: "Skunk",
    meaning: "Smelly or defensive",
  },
  {
    id: 293,
    emoji: "🏏",
    name: "Cricket bat and ball",
    meaning:
      "Cricket is a rounders game with two teams. Resembles baseball. The only sport with an official lunch break as well as tea breaks.",
  },
  {
    id: 294,
    emoji: "🦥",
    name: "Sloth",
    meaning: "Slow or lazy",
  },
  {
    id: 295,
    emoji: "🦒",
    name: "Giraffe",
    meaning: "Tall or safari",
  },
  {
    id: 296,
    emoji: "🦘",
    name: "Kangaroo",
    meaning: "Australia or pouch",
  },
  {
    id: 297,
    emoji: "🦙",
    name: "Llama",
    meaning: "Andes or wool",
  },
  {
    id: 298,
    emoji: "🦛",
    name: "Hippopotamus",
    meaning: "River or large",
  },
  {
    id: 299,
    emoji: "🦏",
    name: "Rhinoceros",
    meaning: "Horn or endangered",
  },
  {
    id: 300,
    emoji: "🦓",
    name: "Zebra",
    meaning: "Stripes or Africa",
  },

  {
    id: 301,
    emoji: "😑",
    name: "Expressionless Face",
    meaning:
      "A face showing no emotion, often used to convey annoyance, disappointment, or being unimpressed. The flat mouth and neutral eyes suggest silent frustration or resignation.",
  },

  {
    id: 302,
    emoji: "😶",
    name: "Face Without Mouth",
    meaning:
      "A face with no mouth, representing speechlessness, awkward silence, or being at a loss for words. Can imply someone is withholding their true thoughts or feelings.",
  },

  {
    id: 303,
    emoji: "😷",
    name: "Face with Medical Mask",
    meaning:
      "A face wearing a surgical mask, representing illness, health protection, or germophobia. Recently became symbolic of pandemic precautions and public health.",
  },

  {
    id: 304,
    emoji: "😵‍💫",
    name: "Face with Spiral Eyes",
    meaning:
      "A face with spiral eyes, indicating extreme confusion, disorientation, or being hypnotized. More intense version of the dizzy face, often used for surreal situations.",
  },

  {
    id: 305,
    emoji: "🤐",
    name: "Zipper-Mouth Face",
    meaning:
      "A face with a zipper for a mouth, representing keeping secrets, silence, or being forced to withhold information. Can imply 'my lips are sealed' in both serious and joking contexts.",
  },
  {
    id: 306,
    emoji: "🤒",
    name: "Face with Thermometer",
    meaning:
      "A sick face with a thermometer in its mouth, clearly showing illness or fever. Used when someone is physically unwell or pretending to be sick to avoid responsibilities.",
  },
  {
    id: 307,
    emoji: "🤕",
    name: "Face with Head-Bandage",
    meaning:
      "A face with a bandage around its head, representing injury, pain, or feeling emotionally hurt. Can be used literally for physical injury or metaphorically for emotional wounds.",
  },
  {
    id: 308,
    emoji: "🤢",
    name: "Nauseated Face",
    meaning:
      "A green-tinted face looking sick, showing disgust, nausea, or feeling queasy. Used for both physical sickness and reactions to unpleasant sights/situations.",
  },
  {
    id: 309,
    emoji: "🤮",
    name: "Face Vomiting",
    meaning:
      "A more extreme version of nausea, with the face actively vomiting. Represents intense disgust, sickness, or rejection of something repulsive.",
  },
  {
    id: 310,
    emoji: "🤧",
    name: "Sneezing Face",
    meaning:
      "A face sneezing with tissues, representing allergies, colds, or hay fever. Often used when someone is actually sick or pretending to be for humorous effect.",
  },
  {
    id: 311,
    emoji: "🥴",
    name: "Woozy Face",
    meaning:
      "A face with uneven eyes and a crooked smile, showing intoxication, love-sickness, or general disorientation. The expression suggests being tipsy or head-over-heels.",
  },

  {
    id: 312,
    emoji: "🎃",
    name: "Jack-O-Lantern",
    meaning:
      "A carved Halloween pumpkin, representing the holiday, spookiness, or autumn. Often used for horror themes or when something is frightening but fun.",
  },
  {
    id: 313,
    emoji: "😸",
    name: "Grinning Cat Face with Smiling Eyes",
    meaning:
      "A happy cat face showing joy or amusement. The feline version of 😄, often used to express cuteness or lighthearted happiness.",
  },
  {
    id: 314,
    emoji: "😹",
    name: "Cat Face with Tears of Joy",
    meaning:
      "A cat laughing so hard it's crying, the feline version of 😂. Used when something is extremely funny in an adorable way.",
  },
  {
    id: 315,
    emoji: "😻",
    name: "Smiling Cat Face with Heart Eyes",
    meaning:
      "A cat face with heart-shaped eyes, showing love or admiration. The feline version of 😍, often used for cute animals or romantic feelings toward pets.",
  },
  {
    id: 316,
    emoji: "😼",
    name: "Cat Face with Wry Smile",
    meaning:
      "A cat with a mischievous, knowing smile. Suggests the cat is being sly, smug, or up to no good in a playful way.",
  },
  {
    id: 317,
    emoji: "😽",
    name: "Kissing Cat Face",
    meaning:
      "A cat face with puckered lips, sending kisses. Used to show affection, often toward pets or in cute contexts.",
  },
  {
    id: 318,
    emoji: "🙀",
    name: "Weary Cat Face",
    meaning:
      "A cat face looking shocked or overwhelmed, the feline version of 😱. Represents being startled, exhausted, or dramatically surprised.",
  },
  {
    id: 319,
    emoji: "😿",
    name: "Crying Cat Face",
    meaning:
      "A sad cat face with tears, showing feline sadness or disappointment. Used when a cat (or cat lover) is heartbroken or upset.",
  },
  {
    id: 320,
    emoji: "😾",
    name: "Pouting Cat Face",
    meaning:
      "An angry cat face with a frown, showing feline displeasure. Represents a cat being grumpy or someone acting catty.",
  },

  {
    id: 321,
    emoji: "🐎",
    name: "Horse",
    meaning:
      "Speed, elegance, or equestrian activities. Often used for racing or countryside themes.",
  },
  {
    id: 322,
    emoji: "🐄",
    name: "Cow",
    meaning:
      "Farming, dairy products, or countryside life. Sometimes represents patience or gentleness.",
  },
  {
    id: 323,
    emoji: "🐖",
    name: "Pig",
    meaning:
      "Farm animals, greed, or cuteness. The pink pig often symbolizes good luck in some cultures.",
  },
  {
    id: 324,
    emoji: "🐐",
    name: "Goat",
    meaning:
      "Stubbornness, mountain climbing, or the zodiac sign Capricorn. Also represents perseverance.",
  },
  {
    id: 325,
    emoji: "🐕",
    name: "Dog",
    meaning:
      "Loyalty, pets, or companionship. The generic dog emoji represents all breeds.",
  },
  {
    id: 326,
    emoji: "🐈",
    name: "Cat",
    meaning:
      "Independence, pets, or mystery. Often used by cat lovers in casual conversation.",
  },
  {
    id: 327,
    emoji: "🐘",
    name: "Elephant",
    meaning:
      "Strength, memory, or wildlife. Represents good luck in some Asian cultures.",
  },
  {
    id: 328,
    emoji: "🦒",
    name: "Giraffe",
    meaning:
      "Height, uniqueness, or safari animals. Sometimes represents seeing things from a higher perspective.",
  },
  {
    id: 329,
    emoji: "🦘",
    name: "Kangaroo",
    meaning:
      "Australia, jumping, or motherhood (via the pouch). Represents forward movement.",
  },
  {
    id: 330,
    emoji: "🦛",
    name: "Hippopotamus",
    meaning:
      "Water-loving animals, size, or African wildlife. Despite appearance, represents territorial nature.",
  },
  {
    id: 331,
    emoji: "🐪",
    name: "Camel",
    meaning:
      "Deserts, endurance, or Middle Eastern culture. The one-hump camel is called a dromedary.",
  },
  {
    id: 332,
    emoji: "🐫",
    name: "Two-Hump Camel",
    meaning:
      "Asian deserts, resilience, or long journeys. The Bactrian camel survives extreme climates.",
  },
  {
    id: 333,
    emoji: "🦙",
    name: "Llama",
    meaning:
      "Andes Mountains, spitting, or trendy fiber. Popular in memes for their expressive faces.",
  },
  {
    id: 334,
    emoji: "🦌",
    name: "Deer",
    meaning:
      "Gentleness, forests, or Bambi-like innocence. The buck represents nature and tranquility.",
  },
  {
    id: 335,
    emoji: "🐿️",
    name: "Chipmunk",
    meaning:
      "Small woodland creatures, gathering, or cheek-stuffing. Often represents preparation.",
  },
  {
    id: 336,
    emoji: "🦔",
    name: "Hedgehog",
    meaning:
      "Prickly but cute, defense mechanisms, or nocturnal animals. Popular in children's stories.",
  },
  {
    id: 337,
    emoji: "🦇",
    name: "Bat",
    meaning:
      "Nighttime, Halloween, or echolocation. Represents both spookiness and ecological importance.",
  },
  {
    id: 338,
    emoji: "🐻",
    name: "Bear",
    meaning:
      "Strength, wilderness, or cuddliness. The generic bear represents all species from polar to panda.",
  },
  {
    id: 339,
    emoji: "🐨",
    name: "Koala",
    meaning:
      "Australia, sleepiness, or eucalyptus lovers. Represents calmness and environmental conservation.",
  },
  {
    id: 340,
    emoji: "🦥",
    name: "Sloth",
    meaning:
      "Slow movement, relaxation, or tropical forests. Often used for 'taking it easy' humor.",
  },
  {
    id: 341,
    emoji: "🦦",
    name: "Otter",
    meaning:
      "Playfulness, water habitats, or hand-holding while sleeping. Represents joy and curiosity.",
  },
  {
    id: 342,
    emoji: "🦨",
    name: "Skunk",
    meaning:
      "Strong odor, defense mechanisms, or Pepe Le Pew references. Sometimes represents being 'stinky' humorously.",
  },
  {
    id: 343,
    emoji: "🦃",
    name: "Turkey",
    meaning:
      "Thanksgiving, farming, or gobbling sounds. The male turkey has distinctive tail feathers.",
  },
  {
    id: 344,
    emoji: "🐓",
    name: "Rooster",
    meaning:
      "Morning, alarm clocks, or farm life. Represents dawn in many cultures with its crowing.",
  },
  {
    id: 345,
    emoji: "🦚",
    name: "Peacock",
    meaning:
      "Beauty, vanity, or vibrant colors. The male's tail feathers symbolize pride and display.",
  },
  {
    id: 346,
    emoji: "🦜",
    name: "Parrot",
    meaning:
      "Tropical birds, mimicry, or pirate themes. Represents colorful personalities and loud voices.",
  },
  {
    id: 347,
    emoji: "🦢",
    name: "Swan",
    meaning:
      "Grace, transformation (ugly duckling), or romance. White swans symbolize purity in many cultures.",
  },
  {
    id: 348,
    emoji: "🐇",
    name: "Rabbit",
    meaning:
      "Speed, reproduction, or Easter traditions. Often represents luck in various cultures.",
  },
  {
    id: 349,
    emoji: "🐿️",
    name: "Chipmunk",
    meaning:
      "Small woodland creatures, gathering, or cheek-stuffing. Often represents preparation.",
  },
  {
    id: 350,
    emoji: "🦉",
    name: "Owl",
    meaning:
      "Wisdom, nighttime, or Harry Potter references. Represents knowledge and mystery.",
  },
  {
    id: 351,
    emoji: "🐊",
    name: "Crocodile",
    meaning:
      "Danger, stealth, or tropical rivers. Known for powerful jaws and ancient lineage.",
  },
  {
    id: 352,
    emoji: "🐢",
    name: "Turtle",
    meaning:
      "Slow movement, longevity, or ocean conservation. The shell represents protection.",
  },
  {
    id: 353,
    emoji: "🦎",
    name: "Lizard",
    meaning:
      "Reptiles, desert habitats, or regeneration. Some lizards can regrow their tails.",
  },
  {
    id: 354,
    emoji: "🐍",
    name: "Snake",
    meaning:
      "Danger, medicine (Rod of Asclepius), or temptation. Represents both fear and rebirth (shedding skin).",
  },
  {
    id: 355,
    emoji: "🦕",
    name: "Sauropod",
    meaning:
      "Long-necked dinosaurs like brontosaurus. Represents prehistoric times and giant creatures.",
  },
  {
    id: 356,
    emoji: "🦖",
    name: "T-Rex",
    meaning:
      "The mighty Tyrannosaurus Rex. Used for power, fierceness, or dinosaur enthusiasm.",
  },
  {
    id: 357,
    emoji: "🐋",
    name: "Whale",
    meaning:
      "Ocean giants, conservation, or 'whale' as slang for big things. Represents marine ecosystems.",
  },
  {
    id: 358,
    emoji: "🐬",
    name: "Dolphin",
    meaning:
      "Intelligence, playfulness, or marine shows. Symbolizes harmony and communication.",
  },
  {
    id: 359,
    emoji: "🦈",
    name: "Shark",
    meaning:
      "Predators, danger, or Shark Week enthusiasm. Represents both fear and respect for ocean life.",
  },
  {
    id: 360,
    emoji: "🐟",
    name: "Fish",
    meaning:
      "Aquatic life, fishing, or Christianity (ichthys symbol). The generic fish represents all species.",
  },
  {
    id: 361,
    emoji: "🐠",
    name: "Tropical Fish",
    meaning:
      "Colorful reefs, aquariums, or Finding Nemo references. Represents vibrant marine biodiversity.",
  },
  {
    id: 362,
    emoji: "🐡",
    name: "Blowfish",
    meaning:
      "Puffing up in defense, sushi, or ocean oddities. Inflates when threatened.",
  },
  {
    id: 363,
    emoji: "🦐",
    name: "Shrimp",
    meaning:
      "Small crustaceans, seafood, or 'shrimpy' size comparisons. Important in many cuisines.",
  },
  {
    id: 364,
    emoji: "🦞",
    name: "Lobster",
    meaning:
      "Fancy seafood, Maine culture, or red when cooked. Represents luxury dining in some contexts.",
  },
  {
    id: 365,
    emoji: "🦀",
    name: "Crab",
    meaning:
      "Sideways walking, zodiac sign Cancer, or beach creatures. The hard shell represents protection.",
  },
  {
    id: 366,
    emoji: "🐙",
    name: "Octopus",
    meaning:
      "Intelligence, flexibility, or eight arms multitasking. Represents ocean mysteries and adaptability.",
  },
  {
    id: 367,
    emoji: "🦑",
    name: "Squid",
    meaning:
      "Deep sea creatures, ink defense, or calamari. Longer and more streamlined than octopuses.",
  },
  {
    id: 368,
    emoji: "🦂",
    name: "Scorpion",
    meaning:
      "Danger, zodiac sign Scorpio, or desert survival. The stinger represents potent defense.",
  },
  {
    id: 369,
    emoji: "🕷️",
    name: "Spider",
    meaning:
      "Web-spinning, Halloween, or arachnophobia. Represents patience (web-building) and creativity.",
  },
  {
    id: 370,
    emoji: "🐜",
    name: "Ant",
    meaning:
      "Hard work, colonies, or small but strong. Symbolizes teamwork and persistence.",
  },
  {
    id: 371,
    emoji: "🐝",
    name: "Honeybee",
    meaning:
      "Pollination, honey, or environmental importance. Represents busy productivity and community.",
  },
  {
    id: 372,
    emoji: "🦋",
    name: "Butterfly",
    meaning:
      "Transformation, beauty, or metamorphosis. Symbolizes change and delicate grace.",
  },
  {
    id: 373,
    emoji: "🐌",
    name: "Snail",
    meaning:
      "Slow movement, carrying homes (shells), or garden creatures. Represents patience and persistence.",
  },
  {
    id: 374,
    emoji: "🦗",
    name: "Cricket",
    meaning:
      "Chirping sounds, jumping, or good luck in some cultures. Featured in folktales and songs.",
  },
  {
    id: 375,
    emoji: "🌪️",
    name: "Tornado",
    meaning:
      "Extreme weather, chaos, or sudden change. Represents destructive power or life upheavals.",
  },
  {
    id: 376,
    emoji: "🌫️",
    name: "Fog",
    meaning:
      "Low visibility, mystery, or confusion. Often used for eerie atmospheres or unclear situations.",
  },
  {
    id: 377,
    emoji: "🧉",
    name: "Mate",
    meaning:
      "South American herbal tea, shared socially. Symbolizes community and tradition in Argentina/Uruguay.",
  },
  {
    id: 378,
    emoji: "🫓",
    name: "Flatbread",
    meaning:
      "Global staple like naan or tortilla. Represents cultural diversity in cuisine.",
  },
  {
    id: 379,
    emoji: "🧬",
    name: "DNA",
    meaning:
      "Genetics, heredity, or scientific research. Symbolizes life's building blocks.",
  },
  {
    id: 380,
    emoji: "🪙",
    name: "Coin",
    meaning:
      "Money, decisions (flipping), or cryptocurrency. Represents financial transactions or luck.",
  },
  {
    id: 381,
    emoji: "🧝",
    name: "Elf",
    meaning:
      "Fantasy creatures, Tolkien lore, or pointy-eared wisdom. Used in RPG or fairy tale contexts.",
  },
  {
    id: 382,
    emoji: "🪽",
    name: "Wing",
    meaning:
      "Freedom, angels, or flight. Can symbolize aspirations or heavenly messengers.",
  },
  {
    id: 383,
    emoji: "🪣",
    name: "Bucket",
    meaning:
      "Containers, work, or 'kick the bucket' humor. Represents manual labor or storage.",
  },
  {
    id: 384,
    emoji: "🪜",
    name: "Ladder",
    meaning:
      "Climbing, progress, or home improvement. Symbolizes upward mobility or DIY projects.",
  },
  {
    id: 385,
    emoji: "🦷",
    name: "Tooth",
    meaning:
      "Dental health, pain, or 'biting' sarcasm. Used literally or metaphorically for toughness.",
  },
  {
    id: 386,
    emoji: "🩹",
    name: "Adhesive Bandage",
    meaning:
      "Minor injuries, healing, or emotional wounds. Represents quick fixes or care.",
  },
  {
    id: 387,
    emoji: "🪧",
    name: "Placard",
    meaning:
      "Protests, announcements, or signage. Used for activism or public information.",
  },
  {
    id: 388,
    emoji: "🪦",
    name: "Headstone",
    meaning:
      "Memorials, mortality, or remembrance. Symbolizes legacy or finality.",
  },
  {
    id: 389,
    emoji: "🛝",
    name: "Playground Slide",
    meaning:
      "Childhood, fun, or sudden drops. Represents playfulness or life's ups/downs.",
  },
  {
    id: 390,
    emoji: "🛖",
    name: "Hut",
    meaning:
      "Simple living, rural homes, or survival shelters. Symbolizes minimalism or tradition.",
  },
  {
    id: 391,
    emoji: "🪫",
    name: "Low Battery",
    meaning:
      "Exhaustion, need to recharge, or tech issues. Metaphor for personal energy levels.",
  },
  {
    id: 392,
    emoji: "🧭",
    name: "Compass",
    meaning:
      "Navigation, direction in life, or adventure. Represents finding one's path.",
  },
  {
    id: 393,
    emoji: "🪮",
    name: "Hair Pick",
    meaning:
      "Black hair culture, styling, or identity. Symbolizes pride in natural hair.",
  },
  {
    id: 394,
    emoji: "🪢",
    name: "Knot",
    meaning:
      "Connections, sailing, or complexity. Represents bonds that are hard to untie.",
  },
  {
    id: 395,
    emoji: "🪕",
    name: "Banjo",
    meaning:
      "Folk music, country vibes, or bluegrass. Symbolizes rural musical traditions.",
  },
  {
    id: 396,
    emoji: "🪘",
    name: "Long Drum",
    meaning:
      "African rhythms, ceremonies, or djembe. Represents cultural percussion.",
  },
  {
    id: 397,
    emoji: "🪨",
    name: "Rock",
    meaning:
      "Solidarity, geology, or 'rock bottom.' Used literally or metaphorically for stability.",
  },
  {
    id: 398,
    emoji: "🪰",
    name: "Fly",
    meaning:
      "Pests, decay, or persistence. Represents annoyance or scientific study (Drosophila).",
  },
  {
    id: 399,
    emoji: "🪱",
    name: "Worm",
    meaning:
      "Soil health, fishing bait, or wriggling. Symbolizes humble but vital creatures.",
  },
  {
    id: 400,
    emoji: "🪲",
    name: "Beetle",
    meaning:
      "Bugs, collections, or metamorphosis. Scarabs symbolized rebirth in ancient Egypt.",
  },
];

export default emojipedia;
