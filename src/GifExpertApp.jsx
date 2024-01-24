import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExtertApp = ()=>{

const [categories, setCategorys] = useState([]);

const onAddCategory = (newCategory)=>{

    let flag = 0;

    categories.map( (category) => {

        if(category.toUpperCase()===newCategory.toUpperCase()){

            console.log('Existe');
            
            flag=1;

        } 

    });    

    if(flag===0){
        //console.log(newCategory);
        setCategorys([...categories, newCategory]);
    }
   

}


    return(
        <>
            <h1>Holis</h1>

            <AddCategory 
                        /*setCategorys={ setCategorys }*/ 
                        onNewCategory={ onAddCategory }
            
            />
            <button  onClick={onAddCategory}>Agregar</button>
            
            {
                categories.map(category => 
                    <GifGrid key={category} category={category}/>
                )
            }
            

         
        </>
    )

}