import { useEffect, useState } from 'react';
import ItemInput from '../components/input';
import CardItems from '../components/list-items';

export default function Home({ data }) {
  const [inputItem, setInputItem] = useState('Type Here');
  const [items, setItems] = useState(data);

  const handleAddition = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/addToDo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputItem })
    });

    setItems([...items, {item: inputItem}])
  }

  const handleCompletedTask = async (index) => {
    const response = await fetch('http://localhost:3000/api/deleteToDo', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ index })
    })

    setItems(items.filter((item) => item.id !== index))
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <h1 className='text-3xl font-black mb-10'>
          Welcome to George's Todo List
        </h1>
        <ItemInput inputItem={inputItem} handleAddition={handleAddition} setInputItem={setInputItem} />
        <CardItems items={items} handleCompletedTask={handleCompletedTask} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/todo');
  const data = await response.json();

  return {
    props: { data }
  }
}
