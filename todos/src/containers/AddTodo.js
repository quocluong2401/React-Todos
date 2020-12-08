import React, {useRef} from 'react'
import { connect } from 'react-redux'
import { addPost} from '../actions'

const Addtodo = ({dispatch}) =>{

    const idInput = useRef(null);
    const titleInput = useRef(null);

    
    return (
        <div>
            <form onSubmit ={e => {
                e.preventDefault() 
                if(idInput.current.value  === null|| titleInput.current.value === null){
                    return
                }
                const data = {
                    id: idInput.current.value,
                    title: titleInput.current.value
                }
                dispatch(addPost({data}))

            }}>
             <input  
                placeholder="Id"
                ref={idInput}
                type="text"/>
             <input  
             placeholder="Title"
             ref={titleInput}
             type="text"/>
             <button type="submit">Post</button>   
            </form>
        </div>
    )
}
export default connect()(Addtodo)
