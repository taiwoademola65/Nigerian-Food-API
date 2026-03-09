const foodAPI = async () => {
  document.getElementById("spinner").style.display = 'block'
  document.getElementById('errorMessage').style.display = 'none'

  // Try and Catch

  try {
    const endpoint = 'https://mongotest2026.vercel.app/api/foods'
    const result = fetch(endpoint)
    const awaitedResult = await result
    const convertedResult = await awaitedResult.json()
    let allFoods = convertedResult.data
    foodCards(allFoods);
    document.getElementById("spinner").style.display = 'none'


  } catch (error) {
    document.getElementById("spinner").style.display = 'none'
    document.getElementById('errorMessage').style.display = 'block'
  }




}

foodAPI()
const modalFunction = (foodId) => {
  document.getElementById('modal').style.display = 'block'
  // alert(foodId)
}
const clearModal = () => {
  document.getElementById('modal').style.display = 'none'
}

const retryBtn = () =>{
  foodAPI()
}
const foodCards = (foodArrays) => {
  const show = document.getElementById('show')
  for (let i = 0; i < foodArrays.length; i++) {
    const foodData = foodArrays[i];
    let images = "Food-Images/" + foodData.name.toLowerCase().replaceAll(" ", "-") + ".jpg"

    show.innerHTML += `
      <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer" title="Click for more information" onclick="modalFunction(${foodData.id})">
      <img src=${images} alt="food-images" class="w-full h-60 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">${foodData.id}. ${foodData.name}</h3>
        <p class="text-gray-600 dark:text-gray-300">${foodData.description}</p>
        <div>
    <ul class="mt-3 flex flex-col space-y-2">
        <li class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" class="mr-2 h-auto w-6 text-green-600 sm:w-7"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="#000" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"/></g></svg>
            <p class="text-base text-slate-700 sm:text-lg">${foodData.preparationTime}</p>
        </li>
        <li class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="mr-2 h-auto w-6 text-green-600 sm:w-7"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v16a2 2 0 0 0 2 2h16M7 16h8m-8-5h12M7 6h3"/></svg>
            <p class="text-base text-slate-700 sm:text-lg">Difficulty: ${foodData.difficulty}</p>
        </li>
        <li class="flex">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2048 2048" class="mr-2 h-auto w-6 text-green-600 sm:w-7"><path fill="#000" d="M1280 64q0 179 66 330t190 278t190 278t66 330q0 106-27 204t-78 183t-120 156t-155 120t-184 77t-204 28t-204-27t-183-78t-156-120t-120-155t-77-184t-28-204q0-84 18-165t52-155t84-141t113-121q7 38 19 78t28 80t38 76t46 67q20 25 52 25q27 0 45-19t19-46q0-11-3-20t-10-18q-28-41-49-81t-37-82t-23-87t-8-95q0-119 45-224t124-183T992 46t224-46h64zm-256 1856q133 0 249-50t204-137t137-203t50-250q0-151-56-281t-162-236q-130-131-204-289t-88-342q-83 11-153 50t-123 99t-81 135t-29 160q0 78 23 141t68 126q19 26 29 54t11 62q0 40-15 75t-42 61t-61 42t-75 15q-46 0-81-17t-62-46t-48-65t-40-72q-46 73-68 157t-23 171q0 133 50 249t137 204t203 137t250 50"/></svg>
            <p class="text-base text-slate-700 sm:text-lg">${foodData.calories} Calories</p>
        </li>
        <li class="flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" class="mr-2 h-auto w-6 text-green-600 sm:w-7"><path fill="#000" d="M244.24 60a8 8 0 0 0-7.75-.4c-42.93 21-73.59 11.16-106 .78c-34.09-10.85-69.29-22.1-118 1.68A8 8 0 0 0 8 69.24v119.93a8 8 0 0 0 11.51 7.19c42.93-21 73.59-11.16 106.05-.78c19.24 6.15 38.84 12.42 61 12.42c17.09 0 35.73-3.72 56.91-14.06a8 8 0 0 0 4.49-7.18V66.83a8 8 0 0 0-3.72-6.83M48 152a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm80 8a32 32 0 1 1 32-32a32 32 0 0 1-32 32m96 8a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z"/></svg> <p class="text-base flex items-center text-slate-700 sm:text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#000" d="M4 9h2V3h2l3.42 6H16V3h2v6h2v2h-2v2h2v2h-2v6h-2l-3.43-6H8v6H6v-6H4v-2h2v-2H4zm4 0h1.13L8 7.03zm0 2v2h3.42l-1.14-2zm8 6v-2h-1.15zm-3.44-6l1.15 2H16v-2z"/></svg>${foodData.price}</p>
        </li>
    </ul>
</div>
<div class="flex flex-wrap gap-1">
  <span class="shrink-0 rounded-full bg-emerald-500 px-3 font-mono text-md font-medium tracking-tight text-white">${foodData.region}</span>
 

    ${foodData.isSpicy === true ? ` <span class="shrink-0 rounded-full bg-red-500 px-3 font-mono text-md font-medium tracking-tight text-white">Spicy</span>` : ''}

    ${foodData.isVegetarian === true ? ` <span class="shrink-0 rounded-full bg-red-500 px-3 font-mono text-md font-medium tracking-tight text-white">Vegetarian</span>` : ''}
</div>
      </div>
    </div>`
  }

}

