import React, { useState } from 'react'
import todo from '../images/logo.png'

export const Todo = () => {
    const [item, setItem] = useState('');
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setEditItem] = useState(null);

    const addItem = () => {
        if (!item) {

        }
        else if (item && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: item }
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);
            setItem('');
            setEditItem(null);


        } else {
            const allInputData = { id: new Date().getTime().toString(), name: item }
            setItems([...items, allInputData]);
            setItem("");
        }

    }

    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id

        });
        setToggleSubmit(false);
        setItem(newEditItem.name);
        setEditItem(id);
        console.log(newEditItem);

    }

    const deleteItem = (index) => {

        const updateditems = items.filter((elem) => {
            return index !== elem.id;
        });
        setItems(updateditems);
    }

    const removeAll = () => {
        setItems([]);
    }

    return (
        <div>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption>Add Your To Do's Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="✍️ Add Items..." value={item} onChange={(e) => { setItem(e.target.value) }}
                        />
                        {
                            toggleSubmit ? <i className="fa fa-plus add-btn" title="add item" onClick={addItem}></i> :
                                <i className="fa fa-edit add-btn" title="Update item" onClick={addItem}></i>

                        }

                    </div>
                    <div className="showItems">
                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">
                                            <i className="fas fa-edit  add-btn" title="editItem" onClick={() => editItem(elem.id)}></i>
                                            <i className="fas fa-trash-alt add-btn" title="deleteItem" onClick={() => deleteItem(elem.id)}></i>
                                        </div>
                                    </div>

                                )
                            })
                        }

                        <div className="showItems">
                            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo;
