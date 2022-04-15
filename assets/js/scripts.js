
/*Marcelo Olmpio
  Dev.
  https://www.wbsys.com.br
*/

const BASE_URL="https://thatcopy.pw/catapi/rest/";
const catBtn= document.getElementById('change-cat');
const catImg= document.getElementById('cat');
 const getGatos = async()=>{
 try{
    const data = await fetch(BASE_URL);
    const json = await data.json();
 return json.webpurl;
 }catch(e){
     console.log(e.message);
 }
};

const loadImg= async () => {
catImg.src= await getGatos()

}

catBtn.addEventListener('click',loadImg)
loadImg()
