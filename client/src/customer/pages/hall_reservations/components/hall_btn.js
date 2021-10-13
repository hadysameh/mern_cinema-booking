import React , { useEffect,useState } from 'react';

const Hall_btn = (props) => {
    let style= {
        hall_btn:{
                
            border:'none',
            color:'#fff',
            height:'40px',
            width:'60px',
            borderRadius:'3px',
            margin:'12px',
            background:'#0f2133',
            // background:'#d61818',
        },
        hall_btn_clicked:{
            background:'#d61818',
        }
        ,
        hall_btn_unclicked:{
            background:'#0f2133',
        }}

    const [btn_clicked_style, setbtn_clicked_style] = useState(style.hall_btn_unclicked)
    const handel_on_click=()=>{
        if(props.hall!==props.hall_name){
            // console.log(props.hall,props.hall_name)
            setbtn_clicked_style(style.hall_btn_clicked)
            props.sethall(props.hall_name)
            props.fetch_seats_for_hall()
        }
        
    }
    useEffect(()=>{
        // console.log('use effect is fired')
        if(props.hall==props.hall_name){
            setbtn_clicked_style(style.hall_btn_clicked)
        }
        else{
            setbtn_clicked_style(style.hall_btn_unclicked)
        }
        // console.log(props.hall)
    },[props.hall])
    return (
        <div>
            <button style={{...style.hall_btn,...btn_clicked_style}} onClick={handel_on_click}>
                    {props.hall_name}
            </button>
        </div>
    );
};

export default Hall_btn;