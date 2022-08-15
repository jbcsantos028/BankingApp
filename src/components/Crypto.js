import React from 'react';
import './Crypto.css';

const Crypto = props => {
  
  const handleCoinChange = e  => {
    props.onCoinSearch(e.target.value);
  }

  const filteredCoins = props.coins.filter(coin =>
    coin.name.toLowerCase().includes(props.search.toLowerCase())
    )

  return (
    <div className='coin-app'>
      <div className=".coin-search">
        <h1 className="coin-text">Crypto Price Tracker</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleCoinChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <div key={coin.id} className='coin-container'>
            <div className='coin-row'>
              <div className='coin'>
                <img src={coin.image} alt='crypto' />
                <h1>{coin.name}</h1>
                <p className='coin-symbol'>{coin.symbol}</p>
              </div>
              <div className="coin-data">
                <p className="coin-price">&#8369;{coin.current_price}</p>
                <p className="coin-volume">&#8369;{coin.total_volume.toLocaleString()}</p>
                {coin.price_change_percentage_24h < 0 ? (
                  <p className="coin-percent red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                ) : (<p className="coin-percent green">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                )}
                <p className="coin-marketcap">
                  Mkt Cap: &#8369;{coin.market_cap.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Crypto