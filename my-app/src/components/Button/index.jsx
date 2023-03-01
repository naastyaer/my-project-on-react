function Button ({title, handelClick, type}){
    
    return (
        <button  
            type = {type}
            onClick = { event => handelClick(event)} 
            className="ax-10 bg-blue-500 rounded-lg text-xl font-semibold text-white px-4 py-2 mt-3"> 
            {title} 
        </button>
    )
}
export default Button