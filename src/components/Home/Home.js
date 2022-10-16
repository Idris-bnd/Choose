import React, { useEffect, useState } from 'react';
import Colors from '../Colors/Colors';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.scss';


function Home() {

   const [colorsArray, setColorsArray] = useState({
         colors:[
            {
                  colorValue: '#C8FFBE ',
                  check: false,
            },
            {
                  colorValue: '#623B5A',
                  check: false,
            },
            {
                  colorValue: '#C6B38E',
                  check: false,
            },
            {
                  colorValue: '#0F1A20',
                  check: false,
            },
         ]
   });
     
   const changeAll = () => {
         const colorsArrayBis = colorsArray.colors;
         colorsArrayBis.forEach((color) => {
            if (!color.check) {
               const randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16).toUpperCase();
               return (
                  color.colorValue = '#'+randomColor,
                  color.check = color.check
               );
            }
         });
         setColorsArray({
            colors: colorsArrayBis
         });
   };

   const setCheck = (index) => {
         const colorsArrayBis = colorsArray.colors;
         colorsArrayBis.find((color) => color.id === index)
         const colorTo = colorsArrayBis[index];
         if (colorTo.check) {
            colorsArrayBis.splice(index, 1, {
               colorValue : colorTo.colorValue,
               check : false
            })
         }else{
            colorsArrayBis.splice(index, 1, {
               colorValue : colorTo.colorValue,
               check : true
            })
         }
         setColorsArray({
            colors: colorsArrayBis
         });
   };

   const delete1 = (index) => {
      const colorsArrayBis = colorsArray.colors;
      if (colorsArrayBis.length - 1 >=2){
         colorsArrayBis.splice(index,1);
         setColorsArray({
            colors: colorsArrayBis
         });
      }
   }

   const add1 = () => {
      const colorsArrayBis = colorsArray.colors;
      const randomColor = (Math.floor(Math.random()*0xFFFFFF)).toString(16).toUpperCase();

      if (colorsArrayBis.length < 6){
         colorsArrayBis.splice(colorsArrayBis.length,0, 
            {
                  colorValue: '#'+randomColor,
                  check: false,
            });
         setColorsArray({
            colors: colorsArrayBis
         });
      }
   }
  

  return(
    <section className='Home'>
       <Header />
       <Colors colorsArray={colorsArray.colors} setCheck={setCheck} deleteFunction={delete1} />
       <Footer colorsArray={colorsArray.colors} changeAll={changeAll} add1={add1} />
    </section>
 )
}
export default Home;