import React, {Component} from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import {formatPrice} from '../../utils/format';
import api from '../../services/api';


class Home extends Component {
    state = {
         products:[],
    };

    async componentDidMount(){
        const res = await api.get('products');
        const data = res.data.map(product => ({
            ...product,
            //para o render não ficar atualizando múltiplas vezes, eu já coloco direto o preço formatado no objeto do produto.
            priceFormatted: formatPrice( product.price),
        }))


        this.setState({products: data});

    }


    render() {
        const {products} = this.state;
        return (
          <ProductList>
              {products.map(product =>(
                <li key = {product.id}>
                <img
                src = {product.image}
                alt={product.title}
                />
                <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
                <button type="button">
                <div>
                    <MdAddShoppingCart size={16} color="#fff" />
                    {' '}
                    3
                </div>
                <span>adicionar ao carrinho</span>
                </button>
                </li>
              ))}
          </ProductList>
        );
    }
}

export default Home;

