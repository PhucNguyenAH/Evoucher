import React, { useState, useEffect } from 'react';
import { MDBBtn } from 'mdbreact';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../_actions/user_actions';
import { Link } from 'react-router-dom';

function ProductItem({ match }) {
	const [productItem, setProductItem] = useState();
	const [quantity, setQuantity] = useState(0);
	const [price, setPrice] = useState();
	const [realPrice, setRealPrice] = useState();
	const products = useSelector((state) => state.user.Carts);

	const dispatch = useDispatch();

	useEffect(() => {
		const getResult = async () => {
			const result = await axios.post(`/api/product/${match.params.id}`);

			console.log(result.data)
			const { description, price, category, _id, image } = result.data.product[0];

			setProductItem({ description, price, category, _id, image });
			setPrice(price);
			setRealPrice(price);
		};

		getResult();
	}, []);

	const handleChange = (e) => {
		setQuantity(e.currentTarget.value);
		if (e.currentTarget.value > 0) setRealPrice(e.currentTarget.value * price);
		setProductItem({ ...productItem, price: e.currentTarget.value * price, quantity: e.currentTarget.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		try {
			dispatch(addToCart(productItem));
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<main className='mt-5 pt-4'>
			<div className='container dark-grey-text mt-5'>
				<div className='row wow fadeIn'>
					<div className='col-md-6 mb-4'>
						<img
							src={`http://34.87.163.187:5000/${productItem?.image[0]}`}
							className='img-fluid'
							alt=''
						/>
					</div>

					<div className='col-md-6 mb-4'>
						<div className='p-4'>
							<div className='mb-3'>
								<Link to='/'>
									<span className='badge purple mr-1'>{productItem?.category}</span>
								</Link>
							</div>

							<p className='lead'>
								<span>{realPrice}$</span>
							</p>

							<p className='lead font-weight-bold'>Description</p>

							<p>{productItem?.description}</p>

							<form onSubmit={handleSubmit}>
								<input
									type='number'
									value={quantity}
									aria-label='Search'
									className='form-control'
									style={{ width: '100px' }}
									onChange={handleChange}
								/>
								<button className='btn btn-primary' type='submit' style={{ margin: '0px' }}>
									Add to cart
									<i className='fas fa-shopping-cart ml-1'></i>
								</button>
							</form>
						</div>
					</div>
				</div>

				<hr />
			</div>
		</main>
	);
}

export default ProductItem;