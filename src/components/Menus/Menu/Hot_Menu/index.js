import React from "react"
import Name from './images/Name.png'
import './style.css'

function HotMenu() {
  return (
    <div className="App">

      <section className="firstMenu">
        <div className="header">
          <img className="sectionName" src={Name} />
        </div>
        <div className="card1">
          <p className="pName">Классика</p>
          <div >
            <div className="inSection">
              <p>Экспрессо</p>
              <p>80/100</p>
            </div>
            <div className="inSection">
              <p>Американо</p>
              <p>100/120</p>
            </div>
            <div className="inSection">
              <p>Капучино</p>
              <p>120/140</p>
            </div>
            <div className="inSection">
              <p>Латте</p>
              <p>120/140</p>
            </div>
            <div className="inSection">
              <p>Флет Уойт</p>
              <p>140/180</p>
            </div>
            <div className="inSection">
              <p>Мокко</p>
              <p>130/170 </p>
            </div>
            <div className="inSection">
              <p>Горячий шоколад</p>
              <p>120/140 </p>
            </div>
            <div className="inSection">
              <p>Каккао</p>
              <p>100/120 </p>
            </div>
          </div>
        </div>
        <div className="card2">
          <p className="pName">Новинки</p>
          <div >
            <div className="inSection">
              <p>Альтернативное молоко</p>
            </div>
            <div className="inSection">
              <p>Капучино миндаль/кокос/соя</p>
              <p>190</p>
            </div>
            <div className="inSection">
              <p>Латте миндаль/кокос/соя</p>
              <p>190</p>
            </div>
            <div className="inSection">
              <p>Латтк мал. миндаль/кокос/соя</p>
              <p>170</p>
            </div>
            <div className="inSection">
              <p>Протеин шоколад/клубника</p>
            </div>
          </div>
        </div>
        <div className="thirdFourth">
          <div className="card3">
            <p className="pName">Авторские напитки</p>
            <div >
              <div className="inSection">
                <p>Латте Орео</p>
                <p>160</p>
              </div>
              <div className="inSection">
                <p>Латте Баунти</p>
                <p>160</p>
              </div>
              <div className="inSection">
                <p>Латте сол. карамель</p>
                <p>160</p>
              </div>
              <div className="inSection">
                <p>Капучино Сникерс</p>
                <p>160</p>
              </div>
              <div className="inSection">
                <p>Капучино леной орех</p>
                <p>160</p>
              </div>
              <div className="inSection">
                <p>Капучино Тирамису</p>
                <p>160 </p>
              </div>
              <div className="inSection">
                <p>Раф ванильный</p>
                <p>180 </p>
              </div>
              <div className="inSection">
                <p>Раф цитрусовый</p>
                <p>180 </p>
              </div>
              <div className="inSection">
                <p>Раф халва</p>
                <p>180 </p>
              </div>
            </div>
          </div>
          <div className="card4">
            <p className="pName">Чаи</p>
            <div >
              <div className="inSection">
                <p>Чай с имбирем, лимоном</p>
                <p>90</p>
              </div>
              <div className="inSection">
                <p>Облепиховый</p>
                <p>99</p>
              </div>
              <div className="inSection">
                <p>Лесные ягоды</p>
                <p>99</p>
              </div>
              <div className="inSection">
                <p>Молочный улун</p>
                <p>90</p>
              </div>
              <div className="inSection">
                <p>Каркаде</p>
                <p>50</p>
              </div>
              <div className="inSection">
                <p>Жасмин</p>
                <p>50</p>
              </div>
              <div className="inSection">
                <p>Черный/зеленый</p>
                <p>50</p>
              </div>
            </div>
          </div>
        </div>


      </section>
    </div>

  );
}

export default HotMenu;
