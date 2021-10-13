import React , { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { useHistory } from "react-router-dom";
import axios from 'axios'

const Movie = () => {

    let { id } = useParams();

	const [movie, setmovie] = useState({})
	const [dates, setdates] = useState([])
	const [date, setdate] = useState('')

	const [durations, setdurations] = useState([])
	const [duration, setduration] = useState('')

	//for movie details
	useEffect(()=>{
        
        axios.get('api/movie/show',{
            params: {
                id: id
              }
        })
        .then(res=>{
			setmovie(res.data[0])
			// console.log(res.data[0])
        })
		// axios.get('',)
    },[])

	//for fetching the dates 
	useEffect(() => {
		axios.get('api/movie/dates_for_schedule',{
            params: {
                movie_id: id
              }
        }).then(res=>{
			console.log(res.data)
			setdates(res.data)
			setdate(res.data[0])

			}
		)
		
	}, []);
	//for fetching the duration due to date
	useEffect(() => {
		console.log(date)
		axios.get('api/movie/durations_for_schedule',{
            params: {
                movie_id: id,
				date:date
              }
        }).then(res=>{
				console.log(res.data)
				setdurations(res.data)
				setduration(res.data[0])
			}
		)
		
		
	}, [date]);
    return (
        <div>
            <div className="hero sr-single-hero sr-single">
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				{/* <!-- <h1> movie listing - list</h1>
				<ul className="breadcumb">
					<li className="active"><a href="#">Home</a></li>
					<li> <span className="ion-ios-arrow-right"></span> movie listing</li>
				</ul> --> */}
			</div>
		</div>
	</div>
</div>
<div className="page-single movie-single movie_single">
	<div className="container">
		<div className="row ipad-width2">
			<div className="col-md-4 col-sm-12 col-xs-12">
				<div className="movie-img sticky-sb">
					<img src={'http://localhost:5000/'+movie.image} alt=""/>
					<div className="movie-btn">	
						<div className="btn-transform transform-vertical red">
							<div><a href="#" className="item item-1 redbtn"> <i className="ion-play"></i> Watch Trailer</a></div>
							<div><a href="https://www.youtube.com/embed/o-0hcF97wy0" className="item item-2 redbtn fancybox-media hvr-grow"><i className="ion-play"></i></a></div>
						</div>
						<div className="btn-transform transform-vertical">
							<div><Link to={'/movie/'+id+'/duration/'+duration+'/date/'+date+'/hall_reservations'} className="item item-1 yellowbtn"> <i className="ion-card"></i> Buy ticket</Link></div>
							<div><Link to={'/movie/'+id+'/duration/'+duration+'/date/'+date+'/hall_reservations'} className="item item-2 yellowbtn"><i className="ion-card"></i></Link></div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-md-8 col-sm-12 col-xs-12">
				<div className="movie-single-ct main-content">
					<h1 className="bd-hd">{movie.movie_name}</h1>
					<div className="social-btn">
						<a href="#" className="parent-btn"><i className="ion-heart"></i> Add to Favorite</a>
						<div className="hover-bnt">
							<a href="#" className="parent-btn"><i className="ion-android-share-alt"></i>share</a>
							<div className="hvr-item">
								<a href="#" className="hvr-grow"><i className="ion-social-facebook"></i></a>
								<a href="#" className="hvr-grow"><i className="ion-social-twitter"></i></a>
								<a href="#" className="hvr-grow"><i className="ion-social-googleplus"></i></a>
								<a href="#" className="hvr-grow"><i className="ion-social-youtube"></i></a>
							</div>
						</div>		
					</div>
					<div className="movie-rate">
						<div className="rate">
							<i className="ion-android-star"></i>
							<p><span>{movie.rating}</span> /10<br/>
								<span className="rv">56 Reviews</span>
							</p>
						</div>
						<div className="rate-star">
							<p>Rate This Movie:  </p>
							<i className="ion-ios-star"></i>
							<i className="ion-ios-star"></i>
							<i className="ion-ios-star"></i>
							<i className="ion-ios-star"></i>
							<i className="ion-ios-star"></i>
							<i className="ion-ios-star"></i>
							<i className="ion-ios-star"></i>
							<i className="ion-ios-star"></i>
							<i className="ion-ios-star-outline"></i>
						</div>
					</div>
					<div className="movie-tabs">
						<div className="tabs">
							<ul className="tab-links tabs-mv tabs-series">
								<li className="active"><a href="#overview">Overview</a></li>
								                     
							</ul>
						    <div className="tab-content">
						        <div id="overview" className="tab active">
						            <div className="row">
						            	<div className="col-md-8 col-sm-12 col-xs-12">
						            		<div className="title-hd-sm">
												<h4>Please choose date and time</h4>
												{/* <a href="#" className="time">View All Seasons <i className="ion-ios-arrow-right"></i></a> */}
											</div>
											<div>

											<div class="form-group">
												<label for="exampleFormControlSelect1" style={{color:'#fff'}}>Select Date</label>
												<select class="form-control" id="exampleFormControlSelect1" onChange={(e)=>{setdate(e.target.value)}}>
													{dates.map(date=><option>{date}</option>)}
												</select>
											</div>
											<div class="form-group">
												<label for="exampleFormControlSelect1" style={{color:'#fff'}}>Select Duration Time</label>
												<select class="form-control" id="exampleFormControlSelect1">
													{durations.map(duration=><option>{duration}</option>)}
												</select>
											</div>
											</div>
										</div>
						            </div>
						        </div>
						        </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default Movie;