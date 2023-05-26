import React, {useEffect, useState} from 'react';
import api_url from '../api_url';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [peoples, setPeoples] = useState([]);
    const [pages, setPages] = useState([]);
    const [previous, setPrevious] = useState({});
    const [next, setNext] = useState({});
    useEffect(() => {
        console.log(api_url);
        axios.get(api_url + `/people`)
            .then(response => {
                console.log(response.data);
                setPeoples(response.data.results);
                let pageNumbers = [];
                for (let i = 1; i <= Math.ceil(response.data.count / 10); i++) {
                    pageNumbers.push({
                        number: i
                    });
                }
                setPages(pageNumbers);
            })
            .catch((error) => {
                console.log('Error en el servidor');
            })
    }, [])

    const goToPage = (page) => {
        axios.get(api_url + `/people/?page=${page.number}`)
            .then(response => {
                console.log(response.data);
                setPeoples(response.data.results);
            })
            .catch((error) => {
                console.log('Error en el servidor');
            })
    }
  return (
    <div className='container'>
        <div className="hero mb-5">
            <input type="text" className="form-control" />
        </div>
        <div className="row">
            {
                peoples.map((item, index) => 
                    <div key={index} className="col-md-3 cursor-pointer">
                        <div className="card" style={{'marginBottom': '10px', 'padding': '15px'}}>
                            <h5>{item.name}</h5>
                            <a class="btn btn-dark btn-sm" href="#">Ver</a>
                        </div>
                    </div>
                )
            }
        </div>
        <div className="row text-center margin-auto">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                {
                    pages.map((item, index) => 
                        <li class="page-item" key={index}><a class="page-link" onClick={() => goToPage(item)} href="#">{item.number}</a></li>
                    )
                }
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
        </div>
    </div>
  )
}

export default Home