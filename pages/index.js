import { useState } from 'react';

export default function Home({ listItems }) {
  const [inputItem, setInputItem] = useState('Type Here');

  const handleAddition = async () => {
    const response = await fetch('http://localhost:3000/api/addToDo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputItem })
    });

    if (response.status != 200) {
      throw new Error("Failed to add new item")
    }
  }

  const handleCompletedTask = async (index) => {
    const response = await fetch('http://localhost:3000/api/deleteToDo', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ index })
    })

    if (response.status == 200) {
      
    }
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <h1 className='text-3xl font-black mb-10'>
          Welcome to George's Todo list
        </h1>
        <form>
          <input
            type='text'
            placeholder={inputItem}
            className='input w-full max-w-xs'
            onChange={(e) => setInputItem(e.target.value)}
          />
          <button className='btn btn-primary' onClick={handleAddition}>Add Item</button>
        </form>
        <div className='grid grid-cols-4 gap-4 px-4 mt-10'>
          {listItems.map((listItem, i) => {
            return (
            <div className='card w-70 bg-base-100 shadow-xl' key={i}>
              <div className='card-body'>
                <h2 className='card-title'>List Item #{i + 1}</h2>
                <p className='text-left'>{listItem.item}</p>
                <div className='card-actions justify-end'>
                  <button className='btn btn-primary' onClick={() => handleCompletedTask(listItem.id)}>Completed</button>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/todo');
  const data = await response.json();
  return {
    props: {
      listItems: data,
    },
  };
}
