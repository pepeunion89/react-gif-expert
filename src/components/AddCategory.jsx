import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInput = ({target})=>{
        setInputValue(target.value);
    }

    const onSubmitForm = (event)=>{
      
      event.preventDefault();

      if(inputValue.trim().length <= 1) return;
        
      onNewCategory(inputValue.trim());
      //setCategorys( categories=> [inputValue, ...categories]);        

      setInputValue('');


    }


  return (
    <div>
        <form onSubmit={(event)=>{onSubmitForm(event)}}>
            <input      type="text" 
                        placeholder="Buscar gifs..." 
                        value={inputValue}
                        onChange={onInput}/>
        </form>
    </div>
  )
}

