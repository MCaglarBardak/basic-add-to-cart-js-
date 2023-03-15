import { useState } from 'react';
import './App.css';
import Card from './components/card/Card';

function App() {

  const [urun, setUrun] = useState([{
    id: 1,
    title: "Sefiller",
    image: "https://img.kitapyurdu.com/v1/getImage/fn:130842/wh:true/wi:800",
    info: "Victor Hugo",
    adet: 1

  },
  {
    id: 2,
    title: "Savaş ve Barış",
    image: "https://cdn.kitapsec.com/image/urun/2018/12/10/s1544452166.jpg",
    info: "Tolstoy",
    adet: 1

  },
  {
    id: 3,
    title: "Suç ve Ceza",
    image: "https://kbimages1-a.akamaihd.net/34e6f747-43ec-4e20-801b-8e451fbf9958/353/569/90/False/suc-ve-ceza-4.jpg",
    info: "Dostoyevski",
    adet: 1

  },
  {
    id: 4,
    title: "Dönüşüm",
    image: "https://i.dr.com.tr/cache/600x600-0/originals/0000000561966-1.jpg",
    info: "Franz Kafka",
    adet: 1

  }])

  const [basket, setBasket] = useState([]);
  return (
    <div className="App">
      <h1 className='main_title'>React Sepet Uygulaması</h1>
      <div className='urunler'>
        {urun.map((eleman, index) => {
          return (<Card
            //burda karta tıkladığımızda basket'i açmasını ve dizi adında ki diziye her şeyi atmasını istedik.
            onClick={() => {
              const dizi = [...basket]
              if (dizi.findIndex((ind) => { //findIndex ile koşulu sağlayan dizi elemanının id'sini alıyoruz.
                return eleman.id === ind.id; // burda tıkladığım değerin id'si elemanın id'sine eşit olup olmadığını kontrol ederiz.
              }) === -1) {
                dizi.push(eleman)// eğer elemana hiç tıklanmamışsa elemanı komple diziye ekledik.
                setBasket(dizi)// daha sonra dizi'nin içerisini set basket ile güncelledik.
              }
              else { //eğer elemana birden fazla tıklandıysa dizinin içinde gez (Gezdiklerimize "item" dedik) item id ile elemanın id'si eşitse ürünün adetini 1 kez arttır.
                dizi.map((item, index) => {
                  if (item.id === eleman.id) {
                    return (eleman.adet += 1)
                  }
                  setBasket(dizi); //setBasket ile bunu tekrar güncelle
                })
              }
            }}
            key={index} title={eleman.title} image={eleman.image} info={eleman.info} />)
        })}
      </div>
      <div className='sepet'>
        <h2>SEPET</h2>
        <ul className='sepet'>
          {basket.map((tiklananEleman, indx) => {
            return (<li>
              {tiklananEleman.title + "-------------" + tiklananEleman.info + "---" + "ADET: " + tiklananEleman.adet}
            </li>)
          })}
        </ul>
        <div>
          {
            basket.length > 0 ? <button //Eğer basket'in içerisinde ki değer 0 dan büyükse buton çıksın ve butona basıldığında içerisini silsin.
              onClick={() => {
                setBasket([]);
              }}
            >Sepeti Temizle</button> : <h3>Sepetinizde ürün bulunmamaktadır.</h3>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
