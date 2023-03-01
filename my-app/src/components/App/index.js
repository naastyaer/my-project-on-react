import { useState } from 'react';
import 'components/App/App.css';
import Header from 'components/Header';
<<<<<<< HEAD
import Student from 'components/Student';
import Footer from 'components/Footer';
import StudentForm from 'components/StudentForm';
=======
import Product from 'components/Product';
>>>>>>> 9e0184ebaf845d50d4f8db43a58d7179c6c80958
function App() {
    
    const [products, setProducts] = useState( [
            {
                id: 1,
                name: "Капуста",
                price: "29р",
                isAdded: true
                
                
            },
            {
                id: 2,
                name: 'Огурцы',
                price: "129р",
                isAdded: false
                
                
            },
            {
                id: 3,
                name:'Томаты',
                price: "100р",
                isAdded: false
                
                
            },
            {
                id: 4,
                name: "Авокадо",
                price: "229р",
                isAdded: false
                
                
            }
<<<<<<< HEAD
    ])  
    const addStudent = (student) =>{
        setStudents([...students,student])
    }
    const deleteStudent = (id) => {
        const filteredstudents = students.filter(student => student.id !== id)
        
        setStudents (filteredstudents)
=======
    ])   
    const filteredProducts = []
    const deleteProduct = (id) => {
        const filteredProducts  = products.filter(product => product.id !== id)
        /*console.log (filteredProducts)*/
        setProducts (filteredProducts)
>>>>>>> 9e0184ebaf845d50d4f8db43a58d7179c6c80958
    }
    const changeIsAdded = (id) => { 
        const changedIsAdded =  products.find(product => product.id === id)
        const index = products.indexOf(changedIsAdded)
        /*console.log(id)*/
        
        if (changedIsAdded.isAdded === true) {
            changedIsAdded.isAdded = false
        } else {
            changedIsAdded.isAdded = true
        }
        const newIsAdded = [...products]
        const elemIsAdded = newIsAdded.splice(index,1,changedIsAdded);
        setProducts (newIsAdded)
    }

    return(
        <div>
            <Header/>
<<<<<<< HEAD
            <div className="max-w-screen-lg mx-auto min-h-screen">
                
                <StudentForm addStudent = {addStudent}/>
                {students.length ===0 && (
                    <div className="mt-20 text-center text-7xl text-gray-400 font-thin">Нет студентов</div>
                )}
             
                {students.length > 0 && students.map( (student) => {
                return (<Student key={student.id} student={student} deleteStudent={deleteStudent}/>)
=======
            <div className="max-w-screen-lg mx-auto min-h-screen ">
            <div className='grid grid-cols-3 gap-3'>
                {products.length ===0 && (
                        <div className="mt-20 text-center text-7xl text-gray-400 font-thin">Нет продуктов</div>
                    )}
                    
                {products.length > 0 && products.map( (product) => {
                return (<Product key={product.name+product.id} product={product} deleteProduct={deleteProduct} changeIsAdded={changeIsAdded}  />)
>>>>>>> 9e0184ebaf845d50d4f8db43a58d7179c6c80958
                })}
            </div>
                    
                </div>
        </div>
        
    )       
}
export default App
