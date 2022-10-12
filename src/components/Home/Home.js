import React from 'react';
import Colors from '../Colors/Colors';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.scss';


function Home() {


  return(
    <section className='Home'>
       <Header />
       <Colors />
       <Footer />
    </section>
 )
}
export default Home;