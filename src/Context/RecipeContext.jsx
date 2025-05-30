
import React, { createContext, useState } from 'react'
export const RecipeDataContext = createContext(null)

const RecipeContext = (props) => {

const [recipeArray, setrecipeArray] = useState([
  {
    "id": "A1b2C3d4E5f6G7h8I9j0",
    "category": "indian",
    "chef": "Sanjeev Kapoor",
    "title": "Paneer Butter Masala",
    "description": "A rich and creamy North Indian curry made with paneer (Indian cottage cheese), butter, cream, and aromatic spices.",
    "ingridients": "250g paneer (cubed), 2 tbsp butter, 1 tbsp oil, 1 large onion (finely chopped), 2 tomatoes (pureed), 1 tsp ginger-garlic paste, 1/2 tsp turmeric powder, 1 tsp red chili powder, 1 tsp garam masala, 1/2 tsp kasuri methi (dried fenugreek leaves), 1/4 cup fresh cream, salt to taste, fresh coriander for garnish",
    "url":"https://media.istockphoto.com/id/1077980738/photo/green-peas-or-matar-paneer-curry-recipe-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=SShuhVPIWBpUaJXqvdWqjPrh0AqsR6VR68GInZlyw6Y=",
    "instructions": "Heat oil and butter in a pan. Add chopped onions and sauté until golden. Add ginger-garlic paste and cook for a minute. Add tomato puree, turmeric, chili powder, and salt. Cook until oil separates. Add paneer cubes and mix well. Add cream, kasuri methi, and garam masala. Cook for 2-3 minutes. Garnish with fresh coriander and serve hot with naan or rice.",
    },
  {
    "id": "Z9y8X7w6V5u4T3s2R1q0",
    "category": "indian",
    "chef": "Vikas Khanna",
    "title": "Vegetable Biryani",
    "description": "Layered basmati rice cooked with mixed vegetables, saffron, and aromatic spices for a fragrant one-pot meal.",
    "ingridients": "2 cups basmati rice, 1 cup mixed vegetables (carrot, peas, beans), 1 large onion (sliced), 2 tomatoes (chopped), 2 tbsp yogurt, 1 tsp ginger-garlic paste, 1/2 tsp saffron threads (soaked in warm milk), 1 tsp garam masala, 1 bay leaf, 4 cloves, 2 cardamom pods, 1 cinnamon stick, 2 tbsp ghee, salt to taste, fresh coriander and mint for garnish",
    "instructions": "Wash and soak rice for 30 minutes. Heat ghee in a pot and sauté whole spices until fragrant. Add onions and cook until golden. Stir in ginger-garlic paste, tomatoes, yogurt, and mixed vegetables. Cook 5 minutes. Layer half the rice over vegetables, sprinkle saffron milk, garnish herbs. Add remaining rice and saffron. Cover and cook on low heat 20 minutes. Fluff gently and serve with raita.",
    "url":"https://media.istockphoto.com/id/495202302/photo/indian-pulav-or-vegetables-rice-or-veg-biryani.jpg?s=612x612&w=0&k=20&c=n3BfMs7sfS_vu-jgcbm7r5cn0waeLKIB5gcxFuYvC88="
  },
  {
    "id": "L0k9J8h7G6f5E4d3C2b1",
    "category": "indian",
    "chef": "Tarla Dalal",
    "title": "Chana Masala",
    "description": "Tangy and spicy chickpea curry simmered in a tomato-onion gravy with traditional Indian spices.",
    "ingridients": "2 cups cooked chickpeas, 2 tbsp oil, 1 large onion (finely chopped), 2 tomatoes (pureed), 1 tsp ginger-garlic paste, 1 tsp cumin seeds, 1/2 tsp turmeric powder, 1 tsp coriander powder, 1 tsp red chili powder, 1 tsp chana masala powder, salt to taste, fresh coriander for garnish",
    "instructions": "Heat oil and crackle cumin seeds. Add onions and sauté till golden. Add ginger-garlic paste and cook 1 minute. Stir in tomato puree and spices, cook until oil separates. Add chickpeas and 1 cup water, simmer 10 minutes. Garnish with coriander and serve with bhature or rice.",
    "url": "https://media.istockphoto.com/id/1802423327/photo/dry-chilli-chana.jpg?s=612x612&w=0&k=20&c=xN82wzB6Zld634YxMnlh8HbO13IkTEw6otqyMSgsn5g=",
  },
  {
    "id": "M1n2B3v4C5x6Z7a8S9d0",
    "category": "mexican",
    "chef": "Rick Bayless",
    "title": "Vegetarian Tacos",
    "description": "Soft corn tortillas filled with spiced sautéed veggies, black beans, and fresh salsa for a vibrant taco night.",
    "ingridients": "8 small corn tortillas, 1 cup black beans (cooked), 1 red bell pepper (sliced), 1 zucchini (sliced), 1 onion (sliced), 1 tsp chili powder, 1/2 tsp cumin, 1/2 tsp paprika, salt to taste, 1 avocado (sliced), fresh cilantro, lime wedges",
    "instructions": "Heat oil in a pan and sauté onion, bell pepper, and zucchini with spices until tender. Warm tortillas on a griddle. Fill each tortilla with veggies, black beans, and avocado. Top with cilantro and a squeeze of lime. Serve immediately.",
    "url": "https://media.istockphoto.com/id/1313493054/photo/turmeric-flatbread-with-ham-cheese-and-grilled-vegetables-on-a-white-background.jpg?s=612x612&w=0&k=20&c=5m8l2bq4f4kwBXYgZ0E6IDlzcD-IzKNt4xWMCPL853k=",
  },
  {
    "id": "Q1w2E3r4T5y6U7i8O9p0",
    "category": "italian",
    "chef": "Gino D'Acampo",
    "title": "Margherita Pizza",
    "description": "Classic Neapolitan pizza topped with fresh tomatoes, mozzarella, basil, and a drizzle of olive oil.",
    "ingridients": "1 pizza dough, 1/2 cup tomato sauce, 200g fresh mozzarella (sliced), fresh basil leaves, 2 tbsp olive oil, salt to taste",
    "instructions": "Preheat oven to highest temperature. Roll out dough on a floured surface. Spread tomato sauce evenly, place mozzarella slices on top. Drizzle olive oil and sprinkle salt. Bake 8–10 minutes until crust is golden. Garnish with fresh basil and slice.",
    "url": "https://media.istockphoto.com/id/184969517/photo/marinara-pizza.jpg?s=612x612&w=0&k=20&c=5l07HQR40k9zYZ6Sc05Er58fvd_QHIIu3INiWApn6GY="
  },
  {
    "id": "P0o9I8u7Y6t5R4e3W2q1",
    "category": "chinese",
    "chef": "Ching He Huang",
    "title": "Vegetable Stir-Fry",
    "description": "Crisp-tender mixed vegetables tossed in a savory garlic-ginger soy sauce, ready in minutes.",
    "ingridients": "1 cup broccoli florets, 1 cup bell pepper strips, 1 cup snap peas, 1 carrot (sliced), 2 tbsp soy sauce, 1 tsp sesame oil, 1 tsp ginger (minced), 1 tsp garlic (minced), 1 tbsp oil, sesame seeds for garnish",
    "instructions": "Heat oil in a wok over high heat. Add ginger and garlic, stir 30 seconds. Add all vegetables and stir-fry 4–5 minutes. Pour in soy sauce and sesame oil, toss to coat. Cook 1 more minute. Garnish with sesame seeds and serve with rice or noodles.",
    "url": "https://media.istockphoto.com/id/1310629052/photo/kerala-style-veg-meals-including-boiled-matta-rice-red-carrot-thoran-beans-stir-fry-green.jpg?s=612x612&w=0&k=20&c=-Fn5wKycZdHfL4EwixjXCdHLeM3Vg-n3jpzqlo0jMcw="
  },
  {
    "id": "U1y2T3r4E5w6Q7a8Z9x0",
    "category": "mediterranean",
    "chef": "Yotam Ottolenghi",
    "title": "Greek Salad",
    "description": "A refreshing mix of cucumbers, tomatoes, olives, red onion, and feta cheese tossed in a lemon-oregano dressing.",
    "ingridients": "2 cucumbers (sliced), 3 tomatoes (chunked), 1/2 red onion (thinly sliced), 1/2 cup black olives, 150g feta cheese (crumbled), 2 tbsp olive oil, 1 tbsp lemon juice, 1 tsp dried oregano, salt and pepper to taste",
    "instructions": "Combine cucumbers, tomatoes, onion, and olives in a bowl. Whisk olive oil, lemon juice, oregano, salt, and pepper. Pour dressing over salad and toss gently. Top with crumbled feta and serve chilled.",
    "url": "https://media.istockphoto.com/id/1264335504/photo/image-of-greek-salad-patterned-bowl-side-dishes-of-chopped-cherry-tomatoes-and-feta-cheese.jpg?s=612x612&w=0&k=20&c=Rd6ETFFXWmPGLgaKGMAZagXJa-UZRS_xcT19CeJVhqY="
  },
  {
    "id": "L8k7J6h5G4f3E2d1C0b9",
    "category": "middle eastern",
    "chef": "Maureen Abood",
    "title": "Falafel Wrap",
    "description": "Crunchy chickpea falafel balls wrapped in a pita with lettuce, tomato, cucumber, and tahini sauce.",
    "ingridients": "12 falafel balls, 2 pita breads, 1 cup lettuce (shredded), 1 tomato (sliced), 1/2 cucumber (sliced), 1/4 cup tahini sauce, salt to taste",
    "instructions": "Warm pita breads in a pan. Spread tahini sauce inside. Fill with lettuce, tomato, cucumber, and 6 falafel balls each. Drizzle extra sauce and roll up tightly. Serve immediately.",
    "url": "https://media.istockphoto.com/id/526149736/photo/vegetarian-falafel-wraps.jpg?s=612x612&w=0&k=20&c=1L7JWTSojjATNYNONLC03Vnh-EcU3uDjwXBLrYYQRtk="
  },
  {
    "id": "V2c3X4z5A6s7D8f9G0h1",
    "category": "thai",
    "chef": "Pailin Chongchitnant",
    "title": "Vegetable Pad Thai",
    "description": "Rice noodles stir-fried with tofu, vegetables, and tamarind sauce, garnished with crushed peanuts and lime.",
    "ingridients": "200g rice noodles, 100g firm tofu (cubed), 1 cup bean sprouts, 1 carrot (julienned), 2 tbsp tamarind paste, 1 tbsp soy sauce, 1 tbsp sugar, 1 egg (optional), 2 tbsp oil, crushed peanuts, lime wedges, spring onions",
    "instructions": "Soak noodles in warm water until pliable. Heat oil in a wok, add tofu and cook until golden. Push aside, crack in egg and scramble (optional). Add noodles, tamarind paste, soy sauce, and sugar, toss well. Stir in vegetables and sprouts, cook 2 minutes. Serve topped with peanuts, spring onions, and lime wedges.",
    "url": "https://pinchofyum.com/cdn-cgi/image/width=680,height=99999,fit=scale-down/wp-content/uploads/Vegetarian-Pad-Tha-2-2.jpg"
  },
  {
    "id": "N3b4M5v6C7x8Z9a0S1d2",
    "category": "italian",
    "chef": "Massimo Bottura",
    "title": "Caprese Salad",
    "description": "A simple Italian salad of fresh tomatoes, mozzarella, basil, and a drizzle of balsamic reduction.",
    "ingridients": "3 ripe tomatoes (sliced), 200g fresh mozzarella (sliced), fresh basil leaves, 2 tbsp olive oil, 1 tbsp balsamic glaze, salt and pepper to taste",
    "instructions": "Arrange tomato and mozzarella slices alternately on a platter. Tuck basil leaves between slices. Drizzle olive oil and balsamic glaze over top. Season with salt and pepper. Serve immediately.",
    "url": "https://hips.hearstapps.com/hmg-prod/images/caprese-salad-recipe-1-681a40f021471.jpeg?crop=1xw:1xh;center,top&resize=1200:*``"
  }
]
)
console.log(recipeArray);

    return (
    <RecipeDataContext.Provider value = {[recipeArray, setrecipeArray]}>
      {props.children}
    </RecipeDataContext.Provider>
  )
}

export default RecipeContext
