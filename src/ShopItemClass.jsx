import { Component } from 'react';
import PropTypes from 'prop-types'; // Импорт PropTypes

class ShopItemClass extends Component {
  render() {
    const { brand, title, description, descriptionFull, price, currency } = this.props.item;

    return (
      <div className="main-content">
        <h2>{brand}</h2>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className="description">{descriptionFull}</div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{currency}{price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

// Определение PropTypes для компонента
ShopItemClass.propTypes = {
    item: PropTypes.shape({
      brand: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      descriptionFull: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  };

export default ShopItemClass;
