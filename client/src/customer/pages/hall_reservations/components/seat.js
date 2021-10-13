import React , { useEffect,useState } from 'react';

const Seat = (props) => {
    const style={
        seat:{
            position: 'relative',
            /* background: #d61818,
            background: #fff, */
			height: '25px',
			width:  '30px',
            borderRadius: '2px'
        },
        seat_after:{
            top:'25px',            
			content: "",
			left: '5px',
			position: 'absolute',            
            // background: '#fff', 
            background: 'inherit',
			height: '4px',
			width:	'20px',
			borderBottomLeftRadius: '2px',
            borderBottomRightRadius: '2px',
        },
        mrg:{
            margin:'5px'
        },
        taken_seat:{
            background: '#d61818'

        },
        empty_seat:{
            background: '#fff'
        },
        selected_seat:{
            background: '#ff7e41'
        }
    }
    const [seat_status_style, setseat_status_style] = useState(style.empty_seat)
    const [is_taken, setis_taken] = useState(false)
    const [is_selected, setis_selected] = useState(false)

    useEffect(() => {
    //    console.log(props.taken_seats)
    
    }, [is_selected]);

    //to check if this seat is taken
    useEffect(() => {
        // console.log(is_selected)
        setis_selected(false)
        props.remove_selected_seat(props.seat_number)
        let is_this_seat_taken=false
        props.taken_seats.forEach(single_taken_seat => {
            if(single_taken_seat===props.seat_number){
                // console.log(props.taken_seats)
                is_this_seat_taken= true
            }
        });
        // console.log(is_this_seat_taken)
        setis_taken(is_this_seat_taken)
        
     }, [props.taken_seats]);

    //use effect for the seat color depnding on its states
    useEffect(()=>{
        if(is_taken){
            setseat_status_style(style.taken_seat)
        }else{
            if(is_selected){
                setseat_status_style(style.selected_seat)
            }
            else if(!is_selected){
                setseat_status_style(style.empty_seat)
            }
        }
    },[is_selected,is_taken])


    const handel_seat_click=()=>{

        if(!is_taken){
            if(!is_selected){
                // setseat_status_style(style.taken_seat)
                props.add_selected_seat(props.seat_number)

            }
            else if(is_selected){
                // setseat_status_style(style.empty_seat)
                props.remove_selected_seat(props.seat_number)

            }
            setis_selected(!is_selected)
        }
    }
    return (
        <div style={{padding:'5px',margin:'5px'}}>
            <div >
                <div >
                    <div style={{...style.seat,...seat_status_style}} onClick={handel_seat_click}>
                        <div style={style.seat_after}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seat;