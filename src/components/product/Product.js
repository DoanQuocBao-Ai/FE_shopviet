import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'

export default function Product() {
    const [product,setProduct]=useState({
        name:"",
        price:"",
        sold:"",
        rate:""
    })
    const {id}=useParams();
    useEffect(()=>{
        loadProduct();
    },[]);
    const loadProduct=async()=>{
        const result=await axios.get(`http://localhost:8080/api/shopviet/Product/${id}`)
        setProduct(result.data)
    };
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2'>
                <h2 className='text-center m-4'>User Details </h2>
                <div className='card'>
                    <div className='card-header'>
                        Details of user id: 
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name: </b>
                                {product.name}
                            </li>

                            <li className='list-group-item'>
                                <b>UserName: </b>
                                {product.price}
                            </li>

                            <li className='list-group-item'>
                                <b>Email: </b>
                                {product.sold}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className='btn btn-primary my-2'to={"/"}>Back To Home</Link>
            </div>
        </div>
    </div>
  );
}
