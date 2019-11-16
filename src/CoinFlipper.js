import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props){
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
        side: "tura",
        donuyor: false,
        atisSayisi : 0,
        atisTura: 0,
        atisYazi:0
    }
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    this.setState({donuyor: true});
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({donuyor: false}), 500);
    // Butona basıldıkça "side" props'umuzu bir random değişken vasıtsıyla değiştiriyoruz.
    if (Math.random()>0.5) {
      this.setState({side: "yazi"});
      this.setState({atisYazi: this.state.atisYazi+1});
    } else {
      this.setState({side:"tura",
                    atisTura: this.state.atisTura+1})
    }
    // Butona basıldıkça "atisSayisi" props'umuzu bir artırıyoruz.
    //this.state.atisSayisi+=1 => bu yanlış.
    this.setState({atisSayisi:this.state.atisSayisi+1})
    // atisSayisi 5 olduğunda sıfırlanır.
    if (this.state.atisSayisi === 5) {
      this.setState({atisSayisi:0,
      atisTura:0,
      atisYazi:0})
    }
	};

  render(){
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} />
        <button onClick={this.handleClick} >At!</button>
        <p className="text-primary">

            Toplam
            <strong> {this.state.atisSayisi} </strong>
            atıştan
            <strong> {this.state.atisTura} </strong>
             tura
            <strong> {this.state.atisYazi} </strong>
             yazı geldi.</p>
      </div>
	  )
  }
}

export default CoinFlipper;