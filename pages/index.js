import { useEffect, useState } from 'react';
import ItemInput from '../components/input';
import CardItems from '../components/list-items';

export default function Home() {
  const [inputItem, setInputItem] = useState('Type Here');
  const [items, setItems] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleAddition = async () => {
    const response = await fetch('http://localhost:3000/api/addToDo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputItem })
    });

    setRefresh(true);
  }

  const handleCompletedTask = async (index) => {
    const response = await fetch('http://localhost:3000/api/deleteToDo', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ index })
    })

    setRefresh(true);
  }

  const handleFetch = async () => {
    const response = await fetch('http://localhost:3000/api/todo');
    const data = await response.json();

    return data
  }

  useEffect(() => {
    handleFetch().then(data => {
      setItems(data);
      setRefresh(false);
    });
  }, [refresh])

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <h1 className='text-3xl font-black mb-10'>
          Welcome to George's Todo list
        </h1>
        <ItemInput inputItem={inputItem} handleAddition={handleAddition} setInputItem={setInputItem} />
        <CardItems items={items} handleCompletedTask={handleCompletedTask} />
      </div>
    </div>
  );
}
