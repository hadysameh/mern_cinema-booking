import React , { useEffect,useState,useLayoutEffect } from 'react';
import Seat from './components/seat'
import Hall_btn from './components/hall_btn'

import { useParams } from 'react-router';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios' 
import { io } from "socket.io-client";


const Hall_reservations = () => {
    let {movie_id}=useParams()
    let {duration}=useParams()
    let {date}=useParams()

    let style={
        screen:{
            width:'400px' ,
            /* border: 10px, */
            borderStyle: 'solid',
            borderTopWidth: '7px',
            borderColor:'rgb(57, 45, 209)',
            borderTopLeftRadius: '50%',
            borderTopRightRadius: '50%',
            margin:'30px',
            textAlign: 'center',
            color:'#fff',
            paddingTop: '7px',
            

        },
        
    }

    let seat_chararcters = ['a','b','c','d','e','f','g','h','i','j']
    let seat_numbers = [1,2,3,4,5,6,7,8,9,10]
    const [selected_seats, setselected_seats] = useState([])
    const [taken_seats, settaken_seats] = useState([])

    const [hall, sethall] = useState('')
    const [halls, sethalls] = useState([])
    const [amount, setamount] = useState(0)
    
    //for seat purchase notification
    useEffect(() => {
        const socket = io(process.env.REACT_APP_base_server_url);
        let event_name=movie_id+'_'+duration+'_'+date+'_'+hall
        // console.log(event_name)
        socket.on(event_name, (data) => {
            // console.log(socket.id); // x8WIv7-mJelg7on_ALbx
            console.log(event_name)
            console.log(data)
            settaken_seats([...taken_seats,...data.taken_seats])
            setamount(0)
            // console.log(taken_seats)
            // settaken_seats([...taken_seats,data.seat_number])
            // console.log([...taken_seats,data.seat_number])

        });
        return () => socket.disconnect();
    }, [hall,taken_seats]);
    //for updating the price amount
    useEffect(() => {
        setamount(selected_seats.length*20)
    }, [selected_seats]);

    //for fetching halls due to schedule
    useEffect(() => {
        // setamount(selected_seats.length*20)
        // console.log('fetch_halls_for_schedule')
        fetch_halls_for_schedule()
    }, []);

    //for fetching seats due to hall
    useEffect(() => {
        // setamount(selected_seats.length*20)
        
        settaken_seats([])
        setselected_seats([])
        fetch_seats_for_hall()
        // console.log(taken_seats)
    }, [hall]);


    //middelware in the back end was fixded
    const fetch_halls_for_schedule=()=>{
        axios.get('/api/schedule/get_halls',{
            params: {
                movie_id,
                duration,
                date
                // page_number: page_number
              }
        })
        .then((res)=>{
            console.log(res)
            sethalls(res.data)
            sethall(res.data[0].hall_name)
        })
    }

    //middelware in the back end was fixded
    const fetch_seats_for_hall=()=>{

        axios.get('/api/purchase/get_purchased_seats',{
            params: {
                movie_id,
                hall,
                duration,
                date
              }
        })
        .then((res)=>{
            // console.log(res)
            let mapped_purchased_seats=res.data.map(purchased_seat=>purchased_seat.seat_number)
            // console.log(mapped_purchased_seats)
            settaken_seats(mapped_purchased_seats)
            // sethalls(res.data)
            // sethall(res.data[0].hall_name)
        })
    }

    const  add_selected_seat = (seat)=>{
        setselected_seats([...selected_seats,seat])
        // console.log(selected_seats)
        
    }
    const  remove_selected_seat = (seat)=>{
        // setselected_seats([...selected_seats,seat])
        setselected_seats(selected_seats.filter(selected_seat=>selected_seat !==seat))
        // console.log(selected_seats)
    }

    //middelware in the back end was fixded
    const onApprove=(data,actions)=>{
        axios.post('/api/purchase/store/',{
            movie_id,
            duration,
            date,
            selected_seats,
            hall
        }).then(res=>{
            setselected_seats([])
        })
    }
    return (
        
        <div style={{backgroundColor:'#000',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <div style={{display:'flex',justifyContent:'center',}}>
                {halls.map(hall_data=>(
                    <Hall_btn hall={hall} key={hall_data.hall_name} hall_name={hall_data.hall_name} fetch_seats_for_hall={fetch_seats_for_hall} sethall={sethall} />
                ))}
 
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div style={style.screen}>
                    SCREEN
                </div>
            </div>
            {
                seat_chararcters.map(char=>(
                    <div key={char} style={{display:'flex',justifyContent:'center'}}>{
                        seat_numbers.map(number=>
                            <Seat seat_number={char+number} key={char+number}  taken_seats={taken_seats} add_selected_seat={add_selected_seat} remove_selected_seat={remove_selected_seat}/>
                    )}
                    </div>
                ))
            }
            {/* <Seat seat_number={'a1'} taken_seats={['a1','a2']} add_selected_seat={add_selected_seat} remove_selected_seat={remove_selected_seat}/> */}
            <br/>
            <div style={{display:'flex',justifyContent:'center',color:'#fff'}}>
                <div style={{display:'flex',justifyContent:'space-between',width:'30%'}}>

                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <div style={{width:'10px',height:'10px',background:'#fff' ,borderRadius:'50%'}}>

                        </div>
                        <div>
                            Empty
                        </div>

                        
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <div style={{width:'10px',height:'10px',background:'#ff7e41' ,borderRadius:'50%'}}>

                        </div>

                        <div>
                            Selected
                        </div>

                        
                    </div>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <div style={{width:'10px',height:'10px',background:'#d61818' ,borderRadius:'50%'}}>
                        </div>
                        <div>
                            Taken
                        </div>

                    </div>
                </div>
                
            </div>
            
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'#fff'}}>
                <div style={{fontSize:'30px',height:'35px',color:"#d61818",marginTop:'10px'}}>price is {amount}</div>
                <div style={{width:'30%'}}>
                    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_paypal_client_id  }}>
                        <PayPalButtons
                            forceReRender={[selected_seats,amount]}
                            style={{layout: "horizontal" }}
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: amount,
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={()=>{
                                onApprove()
                            }}
                        />
                        </PayPalScriptProvider>
                </div>
                
                    </div>
        </div>
    );
};

export default Hall_reservations;